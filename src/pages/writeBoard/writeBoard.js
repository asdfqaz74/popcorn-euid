import {
  getNode,
  insertLast,
  getNodes,
  formattedDate,
  formattedTime,
} from '/src/lib/';
import gsap from 'gsap';
import pocketbase from 'pocketbase';
import { getStorage, setStorage } from '../../lib/utils';

const nextButton = getNode('.writeBoardSecond-next-button');
const backButton = getNode('.writeBoard-back-button');
const titleInput = getNode('.writeBoard-input');
const selectCategorySecondPage = getNodes('.writeBoardCategory');
const titleSecondPage = document.querySelector('.writeBoardSecond-title');
const peopleButton = getNodes('.writeBoardSecond-people-button');
const locationButton = getNode('.writeBoardSecond-location-button');
const categoryMenuNav = getNode('.writeBoard-category');
const selectGenderbuttonMenu = getNode('.selectGenderMenuContainer');

const pb = new pocketbase(`${import.meta.env.VITE_PB_URL}`);

/* -------------------------------------------------------------------------- */
/*                             랜더링 작성                             */
/* -------------------------------------------------------------------------- */

async function renderProduct(dataArray) {
  const [
    SR_location,
    activity,
    category,
    date,
    meetingLocation,
    gender,
    approve,
    headcount,
    age,
    title,
    time,
  ] = dataArray;

  const resultCategory = category.replace(/[^a-zA-Z가-힣0-9\s]/g, '').trim();
  const resultGender = gender
    ? gender.replace(/[^a-zA-Z가-힣0-9\s]/g, '').trim()
    : '누구나';

  const data = {
    SR_location: SR_location,
    activity: activity,
    category: resultCategory,
    date: date,
    meetingLocation: meetingLocation,
    gender: resultGender,
    approve: approve,
    headcount: headcount,
    age: age,
    title: title,
    time: time,
  };
  console.log(data);
  const record = await pb.collection('community').create(data);
  return record.id;
}

/* -------------------------------------------------------------------------- */

/**
 * 입력한 데이터 각 요소에서 받아와  dataArray 배열에 넣고, 화면이동
 * @param {*} event 다음 버튼 클릭 이벤트
 * @returns
 */
async function handleNext(event) {
  const text = getNode('.warningText');
  const screens = document.querySelectorAll('.w-screen');
  const inputValue = titleInput.value;
  const currentScreen = document.querySelector('.w-screen:not(.hidden)');
  const currentIndex = Array.from(screens).indexOf(currentScreen);
  const date = 'date';
  const time = 'time';

  event.preventDefault();

  const value = await getSeverUserId();
  console.log('value    :', value);
  const nowUserId = await checkedUserId(value);
  console.log('nowUserId   :', nowUserId);
  let result = warningText(inputValue, text);
  if (!result) return;

  const dataArray = [
    nowUserId,
    getDataActivity(),
    getDataCategory(),
    getDataDate(date),
    getDataMeetingLocation(),
    getDataGender(),
    getDataApprove(),
    getDataHeadcount(),
    getDataAge(),
    insertTitleSecondpage(titleSecondPage, inputValue),
    getDataDate(time),
  ];

  //writeBoard index=없음, writeBoard2 index=0, writeBoard3 index=1
  if (screens.length >= 2) {
    if (currentIndex >= 0 && currentIndex < screens.length - 1) {
      const nextScreen = screens[currentIndex + 1];
      currentScreen.classList.add('hidden');
      nextScreen.classList.remove('hidden');
    }

    if (currentIndex === 2) {
      moveBoardContentPage(dataArray, dataArray[0]);
    }
  }
}

/**
 * 현재 로그인한
 * @param {*} serverPhoneNumber 현제 로그인한 localStorage에 PhoneNumber 가져오기
 * @returns
 */
async function checkedUserId(serverPhoneNumber) {
  const key = 'phoneNumber';
  const localphoneNumber = await getStorage(key);

  const severValue = serverPhoneNumber.find((item) => {
    if (item.phoneNumber === localphoneNumber);
    return item.id;
  });
  // setStorage(key, severValue.id);
  return severValue.id;
}

async function getSeverUserId() {
  const records = await pb.collection('users').getFullList();
  return records;
}

function getDataApprove() {
  const input = document.getElementById('myCheckbox');
  const isToggled = input.checked;
  return isToggled;
}

function getDataAge() {
  const getDataAge = document.getElementById('ageAll');
  const text = getDataAge.value;
  return text;
}
function getDataGender() {
  const value = Array.from(getNodes('.selectGenderbuttonMenu'));
  let text = '';
  value.forEach((item) => {
    if (item.classList.contains('isClicked')) {
      text = item.textContent;
    }
  });
  return text;
}

function getDataDate(type) {
  if (type === 'date') {
    const date = document.getElementById('return-date');
    const value = date.value;
    const text = formattedDate(value);
    return text;
  }
  if (type === 'time') {
    const time = document.getElementById('timeInput');
    const value = time.value;
    const text = formattedTime(value);
    return text;
  }
}

function getDataMeetingLocation() {
  const locationValue = getNode('.locationValue');
  const text = locationValue.textContent;
  return text;
}

function getDataHeadcount() {
  const headcount = getNode('.people');
  const number = headcount.textContent;
  let text = parseInt(number);
  return text;
}

function getDataCategory() {
  const category = getNode('.selectCategory');
  const text = category.textContent;
  const value = removeEmoji(text);
  console.log('이모지 제거 한거 :', value);
  return value;
}

function getDataActivity() {
  const textarea = document.getElementById('board-content');
  const text = textarea.value;
  return text;
}

// 이모지를 제거하는 함수
function removeEmoji(value) {
  return value.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '');
}

function warningText(inputValue, text) {
  if (!inputValue && !text.textContent) {
    gsap.to('.warningText', { x: -10, duration: 0.1, repeat: 3, yoyo: true });
    insertLast('.warningText', '제목을 입력해주세요.');
    return;
  }
  if (!inputValue) {
    gsap.to('.warningText', { x: -10, duration: 0.1, repeat: 3, yoyo: true });
    return;
  }
  if (inputValue) text.textContent = '';
  return true;
}

function insertTitleSecondpage(secondPageValue, inputValue) {
  if (secondPageValue) {
    secondPageValue.textContent = '';
    insertLast('.writeBoardSecond-title', inputValue);
  }
  return inputValue;
}

async function moveBoardContentPage(dataArray) {
  const recordId = await renderProduct(dataArray);

  setTimeout(() => {
    window.location.href = `/src/pages/boardContent/index.html#${recordId}`;
  }, '300');
}

/* -------------------------------------------------------------------------- */
/*                                   뒤로가기버튼                                   */
/* -------------------------------------------------------------------------- */
function handleBack() {
  const screens = document.querySelectorAll('.w-screen');
  const currentScreen = document.querySelector('.w-screen:not(.hidden)');
  const currentIndex = Array.from(screens).indexOf(currentScreen);
  const text = getNode('.warningText');
  const inputValue = titleInput.value;

  if (currentIndex < 1) {
    window.history.back();
    return;
  }
  if (currentIndex > 0) {
    if (titleSecondPage && titleSecondPage.textContent) {
      warningText(inputValue, text);
    }
    const beforeScreen = screens[currentIndex - 1];
    currentScreen.classList.add('hidden');
    beforeScreen.classList.remove('hidden');
    return;
  }
}
/* -------------------------------------------------------------------------- */
/*                               카테고리 선택의 부모 태그                               */
/* -------------------------------------------------------------------------- */
function handleCategoryNav() {
  const isClicked = this.classList.toggle('isClicked');
  const target = this.querySelector('.selectCategoryNav');
  if (isClicked) {
    target.classList.remove(
      'group-focus-within:visible',
      'group-focus-within:opacity-100',
      'group-focus-within:translate-y-1'
    );
  } else {
    target.classList.add(
      'group-focus-within:visible',
      'group-focus-within:opacity-100',
      'group-focus-within:translate-y-1'
    );
  }
}

/* -------------------------------------------------------------------------- */
/*                               카테고리 선택의 item들                               */
/* -------------------------------------------------------------------------- */
function handleCategorySecondPageSubmenu() {
  const category = getNode('.selectCategory');
  if (category.textContent) {
    category.textContent = '';
  }
  insertLast('.selectCategory', this.textContent);
}

/* -------------------------------------------------------------------------- */
/*                                    참가인원수                                   */
/* -------------------------------------------------------------------------- */

function handleCategorySecondPagePeople() {
  const content = getNode('.people');
  const plus = this.classList.contains('plus');
  const minus = this.classList.contains('minus');

  let number = parseInt(content.innerText);

  if (plus && number < 10) {
    number = number + 1;
  } else if (minus && number > 0) {
    number = number - 1;
  } else {
    return;
  }

  if (content) {
    content.textContent = '';
    insertLast('.people', number + '명');
  }
  return;
}

/* -------------------------------------------------------------------------- */
/*                         다음 주소api 사용                                   */
/* -------------------------------------------------------------------------- */
function handleOpenDaumPostcode() {
  new daum.Postcode({
    oncomplete: function (data) {
      const content = getNode('.locationValue');
      // 여기에 팝업에서 검색결과 항목을 클릭했을 때 실행할 코드를 작성합니다.
      if (content) {
        content.textContent = '';
        insertLast('.locationValue', data.address);
      }
    },
  }).open();
}

/* -------------------------------------------------------------------------- */
/*                                    성별 선택                                   */
/* -------------------------------------------------------------------------- */
function handleSelectGenderMenu(e) {
  const isClicked = e.target.classList.toggle('isClicked');
  const genderValue = getNode('.genderValue');
  Array.from(this.children).forEach((item) => {
    if (item !== e.target) {
      item.classList.remove('isClicked');
      item.classList.remove('bg-primary');
      item.classList.remove('text-background');
    }
  });

  if (isClicked) {
    e.target.classList.add('bg-primary');
    e.target.classList.add('text-background');
  } else {
    e.target.classList.remove('bg-primary');
    e.target.classList.remove('text-background');
  }
  genderValue.textContent = '';
  insertLast('.genderValue', e.target.textContent);
  return;
}

/* -------------------------------------------------------------------------- */
/*                               나이 제한 선택 아직 미구현                              */
/* -------------------------------------------------------------------------- */

peopleButton.forEach((item) => {
  item.addEventListener('click', handleCategorySecondPagePeople);
});

selectCategorySecondPage.forEach((item) => {
  item.addEventListener('click', handleCategorySecondPageSubmenu);
});

nextButton.addEventListener('click', handleNext);
backButton.addEventListener('click', handleBack);
locationButton.addEventListener('click', handleOpenDaumPostcode);
selectGenderbuttonMenu.addEventListener('click', handleSelectGenderMenu);
categoryMenuNav.addEventListener('click', handleCategoryNav);

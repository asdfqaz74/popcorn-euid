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

const selectGenderbuttonMenu = getNode('.selectGenderMenuContainer');

const pb = new pocketbase(`${import.meta.env.VITE_PB_URL}`);

/* -------------------------------------------------------------------------- */
/*                             pocketbase post 작성                             */
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
  const resultGender = gender.replace(/[^a-zA-Z가-힣0-9\s]/g, '').trim();
  const resultAge = age.replace(/[^a-zA-Z가-힣0-9\s]/g, '').trim();

  const data = {
    SR_location: SR_location,
    activity: activity,
    category: resultCategory,
    date: date,
    meetingLocation: meetingLocation,
    gender: resultGender,
    approve: approve,
    headcount: headcount,
    age: resultAge,
    title: title,
    time: time,
  };
  console.log(data);
  const record = await pb.collection('community').create(data);

  // console.log(record);
}

/* -------------------------------------------------------------------------- */

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
  const nowUserId = await checkedUserId(value);

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
      moveBoardContentPage(dataArray);
    }
  }
}

async function checkedUserId(serverPhoneNumber) {
  const key = 'phoneNumber';
  const localvalue = await getStorage(key);

  const severValue = serverPhoneNumber.find((item) => {
    if (item.phoneNumber === localvalue);
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
  const text = getDataAge.textContent;
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

  return text;
}

function getDataActivity() {
  const textarea = document.getElementById('board-content');
  const text = textarea.value;
  return text;
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

function moveBoardContentPage(dataArray) {
  renderProduct(dataArray);
  setTimeout(() => {
    window.location.href = '/src/pages/boardContent/index.html';
  }, '300');
}

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

function handleCategorySecondPageSubmenu() {
  const category = getNode('.selectCategory');

  if (category.textContent) {
    category.textContent = '';
  }
  insertLast('.selectCategory', this.textContent);
}

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
  // content.innerText = number + '명';
  return;
}
function handleOpenDaumPostcode() {
  new daum.Postcode({
    oncomplete: function (data) {
      const content = getNode('.locationValue');
      // 우선 다음 주소api 사용 js 로 구현
      // 여기에 팝업에서 검색결과 항목을 클릭했을 때 실행할 코드를 작성합니다.
      if (content) {
        content.textContent = '';
        insertLast('.locationValue', data.address);
      }
    },
  }).open();
}

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

// function handleAgeSelect(e) {
//   const elementFrom = getNode('.ageInputFrom');
//   const elementTo = getNode('.ageInputTo');
//   const elementCheck = getNode('.ageFromToCheck');
//   let valueFrom = '';
//   let valueTo = '';

//   elementFrom.addEventListener('input', (event) => {
//     valueFrom = event.target.value;
//   });

//   elementTo.addEventListener('input', (event) => {
//     valueTo = event.target.value;
//   });

//   elementCheck.addEventListener('click', (event) => {
//     console.log(valueFrom, valueTo);
//   });
// }

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

import { getNode, insertLast, getNodes } from '/src/lib/';
import gsap from 'gsap';
import pocketbase from 'pocketbase';

const nextButton = getNode('.writeBoardSecond-next-button');
const backButton = getNode('.writeBoard-back-button');
const titleInput = getNode('.writeBoard-input');
const category = getNode('.writeBoard-category');
const selectCategorySecondPage = getNodes('.writeBoardCategory');
const titleSecondPage = document.querySelector('.writeBoardSecond-title');
const peopleButton = getNodes('.writeBoardSecond-people-button');
const locationButton = getNode('.writeBoardSecond-location-button');
const genderButton = getNode('.writeboardThird-gender-button');
const selectGenderbuttonMenu = getNode('.selectGenderMenuContainer');
const ageinputClass = getNode('.ageinputClass');
const ageContainer = getNode('.ageContainer');

const pb = new pocketbase(`${import.meta.env.VITE_PB_URL}`);

function handleNext(event) {
  event.preventDefault();
  const text = getNode('.warningText');

  const screens = document.querySelectorAll('.w-screen');
  const inputValue = titleInput.value;
  const currentScreen = document.querySelector('.w-screen:not(.hidden)');
  const currentIndex = Array.from(screens).indexOf(currentScreen);

  if (!inputValue && !text.textContent) {
    gsap.to('.warningText', { x: -10, duration: 0.1, repeat: 3, yoyo: true });
    insertLast('.warningText', '제목을 입력해주세요.');
    return;
  }
  if (!inputValue) {
    gsap.to('.warningText', { x: -10, duration: 0.1, repeat: 3, yoyo: true });
    return;
  }

  if (titleSecondPage) {
    titleSecondPage.textContent = '';
    insertLast('.writeBoardSecond-title', inputValue);
  }

  if (screens.length >= 2) {
    if (currentIndex >= 0 && currentIndex < screens.length - 1) {
      const nextScreen = screens[currentIndex + 1];
      currentScreen.classList.add('hidden');
      nextScreen.classList.remove('hidden');
    }

    if (currentIndex === 2) {
      moveBoardContentPage();
    }
  }
}

function titleData() {}

function moveBoardContentPage() {
  renderProduct();
  setTimeout(() => {
    window.location.href = '/src/pages/boardContent/index.html';
  }, '300');
}
function handleBack() {
  const screens = document.querySelectorAll('.w-screen');
  const currentScreen = document.querySelector('.w-screen:not(.hidden)');
  const currentIndex = Array.from(screens).indexOf(currentScreen);

  if (currentIndex < 1) {
    window.history.back();
    return;
  }
  if (currentIndex > 0) {
    if (titleSecondPage && titleSecondPage.textContent) {
      console.log(titleSecondPage);

      // titleSecondPage.textContent = '';
    }
    const beforeScreen = screens[currentIndex - 1];
    currentScreen.classList.add('hidden');
    beforeScreen.classList.remove('hidden');
    return;
  }
}

function handleCategorySecondPage() {
  console.log('sdf');
}

function handleCategorySecondPageSubmenu() {
  const category = getNode('.selectCategory');
  console.log(this.textContent);

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

  Array.from(this.children).forEach((item) => {
    if (this.children) {
      item.classList.remove('bg-primary');
      item.classList.remove('text-background');

      if (isClicked) {
        e.target.classList.add('bg-primary');
        e.target.classList.add('text-background');
      }
      if (!isClicked) {
        e.target.classList.remove('bg-primary');
        e.target.classList.remove('text-background');
      }
    }
  });
}

/* -------------------------------------------------------------------------- */
/*                             pocketbase post 작성                             */
/* -------------------------------------------------------------------------- */

async function renderProduct() {
  // example create data
  const data = {
    SR_location: 'ctyys0rk89zqupi',
    activity: 'test',
    category: 'test',
    date: '2022-01-01 10:00:00.123Z',
    meetingLocation: 'test',
    gender: 'test',
    approve: true,
    headcount: 123,
    age: 'test',
    title: 'test',
  };

  const record = await pb.collection('community').create(data);

  console.log(record);
  // const communityData = responseCommunity.items;
  // communityData.forEach((item) => {
  //   console.log(item);
  // });
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
category.addEventListener('click', handleCategorySecondPage);
locationButton.addEventListener('click', handleOpenDaumPostcode);
selectGenderbuttonMenu.addEventListener('click', handleSelectGenderMenu);
// ageContainer.addEventListener('click', handleAgeSelect);

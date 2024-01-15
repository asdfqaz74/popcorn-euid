import {
  getNode,
  insertLast,
  formattedDateShort,
  addClass,
  removeClass,
  getNodes,
  getPbImageURL,
  formattedDate,
  formattedTime,
} from '/src/lib';
import Pockbase from 'pocketbase';
import gsap from 'gsap';

const pocketbase = new Pockbase(`${import.meta.env.VITE_PB_URL}`);

const container = getNode('.boardContentsContainer');
const boardContentMore = getNode('.boardContent-more');
const moveButton = getNode('.boardContent-back');
const moveeditButton = getNode('.boardContent-back-edit');
const button = document.getElementById('menu-button');
const updateMenu = getNode('.updateMenu');
const updateList = getNodes('.update-button');
const boardContainerInfo = getNode('board-container-info');
const completeUpdateButton = getNode('.completeUpdateButton');
const updatgeCategory = getNodes('.boardContent-category');
const updateState = getNodes('.boardContent-state');

const hash = window.location.hash.slice(1);
const productData = await pocketbase.collection('community').getOne(hash, {
  expand: 'SR_location',
});

async function renderProduct() {
  // const hash = window.location.hash.slice(1);
  // const productData = await pocketbase.collection('community').getOne(hash, {
  //   expand: 'SR_location',
  // });

  const {
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
    expand,
    id,
    recruiting = '모집중',
  } = productData;
  const defaultRecruiting = recruiting === '' ? '모집중' : recruiting;
  console.log(productData);
  const template = /* html */ `

        <h2 class="sr-only">최종 모임 작성 페이지</h2>

        <div class="boardContent-wrapper  pb-[40%] pt-6 px-3 mb-[4.625rem]">
          <span
            class="boardContent-category inline-block py-[0.3rem] px-3 border-none bg-gray-600 rounded-sm text-base font-semibold text-background"
            >📝${category}</span
          >
          <div  class="flex flex-col text-[1.5rem] font-semibold my-3">
            <span class="boardContent-state text-secondary">${defaultRecruiting}</span>
            <span class="boardContent-title my-1">${title}</span>
          </div>

          <div>
            <div class="flex items-center gap-2 py-2">
              <img src="/images/people.svg" alt="" />
              <span class="boardContent-condition">${gender} 참여 가능</span>
            </div>
            <div class="flex items-center gap-2 ">
              <img src="/images/fullcalender.svg" alt="" />
              <span class="boardContent-date">${formattedDateShort(date)}</span>
            </div>
            <div>
              <p class="boardContent-content mt-2 mb-8">
                 ${activity}
              </p>
            </div>
            <div class="flex gap-1 font-semibold mb-[0.96875rem]">
              <span id="label">참여중인 이웃</span>
              <div aria-labelledby="label" class="flex">
                <span class="boardContent-number-front text-secondary">${headcount}</span>
                <span class="boardContent-number-back">/10</span>
              </div>
            </div>

            <div class="flex items-center gap-[0.625rem]">
              <div
                class="bg-Contents-contentSecondary w-[1.875rem] h-[1.875rem] rounded-7xl"
              >
                <img
                
                  src="${getPbImageURL(
                    productData.expand.SR_location,
                    'avatar'
                  )}"
                  class="boardContent-profile w-full h-full rounded-7xl object-cover"
                  alt="프로필"
                />
              </div>
              <div class="flex flex-col text-sm">
                <div class="flex justify-center items-center text-base">
                  <span
                    class="boardContent-name whitespace-nowrap pr-[0.375rem]"
                    >${expand.SR_location.username}</span
                  >
                  <img
                    src="/images/organizer.svg"
                    alt="모임설립자 뱃지"
                    class="boardContent-user-state"
                  />
                  <span
                    class="boardContent-user-grade whitespace-nowrap text-gray-900 "
                    >${checkMeetingVenue(hash, id)}</span
                  >
                </div>
                <span
                  class="boardContent-user-number text-gray-700"
                  >${meetingLocation} 인증 4회</span
                >
              </div>
            </div>
          </div>
        </div>
   
        <div class="fixed w-full px-3 bottom-[2.125rem]">
        <a
          class="writeBoardSecond-next-button block text-center text-nowrap text-background rounded-3xl py-4 border bg-primary"
          href="/src/pages/chatScreen/#${id}"
          aria-label="채팅방으로 이동"
        >
          채팅방으로 이동
        </a>
      </div>
  `;

  insertLast('.template', template);

  gsap.from('.board-container', {
    opacity: 0,
    stagger: 0.1,
  });

  gsap.to('.writeBoardSecond-next-button', {
    y: 0,
    opacity: 1,
    stagger: 0.1, //
  });
}

function checkMeetingVenue(nowLoginId, postCreationId) {
  if (nowLoginId === postCreationId) return '모임장';
  return '이웃';
}

function handleBack(state, hash) {
  if (state === 'update') {
    window.location.href = `/src/pages/boardContent/#${hash}`;
    // window.history.back;
    console.log('안이야 hash :', hash);
    return;
  }
  console.log('밖이야');
  window.location.href = '/src/pages/togetherBoard/';
}

function hiddenUpdateMenu() {
  console.log('sdfsdf');

  // 0.2초 뒤에 실행
  setTimeout(() => {
    removeClass('.boardContentsContainer', 'after:bg-opacity-50');
    removeClass('.boardContentsContainer', 'after:bg-primary');
    removeClass('.boardContentsContainer', 'after:absolute');
    removeClass('.boardContentsContainer', 'after:inset-0');
    '.boardContentsContainer', 'after:inset-0';
    gsap.to('.updateMenu', {
      y: '100%',
      ease: 'power2.out',
      duration: 0.5,
    });
  }, 200);
}

//에딧화면 띄우기 또는 수정된 화면 띄우기
function transitionEdit(value) {
  if (value === 'update') {
    // removeClass('.board-container-info', 'hidden');
    // addClass('.board-container-edit', 'hidden');
    return;
  }
  addClass('.board-container-info', 'hidden');
  removeClass('.board-container-edit', 'hidden');
  renderigEditPage();
}

async function renderigEditPage() {
  const inputTitle = document.getElementById('title');
  const inputAge = document.getElementById('age');
  const inputDate = document.getElementById('date');
  const inputBoardcontent = document.getElementById('board-content');
  const dateOnly = productData.date.split(' ')[0];
  const title = inputTitle.value;
  const age = inputAge.value;
  const date = inputDate.value;
  const boardcontent = inputBoardcontent.value;

  inputBoardcontent.value = productData.activity;
  inputDate.value = dateOnly;
  inputAge.value = productData.age;
  inputTitle.value = productData.title;
}

function handleMoreDropDown() {
  // container.style.background = 'rgba(0, 0, 0, 0.8)';
  addClass('.boardContentsContainer', 'after:bg-opacity-90');
  addClass('.boardContentsContainer', 'after:bg-Contents-contentPrimary');
  addClass('.boardContentsContainer', 'after:absolute');
  addClass('.boardContentsContainer', 'after:inset-0');

  gsap.to('.updateMenu', {
    y: '0%',
    ease: 'power2.out',
    duration: 0.5,
  });
}
// 수정 모집중,모집종료 toggle
function toggleupdateState() {
  const prevClickedElement = document.querySelector(
    '.boardContent-state.isClicked'
  );
  const isClicked = this.classList.toggle('isClicked');

  if (isClicked) {
    if (prevClickedElement) {
      prevClickedElement.classList.remove('isClicked');
      prevClickedElement.classList.add('text-secondary');
      prevClickedElement.classList.remove('text-background');
      prevClickedElement.classList.remove('bg-Blue-700');
    }
    this.classList.remove('text-secondary');
    this.classList.add('text-background');
    this.classList.add('bg-Blue-700');
  } else {
    this.classList.add('text-secondary');
    this.classList.remove('bg-Blue-700');
    this.classList.remove('text-background');
  }
}

// 수정 카테고리 toggle
function toggleUpdatgeCategory() {
  const prevClickedElement = document.querySelector(
    '.boardContent-category.isClicked'
  );
  const isClicked = this.classList.toggle('isClicked');

  if (isClicked) {
    if (prevClickedElement) {
      prevClickedElement.classList.remove('isClicked');
      prevClickedElement.classList.add('bg-bluegray-700');
      prevClickedElement.classList.remove('bg-secondary');
    }
    this.classList.remove('bg-bluegray-700');
    this.classList.add('bg-secondary');
  } else {
    this.classList.add('bg-bluegray-700');
    this.classList.remove('bg-secondary');
  }
}

// : 버튼 클릭 시 수정,삭제,모집중 메뉴 선택
function handleChangeUpdateState() {
  const datasetValue = this.getAttribute('data-sets');

  if (datasetValue === '모집중') {
  } else if (datasetValue === '모집종료') {
  } else if (datasetValue === 'modify') {
    transitionEdit();
  } else if (datasetValue === 'delete') {
    handleDelete();
  }
}

// 수정하기위한 선택된 카테고리 값
function getChangedCategoryValue() {
  const elements = document.querySelectorAll('.boardContent-category');
  let foundElement = null;

  for (const element of elements) {
    if (element.classList.contains('isClicked')) {
      foundElement = element;
      break;
    }
  }

  return foundElement.getAttribute('data-sets');
}

function getChangedrecruitmentStatuse() {
  const elements = document.querySelectorAll('.boardContent-state');
  let foundElement = null;

  for (const element of elements) {
    if (element.classList.contains('isClicked')) {
      foundElement = element;
      break;
    }
  }

  return foundElement.getAttribute('data-sets');
}

function getModifiedinformation() {
  const inputTitle = document.getElementById('title');
  const inputAge = document.getElementById('age');
  const inputDate = document.getElementById('date');
  const inputBoardcontent = document.getElementById('board-content');

  const title = inputTitle.value;
  const age = inputAge.value;
  const date = inputDate.value;
  const boardcontent = inputBoardcontent.value;
  const recruitmentStatus = getChangedrecruitmentStatuse();
  const category = getChangedCategoryValue();

  console.log('title  : ', title);
  console.log('age  : ', age);
  console.log('date  : ', date);
  console.log('category  : ', category);
  console.log('boardcontent  : ', boardcontent);
  console.log('recruitmentStatus  : ', recruitmentStatus);

  const data = {
    activity: boardcontent,
    category: category,
    date: date,
    meetingLocation: 'test',
    age: age,
    title: title,
    recruiting: recruitmentStatus,
  };

  return data;
}

//수정완료 버튼
function handleUpdateCompleteButton() {
  const value = 'update';
  const modifieddata = getModifiedinformation();
  handleUpdate(modifieddata);
  transitionEdit(value);
}

async function handleDelete() {
  // const hash = window.location.hash.slice(1);
  // const productId = await pocketbase.collection('community').getOne(hash);

  await pocketbase.collection('community').delete(productData.id);
  handleBack();
}

async function handleUpdate(dataObject) {
  const state = 'update';
  // const hash = window.location.hash.slice(1);
  // const productData = await pocketbase.collection('community').getFullList({
  //   expand: 'SR_location',
  // });
  const checkAuthor = productData.find((item) => {
    if (item.id === hash) return true;
  });

  console.log('checkAuthor    :', checkAuthor);
  console.log(dataObject);
  const data = {
    SR_location: checkAuthor.SR_location,
    activity: dataObject.activity,
    category: dataObject.category,
    date: formattedDate(dataObject.date),
    meetingLocation: checkAuthor.meetingLocation,
    gender: checkAuthor.gender,
    approve: checkAuthor.approve,
    headcount: checkAuthor.headcount,
    age: dataObject.age,
    title: dataObject.title,
    time: checkAuthor.time,
    recruiting: dataObject.recruiting,
  };
  console.log(data);
  await pocketbase.collection('community').update(checkAuthor.id, data);
  handleBack(state, hash);
}

renderProduct();

updateState.forEach((item) => {
  item.addEventListener('click', toggleupdateState);
});
updatgeCategory.forEach((item) => {
  item.addEventListener('click', toggleUpdatgeCategory);
});
updateList.forEach((item) => {
  item.addEventListener('click', handleChangeUpdateState);
});

moveeditButton.addEventListener('click', handleBack);
moveButton.addEventListener('click', handleBack);
// boardContentMore.addEventListener('click', handleDelete);
button.addEventListener('click', handleMoreDropDown);
// deleteMenu.addEventListener('click', handleDelete);
button.addEventListener('blur', hiddenUpdateMenu);
completeUpdateButton.addEventListener('click', handleUpdateCompleteButton);

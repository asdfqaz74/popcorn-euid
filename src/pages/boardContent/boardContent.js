import {
  getNode,
  insertLast,
  formattedDateShort,
  addClass,
  removeClass,
  getNodes,
  getPbImageURL,
} from '/src/lib';
import Pockbase from 'pocketbase';
import gsap from 'gsap';

const pocketbase = new Pockbase(`${import.meta.env.VITE_PB_URL}`);

const container = getNode('.boardContentsContainer');
const boardContentMore = getNode('.boardContent-more');
const moveButton = getNode('.boardContent-back');
const button = document.getElementById('menu-button');
const updateMenu = getNode('.updateMenu');
const updateList = getNodes('.update-button');

async function renderProduct() {
  const hash = window.location.hash.slice(1);

  const productData = await pocketbase.collection('community').getOne(hash, {
    expand: 'SR_location',
  });

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
  } = productData;
  console.log(productData);
  const template = /* html */ `

        <h2 class="sr-only">최종 모임 작성 페이지</h2>

        <div class="boardContent-wrapper pt-6 px-3 mb-[4.625rem]">
          <span
            class="boardContent-category inline-block py-[0.125rem] px-2 border-none bg-bluegray-300 rounded-sm text-sm font-semibold text-background"
            >📝${category}</span
          >
          <div  class="text-lg font-semibold mt-[0.5625rem]">
            <span class="boardContent-state text-secondary">모집중</span>
            <span class="boardContent-title">${title}</span>
          </div>

          <div>
            <div class="flex items-center gap-2">
              <img src="/images/people.svg" alt="" />
              <span class="boardContent-condition">${gender} 참여 가능</span>
            </div>
            <div class="flex items-center gap-2">
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
                <div class="flex justify-center items-center">
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
                    class="boardContent-user-grade whitespace-nowrap text-Contents-contentTertiary"
                    >${checkMeetingVenue(hash, id)}</span
                  >
                </div>
                <span
                  class="boardContent-user-number text-Contents-contentTertiary"
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

function handleBack() {
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

function handleMoreDropDown(event) {
  // container.style.background = 'rgba(0, 0, 0, 0.8)';
  addClass('.boardContentsContainer', 'after:bg-opacity-50');
  addClass('.boardContentsContainer', 'after:bg-primary');
  addClass('.boardContentsContainer', 'after:absolute');
  addClass('.boardContentsContainer', 'after:inset-0');

  gsap.to('.updateMenu', {
    y: '0%',
    ease: 'power2.out',
    duration: 0.5,
  });
}

function handleChangeUpdateState(e) {
  const datasetValue = this.getAttribute('data-sets');

  if (datasetValue === 'recruiting') {
    console.log('모집중 선택');
  } else if (datasetValue === 'closedRecruitment') {
    console.log('모집종료 선택');
  } else if (datasetValue === 'modify') {
    console.log('수정하기 선택');
  } else if (datasetValue === 'delete') {
    selectModificationType(datasetValue);
  }
}

function selectModificationType(selectMenu) {
  if (selectMenu === 'delete') {
    handleDelete();
    return;
  }
  console.log('삭제오류');
}

async function handleDelete() {
  const hash = window.location.hash.slice(1);
  const productId = await pocketbase.collection('community').getOne(hash);

  await pocketbase.collection('community').delete(productId.id);
  handleBack();
}

async function handleUpdate() {
  const hash = window.location.hash.slice(1);
  if (this.id === updateMenu.id) {
    const productData = await pocketbase.collection('community').getFullList({
      expand: 'SR_location',
    });

    const nowData = productData.find((item) => {
      if (item.id === hash) return true;
    });
    const element = getNode('.boardContent-title');

    const data = {
      SR_location: 'RELATION_RECORD_ID',
      activity: 'test',
      category: 'test',
      date: '2022-01-01 10:00:00.123Z',
      meetingLocation: 'test',
      gender: 'test',
      approve: true,
      headcount: 123,
      age: 'test',
      title: 'test',
      time: 'test',
    };

    // await pocketbase.collection('community').update('RECORD_ID', data);
    // handleBack();
  }
}

renderProduct();

updateList.forEach((item) => {
  item.addEventListener('click', handleChangeUpdateState);
});

moveButton.addEventListener('click', handleBack);
// boardContentMore.addEventListener('click', handleDelete);
button.addEventListener('click', handleMoreDropDown);
// deleteMenu.addEventListener('click', handleDelete);
button.addEventListener('blur', hiddenUpdateMenu);

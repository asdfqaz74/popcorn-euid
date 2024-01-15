import pocketbase from 'pocketbase';
import {
  insertLast,
  getPbImageURL,
  timeAgo,
  getNode,
  formattedDateShort,
} from '/src/lib';
import { gsap } from 'gsap';
import { getStorage } from '../../lib/utils';

const subjectMenuButton = getNode('.subjectMenu');
const subjectMenutoggle = getNode('.subject-menu-container');
const closedSubjectMenu = getNode('.board-closedSubjectMenu-button');

const pb = new pocketbase(`${import.meta.env.VITE_PB_URL}`);

/* -------------------------------------------------------------------------- */
/*                                 이미지 랜더링 함수                           */
/* -------------------------------------------------------------------------- */
async function renderProduct() {
  const responseCommunity = await pb.collection('community').getList(1, 50, {
    expand: 'SR_location',
  });

  const communityData = responseCommunity.items;

  communityData.forEach((item) => {
    console.log(item);
    const template = /* html */ `
    <div
          class="group hover:bg-tertiary board-container text-bluegray-400 text-sm border-t-[1px] p-3 grid grid-cols-2"
        >    
     <div class="col-start-1 row-start-1 row-end-3 col-end-3">
     <a href="/src/pages/boardContent/index.html#${item.id}" >
            <span
              class="group-hover:text-background group-hover:bg-Blue-700 board-keyword p-1 border border-black rounded-default bg-bluegray-600 text-background"
            >
              ${item.category}
            </span>
            <strong
              class="board-title block my-1 text-base whitespace-nowrap text-ellipsis overflow-hidden text-Contents-contentPrimary"
            >
            ${item.title}
            </strong>
            <div class="my-1 flex gap-1 ">
              <img src="/public/images/fullpeople.svg" alt="참여인원 수" />
              <span class="group-hover:text-background board-people ">  ${
                item.age
              }  </span>
            </div>
            <div class="my-1 flex gap-1">
              <img src="/public/images/calender.svg" alt="날짜" />
              <span class="group-hover:text-background board-when"> ${formattedDateShort(
                item.date
              )}</span>
              <span class="group-hover:text-background board-time">${
                item.time
              } </span>
            </div>
            <div class="my-1">
              <span class="group-hover:text-background board-location">  ${
                item.expand.SR_location.locationSecond
              }</span>
              <span class="group-hover:text-background">·</span>
              <span class="group-hover:text-background board-writeTime"> ${timeAgo(
                item.created
              )} </span>
            </div>
            </a>
          </div>
          <div class="col-end-4 self-center">
            <img
              class="board-thumnail h-[60px] w-[60px]"
              src="${getPbImageURL(item)}"
              alt="게시물 미리보기 사진"
              onerror="this.style.display='none';"
            />
          </div>
          <div class="group-hover:text-background gap-1 items-center col-end-4 self-end justify-end flex">
            <img src="/public/images/fullpeople.svg" alt="참가 인원수" />
            <span class="board-joinPeople">${item.headcount}/10명</span>
          </div> 
          
              </div>
  `;

    insertLast('.template', template);
  });

  /* -------------------------------------------------------------------------- */
  /*    주제목록 랜더링은 User의 localStorage에 저장이 구현되면 불러와서 구현        */
  /* -------------------------------------------------------------------------- */

  //   arraySubjectValue.forEach((item) => {
  //     const templateSubjecMenu = /* html */ `
  //   <div class="p-3 flex justify-between">
  //   <div class="flex items-center gap-2">
  //     <img class="h-[34px] w-[34px]" src="/public/images/life.svg" alt="" />
  //     <strong class="board-subject-name no-wrap truncate">${item}</strong>
  //   </div>
  //   <div
  //     class="board-participating py-1 text-secondary rounded-2xl px-5 border bg-bluegray-100 no-wrap"
  //   >
  //     참여중
  //   </div>
  // </div>

  //   `;
  //     insertLast('.templateSubjectContainer', templateSubjecMenu);
  //   });

  const templateSubjecMenu = /* html */ `
<div class="p-3 flex justify-between">
<div class="flex items-center gap-2">
  <img class="h-[34px] w-[34px]" src="/public/images/life.svg" alt="" />
  <strong class="board-subject-name no-wrap truncate">localStorage 아직</strong>
</div>
<div
  class="board-participating py-1 text-secondary rounded-2xl px-5 border bg-bluegray-100 no-wrap"
>
  참여중
</div>
</div>
<div class="p-3 flex justify-between">
<div class="flex items-center gap-2">
  <img class="h-[34px] w-[34px]" src="/public/images/life.svg" alt="" />
  <strong class="board-subject-name no-wrap truncate">localStorage 아직</strong>
</div>
<div
  class="board-participating py-1 text-secondary rounded-2xl px-5 border bg-bluegray-100 no-wrap"
>
  참여중
</div>
</div>

`;
  insertLast('.templateSubjectContainer', templateSubjecMenu);

  gsap.from('.board-container', {
    y: 30,
    opacity: 0,
    stagger: 0.1,
  });
}

/* -------------------------------------------------------------------------- */
/*                                   주제목록 토글                                 */
/* -------------------------------------------------------------------------- */
function handleSubjectToggle() {
  const isClicked = this.classList.toggle('click');

  if (this.className === closedSubjectMenu.className) {
    gsap.to(subjectMenutoggle, {
      y: '100%',
      ease: 'power2.out',
      duration: 0.5,
    });
    subjectMenuButton.classList.remove('click');
    return;
  }

  if (isClicked) {
    gsap.to(subjectMenutoggle, { y: 0, ease: 'power2.out', duration: 0.5 });
    return;
  }
  gsap.to(subjectMenutoggle, { y: '100%', ease: 'power2.out', duration: 0.5 });
}

/**
 * 주제 nav 와 주제 드롭다운 메뉴의 x 버튼을 제외한 다른 곳 클릭 시
 * @param {} event 클릭이벤트
 * @returns
 */
function handleClickOutside(event) {
  if (
    event.target.closest('.subject-menu-container') ||
    event.target.closest('.subjectMenu')
  ) {
    return;
  }
  gsap.to(subjectMenutoggle, { y: '100%', ease: 'power2.out', duration: 0.5 });
  subjectMenuButton.classList.remove('click');
}

/* -------------------------------------------------------------------------- */
/*                             로그인 기능 관심사 들어오면 구현                */
/* -------------------------------------------------------------------------- */
// function funcLocalStorage() {
//   const items = getStorage('interest');
//   return items;
// }

renderProduct();

subjectMenuButton.addEventListener('click', handleSubjectToggle);
closedSubjectMenu.addEventListener('click', handleSubjectToggle);
document.addEventListener('click', handleClickOutside);

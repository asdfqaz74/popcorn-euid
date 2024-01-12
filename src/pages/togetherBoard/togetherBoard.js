import gsap from 'gsap';
import pocketbase from 'pocketbase';
import {
  insertLast,
  getPbImageURL,
  comma,
  timeAgo,
  getNode,
  getNodes,
} from '/src/lib';

const writeButton = getNode('.togetherBoard-write-off');
const writeOnButton = getNode('.togetherBoard-write-on');
const plusMenu = getNode('.togetherBoard-plus-menu');
const writeBoard = getNode('.write-button');
const togetherBoardButton = getNodes('.togetherBoard');
const pb = new pocketbase(`${import.meta.env.VITE_PB_URL}`);

async function renderProduct() {
  const responseCommunity = await pb.collection('community').getList(1, 50, {
    expand: 'SR_location',
  });
  const communityData = responseCommunity.items;

  communityData.forEach((item) => {
    const template = /* html */ `
    <div class="board-container">
    <a href="/src/pages/boardContent/index.html#${item.id}" >
    <h1 class="hidden">게시판 글 목록</h1>
    <div class="text-sm border-t-[1px] p-3">
      <div>
        <div class="text-bluegray-400 my-1">
          <span>모집중</span>
          <span>·</span>
          <span> 스터디 </span>
          <span>·</span>
          <span> 연남동 </span>
        </div>
        <strong
          class="togetherBoard-title my-1 text-base whitespace-nowrap text-ellipsis overflow-hidden text-Contents-contentPrimary"
        >
          ${item.title}
        </strong>

        <div class="my-2 px-1">
          <div class="flex">
            <img src="/public/images/fullpeople.svg" alt="참여인원 수" />
            <span class="togtherBoard-who"> ${item.created} </span>
          </div>
          <div class="mt-1 flex">
            <img src="/public/images/calender.svg" alt="날짜" />
            <span>내일,</span>
            <span class="togtherBoard-time">오후 7:00</span>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex gap-[0.1875rem] items-center">
          <div
            class="inline-block border w-5 h-5 rounded-full bg-Contents-contentSecondary"
          ></div>
          <span class="text-Contents-contentSecondary">1/4명</span>
        </div>
        <span class="togtherBoard-timeBefore px-2 text-bluegray-400"
          > ${timeAgo(item.created)}</span
        >
      </div>
    </div>
    </a>
  </div>

    `;
    insertLast('.template', template);
  });
}

function handleMove() {
  window.location.href = '/src/pages/writeBoard/index.html';
}

function handleWrite() {
  writeButton.style.display = 'none';
  writeOnButton.style.display = 'block';
  toggleMenu();
}

function toggleMenu() {
  plusMenu.style.display = 'block';

  gsap.from(plusMenu, {
    y: 30,
    opacity: 0,
    stagger: 0.1,
  });
}
function handleClickOutside(event) {
  if (!writeButton.contains(event.target) && !plusMenu.contains(event.target)) {
    // 버튼과 메뉴 이외의 영역을 클릭했을 때
    writeButton.style.display = 'block';
    writeOnButton.style.display = 'none';
    plusMenu.style.display = 'none';
  }
}

function handleClickMenu() {
  const isClicked = this.classList.toggle('isClicked');
  Array.from(this.children).forEach((item) => {
    if (isClicked) {
      item.classList.add('text-secondary');
      item.classList.add('border-Blue-500');
    } else {
      item.classList.remove('text-secondary');
      item.classList.remove('border-Blue-500');
    }
  });
}

function handleMoveContent() {
  window.location.href = '/src/pages/boardContent/';
}

togetherBoardButton.forEach((item) => {
  item.addEventListener('click', handleClickMenu);
});

renderProduct();

writeButton.addEventListener('click', handleWrite);
writeBoard.addEventListener('click', handleMove);
document.addEventListener('click', handleClickOutside);

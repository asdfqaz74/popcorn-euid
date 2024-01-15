import gsap from 'gsap';
import pocketbase from 'pocketbase';
import {
  insertLast,
  getPbImageURL,
  comma,
  timeAgo,
  getNode,
  getNodes,
  formattedDateShort,
  removeElement,
} from '/src/lib';

const writeButton = getNode('.togetherBoard-write-off');
const writeOnButton = getNode('.togetherBoard-write-on');
const plusMenu = getNode('.togetherBoard-plus-menu');
const writeBoard = getNode('.write-button');
const togetherBoardButton = getNodes('.togetherBoard');
const pb = new pocketbase(`${import.meta.env.VITE_PB_URL}`);

async function renderProduct(dataArray) {
  const responseCommunity = await pb.collection('community').getList(1, 50, {
    expand: 'SR_location',
  });
  const communityData = responseCommunity.items;

  if (dataArray) {
    renderingFilter(dataArray);
    return;
  } else {
  }

  communityData.forEach((item) => {
    const defaultRecruiting =
      item.recruiting === '' ? '모집중' : item.recruiting;
    const template = /* html */ `
      <div class="board-container group hover:text-background hover:bg-tertiary" >
        <a href="/src/pages/boardContent/index.html#${item.id}">
          <h1 class="hidden">게시판 글 목록</h1>
          <div class="text-sm border-t-[1px] p-3">
            <div>
              <div class="group-hover:text-background text-bluegray-600 my-1">
                <span class="group-hover:text-background text-secondary">${defaultRecruiting}</span>
                <span>·</span>
                <span>${item.category}</span>
                <span>·</span>
                <span>${item.meetingLocation}</span>
              </div>
              <strong class="togetherBoard-title my-1 text-base whitespace-nowrap text-ellipsis overflow-hidden text-Contents-contentPrimary">
                ${item.title}
              </strong>
              <div class="my-2 px-1">
                <div class="flex ">
                  <img src="/public/images/fullpeople.svg" alt="참여인원 수" />
                  <span class="togtherBoard-who">${item.age}, ${
                    item.gender
                  }</span>
                </div>
                <div class="mt-1 flex">
                  <img src="/public/images/calender.svg" alt="날짜" />
                  <span>${formattedDateShort(item.date)},</span>
                  <span class="togtherBoard-time">${item.time}</span>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex gap-[0.1875rem] items-center">

              <div
              class="inline-block border w-5 h-5 rounded-full bg-Contents-contentSecondary"
            >
              <img
                src="${getPbImageURL(item.expand.SR_location, 'avatar')}"
                class="togetherBoard-profile w-full h-full rounded-7xl object-cover"
                alt="프로필"
              />
            </div>
                <span class="group-hover:text-background text-Contents-contentSecondary">${
                  item.headcount
                }/10명</span>
              </div>
              <span class="group-hover:text-background togtherBoard-timeBefore px-2 text-bluegray-400">${timeAgo(
                item.created
              )}</span>
            </div>
          </div>
        </a>
      </div>
    `;

    insertLast('.template', template);
  });

  gsap.from('.board-container', {
    y: 30,
    opacity: 0,
    stagger: 0.1,
  });
}

async function renderingFilter(dataArray) {
  // console.log(dataArray.items[0]);
  for (const item of dataArray.items) {
    const defaultRecruiting =
      item.recruiting === '' ? '모집중' : item.recruiting;

    const template = /* html */ `
  <div class="board-container" >
    <a href="/src/pages/boardContent/index.html#${item.id}">
      <h1 class="hidden">게시판 글 목록</h1>
      <div class="text-sm border-t-[1px] p-3">
        <div>
          <div class="text-bluegray-400 my-1">
            <span class="text-secondary">${defaultRecruiting}</span>
            <span>·</span>
            <span>${item.category}</span>
            <span>·</span>
            <span>${item.meetingLocation}</span>
          </div>
          <strong class="togetherBoard-title my-1 text-base whitespace-nowrap text-ellipsis overflow-hidden text-Contents-contentPrimary">
            ${item.title}
          </strong>
          <div class="my-2 px-1">
            <div class="flex">
              <img src="/public/images/fullpeople.svg" alt="참여인원 수" />
              <span class="togtherBoard-who">${item.age}, ${item.gender}</span>
            </div>
            <div class="mt-1 flex">
              <img src="/public/images/calender.svg" alt="날짜" />
              <span>${formattedDateShort(item.date)},</span>
              <span class="togtherBoard-time">${item.time}</span>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex gap-[0.1875rem] items-center">

          
          <div
          class="inline-block border w-5 h-5 rounded-full bg-Contents-contentSecondary"
        >
          <img
            src=""
            class="togetherBoard-profile w-full h-full rounded-7xl object-cover"
            alt="프로필"
          />
        </div>
            <span class="text-Contents-contentSecondary">${
              item.headcount
            }/10명</span>
          </div>
          <span class="togtherBoard-timeBefore px-2 text-bluegray-400">${timeAgo(
            item.created
          )}</span>
        </div>
      </div>
    </a>
  </div>
`;

    const resultContainer = document.querySelector('.template');
    while (resultContainer.firstChild) {
      resultContainer.removeChild(resultContainer.firstChild);
    }

    setTimeout(() => {
      insertLast('.template', template);
    }, 1000);
  }

  gsap.from('.board-container', {
    y: 30,
    opacity: 0,
    stagger: 0.1,
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
  const clickedItems = Array.from(document.getElementsByClassName('isClicked'));
  const isClicked = this.classList.toggle('isClicked');
  const itemIndex = clickedItems.indexOf(this);

  if (isClicked) {
    // isClicked가 true인 경우, 배열에 추가
    if (itemIndex === -1) {
      clickedItems.push(this);
    }
    Array.from(this.children).forEach((item) => {
      item.classList.add('text-secondary');
      item.classList.add('border-Blue-500');
    });
  } else {
    // isClicked가 false인 경우, 배열에서 제거
    if (itemIndex !== -1) {
      clickedItems.splice(itemIndex, 1);
    }
    Array.from(this.children).forEach((item) => {
      item.classList.remove('text-secondary');
      item.classList.remove('border-Blue-500');
    });
  }

  // console.log('-------------');
  // console.log(clickedItems);
  filterRendering(clickedItems);
}

async function filterRendering(clickedItems) {
  let filter = '';

  for (const item of clickedItems) {
    const togetherTitleElement = item.querySelector('.togetherTitle');
    const togetherTitleText = togetherTitleElement.textContent;

    switch (togetherTitleText) {
      case '프로젝트':
        filter += 'category = "프로젝트"';
        break;
      case '스터디':
        filter += 'category = "스터디"';
        break;
      case '오프라인':
        filter += 'category = "오프라인"';
        break;
      case '공모전':
        filter += 'category = "공모전"';
        break;
      default:
        break;
    }

    if (filter !== '') {
      filter += ' || ';
    }
  }
  if (filter.endsWith(' || ')) {
    filter = filter.slice(0, -4);
  }

  // ex) filter: 'category = "프로젝트"'
  const resultList = await pb.collection('community').getList(1, 50, {
    filter,
  });

  renderProduct(resultList);
}

togetherBoardButton.forEach((item) => {
  item.addEventListener('click', handleClickMenu);
});

renderProduct();

writeButton.addEventListener('click', handleWrite);
writeBoard.addEventListener('click', handleMove);
document.addEventListener('click', handleClickOutside);

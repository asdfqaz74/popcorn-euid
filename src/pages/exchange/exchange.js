import {
  getNode,
  getPbImageURL,
  comma,
  insertFirst,
  insertLast,
  timeAgo,
} from '/src/lib/';
import plusTapSvg from '/public/images/plusTap.svg';
import plusTapActiveSvg from '/public/images/plusTapActive.svg';
import { gsap } from 'gsap';
import pb from '/src/api/pocketbase';

/* -------------------------------------------------------------------------- */
/*                             toggle plus button                             */
/* -------------------------------------------------------------------------- */

const plusButton = getNode('.exchange-button');
const buttonHidden = getNode('.exchange-button-ul');

function handleButton(e) {
  const button = e.currentTarget;
  const image = button.querySelector('.exchange-button-img');

  const currentSrc = image.src;
  const plusImg = plusTapSvg;
  const plusActiveImg = plusTapActiveSvg;

  if (currentSrc.includes(plusImg)) {
    image.src = plusActiveImg;
  } else {
    image.src = plusImg;
  }

  if (button.classList.contains('exchange-button-no')) {
    gsap.to(button, {
      background: 'rgb(255 255 255)',
      duration: 0.3,
    });
    button.classList.remove('exchange-button-no');
    button.classList.add('exchange-button-active');
    gsap.from('.exchange-button-ul > ul > li', {
      y: 30,
      opacity: 0,
      stagger: {
        each: 0.05,
        from: 'end',
      },
    });
    buttonHidden.classList.remove('hidden');
    buttonHidden.classList.add('block');
  } else {
    buttonHidden.classList.remove('block');
    buttonHidden.classList.add('hidden');
    gsap.to(button, {
      background: 'rgb(55 63 103)',
      duration: 0.3,
    });
    button.classList.remove('exchange-button-active');
    button.classList.add('exchange-button-no');
  }
}

plusButton.addEventListener('click', handleButton);

/* -------------------------------------------------------------------------- */
/*                                     get                                    */
/* -------------------------------------------------------------------------- */

const headset = getNode('.exchange-headset');
const keyboard = getNode('.exchange-keyboard');
const mouse = getNode('.exchange-mouse');
const computer = getNode('.exchange-computer');
const etc = getNode('.exchange-etc');

async function renderProduct(type) {
  let productData;

  // 매개변수에 type이 있는지
  if (type) {
    productData = await pb.collection('products').getFullList({
      filter: `type="${type}"`,
    });
  } else {
    productData = await pb.collection('products').getFullList();
  }

  // section 안에 있는 자식 요소들 전부 지우기
  const removeTarget = getNode('section');
  while (removeTarget.firstChild) {
    removeTarget.removeChild(removeTarget.firstChild);
  }

  // template 생성
  productData.forEach((item) => {
    const template = /* html */ `
    <div
        class="exchange-board border-t border-Contents-contentSecondary flex items-center py-3 pl-3"
      >
        <div
          class="exchange-img-wrapper relative w-[28.125%] pb-[28.125%] bg-gray-200 rounded-2xl"
        >
          <a href="${`/src/pages/exchangeBoard/index.html#${item.id}`}">
            <img
              src="${getPbImageURL(item, 'images')}"
              class="exchange-board-img absolute top-0 left-0 w-full h-full object-cover"
              alt="${item.alt}"
            />
          </a>
        </div>

        <div
          class="exchange-board-contents ml-2 text-base sm:text-xl flex-grow"
        >
          <a href="${`/src/pages/exchangeBoard/index.html#${item.id}`}" class="exchange-board-link"
            >${item.title}</a
          >
          <div class="flex flex-col">
            <div
              class="text-sm text-Contents-contentTertiary font-normal sm:text-lg mb-1"
            >
              <span class="exchange-board-location">마포구 신수동</span>
              <span class="exchange-board-time">ㆍ${timeAgo(
                item.created
              )}</span>
            </div>
            <div class="mb-2">
              <span
                class="exchange-board-state"
                ></span
              >
              <span
                class="exchange-board-price text-base font-semibold leading-normal sm:text-xl"
                >${comma(item.price)}원</span
              >
            </div>
          </div>
          <div
            class="exchange-board-heart flex flex-grow items-center justify-end self-end pr-3"
          >
            <img
              src="/public/images/heart.svg"
              class="w-[0.875rem] h-[0.875rem] sm:w-[1.25rem] sm:h-[1.25rem]"
              alt=""
            />
            <span class="exchange-board-like text-sm sm:text-lg">4</span>
          </div>
        </div>
      </div>

  `;

    // 제일 앞 순서부터 template 뿌려주기
    insertFirst('section', template);
    // products state
    productState(item.state);
  });

  gsap.from('.exchange-board', {
    y: 30,
    opacity: 0,
    stagger: 0.2,
  });
}

// 물품 상태 관리
function productState(item) {
  const currentState = getNode('.exchange-board-state');
  const states = item;

  if (states === 'reservation') {
    currentState.classList.add('exchange-reservation');
    insertLast(currentState, '예약중');
  } else if (states === 'done') {
    currentState.classList.add('exchange-done');
    insertLast(currentState, '거래 완료');
  }
}

// 버튼이 눌렸는지 안눌렸는지 상태 초기화
let headsetFilterActive = false;
let keyboardFilterActive = false;
let mouseFilterActive = false;
let computerFilterActive = false;
let etcFilterActive = false;

// 필터링 EventListener
headset.addEventListener('click', async () => {
  if (headsetFilterActive) {
    await renderProduct();
  } else {
    await renderProduct('headset');
  }
  // 버튼 누를 때 마다 배경색 변경
  headset.classList.toggle('bg-secondary');
  // 버튼이 눌렸는지 상태 관리
  headsetFilterActive = !headsetFilterActive;
});
keyboard.addEventListener('click', async () => {
  if (keyboardFilterActive) {
    await renderProduct();
  } else {
    await renderProduct('keyboard');
  }
  keyboard.classList.toggle('bg-secondary');
  keyboardFilterActive = !keyboardFilterActive;
});
mouse.addEventListener('click', async () => {
  if (mouseFilterActive) {
    await renderProduct();
  } else {
    await renderProduct('mouse');
  }
  mouse.classList.toggle('bg-secondary');
  mouseFilterActive = !mouseFilterActive;
});
computer.addEventListener('click', async () => {
  if (computerFilterActive) {
    await renderProduct();
  } else {
    await renderProduct('computer');
  }
  computer.classList.toggle('bg-secondary');
  computerFilterActive = !computerFilterActive;
});
etc.addEventListener('click', async () => {
  if (etcFilterActive) {
    await renderProduct();
  } else {
    await renderProduct('etc');
  }
  etc.classList.toggle('bg-secondary');
  etcFilterActive = !etcFilterActive;
});

renderProduct();

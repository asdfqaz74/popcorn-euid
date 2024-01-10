import {
  getNode,
  getPbImageURL,
  comma,
  tiger,
  insertFirst,
  insertLast,
  timeAgo,
} from '/src/lib/';
import plusTapSvg from '/public/images/plusTap.svg';
import plusTapActiveSvg from '/public/images/plusTapActive.svg';
import { gsap } from 'gsap';
import pocketbase from 'pocketbase';

/* -------------------------------------------------------------------------- */
/*                             toggle plus button                             */
/* -------------------------------------------------------------------------- */

const plusButton = getNode('.exchange-button');
const imgButton = getNode('.exchange-button-img');
const buttonHidden = getNode('.exchange-button-ul');

function handleButtonImg(e) {
  const image = e.currentTarget;

  const currentSrc = image.src;
  const plusImg = plusTapSvg;
  const plusActiveImg = plusTapActiveSvg;

  if (currentSrc.includes(plusImg)) {
    image.src = plusActiveImg;
  } else {
    image.src = plusImg;
  }
}

function handleButton(e) {
  const button = e.currentTarget;

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

imgButton.addEventListener('click', handleButtonImg);
plusButton.addEventListener('click', handleButton);

/* -------------------------------------------------------------------------- */
/*                                    post                                    */
/* -------------------------------------------------------------------------- */

/* const headset = getNode('.exchange-headset');
const keyboard = getNode('.exchange-keyboard');

function handleHeadset(e) {
  const hand = e.currentTarget;
  console.log(hand.classList);

  if (hand.classList.contains('active')) {
    gsap.to(hand, {
      background: 'rgb(55 63 103)',
      duration: 0.2,
    });
  } else {
    gsap.to(hand, {
      background: 'rgb(90 133 238)',
      duration: 0.1,
    });
  }
  hand.classList.toggle('active');
}

headset.addEventListener('click', handleHeadset); */

async function renderProduct() {
  const response = await tiger.get(
    `${import.meta.env.VITE_PB_API}/collections/products/records`
  );

  const productData = response.data.items;
  console.log(productData);

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

    insertFirst('section', template);
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

renderProduct();

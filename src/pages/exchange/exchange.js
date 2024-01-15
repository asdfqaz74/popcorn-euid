import {
  getNode,
  getPbImageURL,
  comma,
  insertFirst,
  insertLast,
  timeAgo,
  removeChild,
} from '/src/lib/';
import plusTapSvg from '/public/images/plusTap.svg';
import plusTapActiveSvg from '/public/images/plusTapActive.svg';
import heartSvg from '/public/images/heart.svg';
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
/*                                write button                                */
/* -------------------------------------------------------------------------- */

const writeButton = getNode('.exchange-write');
writeButton.addEventListener(
  'click',
  () => (window.location.href = '/src/pages/exchangePost/')
);

/* -------------------------------------------------------------------------- */
/*                                     get                                    */
/* -------------------------------------------------------------------------- */

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
  const likes = await pb.collection('likes').getFullList();

  // section 안에 있는 자식 요소들 전부 지우기
  removeChild('section');

  // template 생성
  productData.forEach((item) => {
    const likeCount = likes.filter((like) => like.product === item.id).length;
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
              src="${heartSvg}"
              class="w-[0.875rem] h-[0.875rem] sm:w-[1.25rem] sm:h-[1.25rem]"
              alt=""
            />
            <span class="exchange-board-like text-sm sm:text-lg">${likeCount}</span>
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
const filterActive = {
  headset: false,
  keyboard: false,
  mouse: false,
  computer: false,
  etc: false,
};

const buttonTypes = ['headset', 'keyboard', 'mouse', 'computer', 'etc'];

buttonTypes.forEach((type) => {
  const button = getNode(`.exchange-${type}`);

  button.addEventListener('click', async () => {
    if (filterActive[type]) {
      await renderProduct();
    } else {
      await renderProduct(type);
    }
    button.classList.toggle('bg-secondary');
    filterActive[type] = !filterActive[type];
  });
});

renderProduct();

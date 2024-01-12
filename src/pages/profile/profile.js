import {
  getNode,
  getNodes,
  getStorage,
  setStorage,
  getPbImageURL,
  insertLast,
  deleteStorage,
  removeElement,
} from '/src/lib/';
import { gsap } from 'gsap';
import pb from '/src/api/pocketbase';

const profileClose = getNode('.profile-button-close');
const profileList = getNodes('.profile-listBox-button');
const commentMore = getNode('.profile-button-more');
const temperatureBox = getNode('.profile-temperatureBar-container');
const logOutButton = getNode('.profile-button-logOut');

//profile 닫힘 버튼

function closeHandler() {
  history.back();
}
profileClose.addEventListener('click', closeHandler);

//profile listBox 버튼

function listHandler() {
  const hiddenBox = this.nextElementSibling;
  const direction = this.querySelector('button');
  hiddenBox.classList.toggle('hidden');
  direction.classList.toggle('rotate-90');
}

profileList.forEach((item) => {
  item.addEventListener('click', listHandler);
});

commentMore.addEventListener('click', (e) => {
  e.currentTarget.nextElementSibling.classList.toggle('hidden');
});

/* -------------------------------------------------------------------------- */
/*                                   유저정보세팅                                   */
/* -------------------------------------------------------------------------- */
const records = await pb.collection('users').getFullList();
const userLoginInfo = '01011112222'; //여기에 loginInput value 값이 들어가면 됩니다
async function loginSetting() {
  let userNow = records.find((item) => item.phoneNumber === userLoginInfo);
  setStorage('userId', userNow.id);
}
loginSetting();

/* -------------------------------------------------------------------------- */
/*                             pocketbase profile;                            */
/* -------------------------------------------------------------------------- */

//현재 로그인한 유저id
const userValid = await getStorage('userId');
let userNow = records.find((item) => item.id === userValid);
//프로필 랜더링
async function renderProfile() {
  const { username, company, locationFirst } = userNow;
  const template = /*html*/ `
  <div class="w-full flex flex-col items-center gap-1">
          <a href="/src/pages/profileCard/" class="relative block">
            <div
              class="w-[4.125rem] h-[4.125rem] rounded-full overflow-hidden shadow-sm"
            >
              <img
                class="w-full h-full object-center"
                src="${getPbImageURL(userNow, 'avatar')}"
                alt="프로필 사진"
              />
            </div>
            <span
              class="block bg-pencil w-5 h-5 absolute bottom-0 bg-no-repeat bg-contain right-0 bg-background rounded-full shadow-md"
            ></span>
          </a>
          <div>
            <span class="profile-textPrivacy text-lg font-semibold" >${username}</span>
            <span
              class="text-sm text-secondary inline-block border border-secondary rounded-full px-1"
              >${company}</span
            >
          </div>
        </div>
        <div class="text-center text-sm text-Contents-contentSecondary">
          <a class="" href="/src/pages/board/"> ${locationFirst} </a>
        </div>
  `;
  insertLast('.profile-section-start ', template);

  //profile 유저네임 프라이버시
  const textPrivacy = getNode('.profile-textPrivacy');
  let sliceName = `${textPrivacy.textContent.slice(0, 4)}***`;
  textPrivacy.textContent = sliceName;
}

renderProfile();

/* -------------------------------------------------------------------------- */
/*                                 temperature                                */
/* -------------------------------------------------------------------------- */

const likes = await pb.collection('likes').getFullList({
  expand: 'product',
});
const products = await pb.collection('products').getFullList({
  expand: 'user',
});
let likeCount = 0;
async function temperatureBar() {
  likes.forEach((item) => {
    if (userValid === item.expand.product.userPost) {
      likeCount++;
    }
  });

  let myTemperature = 36.5 + likeCount * 0.5;

  const template = /*html*/ `
  <div class="flex">
            <span
              class="profile-temperture-start text-sm ml-[25%] text-Contents-contentSecondary after:bg-temperatureAngle after:w-[0.625rem] after:h-[0.375rem] after:inline-block after:absolute after:bottom-0 after:left-[50%] after:bg-no-repeat relative"
            >
              첫 온도 36.5
            </span>
            <span
              class="profile-temperature-now text-secondary text-base font-semibold ml-auto inline-block"
              >${myTemperature} 🥰</span
            >
          </div>
          <div
            class="profile-temperature-box w-full h-2 bg-Contents-contentSecondary rounded-full overflow-hidden mt-1"
          >
            <div
              class="profile-temperture-bar h-full  bg-primary"
            ></div>
          </div>
          `;
  insertLast(temperatureBox, template);
  const bar = getNode('.profile-temperture-bar');
  bar.style.width = `${myTemperature}%`;
}

temperatureBar();

/* -------------------------------------------------------------------------- */
/*                                    like                                    */
/* -------------------------------------------------------------------------- */

let productCount = 0;
async function likeCounting() {
  products.forEach((item) => {
    if (userValid === item.userPost) {
      productCount++;
    }
  });
  let likePercentage = Math.floor((likeCount / productCount) * 100);
  const template = /*html*/ `
  <p class=" text-base">받은 좋아요 ${likePercentage}%</p>
  <p class=" text-base text-Contents-contentSecondary">
    ${productCount}개 중 ${likeCount}명이 만족
  </p>
  `;
  insertLast('.profile-like-Box', template);
}

likeCounting();

/* -------------------------------------------------------------------------- */
/*                              exchange Product                              */
/* -------------------------------------------------------------------------- */

async function renderingMyProducts() {
  const myPostList = [];
  products.forEach((item) => {
    if (userValid === item.userPost) {
      myPostList.push(item);
    }
  });
  insertLast('.profile-myProductList', `판매상품${productCount}개`);
  myPostList.forEach((item) => {
    const template = /*html*/ `
                <div class="flex gap-2 items-center relative">
                  <div class="w-12 h-12  rounded-lg overflow-hidden">
                    <img
                    class="w-full h-full object-center"
                    src="${getPbImageURL(item, 'images')}"
                    alt="${item.alt}"
                    />
                  </div>
                  <p class="font-semibold text-base">${item.title}</p>
                  <span
                    class="profile-myProduct-state text-sm bg-gray-200 px-1.5 py-0.5 rounded-full absolute right-0"
                    >${item.state}</span
                  >
                </div>
    `;
    insertLast('.profile-myPostList-container', template);
  });
}
renderingMyProducts();

//product state에 따른 상태표시창

function myProductState() {
  const state = getNodes('.profile-myProduct-state');
  state.forEach((item) => {
    if (item.textContent === 'done') {
      item.textContent = '거래완료';
      item.classList.add('bg-secondary', 'text-background');
    } else if (item.textContent === 'reservation') {
      item.textContent = '예약중';
      item.classList.add('bg-bluelight-300');
    } else {
      item.textContent = '';
      item.classList.remove('bg-gray-200');
    }
  });
}

myProductState();

/* -------------------------------------------------------------------------- */
/*                                   logOut                                   */
/* -------------------------------------------------------------------------- */

async function userLogOut() {
  deleteStorage('userId');
  deleteStorage('phoneNumber');
  window.location.href = '/src/pages/';
}

logOutButton.addEventListener('click', userLogOut);

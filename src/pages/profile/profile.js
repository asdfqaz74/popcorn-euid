import {
  getNode,
  getNodes,
  getStorage,
  setStorage,
  getPbImageURL,
  insertLast,
  deleteStorage,
} from '/src/lib/';
import { gsap } from 'gsap';
import pb from '/src/api/pocketbase';

const profileClose = getNode('.profile-button-close');
const profileList = getNodes('.profile-listBox-button');
const commentMore = getNode('.profile-button-more');

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
const userLoginInfo = '01012345678';
async function loginSetting() {
  let userNow = records.find((item) => item.phoneNumber === userLoginInfo);
  setStorage('userId', userNow.id);
  console.log(userNow);
}
loginSetting();

/* -------------------------------------------------------------------------- */
/*                             pocketbase profile;                            */
/* -------------------------------------------------------------------------- */

async function renderProduct() {
  const userValid = await getStorage('userId');
  // const auth = await getStorage('auth');
  let userNow = records.find((item) => item.id === userValid);
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

renderProduct();

//temperature

async function temperatureBar() {
  const likes = await pb.collection('likes').getFullList({
    expand: 'user',
  });
  console.log(likes[1].expand.user.id);
}

temperatureBar();

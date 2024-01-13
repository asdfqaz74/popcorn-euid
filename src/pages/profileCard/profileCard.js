import {
  getNode,
  getStorage,
  getPbImageURL,
  debounce,
  getNodes,
  addClass,
  removeClass,
} from '/src/lib/';
import pb from '/src/api/pocketbase';
import { insertLast, removeElement } from '../../lib/dom/insert';

//profileCard 닫힘 버튼
const profileCardClose = getNode('.profileCard-button-close');
const profileAreaEditInput = Array.from(
  getNodes('.profileCard-area-edit input')
);
const profileButtonEdit = getNode('.profileCard-button-edit');
const profileCardEditSubmit = getNode('.profileCard-button-submit');
const profileCardEditClose = getNode('.profileCard-button-editClose');

function closeHandler() {
  history.back();
}
profileCardClose.addEventListener('click', closeHandler);

/* -------------------------------------------------------------------------- */
/*                                  유저정보 불러오기                                 */
/* -------------------------------------------------------------------------- */

//현재 로그인한 유저id
const userRecords = await pb.collection('users').getFullList();
const userValid = await getStorage('userId');
let userNow = userRecords.find((item) => item.id === userValid);

//유저 정보 랜더링
async function userNowRendering() {
  const { username, company } = userNow;
  const template =
    /*html*/
    `
  <div class="">
  <p class="profileCard-user-name profile-textPrivacy text-lg font-semibold">${username}</p>
  <p
    class="text-sm text-secondary inline-block border border-secondary rounded-full px-1"
  >
    ${company}
  </p>
</div>
<div
  class="profileCard-user-profileImg w-[4.125rem] h-[4.125rem] rounded-full overflow-hidden"
>
  
</div>  
  `;
  insertLast('.profileCard-user', template);
}

userNowRendering();

//profile 유저네임 프라이버시
function userNamePrivacy() {
  const textPrivacy = Array.from(getNodes('.profile-textPrivacy'));
  textPrivacy.forEach((item) => {
    let sliceName = `${item.textContent.slice(0, 4)}***`;
    item.textContent = sliceName;
  });
}
userNamePrivacy();

/* -------------------------------------------------------------------------- */
/*                              profile 유저 정보 수정                              */
/* -------------------------------------------------------------------------- */
//input 창 보이기
function showEditUserInfo() {
  addClass('.profileCard-area-info', 'hidden');
  addClass('.profileCard-button-edit', 'hidden');
  removeClass('.profileCard-area-edit', 'hidden');
  removeClass('.profileCard-button-editClose', 'hidden');
}

profileButtonEdit.addEventListener('click', showEditUserInfo);
//input창 닫기

profileCardEditClose.addEventListener('click', () => {
  location.reload();
});

//radio value 값 가져오기
function radioValue() {
  const radios = Array.from(document.getElementsByName('gender'));
  let radio;
  for (radio of radios) {
    if (radio.checked) {
      radio.value;
    }
  }
  console.log(radio.value);
  return radio.value;
}

//edit 정보 formData화

async function userInfoFormData() {
  const newData = new FormData();
  newData.append('username', getNode('#username').value);
  newData.append('gender', radioValue());
  newData.append('age', getNode('#age').value);
  newData.append('qualification', getNode('#qualification').value);
  try {
    await pb.collection('users').update(userNow.id, newData);
    alert('수정 완료');
    location.href = '/src/pages/profileDetails/';
  } catch {
    alert('정보를 올바르게 입력해주세요');
  }
}
profileCardEditSubmit.addEventListener('click', userInfoFormData);

//user기본정보 랜더링

async function userBasicRendering() {
  const template =
    /*html*/
    `
  <ul class="flex flex-col gap-4 pt-3">
      <li class="profileCard-layout">
          <span class="font-semibold">이름(별명)</span>
          <span class="text-base text-Contents-contentSecondary"
            >미입력</span
          >
        </li>
      <li class="profileCard-layout">
          <span class="font-semibold">하는 일</span>
          <span class="text-base text-Contents-contentSecondary"
            >미입력</span
          >
        </li>
        <li class="profileCard-layout">
          <span class="font-semibold">성별</span>
          <span class="text-base text-Contents-contentSecondary"
            >미입력</span
          >
        </li>
        <li class="profileCard-layout">
          <span class="font-semibold">연령</span>
          <span class="text-base text-Contents-contentSecondary"
            >미입력</span
          >
        </li>
        <li class="profileCard-layout">
          <span class="font-semibold">회사</span>
          <span class="text-base text-Contents-contentSecondary"
            >미입력</span
          >
        </li>
        <li class="profileCard-layout">
          <span class="font-semibold">자격</span>
          <span class="text-base text-Contents-contentSecondary"
            >미입력</span
          >
        </li>
        <li class="px-3" >
              <a
                href="/src/pages/profileDetails/"
                class="profileCard-button-submit block justify-center border rounded-lg py-2 bg-gray-100 w-full text-center"
              >
                상세페이지 이동
              </a>
            </li>
  
  </ul>
  `;
  insertLast('.profileCard-area-info', template);
}

userBasicRendering();

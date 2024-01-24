import {
  getNode,
  getNodes,
  insertLast,
  getStorage,
  setStorage,
} from '/src/lib/';
import { removeElement } from '../../lib/dom/insert';
import { deleteStorage } from '../../lib/utils/storage';
import pb from '/src/api/pocketbase';

const profileDetailsClose = getNode('.profileDetails-button-close');
const profileToggleButtonWraps = getNodes('.profileDetails-buttonWrap');
const jobSelectButtonWrap = getNode('.profileDetails-jobList-box');
const profileActiveButton = getNodes('.profile-button-active');
const profileClickEvent = getNode('.profileDetails-container');
const agreeCheckbox = getNodes('.profileDtails-agreement-container input');
const agreeSubmitButton = getNode('.profileDetails-button-submit');
const agreeButtonCheckAll = getNode('.profileDetails-checkAll');
const agreeModal = getNode('.agree-modal');
const closeModal = getNode('.modal-close');
/* -------------------------------------------------------------------------- */
/*                                 //database                                 */
/* -------------------------------------------------------------------------- */

const jobData = [
  '프론트엔드',
  '백엔드',
  '리액트',
  '풀스택',
  '알고리즘',
  '기초지식',
  'UI디자인',
  'UX디자인',
  'UI/UX',
  '데이터분석',
  '통계분석',
  '시각화',
];

/* -------------------------------------------------------------------------- */
/*                                  유저정보 불러오기                                 */
/* -------------------------------------------------------------------------- */

//현재 로그인한 유저id
const userRecords = await pb.collection('users').getFullList();
const userValid = await getStorage('userId');
let userNow = userRecords.find((item) => item.id === userValid);

//profileDetails 닫힘 버튼

function closeHandler() {
  history.back();
}
profileDetailsClose.addEventListener('click', closeHandler);

/* -------------------------------------------------------------------------- */
/*                                 //jobButton                                */
/* -------------------------------------------------------------------------- */

function activeHandler() {
  const activeBox = this.nextElementSibling;
  activeBox.classList.toggle('hidden');
}

profileActiveButton.forEach((item) => {
  item.addEventListener('click', activeHandler);
});

/* -------------------------------------------------------------------------- */
/*                                toggleButton                                */
/* -------------------------------------------------------------------------- */

//토글 기능

function toggleHandler(e) {
  const buttonList = Array.from(e.currentTarget.children);

  buttonList.forEach((item) => {
    item.classList.toggle('profileDetails-button-valid');
    item.firstElementChild.classList.toggle('hidden');
  });

  privacyOrPublic(e);
}
profileToggleButtonWraps.forEach((item) => {
  item.addEventListener('click', toggleHandler);
});

//토글 기능에 따른 공개여부
async function privacyOrPublic(e) {
  const buttonList = Array.from(e.currentTarget.children);
  const buttonPrivacy = Array.from(buttonList[0].classList).includes(
    'profileDetails-button-valid'
  );
  const keyName = e.currentTarget.dataset.field;
  if (buttonPrivacy && keyName === 'gender') {
    setStorage('genderPrivacy', 'true');
  }
  if (buttonPrivacy && keyName === 'age') {
    setStorage('agePrivacy', 'true');
  } else if (keyName === 'gender' && !buttonPrivacy) {
    setStorage('genderPrivacy', 'false');
  } else if (keyName === 'age' && !buttonPrivacy) {
    setStorage('agePrivacy', 'false');
  }
}

//토글 초기 세팅
async function toggleSetting() {
  const genderPrivacy = await getStorage('genderPrivacy');
  const agePrivacy = await getStorage('agePrivacy');

  const genderButtonList = Array.from(profileToggleButtonWraps[0].children);
  const ageButtonList = Array.from(profileToggleButtonWraps[1].children);

  if (genderPrivacy === 'true') {
    genderButtonList[0].classList.add('profileDetails-button-valid');
    genderButtonList[0].firstElementChild.classList.remove('hidden');
    genderButtonList[1].classList.remove('profileDetails-button-valid');
    genderButtonList[1].firstElementChild.classList.add('hidden');
  } else {
    genderButtonList[0].classList.remove('profileDetails-button-valid');
    genderButtonList[0].firstElementChild.classList.add('hidden');
    genderButtonList[1].classList.add('profileDetails-button-valid');
    genderButtonList[1].firstElementChild.classList.remove('hidden');
  }
  if (agePrivacy === 'true') {
    ageButtonList[0].classList.add('profileDetails-button-valid');
    ageButtonList[0].firstElementChild.classList.remove('hidden');
    ageButtonList[1].classList.remove('profileDetails-button-valid');
    ageButtonList[1].firstElementChild.classList.add('hidden');
  } else {
    ageButtonList[0].classList.remove('profileDetails-button-valid');
    ageButtonList[0].firstElementChild.classList.add('hidden');
    ageButtonList[1].classList.add('profileDetails-button-valid');
    ageButtonList[1].firstElementChild.classList.remove('hidden');
  }
}
toggleSetting();

/* -------------------------------------------------------------------------- */
/*                            agree button group                            */
/* -------------------------------------------------------------------------- */
function agreeGroupValidation() {
  let agreeValid = 0;
  agreeCheckbox.forEach((item) => {
    if (item.checked) {
      agreeValid++;
    }
  });
  if (agreeValid === 4) {
    agreeSubmitButton.classList.add('profileDetails-buttonAgree-valid');
  } else {
    agreeSubmitButton.classList.remove('profileDetails-buttonAgree-valid');
  }
}

agreeCheckbox.forEach((item) => {
  item.addEventListener('change', agreeGroupValidation);
});
//agree button All

function agreeCheckAll() {
  if (agreeButtonCheckAll.checked) {
    agreeCheckbox.forEach((item) => {
      item.checked = true;
    });
    agreeSubmitButton.classList.add('profileDetails-buttonAgree-valid');
  } else {
    agreeCheckbox.forEach((item) => {
      item.checked = false;
    });
    agreeSubmitButton.classList.remove('profileDetails-buttonAgree-valid');
  }
}

agreeButtonCheckAll.addEventListener('change', agreeCheckAll);

//agree modal 작업
async function sumitHandler(e) {
  const submitClassList = Array.from(agreeSubmitButton.classList);
  const form = this.closest('form');
  let submitValid = submitClassList.includes(
    'profileDetails-buttonAgree-valid'
  );
  if (!submitValid) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    alert('필수항목에 동의 해주셔야 합니다');
  } else {
    e.preventDefault();
    const jobData = await getStorage('job');
    const data = {
      job: jobData[0],
    };
    agreeModal.showModal();
    await pb.collection('users').update(userNow.id, data);
  }
}

agreeSubmitButton.addEventListener('click', sumitHandler);
closeModal.addEventListener('click', () => {
  agreeModal.close();
  window.location.href = '/src/pages/profile/';
});

/* -------------------------------------------------------------------------- */
/*                                   하는 일 설정                                  */
/* -------------------------------------------------------------------------- */

//jobList 랜더링

function jobListRendering() {
  jobData.forEach((item) => {
    const template = /*html*/ `
              <button
                class="job-category my-1 bg-Bluelight-200 text-base px-2 py-0.5 rounded-full"
                value= ${item}
              >
                ${item}
              </button>
    `;
    insertLast('.profileDetails-jobList-box', template);
  });
}
getNode('.jobList-rendering').addEventListener('click', jobListRendering);
//jobList 선택
async function jobSelected(e) {
  e.target.classList.add('job-data');
  let jobList = Array.from(getNodes('.job-category'));
  let selectList = Array.from(getNodes('.job-selected'));
  removeElement('.profileDetails-job-selected');
  if (jobList.includes(e.target)) {
    let jobRenderTemplate = /*html*/ `
    <button
  class="job-selected bg-secondary my-1 text-background text-base px-2 py-0.5 rounded-full bg-[url=] mt-1"
  >
  ${e.target.value}x
  </button>
    `;
    await insertLast('.profileDetails-job-selected', jobRenderTemplate);
  } else if (selectList.includes(e.target)) {
    e.target.remove(e.target);
    console.log(e.target.textContent.length);
  }
  const jobDataList = Array.from(getNodes('.job-data'));
  const jobSelectedValue = jobDataList.map((item) => item.value);
  setStorage('job', jobSelectedValue);
}

jobSelectButtonWrap.addEventListener('click', jobSelected);

//job Data 전송
// const userRecords = await pb.collection('users').getFullList();

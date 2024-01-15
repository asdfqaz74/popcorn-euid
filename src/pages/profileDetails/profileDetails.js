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
let toggleBoolean = false;
function toggleHandler(e) {
  const buttonPrivacy = this.childNodes[1];
  const buttonPublic = this.childNodes[3];
  const buttonImgL = buttonPrivacy.childNodes[1];
  const buttonImgR = buttonPublic.childNodes[1];

  // privacyOrPublic(e);

  if (!toggleBoolean) {
    buttonPrivacy.classList.remove('profileDetails-button-valid');
    buttonImgL.src = ' ';
    buttonPublic.classList.add('profileDetails-button-valid');
    buttonImgR.src = '/public/images/peoplePublic.svg';
    return (toggleBoolean = true);
  } else {
    buttonPrivacy.classList.add('profileDetails-button-valid');
    buttonImgL.src = '/public/images/passwordDetails.svg';
    buttonPublic.classList.remove('profileDetails-button-valid');
    buttonImgR.src = ' ';
    return (toggleBoolean = false);
  }
}

profileToggleButtonWraps.forEach((item) => {
  item.addEventListener('click', toggleHandler);
});

//토글 기능에 따른 공개여부
// async function privacyOrPublic(e) {
//   const classList = Array.from(e.target.classList);
//   if (
//     classList.includes('profileDetails-button-valid') &&
//     classList.includes('profile-privacy')
//   ) {
//     const keyDataName = e.target.dataset.field;
//     const dataPrivacy = { keyDataName: 'privacy' };
//     await pb.collection('users').update(userNow.id, dataPrivacy);
//   }
// }

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
function sumitHandler(e) {
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
    agreeModal.showModal();
  }
}

agreeSubmitButton.addEventListener('click', sumitHandler);
closeModal.addEventListener('click', () => {
  agreeModal.close();
});

/* -------------------------------------------------------------------------- */
/*                                   하는 일 설정                                  */
/* -------------------------------------------------------------------------- */

//jobList 랜더링

function jobListRendering() {
  jobData.forEach((item) => {
    const template = /*html*/ `
              <button
                class="job-category bg-Bluelight-200 text-base px-2 py-0.5 rounded-full"
                value= ${item}
              >
                ${item}
              </button>
    `;
    insertLast('.profileDetails-jobList-box', template);
  });
}
jobListRendering();

//jobList 선택

async function jobSelected(e) {
  let jobList = Array.from(getNodes('.job-category'));
  let selectList = Array.from(getNodes('.job-selected'));
  if (jobList.includes(e.target)) {
    let jobRenderTemplate = /*html*/ `
    <button
  class="job-selected bg-secondary text-background text-base px-2 py-0.5 rounded-full bg-[url=] mt-1"
  >
  ${e.target.value}x
  </button>
    `;
    insertLast('.profileDetails-job-selected', jobRenderTemplate);
  } else if (selectList.includes(e.target)) {
    removeElement('.job-selected');
    deleteStorage('job');
  }

  let jobSelectTextGroup = selectList.map((item) => item.value);
  console.log(selectList);
  setStorage('job', jobSelectTextGroup);
}

profileClickEvent.addEventListener('click', jobSelected);

//job Data 전송
// const userRecords = await pb.collection('users').getFullList();

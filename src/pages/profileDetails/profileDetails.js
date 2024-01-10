import { getNode, getNodes } from '/src/lib/';

const ProfileDetailsClose = getNode('.profileDetails-button-close');
const profileToggleButtonWraps = getNodes('.profileDetails-buttonWrap');
const profileActiveButton = getNodes('.profile-button-active');
const agreeCheckbox = getNodes('.profileDtails-agreement-container input');
const agreeSubmitButton = getNode('.profileDetails-button-submit');
const agreeModal = getNode('.agree-modal');
const closeModal = getNode('.modal-close');
//profileDetails 닫힘 버튼

function closeHandler() {
  history.back();
}
ProfileDetailsClose.addEventListener('click', closeHandler);

//jobButton
// active div에 높이를 제한을 주고 button에 closest로 div 부모요소를 가져와 할 수 있도록 함

function activeHandler() {
  const activeBox = this.closest('.profile-activeBox');
  activeBox.classList.toggle('h-[88px]');
}

profileActiveButton.forEach((item) => {
  item.addEventListener('click', activeHandler);
});

//toggleButton

let toggleBoolean = false;
function toggleHandler() {
  const buttonLeft = this.childNodes[1];
  const buttonRight = this.childNodes[3];
  const buttonImgL = buttonLeft.childNodes[1];
  const buttonImgR = buttonRight.childNodes[1];

  if (!toggleBoolean) {
    buttonLeft.classList.remove('profileDetails-button-valid');
    buttonImgL.src = ' ';
    buttonRight.classList.add('profileDetails-button-valid');
    buttonImgR.src = '/public/images/peoplePublic.svg';
    return (toggleBoolean = true);
  } else {
    buttonLeft.classList.add('profileDetails-button-valid');
    buttonImgL.src = '/public/images/passwordDetails.svg';
    buttonRight.classList.remove('profileDetails-button-valid');
    buttonImgR.src = ' ';
    return (toggleBoolean = false);
  }
}

profileToggleButtonWraps.forEach((item) => {
  item.addEventListener('click', toggleHandler);
});

//agree button group
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
//pocketbase 세팅

import { getNode, getNodes, tiger } from '/src/lib/';

const profileDetailsClose = getNode('.profileDetails-button-close');
const profileToggleButtonWraps = getNodes('.profileDetails-buttonWrap');
const profileActiveButton = getNodes('.profile-button-active');
const agreeCheckbox = getNodes('.profileDtails-agreement-container input');
const agreeSubmitButton = getNode('.profileDetails-button-submit');
const agreeModal = getNode('.agree-modal');
const closeModal = getNode('.modal-close');
//database

//profileDetails 닫힘 버튼

function closeHandler() {
  history.back();
}
profileDetailsClose.addEventListener('click', closeHandler);

//jobButton

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

//job api
const url = `https://apis.data.go.kr/B490007/ncsJobBasCom/openapi25?serviceKey=9gWjghTB3CkqwuNqrdCnSrwDeZCbrgToaCbSyQnqaIujm0c0%2BtsQSSq5kR74LNSAGCAuY0W2rvgHaeB4uBnwDg%3D%3D&numOfRows=100&pageNo=1&returnType=xml&dutyCd=01010101`;

var xmlChange = require('xml-js');

const response = await fetch(url);
var options = {
  compact: true,
  ignoreComment: true,
  ignoreDeclaration: true,
};

var json = xmlChange.xml2json(response, options);

console.log(json);

import { removeClass } from '../../lib/dom/css';
import { getNode, toggleClass } from '/src/lib/';
import PocketBase from 'pocketbase';

/* -------------------------------------------------------------------------- */
/*                               버튼으로 페이지 이동                              */
/* -------------------------------------------------------------------------- */
const goBack = getNode('.button-goBack');
const moveBack = getNode('.button-moveBack');
const signUpContainer = getNode('.signUp-container');
const signUpFormBefore = getNode('.signUp-form-before');
const agree = getNode('.signUp-button-agree');

// 첫번째 페이지 뒤로가기
function handleButton() {
  history.back();
}

// 두번째 페이지 뒤로가기
function handlePageButton() {
  signUpContainer.style.transform = 'translateX(0%)';
}

goBack.addEventListener('click', handleButton);
moveBack.addEventListener('click', handlePageButton);
signUpFormBefore.addEventListener('submit', (e) => {
  e.preventDefault();
  signUpContainer.style.transform = 'translateX(-50%)';
});
agree.addEventListener('click', () => {
  window.location.href = '/src/pages/story/';
});

/* -------------------------------------------------------------------------- */
/*                         휴대폰 번호 valid 상태로 변경                            */
/* -------------------------------------------------------------------------- */
// 1. input.value랑 정규식 활용하여 유효성 검사
// 2. 조건에 충족하면 버튼에 'signUp-verify-valid' 클래스 추가

const phoneNumberInput = document.getElementById('phonenumber');
const verifyButton = getNode('.signUp-button-verify');
const agreeButton = document.getElementById('agree');
const regex = /^\d{3}\d{4}\d{4}$/;

function validCheckPhoneNumber(e) {
  const phoneNumber = e.target.value;
  console.log(phoneNumber);
  const isValidPhoneNumber = regex.test(phoneNumber);

  if (isValidPhoneNumber) {
    removeClass(verifyButton, 'text-gray-500');
    toggleClass(verifyButton, 'signUp-verify-valid');
  } else {
    removeClass(verifyButton, 'signUp-verify-valid');
  }
}

phoneNumberInput.addEventListener('input', validCheckPhoneNumber);

/* -------------------------------------------------------------------------- */
/*                              인증번호 받아오기                                 */
/* -------------------------------------------------------------------------- */
const randomNumber = Math.floor(Math.random() * 900000) + 100000;

function handelverifyNumber() {
  const buttonValid = Array.from(verifyButton.classList).includes(
    'signUp-verify-valid'
  );

  if (buttonValid) {
    localStorage.setItem('verifyNumber', randomNumber);
    alert(randomNumber);
  }
}

verifyButton.addEventListener('click', handelverifyNumber);

/* -------------------------------------------------------------------------- */
/*              입력한 휴대폰 번호값 localStorage에 저장하고 화면에 랜더링               */
/* -------------------------------------------------------------------------- */

function validPhoneNumber() {
  const phoneNumberValue = getNode('.signUp-input-phoneNumber').value;
  // console.log(phoneNumberValue);
  const sendPhoneNumber = JSON.stringify(phoneNumberValue);

  localStorage.setItem('phoneNumber', sendPhoneNumber);
  console.log('저장 완료');

  const showPhoneNumber = getNode('.signUp-input-after');
  const getPhoneNumber = localStorage.getItem('phoneNumber');
  showPhoneNumber.textContent = JSON.parse(getPhoneNumber);
}

verifyButton.addEventListener('click', validPhoneNumber);

/* -------------------------------------------------------------------------- */
/*                             입력번호 유효성 검사                                */
/* -------------------------------------------------------------------------- */

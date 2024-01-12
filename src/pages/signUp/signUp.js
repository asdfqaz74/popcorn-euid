import { removeClass } from '../../lib/dom/css';
import { getNode, toggleClass } from '/src/lib/';
import pb from '/src/api/pocketbase';

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

const phoneNumberInput = document.getElementById('PhoneNumber');
const verifyButton = getNode('.signUp-button-verify');
const agreeButton = document.getElementById('agree');

function validCheckPhoneNumber(e) {
  const phoneNumber = e.target.value;
  console.log(phoneNumber);
  const regex = /^\d{3}\d{4}\d{4}$/;
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
/*                              인증번호 받아오기                                 */
/* -------------------------------------------------------------------------- */

const verifyNumberInput = getNode('.signUp-input-verifyNumber');

function ValidVerifyNumber(e) {
  const verifyNumber = e.target.value;
  console.log(verifyNumber);

  if (getVerifyNumber === verifyNumber) {
    console.log('성공!');
    removeClass(agreeButton, 'bg-gray-500');
    toggleClass(agreeButton, 'signUp-agree-valid');
  } else {
    console.log('실패!');
    removeClass(agreeButton, 'signUp-agree-valid');
    addClass(agreeButton, 'bg-gray-500');
  }
}

verifyNumberInput.addEventListener('input', ValidVerifyNumber);

/* -------------------------------------------------------------------------- */
/*                            유효성 검사 끝나고 이동                               */
/* -------------------------------------------------------------------------- */
async function allValidCheck() {
  const agreeButtonValid = Array.from(agreeButton.classList).includes(
    'signUp-agree-valid'
  );
  if (agreeButtonValid) {
    const userName = Math.floor(Math.random() * 1000) + 1000;
    const phoneNumber = localStorage.getItem('phoneNumber');

    const data = {
      username: `${userName}`,
      phoneNumber: `${phoneNumber}`,
      password: '123123qwe',
      passwordConfirm: '123123qwe',
    };

    await pb.collection('users').create(data);
    window.location.href = '/src/pages/story/';
  } else {
    alert('인증번호가 잘못되었습니다.');
  }
}

agreeButton.addEventListener('click', allValidCheck);

/* -------------------------------------------------------------------------- */
/*                              pb로 데이터 전송                                 */
/* -------------------------------------------------------------------------- */

// const pb = new PocketBase('https://popcorns.pockethost.io');

// function sendData(){
// const data = {
//   userName: userName,
//   phoneNumber: phoneNumber,
// };

// const record = await pb.collection('users').create(data);}

// agreeButton.addEventListener('click', sendData);

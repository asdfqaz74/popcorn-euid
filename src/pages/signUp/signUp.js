import { addClass, removeClass } from '../../lib/dom/css';
import { getNode, toggleClass, setStorage } from '/src/lib/';
import pb from '/src/api/pocketbase';

/* -------------------------------------------------------------------------- */
/*                               버튼으로 페이지 이동                              */
/* -------------------------------------------------------------------------- */
const goBack = getNode('.button-goBack');
const moveBack = getNode('.button-moveBack');
const signUpContainer = getNode('.signUp-container');
const signUpFormBefore = getNode('.signUp-form-before');

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

/* -------------------------------------------------------------------------- */
/*                         휴대폰 번호 valid 상태로 변경                            */
/* -------------------------------------------------------------------------- */
// 1. input.value랑 정규식 활용하여 유효성 검사
// 2. 조건에 충족하면 버튼에 'signUp-verify-valid' 클래스 추가

const phoneNumberInput = document.getElementById('phoneNumber');
const verifyButton = getNode('.signUp-button-verify');
const agreeButton = document.getElementById('agree');
const regex = /^010\d{4}\d{4}$/;

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
const setVerifyNumber = sessionStorage.setItem('verifyNumber', randomNumber);
const getVerifyNumber = sessionStorage.getItem('verifyNumber');

function handelverifyNumber() {
  const buttonValid = Array.from(verifyButton.classList).includes(
    'signUp-verify-valid'
  );

  if (buttonValid) {
    alert(getVerifyNumber);
    // 인증번호 비교 위해 콘솔로 불러오기 -> 로컬이라 변수 설정 다시 하기!
    console.log(getVerifyNumber);
  }
}

// verifyButton.addEventListener('click', handelverifyNumber);

/* -------------------------------------------------------------------------- */
/*              입력한 휴대폰 번호값 localStorage에 저장하고 화면에 랜더링               */
/* -------------------------------------------------------------------------- */

async function validPhoneNumber() {
  const phoneNumberValue = getNode('.signUp-input-phoneNumber').value;
  console.log(phoneNumberValue);

  const test = await pb.collection('users').getFullList('phoneNumber');
  const ArrayPhoneNumber = test.map((row) => row.phoneNumber);
  const duplicatePhoneNumber = ArrayPhoneNumber.includes(phoneNumberValue);
  console.log(duplicatePhoneNumber);

  if (duplicatePhoneNumber) {
    alert('이미 회원가입 된 번호입니다. 로그인 페이지로 이동합니다! 😃');
    window.location.href = '/src/pages/login/';
  } else {
    handelverifyNumber();
    const sendPhoneNumber = JSON.stringify(phoneNumberValue);

    localStorage.setItem('phoneNumber', sendPhoneNumber);
    console.log('저장 완료');

    const showPhoneNumber = getNode('.signUp-input-after');
    const getPhoneNumber = localStorage.getItem('phoneNumber');
    showPhoneNumber.textContent = JSON.parse(getPhoneNumber);
  }
}

verifyButton.addEventListener('click', validPhoneNumber);

/* -------------------------------------------------------------------------- */
/*                             입력번호 유효성 검사                                */
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
  // pb로 새로운 핸드폰 번호 post
  const agreeButtonValid = Array.from(agreeButton.classList).includes(
    'signUp-agree-valid'
  );
  const records = await pb.collection('users').getFullList();

  if (agreeButtonValid) {
    const userName = Math.floor(Math.random() * 1000) + 1000;
    const phoneNumber = JSON.parse(localStorage.getItem('phoneNumber'));

    const data = {
      username: `${userName}`,
      phoneNumber: `${phoneNumber}`,
      password: `${phoneNumber}`,
      passwordConfirm: `${phoneNumber}`,
    };

    await pb.collection('users').create(data);

    //pb 에서 로컬스토리지로 저장
    let isAuth = { isAuth: true };
    let userNow = records.find(
      (item) => item.phoneNumber === phoneNumberInput.value
    );
    setStorage('userId', userNow.id);
    setStorage('auth', isAuth);

    //story 페이지로 이동
    window.location.href = '/src/pages/story/';
  } else {
    alert('인증번호가 잘못되었습니다.');
  }
}

agreeButton.addEventListener('click', allValidCheck);

/* -------------------------------------------------------------------------- */
/*                              pb로 데이터 전송                                 */
/* -------------------------------------------------------------------------- */
// const userName = Math.floor(Math.random() * 1000) + 1000;
// const phoneNumber = localStorage.getItem('phoneNumber');
// console.log(userName);
// console.log(phoneNumber);

// async function sendData() {
//   const data = {
//     userName: `${userName}`,
//     phoneNumber: phoneNumber,
//     password: '12345678',
//     passwordConfirm: '12345678',
//   };

//   const record = await pb.collection('users').create(data);
// }

// agreeButton.addEventListener('click', sendData);

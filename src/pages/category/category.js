import { getNode, deleteStorage, addClass, getNodes } from '/src/lib/';
import pocketbase from 'pocketbase';
import pb from '/src/api/pocketbase';

/* -------------------------------------------------------------------------- */
/*                      뒤로가기 버튼 클릭 시 이전 페이지로 이동                       */
/* -------------------------------------------------------------------------- */
const goBack = getNode('.button-goback');

function handleButton() {
  window.location.href = '/src/pages/start/';
}

goBack.addEventListener('click', handleButton);

/* -------------------------------------------------------------------------- */
/*                         플러스 버튼 클릭 시 배경 변경                             */
/* -------------------------------------------------------------------------- */
const categoryInputs = document.querySelectorAll('.category-checkbox');

function handleItemBg() {
  const label = this.closest('label');
  label.classList.toggle('category-button-selected');
  label.classList.toggle('bg-primary');
  label.classList.toggle('is-checked');
}

categoryInputs.forEach(function (item) {
  item.addEventListener('click', handleItemBg);
});

/* -------------------------------------------------------------------------- */
/*                      localStorage 에 선택된 값 저장하기                         */
/* -------------------------------------------------------------------------- */

// function handleSaveToLocalStorage(event) {
//   const getItem = localStorage.getItem('interest');
//   const value = event.target.value;
//   // console.log(value);

//   // 저장된 데이터가 있는 경우에는 파싱하여 배열로 변환
//   let interest = [];
//   if (getItem) {
//     interest = JSON.parse(getItem);
//   }

//   // 클릭된 input 요소의 id 값을 저장하거나 제거
//   const index = interest.indexOf(value);
//   if (index === -1) {
//     interest.push(value);
//   } else {
//     interest.splice(index, 1);
//   }

//   // 배열을 문자로 변환 후 로컬스토리지에 저장
//   const jsonString = JSON.stringify(interest);
//   localStorage.setItem('interest', jsonString);
// }

// categoryInputs.forEach(function (item) {
//   item.addEventListener('click', handleSaveToLocalStorage);
// });

/* -------------------------------------------------------------------------- */
/*                        검색하면 해당 값이 보이는 함수                             */
/* -------------------------------------------------------------------------- */
//1. input 태그에 검색어를 입력하고 엔터를 치면
//2. 해당하는 아이템에 보더 형성

/* -------------------------------------------------------------------------- */
/*                        저장 버튼 누르면 데이터로 전송                             */
/* -------------------------------------------------------------------------- */
const saveButton = getNode('.category-button-save');

async function handleSaveButton() {
  // localStorage 에 저장
  const checkbox = getNodes('label.is-checked');
  const checkList = Array.from(checkbox);
  let interest = [];
  checkList.forEach((item) => {
    const forValue = item.getAttribute('for');
    interest.push(forValue);
  });
  const interestJson = JSON.stringify(interest);
  localStorage.setItem('interest', interestJson);

  // pb에 저장
  const interestList = JSON.parse(localStorage.getItem('interest'));
  const interestStr = interestList.toString();
  console.log(interestStr);
  const data = {
    category: interestStr,
    password: '12345678',
    passwordConfirm: '12345678',
  };
  await pb.collection('users').create(data);

  // 페이지 이동
  window.location.href = '/src/pages/login/';
}

saveButton.addEventListener('click', handleSaveButton);

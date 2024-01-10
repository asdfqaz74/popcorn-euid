import { getNode } from '/src/lib/';

// 뒤로가기 버튼 클릭 시 이전 페이지로 이동
const goBack = getNode('.button-goback');

function handleButton() {
  history.back();
}

goBack.addEventListener('click', handleButton);

// 플러스 버튼 클릭 시 배경 변경
const categoryInputs = document.querySelectorAll('.category-checkbox');

function changeItemBg() {
  const label = this.closest('label');
  label.classList.toggle('category-button-selected');
  label.classList.toggle('bg-primary');
  // console.log(e.target);
}

categoryInputs.forEach(function (item) {
  item.addEventListener('click', changeItemBg);
});

// localStorage 에 선택된 값 저장하기

function saveInterest(event) {
  const getItem = localStorage.getItem('interest');
  const value = event.target.id;

  // 저장된 데이터가 있는 경우에는 파싱하여 배열로 변환
  let interest = [];
  if (getItem) {
    interest = JSON.parse(getItem);
  }

  // 클릭된 input 요소의 id 값을 저장하거나 제거
  const index = interest.indexOf(value);
  if (index === -1) {
    interest.push(value);
  } else {
    interest.splice(index, 1);
  }

  // 배열을 문자로 변환 후 로컬스토리지에 저장
  const jsonString = JSON.stringify(interest);
  localStorage.setItem('interest', jsonString);
}

categoryInputs.forEach(function (item) {
  item.addEventListener('click', saveInterest);
});

// 검색하면 해당 값이 보이는 함수
let search = document.querySelector('category-search-input');
console.log(search);

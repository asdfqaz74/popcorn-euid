import { getNode, addClass } from '/src/lib/';

// 뒤로가기 버튼 클릭 시 이전 페이지로 이동
const goBack = getNode('.button-goback');

function handleButton() {
  history.back();
}

goBack.addEventListener('click', handleButton);

// 플러스 버튼 클릭 시 배경 변경
const categorySave = document.querySelectorAll('.save');

function changeItem(e) {
  e.stopPropagation();
  const label = this.closest('label');
  label.classList.toggle('category-button-selected');
  label.classList.toggle('bg-primary');
}

categorySave.forEach(function (item) {
  item.addEventListener('click', changeItem);
});

// localStorage 에 선택된 값 저장하기

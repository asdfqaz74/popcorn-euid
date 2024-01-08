import { getNode } from '/src/lib/';

// 뒤로가기 버튼 클릭 시 이전 페이지로 이동
const goBack = getNode('.button-goback');

function handleButton() {
  window.location.href = '/src/pages/start/';
}

goBack.addEventListener('click', handleButton);

// 플러스 버튼 클릭 시 호버 효과
const category = document.querySelectorAll('.category-item-button');

function toggleImage(e) {
  const plusImage = this.querySelector('.category-item-image');
  const isChecked = document.getElementById('checkbox').checked;

  if (isChecked) {
    plusImage.style.backgroundImage = "url('/public/images/checked.svg')";
  } else {
    plusImage.style.backgroundImage = "url('/public/images/plus.svg')";
  }
}

for (let i = 0; i < category.length; i++) {
  category[i].addEventListener('click', toggleImage);
}
// category.forEach(function (plus) {
//   plus.addEventListener('click', toggleImage);
// });

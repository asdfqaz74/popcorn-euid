import { getNode, addClass } from '/src/lib/';

// 뒤로가기 버튼 클릭 시 이전 페이지로 이동
const goBack = getNode('.button-goback');

function handleButton() {
  history.back();
}

goBack.addEventListener('click', handleButton);

// 플러스 버튼 클릭 시 배경 변경
// const categoryItems = document.querySelectorAll('.category-item');

// function changeItem() {
//   this.classList.toggle('category-button-selected');

//   const image = this.querySelector('.category-item-image');

//   if (image) {
//     const currentImage = image.style.backgroundImage;

//     image.style.backgroundImage = currentImage.includes('checked.svg')
//       ? "url('/public/images/plus.svg')" // 이미 'checked.svg'라면 'plus.svg'로 변경
//       : "url('/public/images/checked.svg')"; // 그렇지 않으면 'checked.svg'로 변경

//     image.style.backgroundRepeat = 'no-repeat';
//   }
// }
// categoryItems.forEach(function (item) {
//   item.addEventListener('click', changeItem);
// });

// localStorage 에 선택된 값 저장하기

import gsap from 'gsap';
import { getNode, getNodes } from '/src/lib/';

const writeButton = getNode('.togetherBoard-write-off');
const writeOnButton = getNode('.togetherBoard-write-on');
const plusMenu = getNode('.togetherBoard-plus-menu');
const writeBoard = getNode('.write-button');
const togetherBoardButton = getNodes('.togetherBoard');

function handleMove() {
  window.location.href = '/src/pages/writeBoard/index.html';
}

function handleWrite() {
  writeButton.style.display = 'none';
  writeOnButton.style.display = 'block';
  toggleMenu();
}

function toggleMenu() {
  plusMenu.style.display = 'block';

  gsap.from(plusMenu, {
    y: 30,
    opacity: 0,
    stagger: 0.1,
  });
}
function handleClickOutside(event) {
  if (!writeButton.contains(event.target) && !plusMenu.contains(event.target)) {
    // 버튼과 메뉴 이외의 영역을 클릭했을 때
    writeButton.style.display = 'block';
    writeOnButton.style.display = 'none';
    plusMenu.style.display = 'none';
  }
}

function handleClickMenu(event) {
  const isClicked = this.classList.toggle('isClicked');
  Array.from(this.children).forEach((item) => {
    console.log(item);
    if (isClicked) {
      item.classList.add('text-secondary');
      item.classList.add('border-Blue-500');
    } else {
      item.classList.remove('text-secondary');
      item.classList.remove('border-Blue-500');
    }
  });
}

togetherBoardButton.forEach((item) => {
  item.addEventListener('click', handleClickMenu);
});

writeButton.addEventListener('click', handleWrite);
writeBoard.addEventListener('click', handleMove);
document.addEventListener('click', handleClickOutside);

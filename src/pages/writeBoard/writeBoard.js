import { getNode, insertLast } from '/src/lib/';
import gsap from 'gsap';

const nextButton = getNode('.writeBoardSecond-next-button');
const backButton = getNode('.writeBoard-back-button');
const titleInput = getNode('.writeBoard-input');
const category = getNode('.writeBoard-category');

function handleNext(event) {
  event.preventDefault();

  const screens = document.querySelectorAll('.w-screen');
  const inputValue = titleInput.value;

  if (!inputValue) {
    gsap.to('.warningText', { x: -10, duration: 0.1, repeat: 3, yoyo: true });
    insertLast('.warningText', '제목을 입력해주세요.');
    return;
  }
  insertLast('.writeBoardSecond-title', inputValue);

  if (screens.length >= 2) {
    const currentScreen = document.querySelector('.w-screen:not(.hidden)');

    const currentIndex = Array.from(screens).indexOf(currentScreen);

    if (currentIndex >= 0 && currentIndex < screens.length - 1) {
      const nextScreen = screens[currentIndex + 1];
      currentScreen.classList.add('hidden');
      nextScreen.classList.remove('hidden');
    }

    if (currentIndex === 2) {
      console.log('currentIndex');
      moveChatPage();
    }
  }
}

function moveChatPage() {
  window.location.href = '/src/pages/boardContent/index.html';
}
function handleBack() {
  console.log('dd');
  window.history.back();
}

function handleCategory() {
  console.log('sdf');
}

nextButton.addEventListener('click', handleNext);
backButton.addEventListener('click', handleBack);
category.addEventListener('click', handleCategory);

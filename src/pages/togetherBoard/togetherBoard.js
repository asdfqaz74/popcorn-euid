import { getNode } from '/src/lib/';
import gsap from 'gsap';

const movePageHome = getNode('.movePageHome');
const movePageBoard = getNode('.movePageBoard');
const movePageLocation = getNode('.movePageLocation');
const movePageChat = getNode('.movePageChat');
const movePageProfile = getNode('.movePageProfile');
const writeButton = getNode('.togetherBoard-write-off');
const writeOnButton = getNode('.togetherBoard-write-on');
const plusMenu = getNode('.togetherBoard-plus-menu');
const writeBoard = getNode('.write-button');

function handleMove(event) {
  const className = event.target.parentNode.className;
  if (className.includes('Home')) {
    window.location.href = '/src/pages/story/index.html';
  } else if (className.includes('Board')) {
    window.location.href = '/src/pages/board/index.html';
  } else if (className.includes('Location')) {
  } else if (className.includes('Chat')) {
  } else if (className.includes('Profile')) {
    window.location.href = '/src/pages/profile/index.html';
  } else if (className.includes('write')) {
    window.location.href = '/src/pages/writeBoard/index.html';
  }
}
function handleWrite() {
  writeButton.style.display = 'none';
  writeOnButton.style.display = 'block';
  toggleMenu();
}

function toggleMenu() {
  plusMenu.style.display = 'block';

  //   const tl = gsap.timeline({
  //     defaults: {
  //       opacity: 0,
  //     },
  //   });
  //   tl.from('.plusMenu', { y: 30 })
  //     .from('.plusMenu', { scaleY: 0 }, '<')
  //     .from('form > *', { y: 30, stagger: 0.1 })
  //     .from('.plusMenu', { y: -30 }, '-=0.2');
}

movePageHome.addEventListener('click', handleMove);
movePageBoard.addEventListener('click', handleMove);
movePageLocation.addEventListener('click', handleMove);
movePageChat.addEventListener('click', handleMove);
movePageProfile.addEventListener('click', handleMove);
writeButton.addEventListener('click', handleWrite);
writeBoard.addEventListener('click', handleMove);

import { getNode } from '/src/lib/';

const movePageHome = getNode('.movePageHome');
const movePageBoard = getNode('.movePageBoard');
const movePageLocation = getNode('.movePageLocation');
const movePageChat = getNode('.movePageChat');
const movePageProfile = getNode('.movePageProfile');
const toogetherButton = getNode('.board-together-button');

function handleMove(event) {
  console.log(event.target.parentNode.className);
  const className = event.target.parentNode.className;
  if (className.includes('Home')) {
    window.location.href = '/src/pages/story/index.html';
  } else if (className.includes('Board')) {
    window.location.href = '/src/pages/board/index.html';
  } else if (className.includes('Location')) {
  } else if (className.includes('Chat')) {
  } else if (className.includes('Profile')) {
    window.location.href = '/src/pages/profile/index.html';
  } else if (className.includes('board-together')) {
    event.preventDefault();
    window.location.href = '/src/pages/togetherBoard/index.html';
  }
}

movePageHome.addEventListener('click', handleMove);
movePageBoard.addEventListener('click', handleMove);
movePageLocation.addEventListener('click', handleMove);
movePageChat.addEventListener('click', handleMove);
movePageProfile.addEventListener('click', handleMove);
toogetherButton.addEventListener('click', handleMove);

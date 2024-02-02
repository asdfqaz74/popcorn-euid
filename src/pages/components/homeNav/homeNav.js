import { getNode } from '/src/lib/';

const movePageHome = getNode('.movePageHome');
const movePageBoard = getNode('.movePageBoard');
const movePageLocation = getNode('.movePageLocation');
const movePageChat = getNode('.movePageChat');
const movePageProfile = getNode('.movePageProfile');

/**
 * TODO: 많은 양의 else if 는 코드가 장황해지므로 높은 평가를 받기 어렵습니다.
 * @param event
 */
function handleMove(event) {
  console.log(event.target.parentNode.className);
  const className = event.target.parentNode.className;
  /**
   * 이렇게 꾸미면 자연어처럼 연출할 수 있지요.
   */
  const isHome = className.includes('Home')
  const isBoard = className.includes('Board')
  const isProfile = className.includes('Profile')
  if (isHome) {
    window.location.href = '/src/pages/story/index.html';
    return;
  }
  if (isBoard) {
    window.location.href = '/src/pages/board/index.html';
    return;
  }
  if (isProfile) {
    window.location.href = '/src/pages/profile/index.html';
  }
}

movePageHome.addEventListener('click', handleMove);
movePageBoard.addEventListener('click', handleMove);
movePageLocation.addEventListener('click', handleMove);
movePageChat.addEventListener('click', handleMove);
movePageProfile.addEventListener('click', handleMove);

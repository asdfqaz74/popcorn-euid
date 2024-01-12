import { getNode } from '/src/lib';

const moveButton = getNode('.boardContent-back');

function handleBack() {
  window.location.href = '/src/pages/togetherBoard/';
}

moveButton.addEventListener('click', handleBack);

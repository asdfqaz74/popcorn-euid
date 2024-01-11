import { getNode } from '/src/lib';

const moveButton = getNode('.boardContent-back');

function handleBack() {
  window.history.back();
}

moveButton.addEventListener('click', handleBack);

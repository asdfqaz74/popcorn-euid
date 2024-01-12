import { getNode } from '/src/lib/';

//profileCard 닫힘 버튼
const profileCardClose = getNode('.profileCard-button-close');

function closeHandler() {
  history.back();
}
profileCardClose.addEventListener('click', closeHandler);

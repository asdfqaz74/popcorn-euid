import { getNode, getNodes } from '/src/lib/';

const profileClose = getNode('.profile-button-close');
const profileList = getNodes('.profile-listBox-button');
const commentMore = getNode('.profile-button-more');

//profile 닫힘 버튼

function closeHandler() {
  history.back();
}
profileClose.addEventListener('click', closeHandler);

//profile listBox 버튼

function listHandler() {
  const hiddenBox = this.nextElementSibling;
  const direction = this.querySelector('button');
  hiddenBox.classList.toggle('hidden');
  direction.classList.toggle('rotate-90');
}

profileList.forEach((item) => {
  item.addEventListener('click', listHandler);
});

commentMore.addEventListener('click', (e) => {
  e.currentTarget.nextElementSibling.classList.toggle('hidden');
});

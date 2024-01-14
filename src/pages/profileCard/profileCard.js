import {
  getNode,
  getStorage,
  getPbImageURL,
  debounce,
  getNodes,
  addClass,
  removeClass,
  rendering,
  insertLast,
  removeElement,
} from '/src/lib/';
import pb from '/src/api/pocketbase';



//profileCard 닫힘 버튼
const profileCardClose = getNode('.profileCard-button-close');
const profileAreaEditInput = Array.from(
  getNodes('.profileCard-area-edit input')
);
const profileButtonEdit = getNode('.profileCard-button-edit');
const profileCardEditSubmit = getNode('.profileCard-button-submit');
const buttonMoveProfileDetails = getNode('.profileCard-button-details');
const profileCardEditClose = getNode('.profileCard-button-editClose');

function closeHandler() {
  history.back();
}
profileCardClose.addEventListener('click', closeHandler);

/* -------------------------------------------------------------------------- */
/*                                  유저정보 불러오기                                 */
/* -------------------------------------------------------------------------- */

//현재 로그인한 유저id
const userRecords = await pb.collection('users').getFullList();
const userValid = await getStorage('userId');
let userNow = userRecords.find((item) => item.id === userValid);


//랜더링 함수 설정
rendering('.rendering-box',userNow)

//profile 유저네임 프라이버시
function userNamePrivacy() {
  const textPrivacy = Array.from(getNodes('.profile-textPrivacy'));
  textPrivacy.forEach((item) => {
    let sliceName = `${item.textContent.slice(0, 4)}***`;
    item.textContent = sliceName;
  });
}
userNamePrivacy();

/* -------------------------------------------------------------------------- */
/*                              profile 유저 정보 수정                              */
/* -------------------------------------------------------------------------- */
//input 창 보이기
function showEditUserInfo() {
  addClass('.profileCard-area-info', 'hidden');
  addClass('.profileCard-button-edit', 'hidden');
  removeClass('.profileCard-area-edit', 'hidden');
  removeClass('.profileCard-button-editClose', 'hidden');
}

profileButtonEdit.addEventListener('click', showEditUserInfo);
//input창 닫기

profileCardEditClose.addEventListener('click', () => {
  removeClass('.profileCard-area-info', 'hidden');
  removeClass('.profileCard-button-edit', 'hidden');
  addClass('.profileCard-area-edit', 'hidden');
  addClass('.profileCard-button-editClose', 'hidden');
});

//radio value 값 가져오기
const radios = Array.from(getNodes('.radio-gender'));
function radioValue() {
  const radioChecked = radios.find((item)=> item.checked === true)
  return radioChecked.value
}

//edit 정보 pocketbase 전송

async function userInfoUpdate() {
  console.log('성공')
  try {
    const newData = new FormData();
    newData.append('username', getNode('#username').value);
    newData.append('gender', radioValue());
    newData.append('age', getNode('#age').value);
    newData.append('qualification', getNode('#qualification').value);
    await pb.collection('users').update(userNow.id, newData);
    alert('수정 완료');
    location.href = '/src/pages/profileDetails/';
  } catch {
    alert('정보를 올바르게 입력해주세요');
  }
}
profileCardEditSubmit.addEventListener('click', userInfoUpdate);
buttonMoveProfileDetails.addEventListener('click',()=>{
  location.href = '/src/pages/profileDetails/'
})


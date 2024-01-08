import { getNode } from '/src/lib/';

// 뒤로가기 버튼 클릭 시 이전페이지로 이동
const goBack = getNode('.button-goback');

function handleButton() {
  history.back();
}

goBack.addEventListener('click', handleButton);

// 버튼 클릭시 다음페이지로 이동
const signUpContainer = document.querySelector('.signUp-container');
const signUpFormBefore = document.querySelector('.signUp-form-before');

signUpFormBefore.addEventListener('submit', (e) => {
  e.preventDefault(); // 기본 동작 중단

  signUpContainer.style.transform = 'translateX(-50%)'; // 첫 번째 div 왼쪽으로 이동
});

const agreeButton = document.getElementById('Agree');

agreeButton.addEventListener('click', () => {
  window.location.href = '/src/pages/story/'; // /src/pages/main/으로 페이지 이동
});

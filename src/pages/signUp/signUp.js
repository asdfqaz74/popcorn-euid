const signUpContainer = document.querySelector('.signUp-container');
const signUpFormBefore = document.querySelector('.signUp-form-before');
const signUpFormAfter = document.querySelector('.signUp-form-after');

signUpFormBefore.addEventListener('submit', (e) => {
  e.preventDefault(); // 기본 동작 중단

  signUpContainer.style.transform = 'translateX(-50%)'; // 첫 번째 div 왼쪽으로 이동
});

const agreeButton = document.getElementById('Agree');

agreeButton.addEventListener('click', () => {
  window.location.href = '/src/pages/board/'; // /src/pages/main/으로 페이지 이동
});

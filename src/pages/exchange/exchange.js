import { getNode, getNodes, insertFirst } from '/src/lib/';

/* -------------------------------------------------------------------------- */
/*                             toggle plus button                             */
/* -------------------------------------------------------------------------- */

const plusButton = getNode('.exchange-button');
let isUlVisible = false;

function handleButton() {
  if (isUlVisible) {
    gsap.to('.exchange-button-ul > ul > li', {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      onComplete: () => {
        removeList();
        plusButton.classList.add('exchange-button-no');
        plusButton.classList.remove('exchange-button-active');
      },
    });
  } else {
    plusButton.classList.remove('exchange-button-no');
    plusButton.classList.add('exchange-button-active');
    addList();
    gsap.from('.exchange-button-ul > ul > li', {
      y: 30,
      opacity: 0,
      stagger: {
        each: 0.1,
        from: 'end',
      },
    });
  }

  isUlVisible = !isUlVisible;
}

function addList() {
  const img = /* html */ `
  <img src="/public/images/plusTapActive.svg" alt="" />
  `;

  const ul = /* html */ `
  <ul>
    <li class="exchange-headset exchange-li-button">
      <button type="button" aria-label="헤드셋 품목만 정렬">
      🎧헤드셋
      </button>
    </li>
    <li class="exchange-keyboard exchange-li-button">
      <button type="button" aria-label="키보드 품목만 정렬">
      ⌨키보드
      </button>
    </li>
    <li class="exchange-mouse exchange-li-button">
      <button type="button" aria-label="마우스 품목만 정렬">
      🖱️마우스
      </button>
    </li>
    <li class="exchange-computer exchange-li-button">
      <button type="button" aria-label="컴퓨터 품목만 정렬">
      💻컴퓨터
      </button>
    </li>
    <li class="exchange-etc exchange-li-button">
      <button type="button" aria-label="기타 품목만 정렬">
      🎈기타 등등
      </button>
    </li>
  </ul>
  `;

  plusButton.innerHTML = img;
  insertFirst('.exchange-button-ul', ul);
}

function removeList() {
  const list = document.querySelector('.exchange-button-ul');

  plusButton.innerHTML = '<img src="/public/images/plusTap.svg" alt="" />';
  list.innerHTML = '';
}

plusButton.addEventListener('click', handleButton);

/* -------------------------------------------------------------------------- */
/*                                toggle heart                                */
/* -------------------------------------------------------------------------- */

// 모든 게시글의 좋아요 버튼을 선택합니다.
const likeButtons = getNodes('.exchange-board-heart button');

// 클릭 이벤트 리스너를 등록합니다.
likeButtons.forEach((button) => {
  button.addEventListener('click', handleLikeButtonClick);
});

// 클릭 이벤트 핸들러 함수를 정의합니다.
function handleLikeButtonClick(event) {
  // 현재 클릭된 버튼을 가져옵니다.
  const heartButton = event.currentTarget;

  // 버튼 내부의 이미지 엘리먼트를 찾습니다.
  const heartImage = heartButton.querySelector('img');

  // 현재 이미지의 src와 새로운 이미지의 src를 비교하여 이미지를 토글합니다.
  const currentSrc = heartImage.src;
  const newSrc = '/public/images/heart.svg';
  const fullheartSrc = '/public/images/fullheart.svg';

  if (currentSrc.includes(newSrc)) {
    // 이미지가 'heart.svg'인 경우, 'fullheart.svg'로 변경
    gsap.from(heartImage, {
      scale: 0.8, // 축소된 크기에서 시작
      duration: 0.1, // 애니메이션 기간
      onComplete: () => {
        heartImage.src = fullheartSrc;
        gsap.to(heartImage, {
          scale: 1, // 원래 크기로 복원
          duration: 0.1,
        });
      },
    });
  } else {
    // 이미지가 'fullheart.svg'가 아닌 경우, 'heart.svg'로 변경
    gsap.from(heartImage, {
      scale: 1.2, // 확대된 크기에서 시작
      duration: 0.1,
      onComplete: () => {
        heartImage.src = newSrc;
        gsap.to(heartImage, {
          scale: 1,
          duration: 0.1,
        });
      },
    });
  }

  // 좋아요 갯수 업데이트
  const likeCountSpan = heartButton.nextElementSibling;
  const currentLikeCount = parseInt(likeCountSpan.innerText, 10);

  if (heartImage.src.includes('full')) {
    likeCountSpan.innerText = currentLikeCount - 1;
  } else {
    likeCountSpan.innerText = currentLikeCount + 1;
  }
}

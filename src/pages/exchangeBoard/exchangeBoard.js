import {
  getNode,
  setDocumentTitle,
  getPbImageURL,
  getStorage,
  comma,
  insertLast,
  timeAgo,
  removeChild,
} from '/src/lib';
import heartSvg from '/public/images/heart.svg';
import fullHeartSvg from '/public/images/fullheart.svg';
import { gsap } from 'gsap';
import pb from '/src/api/pocketbase';

setDocumentTitle('EUID / 상품정보');
const back = getNode('.exchangeBoard-back');
back.addEventListener('click', () => history.back());

const optionButton = getNode('.exchangeBoard-more');
function handleButton() {
  const sideBar = getNode('.exchangeBoard-sidebar ul');
  sideBar.classList.toggle('translate-x-full');
}
optionButton.addEventListener('click', handleButton);

async function checkedOptions() {
  const hash = window.location.hash.slice(1);
  const productData = await pb.collection('products').getOne(hash);
  const deleteLi = getNode('.delete');
  const updateLi = getNode('.update');
  const declarationLi = getNode('.declaration');

  const nowUser = await getStorage('userId');

  if (productData.userPost === nowUser) {
    deleteLi.classList.remove('hidden');
    updateLi.classList.remove('hidden');
    declarationLi.classList.add('hidden');
  } else {
    deleteLi.classList.add('hidden');
    updateLi.classList.add('hidden');
    declarationLi.classList.remove('hidden');
  }

  async function handleDelete() {
    if (confirm('정말 삭제하시겠습니까?') == true) {
      await pb.collection('products').delete(hash);
      window.location.href = '/src/pages/exchange/';
    } else {
      return false;
    }
  }
  deleteLi.addEventListener('click', handleDelete);
  updateLi.addEventListener(
    'click',
    () =>
      (window.location.href = `/src/pages/exchangeEdit/index.html#${productData.id}`)
  );
}

/* -------------------------------------------------------------------------- */
/*                                  rendering                                 */
/* -------------------------------------------------------------------------- */

async function getProductRender() {
  const hash = window.location.hash.slice(1);
  removeChild('.exchangeBoard-img');
  removeChild('.exchangeBoard-another');

  const productData = await pb.collection('products').getOne(hash, {
    expand: 'userPost',
  });
  const relatedList = await pb.collection('products').getList(1, 4, {
    sort: '@random',
  });

  const users = await pb
    .collection('users')
    .getFirstListItem(`id="${productData.userPost}"`);

  renderProduct(productData, users);
  renderRelated(relatedList);
}

async function renderProduct(productData, users) {
  const renderPage = /* html */ `
      <img
        src="${getPbImageURL(productData, 'images')}"
        class="w-full h-full object-cover"
        alt="${productData.alt}"
      />
    </div>

    <div class="flex py-[0.625rem] px-4 justify-between">
      <div class="flex">
        <div
        class="exchangeBoard-profile-wrapper w-[2.5rem] h-[2.5rem] relative bg-Contents-contentSecondary rounded-7xl"
        >
          <img
            src="${getPbImageURL(users, 'avatar')}"
            class="exchangeBoard-profile overflow-hidden absolute top-0 left-0 w-full h-full object-cover rounded-7xl"
            alt="프로필"
          />
        </div>
        <div class="flex-col ml-[0.375rem]">
        <span
        class="exchangeBoard-user block text-base font-semibold leading-normal"
            >${productData.expand.userPost.username}</span
          >
          <span class="exchangeBoard-user-location text-sm font-normal"
          >${productData.expand.userPost.locationFirst}</span
          >
          </div>
          </div>
          
          <div>
          <div>
          <span
          class="exchangeBoard-degree text-base text-secondary font-semibold leading-normal"
          >${productData.expand.userPost.mannerTemp}<sup>&deg;</sup>C</span
          >
          <span class="exchangeBoard-degree-state">😀</span>
          </div>
          <span class="block text-right text-Contents-contentSecondary text-sm"
          >매너온도</span
          >
          </div>
          </div>
          
          <div class="p-3 mb-6">
          <h2 class="text-lg font-semibold mb-1">${productData.title}</h2>
          <div class="block text-sm text-Contents-contentSecondary mb-3">
          <span class="exchangeBoard-thing">${productData.type}</span>
          <span class="exchangeBoard-time">ㆍ${timeAgo(
            productData.created
          )}</span>
        </div>
        <div class="exchangeBoard-textBox-wrapper">
        <span class="block text-base">
        ${productData.contents}
        </span>
        </div>
        </div>
        
        <div class="flex justify-between px-3 mb-9">
        <div class="flex items-center">
        <button type="button" class="exchangeBoard-heart">
        <img
        src="/public/images/heart.svg"
        class="w-[1.25rem] h-[1.25rem]"
        alt="좋아요"
        />
        </button>
        <div
        class="flex-col border-l border-Contents-contentSecondary ml-[0.8125rem] pl-[0.8125rem]"
        >
        <span class="exchangeBoard-price block text-base font-semibold"
        >${comma(productData.price)}원</span
        >
        <span
        class="exchangeBoard-price-link block text-sm text-secondary font-semibold"
        >가격 제안하기</span
        >
        </div>
        </div>
        
        <div>
        <a
        href="/src/pages/chat/"
        class="exchangeBoard-chat-link w-[4.8125rem] h-[2.3125rem] bg-secondary px-[0.875rem] py-2 rounded-2xl text-background text-base font-semibold"
        >채팅하기</a
        >
        </div>
  `;
  insertLast('.exchangeBoard-img', renderPage);
}

function renderRelated(items) {
  items.items.forEach((item) => {
    const template = /* html */ `
    <figure
    class="exchangeBoard-another-item min-w-[7.5rem] w-[43.125%] pb-[20%] max-h-20 bg-gray-200 rounded-2xl mx-auto mb-20 sm:mb-32"
  >
    <img
      src="${getPbImageURL(item, 'images')}"
      class="w-full h-full object-cover rounded-2xl"
      alt="${item.alt}"
    />
    <figcaption class="text-sm block">
      <a href="${`/src/pages/exchangeBoard/index.html#${item.id}`}" target="_self">
        <p class="exchangeBoard-another-text block truncate">
          ${item.title}
        </p>
        <span class="exchangeBoard-another-price font-semibold"
        >${comma(item.price)}원</span
        >
        </a>
    </figcaption>
  </figure>
    `;
    insertLast('.exchangeBoard-another', template);
  });
}

const originSrc = heartSvg;
const fullHeartSrc = fullHeartSvg;
let heartImage;

async function handleHeartClick(e) {
  heartImage = e.target;
  const currentSrc = heartImage.src;

  const users = await getStorage('userId');
  const likes = await pb.collection('likes').getFullList();

  const hash = window.location.hash.slice(1);
  const products = await pb.collection('products').getOne(hash);
  const productId = products.id;

  const selectedProduct = likes.find(
    (item) => item.product === productId && item.user === users
  );

  let likesId;
  if (selectedProduct) {
    likesId = selectedProduct.id;
  }

  const data = {
    user: users,
    product: productId,
  };

  /**
   * TODO: 중첩 if 문은 함수를 분리하라는 강력한 신호입니다.
   * 실무에서 높은 평가를 받기 어렵습니다.
   */
  if (selectedProduct) {
    if (currentSrc.includes(originSrc)) {
      await pb.collection('likes').create(data);
      gsap.from(heartImage, {
        scale: 0.6,
        duration: 0.2,
        onComplete: () => {
          heartImage.src = fullHeartSrc;
          gsap.to(heartImage, {
            scale: 1,
            duration: 0.1,
          });
        },
      });
    } else {
      await pb.collection('likes').delete(likesId);
      gsap.from(heartImage, {
        scale: 1.5,
        duration: 0.1,
        onComplete: () => {
          heartImage.src = originSrc;
          gsap.to(heartImage, {
            scale: 1,
            duration: 0.2,
          });
        },
      });
    }
  } else {
    if (currentSrc.includes(originSrc)) {
      await pb.collection('likes').create(data);
      gsap.from(heartImage, {
        scale: 0.6,
        duration: 0.2,
        onComplete: () => {
          heartImage.src = fullHeartSrc;
          gsap.to(heartImage, {
            scale: 1,
            duration: 0.1,
          });
        },
      });
    }
  }
}

async function updatedHeart(nowUser, products) {
  heartImage = getNode('.exchangeBoard-heart img');

  const likes = await pb.collection('likes').getFullList();

  const productId = products.id;

  let selectedProduct = likes.find(
    (item) => item.product === productId && item.user === nowUser
  );

  if (selectedProduct) {
    heartImage.src = fullHeartSrc;
  } else {
    heartImage.src = originSrc;
  }
}

async function handleChat(nowUser, products) {
  const chatBox = await pb.collection('chatbox').getFullList();
  const arrayUserSameBuyer = chatBox.filter((item) => item.buyer === nowUser);
  const productDataId = products.id;
  const checkedProductId = arrayUserSameBuyer.find(
    (item) => item.item === productDataId
  );

  const initData = {
    buyer: `${nowUser}`,
    item: `${productDataId}`,
  };
  let chatBoxId;

  if (!arrayUserSameBuyer || !checkedProductId) {
    const newChatBox = await pb.collection('chatBox').create(initData);
    chatBoxId = newChatBox.id;
  } else {
    chatBoxId = checkedProductId.id;
  }
  return chatBoxId;
}

async function init() {
  await checkedOptions();

  getProductRender().then(async () => {
    const chatButton = getNode('.exchangeBoard-chat-link');

    const nowUser = await getStorage('userId');
    const hash = window.location.hash.slice(1);
    const products = await pb.collection('products').getOne(hash);

    updatedHeart(nowUser, products);
    const heart = getNode('.exchangeBoard-heart');
    heart.addEventListener('click', handleHeartClick);

    chatButton.addEventListener('click', async (e) => {
      e.preventDefault();
      const chatBoxId = await handleChat(nowUser, products);
      chatButton.href = `/src/pages/chat/index.html#${chatBoxId}`;
      window.location.href = chatButton.href;
    });
    window.addEventListener('hashchange', getProductRender);
  });
}

init();

import {
  getNode,
  setDocumentTitle,
  getPbImageURL,
  comma,
  insertAfter,
  insertLast,
  timeAgo,
} from '/src/lib';
import heartSvg from '/public/images/heart.svg';
import fullHeartSvg from '/public/images/fullheart.svg';
import { gsap } from 'gsap';
import pb from '/src/api/pocketbase';

setDocumentTitle('EUID / 상품정보');
/* -------------------------------------------------------------------------- */
/*                                history back                                */
/* -------------------------------------------------------------------------- */

const back = getNode('.exchangeBoard-back');

back.addEventListener('click', () => history.back());

/* -------------------------------------------------------------------------- */
/*                                    post                                    */
/* -------------------------------------------------------------------------- */

async function renderProduct() {
  const hash = window.location.hash.slice(1);

  const productData = await pb.collection('products').getOne(hash);
  const resultList = await pb.collection('products').getList(1, 4);

  // const test = await pb.collection('likes').getOne('islgq65qo1gqdoo', {
  //   expand: 'product, user',
  // });

  // console.log(test);

  const productInfo = /* html */ `
  <div class="exchangeBoard-img image-box w-full">
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
            src="/public/images/macbook20.png"
            class="exchangeBoard-profile overflow-hidden absolute top-0 left-0 w-full h-full object-cover rounded-7xl"
            alt="프로필"
          />
        </div>
        <div class="flex-col ml-[0.375rem]">
        <span
        class="exchangeBoard-user block text-base font-semibold leading-normal"
            >맥이뜸</span
          >
          <span class="exchangeBoard-user-location text-sm font-normal"
          >응암동</span
          >
          </div>
          </div>
          
          <div>
          <div>
          <span
          class="exchangeBoard-degree text-base text-secondary font-semibold leading-normal"
          >41.2<sup>&deg;</sup>C</span
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
        </div>
        `;
  insertAfter('.exchangeBoard-nav', productInfo);

  resultList.items.forEach((item) => {
    const withItem = /* html */ `
    <figure
    class="exchangeBoard-another-item min-w-[7.5rem] w-[43.125%] pb-[20%] max-h-20 bg-gray-200 rounded-2xl mx-auto mb-20 sm:mb-32"
  >
    <img
      src="${getPbImageURL(item, 'images')}"
      class="w-full h-full object-cover rounded-2xl"
      alt="${item.alt}"
    />
    <figcaption class="text-sm block">
      <a href="/src/pages/exchangeBoard/index.html#${item.id}}">
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
    insertLast('.exchangeBoard-another', withItem);
  });

  const heart = getNode('.exchangeBoard-heart');

  function handleHeart(e) {
    const heartImage = e.target;

    const currentSrc = heartImage.src;
    const originSrc = heartSvg;
    const fullHeartSrc = fullHeartSvg;

    if (currentSrc.includes(originSrc)) {
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
  }
  heart.addEventListener('click', handleHeart);
}

renderProduct();

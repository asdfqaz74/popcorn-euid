import {
  getNode,
  rendering,
  renderingPhoto,
  insertFirst,
  getStorage,
  insertLast,
} from '/src/lib';
import pb from '/src/api/pocketbase/';

/* -------------------------------------------------------------------------- */
/*                                history back                                */
/* -------------------------------------------------------------------------- */

const back = getNode('.chat-back');

back.addEventListener('click', () => history.back());

/* -------------------------------------------------------------------------- */
/*                                  rendering                                 */
/* -------------------------------------------------------------------------- */

const hash = window.location.hash.slice(1);
const productData = await pb.collection('products').getOne(hash, {
  expand: 'userPost',
});
const sellerInfo = productData.expand.userPost;
const sellerInfoId = sellerInfo.id;

// console.log(salerInfo);
// console.log(salerInfoId);
// console.log(nowUser);

rendering('.chat-rendering', sellerInfo);
rendering('.chat-renderings', productData);
renderingPhoto('.chat-renderingImg', productData);

/* -------------------------------------------------------------------------- */
/*                                    chat                                    */
/* -------------------------------------------------------------------------- */

function startMessage(saler) {
  const template = /* html */ `
  <div
  class="border-none rounded-3xl bg-Bluelight-400 text-background text-sm mx-[0.84375rem] py-3 px-4"
  >
  <span
  ><em class="chat-user-class font-semibold not-italic">
  💸 ${saler.nickName}님은 우수판매자에요.
  </em>
  개인정보유도와 명예훼손 내용은 차단될 수 있어요.
  <a href="/src/pages/chat/" class="underline"> 자세히 보기</a>.</span
  >
  </div>
  `;

  insertFirst('.chat-wrapper', template);
}

startMessage(sellerInfo);

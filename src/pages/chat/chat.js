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
const nowUser = await getStorage('userId');

console.log(productData);

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

const sendButton = getNode('.chat-send-button');
const textField = getNode('#message');

sendButton.addEventListener('click', () => console.log(textField.value));

const chat = await pb.collection('chat').getFullList();

const chatId = chat.map((item) => {
  return item.id;
});
const nowChatId = chatId.toString();
const nowChatContents = await pb.collection('chatContents').getFullList({
  filter: `chatBox="${nowChatId}"`,
  expand: 'chat',
});
// const nowChatContentsId = nowChatContents[0].chat;
console.log(chat);
console.log(nowChatId);
console.log(nowChatContents);
// console.log(nowChatContentsId);

// !내가 하고싶은것
// chatContents 에서 nowChatId 와 같은 item 뽑아오기
// const test = await pb
//   .collection('chatContents')
//   .getFirstListItem(`chat = "${nowChatContentsId}`);
// console.log(test);

// function createText(nowChatContents) {

nowChatContents.forEach((item) => {
  if (item.user === nowUser) {
    const me = /* html */ `
      <div class="chat-me flex mb-2 justify-end items-end gap-1">
      <span class="chat-time text-sm text-Contents-contentSecondary"
      ></span
      >
      <div
      class="border-none px-[0.875rem] py-2 mr-3 rounded-6xl bg-Bluelight-400 text-background max-w-[15.5rem]"
      >
      <span class="chat-text">${item.chat}</span>
      </div>
      </div>
      `;
    insertLast('.chat-contents-wrapper', me);
  } else if (item.user !== nowUser) {
    const other = /* html */ `
      <div class="chat-you flex mb-2 items-end gap-1">
      <div
      class="border-none px-[0.875rem] py-2 ml-3 rounded-6xl bg-bluegray-100 text-Contents-contentPrimary max-w-[15.5rem]"
      >
      <span class="chat-text"
      >${item.chat}
      </span>
      </div>
      <span class="chat-time text-sm text-Contents-contentSecondary"
            ></span
          >
        </div>
      `;
    insertLast('.chat-contents-wrapper', other);
  }
});
// }
// pb.collection('chatContents').subscribe(, function (e) {
//
//   console.log(e.record);
//    createText
// });

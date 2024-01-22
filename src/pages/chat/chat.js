import {
  getNode,
  rendering,
  renderingPhoto,
  insertFirst,
  insertLast,
  getStorage,
  utcToKtc,
  utcTime,
} from '/src/lib';
import pb from '/src/api/pocketbase/';

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

async function sendMessage(userNow, chatBoxNowId) {
  const text = getNode('.chat-input');
  const textValue = text.value;
  console.log(textValue);

  const textData = {
    user: userNow,
    chat: textValue,
    chatBox: chatBoxNowId,
  };

  await pb.collection('chatting').create(textData);
  text.value = '';
}

async function init() {
  let lastDate = null;
  const back = getNode('.chat-back');
  const hash = window.location.hash.slice(1);
  const product = await pb.collection('chatBox').getOne(hash);
  const productId = product.item;
  const productData = await pb.collection('products').getOne(productId, {
    expand: 'userPost',
  });
  const sellerInfo = productData.expand.userPost;
  const sendButton = getNode('.chat-send-button');
  const userNow = await getStorage('userId');
  const chatBox = await pb.collection('chatBox').getFullList();

  back.addEventListener('click', () => history.back());
  const chatBoxNow = chatBox.filter(
    (item) => item.buyer === userNow && item.item === productData.id
  );
  const chatBoxNowId = chatBoxNow.map((item) => item.id).toString();
  const nowChatting = await pb.collection('chatting').getFullList({
    filter: `chatBox = "${chatBoxNowId}"`,
  });

  pb.collection('chatting').subscribe('*', function (e) {
    renderMessage(e.record, userNow);
  });

  nowChatting.forEach((item) => {
    renderMessage(item, userNow);
  });

  function renderMessage(message, userNow) {
    const messageDate = utcTime(message.created);
    if (lastDate !== messageDate) {
      const dateDisplay = /* html */ `
      <div class="text-center my-3 text-sm text-Contents-contentSecondary">
        <span class="chat-date mx-auto">${messageDate}</span>
      </div>
      `;
      insertLast('.chat-contents-wrapper', dateDisplay);
      lastDate = messageDate;
    }
    const isUser = message.user === userNow;
    if (isUser) {
      const me = /* html */ `
      <div class="chat-me flex mb-2 justify-end items-end gap-1">
        <span class="chat-time text-sm text-Contents-contentSecondary">${utcToKtc(
          message.created
        )}
        </span>
        <div class="border-none px-[0.875rem] py-2 mr-3 rounded-6xl bg-Bluelight-400 text-background max-w-[15.5rem]">
          <span class="chat-text">${message.chat}</span>
        </div>
      </div>
      `;
      insertLast('.chat-contents-wrapper', me);
    } else {
      const you = /* html */ `
      <div class="chat-you flex mb-2 items-end gap-1">
        <div class="border-none px-[0.875rem] py-2 ml-3 rounded-6xl bg-bluegray-100 text-Contents-contentPrimary max-w-[15.5rem]">
          <span class="chat-text"> ${message.chat}
          </span>
        </div>
        <span class="chat-time text-sm text-Contents-contentSecondary">${utcToKtc(
          message.created
        )}</span>
      </div>
      `;
      insertLast('.chat-contents-wrapper', you);
    }
    lastDate = messageDate;
  }

  rendering('.chat-rendering', sellerInfo);
  rendering('.chat-renderings', productData);
  renderingPhoto('.chat-renderingImg', productData);

  startMessage(sellerInfo);
  sendButton.addEventListener('click', () =>
    sendMessage(userNow, chatBoxNowId)
  );
}

init();

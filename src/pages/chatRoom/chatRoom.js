import { getStorage, getPbImageURL, insertLast } from '/src/lib';
import pb from '/src/api/pocketbase/';
import { timeAgo } from '../../lib/utils/timeAgo';

async function init() {
  const userNow = await getStorage('userId');
  const chatBox = await pb.collection('chatBox').getFullList({
    expand: 'item.userPost, buyer',
  });
  const chatBoxNow = chatBox.filter(
    (item) => item.buyer === userNow || item.expand.item.userPost === userNow
  );

  function renderChatBox() {
    chatBoxNow.forEach(async (item) => {
      const other =
        userNow !== item.buyer
          ? item.expand.buyer.nickName
          : item.expand.item.expand.userPost.nickName;

      const chatBoxNowId = item.id;
      const lastChat = await pb
        .collection('chatting')
        .getFirstListItem(`chatBox ="${chatBoxNowId}" `);

      const template = /* html */ `
      <a href="${`/src/pages/chat/index.html#${chatBoxNowId}`}">
      <div role="group" class="p-3 flex justify-between border-b items-center">
      <div class="flex gap-3" role="group">
      <div class="rounded-7xl bg-Contents-contentSecondary w-11 h-11">
      <img src="${getPbImageURL(
        item.expand.item
      )}" class="w-full h-full object-cover rounded-7xl"/>
        </div>
        <div role="group">
        <span class="font-semibold text-base">${other}</span>
        <span class="text-Contents-contentSecondary text-sm">${timeAgo(
          lastChat.created
        )}</span>
          <div
          class="w-[8.875rem] whitespace-nowrap text-ellipsis overflow-hidden"
          role="group"
          >
          <span class="text-base w-full"
          >${lastChat.chat}</span
          >
          </div>
          </div>
          </div>
          <div class="rounded-xl bg-Contents-contentSecondary w-9 h-9"></div>
          </div>
          </a>
          `;
      insertLast('.chatRoom-box', template);
    });
  }
  renderChatBox();
}
init();

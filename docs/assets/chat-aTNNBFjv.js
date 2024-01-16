import"./tailwind-NE021wVL.js";import{g as i}from"./delay-g6vF19wW.js";import{a as m,i as l}from"./insert-vWB_d1l7.js";import{g as u}from"./storage-eNv634Ip.js";import{r as d,a as x}from"./rendering-oARfkKZz.js";import{p as c}from"./pocketbase-UOLpUAtS.js";import"./getPbImageURL-99Z79ldm.js";const g=i(".chat-back");g.addEventListener("click",()=>history.back());function b(e){const t=`
  <div
  class="border-none rounded-3xl bg-Bluelight-400 text-background text-sm mx-[0.84375rem] py-3 px-4"
  >
  <span
  ><em class="chat-user-class font-semibold not-italic">
  💸 ${e.nickName}님은 우수판매자에요.
  </em>
  개인정보유도와 명예훼손 내용은 차단될 수 있어요.
  <a href="/src/pages/chat/" class="underline"> 자세히 보기</a>.</span
  >
  </div>
  `;m(".chat-wrapper",t)}async function f(e,t){const s=i(".chat-input"),n=s.value;console.log(n);const o={user:e,chat:n,chatBox:t};await c.collection("chatting").create(o),s.value=""}function h(e,t){if(e.user===t){const n=`
    <div class="chat-me flex mb-2 justify-end items-end gap-1">
      <span class="chat-time text-sm text-Contents-contentSecondary">오후 9:16</span>
      <div class="border-none px-[0.875rem] py-2 mr-3 rounded-6xl bg-Bluelight-400 text-background max-w-[15.5rem]">
        <span class="chat-text">${e.chat}</span>
      </div>
    </div>
    `;l(".chat-contents-wrapper",n)}else{const n=`
    <div class="chat-you flex mb-2 items-end gap-1">
      <div class="border-none px-[0.875rem] py-2 ml-3 rounded-6xl bg-bluegray-100 text-Contents-contentPrimary max-w-[15.5rem]">
        <span class="chat-text"> ${e.chat}
        </span>
      </div>
      <span class="chat-time text-sm text-Contents-contentSecondary">오후 7:14</span>
    </div>
    `;l(".chat-contents-wrapper",n)}}async function w(){const e=window.location.hash.slice(1),t=await c.collection("products").getOne(e,{expand:"userPost"}),s=t.expand.userPost,n=i(".chat-send-button"),o=await u("userId"),r=(await c.collection("chatBox").getFullList()).filter(a=>a.buyer===o&&a.item===t.id).map(a=>a.id).toString(),p=await c.collection("chatting").getFullList({filter:`chatBox = "${r}"`});console.log(r),c.collection("chatting").subscribe("*",function(a){h(a.record,o)}),p.forEach(a=>{h(a,o)}),d(".chat-rendering",s),d(".chat-renderings",t),x(".chat-renderingImg",t),b(s),n.addEventListener("click",()=>f(o,r))}w();

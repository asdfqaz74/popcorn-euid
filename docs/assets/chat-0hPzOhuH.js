import"./tailwind-LUp5vfds.js";import{g as i}from"./delay-g6vF19wW.js";import{a as h}from"./insert-yGrdL5nD.js";import{g}from"./storage-eNv634Ip.js";import{r as l,a as u}from"./rendering-oARfkKZz.js";import{p as s}from"./pocketbase-UOLpUAtS.js";import"./getPbImageURL-99Z79ldm.js";const p=i(".chat-back");p.addEventListener("click",()=>history.back());function m(o){const t=`
  <div
  class="border-none rounded-3xl bg-Bluelight-400 text-background text-sm mx-[0.84375rem] py-3 px-4"
  >
  <span
  ><em class="chat-user-class font-semibold not-italic">
  💸 ${o.nickName}님은 우수판매자에요.
  </em>
  개인정보유도와 명예훼손 내용은 차단될 수 있어요.
  <a href="/src/pages/chat/" class="underline"> 자세히 보기</a>.</span
  >
  </div>
  `;h(".chat-wrapper",t)}async function x(o,t){const a=i(".chat-input"),c=a.value;console.log(c);const n={user:o,chat:c,chatBox:t};await s.collection("chatting").create(n),a.value=""}async function f(){const o=window.location.hash.slice(1),t=await s.collection("products").getOne(o,{expand:"userPost"}),a=t.expand.userPost,c=i(".chat-send-button"),n=await g("userId"),r=(await s.collection("chatBox").getFullList()).filter(e=>e.buyer===n&&e.item===t.id).map(e=>e.id).toString(),d=await s.collection("chatting").getFullList({filter:`chatBox = "${r}"`});console.log(d.filter(e=>e.user===n)),l(".chat-rendering",a),l(".chat-renderings",t),u(".chat-renderingImg",t),m(a),c.addEventListener("click",()=>x(n,r))}f();

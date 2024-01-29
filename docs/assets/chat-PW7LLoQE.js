import"./tailwind-zZkDsczm.js";import{g as m}from"./delay-g6vF19wW.js";import{i as p,a as S}from"./insert-yGrdL5nD.js";import{g as B}from"./storage-eNv634Ip.js";import{r as f,a as k}from"./rendering-oARfkKZz.js";import{p as o}from"./pocketbase-UOLpUAtS.js";import"./getPbImageURL-99Z79ldm.js";function w(e){const n=e,a=new Date(n),s=a.getHours(),r=a.getMinutes(),c=s.toString().padStart(2,"0"),d=r.toString().padStart(2,"0");return`${c}시 ${d}분`}function D(e){return new Date(e).toLocaleDateString("ko-KR")}function $(e){const n=`
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
  `;S(".chat-wrapper",n)}async function L(e,n){const a=m(".chat-input"),s=a.value;console.log(s);const r={user:e,chat:s,chatBox:n};await o.collection("chatting").create(r),a.value=""}async function N(){let e=null;const n=m(".chat-back"),a=window.location.hash.slice(1),r=(await o.collection("chatBox").getOne(a)).item,c=await o.collection("products").getOne(r,{expand:"userPost"}),d=c.expand.userPost,h=m(".chat-send-button"),l=await B("userId"),b=await o.collection("chatBox").getFullList();n.addEventListener("click",()=>history.back());const g=b.filter(t=>t.buyer===l&&t.item===c.id).map(t=>t.id).toString(),y=await o.collection("chatting").getFullList({filter:`chatBox = "${g}"`});o.collection("chatting").subscribe("*",function(t){x(t.record,l)}),y.forEach(t=>{x(t,l)});function x(t,v){const u=D(t.created);if(e!==u){const i=`
      <div class="text-center my-3 text-sm text-Contents-contentSecondary">
        <span class="chat-date mx-auto">${u}</span>
      </div>
      `;p(".chat-contents-wrapper",i),e=u}if(t.user===v){const i=`
      <div class="chat-me flex mb-2 justify-end items-end gap-1">
        <span class="chat-time text-sm text-Contents-contentSecondary">${w(t.created)}
        </span>
        <div class="border-none px-[0.875rem] py-2 mr-3 rounded-6xl bg-Bluelight-400 text-background max-w-[15.5rem]">
          <span class="chat-text">${t.chat}</span>
        </div>
      </div>
      `;p(".chat-contents-wrapper",i)}else{const i=`
      <div class="chat-you flex mb-2 items-end gap-1">
        <div class="border-none px-[0.875rem] py-2 ml-3 rounded-6xl bg-bluegray-100 text-Contents-contentPrimary max-w-[15.5rem]">
          <span class="chat-text"> ${t.chat}
          </span>
        </div>
        <span class="chat-time text-sm text-Contents-contentSecondary">${w(t.created)}</span>
      </div>
      `;p(".chat-contents-wrapper",i)}e=u}f(".chat-rendering",d),f(".chat-renderings",c),k(".chat-renderingImg",c),$(d),h.addEventListener("click",()=>L(l,g))}N();

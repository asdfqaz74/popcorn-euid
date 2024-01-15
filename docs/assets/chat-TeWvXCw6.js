import"./tailwind-zBIZP7u3.js";import{g as n}from"./delay-g6vF19wW.js";import{i as c,a as m}from"./insert-yGrdL5nD.js";import{g as h}from"./storage-eNv634Ip.js";import{r as i,a as g}from"./rendering-oARfkKZz.js";import{p as a}from"./pocketbase-UOLpUAtS.js";import"./getPbImageURL-99Z79ldm.js";const u=n(".chat-back");u.addEventListener("click",()=>history.back());const x=window.location.hash.slice(1),s=await a.collection("products").getOne(x,{expand:"userPost"}),o=s.expand.userPost;o.id;const r=await h("userId");console.log(s);i(".chat-rendering",o);i(".chat-renderings",s);g(".chat-renderingImg",s);function b(t){const e=`
  <div
        class="border-none rounded-3xl bg-Bluelight-400 text-background text-sm mx-[0.84375rem] py-3 px-4"
      >
        <span
          ><em class="chat-user-class font-semibold not-italic">
            💸 ${t.nickName}님은 우수판매자에요.
          </em>
          개인정보유도와 명예훼손 내용은 차단될 수 있어요.
          <a href="/src/pages/chat/" class="underline"> 자세히 보기</a>.</span
        >
      </div>
  `;m(".chat-wrapper",e)}b(o);const f=n(".chat-send-button"),w=n("#message");f.addEventListener("click",()=>console.log(w.value));const l=await a.collection("chat").getFullList(),v=l.map(t=>t.id),d=v.toString(),p=await a.collection("chatContents").getFullList({filter:`chatBox="${d}"`,expand:"chat"});console.log(l);console.log(d);console.log(p);p.forEach(t=>{if(t.user===r){const e=`
      <div class="chat-me flex mb-2 justify-end items-end gap-1">
      <span class="chat-time text-sm text-Contents-contentSecondary"
      ></span
      >
      <div
      class="border-none px-[0.875rem] py-2 mr-3 rounded-6xl bg-Bluelight-400 text-background max-w-[15.5rem]"
      >
      <span class="chat-text">${t.chat}</span>
      </div>
      </div>
      `;c(".chat-contents-wrapper",e)}else if(t.user!==r){const e=`
      <div class="chat-you flex mb-2 items-end gap-1">
      <div
      class="border-none px-[0.875rem] py-2 ml-3 rounded-6xl bg-bluegray-100 text-Contents-contentPrimary max-w-[15.5rem]"
      >
      <span class="chat-text"
      >${t.chat}
      </span>
      </div>
      <span class="chat-time text-sm text-Contents-contentSecondary"
            ></span
          >
        </div>
      `;c(".chat-contents-wrapper",e)}});

import"./tailwind-NE021wVL.js";import{a as d,r as l}from"./css-LUmow4Y_.js";import{C as B,g as c,a as v}from"./delay-g6vF19wW.js";import{i as $}from"./insert-vWB_d1l7.js";import{g as D}from"./storage-eNv634Ip.js";import{g as I}from"./getPbImageURL-99Z79ldm.js";import{f as R,a as A}from"./formattedDate-dxVwGQ40.js";import{g as m}from"./index-35H_NU9g.js";const p=new B("https://popcorns.pockethost.io");c(".boardContentsContainer");c(".boardContent-more");const M=c(".boardContent-back"),_=c(".boardContent-back-edit"),k=document.getElementById("menu-button");c(".updateMenu");const U=v(".update-button");c("board-container-info");const F=c(".completeUpdateButton"),P=v(".boardContent-category"),q=v(".boardContent-state"),L=window.location.hash.slice(1),s=await p.collection("community").getOne(L,{expand:"SR_location"});async function T(){const t=await D("userId"),{SR_location:e,activity:n,category:a,date:o,meetingLocation:i,gender:r,approve:f,headcount:u,age:C,title:g,time:y,expand:E,id:h,recruiting:x="모집중"}=s;s.expand.SR_location.id!=t&&(V(),console.log(s.expand.SR_location.id,t)),console.log(s);const S=`

        <h2 class="sr-only">최종 모임 작성 페이지</h2>
        <div class="boardContent-wrapper ">
          <span
            class="boardContent-category border inline-block py-[0.3rem] px-4 mt-3 mx-3 bg-background rounded-sm text-[0.7rem] font-semibold border-Contents-contentPrimary"
            >${a}</span
          >
          <div  class="flex flex-col text-[1.3rem] font-semibold my-3 px-3">
            <span class="boardContent-state text-secondary">${x===""?"모집중":x}</span>
            <span class="boardContent-title my-1">${g}</span>
          </div>

          <div class="text-[1rem] px-5">
            <div class="flex items-center gap-2 py-2">
              <img src="/images/people.svg" alt="" />
              <span class="boardContent-condition">${r} 참여 가능</span>
            </div>
            <div class="flex items-center gap-2 ">
              <img src="/images/fullcalender.svg" alt="" />
              <span class="boardContent-date">${R(o)}</span>
            </div>
            <div>
              <p class="boardContent-content mt-2 mb-8">
                 ${n}
              </p>
            </div>
            <div class="flex gap-1 font-semibold mb-[0.96875rem]">
              <span id="label">참여중인 이웃</span>
              <div aria-labelledby="label" class="flex">
                <span class="boardContent-number-front text-secondary">${u}</span>
                <span class="boardContent-number-back">/10</span>
              </div>
            </div>

            <div class="flex items-center gap-[0.625rem]">
              <div
                class="bg-Contents-contentSecondary w-[1.875rem] h-[1.875rem] rounded-7xl"
              >
                <img
                
                  src="${I(s.expand.SR_location,"avatar")}"
                  class="boardContent-profile w-full h-full rounded-7xl object-cover"
                  alt="프로필"
                />
              </div>
              <div class="flex flex-col text-sm">
                <div class="flex justify-center items-center text-base">
                  <span
                    class="boardContent-name whitespace-nowrap pr-[0.375rem]"
                    >${E.SR_location.username}</span
                  >
                  <img
                    src="/images/organizer.svg"
                    alt="모임설립자 뱃지"
                    class="boardContent-user-state"
                  />
                  <span
                    class="boardContent-user-grade whitespace-nowrap text-gray-900 "
                    >${N(L,h)}</span
                  >
                </div>
                <span
                  class="boardContent-user-number text-gray-700"
                  >${i} 인증 4회</span
                >
              </div>
            </div>
          </div>
          <div class="fixed w-full px-3 bottom-[2.125rem]">
          <a
            class="writeBoardSecond-next-button block text-center text-nowrap text-background rounded-3xl py-4 border bg-primary"
            href="/src/pages/chatScreen/#${h}"
            aria-label="채팅방으로 이동"
          >
            채팅방으로 이동
          </a>
        </div>
        </div>
   
     
  `;$(".template",S),m.from(".board-container",{opacity:0,stagger:.1}),m.to(".writeBoardSecond-next-button",{y:0,opacity:1,stagger:.1})}function V(){d(".boardContent-more","hidden")}function N(t,e){return t===e?"모임장":"이웃"}function b(t,e){if(t==="update"){window.location.href=`/src/pages/boardContent/#${e}`,window.location.reload();return}window.history.back()}function W(){setTimeout(()=>{l(".boardContentsContainer","after:bg-opacity-50"),l(".boardContentsContainer","after:bg-primary"),l(".boardContentsContainer","after:absolute"),l(".boardContentsContainer","after:inset-0"),m.to(".updateMenu",{y:"100%",ease:"power2.out",duration:.5})},200)}function w(t){t!=="update"&&(d(".board-container-info","hidden"),l(".board-container-edit","hidden"),z())}async function z(){const t=document.getElementById("title"),e=document.getElementById("age"),n=document.getElementById("date"),a=document.getElementById("board-content"),o=s.date.split(" ")[0];a.value=s.activity,n.value=o,e.value=s.age,t.value=s.title}function j(){d(".boardContentsContainer","after:bg-opacity-90"),d(".boardContentsContainer","after:bg-Contents-contentPrimary"),d(".boardContentsContainer","after:absolute"),d(".boardContentsContainer","after:inset-0"),m.to(".updateMenu",{y:"0%",ease:"power2.out",duration:.5})}function G(){const t=document.querySelector(".boardContent-state.isClicked");this.classList.toggle("isClicked")?(t&&(t.classList.remove("isClicked"),t.classList.add("text-secondary"),t.classList.remove("text-background"),t.classList.remove("bg-Blue-700")),this.classList.remove("text-secondary"),this.classList.add("text-background"),this.classList.add("bg-Blue-700")):(this.classList.add("text-secondary"),this.classList.remove("bg-Blue-700"),this.classList.remove("text-background"))}function H(){const t=document.querySelector(".boardContent-category.isClicked");this.classList.toggle("isClicked")?(t&&(t.classList.remove("isClicked"),t.classList.add("text-gray-800"),t.classList.remove("text-background"),t.classList.remove("bg-tertiary")),this.classList.remove("text-secondary"),this.classList.add("text-background"),this.classList.add("bg-tertiary")):(this.classList.add("text-secondary"),this.classList.remove("bg-tertiary"),this.classList.remove("text-background"))}function J(){const t=this.getAttribute("data-sets");t==="modify"?w():t==="delete"&&tt()}function K(t){return t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"")}function Q(t){const e=K(t),n=/공모전/g,a=e.match(n);return a?a.join(" "):""}function X(){const t=document.querySelectorAll(".boardContent-category");let e=null;for(const n of t)if(n.classList.contains("isClicked")){e=n;break}return e.getAttribute("data-sets")}function Y(){const t=document.querySelectorAll(".boardContent-state");let e=null;for(const n of t)if(n.classList.contains("isClicked")){e=n;break}return e.getAttribute("data-sets")}function Z(){const t=document.getElementById("title"),e=document.getElementById("age"),n=document.getElementById("date"),a=document.getElementById("board-content"),o=t.value,i=e.value,r=n.value,f=a.value,u=Y(),C=X(),g=Q(C);console.log("title  : ",o),console.log("age  : ",i),console.log("date  : ",r),console.log("category  : ",g),console.log("boardcontent  : ",f),console.log("recruitmentStatus  : ",u);const y={activity:f,category:g,date:r,meetingLocation:"test",age:i,title:o,recruiting:u};return console.log("data  :",y),y}function O(){const t="update",e=Z();et(e),w(t)}async function tt(){await p.collection("community").delete(s.id),b()}async function et(t){const e=window.location.hash.slice(1),n=await p.collection("community").getFullList({expand:"SR_location"}),a="update",o=n.find(r=>{if(r.id===e)return console.log("if문 안    "),!0});console.log("checkAuthor    :",o),console.log("dataObject   :",t);const i={SR_location:o.SR_location,activity:t.activity,category:t.category,date:A(t.date),meetingLocation:o.meetingLocation,gender:o.gender,approve:o.approve,headcount:o.headcount,age:t.age,title:t.title,time:o.time,recruiting:t.recruiting};console.log(i),await p.collection("community").update(o.id,i),b(a,e)}T();q.forEach(t=>{t.addEventListener("click",G)});P.forEach(t=>{t.addEventListener("click",H)});U.forEach(t=>{t.addEventListener("click",J)});_.addEventListener("click",b);M.addEventListener("click",b);k.addEventListener("click",j);k.addEventListener("blur",W);F.addEventListener("click",O);

import"./tailwind-ouJN7DSI.js";import{r as d,a as l}from"./css-LUmow4Y_.js";import{C as B,g as c,a as C}from"./delay-g6vF19wW.js";import{i as $}from"./insert-yGrdL5nD.js";import{g as D}from"./getPbImageURL-99Z79ldm.js";import{f as I,a as A}from"./formattedDate-dxVwGQ40.js";import{g}from"./index-35H_NU9g.js";const p=new B("https://popcorns.pockethost.io");c(".boardContentsContainer");c(".boardContent-more");const R=c(".boardContent-back"),U=c(".boardContent-back-edit"),k=document.getElementById("menu-button");c(".updateMenu");const M=C(".update-button");c("board-container-info");const _=c(".completeUpdateButton"),F=C(".boardContent-category"),P=C(".boardContent-state"),L=window.location.hash.slice(1),s=await p.collection("community").getOne(L,{expand:"SR_location"});async function q(){const{SR_location:t,activity:e,category:n,date:a,meetingLocation:o,gender:i,approve:r,headcount:u,age:f,title:y,time:v,expand:m,id:h,recruiting:x="모집중"}=s,E=x===""?"모집중":x;console.log(s);const S=`

        <h2 class="sr-only">최종 모임 작성 페이지</h2>

        <div class="boardContent-wrapper ">
      
          <span
            class="boardContent-category border inline-block py-[0.3rem] px-4 mt-3 mx-3 bg-background rounded-sm text-[0.7rem] font-semibold border-Contents-contentPrimary"
            >${n}</span
          >
          <div  class="flex flex-col text-[1.3rem] font-semibold my-3 px-3">
            <span class="boardContent-state text-secondary">${E}</span>
            <span class="boardContent-title my-1">${y}</span>
          </div>

          <div class="text-[1rem] px-5">
            <div class="flex items-center gap-2 py-2">
              <img src="/images/people.svg" alt="" />
              <span class="boardContent-condition">${i} 참여 가능</span>
            </div>
            <div class="flex items-center gap-2 ">
              <img src="/images/fullcalender.svg" alt="" />
              <span class="boardContent-date">${I(a)}</span>
            </div>
            <div>
              <p class="boardContent-content mt-2 mb-8">
                 ${e}
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
                
                  src="${D(s.expand.SR_location,"avatar")}"
                  class="boardContent-profile w-full h-full rounded-7xl object-cover"
                  alt="프로필"
                />
              </div>
              <div class="flex flex-col text-sm">
                <div class="flex justify-center items-center text-base">
                  <span
                    class="boardContent-name whitespace-nowrap pr-[0.375rem]"
                    >${m.SR_location.username}</span
                  >
                  <img
                    src="/images/organizer.svg"
                    alt="모임설립자 뱃지"
                    class="boardContent-user-state"
                  />
                  <span
                    class="boardContent-user-grade whitespace-nowrap text-gray-900 "
                    >${T(L,h)}</span
                  >
                </div>
                <span
                  class="boardContent-user-number text-gray-700"
                  >${o} 인증 4회</span
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
   
     
  `;$(".template",S),g.from(".board-container",{opacity:0,stagger:.1}),g.to(".writeBoardSecond-next-button",{y:0,opacity:1,stagger:.1})}function T(t,e){return t===e?"모임장":"이웃"}function b(t,e){if(t==="update"){window.location.href=`/src/pages/boardContent/#${e}`,window.location.reload();return}window.history.back()}function V(){setTimeout(()=>{d(".boardContentsContainer","after:bg-opacity-50"),d(".boardContentsContainer","after:bg-primary"),d(".boardContentsContainer","after:absolute"),d(".boardContentsContainer","after:inset-0"),g.to(".updateMenu",{y:"100%",ease:"power2.out",duration:.5})},200)}function w(t){t!=="update"&&(l(".board-container-info","hidden"),d(".board-container-edit","hidden"),N())}async function N(){const t=document.getElementById("title"),e=document.getElementById("age"),n=document.getElementById("date"),a=document.getElementById("board-content"),o=s.date.split(" ")[0];a.value=s.activity,n.value=o,e.value=s.age,t.value=s.title}function W(){l(".boardContentsContainer","after:bg-opacity-90"),l(".boardContentsContainer","after:bg-Contents-contentPrimary"),l(".boardContentsContainer","after:absolute"),l(".boardContentsContainer","after:inset-0"),g.to(".updateMenu",{y:"0%",ease:"power2.out",duration:.5})}function z(){const t=document.querySelector(".boardContent-state.isClicked");this.classList.toggle("isClicked")?(t&&(t.classList.remove("isClicked"),t.classList.add("text-secondary"),t.classList.remove("text-background"),t.classList.remove("bg-Blue-700")),this.classList.remove("text-secondary"),this.classList.add("text-background"),this.classList.add("bg-Blue-700")):(this.classList.add("text-secondary"),this.classList.remove("bg-Blue-700"),this.classList.remove("text-background"))}function j(){const t=document.querySelector(".boardContent-category.isClicked");this.classList.toggle("isClicked")?(t&&(t.classList.remove("isClicked"),t.classList.add("text-gray-800"),t.classList.remove("text-background"),t.classList.remove("bg-tertiary")),this.classList.remove("text-secondary"),this.classList.add("text-background"),this.classList.add("bg-tertiary")):(this.classList.add("text-secondary"),this.classList.remove("bg-tertiary"),this.classList.remove("text-background"))}function G(){const t=this.getAttribute("data-sets");t==="modify"?w():t==="delete"&&Z()}function H(t){return t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"")}function J(t){const e=H(t),n=/공모전/g,a=e.match(n);return a?a.join(" "):""}function K(){const t=document.querySelectorAll(".boardContent-category");let e=null;for(const n of t)if(n.classList.contains("isClicked")){e=n;break}return e.getAttribute("data-sets")}function Q(){const t=document.querySelectorAll(".boardContent-state");let e=null;for(const n of t)if(n.classList.contains("isClicked")){e=n;break}return e.getAttribute("data-sets")}function X(){const t=document.getElementById("title"),e=document.getElementById("age"),n=document.getElementById("date"),a=document.getElementById("board-content"),o=t.value,i=e.value,r=n.value,u=a.value,f=Q(),y=K(),v=J(y);console.log("title  : ",o),console.log("age  : ",i),console.log("date  : ",r),console.log("category  : ",v),console.log("boardcontent  : ",u),console.log("recruitmentStatus  : ",f);const m={activity:u,category:v,date:r,meetingLocation:"test",age:i,title:o,recruiting:f};return console.log("data  :",m),m}function Y(){const t="update",e=X();O(e),w(t)}async function Z(){await p.collection("community").delete(s.id),b()}async function O(t){const e=window.location.hash.slice(1),n=await p.collection("community").getFullList({expand:"SR_location"}),a="update",o=n.find(r=>{if(r.id===e)return console.log("if문 안    "),!0});console.log("checkAuthor    :",o),console.log("dataObject   :",t);const i={SR_location:o.SR_location,activity:t.activity,category:t.category,date:A(t.date),meetingLocation:o.meetingLocation,gender:o.gender,approve:o.approve,headcount:o.headcount,age:t.age,title:t.title,time:o.time,recruiting:t.recruiting};console.log(i),await p.collection("community").update(o.id,i),b(a,e)}q();P.forEach(t=>{t.addEventListener("click",z)});F.forEach(t=>{t.addEventListener("click",j)});M.forEach(t=>{t.addEventListener("click",G)});U.addEventListener("click",b);R.addEventListener("click",b);k.addEventListener("click",W);k.addEventListener("blur",V);_.addEventListener("click",Y);

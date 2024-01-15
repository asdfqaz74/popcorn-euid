import"./tailwind-xU_d6Hf1.js";import{r as d,a as l}from"./css-LUmow4Y_.js";import{C as B,g as c,a as y}from"./delay-g6vF19wW.js";import{i as $}from"./insert-yGrdL5nD.js";import{g as I}from"./getPbImageURL-99Z79ldm.js";import{f as A,a as D}from"./formattedDate-dxVwGQ40.js";import{g as m}from"./index-35H_NU9g.js";const p=new B("https://popcorns.pockethost.io");c(".boardContentsContainer");c(".boardContent-more");const R=c(".boardContent-back"),U=c(".boardContent-back-edit"),x=document.getElementById("menu-button");c(".updateMenu");const M=y(".update-button");c("board-container-info");const _=c(".completeUpdateButton"),P=y(".boardContent-category"),q=y(".boardContent-state"),k=window.location.hash.slice(1),a=await p.collection("community").getOne(k,{expand:"SR_location"});async function T(){const{SR_location:t,activity:e,category:o,date:s,meetingLocation:n,gender:i,approve:r,headcount:u,age:f,title:g,time:v,expand:w,id:C,recruiting:h="모집중"}=a,E=h===""?"모집중":h;console.log(a);const S=`

        <h2 class="sr-only">최종 모임 작성 페이지</h2>

        <div class="boardContent-wrapper ">
      
          <span
            class="boardContent-category border inline-block py-[0.3rem] px-4 mt-3 mx-3 bg-background rounded-sm text-[0.7rem] font-semibold border-Contents-contentPrimary"
            >${o}</span
          >
          <div  class="flex flex-col text-[1.3rem] font-semibold my-3 px-3">
            <span class="boardContent-state text-secondary">${E}</span>
            <span class="boardContent-title my-1">${g}</span>
          </div>

          <div class="text-[1rem] px-5">
            <div class="flex items-center gap-2 py-2">
              <img src="/images/people.svg" alt="" />
              <span class="boardContent-condition">${i} 참여 가능</span>
            </div>
            <div class="flex items-center gap-2 ">
              <img src="/images/fullcalender.svg" alt="" />
              <span class="boardContent-date">${A(s)}</span>
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
                
                  src="${I(a.expand.SR_location,"avatar")}"
                  class="boardContent-profile w-full h-full rounded-7xl object-cover"
                  alt="프로필"
                />
              </div>
              <div class="flex flex-col text-sm">
                <div class="flex justify-center items-center text-base">
                  <span
                    class="boardContent-name whitespace-nowrap pr-[0.375rem]"
                    >${w.SR_location.username}</span
                  >
                  <img
                    src="/images/organizer.svg"
                    alt="모임설립자 뱃지"
                    class="boardContent-user-state"
                  />
                  <span
                    class="boardContent-user-grade whitespace-nowrap text-gray-900 "
                    >${V(k,C)}</span
                  >
                </div>
                <span
                  class="boardContent-user-number text-gray-700"
                  >${n} 인증 4회</span
                >
              </div>
            </div>
          </div>
          <div class="fixed w-full px-3 bottom-[2.125rem]">
          <a
            class="writeBoardSecond-next-button block text-center text-nowrap text-background rounded-3xl py-4 border bg-primary"
            href="/src/pages/chatScreen/#${C}"
            aria-label="채팅방으로 이동"
          >
            채팅방으로 이동
          </a>
        </div>
        </div>
   
     
  `;$(".template",S),m.from(".board-container",{opacity:0,stagger:.1}),m.to(".writeBoardSecond-next-button",{y:0,opacity:1,stagger:.1})}function V(t,e){return t===e?"모임장":"이웃"}function b(t,e){if(t==="update"){window.location.href=`/src/pages/boardContent/#${e}`,window.location.reload();return}window.location.href="/src/pages/togetherBoard/"}function N(){setTimeout(()=>{d(".boardContentsContainer","after:bg-opacity-50"),d(".boardContentsContainer","after:bg-primary"),d(".boardContentsContainer","after:absolute"),d(".boardContentsContainer","after:inset-0"),m.to(".updateMenu",{y:"100%",ease:"power2.out",duration:.5})},200)}function L(t){t!=="update"&&(l(".board-container-info","hidden"),d(".board-container-edit","hidden"),z())}async function z(){const t=document.getElementById("title"),e=document.getElementById("age"),o=document.getElementById("date"),s=document.getElementById("board-content"),n=a.date.split(" ")[0];s.value=a.activity,o.value=n,e.value=a.age,t.value=a.title}function F(){l(".boardContentsContainer","after:bg-opacity-90"),l(".boardContentsContainer","after:bg-Contents-contentPrimary"),l(".boardContentsContainer","after:absolute"),l(".boardContentsContainer","after:inset-0"),m.to(".updateMenu",{y:"0%",ease:"power2.out",duration:.5})}function W(){const t=document.querySelector(".boardContent-state.isClicked");this.classList.toggle("isClicked")?(t&&(t.classList.remove("isClicked"),t.classList.add("text-secondary"),t.classList.remove("text-background"),t.classList.remove("bg-Blue-700")),this.classList.remove("text-secondary"),this.classList.add("text-background"),this.classList.add("bg-Blue-700")):(this.classList.add("text-secondary"),this.classList.remove("bg-Blue-700"),this.classList.remove("text-background"))}function G(){const t=document.querySelector(".boardContent-category.isClicked");this.classList.toggle("isClicked")?(t&&(t.classList.remove("isClicked"),t.classList.add("text-gray-800"),t.classList.remove("text-background"),t.classList.remove("bg-tertiary")),this.classList.remove("text-secondary"),this.classList.add("text-background"),this.classList.add("bg-tertiary")):(this.classList.add("text-secondary"),this.classList.remove("bg-tertiary"),this.classList.remove("text-background"))}function H(){const t=this.getAttribute("data-sets");t==="modify"?L():t==="delete"&&Y()}function J(){const t=document.querySelectorAll(".boardContent-category");let e=null;for(const o of t)if(o.classList.contains("isClicked")){e=o;break}return e.getAttribute("data-sets")}function K(){const t=document.querySelectorAll(".boardContent-state");let e=null;for(const o of t)if(o.classList.contains("isClicked")){e=o;break}return e.getAttribute("data-sets")}function Q(){const t=document.getElementById("title"),e=document.getElementById("age"),o=document.getElementById("date"),s=document.getElementById("board-content"),n=t.value,i=e.value,r=o.value,u=s.value,f=K(),g=J();console.log("title  : ",n),console.log("age  : ",i),console.log("date  : ",r),console.log("category  : ",g),console.log("boardcontent  : ",u),console.log("recruitmentStatus  : ",f);const v={activity:u,category:g,date:r,meetingLocation:"test",age:i,title:n,recruiting:f};return console.log("data  :",v),v}function X(){const t="update",e=Q();Z(e),L(t)}async function Y(){await p.collection("community").delete(a.id),b()}async function Z(t){const e=window.location.hash.slice(1),o=await p.collection("community").getFullList({expand:"SR_location"}),s="update",n=o.find(r=>{if(r.id===e)return console.log("if문 안    "),!0});console.log("checkAuthor    :",n),console.log("dataObject   :",t);const i={SR_location:n.SR_location,activity:t.activity,category:t.category,date:D(t.date),meetingLocation:n.meetingLocation,gender:n.gender,approve:n.approve,headcount:n.headcount,age:t.age,title:t.title,time:n.time,recruiting:t.recruiting};console.log(i),await p.collection("community").update(n.id,i),b(s,e)}T();q.forEach(t=>{t.addEventListener("click",W)});P.forEach(t=>{t.addEventListener("click",G)});M.forEach(t=>{t.addEventListener("click",H)});U.addEventListener("click",b);R.addEventListener("click",b);x.addEventListener("click",F);x.addEventListener("blur",N);_.addEventListener("click",X);

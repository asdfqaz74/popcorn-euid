import"./tailwind-WJoQXHVu.js";import{r as c,a as r}from"./css-LUmow4Y_.js";import{C as S,g as i,a as v}from"./delay-g6vF19wW.js";import{i as $}from"./insert-yGrdL5nD.js";import{g as I}from"./getPbImageURL-99Z79ldm.js";import{f as A,a as D}from"./formattedDate-dxVwGQ40.js";import{g}from"./index-35H_NU9g.js";const y=new S("https://popcorns.pockethost.io");i(".boardContentsContainer");i(".boardContent-more");const R=i(".boardContent-back"),U=i(".boardContent-back-edit"),x=document.getElementById("menu-button");i(".updateMenu");const M=v(".update-button");i("board-container-info");const _=i(".completeUpdateButton"),q=v(".boardContent-category"),P=v(".boardContent-state"),m=window.location.hash.slice(1),a=await y.collection("community").getOne(m,{expand:"SR_location"});async function T(){const{SR_location:t,activity:e,category:n,date:o,meetingLocation:s,gender:d,approve:b,headcount:l,age:f,title:u,time:L,expand:E,id:C,recruiting:h="모집중"}=a,w=h===""?"모집중":h;console.log(a);const B=`

        <h2 class="sr-only">최종 모임 작성 페이지</h2>

        <div class="boardContent-wrapper  pb-[40%] pt-6 px-3 mb-[4.625rem]">
          <span
            class="boardContent-category inline-block py-[0.3rem] px-3 border-none bg-gray-600 rounded-sm text-base font-semibold text-background"
            >📝${n}</span
          >
          <div  class="flex flex-col text-[1.5rem] font-semibold my-3">
            <span class="boardContent-state text-secondary">${w}</span>
            <span class="boardContent-title my-1">${u}</span>
          </div>

          <div>
            <div class="flex items-center gap-2 py-2">
              <img src="/images/people.svg" alt="" />
              <span class="boardContent-condition">${d} 참여 가능</span>
            </div>
            <div class="flex items-center gap-2 ">
              <img src="/images/fullcalender.svg" alt="" />
              <span class="boardContent-date">${A(o)}</span>
            </div>
            <div>
              <p class="boardContent-content mt-2 mb-8">
                 ${e}
              </p>
            </div>
            <div class="flex gap-1 font-semibold mb-[0.96875rem]">
              <span id="label">참여중인 이웃</span>
              <div aria-labelledby="label" class="flex">
                <span class="boardContent-number-front text-secondary">${l}</span>
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
                    >${E.SR_location.username}</span
                  >
                  <img
                    src="/images/organizer.svg"
                    alt="모임설립자 뱃지"
                    class="boardContent-user-state"
                  />
                  <span
                    class="boardContent-user-grade whitespace-nowrap text-gray-900 "
                    >${V(m,C)}</span
                  >
                </div>
                <span
                  class="boardContent-user-number text-gray-700"
                  >${s} 인증 4회</span
                >
              </div>
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
  `;$(".template",B),g.from(".board-container",{opacity:0,stagger:.1}),g.to(".writeBoardSecond-next-button",{y:0,opacity:1,stagger:.1})}function V(t,e){return t===e?"모임장":"이웃"}function p(t,e){if(t==="update"){window.location.href=`/src/pages/boardContent/#${e}`,console.log("안이야 hash :",e);return}console.log("밖이야"),window.location.href="/src/pages/togetherBoard/"}function N(){console.log("sdfsdf"),setTimeout(()=>{c(".boardContentsContainer","after:bg-opacity-50"),c(".boardContentsContainer","after:bg-primary"),c(".boardContentsContainer","after:absolute"),c(".boardContentsContainer","after:inset-0"),g.to(".updateMenu",{y:"100%",ease:"power2.out",duration:.5})},200)}function k(t){t!=="update"&&(r(".board-container-info","hidden"),c(".board-container-edit","hidden"),z())}async function z(){const t=document.getElementById("title"),e=document.getElementById("age"),n=document.getElementById("date"),o=document.getElementById("board-content"),s=a.date.split(" ")[0];t.value,e.value,n.value,o.value,o.value=a.activity,n.value=s,e.value=a.age,t.value=a.title}function W(){r(".boardContentsContainer","after:bg-opacity-90"),r(".boardContentsContainer","after:bg-Contents-contentPrimary"),r(".boardContentsContainer","after:absolute"),r(".boardContentsContainer","after:inset-0"),g.to(".updateMenu",{y:"0%",ease:"power2.out",duration:.5})}function F(){const t=document.querySelector(".boardContent-state.isClicked");this.classList.toggle("isClicked")?(t&&(t.classList.remove("isClicked"),t.classList.add("text-secondary"),t.classList.remove("text-background"),t.classList.remove("bg-Blue-700")),this.classList.remove("text-secondary"),this.classList.add("text-background"),this.classList.add("bg-Blue-700")):(this.classList.add("text-secondary"),this.classList.remove("bg-Blue-700"),this.classList.remove("text-background"))}function G(){const t=document.querySelector(".boardContent-category.isClicked");this.classList.toggle("isClicked")?(t&&(t.classList.remove("isClicked"),t.classList.add("bg-bluegray-700"),t.classList.remove("bg-secondary")),this.classList.remove("bg-bluegray-700"),this.classList.add("bg-secondary")):(this.classList.add("bg-bluegray-700"),this.classList.remove("bg-secondary"))}function H(){const t=this.getAttribute("data-sets");t==="모집중"||t==="모집종료"||(t==="modify"?k():t==="delete"&&Y())}function J(){const t=document.querySelectorAll(".boardContent-category");let e=null;for(const n of t)if(n.classList.contains("isClicked")){e=n;break}return e.getAttribute("data-sets")}function K(){const t=document.querySelectorAll(".boardContent-state");let e=null;for(const n of t)if(n.classList.contains("isClicked")){e=n;break}return e.getAttribute("data-sets")}function Q(){const t=document.getElementById("title"),e=document.getElementById("age"),n=document.getElementById("date"),o=document.getElementById("board-content"),s=t.value,d=e.value,b=n.value,l=o.value,f=K(),u=J();return console.log("title  : ",s),console.log("age  : ",d),console.log("date  : ",b),console.log("category  : ",u),console.log("boardcontent  : ",l),console.log("recruitmentStatus  : ",f),{activity:l,category:u,date:b,meetingLocation:"test",age:d,title:s,recruiting:f}}function X(){const t="update",e=Q();Z(e),k(t)}async function Y(){await y.collection("community").delete(a.id),p()}async function Z(t){const e="update",n=a.find(s=>{if(s.id===m)return!0});console.log("checkAuthor    :",n),console.log(t);const o={SR_location:n.SR_location,activity:t.activity,category:t.category,date:D(t.date),meetingLocation:n.meetingLocation,gender:n.gender,approve:n.approve,headcount:n.headcount,age:t.age,title:t.title,time:n.time,recruiting:t.recruiting};console.log(o),await y.collection("community").update(n.id,o),p(e,m)}T();P.forEach(t=>{t.addEventListener("click",F)});q.forEach(t=>{t.addEventListener("click",G)});M.forEach(t=>{t.addEventListener("click",H)});U.addEventListener("click",p);R.addEventListener("click",p);x.addEventListener("click",W);x.addEventListener("blur",N);_.addEventListener("click",X);

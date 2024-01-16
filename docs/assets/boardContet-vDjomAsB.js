import"./tailwind-NE021wVL.js";import{a as r,r as l}from"./css-LUmow4Y_.js";import{C as E,g as i,a as f}from"./delay-g6vF19wW.js";import{i as B}from"./insert-vWB_d1l7.js";import{g as $}from"./storage-eNv634Ip.js";import{g as I}from"./getPbImageURL-99Z79ldm.js";import{f as R,a as A}from"./formattedDate-dxVwGQ40.js";import{g as m}from"./index-35H_NU9g.js";const g=new E("https://popcorns.pockethost.io");i(".boardContentsContainer");i(".boardContent-more");const D=i(".boardContent-back"),M=i(".boardContent-back-edit"),x=document.getElementById("menu-button");i(".updateMenu");const _=f(".update-button");i("board-container-info");const U=i(".completeUpdateButton"),P=f(".boardContent-category"),q=f(".boardContent-state"),k=window.location.hash.slice(1),a=await g.collection("community").getOne(k,{expand:"SR_location"});async function V(){const t=await $("userId"),{SR_location:e,activity:o,category:s,date:n,meetingLocation:c,gender:d,approve:y,headcount:b,age:v,title:u,time:O,expand:w,id:C,recruiting:h="모집중"}=a;a.expand.SR_location.id!=t&&(T(),console.log(a.expand.SR_location.id,t)),console.log(a);const S=`

        <h2 class="sr-only">최종 모임 작성 페이지</h2>
        <div class="boardContent-wrapper ">
          <span
            class="boardContent-category border inline-block py-[0.3rem] px-4 mt-3 mx-3 bg-background rounded-sm text-[0.7rem] font-semibold border-Contents-contentPrimary"
            >${s}</span
          >
          <div  class="flex flex-col text-[1.3rem] font-semibold my-3 px-3">
            <span class="boardContent-state text-secondary">${h===""?"모집중":h}</span>
            <span class="boardContent-title my-1">${u}</span>
          </div>

          <div class="text-[1rem] px-5">
            <div class="flex items-center gap-2 py-2">
              <img src="/images/people.svg" alt="" />
              <span class="boardContent-condition">${d} 참여 가능</span>
            </div>
            <div class="flex items-center gap-2 ">
              <img src="/images/fullcalender.svg" alt="" />
              <span class="boardContent-date">${R(n)}</span>
            </div>
            <div>
              <p class="boardContent-content mt-2 mb-8">
                 ${o}
              </p>
            </div>
            <div class="flex gap-1 font-semibold mb-[0.96875rem]">
              <span id="label">참여중인 이웃</span>
              <div aria-labelledby="label" class="flex">
                <span class="boardContent-number-front text-secondary">${b}</span>
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
                    >${N(k,C)}</span
                  >
                </div>
                <span
                  class="boardContent-user-number text-gray-700"
                  >${c} 인증 4회</span
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
   
     
  `;B(".template",S),m.from(".board-container",{opacity:0,stagger:.1}),m.to(".writeBoardSecond-next-button",{y:0,opacity:1,stagger:.1})}function T(){r(".boardContent-more","hidden")}function N(t,e){return t===e?"모임장":"이웃"}function p(t,e){if(t==="update"){window.location.href=`/src/pages/boardContent/#${e}`,window.location.reload();return}window.history.back()}function z(){setTimeout(()=>{l(".boardContentsContainer","after:bg-opacity-50"),l(".boardContentsContainer","after:bg-primary"),l(".boardContentsContainer","after:absolute"),l(".boardContentsContainer","after:inset-0"),m.to(".updateMenu",{y:"100%",ease:"power2.out",duration:.5})},200)}function L(t){t!=="update"&&(r(".board-container-info","hidden"),l(".board-container-edit","hidden"),F())}async function F(){const t=document.getElementById("title"),e=document.getElementById("age"),o=document.getElementById("date"),s=document.getElementById("board-content"),n=a.date.split(" ")[0];s.value=a.activity,o.value=n,e.value=a.age,t.value=a.title}function W(){r(".boardContentsContainer","after:bg-opacity-90"),r(".boardContentsContainer","after:bg-Contents-contentPrimary"),r(".boardContentsContainer","after:absolute"),r(".boardContentsContainer","after:inset-0"),m.to(".updateMenu",{y:"0%",ease:"power2.out",duration:.5})}function G(){const t=document.querySelector(".boardContent-state.isClicked");this.classList.toggle("isClicked")?(t&&(t.classList.remove("isClicked"),t.classList.add("text-secondary"),t.classList.remove("text-background"),t.classList.remove("bg-Blue-700")),this.classList.remove("text-secondary"),this.classList.add("text-background"),this.classList.add("bg-Blue-700")):(this.classList.add("text-secondary"),this.classList.remove("bg-Blue-700"),this.classList.remove("text-background"))}function H(){const t=document.querySelector(".boardContent-category.isClicked");this.classList.toggle("isClicked")?(t&&(t.classList.remove("isClicked"),t.classList.add("text-gray-800"),t.classList.remove("text-background"),t.classList.remove("bg-tertiary")),this.classList.remove("text-secondary"),this.classList.add("text-background"),this.classList.add("bg-tertiary")):(this.classList.add("text-secondary"),this.classList.remove("bg-tertiary"),this.classList.remove("text-background"))}function J(){const t=this.getAttribute("data-sets");t==="modify"?L():t==="delete"&&Z()}function K(){const t=document.querySelectorAll(".boardContent-category");let e=null;for(const o of t)if(o.classList.contains("isClicked")){e=o;break}return e.getAttribute("data-sets")}function Q(){const t=document.querySelectorAll(".boardContent-state");let e=null;for(const o of t)if(o.classList.contains("isClicked")){e=o;break}return e.getAttribute("data-sets")}function X(){const t=document.getElementById("title"),e=document.getElementById("age"),o=document.getElementById("date"),s=document.getElementById("board-content"),n=t.value,c=e.value,d=o.value,y=s.value,b=Q(),v=K(),u={activity:y,category:v,date:d,meetingLocation:"test",age:c,title:n,recruiting:b};return console.log("data  :",u),u}function Y(){const t="update",e=X();j(e),L(t)}async function Z(){await g.collection("community").delete(a.id),p()}async function j(t){const e=window.location.hash.slice(1),o=await g.collection("community").getFullList({expand:"SR_location"}),s="update",n=o.find(d=>{if(d.id===e)return console.log("if문 안    "),!0});console.log("checkAuthor    :",n),console.log("dataObject   :",t);const c={SR_location:n.SR_location,activity:t.activity,category:t.category,date:A(t.date),meetingLocation:n.meetingLocation,gender:n.gender,approve:n.approve,headcount:n.headcount,age:t.age,title:t.title,time:n.time,recruiting:t.recruiting};console.log(c),await g.collection("community").update(n.id,c),p(s,e)}V();q.forEach(t=>{t.addEventListener("click",G)});P.forEach(t=>{t.addEventListener("click",H)});_.forEach(t=>{t.addEventListener("click",J)});M.addEventListener("click",p);D.addEventListener("click",p);x.addEventListener("click",W);x.addEventListener("blur",z);U.addEventListener("click",Y);

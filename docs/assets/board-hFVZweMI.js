import"./tailwind-zBIZP7u3.js";import{g as n,C as p}from"./delay-g6vF19wW.js";import{i as c}from"./insert-yGrdL5nD.js";import{g as u}from"./getPbImageURL-99Z79ldm.js";import{t as g}from"./timeAgo-WbyvHha8.js";import{f as b}from"./formattedDate-dxVwGQ40.js";import{g as s}from"./index-35H_NU9g.js";const r=n(".subjectMenu"),a=n(".subject-menu-container"),i=n(".board-closedSubjectMenu-button"),m=new p("https://popcorns.pockethost.io");async function f(){v();const o=(await m.collection("community").getList(1,50,{expand:"SR_location"})).items;console.log(o),o.forEach(e=>{console.log(e);const d=`
    <div
          class="board-container text-bluegray-400 text-sm border-t-[1px] p-3 grid grid-cols-2"
        >    
     <div class="col-start-1 row-start-1 row-end-3 col-end-3">
     <a href="/src/pages/boardContent/index.html#${e.id}" >
            <span
              class="board-keyword p-1 border border-black rounded-default bg-bluegray-300 text-background"
            >
              ${e.category}
            </span>
            <strong
              class="board-title block my-1 text-base whitespace-nowrap text-ellipsis overflow-hidden text-Contents-contentPrimary"
            >
            ${e.title}
            </strong>
            <div class="my-1 flex gap-1">
              <img src="/public/images/fullpeople.svg" alt="참여인원 수" />
              <span class="board-people">  ${e.age}  </span>
            </div>
            <div class="my-1 flex gap-1">
              <img src="/public/images/calender.svg" alt="날짜" />
              <span class="board-when"> ${b(e.date)}</span>
              <span class="board-time">${e.time} </span>
            </div>
            <div class="my-1">
              <span class="board-location">  ${e.expand.SR_location.locationSecond}</span>
              <span>·</span>
              <span class="board-writeTime"> ${g(e.created)} </span>
            </div>
            </a>
          </div>
          <div class="col-end-4 self-center">
            <img
              class="board-thumnail h-[60px] w-[60px]"
              src="${u(e)}"
              alt="게시물 미리보기 사진"
              onerror="this.style.display='none';"
            />
          </div>
          <div class="gap-1 items-center col-end-4 self-end justify-end flex">
            <img src="/public/images/fullpeople.svg" alt="참가 인원수" />
            <span class="board-joinPeople">${e.headcount}/10명</span>
          </div> 
          
              </div>
  `;c(".template",d)}),c(".templateSubjectContainer",`
<div class="p-3 flex justify-between">
<div class="flex items-center gap-2">
  <img class="h-[34px] w-[34px]" src="/public/images/life.svg" alt="" />
  <strong class="board-subject-name no-wrap truncate">localStorage 아직</strong>
</div>
<div
  class="board-participating py-1 text-secondary rounded-2xl px-5 border bg-bluegray-100 no-wrap"
>
  참여중
</div>
</div>
<div class="p-3 flex justify-between">
<div class="flex items-center gap-2">
  <img class="h-[34px] w-[34px]" src="/public/images/life.svg" alt="" />
  <strong class="board-subject-name no-wrap truncate">localStorage 아직</strong>
</div>
<div
  class="board-participating py-1 text-secondary rounded-2xl px-5 border bg-bluegray-100 no-wrap"
>
  참여중
</div>
</div>

`),s.from(".board-container",{y:30,opacity:0,stagger:.1})}function v(){const t=localStorage.getItem("interest");return JSON.parse(t)}function l(){const t=this.classList.toggle("click");if(this.className===i.className){s.to(a,{y:"100%",ease:"power2.out",duration:.5}),r.classList.remove("click");return}if(t){s.to(a,{y:0,ease:"power2.out",duration:.5});return}s.to(a,{y:"100%",ease:"power2.out",duration:.5})}function y(t){t.target.closest(".subject-menu-container")||t.target.closest(".subjectMenu")||(s.to(a,{y:"100%",ease:"power2.out",duration:.5}),r.classList.remove("click"))}f();r.addEventListener("click",l);i.addEventListener("click",l);document.addEventListener("click",y);
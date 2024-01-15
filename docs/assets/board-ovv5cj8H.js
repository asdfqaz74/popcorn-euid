import"./tailwind-A-Exv5E6.js";import{g as s,C as d}from"./delay-g6vF19wW.js";import{i as n}from"./insert-yGrdL5nD.js";import{g as p}from"./getPbImageURL-99Z79ldm.js";import{t as u}from"./timeAgo-WbyvHha8.js";import{f as g}from"./formattedDate-dxVwGQ40.js";import{g as a}from"./index-35H_NU9g.js";const r=s(".subjectMenu"),o=s(".subject-menu-container"),c=s(".board-closedSubjectMenu-button"),b=new d("https://popcorns.pockethost.io");async function m(){(await b.collection("community").getList(1,50,{expand:"SR_location"})).items.forEach(e=>{console.log(e);const l=`
    <div
          class="group hover:bg-tertiary board-container text-bluegray-400 text-sm border-t-[1px] p-3 grid grid-cols-2"
        >    
     <div class="col-start-1 row-start-1 row-end-3 col-end-3">
     <a href="/src/pages/boardContent/index.html#${e.id}" >
            <span
              class="group-hover:text-background group-hover:bg-Blue-700 board-keyword p-1 border border-black rounded-default bg-bluegray-600 text-background"
            >
              ${e.category}
            </span>
            <strong
              class="board-title block my-1 text-base whitespace-nowrap text-ellipsis overflow-hidden text-Contents-contentPrimary"
            >
            ${e.title}
            </strong>
            <div class="my-1 flex gap-1 ">
              <img src="/public/images/fullpeople.svg" alt="참여인원 수" />
              <span class="group-hover:text-background board-people ">  ${e.age}  </span>
            </div>
            <div class="my-1 flex gap-1">
              <img src="/public/images/calender.svg" alt="날짜" />
              <span class="group-hover:text-background board-when"> ${g(e.date)}</span>
              <span class="group-hover:text-background board-time">${e.time} </span>
            </div>
            <div class="my-1">
              <span class="group-hover:text-background board-location">  ${e.expand.SR_location.locationSecond}</span>
              <span class="group-hover:text-background">·</span>
              <span class="group-hover:text-background board-writeTime"> ${u(e.created)} </span>
            </div>
            </a>
          </div>
          <div class="col-end-4 self-center">
            <img
              class="board-thumnail h-[60px] w-[60px]"
              src="${p(e)}"
              alt="게시물 미리보기 사진"
              onerror="this.style.display='none';"
            />
          </div>
          <div class="group-hover:text-background gap-1 items-center col-end-4 self-end justify-end flex">
            <img src="/public/images/fullpeople.svg" alt="참가 인원수" />
            <span class="board-joinPeople">${e.headcount}/10명</span>
          </div> 
          
              </div>
  `;n(".template",l)}),n(".templateSubjectContainer",`
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

`),a.from(".board-container",{y:30,opacity:0,stagger:.1})}function i(){const t=this.classList.toggle("click");if(this.className===c.className){a.to(o,{y:"100%",ease:"power2.out",duration:.5}),r.classList.remove("click");return}if(t){a.to(o,{y:0,ease:"power2.out",duration:.5});return}a.to(o,{y:"100%",ease:"power2.out",duration:.5})}function v(t){t.target.closest(".subject-menu-container")||t.target.closest(".subjectMenu")||(a.to(o,{y:"100%",ease:"power2.out",duration:.5}),r.classList.remove("click"))}m();r.addEventListener("click",i);c.addEventListener("click",i);document.addEventListener("click",v);

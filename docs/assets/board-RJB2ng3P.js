import"./tailwind-zZkDsczm.js";import{g as s,C as b}from"./delay-g6vF19wW.js";import{i as c}from"./insert-yGrdL5nD.js";import{g as m}from"./storage-eNv634Ip.js";import{g as v}from"./getPbImageURL-99Z79ldm.js";import{t as f}from"./timeAgo-WbyvHha8.js";import{f as x}from"./formattedDate-dxVwGQ40.js";import{g as o}from"./index-35H_NU9g.js";import{f as i,c as y}from"./calender-6jrPqTjm.js";const h="/assets/front-OCr1WZYT.svg",r=s(".subjectMenu"),a=s(".subject-menu-container"),l=s(".board-closedSubjectMenu-button"),w=new b("https://popcorns.pockethost.io"),k=await w.collection("community").getList(1,50,{expand:"SR_location"}),d=k.items;async function S(){const e=await m("userId");d.forEach(t=>{const n=`
    <div
          class="group hover:bg-tertiary board-container text-bluegray-400 text-sm border-t-[1px] p-3 grid grid-cols-2"
        >    
     <div class="col-start-1 row-start-1 row-end-3 col-end-3">
     <a href="/src/pages/boardContent/index.html#${t.id}" >
            <span
              class="group-hover:text-background group-hover:bg-Blue-700 board-keyword p-1 border  rounded-default   text-Contents-contentPrimary"
            >
              ${t.category}
            </span>
            <strong
              class="board-title block my-1 text-base whitespace-nowrap text-ellipsis overflow-hidden text-Contents-contentPrimary"
            >
            ${t.title}
            </strong>
            <div class="my-1 flex gap-1 ">
              <img src="${i}" alt="참여인원 수" />
              <span class="group-hover:text-background board-people ">  ${t.age}  </span>
            </div>
            <div class="my-1 flex gap-1">
              <img src="${y}" alt="날짜" />
              <span class="group-hover:text-background board-when"> ${x(t.date)}</span>
              <span class="group-hover:text-background board-time">${t.time} </span>
            </div>
            <div class="my-1">
              <span class="group-hover:text-background board-location">  ${t.expand.SR_location.locationSecond}</span>
              <span class="group-hover:text-background">·</span>
              <span class="group-hover:text-background board-writeTime"> ${f(t.created)} </span>
            </div>
            </a>
          </div>
          <div class="col-end-4 self-center">
            <img
              class="board-thumnail h-[60px] w-[60px]"
              src="${v(t)}"
              alt="게시물 미리보기 사진"
              onerror="this.style.display='none';"
            />
          </div>
          <div class="group-hover:text-background gap-1 items-center col-end-4 self-end justify-end flex">
            <img src="${i}" alt="참가 인원수" />
            <span class="board-joinPeople">${t.headcount}/10명</span>
          </div> 
          
              </div>
  `;c(".template",n)}),o.from(".board-container",{y:30,opacity:0,stagger:.1}),d.forEach(t=>{t.expand.SR_location.id===e&&t.expand.SR_location.category.split(",").forEach(u=>{const g=`
        <div class="p-3 flex justify-between">
        <div class="flex items-center gap-2">
          <img class="h-[34px] w-[34px]" src="${h}" alt="" />
          <strong class="board-subject-name no-wrap truncate">${u}</strong>
        </div>
        <div
          class="board-participating py-1 text-secondary rounded-2xl px-5 border bg-bluegray-100 no-wrap"
        >
          참여중
        </div>
        </div>

        `;c(".templateSubjectContainer",g)})})}function p(){const e=this.classList.toggle("click");if(this.className===l.className){o.to(a,{y:"100%",ease:"power2.out",duration:.5}),r.classList.remove("click");return}if(e){o.to(a,{y:0,ease:"power2.out",duration:.5});return}o.to(a,{y:"100%",ease:"power2.out",duration:.5})}function $(e){e.target.closest(".subject-menu-container")||e.target.closest(".subjectMenu")||(o.to(a,{y:"100%",ease:"power2.out",duration:.5}),r.classList.remove("click"))}S();r.addEventListener("click",p);l.addEventListener("click",p);document.addEventListener("click",$);

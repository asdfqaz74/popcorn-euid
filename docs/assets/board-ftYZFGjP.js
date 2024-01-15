import"./tailwind-ouJN7DSI.js";import{g as s,C as u}from"./delay-g6vF19wW.js";import{i as n}from"./insert-yGrdL5nD.js";import{g as b}from"./getPbImageURL-99Z79ldm.js";import{t as m}from"./timeAgo-WbyvHha8.js";import{f as v}from"./formattedDate-dxVwGQ40.js";import{g as o}from"./index-35H_NU9g.js";import{f as c,c as x}from"./calender-6jrPqTjm.js";const i="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Icon/life'%3e%3cpath%20id='Vector'%20d='M6%202C5.46957%202%204.96086%202.21071%204.58579%202.58579C4.21071%202.96086%204%203.46957%204%204V16C4%2016.5304%204.21071%2017.0391%204.58579%2017.4142C4.96086%2017.7893%205.46957%2018%206%2018H14C14.5304%2018%2015.0391%2017.7893%2015.4142%2017.4142C15.7893%2017.0391%2016%2016.5304%2016%2016V7.414C15.9996%207.01631%2015.8414%206.63503%2015.56%206.354L11.646%202.439C11.3648%202.15798%2010.9835%202.00008%2010.586%202H6ZM5%204C5%203.73478%205.10536%203.48043%205.29289%203.29289C5.48043%203.10536%205.73478%203%206%203H10V6.5C10%206.89782%2010.158%207.27936%2010.4393%207.56066C10.7206%207.84196%2011.1022%208%2011.5%208H15V16C15%2016.2652%2014.8946%2016.5196%2014.7071%2016.7071C14.5196%2016.8946%2014.2652%2017%2014%2017H6C5.73478%2017%205.48043%2016.8946%205.29289%2016.7071C5.10536%2016.5196%205%2016.2652%205%2016V4ZM14.793%207H11.5C11.3674%207%2011.2402%206.94732%2011.1464%206.85355C11.0527%206.75979%2011%206.63261%2011%206.5V3.207L14.793%207Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e",r=s(".subjectMenu"),a=s(".subject-menu-container"),l=s(".board-closedSubjectMenu-button"),f=new u("https://popcorns.pockethost.io");async function h(){(await f.collection("community").getList(1,50,{expand:"SR_location"})).items.forEach(e=>{console.log(e);const g=`
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
              <img src="${c}" alt="참여인원 수" />
              <span class="group-hover:text-background board-people ">  ${e.age}  </span>
            </div>
            <div class="my-1 flex gap-1">
              <img src="${x}" alt="날짜" />
              <span class="group-hover:text-background board-when"> ${v(e.date)}</span>
              <span class="group-hover:text-background board-time">${e.time} </span>
            </div>
            <div class="my-1">
              <span class="group-hover:text-background board-location">  ${e.expand.SR_location.locationSecond}</span>
              <span class="group-hover:text-background">·</span>
              <span class="group-hover:text-background board-writeTime"> ${m(e.created)} </span>
            </div>
            </a>
          </div>
          <div class="col-end-4 self-center">
            <img
              class="board-thumnail h-[60px] w-[60px]"
              src="${b(e)}"
              alt="게시물 미리보기 사진"
              onerror="this.style.display='none';"
            />
          </div>
          <div class="group-hover:text-background gap-1 items-center col-end-4 self-end justify-end flex">
            <img src="${c}" alt="참가 인원수" />
            <span class="board-joinPeople">${e.headcount}/10명</span>
          </div> 
          
              </div>
  `;n(".template",g)});const p=`
<div class="p-3 flex justify-between">
<div class="flex items-center gap-2">
  <img class="h-[34px] w-[34px]" src="${i}" alt="" />
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
  <img class="h-[34px] w-[34px]" src="${i}" alt="" />
  <strong class="board-subject-name no-wrap truncate">localStorage 아직</strong>
</div>
<div
  class="board-participating py-1 text-secondary rounded-2xl px-5 border bg-bluegray-100 no-wrap"
>
  참여중
</div>
</div>

`;n(".templateSubjectContainer",p),o.from(".board-container",{y:30,opacity:0,stagger:.1})}function d(){const t=this.classList.toggle("click");if(this.className===l.className){o.to(a,{y:"100%",ease:"power2.out",duration:.5}),r.classList.remove("click");return}if(t){o.to(a,{y:0,ease:"power2.out",duration:.5});return}o.to(a,{y:"100%",ease:"power2.out",duration:.5})}function y(t){t.target.closest(".subject-menu-container")||t.target.closest(".subjectMenu")||(o.to(a,{y:"100%",ease:"power2.out",duration:.5}),r.classList.remove("click"))}h();r.addEventListener("click",d);l.addEventListener("click",d);document.addEventListener("click",y);

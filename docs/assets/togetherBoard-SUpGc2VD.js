import"./tailwind-ouJN7DSI.js";import{g as c}from"./index-35H_NU9g.js";import{g as a,a as x,C as b}from"./delay-g6vF19wW.js";import{i as d}from"./insert-yGrdL5nD.js";import{g as p}from"./getPbImageURL-99Z79ldm.js";import{t as g}from"./timeAgo-WbyvHha8.js";import{f as u}from"./formattedDate-dxVwGQ40.js";import{f as h,c as m}from"./calender-6jrPqTjm.js";const r=a(".togetherBoard-write-off"),f=a(".togetherBoard-write-on"),i=a(".togetherBoard-plus-menu"),k=a(".write-button"),w=x(".togetherBoard"),v=new b("https://popcorns.pockethost.io"),$=new a(".backButton");async function y(o){if(o){B(o);return}const s=(await v.collection("community").getList(1,50,{expand:"SR_location",sort:"-created"})).items;console.log(s),s.forEach(e=>{const n=e.recruiting===""?"모집중":e.recruiting,l=`
      <div class="group hover:bg-tertiary board-container" >
        <a href="/src/pages/boardContent/index.html#${e.id}">
          <h1 class="hidden">게시판 글 목록</h1>
          <div class="text-sm border-t-[1px] p-3">
            <div>
              <div class="group-hover:text-background text-bluegray-600 my-1">
                <span class="group-hover:text-Contents-contentPrimary text-secondary">${n}</span>
                <span>·</span>
                <span>${e.category}</span>
                <span>·</span>
                <span>${e.meetingLocation}</span>
              </div>
              <strong class="togetherBoard-title my-1 text-base whitespace-nowrap text-ellipsis overflow-hidden text-Contents-contentPrimary">
                ${e.title}
              </strong>
              <div class="my-2 px-1">
                <div class="flex ">
                  <img src="${h}" alt="참여인원 수" />
                  <span class="togtherBoard-who">${e.age}, ${e.gender}</span>
                </div>
                <div class="mt-1 flex">
                  <img src="${m}" alt="날짜" />
                  <span>${u(e.date)},</span>
                  <span class="togtherBoard-time">${e.time}</span>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex gap-[0.1875rem] items-center">

              <div
              class="inline-block border w-5 h-5 rounded-full bg-Contents-contentSecondary"
            >
              <img
                src="${p(e.expand.SR_location,"avatar")}"
                class="togetherBoard-profile w-full h-full rounded-7xl object-cover"
                alt="프로필"
              />
            </div>
                <span class="group-hover:text-background  text-Contents-contentSecondary">${e.headcount}/10명</span>
              </div>
              <span class="group-hover:text-background togtherBoard-timeBefore px-2 text-bluegray-400">${g(e.created)}</span>
            </div>
          </div>
        </a>
      </div>
    `;d(".template",l)}),c.from(".board-container",{y:30,opacity:0,stagger:.1})}async function B(o){for(const t of o.items){const s=t.recruiting===""?"모집중":t.recruiting,e=`
  <div class="group hover:bg-tertiary board-container" >
    <a href="/src/pages/boardContent/index.html#${t.id}">
      <h1 class="hidden">게시판 글 목록</h1>
      <div class=" text-sm border-t-[1px] p-3">
        <div>
          <div class="group-hover:text-background text-bluegray-400 my-1">
            <span class="group-hover:text-Contents-contentPrimary text-secondary">${s}</span>
            <span>·</span>
            <span>${t.category}</span>
            <span>·</span>
            <span>${t.meetingLocation}</span>
          </div>
          <strong class="togetherBoard-title my-1 text-base whitespace-nowrap text-ellipsis overflow-hidden text-Contents-contentPrimary">
            ${t.title}
          </strong>
          <div class="my-2 px-1">
            <div class="flex">
              <img src="${h}" alt="참여인원 수" />
              <span class="togtherBoard-who">${t.age}, ${t.gender}</span>
            </div>
            <div class="mt-1 flex">
              <img src="${m}" alt="날짜" />
              <span>${u(t.date)},</span>
              <span class="togtherBoard-time">${t.time}</span>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex gap-[0.1875rem] items-center">

          
          <div
          class="inline-block border w-5 h-5 rounded-full bg-Contents-contentSecondary"
        >
          <img
            src="${p(t.expand.SR_location,"avatar")}"
            class="togetherBoard-profile w-full h-full rounded-7xl object-cover"
            alt="프로필"
          />
        </div>
            <span class="group-hover:text-background text-Contents-contentSecondary">${t.headcount}/10명</span>
          </div>
          <span class="group-hover:text-background togtherBoard-timeBefore px-2 text-bluegray-400">${g(t.created)}</span>
        </div>
      </div>
    </a>
  </div>
`,n=document.querySelector(".template");for(;n.firstChild;)n.removeChild(n.firstChild);setTimeout(()=>{d(".template",e)},1e3)}c.from(".board-container",{y:30,opacity:0,stagger:.1})}function C(){window.history.back()}function L(){window.location.href="/src/pages/writeBoard/index.html"}function S(){r.style.display="none",f.style.display="block",E()}function E(){i.style.display="block",c.from(i,{y:30,opacity:0,stagger:.1})}function R(o){!r.contains(o.target)&&!i.contains(o.target)&&(r.style.display="block",f.style.display="none",i.style.display="none")}function T(){const o=Array.from(document.getElementsByClassName("isClicked")),t=this.classList.toggle("isClicked"),s=o.indexOf(this);t?(s===-1&&o.push(this),Array.from(this.children).forEach(e=>{e.classList.add("text-secondary"),e.classList.add("border-Blue-500")})):(s!==-1&&o.splice(s,1),Array.from(this.children).forEach(e=>{e.classList.remove("text-secondary"),e.classList.remove("border-Blue-500")})),P(o)}async function P(o){let t="",s=!1;for(const n of o){switch(n.querySelector(".togetherTitle").textContent){case"프로젝트":t+='category = "프로젝트"';break;case"스터디":t+='category = "스터디"';break;case"오프라인":t+='category = "오프라인"';break;case"공모전":t+='category = "공모전"';break;case"전체":s=!0;break}t!==""&&!s&&(t+=" || ")}t.endsWith(" || ")&&(t=t.slice(0,-4));const e=await v.collection("community").getList(1,50,{filter:t,expand:"SR_location",sort:"-created"});console.log(e),y(e)}w.forEach(o=>{o.addEventListener("click",T)});y();r.addEventListener("click",S);k.addEventListener("click",L);document.addEventListener("click",R);$.addEventListener("click",C);

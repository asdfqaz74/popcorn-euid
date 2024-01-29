import"./tailwind-zZkDsczm.js";import{g as l}from"./index-35H_NU9g.js";import{g as a,a as x,C as b}from"./delay-g6vF19wW.js";import{i as d}from"./insert-yGrdL5nD.js";import{g as p}from"./getPbImageURL-99Z79ldm.js";import{t as g}from"./timeAgo-WbyvHha8.js";import{f as h}from"./formattedDate-dxVwGQ40.js";import{f as u,c as m}from"./calender-6jrPqTjm.js";const i=a(".togetherBoard-write-off"),f=a(".togetherBoard-write-on"),c=a(".togetherBoard-plus-menu"),k=a(".write-button"),w=x(".togetherBoard"),v=new b("https://popcorns.pockethost.io"),C=new a(".backButton");async function y(o){if(o){$(o);return}(await v.collection("community").getList(1,50,{expand:"SR_location",sort:"-created"})).items.forEach(e=>{const s=e.recruiting===""?"모집중":e.recruiting,n=`
      <div class="group hover:bg-tertiary board-container" >
        <a href="/src/pages/boardContent/index.html#${e.id}">
          <h1 class="hidden">게시판 글 목록</h1>
          <div class="text-sm border-t-[1px] p-3">
            <div>
              <div class="group-hover:text-background text-bluegray-600 my-1">
                <span class="group-hover:text-Contents-contentPrimary text-secondary">${s}</span>
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
                  <img src="${u}" alt="참여인원 수" />
                  <span class="togtherBoard-who">${e.age}, ${e.gender}</span>
                </div>
                <div class="mt-1 flex text-Contents-contentPrimary text-base">
                  <img src="${m}" alt="날짜" />
                  <span>${h(e.date)},</span>
                  <span class="togtherBoard-time  ">${e.time}</span>
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
    `;d(".template",n)}),l.from(".board-container",{y:30,opacity:0,stagger:.1})}async function $(o){for(const t of o.items){const r=t.recruiting===""?"모집중":t.recruiting,e=`
  <div class="group hover:bg-tertiary board-container" >
    <a href="/src/pages/boardContent/index.html#${t.id}">
      <h1 class="hidden">게시판 글 목록</h1>
      <div class=" text-sm border-t-[1px] p-3">
        <div>
          <div class="group-hover:text-background text-bluegray-400 my-1">
            <span class="group-hover:text-Contents-contentPrimary text-secondary">${r}</span>
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
              <img src="${u}" alt="참여인원 수" />
              <span class="togtherBoard-who">${t.age}, ${t.gender}</span>
            </div>
            <div class="mt-1 flex ">
              <img src="${m}" alt="날짜" />
              <span>${h(t.date)},</span>
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
`,s=document.querySelector(".template");for(;s.firstChild;)s.removeChild(s.firstChild);setTimeout(()=>{d(".template",e)},1e3)}l.from(".board-container",{y:30,opacity:0,stagger:.1})}function B(){window.history.back()}function L(){window.location.href="/src/pages/writeBoard/index.html"}function S(){i.style.display="none",f.style.display="block",E()}function E(){c.style.display="block",l.from(c,{y:30,opacity:0,stagger:.1})}function R(o){!i.contains(o.target)&&!c.contains(o.target)&&(i.style.display="block",f.style.display="none",c.style.display="none")}function T(){const o=document.querySelector(".togetherCategoryNav");Array.from(this.classList).includes("isClicked")?Array.from(o.children).forEach(t=>{t.classList.remove("isClicked"),Array.from(t.children).forEach(r=>{r.classList.remove("text-secondary"),r.classList.remove("border-Blue-500")})}):(Array.from(o.children).forEach(t=>{t.classList.remove("isClicked"),Array.from(t.children).forEach(r=>{r.classList.remove("text-secondary"),r.classList.remove("border-Blue-500")})}),this.classList.add("isClicked"),Array.from(this.children).forEach(t=>{t.classList.add("text-secondary"),t.classList.add("border-Blue-500")})),A(this)}async function A(o){let t="",r=!1;switch(o.querySelector(".togetherTitle").textContent.trim()){case"프로젝트":t+='category = "프로젝트"';break;case"스터디":t+='category = "스터디"';break;case"오프라인":t+='category = "오프라인"';break;case"공모전":t+='category = "공모전"';break;case"전체":r=!0;break}t!==""&&!r&&(t+=" || "),t.endsWith(" || ")&&(t=t.slice(0,-4));const n=await v.collection("community").getList(1,50,{filter:t,expand:"SR_location",sort:"-created"});console.log(n),y(n)}w.forEach(o=>{o.addEventListener("click",T)});y();i.addEventListener("click",S);k.addEventListener("click",L);document.addEventListener("click",R);C.addEventListener("click",B);

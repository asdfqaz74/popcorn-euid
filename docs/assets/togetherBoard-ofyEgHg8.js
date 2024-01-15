import"./tailwind-A-Exv5E6.js";import{g as c}from"./index-35H_NU9g.js";import{g as i,a as f,C as v}from"./delay-g6vF19wW.js";import{i as d}from"./insert-yGrdL5nD.js";import{g as y}from"./getPbImageURL-99Z79ldm.js";import{t as p}from"./timeAgo-WbyvHha8.js";import{f as g}from"./formattedDate-dxVwGQ40.js";const n=i(".togetherBoard-write-off"),m=i(".togetherBoard-write-on"),r=i(".togetherBoard-plus-menu"),x=i(".write-button"),b=f(".togetherBoard"),u=new v("https://popcorns.pockethost.io");async function h(s){const a=(await u.collection("community").getList(1,50,{expand:"SR_location"})).items;if(s){w(s);return}a.forEach(t=>{const o=t.recruiting===""?"모집중":t.recruiting,l=`
      <div class="board-container group hover:text-background hover:bg-tertiary" >
        <a href="/src/pages/boardContent/index.html#${t.id}">
          <h1 class="hidden">게시판 글 목록</h1>
          <div class="text-sm border-t-[1px] p-3">
            <div>
              <div class="group-hover:text-background text-bluegray-600 my-1">
                <span class="group-hover:text-background text-secondary">${o}</span>
                <span>·</span>
                <span>${t.category}</span>
                <span>·</span>
                <span>${t.meetingLocation}</span>
              </div>
              <strong class="togetherBoard-title my-1 text-base whitespace-nowrap text-ellipsis overflow-hidden text-Contents-contentPrimary">
                ${t.title}
              </strong>
              <div class="my-2 px-1">
                <div class="flex ">
                  <img src="/public/images/fullpeople.svg" alt="참여인원 수" />
                  <span class="togtherBoard-who">${t.age}, ${t.gender}</span>
                </div>
                <div class="mt-1 flex">
                  <img src="/public/images/calender.svg" alt="날짜" />
                  <span>${g(t.date)},</span>
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
                src="${y(t.expand.SR_location,"avatar")}"
                class="togetherBoard-profile w-full h-full rounded-7xl object-cover"
                alt="프로필"
              />
            </div>
                <span class="group-hover:text-background text-Contents-contentSecondary">${t.headcount}/10명</span>
              </div>
              <span class="group-hover:text-background togtherBoard-timeBefore px-2 text-bluegray-400">${p(t.created)}</span>
            </div>
          </div>
        </a>
      </div>
    `;d(".template",l)}),c.from(".board-container",{y:30,opacity:0,stagger:.1})}async function w(s){for(const e of s.items){const a=e.recruiting===""?"모집중":e.recruiting,t=`
  <div class="board-container" >
    <a href="/src/pages/boardContent/index.html#${e.id}">
      <h1 class="hidden">게시판 글 목록</h1>
      <div class="text-sm border-t-[1px] p-3">
        <div>
          <div class="text-bluegray-400 my-1">
            <span class="text-secondary">${a}</span>
            <span>·</span>
            <span>${e.category}</span>
            <span>·</span>
            <span>${e.meetingLocation}</span>
          </div>
          <strong class="togetherBoard-title my-1 text-base whitespace-nowrap text-ellipsis overflow-hidden text-Contents-contentPrimary">
            ${e.title}
          </strong>
          <div class="my-2 px-1">
            <div class="flex">
              <img src="/public/images/fullpeople.svg" alt="참여인원 수" />
              <span class="togtherBoard-who">${e.age}, ${e.gender}</span>
            </div>
            <div class="mt-1 flex">
              <img src="/public/images/calender.svg" alt="날짜" />
              <span>${g(e.date)},</span>
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
            src=""
            class="togetherBoard-profile w-full h-full rounded-7xl object-cover"
            alt="프로필"
          />
        </div>
            <span class="text-Contents-contentSecondary">${e.headcount}/10명</span>
          </div>
          <span class="togtherBoard-timeBefore px-2 text-bluegray-400">${p(e.created)}</span>
        </div>
      </div>
    </a>
  </div>
`,o=document.querySelector(".template");for(;o.firstChild;)o.removeChild(o.firstChild);setTimeout(()=>{d(".template",t)},1e3)}c.from(".board-container",{y:30,opacity:0,stagger:.1})}function k(){window.location.href="/src/pages/writeBoard/index.html"}function B(){n.style.display="none",m.style.display="block",C()}function C(){r.style.display="block",c.from(r,{y:30,opacity:0,stagger:.1})}function $(s){!n.contains(s.target)&&!r.contains(s.target)&&(n.style.display="block",m.style.display="none",r.style.display="none")}function L(){const s=Array.from(document.getElementsByClassName("isClicked")),e=this.classList.toggle("isClicked"),a=s.indexOf(this);e?(a===-1&&s.push(this),Array.from(this.children).forEach(t=>{t.classList.add("text-secondary"),t.classList.add("border-Blue-500")})):(a!==-1&&s.splice(a,1),Array.from(this.children).forEach(t=>{t.classList.remove("text-secondary"),t.classList.remove("border-Blue-500")})),E(s)}async function E(s){let e="";for(const t of s){switch(t.querySelector(".togetherTitle").textContent){case"프로젝트":e+='category = "프로젝트"';break;case"스터디":e+='category = "스터디"';break;case"오프라인":e+='category = "오프라인"';break;case"공모전":e+='category = "공모전"';break}e!==""&&(e+=" || ")}e.endsWith(" || ")&&(e=e.slice(0,-4));const a=await u.collection("community").getList(1,50,{filter:e});h(a)}b.forEach(s=>{s.addEventListener("click",L)});h();n.addEventListener("click",B);x.addEventListener("click",k);document.addEventListener("click",$);

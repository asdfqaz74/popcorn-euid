import"./tailwind-xU_d6Hf1.js";import{g as c}from"./index-35H_NU9g.js";import{g as o,a as x,C as b}from"./delay-g6vF19wW.js";import{i as d}from"./insert-yGrdL5nD.js";import{g as p}from"./getPbImageURL-99Z79ldm.js";import{t as g}from"./timeAgo-WbyvHha8.js";import{f as m}from"./formattedDate-dxVwGQ40.js";import{f,c as h}from"./calender-6jrPqTjm.js";const i=o(".togetherBoard-write-off"),u=o(".togetherBoard-write-on"),r=o(".togetherBoard-plus-menu"),w=o(".write-button"),$=x(".togetherBoard"),y=new b("https://popcorns.pockethost.io"),B=new o(".backButton");async function v(s){const a=(await y.collection("community").getList(1,50,{expand:"SR_location"})).items;if(s){k(s);return}console.log(a),a.forEach(e=>{const n=e.recruiting===""?"모집중":e.recruiting,l=`
      <div class="board-container" >
        <a href="/src/pages/boardContent/index.html#${e.id}">
          <h1 class="hidden">게시판 글 목록</h1>
          <div class="text-sm border-t-[1px] p-3">
            <div>
              <div class=" text-bluegray-600 my-1">
                <span class=" text-secondary">${n}</span>
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
                  <img src="${f}" alt="참여인원 수" />
                  <span class="togtherBoard-who">${e.age}, ${e.gender}</span>
                </div>
                <div class="mt-1 flex">
                  <img src="${h}" alt="날짜" />
                  <span>${m(e.date)},</span>
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
                <span class=" text-Contents-contentSecondary">${e.headcount}/10명</span>
              </div>
              <span class=" togtherBoard-timeBefore px-2 text-bluegray-400">${g(e.created)}</span>
            </div>
          </div>
        </a>
      </div>
    `;d(".template",l)}),c.from(".board-container",{y:30,opacity:0,stagger:.1})}async function k(s){for(const t of s.items){const a=t.recruiting===""?"모집중":t.recruiting,e=`
  <div class="board-container" >
    <a href="/src/pages/boardContent/index.html#${t.id}">
      <h1 class="hidden">게시판 글 목록</h1>
      <div class="text-sm border-t-[1px] p-3">
        <div>
          <div class="text-bluegray-400 my-1">
            <span class="text-secondary">${a}</span>
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
              <img src="${f}" alt="참여인원 수" />
              <span class="togtherBoard-who">${t.age}, ${t.gender}</span>
            </div>
            <div class="mt-1 flex">
              <img src="${h}" alt="날짜" />
              <span>${m(t.date)},</span>
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
            <span class="text-Contents-contentSecondary">${t.headcount}/10명</span>
          </div>
          <span class="togtherBoard-timeBefore px-2 text-bluegray-400">${g(t.created)}</span>
        </div>
      </div>
    </a>
  </div>
`,n=document.querySelector(".template");for(;n.firstChild;)n.removeChild(n.firstChild);setTimeout(()=>{d(".template",e)},1e3)}c.from(".board-container",{y:30,opacity:0,stagger:.1})}function C(){window.history.back()}function L(){window.location.href="/src/pages/writeBoard/index.html"}function S(){i.style.display="none",u.style.display="block",E()}function E(){r.style.display="block",c.from(r,{y:30,opacity:0,stagger:.1})}function T(s){!i.contains(s.target)&&!r.contains(s.target)&&(i.style.display="block",u.style.display="none",r.style.display="none")}function R(){const s=Array.from(document.getElementsByClassName("isClicked")),t=this.classList.toggle("isClicked"),a=s.indexOf(this);t?(a===-1&&s.push(this),Array.from(this.children).forEach(e=>{e.classList.add("text-secondary"),e.classList.add("border-Blue-500")})):(a!==-1&&s.splice(a,1),Array.from(this.children).forEach(e=>{e.classList.remove("text-secondary"),e.classList.remove("border-Blue-500")})),j(s)}async function j(s){let t="",a=!1;for(const n of s){switch(n.querySelector(".togetherTitle").textContent){case"프로젝트":t+='category = "프로젝트"';break;case"스터디":t+='category = "스터디"';break;case"오프라인":t+='category = "오프라인"';break;case"공모전":t+='category = "공모전"';break;case"전체":a=!0;break}t!==""&&!a&&(t+=" || ")}t.endsWith(" || ")&&(t=t.slice(0,-4));const e=await y.collection("community").getList(1,50,{filter:t});v(e)}$.forEach(s=>{s.addEventListener("click",R)});v();i.addEventListener("click",S);w.addEventListener("click",L);document.addEventListener("click",T);B.addEventListener("click",C);

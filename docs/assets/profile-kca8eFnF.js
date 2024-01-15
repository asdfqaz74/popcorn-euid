import"./tailwind-zBIZP7u3.js";import{a as g}from"./css-LUmow4Y_.js";import{g as r,a as c}from"./delay-g6vF19wW.js";import{i as s}from"./insert-yGrdL5nD.js";import{g as w,d as x,s as L}from"./storage-eNv634Ip.js";import{a as m,r as u}from"./rendering-oARfkKZz.js";import{g as b}from"./getPbImageURL-99Z79ldm.js";import{t as P}from"./timeAgo-WbyvHha8.js";import{p as l}from"./pocketbase-UOLpUAtS.js";const C=r(".profile-button-close"),k=c(".profile-listBox-button"),h=r(".profile-button-more"),$=r(".profile-temperatureBar-container"),E=r(".profile-button-logOut");let i=0,n=0;function B(){history.back()}C.addEventListener("click",B);function S(){const t=this.nextElementSibling,e=this.querySelector("button");t.classList.toggle("hidden"),e.classList.toggle("rotate-90")}k.forEach(t=>{t.addEventListener("click",S)});const A=await l.collection("users").getFullList(),d=await w("userId");let p=A.find(t=>t.id===d);m(".rendering-photo",p);u(".rendering-box",p);function N(){Array.from(c(".profile-textPrivacy")).forEach(e=>{let o=`${e.textContent.slice(0,4)}***`;e.textContent=o})}N();const F=await l.collection("likes").getFullList({expand:"product"}),v=await l.collection("products").getFullList({expand:"user"});async function I(){F.forEach(a=>{a.expand&&d===a.expand.product.userPost&&i++});let t=36.5+i*.5;const e=`
  <div class="flex">
            <span
              class="profile-temperture-start text-sm ml-[25%] text-Contents-contentSecondary after:bg-temperatureAngle after:w-[0.625rem] after:h-[0.375rem] after:inline-block after:absolute after:bottom-0 after:left-[50%] after:bg-no-repeat relative"
            >
              첫 온도 36.5
            </span>
            <span
              class="profile-temperature-now text-secondary text-base font-semibold ml-auto inline-block"
              >${t} 🥰</span
            >
          </div>
          <div
            class="profile-temperature-box w-full h-2 bg-Contents-contentSecondary rounded-full overflow-hidden mt-1"
          >
            <div
              class="profile-temperture-bar h-full  bg-primary"
            ></div>
          </div>
          `;s($,e);const o=r(".profile-temperture-bar");o.style.width=`${t}%`}I();async function M(){if(v.forEach(t=>{d===t.userPost&&n++}),n!==0){const e=`
    <p class=" text-base">받은 좋아요 ${Math.floor(i/n*100)}%</p>
    <p class=" text-base text-Contents-contentSecondary">
      ${n}개 중 ${i}명이 만족
    </p>
    `;s(".profile-like-Box",e)}else{const t=`
    <p class=" text-base">받은 좋아요가 없어요...😢</p>
    <p class=" text-base text-Contents-contentSecondary">
      ${n}개 중 ${i}명이 만족
    </p>
    `;s(".profile-like-Box",t)}}M();const O=await l.collection("badges").getFullList({expand:"user"});function H(){const t=O.filter(e=>e.user===p.id);t.forEach(e=>{const o=`
      <div class="w-10 h-10 rounded-full bg-secondary">
      <img src="${b(e)}" alt="${e.alt}" />
      </div>
    `;s(".profile-listBox-hiddenArea",o)}),s(".badge-count",`${t.length}`)}H();async function R(){const t=[];v.forEach(e=>{d===e.userPost&&t.push(e)}),s(".profile-myProductList",`${n}`),t.forEach(e=>{const o=`
                <a href="/src/pages/exchangeBoard/index.html#${e.id}" class="flex gap-2 items-center relative">
                  <div class="w-12 h-12  rounded-lg overflow-hidden">
                    <img
                    class="w-full h-full object-center"
                    src="${b(e,"images")}"
                    alt="${e.alt}"
                    />
                  </div>
                  <p class="font-semibold text-base">${e.title}</p>
                  <span
                    class="profile-myProduct-state text-sm bg-gray-200 px-1.5 py-0.5 rounded-full absolute right-0"
                    >${e.state}</span
                  >
                </a>
    `;s(".profile-myPostList-container",o)}),n==0&&s(".profile-myPostList-container",`
    <a href="/src/pages/exchangePost/ " >
    <p class="text-base text-secondary ">상품을 등록해주세요</p>
    </a>
    `)}R();function T(){c(".profile-myProduct-state").forEach(e=>{e.textContent==="done"?(e.textContent="거래완료",e.classList.add("bg-secondary","text-background")):e.textContent==="reservation"?(e.textContent="예약중",e.classList.add("bg-bluelight-300")):(e.textContent="",e.classList.remove("bg-gray-200"))})}T();const j=await l.collection("reviews").getFullList({expand:"user, post"});let f=0;function q(){j.forEach(t=>{const e=t.expand.user,o=t,a=t.expand.post,y=r(".profile-review-link");Array.from(c(".reviewer-box")),a.userPost===p.id&&(f++,m(".reviewer-photo",e),u(".reviewer-box",e),u(".review-box",o),y.href=`/src/pages/exchangeBoard/index.html#${a.id}`,r(".review-time").textContent=P(o.created))}),console.log(f),f==0&&(g(".review-textBox","hidden"),g(h,"hidden"),r(".review-box-content").textContent="남겨진 후기가 없어요")}q();h.addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("hidden")});async function U(){x("userId"),x("phoneNumber"),L("auth",{isAuth:!1}),window.location.href="/src/pages/"}E.addEventListener("click",U);

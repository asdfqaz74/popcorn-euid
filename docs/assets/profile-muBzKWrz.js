import"./tailwind-WJoQXHVu.js";import{a as g}from"./css-LUmow4Y_.js";import{g as r,a as l}from"./delay-g6vF19wW.js";import{i as n}from"./insert-yGrdL5nD.js";import{g as y,d as x,s as w}from"./storage-eNv634Ip.js";import{a as m,r as f}from"./rendering-oARfkKZz.js";import{g as L}from"./getPbImageURL-99Z79ldm.js";import{t as P}from"./timeAgo-WbyvHha8.js";import{p as c}from"./pocketbase-UOLpUAtS.js";const C=r(".profile-button-close"),k=l(".profile-listBox-button"),b=r(".profile-button-more"),$=r(".profile-temperatureBar-container"),E=r(".profile-button-logOut");let i=0,s=0;function B(){history.back()}C.addEventListener("click",B);function S(){const t=this.nextElementSibling,e=this.querySelector("button");t.classList.toggle("hidden"),e.classList.toggle("rotate-90")}k.forEach(t=>{t.addEventListener("click",S)});const N=await c.collection("users").getFullList(),d=await y("userId");let u=N.find(t=>t.id===d);m(".rendering-photo",u);f(".rendering-box",u);function A(){Array.from(l(".profile-textPrivacy")).forEach(e=>{let o=`${e.textContent.slice(0,4)}***`;e.textContent=o})}A();const F=await c.collection("likes").getFullList({expand:"product"}),h=await c.collection("products").getFullList({expand:"user"});async function I(){F.forEach(a=>{a.expand&&d===a.expand.product.userPost&&i++});let t=36.5+i*.5;const e=`
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
          `;n($,e);const o=r(".profile-temperture-bar");o.style.width=`${t}%`}I();async function M(){if(h.forEach(t=>{d===t.userPost&&s++}),s!==0){const e=`
    <p class=" text-base">받은 좋아요 ${Math.floor(i/s*100)}%</p>
    <p class=" text-base text-Contents-contentSecondary">
      ${s}개 중 ${i}명이 만족
    </p>
    `;n(".profile-like-Box",e)}else{const t=`
    <p class=" text-base">받은 좋아요가 없어요...😢</p>
    <p class=" text-base text-Contents-contentSecondary">
      ${s}개 중 ${i}명이 만족
    </p>
    `;n(".profile-like-Box",t)}}M();async function O(){const t=[];h.forEach(e=>{d===e.userPost&&t.push(e)}),n(".profile-myProductList",`판매상품${s}개`),t.forEach(e=>{const o=`
                <a href="/src/pages/exchangeBoard/index.html#${e.id}" class="flex gap-2 items-center relative">
                  <div class="w-12 h-12  rounded-lg overflow-hidden">
                    <img
                    class="w-full h-full object-center"
                    src="${L(e,"images")}"
                    alt="${e.alt}"
                    />
                  </div>
                  <p class="font-semibold text-base">${e.title}</p>
                  <span
                    class="profile-myProduct-state text-sm bg-gray-200 px-1.5 py-0.5 rounded-full absolute right-0"
                    >${e.state}</span
                  >
                </a>
    `;n(".profile-myPostList-container",o)}),s==0&&n(".profile-myPostList-container",`
    <a href="/src/pages/exchangePost/ " >
    <p class="text-base text-secondary ">상품을 등록해주세요</p>
    </a>
    `)}O();function H(){l(".profile-myProduct-state").forEach(e=>{e.textContent==="done"?(e.textContent="거래완료",e.classList.add("bg-secondary","text-background")):e.textContent==="reservation"?(e.textContent="예약중",e.classList.add("bg-bluelight-300")):(e.textContent="",e.classList.remove("bg-gray-200"))})}H();const R=await c.collection("reviews").getFullList({expand:"user, post"});let p=0;function T(){R.forEach(t=>{const e=t.expand.user,o=t,a=t.expand.post,v=r(".profile-review-link");Array.from(l(".reviewer-box")),a.userPost===u.id&&(p++,m(".reviewer-photo",e),f(".reviewer-box",e),f(".review-box",o),v.href=`/src/pages/exchangeBoard/index.html#${a.id}`,r(".review-time").textContent=P(o.created))}),console.log(p),p==0&&(g(".review-textBox","hidden"),g(b,"hidden"),r(".review-box-content").textContent="남겨진 후기가 없어요")}T();b.addEventListener("click",t=>{t.currentTarget.nextElementSibling.classList.toggle("hidden")});async function j(){x("userId"),x("phoneNumber"),w("auth",{isAuth:!1}),window.location.href="/src/pages/"}E.addEventListener("click",j);

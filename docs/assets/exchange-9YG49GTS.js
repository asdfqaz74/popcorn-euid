<<<<<<<< HEAD:docs/assets/exchange-8yTAOfyU.js
import"./tailwind-xU_d6Hf1.js";import{g as c}from"./delay-g6vF19wW.js";import{a as u,i as m}from"./insert-yGrdL5nD.js";import{c as x}from"./comma-f4do0chS.js";import{g as p}from"./getPbImageURL-99Z79ldm.js";import{t as f}from"./timeAgo-WbyvHha8.js";import{r as b}from"./removeChild-y_437bHv.js";import{g as i}from"./index-35H_NU9g.js";import{p as l}from"./pocketbase-UOLpUAtS.js";const v="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.1668%2015.1644H15.1668V22.1644H12.8335V15.1644H5.8335V12.8311H12.8335V5.83105H15.1668V12.8311H22.1668V15.1644Z'%20fill='white'/%3e%3c/svg%3e",w="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.1666%2015.1644H15.1666V22.1644H12.8333V15.1644H5.83325V12.8311H12.8333V5.83105H15.1666V12.8311H22.1666V15.1644Z'%20fill='black'/%3e%3c/svg%3e",L=c(".exchange-button"),n=c(".exchange-button-ul");function k(t){const e=t.currentTarget,a=e.querySelector(".exchange-button-img"),s=a.src,o=v,r=w;s.includes(o)?a.src=r:a.src=o,e.classList.contains("exchange-button-no")?(i.to(e,{background:"rgb(255 255 255)",duration:.3}),e.classList.remove("exchange-button-no"),e.classList.add("exchange-button-active"),i.from(".exchange-button-ul > ul > li",{y:30,opacity:0,stagger:{each:.05,from:"end"}}),n.classList.remove("hidden"),n.classList.add("block")):(n.classList.remove("block"),n.classList.add("hidden"),i.to(e,{background:"rgb(55 63 103)",duration:.3}),e.classList.remove("exchange-button-active"),e.classList.add("exchange-button-no"))}L.addEventListener("click",k);const H=c(".exchange-write");H.addEventListener("click",()=>window.location.href="/src/pages/exchangePost/");async function g(t){let e;t?e=await l.collection("products").getFullList({filter:`type="${t}"`}):e=await l.collection("products").getFullList();const a=await l.collection("likes").getFullList();b("section"),e.forEach(s=>{const o=a.filter(h=>h.product===s.id).length,r=`
========
import"./tailwind-LUp5vfds.js";import{g as c}from"./delay-g6vF19wW.js";import{a as u,i as m}from"./insert-yGrdL5nD.js";import{c as x}from"./comma-f4do0chS.js";import{g as p}from"./getPbImageURL-99Z79ldm.js";import{t as f}from"./timeAgo-WbyvHha8.js";import{r as b}from"./removeChild-y_437bHv.js";import{g as i}from"./index-35H_NU9g.js";import{p as l}from"./pocketbase-UOLpUAtS.js";const v="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.1668%2015.1644H15.1668V22.1644H12.8335V15.1644H5.8335V12.8311H12.8335V5.83105H15.1668V12.8311H22.1668V15.1644Z'%20fill='white'/%3e%3c/svg%3e",w="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.1666%2015.1644H15.1666V22.1644H12.8333V15.1644H5.83325V12.8311H12.8333V5.83105H15.1666V12.8311H22.1666V15.1644Z'%20fill='black'/%3e%3c/svg%3e",L=c(".exchange-button"),n=c(".exchange-button-ul");function k(t){const e=t.currentTarget,a=e.querySelector(".exchange-button-img"),s=a.src,o=v,r=w;s.includes(o)?a.src=r:a.src=o,e.classList.contains("exchange-button-no")?(i.to(e,{background:"rgb(255 255 255)",duration:.3}),e.classList.remove("exchange-button-no"),e.classList.add("exchange-button-active"),i.from(".exchange-button-ul > ul > li",{y:30,opacity:0,stagger:{each:.05,from:"end"}}),n.classList.remove("hidden"),n.classList.add("block")):(n.classList.remove("block"),n.classList.add("hidden"),i.to(e,{background:"rgb(55 63 103)",duration:.3}),e.classList.remove("exchange-button-active"),e.classList.add("exchange-button-no"))}L.addEventListener("click",k);const H=c(".exchange-write");H.addEventListener("click",()=>window.location.href="/src/pages/exchangePost/");async function g(t){let e;t?e=await l.collection("products").getFullList({filter:`type="${t}"`}):e=await l.collection("products").getFullList();const a=await l.collection("likes").getFullList();b("section"),e.forEach(s=>{const o=a.filter(h=>h.product===s.id).length,r=`
>>>>>>>> develop:docs/assets/exchange-9YG49GTS.js
    <div
        class="exchange-board border-t border-Contents-contentSecondary flex items-center py-3 pl-3"
      >
        <div
          class="exchange-img-wrapper relative w-[28.125%] pb-[28.125%] bg-gray-200 rounded-2xl"
        >
          <a href="${`/src/pages/exchangeBoard/index.html#${s.id}`}">
            <img
              src="${p(s,"images")}"
              class="exchange-board-img absolute top-0 left-0 w-full h-full object-cover"
              alt="${s.alt}"
            />
          </a>
        </div>

        <div
          class="exchange-board-contents ml-2 text-base sm:text-xl flex-grow"
        >
          <a href="${`/src/pages/exchangeBoard/index.html#${s.id}`}" class="exchange-board-link"
            >${s.title}</a
          >
          <div class="flex flex-col">
            <div
              class="text-sm text-Contents-contentTertiary font-normal sm:text-lg mb-1"
            >
              <span class="exchange-board-location">마포구 신수동</span>
              <span class="exchange-board-time">ㆍ${f(s.created)}</span>
            </div>
            <div class="mb-2">
              <span
                class="exchange-board-state"
                ></span
              >
              <span
                class="exchange-board-price text-base font-semibold leading-normal sm:text-xl"
                >${x(s.price)}원</span
              >
            </div>
          </div>
          <div
            class="exchange-board-heart flex flex-grow items-center justify-end self-end pr-3"
          >
            <img
              src="/public/images/heart.svg"
              class="w-[0.875rem] h-[0.875rem] sm:w-[1.25rem] sm:h-[1.25rem]"
              alt=""
            />
            <span class="exchange-board-like text-sm sm:text-lg">${o}</span>
          </div>
        </div>
      </div>

  `;u("section",r),y(s.state)}),i.from(".exchange-board",{y:30,opacity:0,stagger:.2})}function y(t){const e=c(".exchange-board-state"),a=t;a==="reservation"?(e.classList.add("exchange-reservation"),m(e,"예약중")):a==="done"&&(e.classList.add("exchange-done"),m(e,"거래 완료"))}const d={headset:!1,keyboard:!1,mouse:!1,computer:!1,etc:!1},V=["headset","keyboard","mouse","computer","etc"];V.forEach(t=>{const e=c(`.exchange-${t}`);e.addEventListener("click",async()=>{d[t]?await g():await g(t),e.classList.toggle("bg-secondary"),d[t]=!d[t]})});g();

import"./tailwind-WJoQXHVu.js";import{g as s,a as r}from"./delay-g6vF19wW.js";import{i as d,r as b}from"./insert-yGrdL5nD.js";import{d as g,s as p}from"./storage-eNv634Ip.js";import"./pocketbase-UOLpUAtS.js";const m=s(".profileDetails-button-close"),v=r(".profileDetails-buttonWrap"),h=r(".profile-button-active"),L=s(".profileDetails-container"),c=r(".profileDtails-agreement-container input"),l=s(".profileDetails-button-submit"),u=s(".profileDetails-checkAll"),f=s(".agree-modal"),D=s(".modal-close"),E=["프론트엔드","백엔드","리액트","풀스택","알고리즘","기초지식","UI디자인","UX디자인","UI/UX","데이터분석","통계분석","시각화"];function k(){history.back()}m.addEventListener("click",k);function j(){this.nextElementSibling.classList.toggle("hidden")}h.forEach(e=>{e.addEventListener("click",j)});let n=!1;function x(){const e=this.childNodes[1],t=this.childNodes[3],o=e.childNodes[1],i=t.childNodes[1];return n?(e.classList.add("profileDetails-button-valid"),o.src="/public/images/passwordDetails.svg",t.classList.remove("profileDetails-button-valid"),i.src=" ",n=!1):(e.classList.remove("profileDetails-button-valid"),o.src=" ",t.classList.add("profileDetails-button-valid"),i.src="/public/images/peoplePublic.svg",n=!0)}v.forEach(e=>{e.addEventListener("click",x)});function A(){let e=0;c.forEach(t=>{t.checked&&e++}),e===4?l.classList.add("profileDetails-buttonAgree-valid"):l.classList.remove("profileDetails-buttonAgree-valid")}c.forEach(e=>{e.addEventListener("change",A)});function y(){u.checked?(c.forEach(e=>{e.checked=!0}),l.classList.add("profileDetails-buttonAgree-valid")):(c.forEach(e=>{e.checked=!1}),l.classList.remove("profileDetails-buttonAgree-valid"))}u.addEventListener("change",y);function B(e){const t=Array.from(l.classList),o=this.closest("form");t.includes("profileDetails-buttonAgree-valid")?(e.preventDefault(),f.showModal()):(o.addEventListener("submit",a=>{a.preventDefault()}),alert("필수항목에 동의 해주셔야 합니다"))}l.addEventListener("click",B);D.addEventListener("click",()=>{f.close()});function C(){E.forEach(e=>{const t=`
              <button
                class="job-category bg-Bluelight-200 text-base px-2 py-0.5 rounded-full"
                value= ${e}
              >
                ${e}
              </button>
    `;d(".profileDetails-jobList-box",t)})}C();async function N(e){let t=Array.from(r(".job-category")),o=Array.from(r(".job-selected"));if(t.includes(e.target)){let a=`
    <button
  class="job-selected bg-secondary text-background text-base px-2 py-0.5 rounded-full bg-[url=] mt-1"
  >
  ${e.target.value}x
  </button>
    `;d(".profileDetails-job-selected",a)}else o.includes(e.target)&&(b(".job-selected"),g("job"));let i=o.map(a=>a.value);console.log(o),p("job",i)}L.addEventListener("click",N);

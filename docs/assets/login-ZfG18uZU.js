import"./tailwind-zZkDsczm.js";import{r as c,t as y,a as B}from"./css-LUmow4Y_.js";import{g as n,a as V}from"./delay-g6vF19wW.js";import{s as f}from"./storage-eNv634Ip.js";import{p}from"./pocketbase-UOLpUAtS.js";const I=n(".button-goBack"),E=n(".button-moveBack"),v=n(".login-container"),C=n(".login-form-before");function A(){history.back()}function x(){v.style.transform="translateX(0%)"}I.addEventListener("click",A);E.addEventListener("click",x);C.addEventListener("submit",e=>{e.preventDefault(),v.style.transform="translateX(-50%)"});const h=document.getElementById("phoneNumber"),s=n(".login-button-verify"),i=document.getElementById("agree"),P=/^010\d{4}\d{4}$/;function S(e){const r=e.target.value,o=P.test(r),t=n(".login-errorMsg");o?(t.style.display="none",c(s,"text-gray-500"),y(s,"signUp-verify-valid"),s.removeAttribute("disabled")):(t.style.display="block",t.textContent="핸드폰 번호를 제대로 입력해주세요",c(s,"signUp-verify-valid"),s.setAttribute("disabled",""))}h.addEventListener("input",S);const w=Math.floor(Math.random()*9e5)+1e5;sessionStorage.setItem("verifyNumber",w);const g=sessionStorage.getItem("verifyNumber");function N(){Array.from(s.classList).includes("signUp-verify-valid")&&alert(g)}async function U(){const e=n(".login-input-phoneNumber").value,t=(await p.collection("users").getFullList("phoneNumber")).map(a=>a.phoneNumber).includes(e);try{if(t){N();const L=JSON.stringify(e);localStorage.setItem("phoneNumber",L)}else alert("등록되지 않은 번호입니다. 회원가입 페이지로 이동합니다! 😃"),window.location.href="/src/pages/signUp/";const a=n(".login-input-after"),k=localStorage.getItem("phoneNumber");a.textContent=JSON.parse(k)}catch{alert("핸드폰번호가 일치하지 않습니다.")}}s.addEventListener("click",U);const M=n(".login-input-verifyNumber"),u=n(".login-errorMsg-second");function F(e){const r=e.target.value;g===r?(u.style.display="none",c(i,"bg-gray-500"),y(i,"signUp-agree-valid")):(u.style.display="block",u.textContent="인증번호를 제대로 입력해주세요",c(i,"signUp-agree-valid"),B(i,"bg-gray-500"))}M.addEventListener("input",F);async function $(){const e=Array.from(i.classList).includes("signUp-agree-valid"),r=await p.collection("users").getFullList();if(e){let o={isAuth:!0},t=r.find(a=>a.phoneNumber===h.value);f("userId",t.id),f("auth",o),alert("로그인 성공! 오늘도 힘차게 달려보아요 💪🏻"),window.location.href="/src/pages/story/"}else alert("인증번호가 잘못되었습니다.")}i.addEventListener("click",$);const l=n(".login-button-Reverify"),D=V(".timer-button");let d=null,m=!1;function J(){const e=n(".target__time"),r=60;m?(clearInterval(d),e.textContent="",b(r,e),N()):b(r,e)}function b(e,r){let o,t;d=setInterval(function(){o=parseInt(e/60,10),t=parseInt(e%60,10),o=o<10?"0"+o:o,t=t<10?"0"+t:t,r.textContent=`${o} : ${t}`,--e<0&&(clearInterval(d),l.classList.add("bg-gray-500"),l.classList.add("text-background"),alert("시간초과! 인증번호를 다시 받아주세요 ⏳"),m=!1)},1e3),m=!0}D.forEach(e=>{e.addEventListener("click",J)});function O(){Array.from(l.classList).includes("bg-gray-500")&&Array.from(l.classList).includes("text-background")&&alert(g)}l.addEventListener("click",O);

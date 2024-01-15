import"./tailwind-75xaDfuL.js";import{g as t,a as v}from"./delay-g6vF19wW.js";import{a as b}from"./insert-vWB_d1l7.js";import{g as y}from"./getPbImageURL-99Z79ldm.js";import{s as x}from"./setDocumentTitle-_OwlDZqT.js";import{p as r}from"./pocketbase-UOLpUAtS.js";x("엔터이듬 / 수정페이지");async function L(){const c=window.location.hash.slice(1),e=await r.collection("products").getOne(c),i=t("#title"),s=t("#price");let a=t("#textField");const d=t(".exchangeUpdate-modify"),p=t(".exchangeUpdate-cancel");i.setAttribute("value",`${e.title}`),s.setAttribute("value",`${e.price}`);let u=e.contents.replace(/<br>/g,`
`);a.value=u;let n=a.value;a.addEventListener("input",function(){n=this.value.replace(/\n/g,"<br>")});let o=null;const l=v(".exchangeUpdate-li button");l.forEach(g=>{g.addEventListener("click",function(){l.forEach(h=>h.closest("li").classList.remove("active","bg-secondary")),this.closest("li").classList.add("active","bg-secondary"),o=this.textContent})});const m=`
  <div class="exchangeUpdate-images w-full">
  <img src="${y(e,"images")}" alt="" class="mx-auto"/>
  </div>
  
  `;function f(){r.collection("products").update(c,{title:i.value,price:s.value,contents:n,state:o}).then(()=>history.back())}b(".exchangeUpdate-container",m),p.addEventListener("click",()=>history.back()),d.addEventListener("click",f)}L();

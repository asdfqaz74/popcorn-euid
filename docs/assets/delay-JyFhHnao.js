function o(e,t=document){if(typeof e!="string")throw new Error("getNode 함수의 인수는 문자 타입 이어야 합니다.");return t.nodeType!==document.DOCUMENT_NODE&&(t=document.querySelector(t)),t.querySelector(e)}function s(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}const l=e=>s(e)==="object",d=e=>s(e)==="number";o(".first");o(".second");const r={shouldReject:!1,timeout:1e3,data:"아싸 성공!",errorMessage:"알 수 없는 오류가 발생했습니다."};function m(e){let t={...r};d(e)&&(t.timeout=e),l(e)&&(t={...r,...e});let{timeout:u,shouldReject:n,errorMessage:i,data:c}=t;return new Promise((a,f)=>{setTimeout(()=>{n?f({message:i}):a(c)},u)})}m(1e3);async function g(e){return e}await g("이슬기나");export{o as g};
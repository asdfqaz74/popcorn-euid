function d(o){const f=new Date(o),t=(new Date-f)/1e3,n=t/60,e=n/60,r=e/24;return t<60?Math.round(t)+"초 전":n<60?Math.round(n)+"분 전":e<24?Math.round(e)+"시간 전":Math.round(r)+"일 전"}export{d as t};

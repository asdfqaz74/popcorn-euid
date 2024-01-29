import"./tailwind-zZkDsczm.js";import{g as n}from"./delay-g6vF19wW.js";import{i as s}from"./insert-yGrdL5nD.js";import{r}from"./removeChild-y_437bHv.js";import{p as l}from"./pocketbase-UOLpUAtS.js";function h(i,c=200){let e;return function(...o){clearTimeout(e),e=setTimeout(()=>{i.apply(this,o)},c)}}const d="data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.3636%203.5C8.90722%203.5%207.48354%203.93187%206.2726%204.74099C5.06167%205.55011%204.11786%206.70015%203.56052%208.04567C3.00319%209.39119%202.85737%2010.8718%203.14149%2012.3002C3.42562%2013.7286%204.12693%2015.0406%205.15675%2016.0704C6.18657%2017.1003%207.49863%2017.8016%208.92703%2018.0857C10.3554%2018.3698%2011.836%2018.224%2013.1815%2017.6667C14.527%2017.1093%2015.6771%2016.1655%2016.4862%2014.9546C17.2953%2013.7437%2017.7272%2012.32%2017.7272%2010.8636C17.7271%208.91069%2016.9512%207.0378%2015.5703%205.65688C14.1894%204.27597%2012.3165%203.50012%2010.3636%203.5Z'%20stroke='black'%20stroke-width='1.25'%20stroke-miterlimit='10'/%3e%3cpath%20d='M15.8574%2016.3574L21.0001%2021.5001'%20stroke='black'%20stroke-width='1.25'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e";function m(i,c){let e=i.target.value;if(!e){r(".search-info");return}const o=c.filter(t=>{const a=t.title&&t.title.includes(e),p=t.activity&&t.activity.includes(e);return a||p});r(".search-info"),o.forEach(t=>{if(t.SR_location){const a=`
          <div>
          <a href="${`/src/pages/boardContent/index.html#${t.id}`}"
          class="flex border-b gap-2 mb-2">
          <img src="${d}" alt="" />
          <span>${t.title}</span>
          </a>
          </div>
          `;s(".search-info",a)}else{const a=`
          <div>
          <a href="${`/src/pages/exchangeBoard/index.html#${t.id}`}"
          class="flex border-b gap-2 mb-2">
          <img src="${d}" alt="" />
          <span>${t.title}</span>
          </a>
          </div>
          `;s(".search-info",a)}})}async function u(){const i=await l.collection("community").getFullList(),c=await l.collection("products").getFullList(),e=i.concat(c),o=n(".search-back"),t=n("#searchInput");o.addEventListener("click",()=>history.back()),t.addEventListener("input",h(a=>m(a,e),500))}u();

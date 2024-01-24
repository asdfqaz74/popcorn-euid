import { getNode, insertLast, removeChild, debounce } from '/src/lib';
import pb from '/src/api/pocketbase';
import searchIcon from '/public/images/search.svg';

function handleInput(e, combinedData) {
  let value = e.target.value;

  if (!value) {
    removeChild('.search-info');
    return;
  }

  const filteredData = combinedData.filter((item) => {
    const titleMatch = item.title && item.title.includes(value);
    const activityMatch = item.activity && item.activity.includes(value);

    return titleMatch || activityMatch;
  });

  removeChild('.search-info');

  filteredData.forEach((item) => {
    if (!item.SR_location) {
      const template = /* html */ `
          <div>
          <a href="${`/src/pages/exchangeBoard/index.html#${item.id}`}"
          class="flex border-b gap-2 mb-2">
          <img src="${searchIcon}" alt="" />
          <span>${item.title}</span>
          </a>
          </div>
          `;

      insertLast('.search-info', template);
    } else {
      const template = /* html */ `
          <div>
          <a href="${`/src/pages/boardContent/index.html#${item.id}`}"
          class="flex border-b gap-2 mb-2">
          <img src="${searchIcon}" alt="" />
          <span>${item.title}</span>
          </a>
          </div>
          `;
      insertLast('.search-info', template);
    }
  });
}

async function init() {
  const communityData = await pb.collection('community').getFullList();
  const productData = await pb.collection('products').getFullList();

  const combinedData = communityData.concat(productData);

  const back = getNode('.search-back');
  const input = getNode('#searchInput');
  back.addEventListener('click', () => history.back());

  input.addEventListener(
    'input',
    debounce((e) => handleInput(e, combinedData), 500)
  );
}

init();

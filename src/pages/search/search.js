import { getNode, insertLast, removeChild, debounce } from '/src/lib';
import pb from '/src/api/pocketbase';
import searchIcon from '/public/images/search.svg';

function handleInput(e, productData) {
  let value = e.target.value;

  if (!value) {
    removeChild('.search-info');
    return;
  }

  let filteredData = productData.filter((item) => item.title.includes(value));

  removeChild('.search-info');

  filteredData.forEach((item) => {
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
  });
}

async function init() {
  const productData = await pb.collection('products').getFullList();

  const back = getNode('.search-back');
  const input = getNode('#searchInput');
  back.addEventListener('click', () => history.back());

  input.addEventListener(
    'input',
    debounce((e) => handleInput(e, productData), 500)
  );
}

init();

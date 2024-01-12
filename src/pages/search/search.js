import { getNode, insertLast, removeChild } from '/src/lib';
import pb from '/src/api/pocketbase';
import searchIcon from '/public/images/search.svg';

const back = getNode('.search-back');

back.addEventListener('click', () => history.back());

/* -------------------------------------------------------------------------- */
/*                                  debounce                                  */
/* -------------------------------------------------------------------------- */

function debounce(callback, limit = 200) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

const input = getNode('#searchInput');

async function handleInput(e) {
  let value = e.target.value;

  if (!value) {
    removeChild('.search-info');
    return;
  }

  const productData = await pb.collection('products').getFullList();

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

input.addEventListener('input', debounce(handleInput, 300));

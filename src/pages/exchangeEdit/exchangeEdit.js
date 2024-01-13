import {
  setDocumentTitle,
  getNode,
  getPbImageURL,
  insertFirst,
} from '/src/lib';
import pb from '/src/api/pocketbase';

setDocumentTitle('엔터이듬 / 수정페이지');

async function render() {
  const hash = window.location.hash.slice(1);
  const product = await pb.collection('products').getOne(hash);

  const template = /* html */ `
  <div class="images">
    <img src="${getPbImageURL(product, 'images')}" alt="" />
  </div>

  <div class="flex flex-col mx-3 my-5 gap-2">
      <label for="title" class="text-base font-semibold pl-2">제목</label>
      <input type="text" id="title" value="${
        product.title
      }" class="border rounded-sm px-2 h-8" />
    </div>

    <div class="my-5">
      <span class="mx-3 block mb-2 text-base font-semibold pl-2">상태변경</span>
      <ul class="flex gap-1 px-1 whitespace-nowrap no-scrollbar">
        <li class="exchangePost-li exchangePost-headset">
          <button type="button">none</button>
        </li>
        <li class="exchangePost-li exchangePost-keyboard">
          <button type="button">reservation</button>
        </li>
        <li class="exchangePost-li exchangePost-mouse">
          <button type="button">done</button>
        </li>
      </ul>
    </div>

    <div class="flex flex-col mx-3 my-5 gap-2">
      <label for="price" class="text-base font-semibold pl-2">가격</label>
      <input
        type="number"
        id="price"
        class="border rounded-sm px-2 h-8 text-sm"
        value="${product.price}"
      />
    </div>

    <div class="flex flex-col items-center p-3">
      <label for="textField" class="mx-3 text-base font-semibold mr-auto"
        >자세한 설명</label
      >
      <textarea
        id="textField"
        type="textarea"
        cols="30"
        rows="10"
        class="border rounded-sm p-2 text-sm w-full"
        value = ${product.content}
      ></textarea>
    </div>

  `;

  insertFirst('.container', template);
}

render();

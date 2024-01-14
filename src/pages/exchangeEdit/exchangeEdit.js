import {
  setDocumentTitle,
  getNodes,
  getPbImageURL,
  insertFirst,
  getNode,
} from '/src/lib';
import pb from '/src/api/pocketbase';

setDocumentTitle('엔터이듬 / 수정페이지');

async function render() {
  const hash = window.location.hash.slice(1);
  const product = await pb.collection('products').getOne(hash);

  const title = getNode('#title');
  const price = getNode('#price');
  let textField = getNode('#textField');
  const modify = getNode('.exchangeUpdate-modify');
  const cancel = getNode('.exchangeUpdate-cancel');
  title.setAttribute('value', `${product.title}`);
  price.setAttribute('value', `${product.price}`);
  let textBeforeModify = product.contents.replace(/<br>/g, '\n');
  textField.value = textBeforeModify;

  let afterModify = textField.value;
  textField.addEventListener('input', function () {
    afterModify = this.value.replace(/\n/g, '<br>');
  });
  let selectedType = null;

  const buttons = getNodes('.exchangeUpdate-li button');
  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      buttons.forEach((target) =>
        target.closest('li').classList.remove('active', 'bg-secondary')
      );

      this.closest('li').classList.add('active', 'bg-secondary');

      selectedType = this.textContent;
    });
  });

  const template = /* html */ `
  <div class="exchangeUpdate-images w-full">
  <img src="${getPbImageURL(product, 'images')}" alt="" class="mx-auto"/>
  </div>
  
  `;
  function handleModify() {
    pb.collection('products')
      .update(hash, {
        title: title.value,
        price: price.value,
        contents: afterModify,
        state: selectedType,
      })
      .then(() => history.back());
  }

  insertFirst('.exchangeUpdate-container', template);
  cancel.addEventListener('click', () => history.back());
  modify.addEventListener('click', handleModify);
}

render();

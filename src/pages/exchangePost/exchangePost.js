import {
  clearContents,
  insertLast,
  getNode,
  getNodes,
  setDocumentTitle,
} from '/src/lib';
import pb from '/src/api/pocketbase';

setDocumentTitle('엔터이듬 ㆍ 상품 추가');

/* -------------------------------------------------------------------------- */
/*                                history.back                                */
/* -------------------------------------------------------------------------- */

const back = getNode('.exchangePost-back');
back.addEventListener('click', () => window.location.href = '/src/pages/exchange/');

/* -------------------------------------------------------------------------- */
/*                                    post                                    */
/* -------------------------------------------------------------------------- */

function post() {
  const imgField = getNode('#imgField');
  const label = getNode('.exchangePost-img-container label');

  function handleNewPost() {
    const userData = await pb.collecion('users').getOne('')

    const data = new FormData();
    data.append('title', getNode('#title').value);
    data.append('price', getNode('#price').value);
    data.append('content', getNode('#textField').value);
    data.append('location', getNode('#title').value);
    data.append('title', getNode('#title').value);
    data.append('type', getNode('#type').value);
  }

  // 이미지 뿌려주는 함수
  function handleUpload(e) {
    const { files } = e.target;

    const fileImages = Array.from(files).map((file) => ({
      image: URL.createObjectURL(files[0]),
      label: file.name,
    }));

    clearContents('.render');
    fileImages.forEach((item) => {
      const img = /* html */ `
        <img src="${item.image}" alt="${item.label}" class="w-full h-full object-cover cursor-pointer z-10" />
      `;
      insertLast('.render', img);
    });

    // 이미지가 추가되었을 때 라벨을 숨깁니다.
    if (label) {
      label.style.display = 'none';
    }

    const renderImgs = getNodes('.render img');
    renderImgs.forEach((img) => {
      img.addEventListener('click', () => {
        imgField.click();
      });
    });
  }

  imgField.addEventListener('change', handleUpload);
}

post();

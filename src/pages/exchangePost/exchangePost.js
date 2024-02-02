import {
  clearContents,
  insertLast,
  getNode,
  getNodes,
  setDocumentTitle,
  getStorage,
  setStorage,
} from '/src/lib';
import pb from '/src/api/pocketbase';

setDocumentTitle('엔터이듬 ㆍ 상품 추가');

/* -------------------------------------------------------------------------- */
/*                                history.back                                */
/* -------------------------------------------------------------------------- */

const back = getNode('.exchangePost-back');
back.addEventListener(
  'click',
  () => (window.location.href = '/src/pages/exchange/')
);

/* -------------------------------------------------------------------------- */
/*                                get location                                */
/* -------------------------------------------------------------------------- */

const records = await pb.collection('users').getFullList();
const phoneNumber = await getStorage('phoneNumber');
const userLoginInfo = phoneNumber;
async function loginSetting() {
  let userNow = records.find((item) => item.phoneNumber === userLoginInfo);
  setStorage('userId', userNow.id);
  return userNow.id;
}

async function setLocation() {
  const userId = await getStorage('userId');
  const dataLocation = await pb.collection('users').getOne(userId);
  console.log(dataLocation);

  const setLocate = /* html */ `
  <option value="${dataLocation.locationFirst}">${dataLocation.locationFirst}</option>
  <option value="${dataLocation.locationSecond}">${dataLocation.locationSecond}</option>
  `;

  insertLast('#place', setLocate);
}

/* -------------------------------------------------------------------------- */
/*                                    post                                    */
/* -------------------------------------------------------------------------- */

async function post() {
  const userId = await loginSetting();

  const addProduct = getNode('.exchangePost-submit');
  const imgField = getNode('#imgField');
  const label = getNode('.exchangePost-img-container label');

  let selectedType = null;

  const buttons = getNodes('.exchangePost-li button');
  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      buttons.forEach((target) =>
        target.closest('li').classList.remove('active', 'bg-secondary')
      );

      this.closest('li').classList.add('active', 'bg-secondary');

      // TODO: 여기도 그렇네요. 이것은 폼을 잘 다루면 해결할 수 있는 문제입니다.
      selectedType = this.textContent;
    });
  });

  // pb 로 넘길 데이터
  async function handleNewPost() {
    const newData = new FormData();
    newData.append('images', imgField.files[0]);
    newData.append('title', getNode('#title').value);
    newData.append('price', getNode('#price').value);
    newData.append('alt', imgField.files[0].name);
    newData.append('type', selectedType);
    let text = getNode('#textField').value;
    let textWithBreaks = text.replace(/\n/g, '<br>');
    newData.append('contents', textWithBreaks);
    newData.append('userPost', userId);
    let selectedLocation = getNode('#place').value;
    if (selectedLocation === 'place1') {
      newData.append('locationFirst', selectedLocation);
    } else {
      newData.append('locationSecond', 'location2');
    }

    try {
      await pb.collection('products').create(newData);
      location.href = '/src/pages/exchange/';
    } catch {
      alert('상품 정보를 올바르게 입력해 주세요.');
    }
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
      <img src="${item.image}" alt="${item.label}" class="w-full h-full object-cover cursor-pointer" />
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
  addProduct.addEventListener('click', handleNewPost);
}

loginSetting();
setLocation();
post();

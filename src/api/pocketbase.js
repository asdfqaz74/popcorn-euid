import Pocketbase from 'pocketbase';
//vite 환경이어서 자동으로 찾아줌
//원래는 pocketbase/index.js 인데 index.js 를 생략해줌
//포켓베이스를 import로 객체로 꺼내 쓰면 이 기능들을 모든 곳에 쓰는걸 안해도 됨

const pb = new Pocketbase(import.meta.env.VITE_PB_URL);

export default pb;

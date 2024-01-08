import { getNode } from '/src/lib';

const back = getNode('.search-back');

back.addEventListener('click', () => history.back());

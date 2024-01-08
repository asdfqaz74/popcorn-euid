import { getNode } from '/src/lib';

/* -------------------------------------------------------------------------- */
/*                                history back                                */
/* -------------------------------------------------------------------------- */

const back = getNode('.exchangeBoard-back');

back.addEventListener('click', () => history.back());

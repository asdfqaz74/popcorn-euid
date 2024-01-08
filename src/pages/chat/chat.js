import { getNode } from '/src/lib';

/* -------------------------------------------------------------------------- */
/*                                history back                                */
/* -------------------------------------------------------------------------- */

const back = getNode('.chat-back');

back.addEventListener('click', () => history.back());

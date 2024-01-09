import { getNode } from '/src/lib/';
import plusTapSvg from '/public/images/plusTap.svg';
import plusTapActiveSvg from '/public/images/plusTapActive.svg';
import { gsap } from 'gsap';

/* -------------------------------------------------------------------------- */
/*                             toggle plus button                             */
/* -------------------------------------------------------------------------- */

const plusButton = getNode('.exchange-button');
const imgButton = getNode('.exchange-button-img');
const buttonHidden = getNode('.exchange-button-ul');

function handleButtonImg(e) {
  const image = e.currentTarget;

  const currentSrc = image.src;
  const plusImg = plusTapSvg;
  const plusActiveImg = plusTapActiveSvg;

  if (currentSrc.includes(plusImg)) {
    image.src = plusActiveImg;
  } else {
    image.src = plusImg;
  }
}

function handleButton(e) {
  const button = e.currentTarget;

  if (button.classList.contains('exchange-button-no')) {
    gsap.to(button, {
      background: 'rgb(255 255 255)',
      duration: 0.3,
    });
    button.classList.remove('exchange-button-no');
    button.classList.add('exchange-button-active');
    gsap.from('.exchange-button-ul > ul > li', {
      y: 30,
      opacity: 0,
      stagger: {
        each: 0.05,
        from: 'end',
      },
    });
    buttonHidden.classList.remove('hidden');
    buttonHidden.classList.add('block');
  } else {
    buttonHidden.classList.remove('block');
    buttonHidden.classList.add('hidden');
    gsap.to(button, {
      background: 'rgb(55 63 103)',
      duration: 0.3,
    });
    button.classList.remove('exchange-button-active');
    button.classList.add('exchange-button-no');
  }
}

imgButton.addEventListener('click', handleButtonImg);
plusButton.addEventListener('click', handleButton);

/* -------------------------------------------------------------------------- */
/*                                    post                                    */
/* -------------------------------------------------------------------------- */

import { getNode } from '/src/lib';

/* -------------------------------------------------------------------------- */
/*                                history back                                */
/* -------------------------------------------------------------------------- */

const back = getNode('.exchangeBoard-back');

back.addEventListener('click', () => history.back());

/* -------------------------------------------------------------------------- */
/*                                heart toggle                                */
/* -------------------------------------------------------------------------- */

const heart = getNode('.exchangeBoard-heart');

function handleHeart(e) {
  const heartImage = e.target;

  const currentSrc = heartImage.src;
  const originSrc = '/public/images/heart.svg';
  const fullHeartSrc = '/public/images/fullheart.svg';

  if (currentSrc.includes(originSrc)) {
    gsap.from(heartImage, {
      scale: 0.6,
      duration: 0.2,
      onComplete: () => {
        heartImage.src = fullHeartSrc;
        gsap.to(heartImage, {
          scale: 1,
          duration: 0.1,
        });
      },
    });
  } else {
    gsap.from(heartImage, {
      scale: 1.5,
      duration: 0.1,
      onComplete: () => {
        heartImage.src = originSrc;
        gsap.to(heartImage, {
          scale: 1,
          duraton: 0.2,
        });
      },
    });
  }
}

heart.addEventListener('click', handleHeart);

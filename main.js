import gsap from 'gsap';

const tl = gsap.timeline();

tl.from('.start--text', { opacity: 0, y: 30 }).from('p', {
  opacity: 0,
  x: -30,
  stagger: 0.2,
});

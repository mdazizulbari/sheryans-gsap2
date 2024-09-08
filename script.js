const heroAnimation = () => {
  let tl = gsap.timeline();
  tl.from(".navLeft i, .navLeft a, .navRight a, .navRight button", {
    y: -100,
    opacity: 0,
    delay: 1,
    duration: 0.5,
    stagger: 0.1,
  });
  tl.from(".left h1, .left p, .left button", {
    x: -100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
  tl.from(".right img", {
    opacity: 0,
    x: -100,
    duration: 0.2,
  });
  tl.from(".brands img", {
    y: 100,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
  });
};

heroAnimation()
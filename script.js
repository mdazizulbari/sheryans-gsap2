const heroAnimation = () => {
  let tl = gsap.timeline();
  tl.from(".navLeft i, .navLeft a, .navRight a, .navRight button", {
    y: -100,
    opacity: 0,
    delay: 1,
    duration: 0.5,
    stagger: 0.1,
  });
  tl.from(".hero .left h1,.hero .left p,.hero .left button", {
    x: -100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  }, "hero");
  tl.from(".hero .right img", {
    opacity: 0,
    x: -100,
    duration: 0.5,
  }, "hero");
  tl.from(".brands img", {
    y: 100,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
  });
};

const pageAnimation = ()=>{
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".cards",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top -70%",
            scrub: 2,
        }
    })
    tl.from(".services h4, .services p",{
        y: -100,
        opacity: 0,
        stagger: 0.1,
    })
    // cards1
    tl.from(".line1 .left",{
        x: -100,
        opacity: 0,
        duration: 0.5,
    }, "line1")
    tl.from(".line1 .right",{
        x: 100,
        opacity: 0,
        duration: 0.5,
    }, "line1")
    // cards2
    tl.from(".line2 .left",{
        x: -100,
        opacity: 0,
        duration: 0.5,
    }, "line2")
    tl.from(".line2 .right",{
        x: 100,
        opacity: 0,
        duration: 0.5,
    }, "line2")
    // cards3
    tl.from(".line3 .left",{
        x: -100,
        opacity: 0,
        duration: 0.5,
    }, "line3")
    tl.from(".line3 .right",{
        x: 100,
        opacity: 0,
        duration: 0.5,
    }, "line3")
    // cards4
    tl.from(".line4 .left",{
        x: -100,
        opacity: 0,
        duration: 0.5,
    }, "line4")
    tl.from(".line4 .right",{
        x: 100,
        opacity: 0,
        duration: 0.5,
    }, "line4")
}

heroAnimation()
pageAnimation()
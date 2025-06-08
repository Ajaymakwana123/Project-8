gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var tml = gsap.timeline({
  scrollTrigger:{
      trigger:`#home`,
      start:`top top`,
      pin:true,
      scrub:0.15,
      end:`700% top`
  },
})




tml
.from("#overlay-center",{
  left:`90%`
})
.to("#circle",{
  scale:0,
},`a`)
.to("#btm-1",{
  stagger:.15,
  rotate:`-180deg`,
  ease:Power1
},`a`)
.to("#btm-2",{
  delay:.034,
  rotate:`-180deg`,
  ease:Power1
},`a`)
.to("#btm-3",{
  delay:.07,
  rotate:`-180deg`,
  ease:Power1
},`a`)
.to("#small-circle",{
  scale:0.5,
},`a`)
.to("#overlay h1",{
  top:`150%`,
  delay:-.035
},`a`)
.from("#purple-circle",{
  top:`140%`,
  scale:0
},`a`)
.to("#overlay-center-img",{
  scale:0,
},`a`)
.to("#overlay-center h3",{
  opacity:0,
  delay:-.15
},`a`)
.to("#overlay>h2",{
  top:`85%`,
  rotate:`0deg`,
  delay:.10
},`a`)
.to("#purple-circle",{
  opacity:0,
  delay:-.15
},`b`)
.to("#small-circle",{
  scale:0
},`b`)
.from("#focus-img",{
  right:`-10%`,
  delay:-.15
})
.to("#purple-box",{
  top:0,
  delay:-.60
})
.to("#purple-box",{
  top:`-90%`,
  delay:.35
})

var t2 = gsap.timeline({
  ScrollTrigger: {
    trigger: "#second",
    scrub: 1,
    start: "top top",
    end: "bottom -2%",
    markers: true,
    pin: true,
  },
});
t2.to(".cirlce", {
  top: "50%",
  stagger: 0.1,
  ease: Power1,
})
  .to(".cirlce", {
    left: "50%",
    stagger: 0.1,
    ease: Power1,
  })
  .to(".pi", {
    scale: 10,
    stagger: 0.1,
    duration: 2,
    ease: Power1,
  })
  .to(".pi", {
    background: "linear-gradient(to right, #d5a7b4, #b4aad5)",
    ease: Power1,
  })
  .to("#stop h1", {
    left: "-150%",
    duration: 7,
    ease: Power1,
  },"a")
  .to("#sbtm #two", {
    opacity: 0,
    duration:2,
    ease: Power1,
  },"a")
  .to("#sbtm #one", {
    opacity: 1,
    duration:2,
    delay:1.5,
    ease: Power1,
  },"a")
 

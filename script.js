gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

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

// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#home",
//     start: "top top",
//     scrub: 1,
//     pin: true,
//   },
// });

// tl.to(
//   "#circle #btm img",
//   {
//     rotate: "-180deg",
//     duration: 1,
//     ease: Power1,
//     stagger: 0.1,
//   },
//   "hello"
// )
//   .to(
//     "#cimg img",
//     {
//       scale: "0",
//       duration: 1,
//       ease: Power1,
//       stagger: 0.1,
//     },
//     "hello"
//   )
//   .to(
//     "#overlay #gallery",
//     {
//       bottom: "-150%",
//       ease: Power1,
//     },
//     "hello"
//   )
//   .to("#cirlce", {
//     top: "50%",
//     stagger: 0.2,
//     duration: 2,
//     ease: Power1,
//   });

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
 

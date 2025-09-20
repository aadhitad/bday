// GSAP ScrollTrigger Animations
gsap.registerPlugin(ScrollTrigger);

// Memory Sections Animations
gsap.from("#memory1 h2", {
    scrollTrigger: "#memory1",
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3
});

gsap.from("#memory2 h2", {
    scrollTrigger: "#memory2",
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3
});

gsap.from("#memory3 h2", {
    scrollTrigger: "#memory3",
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3
});

// Love Quote Animation
gsap.from("#loveNote .quote", {
    scrollTrigger: "#loveNote",
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3
});

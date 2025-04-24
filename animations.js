let menu = document.querySelector(".header-right-hamburger");
let cross = document.querySelector(".cross");
let navigator = document.querySelector("div.navigator");

gsap.set(navigator, {
  opacity: 0,
  x: 500,
});

menu.addEventListener("click", () => {
  gsap.set(navigator, { display: "block" });
  gsap.to(navigator, {
    opacity: 1,
    x: 0,
    duration: 0.5,
    ease: "circ.out",
  });
});

cross.addEventListener("click", () => {
  gsap.to(navigator, {
    x: -500,
    opacity: 0,
  });

  setTimeout(() => {
    gsap.set(navigator, { display: "none", x: 500 });
  }, 500);
});

document.body.addEventListener("mousemove", (e) => {
  gsap.to("#cursor", {
    x: e.pageX,
    y: e.pageY,
    ease: "slow",
  });
});

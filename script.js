const me = document.querySelector("img");
const quotesBg = document.querySelector("#me .quotesBg");

const backgroundQuotes = [
  "anti-aesthetic. fully intentional.",
  "error 000: design not found",
  "compile. collapse. continue.",
  "undefined is a state of mind",
  "system speaks in monospace",
  "broken by default",
  "this line was commented out",
  "noise is the new structure",
  "styled with violence",
  "frameworks are temporary",
  "glitch is language",
  "404 is the aesthetic",
  "output: unexpected",
  "this isn't minimalism. it's damage.",
  "screenshot this if it disappears",
  "nothing to align with",
  "structure is illusion",
  "layouts can lie",
  "inconsistency = integrity",
  "this was never meant to work",
  "design is a trap",
  "beauty is overrated",
  "syntax without sentiment",
  "never trust the grid",
  "rules were skipped on load",
  "shift happens",
  "debug the layout, not the user",
  "surfaces are deceptive",
  "text is just texture",
  "accepted errors only",
];

function swapToText() {
  me.setAttribute("src", "./assets/images/text.png");
  gsap.from(me, { opacity: 0 });
}

function swapToImage() {
  me.setAttribute("src", "./assets/images/me.png");
  gsap.from(me, { opacity: 0, scale: 0.4 });
}

let toggle = false;

if (window.innerWidth <= 960) {
  me.addEventListener("click", () => {
    toggle = !toggle;
    toggle ? swapToText() : swapToImage();
  });
} else {
  me.addEventListener("mouseenter", swapToText);
  me.addEventListener("mouseleave", swapToImage);
}

for (let i = 0; i < 30; i++) {
  let quote = document.createElement("p");
  let randomQuote = Math.floor(Math.random() * backgroundQuotes.length);
  quote.textContent = `${backgroundQuotes[randomQuote]}`;
  quote.style.left = `${Math.floor(Math.random() * 100)}%`;
  quote.style.top = `${Math.floor(Math.random() * 100)}%`;
  quote.style.transform = `rotate(${Math.floor(Math.random() * 361)}deg)`;
  quote.style.margin = `${Math.floor(Math.random() * 40)}rem`;
  quotesBg.appendChild(quote);
}

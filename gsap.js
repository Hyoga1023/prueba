// gsap.js
import { gsap } from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

// Exponer gsap globalmente para GSAPInfoBar
window.gsap = gsap;

gsap.registerPlugin(ScrollTrigger);

// Lista de imágenes de la carpeta img/
const images = [
  "img/IMG_20240609_125053906_HDR_AE.jpg",
  "img/Fondo_blanco_estilizado.jpg",
  "img/IMG_20240609_125053906_HDR_AE.jpg",
  "img/Fondo_blanco_estilizado.jpg",
  "img/IMG_20240609_125053906_HDR_AE.jpg"
];

let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg");
  section.bg.style.backgroundImage = `url(${images[i % images.length]})`;

  gsap.fromTo(
    section.bg,
    {
      backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
    },
    {
      backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: () => i ? "top bottom" : "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true
      }
    }
  );
});

// GSAP Info Bar
import { GSAPInfoBar } from "https://codepen.io/GreenSock/pen/vYqpyLg.js";
new GSAPInfoBar({ link: "https://gsap.com/docs/v3/Plugins/ScrollTrigger/" });
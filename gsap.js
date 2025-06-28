// gsap.js
import { gsap } from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

window.gsap = gsap;

gsap.registerPlugin(ScrollTrigger);

const images = [
  "img/0_Años.jpg",
  "img/1_Años.jpg",
  "img/2_Años.jpg",
  "img/3_Años.jpg",
  "img/4_Años.jpg",
  "img/5_Años.jpg",
  "img/6_Años.jpg",
  "img/7_Años.jpg",
  "img/8_Años.jpg",
  "img/9_Años.jpg",
  "img/10_Años.jpg",
  "img/11_Años.jpg",
  "img/12_Años.jpg",
  "img/13_Años.jpg",
  "img/14_Años.jpg",
  "img/15_Años.jpg"
];

let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

let firstEffectApplied = false; // Bandera para la primera animación

// Configurar GSAP para cada sección
gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg");
  section.bg.style.backgroundImage = `url(${images[i % images.length]})`;

  // Animación de posición de fondo
  gsap.fromTo(
    section.bg,
    {
      backgroundPosition: () =>
        i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
    },
    {
      backgroundPosition: () =>
        `50% ${window.innerHeight * (1 - getRatio(section))}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: () => (i ? "top bottom" : "top top"),
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true
      }
    }
  );

  // Aplicar la animación de visibilidad solo a la primera sección visible
  if (!firstEffectApplied) {
    gsap.fromTo(
      section,
      { opacity: 0 }, 
      {
        opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: section,
          start: "top 80%", 
          end: "top 50%", 
          toggleActions: "play none none none",
          onEnter: () => {
            firstEffectApplied = true; 
          }
        }
      }
    );
  }
});


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

import React, { useRef } from "react";


export const useSlider = () => {
  const slideShow = useRef(null);

  const siguiente = () => {
    // Se comprueba que el SlideShow tenga elementos
    if (slideShow.current.children.length > 0) {
      //Obtenemos el primer elemento SlideShow
      const primerElemento = slideShow.current.children[0];
      //Establecemos la traansicion de slideshow
      slideShow.current.style.transition = `500ms ease-out all`;
      //Movemos el SlideShow
      slideShow.current.style.transform = `translateX(-100%)`;

      const transicion = () => {
        // Reiniciamos la posicion del Slideshow
        slideShow.current.style.transition = "none";
        slideShow.current.style.transform = "translateX(0)";
        slideShow.current.appendChild(primerElemento);
        slideShow.current.removeEventListener("transitionend", transicion);
      };
      // EventListener par acuando termine la animacion
      slideShow.current.addEventListener("transitionend", transicion);
    }
  };

  const anterior = () => {
    if (slideShow.current.children.length > 0) {
      //Obtenemos el ultimo elemento SlideShow
      const index = slideShow.current.children.length - 1;
      const ultimoElemento = slideShow.current.children[index];
      slideShow.current.insertBefore(
        ultimoElemento,
        slideShow.current.firstChild
      );

      slideShow.current.style.transition = "none";
      slideShow.current.style.transform = `translateX(-100%)`;

      setTimeout(() => {
        slideShow.current.style.transition = "500ms ease-out all";
        slideShow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return {
    siguiente,
    anterior,
    slideShow,
  };
};

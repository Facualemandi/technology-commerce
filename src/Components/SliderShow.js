import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import imgOne from "../Images/slider1.png";
import imgTwo from "../Images/slider2.png";
import imgThree from "../Images/slider3.png";
import ImgDesktopOne from "../Images/DesktopImg1.jpg";
import ImgDesktopTwo from "../Images/ImgDesktop2.jpg";
import ImgDesktopThree from "../Images/ImgDesktop3.jpg";
const SliderShow = () => {
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

  // setInterval(() => {
  //       siguiente()
  // }, 5000)

  // useEffect(() => {
  //   const intervalo = setInterval(() => {
  //     siguiente();
  //   }, 4000);
  //   // Eliminar intervalos

  //   slideShow.current.addEventListener("mouse", () => {
  //     clearInterval(intervalo);
  //   });
  // }, []);

  return (
    <>
      <ContenedorDiv>
        <ContenedorSliderShow ref={slideShow}>
          <Slide>
            <Img alt="" src={imgOne} dblockDesk="block" dnoneDesk="none" />
            <Img alt="" src={ImgDesktopOne} dnone="none" dblock="block" />
            <TextoSlide>
              <p>15% de Descuentos</p>
            </TextoSlide>
          </Slide>

          <Slide>
            <Img alt="" src={imgTwo} dblockDesk="block" dnoneDesk="none" />
            <Img alt="" src={ImgDesktopTwo} dnone="none" dblock="block" />

            <TextoSlide>
              <p>30% de Descuentos</p>
            </TextoSlide>
          </Slide>

          <Slide>
            <Img alt="" src={imgThree} dblockDesk="block" dnoneDesk="none" />
            <Img alt="" src={ImgDesktopThree} dnone="none" dblock="block" />

            <TextoSlide>
              <p>45% de Descuentos</p>
            </TextoSlide>
          </Slide>
        </ContenedorSliderShow>

        <Controles>
          <Boton onClick={anterior}>
            <Left />
          </Boton>

          <Boton onClick={siguiente}>
            <Rigth />
          </Boton>
        </Controles>
      </ContenedorDiv>
    </>
  );
};

const ContenedorDiv = styled.div`
  overflow: hidden;
  position: relative;
`;

const ContenedorSliderShow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 9;
  position: relative;
  max-height: 500px;
  font-family: "Monserrat", sans-serif;
  font-size: 14px;

  img {
    width: 100%;
    vertical-align: top;
  }

  @media (min-width: 760px) {
    height: 250px;
  }
`;

const TextoSlide = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;
`;

const Controles = styled.div`
  position: absolute;
  z-index: 15;
  bottom: 0px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Boton = styled.button`
  height: 35px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: rgba(0, 0, 0, 0.423);
  color: white;
  outline: none;
`;

const Rigth = styled(AiOutlineRight)`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 780px) {
    cursor: pointer;
  }
`;

const Left = styled(AiOutlineLeft)`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 780px) {
    cursor: pointer;
  }
`;

const Img = styled.img`
  display: ${({ dnone }) => dnone};
  display: ${({ dblockDesk }) => dblockDesk};
  max-height: 400px;

  @media (min-width: 760px) {
    display: ${({ dnoneDesk }) => dnoneDesk};
    display: ${({ dblock }) => dblock};
    height: 300px;
  }
`;

export default SliderShow;

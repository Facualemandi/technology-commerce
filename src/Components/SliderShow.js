import React, { useEffect, useRef } from "react";
import imgOne from "../Images/slider1.png";
import imgTwo from "../Images/slider2.png";
import imgThree from "../Images/slider3.png";
import ImgDesktopOne from "../Images/DesktopImg1.jpg";
import ImgDesktopTwo from "../Images/ImgDesktop2.jpg";
import ImgDesktopThree from "../Images/ImgDesktop3.jpg";
import { StyleSlider } from "../Styles/StyleSlider";
import { useSlider } from "../Hooks/useSlider";

const {
  ContenedorDiv,
  ContenedorSliderShow,
  Slide,
  TextoSlide,
  Controles,
  Boton,
  Rigth,
  Left,
  Img,
} = StyleSlider();

const SliderShow = () => {
  const { siguiente, anterior, slideShow } = useSlider();



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

export default SliderShow;


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
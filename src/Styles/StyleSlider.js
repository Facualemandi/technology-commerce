import React from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

export const StyleSlider = () => {
  const ContenedorDiv = styled.div`
    overflow: hidden;
    position: relative;
    width: 100vw;
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
    margin-top: 60px;

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
    width: 99vw;
    display: flex;
    margin: auto;
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
  return {
    ContenedorDiv,
    ContenedorSliderShow,
    Slide,
    TextoSlide,
    Controles,
    Boton,
    Rigth,
    Left,
    Img,
  };
};

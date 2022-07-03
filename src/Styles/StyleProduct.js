import React from "react";
import { NavLink } from "react-router-dom";
import { BiMinus } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";

export const StyleProduct = () => {
  const Main = styled.main`
    width: 100vw;
    margin-top: 60px;
  `;
  const SectionImg = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 780px) {
    }
  `;
  const Img = styled.img`
    width: 300px;
    height: 300px;

    @media (min-width: 780px) {
      width: 400px;
      height: 400px;
    }
    @media (min-width: 1240px) {
      width: 500px;
      height: 500px;
    }
  `;

  const SectionName = styled.section`
    width: 95vw;
    margin: auto;
    border-left: 5px solid #9fd3ab;

    @media (min-width: 780px) {
      border-left: 1px solid rgba(197, 197, 197, 0.652);
    }
  `;

  const Name = styled.p`
    margin: 10px;
    font-family: "Montserrat", sans-serif;
    @media (min-width: 760px) {
      font-size: 25px;
    }
  `;
  const Price = styled.p`
    margin: 10px;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    @media (min-width: 760px) {
      font-size: 30px;
    }
  `;
  const Description = styled.p`
    margin: 10px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;

    @media (min-width: 760px) {
      font-size: 18px;
    }
  `;

  const SectionDescription = styled.section`
    width: 95vw;
    margin: auto;
    border-left: 5px solid #a090d4;

    @media (min-width: 780px) {
      display: grid;
      grid-template-columns: repeat(2, 350px);
      border-top: 1px solid rgba(197, 197, 197, 0.652);
      border-left: none;
    }
    @media (min-width: 1000px) {
      grid-template-columns: repeat(3, 350px);
    }
    @media (min-width: 1270px) {
      grid-template-columns: repeat(4, 320px);
      width: 1300px;
    }
  `;

  const SectionItems = styled.section`
    width: 95vw;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: auto;

    @media (min-width: 760px) {
      min-height: 151px;
    }
  `;

  const ImgSvg = styled.img`
    width: 30px;
    height: 30px;
    margin: 10px;
  `;

  const SectionNameItems = styled.section`
    display: flex;
    align-items: center;

    @media (min-width: 780px) {
      width: max-content;
    }
  `;

  const ItemName = styled.p`
    font-size: 18px;
    font-family: "Poppins", sans-serif;
  `;

  const Ul = styled.ul`
    list-style: none;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 300;
  `;
  const Li = styled.li`
    margin: 5px;
    margin-left: 50px;
  `;

  const SectionButtom = styled.section`
    width: 95vw;
    margin: auto;
    border-left: 5px solid #bce4ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 10px;
    @media (min-width: 780px) {
      display: none;
    }
  `;
  const Buttom = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: white;
    margin: auto;
    width: 90vw;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #8babff;
    margin-top: 25px;
    box-shadow: 0px 4px 5px 0px rgba(175, 175, 175, 0.594);
    margin-bottom: 30px;
    height: 54px;
    margin-left: 10px;

    @media (min-width: 780px) {
      display: none;
    }
  `;

  const ButtomDesktop = styled.button`
    display: none;

    @media (min-width: 780px) {
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      color: white;
      width: 300px;
      padding: 10px;
      border-radius: 5px;
      border: none;
      background-color: #8bcfff;
      margin-top: 25px;
      box-shadow: 0px 4px 5px 0px rgba(175, 175, 175, 0.594);
      cursor: pointer;
    }
  `;

  const SectionDesktopNotebook = styled.section`
    @media (min-width: 780px) {
      width: 95vw;
      margin: auto;
      display: flex;
    }

    @media (min-width: 1300px) {
      width: 1300px;
    }
  `;

  const Return = styled(NavLink)`
    @media (min-width: 760px) {
      text-decoration: none;
      padding-top: 10px;
      display: flex;
      margin: auto;
      width: 65vw;
    }
  `;

  const ParragraphRerutn = styled.p`
    border: 1px solid;
    padding: 5px;
    position: fixed;
    right: 10px;
    top: 75px;
    border-radius: 5px;
    background-color: #d3edff;
    border: 3px solid #bde1fa;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: black;

    @media (min-width: 760px) {
      border: 3px solid #9ed6ff;
      padding: 10px;
      font-family: sans-serif;
      border-radius: 10px;
      transition: 0.5s;
      font-weight: bold;
      color: black;

      &&:hover {
        background-color: #bce4ff;
        transition: 0.5s;
      }
    }
  `;

  const SectionAmount = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    margin: auto;
    width: 90vw;
    padding: 10px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 4px 5px 0px rgba(175, 175, 175, 0.594);
    height: 54px;
    margin-left: 10px;
    background-color: #8babff;
    color: white;
  `;

  const Amount = styled.p`
    margin: 10px;
    font-family: sans-serif;
    font-size: 28px;
  `;

  const Add = styled(MdAdd)`
    width: 90%;
    height: 40px;
  `;
  const Minus = styled(BiMinus)`
    width: 90%;
    height: 40px;
  `;

  return {
    Main,
    SectionImg,
    Img,
    SectionName,
    Name,
    Price,
    Description,
    SectionDescription,
    SectionItems,
    ImgSvg,
    SectionNameItems,
    ItemName,
    Ul,
    Li,
    SectionButtom,
    Buttom,
    ButtomDesktop,
    SectionDesktopNotebook,
    Return,
    ParragraphRerutn,
    SectionAmount,
    Amount,
    Add,
    Minus,
  };
};
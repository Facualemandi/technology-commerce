import React from "react";
import { NavLink } from "react-router-dom";
import { BiMinus } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";

export const StyleProduct = () => {
  const UlPlaca = styled.section`
    border-left: 5px solid #a090d4;
    margin: 10px;
    width: 95vw;
    display: flex;
    flex-direction: column;
    margin: auto;

    @media (min-width: 780px) {
      border-top: 1px solid grey;
      border-left: none;
      width: 50vw;
    }
  `;

  const Caracteristica = styled.p`
    font-family: "Montserrat", sans-serif;
    font-size: 22px;
    margin: 15px;
  `;

  const SectionAmountDesktop = styled.section`
    display: none;

    @media (min-width: 780px) {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      margin: auto;
      width: 600px;
      padding: 10px;
      border-radius: 5px;
      border: none;
      box-shadow: 0px 4px 5px 0px rgba(175, 175, 175, 0.594);
      height: 54px;
      margin-left: 10px;
      background-color: #8babff;
      color: white;
      cursor: pointer;
      margin-bottom: 15px;
      width: 350px;
    }

    @media (min-width: 860px) {
      width: 430px;
    }
    @media (min-width: 1000px) {
      width: 550px;
    }
  `;

  const ButtomDesktop = styled.button`
    display: none;

    @media (min-width: 780px) {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      color: white;
      margin: auto;
      width: 600px;
      padding: 10px;
      border-radius: 5px;
      border: none;
      background-color: #8babff;
      margin-top: 25px;
      box-shadow: 0px 4px 5px 0px rgba(175, 175, 175, 0.594);
      margin-bottom: 30px;
      height: 54px;
      margin-left: 10px;
      cursor: pointer;
      width: 350px;
    }

    @media (min-width: 860px) {
      width: 430px;
    }
    @media (min-width: 1000px) {
      width: 550px;
    }
  `;

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
    @media (min-width: 780px) {
      font-size: 25px;
    }
  `;
  const Price = styled.p`
    margin: 10px;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    @media (min-width: 780px) {
      font-size: 30px;
    }
  `;
  const Description = styled.p`
    margin: 10px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;

    @media (min-width: 780px) {
      font-size: 18px;
      width: 350px;
    }
    @media (min-width: 860px) {
      font-size: 18px;
      min-width: 450px;
    }
    @media (min-width: 1000px) {
      font-size: 18px;
      min-width: 550px;
    }
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
      display: block;
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

    @media (min-width: 780px) {
      display: none;
    }
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

    @media (min-width: 780px) {
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

  const Return = styled(NavLink)`
    @media (min-width: 780px) {
      text-decoration: none;
      padding-top: 10px;
      display: flex;
      margin: auto;
      width: 65vw;
      display: none;
    }
  `;

  const ParragraphRerutn = styled.p`
    border: 1px solid;
    padding: 5px;
    position: fixed;
    right: 10px;
    top: 75px;
    border-radius: 5px;
    background-color: #eaeaea;
    border: 3px solid #d6d6d6;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: black;
    box-shadow: 0px 0px 5px 0px rgba(207, 207, 207, 0.527);

    @media (min-width: 780px) {
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
    SectionDesktopNotebook,
    Return,
    ParragraphRerutn,
    SectionAmount,
    Amount,
    Add,
    Minus,
    UlPlaca,
    Caracteristica,
    SectionAmountDesktop,
    ButtomDesktop,
  };
};

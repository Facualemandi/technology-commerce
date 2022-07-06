import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyleHomeProducts = () => {
  const Main = styled.main`
    width: 95vw;
  `;

  const Parragraph = styled.p`
    font-family: "Montserrat";
    width: 90vw;
    display: flex;
    margin: auto;
    margin-top: 50px;
    font-weight: bold;
    color: #303030;
    font-size: 20px;
    margin-left: 10px;
    margin-bottom: 10px;

    @media (min-width: 780px) {
      max-width: 1080px;
      display: flex;
      margin: 20px auto;
    }
  `;

  const Section = styled.section`
    border: 1px solid #e0e0e0a9;
    border-radius: 10px;
    height: auto;
    width: 95%;
    margin: 10px;
    min-height: 250px;
  `;

  const SectionContianer = styled.section`
    width: 100vw;
    display: grid;
    margin: auto;
    grid-template-columns: repeat(2, 1fr);
    padding: 10px;
    margin-bottom: 20px;

    @media (min-width: 670px) {
      grid-template-columns: repeat(3, 200px);
    }

    @media (min-width: 960px) {
      max-width: 1080px;
      grid-template-columns: repeat(4, 1fr);
    }
  `;

  const Img = styled.img`
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    width: 130px;
    height: 130px;
  `;

  const NameProduct = styled.p`
    font-family: "Montserrat";
    font-weight: 300;
    font-size: 14px;
    width: auto;
    display: flex;
    margin: 5px auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: grey;
    padding: 5px;
  `;

  const Price = styled.p`
    font-family: "Montserrat", sans-serif;
    margin-top: 15px;
    font-size: 24px;
    margin: 10px;
    margin-top: 10px;
  `;

  const TheNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
  `;

  const SectionImg = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #bdc3c7;
    background: -webkit-linear-gradient(to top, #d6d6d6, #ffffff);
    background: linear-gradient(to top, #d6d6d6, #ffffff);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `;

  return {
    Main,
    Parragraph,
    Section,
    SectionContianer,
    NameProduct,
    Price,
    Img,
    TheNavLink,
    SectionImg,
  };
};

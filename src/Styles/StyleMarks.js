import React from "react";

import styled from "styled-components";

export const StyleMarks = () => {
  const Parragraph = styled.p`
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    margin-top: 10px;
    width: 300px;

    @media (min-width: 760px) {
      width: 1080px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 20px;
      font-size: 22px;
    }
  `;

  const Section = styled.section`
    display: flex;
    width: auto;
    overflow: scroll;

    @media (min-width: 760px) {
      overflow: scroll;
      width: auto;
      display: flex;
      margin: auto;
      justify-content: space-around;
      cursor: pointer;
    }

    @media (min-width: 1080px) {
      width: 1080px;
      overflow-y: hidden;
      overflow-x: hidden;
    }
  `;

  const MarksImages = styled.p`
    margin: 15px;
    width: 150px;
    height: 235px;
    position: relative;
    border-radius: 10px;
    background-color: #e0e0e0a9;
  `;

  const Main = styled.main`
    overflow: scroll;

    @media (min-width: 760px) {
      overflow: hidden;
      overflow-y: hidden;
    }
  `;

  const Image = styled.img`
    width: 150px;
    height: 150px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `;

  const ImageRounder = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    position: absolute;
    bottom: 45px;
    left: 35px;
  `;

  const Mark = styled.p`
    margin-top: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-family: "Montserrat", sans-serif;
    color: green;
  `;

  return {
    Parragraph,
    Section,
    MarksImages,
    Main,
    Image,
    ImageRounder,
    Mark,
  };
};

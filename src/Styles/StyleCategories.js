import React from "react";
import styled from "styled-components";

export const StyleCategories = () => {
  const Main = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;

    @media (min-width: 760px) {
      display: none;
    }
  `;
  const Image = styled.img`
    width: 50px;
    height: 50px;
  `;

  const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  `;

  const Paragraph = styled.p`
    font-size: 12px;
    font-family: "Montserrat", sans-serif;
    margin-top: 10px;
  `;

  return {
    Main,
    Image,
    Section,
    Paragraph,
  };
};

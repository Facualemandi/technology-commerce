import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyleLogin = () => {
  const Main = styled.main`
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 150px;
    height: 70vh;
    border-radius: 10px;

    @media (min-width: 780px) {
      display: flex;
      flex-direction: row;
    }
  `;

  const Form = styled.form`
    width: 90vw;
    display: flex;
    flex-direction: column;

    @media (min-width: 780px) {
      width: 30vw;
      display: flex;
      justify-content: center;
      height: 300px;
    }
  `;

  const Section = styled.section`
    border: 1px solid rgba(209, 209, 209, 0.567);
    height: auto;
    border-radius: 10px;

    @media (min-width: 780px) {
      height: auto;
      display: flex;
      border-radius: 10px;
      border: 2px solid rgba(209, 209, 209, 0.567);
      width: auto;
    }
  `;

  const Input = styled.input`
    padding: 5px;
    border: 1px solid #ebebeb;
    margin: 5px;
    padding: 10px;
    width: 95%;
    @media (min-width: 780px){
         width: 30vw;
    }
  `;

  const Label = styled.label`
    font-family: "Monserrat", sans-serif;
    margin: 5px;
  `;

  const Buttom = styled.button`
    padding: 10px;
    border-radius: 5px;
    background-color: #badcfb;
    border: none;
    font-family: "Montserrat", sans-serif;
    margin: 5px;
    color: ${({ color }) => color};
    border: ${({ border }) => border};
    cursor: pointer;
    transition: 0.5s;


    @media (min-width: 780px) {
      margin: 5px;
      width: 30vw;

      &&:hover {
        background-color: #a7cff5;
        box-shadow: 0px 0px 5px 0px rgba(135, 135, 135, 0.402);
        transition: 0.5s;
      }
    }
  `;

  const Img = styled.img`
    width: 90vw;
    height: 250px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    @media (min-width: 780px) {
      border-top-right-radius: 0px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      height: 400px;
      width: 30vw;
    }
  `;

  const Paragraph = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: bold;
    margin: 10px auto;
  `;

  const Errors = styled.p`
    color: red;
    font-size: 12px;
    margin-left: 5px;
    font-family: "Roboto", sans-serif;
  `;

  const NoAccounts = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    margin-bottom: 10px;
  `;

  const StyleLink = styled(NavLink)`
    margin-left: 5px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-family: "Roboto", sans-serif;

    &&:hover {
      border-bottom: 1px solid black;
    }
  `;

  const SectionDesktop = styled.section`
    display: flex;
    flex-direction: column;

    margin-left: 10px;
  `;

  return {
    Main,
    Form,
    Section,
    Input,
    Label,
    Buttom,
    Img,
    Paragraph,
    Errors,
    NoAccounts,
    StyleLink,
    SectionDesktop,
  };
};

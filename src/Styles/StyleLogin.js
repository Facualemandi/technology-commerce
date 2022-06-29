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
      height: 270px;
    }
  `;

  const Section = styled.section`
    box-shadow: 0px 0px 10px 0px rgba(26, 26, 26, 0.25);
    height: auto;
    border-radius: 30px;
    padding: 7px;
    background-color: #e4ecf4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 780px) {
      height: auto;
      display: flex;
      border-radius: 30px;
      width: auto;
    }
  `;

  const Input = styled.input`
    padding: 5px;
    border: 1px solid #ebebeb;
    margin: 5px;
    padding: 10px;
    width: 95%;
    border-radius: 10px;
    background-color: #d4dcec;
    margin-bottom: 15px;
    @media (min-width: 780px) {
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
    border: none;
    font-family: "Montserrat", sans-serif;
    margin: 5px;
    color: ${({ color }) => color};
    border: ${({ border }) => border};
    cursor: pointer;
    transition: 0.5s;
    background-color: #44547c;
    border-radius: 10px;
    color: white;

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
    border-radius: 30px;
    margin: 0;

    @media (min-width: 780px) {
      border-radius: 30px;
      height: 400px;
      width: 30vw;
    }
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

  const LoginParragraph = styled.p`
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    color: #44547c;
    margin: 10px;
  `;

  return {
    Main,
    Form,
    Section,
    Input,
    Label,
    Buttom,
    Img,
    Errors,
    NoAccounts,
    StyleLink,
    SectionDesktop,
    LoginParragraph,
  };
};

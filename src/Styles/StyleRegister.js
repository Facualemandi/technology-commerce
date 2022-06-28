import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";


export const StyleRegister = () => {

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
      margin-left: 10px;
    }
  `;

  const Section = styled.section`
    border: 2px solid rgba(209, 209, 209, 0.567);
    height: auto;
    border-radius: 10px;

    @media (min-width: 780px) {
      height: auto;
      display: flex;
      border-radius: 10px;
      border: 2px solid rgba(209, 209, 209, 0.567);
    }
  `;

  const Input = styled.input`
    padding: 5px;
    border: 1px solid #ebebeb;
    margin: 5px;
    padding: 10px;
  `;

  const Label = styled.label`
    font-family: "Roboto", sans-serif;
    margin: 5px;
  `;

  const Buttom = styled.button`
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-family: "Montserrat", sans-serif;
    margin: 5px;
    background-color: #badcfb;
    color: black;

    @media (min-width: 780px) {
      margin: 5px;

      &&:hover {
        background-color: #a7cff5;
        box-shadow: 0px 0px 5px 0px rgba(135, 135, 135, 0.402);
        cursor: pointer;
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
    margin-top: 30px;
  `;

  const Errors = styled.p`
    color: red;
    font-size: 12px;
    margin-left: 5px;
    font-family: "Roboto", sans-serif;
  `;

  const Return = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 5px;
    font-family: "Montserrat", sans-serif;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid rgba(176, 176, 176, 0.55);
    margin-top: 15px;
    text-decoration: none;
    color: black;
    margin: 5px;

    &&:hover {
      box-shadow: 0px 0px 5px 0px rgba(135, 135, 135, 0.402);
      color: black;
      background-color: #eff6fc;
      transition: 0.3s;
    }
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
    Return,
  };
};

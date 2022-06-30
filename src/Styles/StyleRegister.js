import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
      height: 230px;
      margin-left: 10px;
    }
  `;

  const Label = styled.label`
    font-family: "Roboto", sans-serif;
    margin: 5px;
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
    font-family: "Montserrat", sans-serif;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid rgba(176, 176, 176, 0.55);
    margin-top: 15px;
    text-decoration: none;
    color: white;
    margin: 5px;
    background-color: #667cb5;
    border-radius: 10px;
    width: 95%;

    &&:hover {
      box-shadow: 0px 0px 5px 0px rgba(135, 135, 135, 0.402);
      color: black;
      background-color: #eff6fc;
      transition: 0.3s;
    }

    @media (min-width: 780px) {
      width: 100%;
    }
  `;

  const RegParr = styled.p`
    width: 95%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    color: #44547c;
    margin: 10px;

    @media (min-width: 780px) {
      margin-left: 15px;
    }
  `;

  return {
    Main,
    Form,
    Label,
    Paragraph,
    Errors,
    Return,
    RegParr,
  };
};

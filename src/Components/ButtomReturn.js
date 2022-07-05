import React from "react";
import { FcLeft } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Return = styled(FcLeft)`
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(193, 193, 193, 0.667);
  border: 3px solid #d8d9da;
  background-color: #d2d3d4;
  cursor: pointer;
`;



const ButtomReturn = () => {
  return (
    <>
      <NavLink to={'/Home'}>
        <Return>Facu</Return>
      </NavLink>
    </>
  );
};

export default ButtomReturn;

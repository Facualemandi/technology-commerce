import React from "react";
import styled from "styled-components";



const Section = styled.section`
  width: 50%;
  height: 93.6vh;
  position: absolute;
  z-index: 100;
  top: 60px;
  transition: 1s;
  background-color: #13387e;

  @media (min-width: 760px) {
    top: 0px;
    height: 60px;
    width: auto;
  }
`;

const Ul = styled.ul`
  list-style: none;
  font-family: sans-serif;

  @media (min-width: 760px) {
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 60px;
  }
`;

const Li = styled.li`
  padding: 5px;
  border-radius: 5px;
  color: white;
  margin: 10px;
  margin-top: 30px;

  @media (min-width: 760px) {
    &&:hover {
      background-color: #3252a1;
      transition: 0.5s;
      cursor: pointer;
    }
  }
`;

const MenuNav = ({ openMenu }) => {
  return (
    <>
      <Section>
        <Ul>
          <Li>Notebooks</Li>
          <Li>Perifericos</Li>
          <Li>Placas de Video</Li>
          <Li>Monitores</Li>
          <Li>Tablets</Li>
        </Ul>
      </Section>
    </>
  );
};

export default MenuNav;

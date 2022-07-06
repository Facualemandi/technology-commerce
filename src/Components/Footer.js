import React from "react";
import styled from "styled-components";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const FooterContainer = styled.footer`
  width: 100vw;
  height: auto;
  background-color: #37373f;
`;

const H3 = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #7bda92;
  padding: 10px;
`;

const P1 = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 300;
  margin: 15px;
  color: white;
`;

const SectionInput = styled.section`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  border-radius: 5px;
  background-color: white;
  margin: 15px auto;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 70vw;
  border: none;
  outline: none;
  border-radius: 5px;
`;

const IconSend = styled(RiSendPlaneFill)`
  width: 30px;
  height: 30px;
  color: grey;
`;

const SectionOne = styled.section``;
const SectionTwo = styled.section``;

const SectionThree = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  padding: 10px;
`;

const Redes = styled.p`
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 0px 5px 0px rgba(207, 206, 206, 0.476);
  background-color: #474750;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <SectionOne>
          <H3>Atecion al cliente</H3>
          <P1>581310-5135-8292</P1>
          <P1>consultas@consultas@gmail.com</P1>
          <P1>
            WhatsApp +313 131 25540-23939 Lun. a Vie. de 9 a 18h. Sab de 10 a
            14h.
          </P1>

          <H3>PickUp Point</H3>

          <P1>Lun. a Vie. de 10 a 18h.</P1>
        </SectionOne>

        <SectionTwo>
          <P1>Sé el primero en enterarte </P1>
          <P1>Suscribite y recibí las mejores promos! </P1>

          <SectionInput>
            <Input type={"text"} placeholder="ejemplo@gmail.com" />
            <IconSend />
          </SectionInput>
        </SectionTwo>

        <SectionThree>
          <Redes>
            <FaFacebookSquare />
          </Redes>
          <Redes>
            <FaTwitterSquare />
          </Redes>
          <Redes>
            <FaInstagramSquare />
          </Redes>
          <Redes>
            <FaLinkedin />
          </Redes>
          <Redes>
            <FaGithubSquare />
          </Redes>
        </SectionThree>
      </FooterContainer>
    </>
  );
};

export default Footer;

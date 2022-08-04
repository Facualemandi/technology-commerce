import React from "react";
import { useAuth } from "../../Context/authContext";
import conectividadImg from "../../Images/IconsSvg/conectividada.png";
import ssd from "../../Images/IconsSvg/ssd.png";
import thePantalla from "../../Images/IconsSvg/monitor.png";
import theRam from "../../Images/IconsSvg/ram.png";
import theProcesador from "../../Images/IconsSvg/procesador.png";
import theSistem from "../../Images/IconsSvg/window.png";
import Nav from "../../Components/Nav";
import { StyleProduct } from "../../Styles/StyleProduct";
import ModalAddCart from "../../Components/ModalAddCart";
import Footer from "../../Components/Footer";
import ButtomReturn from "../../Components/ButtomReturn";
import { NavLink } from "react-router-dom";

const {
  Main,
  SectionImg,
  Img,
  SectionName,
  Name,
  Price,
  Description,
  SectionDescription,
  SectionItems,
  ImgSvg,
  SectionNameItems,
  ItemName,
  Ul,
  Li,
  SectionButtom,
  Buttom,
  ButtomDesktop,
  SectionDesktopNotebook,
  Return,
  ParragraphRerutn,
  SectionAmount,
  Amount,
  Add,
  Minus,
  SectionAmountDesktop,
} = StyleProduct();

const Notebook = () => {
  const {
    producto,
    amount,
    addAmount,
    deleteAmount,
    addProductCart,
    modalAdd,
  } = useAuth();

  const {
    almacenamiento,
    description,
    name,
    pantalla,
    price,
    procesador,
    ram,
    sistema,
    imgdesk,
    id,
    conectividad,
  } = producto;

  return (
    <>
      <Nav />

      {modalAdd && <ModalAddCart />}
      <Main>
        <SectionDesktopNotebook>
          <SectionImg>
            <Img alt="Notebook" src={imgdesk} />
          </SectionImg>

          <SectionName>
            <Name>{name}</Name>
            <Price>${price}</Price>
            <Description>{description}</Description>

            <ButtomDesktop onClick={() => addProductCart(producto, id)}>
              Comprar
            </ButtomDesktop>
            <SectionAmountDesktop>
              <Minus onClick={deleteAmount}>Minus</Minus>
              <Amount>{amount}</Amount>
              <Add onClick={addAmount}>More</Add>
            </SectionAmountDesktop>
          </SectionName>
        </SectionDesktopNotebook>

        <SectionDescription>
          <SectionItems>
            <SectionNameItems>
              <ImgSvg alt="SSD" src={ssd} />
              <ItemName>Almacenamiento</ItemName>
            </SectionNameItems>

            {almacenamiento === undefined ? (
              <p>No hay especificaciones</p>
            ) : (
              <Ul>
                {almacenamiento.map((item) => (
                  <Li>-{item}</Li>
                ))}
              </Ul>
            )}
          </SectionItems>

          <SectionItems>
            <SectionNameItems>
              <ImgSvg alt="SSD" src={conectividadImg} />
              <ItemName>Conectividad</ItemName>
            </SectionNameItems>
            {conectividad === undefined ? (
              <p>No hay especificaciones</p>
            ) : (
              <Ul>
                {conectividad.map((item) => (
                  <Li>-{item}</Li>
                ))}
              </Ul>
            )}
          </SectionItems>

          <SectionItems>
            <SectionNameItems>
              <ImgSvg alt="SSD" src={theRam} />
              <ItemName>Memoria Ram</ItemName>
            </SectionNameItems>
            {ram === undefined ? (
              <p>No hay especificaciones</p>
            ) : (
              <Ul>
                {ram.map((item) => (
                  <Li>-{item}</Li>
                ))}
              </Ul>
            )}
          </SectionItems>

          <SectionItems>
            <SectionNameItems>
              <ImgSvg alt="SSD" src={thePantalla} />
              <ItemName>Pantalla</ItemName>
            </SectionNameItems>
            {pantalla === undefined ? (
              <p>No hay especificaciones</p>
            ) : (
              <Ul>
                {pantalla.map((item) => (
                  <Li>-{item}</Li>
                ))}
              </Ul>
            )}
          </SectionItems>

          <SectionItems>
            <SectionNameItems>
              <ImgSvg alt="SSD" src={theProcesador} />
              <ItemName>Procesador</ItemName>
            </SectionNameItems>
            {procesador === undefined ? (
              <p>No hay especificaciones</p>
            ) : (
              <Ul>
                {procesador.map((item) => (
                  <Li>-{item}</Li>
                ))}
              </Ul>
            )}
          </SectionItems>

          <SectionItems>
            <SectionNameItems>
              <ImgSvg alt="SSD" src={theSistem} />
              <ItemName>Sistema Operativo</ItemName>
            </SectionNameItems>
            {sistema === undefined ? (
              <p>No hay especificaciones</p>
            ) : (
              <Ul>
                {sistema.map((item) => (
                  <Li>-{item}</Li>
                ))}
              </Ul>
            )}
          </SectionItems>
        </SectionDescription>

        <SectionButtom>
          <SectionAmount>
            <Minus onClick={deleteAmount}>Minus</Minus>
            <Amount>{amount}</Amount>
            <Add onClick={addAmount}>More</Add>
          </SectionAmount>
          <Buttom onClick={() => addProductCart(producto, id)}>Comprar</Buttom>
        </SectionButtom>
        <Footer />
        <NavLink to={"/Notebooks"}>
          <ButtomReturn />
        </NavLink>
      </Main>
    </>
  );
};

export default Notebook;

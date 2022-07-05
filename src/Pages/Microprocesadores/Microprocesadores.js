import React from "react";
import styled from "styled-components";
import Nav from "../../Components/Nav";
import { useAuth } from "../../Context/authContext";
import { useProducts } from "../../Hooks/useProducts";
import Loader from "../../Loader/Loader";
import { StyleHomeProducts } from "../../Styles/StyleHomeProducts";

const {
  Section,
  SectionContianer,
  NameProduct,
  Price,
  Img,
  TheNavLink,
  SectionImg,
} = StyleHomeProducts();

const Parraagraph = styled.p`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  margin: 15px;
  font-family: "Montserrat";
  font-size: 20px;
  color: #303030;
  font-weight: bold;
  margin-top: 70px;
`;

const Microprocesadores = () => {
  const { procesadores, loaging } = useProducts();
  const { handleProduct } = useAuth();

  return (
    <>
      <Nav />

      <Parraagraph>Micro-Procesadores</Parraagraph>
      <SectionContianer>
        {loaging && <Loader />}
        {procesadores.map((product) => (
          <>
            {!loaging && (
             <TheNavLink to={`/Procesador/${product.id}`} key={product.id}>
             <Section onClick={() => handleProduct(product)}>
               <SectionImg>
                 <Img alt={product.name} src={product.img} />
               </SectionImg>
               <Price>${product.price}</Price>
               <NameProduct>{product.name}</NameProduct>
             </Section>
           </TheNavLink>
            )}
          </>
        ))}
      </SectionContianer>
    </>
  );
};

export default Microprocesadores;

import React from "react";
import { useAuth } from "../Context/authContext";
import { useProducts } from "../Hooks/useProducts";
import styled from "styled-components";
import { StyleHomeProducts } from "../Styles/StyleHomeProducts";

const {
  Main,
  Parragraph,
  Section,
  SectionContianer,
  NameProduct,
  Price,
  Img,
  SectionImg,
  TheNavLink,
} = StyleHomeProducts();

const PlacasDeVideo = () => {
  const { placas, loaging } = useProducts();
  const { handleProduct } = useAuth();

  return (
    <Main>
      <Parragraph>Mejora el rendimiento de tus juego</Parragraph>
      <SectionContianer>
        {placas.map((product) => (
          <>
            {!loaging && (
              <TheNavLink to={`/PlacaDeVideo/${product.name}`}>
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
    </Main>
  );
};

export default PlacasDeVideo;

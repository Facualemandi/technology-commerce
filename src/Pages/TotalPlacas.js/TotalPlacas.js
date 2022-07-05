import React, { useEffect, useState } from "react";
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
  text-align: center;
  margin: 15px;
  font-family: "Montserrat";
  font-size: 20px;
  color: #303030;
  font-weight: bold;
  margin-top: 70px;
`;

const TotalPlacas = () => {
  const [allPlacas, setAllPlacas] = useState([]);
  const { placas, isPagePlacas, loaging } = useProducts();
  const { handleProduct } = useAuth();

  useEffect(() => {
    setAllPlacas([...placas, ...isPagePlacas]);
  }, [placas, isPagePlacas]);

  return (
    <>
      <Nav />
      <Parraagraph>
        Elegí la mejor placa de video para el rendimiento de tu juego
      </Parraagraph>
      <SectionContianer>
        {loaging && <Loader />}
        {allPlacas.map((placa) => (
          <>
            {!loaging && (
              <TheNavLink to={`/PlacaDeVideo/${placa.name}`}>
                <Section onClick={() => handleProduct(placa)}>
                  <SectionImg>
                    <Img alt={placa.name} src={placa.img} />
                  </SectionImg>
                  <Price>${placa.price}</Price>
                  <NameProduct>{placa.name}</NameProduct>
                </Section>
              </TheNavLink>
            )}
          </>
        ))}
      </SectionContianer>
    </>
  );
};

export default TotalPlacas;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ButtomReturn from "../../Components/ButtomReturn";
import Footer from "../../Components/Footer";
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
  margin-top: 100px;
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
        {allPlacas.map((product) => (
          <>
            {!loaging && (
              <TheNavLink to={`/PlacaDeVideo/${product.name}`} key={product.id}>
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
      <NavLink to={"/Home"}>
        <ButtomReturn />
      </NavLink>

      {!loaging && <Footer />}
    </>
  );
};

export default TotalPlacas;

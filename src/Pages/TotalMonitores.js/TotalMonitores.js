import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../../Components/Nav";
import { useAuth } from "../../Context/authContext";
import { useProducts } from "../../Hooks/useProducts";
import Loader from "../../Loader/Loader";
import { StyleHomeProducts } from "../../Styles/StyleHomeProducts";
import { FcLeft } from "react-icons/fc";
import ButtomReturn from "../../Components/ButtomReturn";

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
const Return = styled(FcLeft)`
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(193, 193, 193, 0.667);
  border: 3px solid #7b9cee;
  background-color: #e1e6ff;
`;

function TotalMonitores() {
  const [allMonitores, setAllMonitores] = useState([]);
  const { monitores, isPageMonitor, loaging } = useProducts();
  const { handleProduct } = useAuth();

  useEffect(() => {
    setAllMonitores([...monitores, ...isPageMonitor]);
  }, [isPageMonitor, monitores]);

  return (
    <>
      <Nav />
      <Parraagraph>Mejorá la calidaad con los mejores monitores</Parraagraph>
      <SectionContianer>
        {loaging && <Loader />}
        {allMonitores.map((mon) => (
          <>
            {!loaging && (
              <TheNavLink to={`/Monitor/${mon.name}`} key={mon.id}>
                <Section onClick={() => handleProduct(mon)}>
                  <SectionImg>
                    <Img alt={mon.name} src={mon.img} />
                  </SectionImg>
                  <Price>${mon.price}</Price>
                  <NameProduct>{mon.name}</NameProduct>
                </Section>
              </TheNavLink>
            )}
          </>
        ))}  

        <ButtomReturn/>
      </SectionContianer>
    </>
  );
}

export default TotalMonitores;

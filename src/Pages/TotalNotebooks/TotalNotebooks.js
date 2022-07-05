import { async } from "@firebase/util";
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
  margin: 15px;
  font-family: "Montserrat";
  font-size: 20px;
  color: #303030;
  font-weight: bold;
  margin-top: 70px;
`;

const TotalNotebooks = () => {
  const [allNotebooks, setAllNotebooks] = useState([]);
  const { notebook, isPageNotebook, loaging } = useProducts();
  const { handleProduct } = useAuth();

  useEffect(() => {
    setAllNotebooks([...notebook, ...isPageNotebook]);
  }, [isPageNotebook, notebook]);

  return (
    <>
      <Nav />
      <Parraagraph>Las mejores Notebooks al mejor precio!</Parraagraph>
      <SectionContianer>
       {loaging &&  <Loader />}
        {allNotebooks.map((note) => (
          <>
            {!loaging && (
              <TheNavLink to={`/Notebook/${note.name}`}>
                <Section onClick={() => handleProduct(note)}>
                  <SectionImg>
                    <Img alt={note.name} src={note.img} />
                  </SectionImg>
                  <Price>${note.price}</Price>
                  <NameProduct>{note.name}</NameProduct>
                </Section>
              </TheNavLink>
            )}
          </>
        ))}
      </SectionContianer>
    </>
  );
};

export default TotalNotebooks;

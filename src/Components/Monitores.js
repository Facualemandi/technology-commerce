import React from "react";
import { useProducts } from "../Hooks/useProducts";
import Loader from "../Loader/Loader";
import { StyleHomeProducts } from "../Styles/StyleHomeProducts";

const { Main, Parragraph, Section, SectionContianer, NameProduct, Price, Img } =
  StyleHomeProducts();

const Monitores = ({ loaging }) => {
    const {monitores} = useProducts();
    
  return (
    <Main>
      <Parragraph>Resolución al Máximo!</Parragraph>

      <SectionContianer>
        {monitores.map((note) => (
          <>
            {loaging && <Loader />}

            {!loaging && (
              <Section>
                <Img alt={note.name} src={note.img} />
                <Price>${note.price}</Price>
                <NameProduct>{note.name}</NameProduct>
              </Section>
            )}
          </>
        ))}
      </SectionContianer>
    </Main>
  );
};

export default Monitores;

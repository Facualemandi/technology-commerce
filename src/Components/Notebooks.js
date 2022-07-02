import React from "react";
import { useAuth } from "../Context/authContext";
import { useProducts } from "../Hooks/useProducts";
import Loader from "../Loader/Loader";
import { StyleHomeProducts } from "../Styles/StyleHomeProducts";
import { NavLink } from "react-router-dom";

const {
  Main,
  Parragraph,
  Section,
  SectionContianer,
  NameProduct,
  Price,
  Img,
  TheNavLink,
} = StyleHomeProducts();

const Notebooks = () => {
  const { notebook, loaging } = useProducts();
  const { handleProduct } = useAuth();

  return (
    <Main>
      <Parragraph>Elegí la mejor Notebook para trabajar o jugar!</Parragraph>

      <SectionContianer>
        {loaging && <Loader />}
        {notebook.map((note) => (
          <>
            {!loaging && (
              <TheNavLink to={`/Notebook/${note.name}`}>
                <Section onClick={() => handleProduct(note)}>
                  <Img alt={note.name} src={note.img} />
                  <Price>${note.price}</Price>
                  <NameProduct>{note.name}</NameProduct>
                </Section>
              </TheNavLink>
            )}
          </>
        ))}
      </SectionContianer>
    </Main>
  );
};

export default Notebooks;

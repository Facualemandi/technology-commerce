import React from "react";
import { useAuth } from "../Context/authContext";
import { useProducts } from "../Hooks/useProducts";
import Loader from "../Loader/Loader";
import { StyleHomeProducts } from "../Styles/StyleHomeProducts";

const {
  Main,
  Parragraph,
  Section,
  SectionContianer,
  NameProduct,
  Price,
  Img,
  TheNavLink,
  SectionImg,
} = StyleHomeProducts();

const Notebooks = () => {
  const { notebook, loaging } = useProducts();
  const { handleProduct } = useAuth();

  return (
    <Main>
      {loaging && <Loader />}

      {!loaging && (
        <>
        <Parragraph>Elegí la mejor Notebook para trabajar o jugar!</Parragraph>
          <SectionContianer>
            {notebook.map((note) => (
              <>
                <TheNavLink to={`/Notebook/${note.name}`}>
                  <Section onClick={() => handleProduct(note)}>
                    <SectionImg>
                      <Img alt={note.name} src={note.img} />
                    </SectionImg>
                    <Price>${note.price}</Price>
                    <NameProduct>{note.name}</NameProduct>
                  </Section>
                </TheNavLink>
              </>
            ))}
          </SectionContianer>
        </>
      )}
    </Main>
  );
};

export default Notebooks;

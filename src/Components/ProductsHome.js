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
  SectionImg,
  TheNavLink,
} = StyleHomeProducts();
const ProductsHome = () => {
  const { notebook, placas, monitores, loaging } = useProducts();
  const { handleProduct } = useAuth();

  return (
    <>
      <Main>
        {loaging && <Loader />}

        {!loaging && (
          <>
            <Parragraph>
              Elegí la mejor Notebook para trabajar o jugar!
            </Parragraph>
            <SectionContianer>
              {notebook.map((note) => (
                <>
                  <TheNavLink key={note.id} to={`/Notebook/${note.name}`}>
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


            <Parragraph>Mejora el rendimiento de tus juego</Parragraph>
            <SectionContianer>
              {placas.map((placas) => (
                <>
                  {!loaging && (
                    <TheNavLink
                      key={placas.id}
                      to={`/PlacaDeVideo/${placas.name}`}
                    >
                      <Section onClick={() => handleProduct(placas)}>
                        <SectionImg>
                          <Img alt={placas.name} src={placas.img} />
                        </SectionImg>
                        <Price>${placas.price}</Price>
                        <NameProduct>{placas.name}</NameProduct>
                      </Section>
                    </TheNavLink>
                  )}
                </>
              ))}
            </SectionContianer>


            <Parragraph>Resolución al Máximo!</Parragraph>
            <SectionContianer>
              {monitores.map((product) => (
                <>
                  {!loaging && (
                    <TheNavLink
                      key={product.id}
                      to={`/Monitor/${product.name}`}
                    >
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
        )}
      </Main>
    </>
  );
};

export default ProductsHome;

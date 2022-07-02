import React from "react";
import { useAuth } from "../Context/authContext";
import { useProducts } from "../Hooks/useProducts";
import Loader from "../Loader/Loader";
import { StyleHomeProducts } from "../Styles/StyleHomeProducts";

const { Main, Parragraph, Section, SectionContianer, NameProduct, Price, Img } =
  StyleHomeProducts();

const Monitores = () => {
  const { monitores, loaging } = useProducts();
  const { handleProduct } = useAuth();

  return (
    <Main>
      <Parragraph>Resolución al Máximo!</Parragraph>

      <SectionContianer>
        {monitores.map((product) => (
          <>
            {!loaging && (
              <Section onClick={() => handleProduct(product)}>
                <Img alt={product.name} src={product.img} />
                <Price>${product.price}</Price>
                <NameProduct>{product.name}</NameProduct>
              </Section>
            )}
          </>
        ))}
      </SectionContianer>
    </Main>
  );
};

export default Monitores;

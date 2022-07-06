import React, { useState } from "react";
import { useAuth } from "../Context/authContext";

const Search = () => {
  const { product } = useAuth();
  
  const [search, setSearch] = useState("");

  const onSearchValue = (e) => {
    setSearch({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <input
        type={"text"}
        name="producto"
        placeholder="Ingresa el nombre del producto"
        onChange={onSearchValue}
      />
    </>
  );
};

export default Search;

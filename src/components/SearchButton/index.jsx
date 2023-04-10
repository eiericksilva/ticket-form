import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./SearchButton";

const SearchButton = () => {
  return (
    <Container>
      <button>
        <AiOutlineSearch size={20} /> Buscar
      </button>
    </Container>
  );
};

export default SearchButton;

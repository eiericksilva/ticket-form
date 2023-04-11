import React from "react";

import { Container, ItemButton, ListButton, Title } from "./Header";

import { BsAirplane } from "react-icons/bs";
import { BiBed } from "react-icons/bi";

const Header = () => {
  return (
    <Container>
      <Title>Passagens aéreas</Title>
      <ListButton>
        <ItemButton href="#">Ida e Volta</ItemButton>
        <ItemButton href="#">Só Ida</ItemButton>
        <ItemButton href="#">Multidestino</ItemButton>
        <hr />
        <ItemButton href="#">
          <BsAirplane /> Voo + <BiBed /> Hospedagem
        </ItemButton>
      </ListButton>
    </Container>
  );
};

export default Header;

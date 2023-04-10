import React from "react";

import { Button, Container, ContainerButton, Title } from "./Header";

import { BsAirplane } from "react-icons/bs";
import { BiBed } from "react-icons/bi";

const Header = () => {
  return (
    <Container>
      <Title>Passagens aéreas</Title>
      <ContainerButton>
        <Button>Ida e Volta</Button>
        <Button> Só ida</Button>
        <Button>Multidestino</Button>
        <hr />
        <Button>
          <BsAirplane /> Voo + <BiBed />
          Hospedagem
        </Button>
      </ContainerButton>
    </Container>
  );
};

export default Header;

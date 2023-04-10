import React from "react";
import { Container, ContainerSwitch } from "./Body";

import OriginDestiny from "../Inputs/OriginDestiny";
import Datas from "../Inputs/Datas";
import SearchButton from "../SearchButton";
import PassengersAndClasses from "../Inputs/PassengersAndClasses";

const Body = () => {
  return (
    <Container>
      <OriginDestiny />
      <Datas />
      <PassengersAndClasses />
      <ContainerSwitch>
        <button>toggle</button>
        <span>Buscar pela data mais barata</span>
      </ContainerSwitch>
      <SearchButton />
    </Container>
  );
};

export default Body;

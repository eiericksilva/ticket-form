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
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle">Buscar pela data mais barata</label>
      </ContainerSwitch>
      <SearchButton />
    </Container>
  );
};

export default Body;

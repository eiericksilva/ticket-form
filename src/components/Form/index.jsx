import React from "react";
import { Background, Container } from "./Form";

import Header from "../Header";
import Body from "../Body";

const Form = () => {
  return (
    <Background>
      <Container>
        <Header />
        <Body />
      </Container>
    </Background>
  );
};

export default Form;

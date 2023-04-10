import React from "react";
import { Bottom, Container } from "./PassengersAndClasses";
import { BsPerson } from "react-icons/bs";

const PassengersAndClasses = () => {
  return (
    <Container>
      <label htmlFor="passenger-classes">PASSAGEIROS E CLASSES</label>
      <Bottom>
        <div className="BsPerson">
          <BsPerson />
        </div>
        <input id="passenger-classes" value="1 pessoa..." readOnly />
      </Bottom>
    </Container>
  );
};

export default PassengersAndClasses;

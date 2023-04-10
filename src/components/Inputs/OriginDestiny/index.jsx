import React from "react";
import {
  BottomOfDestiny,
  BottomOfOrigin,
  Container,
  Destiny,
  Origin,
} from "./OriginDestiny";
import { ImRadioUnchecked } from "react-icons/im";
import { BsArrowLeftRight } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

const OriginDestiny = () => {
  return (
    <Container>
      <Origin>
        <label htmlFor="origin">ORIGEM</label>
        <BottomOfOrigin>
          <ImRadioUnchecked />
          <input
            id="origin"
            type="text"
            placeholder="Insira sua cidade de origem"
          />
        </BottomOfOrigin>
      </Origin>
      <div className="BsArrowLeftRight">
        <BsArrowLeftRight />
      </div>
      <Destiny>
        <label htmlFor="destiny">DESTINO</label>
        <BottomOfDestiny>
          <HiOutlineLocationMarker />
          <input
            id="destiny"
            type="text"
            placeholder="Insira sua cidade de destino"
          />
        </BottomOfDestiny>
      </Destiny>
    </Container>
  );
};

export default OriginDestiny;

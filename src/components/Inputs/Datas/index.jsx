import React from "react";
import { Bottom, Container, Going, Return } from "./Data";

import { BsFillCalendarFill } from "react-icons/bs";

const Datas = () => {
  return (
    <Container>
      <Going>
        <label htmlFor="data">DATAS</label>
        <Bottom>
          <BsFillCalendarFill />
          <input id="data" type="data" placeholder="Ida" />
        </Bottom>
      </Going>
      <Return>
        <input type="text" placeholder="Volta" />
      </Return>
    </Container>
  );
};

export default Datas;

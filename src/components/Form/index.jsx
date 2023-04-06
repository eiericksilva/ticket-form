import React from "react";
import {
  Background,
  Body,
  Button,
  ButtonGroup,
  Container,
  Header,
} from "./Form";

import { BsAirplane } from "react-icons/bs";
import { BiBed } from "react-icons/bi";

const Form = () => {
  return (
    <Background>
      <Container>
        <Header>
          <h1>Passagens aéreas</h1>
          <ButtonGroup>
            <Button>Ida e Volta</Button>
            <Button> Só ida</Button>
            <Button>Multidestino</Button>
            <hr />
            <Button>
              <BsAirplane /> Voo + <BiBed />
              Hospedagem
            </Button>
          </ButtonGroup>
        </Header>
        <Body>
          <div className="container-od">
            <div className="origin">
              <input type="text" placeholder="Insira sua cidade de origem" />
            </div>
            <button className="btn-toggle-od">x</button>
            <div className="destiny">
              <input type="text" placeholder="Insira sua cidade de destino" />
            </div>
          </div>
          {/* fim origem destino */}
          <div className="container-datas">
            <div className="going">
              <input type="data" placeholder="Ida" />
            </div>
            <div className="return">
              <input type="text" placeholder="Volta" />
            </div>
          </div>
          {/* fim datas */}
          <div className="passengers-classes">
            <input type="select" value="1 pessoa..." readOnly />
          </div>
          {/* fim passengers e classes */}
          <div className="containerSwitch">
            <button>toggle</button>
            <span>Buscar pela data mais barata</span>
          </div>
          <></>
          <button>Buscar</button>
        </Body>
      </Container>
    </Background>
  );
};

export default Form;

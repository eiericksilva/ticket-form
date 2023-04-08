import React from "react";
import {
  Background,
  Body,
  BottomOfDestiny,
  BottomOfGoing,
  BottomOfOrigin,
  Button,
  ButtonGroup,
  Container,
  ContainerDatas,
  ContainerDestiny,
  ContainerGoing,
  ContainerOrigin,
  ContainerOriginDestiny,
  ContainerPassengersAndClasses,
  ContainerReturn,
  ContainerSwitch,
  Footer,
  Header,
} from "./Form";

import { BsAirplane } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { BsArrowLeftRight } from "react-icons/bs";
import { ImRadioUnchecked } from "react-icons/im";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";

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
          <ContainerOriginDestiny>
            <ContainerOrigin>
              <label htmlFor="origin">ORIGEM</label>
              <BottomOfOrigin>
                <ImRadioUnchecked />
                <input
                  id="origin"
                  type="text"
                  placeholder="Insira sua cidade de origem"
                />
              </BottomOfOrigin>
            </ContainerOrigin>
            <BsArrowLeftRight className="BsArrowLeftRight" />
            <ContainerDestiny>
              <label htmlFor="destiny">DESTINO</label>
              <BottomOfDestiny>
                <HiOutlineLocationMarker />
                <input
                  id="destiny"
                  type="text"
                  placeholder="Insira sua cidade de destino"
                />
              </BottomOfDestiny>
            </ContainerDestiny>
          </ContainerOriginDestiny>
          <ContainerDatas>
            <ContainerGoing>
              <label htmlFor="data">DATAS</label>
              <BottomOfGoing>
                <BsFillCalendarFill />
                <input id="data" type="data" placeholder="Ida" />
              </BottomOfGoing>
            </ContainerGoing>
            <ContainerReturn>
              <input type="text" placeholder="Volta" />
            </ContainerReturn>
          </ContainerDatas>
          <ContainerPassengersAndClasses>
            <input type="select" value="1 pessoa..." readOnly />
          </ContainerPassengersAndClasses>
          <ContainerSwitch>
            <button>toggle</button>
            <span>Buscar pela data mais barata</span>
          </ContainerSwitch>
          <Footer>
            <button>Buscar</button>
          </Footer>
        </Body>
      </Container>
    </Background>
  );
};

export default Form;

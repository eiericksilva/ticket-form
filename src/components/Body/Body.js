import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "a11 a12 a13 a14"
    "a21 a22 a23 a24";

  @media (max-width: 1024px) {
    grid-template-areas:
      "a11 a12"
      "a21 a22"
      "a31 a32"
      "a41 a42"
      "a51 a52";
  }
  gap: 10px;
`;

export const ContainerSwitch = styled.div`
  grid-area: a22;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    grid-area: a31;
    grid-column: 1 / -1;
  }

  input {
    position: relative;
    width: 34px;
    height: 18px;
    appearance: none;
    background-color: #666666;
    border-radius: 24px;
    transition: 0.2s;

    &::before {
      content: "";
      width: 17px;
      height: 17px;
      background-color: #fff;
      border-radius: 8px;

      position: absolute;
      top: 0;
      left: 0;
    }

    &:hover {
      background-color: #444444;
      cursor: pointer;
    }

    &:checked {
      background-color: #4200d0;

      &:before {
        left: 17px;
      }
    }
  }

  label {
    font-size: 14px;
    font-family: "Rubik";
    font-weight: 300;
    padding-left: 10px;
    cursor: pointer;
  }
`;

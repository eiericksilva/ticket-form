import styled from "styled-components";

export const Container = styled.div`
  grid-area: a14;
  align-self: center;

  @media (max-width: 1024px) {
    grid-area: a52;
    justify-self: end;
  }
  @media (max-width: 768px) {
    grid-area: a51;
    grid-column: 1/3;
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;

    min-height: 48px;
    min-width: 86px;
    border-radius: 24px;
    background-color: #fa503f;
    color: #fff;
    border: none;

    box-sizing: border-box;
    padding: 0 20px;

    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
    }

    &:hover {
      cursor: pointer;
      background-color: #e12b19;
    }
  }
  svg {
    margin-right: 4px;
  }
`;

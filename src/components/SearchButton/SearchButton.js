import styled from "styled-components";

export const Container = styled.div`
  grid-column: a14;
  grid-row: a11;
  align-self: center;

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

    &:hover {
      cursor: pointer;
      background-color: #e12b19;
    }
  }
  svg {
    margin-right: 4px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  grid-area: a12;
  display: flex;
  min-width: 272px;
  align-items: center;
  height: 60px;
  border-radius: 6px;
  background-color: #fff;

  @media (max-width: 1024px) {
    grid-area: a21;
    grid-column: 1 / -1;
  }
`;

export const Going = styled.div`
  width: 50%;
  height: 100%;
  border-right: 1px solid #cccccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    padding-left: 20px;
  }

  label {
    font-size: 10px;
    color: #888888;
    margin: 12px 0 4px 18px;
  }
`;

export const Return = styled.div`
  width: 50%;
  padding-top: 16px;
  height: 100%;
  border-left: 1px solid #cccccc;
  padding: 10px;
  display: flex;
  align-items: end;

  @media (max-width: 1024px) {
    padding-left: 20px;
  }

  input {
    border: none;
    width: 100%;
    outline: none;
    padding-left: 20px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    color: #444444;
  }

  input {
    border: none;
    width: 100%;
    padding-left: 10px;
    outline: none;
  }
`;

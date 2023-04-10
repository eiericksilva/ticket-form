import styled from "styled-components";

export const Container = styled.div`
  grid-column: a13;
  height: 60px;
  min-width: 174px;
  background-color: #fff;
  color: #000;
  border-radius: 6px;
  padding-left: 10px;
  padding-top: 10px;

  label {
    font-size: 10px;
    color: #888888;
    margin: 12px 0 4px 2px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;

  .BsPerson {
    padding-left: 4px;
    display: flex;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    text-overflow: ellipsis;
    padding-left: 4px;
    font-weight: 700;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  grid-column: a11;
  display: flex;
  min-width: 392px;
  height: 60px;
  border-radius: 6px;
  color: #000;
  background-color: #fff;

  align-items: center;

  .BsArrowLeftRight {
    font-size: 32px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;

    svg {
      width: 32px;
    }
  }

  label {
    font-size: 10px;
    color: #888888;
    margin: 12px 0 4px 42px;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    text-overflow: ellipsis;
  }
`;

export const Origin = styled.div`
  max-width: 50%;
`;

export const BottomOfOrigin = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 20px;
`;

export const Destiny = styled.div`
  label {
    margin: 12px 0 4px 20px;
  }
`;

export const BottomOfDestiny = styled.div`
  display: flex;
  gap: 10px;
`;

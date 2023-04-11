import styled from "styled-components";

export const Container = styled.div`
  grid-area: a11;
  display: flex;
  min-width: 392px;
  width: 100%;
  height: 60px;
  border-radius: 6px;
  color: #000;
  background-color: #fff;
  align-items: center;

  @media (max-width: 1024px) {
    grid-area: a11;
    grid-column: 1 / -1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 120px;

    .BsArrowLeftRight {
      align-items: end;
      margin-left: 250px;
    }
  }

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
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BottomOfOrigin = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 20px;
`;

export const Destiny = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 35px;

    .HiOutlineLocationMarker {
      padding-left: 20px;
    }

    label {
      padding-left: 2px;
    }
  }
  label {
    margin: 12px 0 4px 20px;
  }
`;

export const BottomOfDestiny = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  @media (max-width: 768px) {
    input {
      max-width: 500px;
    }
  }
`;

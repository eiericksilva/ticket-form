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

  position: relative;

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

    z-index: 10;
    position: absolute;
    left: 46%;

    @media (max-width: 1024px) {
      left: 48%;
    }

    @media (max-width: 768px) {
      left: 70px;
      top: 35%;
    }

    svg {
      width: 32px;
    }
  }

  label {
    font-size: 10px;
    color: #888888;
  }

  input {
    border: none;
    outline: none;
    width: 75%;
    text-overflow: ellipsis;
  }
`;

export const Origin = styled.div`
  width: 50%;
  border-right: 1px solid #cccccc;
  height: 100%;
  padding-top: 15px;

  label {
    margin: 12px 0 4px 42px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    border-bottom: 1px solid #cccccc;
    border-right: none;
  }
`;

export const Destiny = styled.div`
  width: 50%;
  height: 100%;
  border-left: 1px solid #cccccc;
  padding: 15px 0 0 18px;

  label {
    margin: 12px 0 4px 42px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    padding-left: 18px;
    padding-top: 10px;
    border-left: none;

    border-top: 1px solid #cccccc;

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

export const BottomOfOrigin = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 20px;
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

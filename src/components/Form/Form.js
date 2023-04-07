import styled from "styled-components";

export const Background = styled.div`
  background-color: #8956f8;
  width: 100%;
  min-height: 240px;
  padding: 20px 0;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #270570;
  width: 80%;
  padding: 24px;
  border-radius: 8px;

  color: #fff;
  margin: 0 auto;

  h1 {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    margin-right: 31px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;

export const ButtonGroup = styled.div`
  display: flex;

  hr {
    margin-right: 8px;
    border: 1px solid #fff;
  }
`;

export const Body = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 0 16px 0 16px;
  height: 36px;
  margin-right: 8px;
  background-color: transparent;
  border: 1px solid #fff;

  font-size: 14px;
  font-weight: 500;
  color: #fff;
  border-radius: 24px;

  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background-color: #fff;
    color: #270570;
    cursor: pointer;
  }
`;

export const ContainerOriginDestiny = styled.div`
  display: flex;
  width: 392px;
  height: 60px;
  color: #000;
  background-color: #fff;
  border-radius: 6px;

  align-items: center;

  .BsArrowLeftRight {
    font-size: 32px;
    border: 1px solid #808080;
    cursor: pointer;
    border-radius: 4px;
    background-color: #fff;
  }

  label {
    font-size: 10px;
    color: #888888;
    margin: 12px 0 4px 42px;
  }

  input {
    border: none;
    text-overflow: ellipsis;
    outline: none;

    &::placeholder {
    }
  }
`;

export const ContainerOrigin = styled.div`
  max-width: 50%;
  border-right: 1px solid #ccc;
`;

export const BottomOfOrigin = styled.div`
  display: flex;
`;

export const ContainerDestiny = styled.div`
  border-left: 1px solid #ccc;
`;

export const BottomOfDestiny = styled.div`
  display: flex;
`;
export const ContainerDatas = styled.div`
  display: flex;
  width: 392px;
`;

export const ContainerGoing = styled.div``;

export const ContainerReturn = styled.div``;

export const ContainerPassengersAndClasses = styled.div``;

export const ContainerSwitch = styled.div`
  width: 100%;
`;

export const Footer = styled.div``;

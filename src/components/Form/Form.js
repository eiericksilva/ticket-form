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

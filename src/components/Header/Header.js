import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1``;

export const ContainerButton = styled.div`
  display: flex;

  hr {
    margin-right: 8px;
    border: 1px solid #fff;
  }
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

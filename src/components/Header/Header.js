import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: start;

    h1 {
      margin-bottom: 10px;
    }
  }
`;

export const Title = styled.h1``;

export const ListButton = styled.ul`
  display: flex;
  hr {
    margin-right: 8px;
    border: 1px solid #fff;
  }
`;

export const ItemButton = styled.a`
  padding: 0 16px 0 16px;
  height: 36px;
  margin-right: 8px;
  background-color: transparent;
  border: 1px solid #fff;
  font-size: 14px;
  font-weight: 500;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #270570;
  }
`;

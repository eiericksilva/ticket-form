import styled from "styled-components";

export const Background = styled.div`
  background-color: #8956f8;
  min-width: 100%;
  min-height: 240px;
  padding: 20px 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 0;
  }

  @media (max-width: 768px) {
  }
`;

export const Container = styled.div`
  background-color: #270570;
  max-width: 1062px;
  min-height: 206px;
  padding: 24px;
  border-radius: 8px;

  color: #fff;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }

  h1 {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    margin-right: 31px;
  }
`;

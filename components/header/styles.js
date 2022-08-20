import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px 100px;
  justify-content: space-between;
  color: white;
  align-items: center;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
    padding: 20px;
  }
`;

export const Logo = styled.a`
  font-size: 36px;
  font-weigth: 700;
  color: #fff;
  text-decoration: none;

  &:active {
    color: #27ae60;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 40px;

  //   @media (max-width: 750px) {
  //     visibility: hidden;
  //   }
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  transition: 150ms;

  &:hover {
    color: #27ae60;
  }

  &:active {
    color: #27ae60;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5%;

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: 75px;
    margin-top: 7%;
`;

export const Circle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CircleLarge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #212121;
`;

export const Circlemini = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #27ae60;
  transition: 1500ms;

  &:hover {
    width: 100%;
    height: 100%;
  }
`;

export const Circlemini1 = styled.div`
  visibility: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  &:hover {
    width: 25%;
    height: 25%;
    background-color: #212121;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export const Title = styled.p`
  user-select: none;
  color: #fff;
  font-weight: bold;
  margin-bottom: 1px;
`;

export const Subtitle = styled.p`
  color: #fff;
  margin: 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: 100ms;

  &:hover {
    color: #27ae60;
  }
`;

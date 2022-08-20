import styled from "styled-components";

export const Container = styled.div`
  margin: 15% 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const Main = styled.h4`
  user-select: none;
  color: #fff;
  margin-bottom: 5%;
  color: #fff;
  font-size: 50px;
  align-items: center;
  font-weight: bold;
`;

export const Content = styled.div`
  width: 90%;
  background-color: #212121;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1070px) {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #212121;
  gap: 15px;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 72px;
  text-align: center;
  line-height: 95px;
  font-weight: bold;
  color: #4f4f4f;
  transition: 100ms;

  &:hover {
    letter-spacing: 5px;
  }

  @media (max-width: 850px) {
    font-size: 65px;
  }

  @media (max-width: 500px) {
    font-size: 50px;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  color: #27ae60;
  font-size: 25px;
  font-height: 30px;
  font-weight: 700;
  transition: 100ms;

  &:hover {
    letter-spacing: 5px;
  }

  @media (max-width: 850px) {
    font-size: 22px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

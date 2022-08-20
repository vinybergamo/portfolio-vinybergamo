import styled from "styled-components";

export const Container = styled.div`
  padding-top: 2%;
  height: 85vh;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: start;
  margin-bottom: 5%;

  @media (max-width: 900px) {
    margin-top: 25%;
    margin-bottom: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 550px) {
    margin-top: 40%;
    margin-bottom: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    margin-top: 20%;
    margin-bottom: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  @media (max-width: 900px) {
    margin-bottom: 10%;
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  padding-bottom: 0px;
  margin-bottom: 5%;

  @media (max-width: 550px) {
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  color: #828282;
  font-size: 18px;
  margin-bottom: 4%;
  user-select: none;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
export const Button1 = styled.a`
  text-decoration: none;
  color: #fff;
  width: 25%;
  text-align: center;
  border: 1px solid #27ae60;
  padding: 12px 25px;
  background-color: #27ae60;
  // border-radius: 5px;
  transition: 100ms;
  cursor: pointer;

  &:hover {
    width: 27%;
  }

  @media (max-width: 550px) {
    width: 65%;
    font-size: 15px;
  }
`;

export const Button2 = styled.a`
  width: 25%;
  text-decoration: none;
  text-align: center;
  color: #fff;
  text-align: center;
  border: 1px solid #fff;
  padding: 12px 25px;
  // border-radius: 5px;
  transition: 100ms;
  cursor: pointer;

  &:hover {
    width: 27%;
  }

  @media (max-width: 550px) {
    width: 65%;
    font-size: 15px;
  }
`;

export const Span = styled.span`
  position: relative;
  text-align: center;
  top: 3px;
  left: -25px;
`;

export const Image = styled.img`
  pointer-event: none;
  user-drag: none;
  user-select: none;
  width: 350px;

  @media (max-width: 350px) {
    display: none;
  }
`;

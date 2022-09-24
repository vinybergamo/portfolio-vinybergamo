import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 750px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h4`
  color: #fff;
  font-size: 50px;
  align-items: center;
  font-weight: bold;

  @media (max-width: 450px) {
    font-size: 40px;
  }

  @media (max-width: 350px) {
    font-size: 30px;
  }

  @media (max-width: 275px) {
    font-size: 25px;
  }

  @media (max-width: 250px) {
    font-size: 20px;
  }
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 750px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media (max-width: 750px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0px;
  }
`;

export const Input = styled.input`
  margin-top: 30px;
  width: 300px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #4f4f4f;
  color: #fff;

  @media (max-width: 750px) {
    width: 100%;
  }

  &:focus {
    border: none;
    border-bottom: 2px solid #27ae60;
    outline: none;
  }
`;

export const Br = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    width: 75%;
  }
`;

export const Area = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
  }
`;

export const Textarea = styled.textarea`
  color: #fff;
  width: 670px;
  margin-top: 30px;
  background: transparent;
  border: 1px solid #4f4f4f;
  border-bottom: 2px solid #4f4f4f;
  outline: none;

  &:focus {
    border: 2px solid #27ae60;
    outline: none;
  }
  @media (max-width: 750px) {
    width: 75%;
  }
`;

export const Button = styled.button`
  color: #fff;
  font-size: 20px;
  font-family: "DM Sans";
  width: 35%;
  text-align: center;
  border: 1px solid #27ae60;
  padding: 12px 25px;
  background-color: #27ae60;
  // border-radius: 5px;
  transition: 100ms;
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }

  @media (max-width: 550px) {
    width: 65%;
    font-size: 15px;
  }

  @media (max-width: 950px) {
    width: 50%;
  }
`;

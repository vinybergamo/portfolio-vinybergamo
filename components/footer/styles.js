import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  user-select: none;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  left: 0;
  right: 0;
`;
export const Text = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center
  text-decoration: none;
  color: #4f4f4f;
  transition: 100ms;
  user-drag: none;

  &:hover {
    color: #27ae60;
  }
`;

import styled from "styled-components";

export const Spinner = styled.div`
  justify-self: center;
  align-self: center;
  border: 16px solid #212121;
  border-top: 16px #27ae60 solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

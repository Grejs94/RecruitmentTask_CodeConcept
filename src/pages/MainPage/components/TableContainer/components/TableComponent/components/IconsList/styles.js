import styled from "styled-components";

export const Wrapper = styled.div`
  @media (min-width: 500px) {
    display: flex;
    justify-content: center;
  }
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 25px;
  height: 25px;
  border: none;
  padding: 0;

  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;

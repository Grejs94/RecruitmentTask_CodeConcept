import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 25px;
  height: 25px;

  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;

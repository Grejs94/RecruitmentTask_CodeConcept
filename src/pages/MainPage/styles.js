import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: center;
  background: red;

  @media (max-width: 800px) {
    display: block;
    background: red;
  }
`;

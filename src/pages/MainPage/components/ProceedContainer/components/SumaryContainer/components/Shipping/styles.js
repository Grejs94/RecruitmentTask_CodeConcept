import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  background: lightgray;

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

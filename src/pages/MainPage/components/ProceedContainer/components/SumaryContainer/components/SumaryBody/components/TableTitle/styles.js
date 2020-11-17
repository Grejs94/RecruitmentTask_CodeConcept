import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.ligthGrey};
  padding: 10px;
  border: 1px solid black;
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

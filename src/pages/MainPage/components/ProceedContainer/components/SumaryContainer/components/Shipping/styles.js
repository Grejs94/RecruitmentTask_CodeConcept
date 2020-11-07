import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  background: ${(props) => props.theme.colors.ligthGray};
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

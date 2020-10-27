import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 100vh;
  padding: 80px 30px;
`;

export const MainWrapper = styled.div`
  display: flex;

  @media (max-width: 900px) {
    display: block;
  }
`;

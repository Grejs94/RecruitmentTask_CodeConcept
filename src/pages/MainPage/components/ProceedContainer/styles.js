import styled from "styled-components";

import { theme } from "assets/theme";

const { media } = theme;

export const Wrapper = styled.div`
  margin: 0;
  padding: 0 30px 0 15px;
  width: 200px;

  ${media.md} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 180px;
    margin: 30px auto;
    padding: 0 30px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

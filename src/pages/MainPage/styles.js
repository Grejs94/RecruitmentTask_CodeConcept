import styled from "styled-components";

import { theme } from "assets/theme";

const { media } = theme;

export const Wrapper = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: center;

  ${media.md} {
    display: block;
  }
`;

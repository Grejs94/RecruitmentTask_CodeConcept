import styled from "styled-components";

import { theme } from "assets/theme";

const { media } = theme;

export const Wrapper = styled.div`
  margin-top: 3px;

  ${media.md} {
    margin-top: 25px;
  }
`;

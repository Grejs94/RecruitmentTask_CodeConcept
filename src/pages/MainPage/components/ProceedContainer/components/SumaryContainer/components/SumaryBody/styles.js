import styled from "styled-components";

import { theme } from "assets/theme";

const { media } = theme;

export const Wrapper = styled.div`
  margin-top: 20px;

  ${media.md} {
    margin-top: 10px;
  }
`;

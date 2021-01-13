import styled from "styled-components";

import { theme } from "assets/theme";

const { media, css } = theme;

export const Wrapper = styled.div`
  ${css.boxShadow_normal}

  ${media.md} {
    margin-top: 10px;
  }
`;

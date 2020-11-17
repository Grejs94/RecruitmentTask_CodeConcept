import styled from "styled-components";

import { theme } from "assets/theme";

const { media, css } = theme;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  ${media.md} {
    ${css.md_text}
  }
`;

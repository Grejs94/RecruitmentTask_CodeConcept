import styled from "styled-components";

import { theme } from "assets/theme";

const { media, css, colors } = theme;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${colors.black};
  border-top: none;
  padding: 10px;

  div:first-child {
    border-bottom: 1px solid ${colors.black};
  }

  ${media.md} {
    ${css.md_text}
  }
`;

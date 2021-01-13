import styled from "styled-components";

import { theme } from "assets/theme";

const { media, css, colors } = theme;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  ${media.md} {
    ${css.md_text}
  }
`;

export const Text = styled.span`
  color: ${colors.ligthGrey_500};
  ${css.md_text}
`;

export const Value = styled.span`
  color: ${colors.ligthGrey_700};
  ${css.md_text}
  font-weight: 800;
`;

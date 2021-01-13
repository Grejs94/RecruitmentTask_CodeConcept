import styled from "styled-components";

import { theme } from "assets/theme";

const { colors, media, css } = theme;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${colors.ligthGrey_300};
  ${css.boxShadow_normal}
  padding: 10px;
  background: ${colors.ligthGrey};
  ${css.md_text}
  font-weight: 800;
  color: ${colors.ligthGrey_700};

  ${media.md} {
    ${css.md_text}
  }
`;

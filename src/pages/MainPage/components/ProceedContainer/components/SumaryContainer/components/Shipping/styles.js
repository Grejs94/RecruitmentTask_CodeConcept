import styled from "styled-components";

import { theme } from "assets/theme";

const { colors, media, css } = theme;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${colors.black};
  padding: 10px;
  background: ${colors.ligthGrey};
  ${media.md} {
    ${css.md_text}
  }
`;

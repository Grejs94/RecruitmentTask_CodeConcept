import styled from "styled-components";

import { theme } from "assets/theme";

const { colors, css } = theme;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.ligthGrey};
  padding: 10px;
  border: 1px solid ${colors.ligthGrey_300};
  border-bottom: 1px solid ${colors.ligthGrey_500};
  color: ${colors.ligthGrey_700};
  ${css.md_text}
  font-weight: 800;

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

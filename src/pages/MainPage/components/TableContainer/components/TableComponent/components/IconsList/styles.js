import styled from "styled-components";

import { theme } from "assets/theme";

const { media, css, colors } = theme;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  ${media.sm} {
    display: block;
  }
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 25px;
  height: 25px;
  border: none;
  padding: 0;
  color: ${colors.ligthGrey_500};
  ${css.md_text} ${media.sm} {
    margin: 0 auto;
    ${css.xs_text}
  }
`;

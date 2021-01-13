import styled from "styled-components";

import { theme } from "assets/theme";

const { media, css, colors } = theme;

export const TableTitle = styled.p`
  margin: 0;
  font-size: 20px;
  color: ${colors.ligthGrey_500};
  ${media.md} {
    text-align: center;
  }
`;

export const TableTitleContainer = styled.div`
  min-height: 60px;
`;

export const Wrapper = styled.div`
  margin: 0;
  padding: 0 15px 0 30px;
  ${css.md_text}

  ${media.md} {
    margin: 0 auto;
    padding: 0;
  }

  ${media.sm} {
    ${css.xs_text}
  }
`;

export const MessageContainer = styled.div`
  padding: 20px;
  border: 1px solid ${colors.black};
`;

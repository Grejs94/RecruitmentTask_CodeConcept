import styled from "styled-components";

import { theme } from "assets/theme";

const { media } = theme;

export const Wrapper = styled.div`
  ${media.md} {
    margin-top: 25px;
  }
`;

export const ShippingContainer = styled.div`
  min-height: 60px;
`;

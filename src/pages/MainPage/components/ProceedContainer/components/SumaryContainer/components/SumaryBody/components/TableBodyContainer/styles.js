import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  border-top: none;
  padding: 10px;

  div:first-child {
    border-bottom: 1px solid black;
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export const ButtonInlineStyles = (theme) => ({
  root: {
    fontSize: 10,
    marginTop: 10,
  },
});

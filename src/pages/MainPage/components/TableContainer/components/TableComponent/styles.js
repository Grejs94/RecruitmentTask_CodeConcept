import styled from "styled-components";

import { theme } from "assets/theme";

const { media, css, colors } = theme;

export const Wrapper = styled.div`
  margin-top: 35px;
  padding: 20px;
  border: 1px solid ${colors.black};
  ${css.md_text}

  ${media.md} {
    /* This is required to make the table full-width */
    display: block;
    max-width: 100%;

    /* This will make the table scrollable when it gets too small */
    .tableWrap {
      display: block;
      max-width: 100%;
      overflow-x: scroll;
      overflow-y: hidden;
      border-bottom: 1px solid black;
    }

    ${css.md_text}
    display: flex;
    justify-content: center;
  }

  ${media.sm} {
    ${css.xs_text}
    padding: 0px;
  }

  img {
    max-width: 140px;
    margin: 0 auto;

    ${media.md} {
      max-width: 100px;
    }
  }

  table {
    /* Make sure the inner table is always as wide as needed */
    width: 100%;
    border-spacing: 0;

    border-collapse: collapse;

    @media (max-width: 800px) {
      margin: 0 auto;
    }

    tbody {
      tr {
        border-top: 1px solid ${colors.black};

        :last-child {
          th,
          td {
            border-bottom: 1px solid ${colors.black};
          }
        }

        ${media.sm} {
          th,
          td {
            padding: 4px;
          }

          th,
          td:nth-child(2) {
            max-width: 150px;
          }
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      text-align: center;
    }

    td {
      margin: 0 auto;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

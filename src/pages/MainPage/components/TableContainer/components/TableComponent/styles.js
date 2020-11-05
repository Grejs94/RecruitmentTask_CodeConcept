import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 35px;
  padding: 20px;
  border: 1px solid black;

  @media (max-width: 800px) {
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

    font-size: 14px;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }

  img {
    max-width: 140px;
    margin: 0 auto;

    @media (max-width: 800px) {
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
        border-top: 1px solid black;

        :last-child {
          th,
          td {
            border-bottom: 1px solid black;
          }
        }

        @media (max-width: 600px) {
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

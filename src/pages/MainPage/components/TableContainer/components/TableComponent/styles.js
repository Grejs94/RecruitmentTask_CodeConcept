import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 35px;
  padding: 0;

  @media (max-width: 800px) {
    font-size: 14px;
  }

  table {
    border: 1px solid black;
    padding: 0 10px;

    @media (max-width: 800px) {
      margin: 0 auto;
    }

    tbody {
      tr {
        th,
        td {
          border-top: 1px solid black;
        }

        :last-child {
          th,
          td {
            border-bottom: 1px solid black;
          }
        }

        @media (max-width: 600px) {
          th,
          td:nth-child(2) {
            max-width: 90px;
          }
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      text-align: center;

      @media (max-width: 800px) {
        padding: 2px;
      }
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

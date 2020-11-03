import React from "react";

import { Table } from "./components";
import * as Styles from "./styles";

const TableContainer = () => {
  return (
    <Styles.Wrapper>
      <Styles.TableTitle>Shopping Card</Styles.TableTitle>
      <Table />
    </Styles.Wrapper>
  );
};

export default TableContainer;

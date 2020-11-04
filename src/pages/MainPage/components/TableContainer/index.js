import React from "react";

import { TableComponent } from "./components";
import * as Styles from "./styles";

const TableContainer = () => {
  return (
    <Styles.Wrapper>
      <Styles.TableTitle>Shopping Card</Styles.TableTitle>
      <TableComponent />
    </Styles.Wrapper>
  );
};

export default TableContainer;

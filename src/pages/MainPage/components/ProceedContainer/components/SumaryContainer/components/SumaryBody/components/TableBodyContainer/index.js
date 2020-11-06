import React from "react";

import { Button } from "components";
import { TableItem } from "./components";
import * as Styles from "./styles";

const TableBodyContainer = () => {
  return (
    <Styles.Wrapper>
      <TableItem text={"Subtotal"} value={"$99"} />
      <TableItem text={"Grand Total"} value={"$1234"} />
      <Button
        color="primary"
        variant="contained"
        nostyles="true"
        customstyles={Styles.ButtonInlineStyles}
      >
        Buy and pay
      </Button>
    </Styles.Wrapper>
  );
};

export default TableBodyContainer;

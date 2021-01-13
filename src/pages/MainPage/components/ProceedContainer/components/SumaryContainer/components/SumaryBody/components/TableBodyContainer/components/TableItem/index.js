import React from "react";

import * as Styles from "./styles";

const TableItem = ({ text, value }) => {
  return (
    <Styles.Wrapper>
      <Styles.Text>{text}</Styles.Text>
      <Styles.Value>{value}</Styles.Value>
    </Styles.Wrapper>
  );
};

export default TableItem;

import React from "react";

import * as Styles from "./styles";

const TableItem = ({ text, value }) => {
  return (
    <Styles.Wrapper>
      <span>{text}</span>
      <span>{value}</span>
    </Styles.Wrapper>
  );
};

export default TableItem;

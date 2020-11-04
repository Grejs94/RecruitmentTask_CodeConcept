import React from "react";

import { Table, Shipping } from "./components";
import * as Styles from "./styles";

const SumaryContainer = () => {
  return (
    <Styles.Wrapper>
      <Shipping />
      <Table />
    </Styles.Wrapper>
  );
};

export default SumaryContainer;

import React from "react";

import { SumaryBody, Shipping } from "./components";
import * as Styles from "./styles";

const SumaryContainer = () => {
  return (
    <Styles.Wrapper>
      <Shipping />
      <SumaryBody />
    </Styles.Wrapper>
  );
};

export default SumaryContainer;

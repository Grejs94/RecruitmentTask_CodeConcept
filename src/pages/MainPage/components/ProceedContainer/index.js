import React from "react";

import { SumaryContainer } from "./components";
import * as Styles from "./styles";

const ProceedContainer = () => {
  return (
    <Styles.Wrapper>
      <button>Proceed to checkout</button>
      <SumaryContainer />
    </Styles.Wrapper>
  );
};

export default ProceedContainer;

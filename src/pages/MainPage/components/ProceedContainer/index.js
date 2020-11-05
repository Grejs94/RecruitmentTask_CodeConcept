import React from "react";

import { Button } from "components";
import { SumaryContainer } from "./components";
import * as Styles from "./styles";

const ProceedContainer = () => {
  return (
    <Styles.Wrapper>
      <Styles.ButtonWrapper>
        <Button
          variant="contained"
          color="primary"
          customstyles={Styles.inlineButtonsStyles}
        >
          Proceed to checkout
        </Button>
      </Styles.ButtonWrapper>
      <SumaryContainer />
    </Styles.Wrapper>
  );
};

export default ProceedContainer;

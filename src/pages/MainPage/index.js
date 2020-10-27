import React from "react";

import { BasketCardContainer, BasketProceedContainer } from "./components";
import * as Styles from "./styles";

const MainPage = () => {
  return (
    <Styles.Wrapper>
      <Styles.MainWrapper>
        <BasketCardContainer />
        <BasketProceedContainer />
      </Styles.MainWrapper>
    </Styles.Wrapper>
  );
};

export default MainPage;

import React from "react";

import { ProceedContainer, TableContainer } from "./components";
import * as Styles from "./styles";

const MainPage = () => {
  return (
    <Styles.Wrapper>
      <TableContainer />
      <ProceedContainer />
    </Styles.Wrapper>
  );
};

export default MainPage;

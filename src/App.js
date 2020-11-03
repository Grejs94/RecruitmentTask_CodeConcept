import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as Styles from "./styles";
import { MainPage } from "pages";

toast.configure();

function App() {
  return (
    <Styles.Wrapper>
      <MainPage />
    </Styles.Wrapper>
  );
}

export default App;

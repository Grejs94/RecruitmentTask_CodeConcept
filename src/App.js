import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider as ThemeProviderMaterial } from "@material-ui/core/styles";
import { ThemeProvider as ThemeProviderStyledCmp } from "styled-components";

import { theme, themeMaterial } from "assets/theme";
import * as Styles from "./styles";
import { MainPage } from "pages";

toast.configure();

function App() {
  return (
    <ThemeProviderStyledCmp theme={theme}>
      <ThemeProviderMaterial theme={themeMaterial}>
        <Styles.Wrapper>
          <MainPage />
        </Styles.Wrapper>
      </ThemeProviderMaterial>
    </ThemeProviderStyledCmp>
  );
}

export default App;

import React from "react";

import { BasketCardContainer, BasketProceedContainer } from "components";

import * as Styles from "./styles";

import "./styles.js";

function App() {
  return (
    <div className="App">
      <Styles.Wrapper>
        {/* <div class="titlesWrapper">
          <p class="title_shoppingCard">Shopping Card</p>
          <button class="button_root button_small">Proceed to checkout</button>
        </div> */}
        <Styles.MainWrapper>
          <BasketCardContainer />
          <BasketProceedContainer />
        </Styles.MainWrapper>
      </Styles.Wrapper>
    </div>
  );
}

export default App;

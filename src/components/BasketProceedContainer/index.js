import React from "react";

import * as Styles from "./styles";

const BasketProceedContainer = () => {
  return (
    <Styles.Wrapper>
      <div>
        <div class="info_Container">
          <span>SHIPPING</span>
          <span>$23,80</span>
        </div>
      </div>
      <div class="basketSummary">
        <div class="info_Container info_Container--totals">
          <span>CARD TOTALS</span>
        </div>
        <div class="basketContent">
          <div class="description">
            <div class="description_itemContainer">
              <div>Subtotal</div>
              <div>$23,80</div>
            </div>
            <div class="description_itemContainer description_itemContainer--last">
              <div>Grand Total</div>
              <div>$23,80</div>
            </div>
          </div>
        </div>
        <div class="basketBottomBarContainer">
          <button class="button_root button_small button--basket">
            Proceed to checkout
          </button>
        </div>
      </div>
    </Styles.Wrapper>
  );
};

export default BasketProceedContainer;

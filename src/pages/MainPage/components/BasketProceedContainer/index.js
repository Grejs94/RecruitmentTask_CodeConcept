import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import * as Styles from "./styles";
import {
  selectBasketSubtotal,
  selectBasketShipping,
  setBasketVisible,
} from "features/basket/basketSlice";

const BasketProceedContainer = () => {
  const dispatch = useDispatch();
  const subtotal = useSelector(selectBasketSubtotal);
  const shipping = useSelector(selectBasketShipping);

  const roundedValue = (array) => {
    let sum = 0;
    array.forEach((value) => {
      sum = sum + value;
    });

    return sum.toFixed(2);
  };

  const handleProceedToCheckout = () => {
    dispatch(setBasketVisible());

    toast.success("Your order has been submitted successfully!");
  };

  return (
    <Styles.Wrapper>
      <Styles.ButtonContainer>
        <Styles.Button>Proceed to checkout</Styles.Button>
      </Styles.ButtonContainer>

      <div>
        <div className="info_Container">
          <span>SHIPPING</span>
          <span>{`$${shipping}`}</span>
        </div>
      </div>
      <div className="basketSummary">
        <div className="info_Container info_Container--totals">
          <span>CARD TOTALS</span>
        </div>
        <div className="basketContent">
          <div className="description">
            <div className="description_itemContainer">
              <div>Subtotal</div>
              <div>${roundedValue([subtotal])}</div>
            </div>
            <div className="description_itemContainer description_itemContainer--last">
              <div>Grand Total</div>
              <div>${roundedValue([subtotal, shipping])}</div>
            </div>
          </div>
        </div>
        <div className="basketBottomBarContainer">
          <button
            onClick={() => handleProceedToCheckout()}
            className="button_root button_small button--basket"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </Styles.Wrapper>
  );
};

export default BasketProceedContainer;

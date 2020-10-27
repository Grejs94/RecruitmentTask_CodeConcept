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

  // Styles.ShippingContainer
  // Styles.BasketSumaryContainer
  // Styles.SumaryTitle
  // Styles.BasketContent
  // Styles.DescriptionContainer
  // Styles.SubmitButton
  return (
    <Styles.Wrapper>
      <Styles.ButtonContainer>
        <Styles.Button>Proceed to checkout</Styles.Button>
      </Styles.ButtonContainer>

      <Styles.ShippingContainer>
        <span>SHIPPING</span>
        <span>{`$${shipping}`}</span>
      </Styles.ShippingContainer>
      <Styles.BasketSumaryContainer>
        <Styles.SumaryTitle>
          <span>CARD TOTALS</span>
        </Styles.SumaryTitle>
        <Styles.BasketContent>
          <Styles.DescriptionContainer>
            <div>Subtotal</div>
            <div>${roundedValue([subtotal])}</div>
          </Styles.DescriptionContainer>
          <Styles.DescriptionContainerGrand>
            <div>Grand Total</div>
            <div>${roundedValue([subtotal, shipping])}</div>
          </Styles.DescriptionContainerGrand>
        </Styles.BasketContent>
        <Styles.SubmitButtonContainer>
          <Styles.SubmitButton onClick={() => handleProceedToCheckout()}>
            Proceed to checkout
          </Styles.SubmitButton>
        </Styles.SubmitButtonContainer>
      </Styles.BasketSumaryContainer>
    </Styles.Wrapper>
  );
};

export default BasketProceedContainer;

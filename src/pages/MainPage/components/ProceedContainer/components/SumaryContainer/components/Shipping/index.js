import React from "react";
import { useSelector } from "react-redux";

import { selectBasket } from "features/basket/basketSlice";
import * as Styles from "./styles";

const Shipping = () => {
  const basket = useSelector(selectBasket);

  return (
    <Styles.Wrapper>
      <span>Shipping</span>
      <span>{`$${basket.shipping.toFixed(2)}`}</span>
    </Styles.Wrapper>
  );
};

export default Shipping;

import React from "react";
import { useSelector } from "react-redux";

import { shipping } from "features/shoppingPage/shoppingPage";

import * as Styles from "./styles";

const Shipping = () => {
  const basketShipping = useSelector(shipping);

  return (
    <Styles.Wrapper>
      <span>SHIPPING</span>
      <span>{`$${basketShipping.toFixed(2)}`}</span>
    </Styles.Wrapper>
  );
};

export default Shipping;

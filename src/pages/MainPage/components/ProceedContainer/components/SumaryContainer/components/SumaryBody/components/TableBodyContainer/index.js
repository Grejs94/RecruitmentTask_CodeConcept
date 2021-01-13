import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  shoppingPage,
  setBasketProducts,
  setOrderCompleted,
} from "features/shoppingPage/shoppingPage";
import { Button } from "components";

import { TableItem } from "./components";
import * as Styles from "./styles";

const TableBodyContainer = () => {
  const dispatch = useDispatch();

  const basket = useSelector(shoppingPage);

  const handleProceedToCheckout = () => {
    dispatch(setBasketProducts([]));
    dispatch(setOrderCompleted(true));
  };

  return (
    <Styles.Wrapper>
      <TableItem text={"Subtotal"} value={`$${basket.subtotal.toFixed(2)}`} />
      <TableItem
        text={"Grand Total"}
        value={`$${basket.grandTotal.toFixed(2)}`}
      />
      <Button
        color="primary"
        variant="contained"
        customVariant="long"
        onClick={() => handleProceedToCheckout()}
      >
        Proceed to checkout
      </Button>
    </Styles.Wrapper>
  );
};

export default TableBodyContainer;

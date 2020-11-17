import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectBasket,
  selectBasketSubtotal,
  selectBasketShipping,
  setSubtotal,
  setGrandTotal,
  setShipping,
} from "features/basket/basketSlice";
import { Button } from "components";

import { TableItem } from "./components";
import * as Styles from "./styles";

const TableBodyContainer = () => {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);
  const subtotal = useSelector(selectBasketSubtotal);
  const shipping = useSelector(selectBasketShipping);

  useEffect(() => {
    dispatch(setSubtotal(subtotal));
    dispatch(setShipping(shipping));
    dispatch(setGrandTotal(subtotal + shipping));
  }, [basket, dispatch, subtotal, shipping]);

  return (
    <Styles.Wrapper>
      <TableItem text={"Subtotal"} value={`$${basket.subtotal.toFixed(2)}`} />
      <TableItem
        text={"Grand Total"}
        value={`$${basket.grandTotal.toFixed(2)}`}
      />
      <Button color="primary" variant="contained" customVariant="long">
        Buy and pay
      </Button>
    </Styles.Wrapper>
  );
};

export default TableBodyContainer;

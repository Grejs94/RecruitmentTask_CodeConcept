import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectBasket,
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

  useEffect(() => {
    dispatch(setSubtotal(subtotal()));
    dispatch(setShipping(shipping));
    dispatch(setGrandTotal(subtotal() === 0 ? 0 : subtotal() + shipping));
  }, [basket]);

  const subtotal = () => {
    let subtotal = 0;
    [...basket.items].forEach((item) => {
      const itemValue = item.price * item.value;
      subtotal = subtotal + itemValue;
    });

    return subtotal;
  };

  const shipping = subtotal() <= 100 ? 23.8 : 0;

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
        nostyles="true"
        customstyles={Styles.ButtonInlineStyles}
      >
        Buy and pay
      </Button>
    </Styles.Wrapper>
  );
};

export default TableBodyContainer;

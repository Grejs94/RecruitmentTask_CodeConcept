import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Styles from "./styles";
import {
  setSubTotal,
  setShipping,
  selectBasketItemValue,
  selectBasketUnitPrice,
} from "features/basket/basketSlice";

const BottomRow = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectBasketItemValue);
  const unitPrice = useSelector(selectBasketUnitPrice);

  const handleUpdateShoppingCard = ({ value, unitPrice }) => {
    const subtotal = value * unitPrice;
    dispatch(setSubTotal(subtotal));
    dispatch(setShipping(subtotal < 101 ? 23.8 : 0));
  };

  return (
    <Styles.Wrapper>
      <Styles.PictureCell />
      <Styles.NameCell />
      <Styles.UnitCell />
      <Styles.ButtonsCell>
        <Styles.Button
          onClick={() => handleUpdateShoppingCard({ value, unitPrice })}
        >
          Update Shopping Card
        </Styles.Button>
      </Styles.ButtonsCell>
    </Styles.Wrapper>
  );
};

export default BottomRow;

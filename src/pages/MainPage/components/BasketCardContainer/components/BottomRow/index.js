import React from "react";
import { useDispatch, useSelector } from "react-redux";

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
    <div className="shoppingCard_BottomBarHandleContainer">
      <div className="shoppingCard_element_first shoppingCard_element_first--bottomBar"></div>
      <div className="shoppingCard_element_second shoppingCard_element_second--bottomBar"></div>
      <div className="shoppingCard_element_third shoppingCard_element_third--bottomBar"></div>
      <div className="shoppingCard_element_fourth shoppingCard_element_fourth--bottomBar">
        <button
          onClick={() => handleUpdateShoppingCard({ value, unitPrice })}
          className="button_root button_small"
        >
          Update Shopping Card
        </button>
      </div>
    </div>
  );
};

export default BottomRow;

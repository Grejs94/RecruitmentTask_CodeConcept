import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as picture from "images";
import {
  increseValue,
  decreseValue,
  setItemValue,
  setSubTotal,
  setShipping,
  selectBasketItemValue,
  selectBasketUnitPrice,
} from "features/basket/basketSlice";

const CardRow = () => {
  const dispatch = useDispatch();
  const [showElement, setShowElement] = useState(true);

  const value = useSelector(selectBasketItemValue);
  const unitPrice = useSelector(selectBasketUnitPrice);

  const handleUpdateShoppingCard = ({ value, unitPrice }) => {
    const subtotal = value * unitPrice;
    dispatch(setSubTotal(subtotal));
    dispatch(setShipping(subtotal < 101 ? 23.8 : 0));
  };

  const handleDeleteIcon = (setShowElement) => {
    setShowElement((old) => !old);
    dispatch(setSubTotal(0));
    dispatch(setShipping(0));
    dispatch(setItemValue(1));
  };

  return showElement ? (
    <div className="shoppingCard_midContentContainer">
      <div className="shoppingCard_element_first shoppingCard_element_first--midBar">
        <div className="images_container">
          <img
            onClick={() => handleDeleteIcon(setShowElement)}
            src={picture.deletePicture}
            alt="delete"
          />
          <div className="images_space--first"></div>

          <img src={picture.headphones} alt="headphones" />
          <div className="images_space--second"></div>
        </div>
      </div>
      <div className="shoppingCard_element_second shoppingCard_element_second--midBar">
        HeadPhones
      </div>
      <div className="shoppingCard_element_third shoppingCard_element_third--midBar">
        $11.90
      </div>
      <div className="shoppingCard_element_fourth shoppingCard_element_fourth--midBar">
        <div className="iconContainer">
          <button
            onClick={() => dispatch(decreseValue(1))}
            className="icon_root"
          >
            -
          </button>
          <div className="icon_root iconContainer_fakeInputContainer">
            {value}
          </div>
          <button
            onClick={() => dispatch(increseValue(1))}
            className="icon_root"
          >
            +
          </button>
          <img
            onClick={() => handleUpdateShoppingCard({ value, unitPrice })}
            className="icon_root"
            src={picture.edit}
            alt="edit"
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default CardRow;

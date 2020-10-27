import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as picture from "images";

import * as Styles from "./styles";
import {
  increseValue,
  decreseValue,
  setItemValue,
  setSubTotal,
  setShipping,
  setLastItemValue,
  selectBasketItemValue,
  selectBasketUnitPrice,
  selectBasketLastItemValue,
} from "features/basket/basketSlice";

const CardElement = () => {
  const dispatch = useDispatch();
  const [showElement, setShowElement] = useState(true);

  const value = useSelector(selectBasketItemValue);
  const LastItemValue = useSelector(selectBasketLastItemValue);
  const unitPrice = useSelector(selectBasketUnitPrice);

  const handleUpdateShoppingCard = ({ value, unitPrice }) => {
    const subtotal = value * unitPrice;
    dispatch(setSubTotal(subtotal));
    dispatch(setShipping(subtotal < 101 ? 23.8 : 0));
  };

  const handleDeleteIcon = (setShowElement) => {
    setShowElement((old) => !old);

    dispatch(setLastItemValue(value));
    dispatch(setSubTotal(0));
    dispatch(setShipping(0));
    dispatch(setItemValue(1));
  };

  const handleUndoButton = (LastItemValue) => {
    setShowElement((old) => !old);

    dispatch(setItemValue(LastItemValue));
  };

  return (
    <Styles.Wrapper>
      {showElement ? (
        <>
          <Styles.PictureCell>
            <img
              onClick={() => handleDeleteIcon(setShowElement)}
              src={picture.deletePicture}
              alt="delete"
            />
            <Styles.LeftSpaceUsedByFlexboxFirst />

            <img src={picture.headphones} alt="headphones" />
            <Styles.LeftSpaceUsedByFlexboxSecond />
          </Styles.PictureCell>
          <Styles.NameCell>HeadPhones</Styles.NameCell>
          <Styles.UnitCell>$11.90</Styles.UnitCell>
          <Styles.ButtonsCell>
            <Styles.IconContainer>
              <Styles.Button onClick={() => dispatch(decreseValue(1))}>
                -
              </Styles.Button>
              <Styles.ValueContainer>{value}</Styles.ValueContainer>
              <Styles.Button onClick={() => dispatch(increseValue(1))}>
                +
              </Styles.Button>
              <Styles.ImgButton
                onClick={() => handleUpdateShoppingCard({ value, unitPrice })}
                src={picture.edit}
                alt="edit"
              />
            </Styles.IconContainer>
          </Styles.ButtonsCell>
        </>
      ) : (
        <>
          <span>Elements List is empty!</span>
          <Styles.ButtonUndo onClick={() => handleUndoButton(LastItemValue)}>
            Undo
          </Styles.ButtonUndo>
        </>
      )}
    </Styles.Wrapper>
  );
};

export default CardElement;

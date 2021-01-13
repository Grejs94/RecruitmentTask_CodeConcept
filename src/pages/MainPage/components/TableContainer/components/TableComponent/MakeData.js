import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { basketProducts, deleteItem } from "features/shoppingPage/shoppingPage";
import { Button } from "components";
import { IconsList } from "./components";
import * as Styles from "./styles";
import { headphones } from "images/index";

export const ItemsList = () => {
  const dispatch = useDispatch();

  const products = useSelector(basketProducts);

  const selectImage = (id) => {
    switch (id) {
      case 1:
        return headphones;

      default:
        break;
    }
  };
  // try to do this better when finish

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return [...products].map((basketItem) => ({
    deleteIcon: (
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleDelete(basketItem.id)}
        customVariant="short"
      >
        &times;
      </Button>
    ),
    productPicture: (
      <Styles.Img src={selectImage(basketItem.id)} alt={basketItem.name} />
    ),
    name: basketItem.name,
    price: basketItem.price,
    icons: <IconsList id={basketItem.id} value={basketItem.quantity} />,
  }));
};

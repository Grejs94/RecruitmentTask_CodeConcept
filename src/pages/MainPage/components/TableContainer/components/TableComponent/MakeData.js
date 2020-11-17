import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteItem, selectBasket } from "features/basket/basketSlice";
import { Button } from "components";
import { IconsList } from "./components";
import * as Styles from "./styles";

export const ItemsList = () => {
  const dispatch = useDispatch();

  const dataItems = useSelector(selectBasket);
  return [...dataItems.items].map((dataItem) => ({
    deleteIcon: (
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(deleteItem(dataItem.id))}
        customVariant="short"
      >
        &times;
      </Button>
    ),
    productPicture: <Styles.Img src={dataItem.picture} alt={dataItem.name} />,
    name: dataItem.name,
    price: dataItem.price,
    icons: <IconsList id={dataItem.id} value={dataItem.value} />,
    id: dataItem.id,
    value: dataItem.value,
  }));
};

import React from "react";

import { IconsList } from "./components";
import * as image from "images";
import * as Styles from "./styles";

const dataItems = [
  {
    picture: image.headphones,
    name: "Headphones",
    price: 11.9,
    id: 0,
    value: 2,
  },
];

export const ItemsList = [...dataItems].map((dataItem) => {
  return {
    deleteIcon: <Styles.Img src={image.deletePicture} alt="deleteIcon" />,
    productPicture: <Styles.Img src={dataItem.picture} alt={dataItem.name} />,
    name: dataItem.name,
    price: dataItem.price,
    icons: <IconsList id={dataItem.id} value={dataItem.value} />,
    id: dataItem.id,
    value: dataItem.value,
  };
});

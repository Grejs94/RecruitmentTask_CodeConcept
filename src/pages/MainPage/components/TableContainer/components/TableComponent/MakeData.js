import React from "react";

import { IconsList } from "./components";
import * as image from "images";

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
    deleteIcon: <img src={image.deletePicture} alt="deleteIcon" />,
    productPicture: <img src={dataItem.picture} alt={dataItem.name} />,
    name: dataItem.name,
    price: dataItem.price,
    icons: <IconsList id={dataItem.id} />,
    id: dataItem.id,
    value: dataItem.value,
  };
});

console.log(ItemsList);

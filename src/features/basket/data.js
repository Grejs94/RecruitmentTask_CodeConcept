import * as image from "images";

export const initialState = {
  status: "iddle",
  items: [
    {
      picture: image.headphones,
      name: "Headphones",
      price: 11.9,
      id: 0,
      value: 2,
    },
    {
      picture: image.mobilePhone,
      name: "Mobile phone",
      price: 20.99,
      id: 1,
      value: 1,
    },
  ],
  shipping: 23.8,
  subtotal: 0,
  grandTotal: 0,
};

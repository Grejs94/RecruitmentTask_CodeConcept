import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  basketProducts as AllBasketProducts,
  products as AllProducts,
  cartProducts as AllCartProducts,
  setBasketProducts,
  selectOrderCompleted,
} from "features/shoppingPage/shoppingPage";
import { TableComponent } from "./components";
import * as Styles from "./styles";

const TableContainer = () => {
  const dispatch = useDispatch();

  const basketProducts = useSelector(AllBasketProducts);
  const products = useSelector(AllProducts);
  const cartProducts = useSelector(AllCartProducts);
  const orderCompleted = useSelector(selectOrderCompleted);

  useEffect(() => {
    dispatch(setBasketProducts(basketItems));
  }, [cartProducts]);

  const basketItems = cartProducts.map((cardProduct) => {
    const item = products.find(
      (product) => product.id === cardProduct.productId
    );

    return {
      ...item,
      quantity: cardProduct.quantity,
    };
  });
  // create array of products using values from two json files, product include id, name, image, quantity

  const messageEmpty = "your shopping cart is empty.";
  const messageSuccess = "Your order has been submitted successfully.";

  return (
    <Styles.Wrapper>
      <Styles.TableTitleContainer>
        <Styles.TableTitle>Shopping Card</Styles.TableTitle>
      </Styles.TableTitleContainer>

      {basketProducts.length > 0 ? (
        <TableComponent />
      ) : (
        <Styles.MessageContainer>
          {orderCompleted ? messageSuccess : messageEmpty}
        </Styles.MessageContainer>
      )}
    </Styles.Wrapper>
  );
};

export default TableContainer;

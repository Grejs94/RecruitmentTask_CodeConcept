import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProceedContainer, TableContainer } from "./components";
import * as Styles from "./styles";
import {
  fetchData,
  sumTheOrder,
  basketProducts,
} from "features/shoppingPage/shoppingPage";

const MainPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(basketProducts);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  // fetching data from json files

  useEffect(() => {
    dispatch(sumTheOrder());
  }, [products]);
  // calculation subtotal, grandtotal, shipping allways when basketItems will chane

  return (
    <Styles.Wrapper>
      <TableContainer />
      <ProceedContainer />
    </Styles.Wrapper>
  );
};

export default MainPage;

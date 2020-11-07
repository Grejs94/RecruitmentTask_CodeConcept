import React from "react";
import { useSelector } from "react-redux";

import { selectBasket } from "features/basket/basketSlice";
import { TableComponent } from "./components";
import * as Styles from "./styles";

const TableContainer = () => {
  const basket = useSelector(selectBasket);

  return (
    <Styles.Wrapper>
      <Styles.TableTitle>Shopping Card</Styles.TableTitle>
      {basket.items.length > 0 ? (
        <TableComponent />
      ) : (
        <Styles.MessageContainer>
          Your shopping cart is empty!
        </Styles.MessageContainer>
      )}
    </Styles.Wrapper>
  );
};

export default TableContainer;

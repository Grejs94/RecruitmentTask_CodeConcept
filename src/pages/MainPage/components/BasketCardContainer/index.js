import React from "react";
import { useSelector } from "react-redux";

import { InfoRow, CardRow, BottomRow } from "./components";
import * as Styles from "./styles";
import { selectBasketVisible } from "features/basket/basketSlice";

const BasketCard = () => {
  const basketVisible = useSelector(selectBasketVisible);

  return (
    <Styles.Wrapper>
      {basketVisible && (
        <>
          <Styles.ElementInfo>Shopping Card</Styles.ElementInfo>
          <Styles.Container>
            <InfoRow />
            <CardRow />
            <BottomRow />
          </Styles.Container>
        </>
      )}
    </Styles.Wrapper>
  );
};

export default BasketCard;

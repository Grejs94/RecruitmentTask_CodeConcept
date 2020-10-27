import React from "react";

import * as Styles from "./styles";

const InfoRow = () => {
  return (
    <Styles.Wrapper>
      <Styles.PictureCell />
      <Styles.NameCell>Product Name</Styles.NameCell>
      <Styles.UnitCell>Unit Price</Styles.UnitCell>
      <Styles.ButtonsCell>Qty</Styles.ButtonsCell>
    </Styles.Wrapper>
  );
};

export default InfoRow;

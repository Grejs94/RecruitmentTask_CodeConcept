import React from "react";

const InfoRow = () => {
  return (
    <div className="shoppingCard_topBarInfoContainer">
      <div className="shoppingCard_element_first shoppingCard_element_first--topBar"></div>
      <div className="shoppingCard_element_second shoppingCard_element_second--topBar">
        Product Name
      </div>
      <div className="shoppingCard_element_third shoppingCard_element_third--topBar">
        Unit Price
      </div>
      <div className="shoppingCard_element_fourth shoppingCard_element_fourth--topBar">
        Qty
      </div>
    </div>
  );
};

export default InfoRow;

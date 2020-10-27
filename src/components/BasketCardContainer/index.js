import React from "react";

import * as pictures from "images";

import * as Styles from "./styles";

const BasketCard = () => {
  return (
    <Styles.Wrapper>
      <div class="shoppingCard_topBarInfoContainer">
        <div class="shoppingCard_element_first shoppingCard_element_first--topBar"></div>
        <div class="shoppingCard_element_second shoppingCard_element_second--topBar">
          Product Name
        </div>
        <div class="shoppingCard_element_third shoppingCard_element_third--topBar">
          Unit Price
        </div>
        <div class="shoppingCard_element_fourth shoppingCard_element_fourth--topBar">
          Qty
        </div>
      </div>
      <div class="shoppingCard_midContentContainer">
        <div class="shoppingCard_element_first shoppingCard_element_first--midBar">
          <div class="images_container">
            <img src={pictures.delete} alt="delete-picture" />
            <div class="images_space--first"></div>

            <img src={pictures.headphones} alt="headphones-picture" />
            <div class="images_space--second"></div>
          </div>
        </div>
        <div class="shoppingCard_element_second shoppingCard_element_second--midBar">
          HeadPhones
        </div>
        <div class="shoppingCard_element_third shoppingCard_element_third--midBar">
          $11.90
        </div>
        <div class="shoppingCard_element_fourth shoppingCard_element_fourth--midBar">
          <div class="iconContainer">
            <button class="icon_root">-</button>
            <div class="icon_root iconContainer_fakeInputContainer">2</div>
            <button class="icon_root">+</button>
            <img class="icon_root" src={pictures.edit} alt="edit-image" />
          </div>
        </div>
      </div>
      <div class="shoppingCard_BottomBarHandleContainer">
        <div class="shoppingCard_element_first shoppingCard_element_first--bottomBar"></div>
        <div class="shoppingCard_element_second shoppingCard_element_second--bottomBar"></div>
        <div class="shoppingCard_element_third shoppingCard_element_third--bottomBar"></div>
        <div class="shoppingCard_element_fourth shoppingCard_element_fourth--bottomBar">
          <button class="button_root button_small">Update Shopping Card</button>
        </div>
      </div>
    </Styles.Wrapper>
  );
};

export default BasketCard;

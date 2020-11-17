import React from "react";
import CreateCustomMaterialUlComponent from "utils/CreateCustomMaterialUlComponent";
import ButtonMaterial from "@material-ui/core/Button";
import * as Styles from "./styles";

const Button = ({ handleClick, customVariant, ...rest }) => (
  <CreateCustomMaterialUlComponent
    handleClick={handleClick}
    element={ButtonMaterial}
    styles={
      customVariant === "short"
        ? Styles.shortButton
        : customVariant === "long"
        ? Styles.longButton
        : {}
    }
    {...rest}
  />
);

export default Button;

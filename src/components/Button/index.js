import React from "react";
import CreateCustomMaterialUlComponent from "utils/CreateCustomMaterialUlComponent";
import ButtonMaterial from "@material-ui/core/Button";

const styles = {
  root: {
    borderRadius: 3,
    minWidth: 25,
    height: 25,
    padding: 0,
  },
};

const Button = ({ handleClick, customstyles, ...rest }) => {
  return (
    <CreateCustomMaterialUlComponent
      handleClick={handleClick}
      element={ButtonMaterial}
      customstyles={customstyles}
      styles={styles}
      {...rest}
    />
  );
};

export default Button;

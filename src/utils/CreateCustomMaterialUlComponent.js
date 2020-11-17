import React from "react";
import { withStyles } from "@material-ui/core/styles";

export default function CreateCustomMaterialUlInput({
  styles,
  element,
  children,
  handleClick,
  ...rest
}) {
  const StyledElement = withStyles(styles)(element);

  return (
    <StyledElement onClick={handleClick} {...rest}>
      {children}
    </StyledElement>
  );
}

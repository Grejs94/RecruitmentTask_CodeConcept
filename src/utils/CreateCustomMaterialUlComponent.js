import React from "react";
import { withStyles } from "@material-ui/core/styles";

export default function CreateCustomMaterialUlInput({
  styles,
  customstyles,
  element,
  children,
  handleClick,
  nostyles,
  ...rest
}) {
  const StyledElement = withStyles(
    customstyles ? customstyles : nostyles ? {} : styles
  )(element);

  return (
    <StyledElement onClick={handleClick} {...rest}>
      {children}
    </StyledElement>
  );
}

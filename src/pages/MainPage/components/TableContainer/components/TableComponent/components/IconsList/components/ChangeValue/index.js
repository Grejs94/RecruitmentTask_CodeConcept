import React from "react";
import Button from "@material-ui/core/Button";

import { useStyles } from "./styles";

const ChangeValue = (handleClick) => {
  const classes = useStyles();

  return (
    <Button onClick={() => handleClick()} variant="contained">
      Default
    </Button>
  );
};

export default ChangeValue;

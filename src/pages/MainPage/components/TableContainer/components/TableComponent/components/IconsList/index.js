import React from "react";

import { Button } from "components";

import * as Styles from "./styles";
import { BoxValue } from "./components";

const handleClick = () => {
  console.log("klik");
};

const styles = {
  root: {
    background: "yellow",
    borderRadius: 6,
    border: 0,
    color: "white",
    padding: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
};

const IconsList = ({ value }) => {
  return (
    <Styles.Wrapper>
      <Button handleClick={handleClick} color="primary" variant="contained">
        -
      </Button>
      <BoxValue>{value}</BoxValue>
      <Button handleClick={handleClick} color="primary" variant="contained">
        +
      </Button>
    </Styles.Wrapper>
  );
};

export default IconsList;

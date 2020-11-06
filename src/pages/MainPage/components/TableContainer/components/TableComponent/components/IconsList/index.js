import React from "react";

import { Button } from "components";

import * as Styles from "./styles";
import { BoxValue } from "./components";

const handleClick = () => {
  console.log("klik");
};

const IconsList = ({ value }) => {
  return (
    <Styles.Wrapper>
      <Button handleClick={handleClick} color="primary" variant="contained">
        -
      </Button>
      <BoxValue>
        <p>{value}</p>
      </BoxValue>
      <Button handleClick={handleClick} color="primary" variant="contained">
        +
      </Button>
    </Styles.Wrapper>
  );
};

export default IconsList;

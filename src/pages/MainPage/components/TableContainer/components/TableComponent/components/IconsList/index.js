import React from "react";
import { useDispatch } from "react-redux";

import {
  incrementValue,
  decrementValue,
  deleteItem,
  setValue,
} from "features/basket/basketSlice";
import { Button } from "components";
import * as Styles from "./styles";

const IconsList = ({ value, id }) => {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (value === 1) {
      dispatch(deleteItem(id));
    }

    dispatch(decrementValue(id));
  };

  return (
    <Styles.Wrapper>
      <Button handleClick={handleDecrement} color="primary" variant="contained">
        -
      </Button>
      <Styles.Input
        value={value}
        onChange={(e) => dispatch(setValue({ id: id, value: e.target.value }))}
      />
      <Button
        handleClick={() => dispatch(incrementValue(id))}
        color="primary"
        variant="contained"
      >
        +
      </Button>
    </Styles.Wrapper>
  );
};

export default IconsList;

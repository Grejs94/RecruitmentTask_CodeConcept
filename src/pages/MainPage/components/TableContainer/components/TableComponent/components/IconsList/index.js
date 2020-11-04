import React from "react";

import { ChangeValue } from "./components";

const IconsList = () => {
  return (
    <div>
      <ChangeValue handleClick={console.log("klik!")} />
    </div>
  );
};

export default IconsList;

import React, { useState } from "react";
import SignButton from "./SignButton";
import { signs } from "../data";

const Signs = props => {
  const [signState, setSignState] = useState(signs);

  return (
    <div className="signs">
      {signState.map(sign => {
        return (
          <SignButton
            key={sign.name}
            sign={sign}
            changeDate={props.changeDate}
          />
        );
      })}
    </div>
  );
};

export default Signs;

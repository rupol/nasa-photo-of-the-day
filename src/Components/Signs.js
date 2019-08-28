import React, { useState } from "react";
import SignButton from "./SignButton";
import { signs } from "../data";

const Signs = () => {
  const [signState, setSignState] = useState(signs);

  return (
    <div className="signs">
      {signState.map(sign => {
        return <SignButton key={sign.name} sign={sign} />;
      })}
    </div>
  );
};

export default Signs;

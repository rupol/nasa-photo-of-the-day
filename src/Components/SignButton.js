import React from "react";

const SignButton = props => {
  return (
    <>
      <button
        // onClick={() => props.addNumber(props.sign)}
        className="sign-btn"
        id={`sign-btn-${props.sign.name}`}
      >
        {props.sign.name}
      </button>
    </>
  );
};

export default SignButton;

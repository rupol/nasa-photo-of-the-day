import React from "react";

const SignButton = props => {
  return (
    <>
      <button
        onClick={props.changeDate}
        className="sign-btn"
        id={`sign-btn-${props.sign.name}`}
      >
        {props.sign.name}
      </button>
    </>
  );
};

export default SignButton;

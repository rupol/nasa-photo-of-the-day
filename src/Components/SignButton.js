import React from "react";

const SignButton = props => {
  return (
    <>
      <input
        type="image"
        // onClick={() => props.addNumber(props.sign)}
        className="sign-btn"
        id={`sign-btn-${props.sign.name}`}
        src={props.sign.img}
        alt={props.sign.name}
      />
    </>
  );
};

export default SignButton;

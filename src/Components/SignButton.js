import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: black;
  color: white;
  font-family: "Gayathri", sans-serif;
  font-size: 2.2rem;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    color: #d4af37;
  }
`;

const SignButton = props => {
  return (
    <>
      <Button onClick={props.changeDate} id={`sign-btn-${props.sign.name}`}>
        {props.sign.name}
      </Button>
    </>
  );
};

export default SignButton;

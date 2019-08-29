import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: black;
  color: #ffffff00;
  font-family: "Gayathri", sans-serif;
  font-size: 2rem;
  padding: 8px 5px;
  margin: 5px 5px 40px;
  cursor: pointer;
  &:hover {
    color: white;
  }
  &:focus {
    outline: none;
    color: white;
  }
`;

const ButtonImg = styled.img`
  width: 120px;
  border-radius: 80px;
  margin: 10px 10px -55px;
`;

const SignButton = props => {
  return (
    <>
      <Button onClick={props.changeDate} id={`sign-btn-${props.sign.name}`}>
        <ButtonImg src={props.sign.img} />
        <br></br>
        {props.sign.name}
      </Button>
    </>
  );
};

export default SignButton;

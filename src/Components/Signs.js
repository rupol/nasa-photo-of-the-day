import React, { useState } from "react";
import SignButton from "./SignButton";
import { signs } from "../data";
import styled from "styled-components";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Signs = props => {
  const [signState, setSignState] = useState(signs);

  return (
    <ButtonContainer>
      {signState.map(sign => {
        return (
          <SignButton
            key={sign.name}
            sign={sign}
            changeDate={props.changeDate}
          />
        );
      })}
    </ButtonContainer>
  );
};

export default Signs;

import React from "react";
import styled from "styled-components";

// STYLING

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h2`
  font-size: 4rem;
  color: #ac70b2;
  margin: 30px 0 20px;
`;

const Date = styled.p`
  color: #8daed9;
  font-size: 2.2rem;
  margin-bottom: 10px;
`;

const Explanation = styled.p`
  max-width: 800px;
  margin: 0 auto;
  line-height: 2.2rem;
`;

function APODCard(props) {
  return (
    <div>
      <Image src={props.url} alt="Sign APOD" />
      <Title>{props.title}</Title>
      <Date>DATE: {props.date}</Date>
      <Explanation>{props.explanation}</Explanation>
    </div>
  );
}

export default APODCard;

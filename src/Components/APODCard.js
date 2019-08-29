import React from "react";
import styled from "styled-components";

// STYLING
const Card = styled.div`
  border: 10px double #ac70b2;
  width: 900px;
  padding: 75px 50px;
  margin: 10px auto 100px;
`;

const Image = styled.img`
  max-width: 800px;
  max-height: 800px;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #ac70b2;
  line-height: 36px;
`;

const Date = styled.p`
  color: #b1b1b1;
  font-size: 20px;
`;

const Explanation = styled.p`
  max-width: 800px;
  margin: 0 auto;
`;

function APODCard(props) {
  return (
    <Card>
      <Image src={props.url} alt="Sign APOD" />
      <Title>{props.title}</Title>
      <Date>DATE: {props.date}</Date>
      <Explanation>{props.explanation}</Explanation>
    </Card>
  );
}

export default APODCard;

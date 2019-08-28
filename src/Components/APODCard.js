import React from "react";

function APODCard(props) {
  return (
    <div>
      <img src={props.url} alt="Sign APOD" />
      <h2>{props.title}</h2>
      <p>{props.date}</p>
      <p>{props.explanation}</p>
    </div>
  );
}

export default APODCard;

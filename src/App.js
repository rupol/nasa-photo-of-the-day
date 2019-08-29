import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

import APODCard from "./Components/APODCard";
import Signs from "./Components/Signs";

// STYLING
const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
  color: white;
  font-family: "Quicksand", sans-serif;
  font-size: 1.8rem;
`;

const MainHeader = styled.h1`
  font-family: "Bungee Shade", cursive;
  font-size: 12rem;
  line-height: 14rem;
  margin: 6rem 2% 5rem;
  color: #8daed9;
`;

const SubHeader = styled.h2`
  font-size: 3.5rem;
  margin: 0 2% 2rem;
`;

function App() {
  const [data, setData] = useState({});
  const [date, updateDate] = useState("2019-08-27");

  const randomDate = () => {
    let year = Math.floor(Math.random() * 19 + 2000);
    let month = Math.floor(Math.random() * 12 + 1);
    let day = Math.floor(Math.random() * 28 + 1);

    if (month < 10) {
      month = `0${month}`;
    } else if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  let changeDate = event => {
    event.preventDefault();
    console.log(event.target);
    updateDate(randomDate());
  };

  // useEffect(() => {
  //   updateDate(randomDate());
  // }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=Vj6AvZW24LdvPejaTJnhpkfgSkk7JaNlNkkk2o5g&date=${date}`
      )
      .then(response => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [date]);

  return (
    <Container>
      <MainHeader>NASA x Zodiac</MainHeader>
      <SubHeader>Choose a sign:</SubHeader>
      <Signs changeDate={changeDate} />
      <APODCard
        url={data.url}
        title={data.title}
        date={data.date}
        explanation={data.explanation}
      />
    </Container>
  );
}

export default App;

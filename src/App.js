import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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

const CardContainer = styled.div`
  border: 10px double #ac70b2;
  max-width: 1000px;
  min-height: 800px
  padding: 75px 75px;
  margin: 10px auto 100px;
`;

function App() {
  const [data, setData] = useState({});
  const [date, updateDate] = useState("2019-08-27");
  const [loading, setLoading] = useState(true);

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

  const changeDate = event => {
    event.preventDefault();
    console.log(event.target);
    window.scroll({
      top: 640,
      left: 0,
      behavior: "smooth"
    });
    setLoading(true);
    updateDate(randomDate());
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=Vj6AvZW24LdvPejaTJnhpkfgSkk7JaNlNkkk2o5g&date=${date}`
      )
      .then(response => {
        // console.log(response.data);
        setLoading(false);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [date, loading]);

  return (
    <Container>
      <MainHeader>NASA x Zodiac</MainHeader>
      <SubHeader>Choose a sign:</SubHeader>
      <Signs changeDate={changeDate} />
      <CardContainer>
        {loading === true ? (
          <Loader type="Triangle" color="#ac70b2" height={500} width={500} />
        ) : (
          <APODCard
            url={data.url}
            title={data.title}
            date={data.date}
            explanation={data.explanation}
          />
        )}
      </CardContainer>
    </Container>
  );
}

export default App;

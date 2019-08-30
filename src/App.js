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

  const changeDate = sign => {
    function randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }

    function dateFormatter(date) {
      return (
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
    }

    let signDate;
    // year, month, day // jan === 0
    if (sign === "Aquarius") {
      signDate = dateFormatter(
        randomDate(new Date(2018, 0, 20), new Date(2018, 1, 18))
      );
    } else if (sign === "Pisces") {
      signDate = dateFormatter(
        randomDate(new Date(2018, 1, 19), new Date(2018, 2, 20))
      );
    } else if (sign === "Aries") {
      signDate = dateFormatter(
        randomDate(new Date(2018, 2, 21), new Date(2018, 3, 19))
      );
    } else if (sign === "Taurus") {
      signDate = dateFormatter(
        randomDate(new Date(2018, 3, 30), new Date(2018, 4, 20))
      );
    } else if (sign === "Gemini") {
      signDate = dateFormatter(
        randomDate(new Date(2018, 4, 21), new Date(2018, 5, 20))
      );
    } else if (sign === "Cancer") {
      signDate = dateFormatter(
        randomDate(new Date(2018, 5, 21), new Date(2018, 6, 22))
      );
    } else if (sign === "Leo") {
      signDate = dateFormatter(
        randomDate(new Date(2018, 6, 23), new Date(2018, 7, 22))
      );
    } else if (sign === "Virgo") {
      signDate = dateFormatter(
        randomDate(new Date(2018, 7, 23), new Date(2018, 8, 22))
      );
    } else if (sign === "Libra") {
      signDate = dateFormatter(
        randomDate(new Date(2018, 8, 23), new Date(2018, 9, 22))
      );
    } else if (sign === "Scorpio") {
      signDate = dateFormatter(
        randomDate(new Date(2018, 9, 23), new Date(2018, 10, 21))
      );
    } else if (sign === "Sagittarius") {
      signDate = dateFormatter(
        randomDate(new Date(2018, 10, 22), new Date(2018, 11, 21))
      );
    } else if (sign === "Capricorn") {
      signDate = dateFormatter(
        randomDate(new Date(2018, 11, 22), new Date(2018, 0, 19))
      );
    } else {
      signDate = "2019-01-01";
    }

    console.log(signDate);

    window.scroll({
      top: 640,
      left: 0,
      behavior: "smooth"
    });
    setLoading(true);
    updateDate(signDate);
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

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import APODCard from "./Components/APODCard";
import Signs from "./Components/Signs";

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

  useEffect(() => {
    updateDate(randomDate());
  }, []);

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
    <div className="App">
      <h1>NASA x Zodiac</h1>
      <h2>Choose your sign:</h2>
      <Signs changeDate={changeDate} />
      <APODCard
        url={data.url}
        title={data.title}
        date={data.date}
        explanation={data.explanation}
      />
    </div>
  );
}

export default App;

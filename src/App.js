import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import getAPODImages from "./apod-api";

import Signs from "./Components/Signs";

function App() {
  const [APODImages, updateAPODImages] = useState();
  const [APODDate, updateAPODDate] = useState();
  const [APODTitle, updateAPODTitle] = useState();
  const [APODExplanation, updateAPODExplanation] = useState();

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ")
      .then(response => {
        console.log(response);
        updateAPODImages(response.data.url);
        updateAPODDate(response.data.date);
        updateAPODTitle(response.data.title);
        updateAPODExplanation(response.data.explanation);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>NASA x Zodiac</h1>
      <h2>Choose your sign:</h2>
      <Signs />
      <img src={APODImages} alt="Sign APOD" />
      <h2>{APODTitle}</h2>
      <p>{APODDate}</p>
      <p>{APODExplanation}</p>
    </div>
  );
}

export default App;

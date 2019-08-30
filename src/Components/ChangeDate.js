import React, { useState } from "react";

const [date, updateDate] = useState("2019-08-27");

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
  //   setLoading(true);
  updateDate(signDate);
};

export default changeDate;

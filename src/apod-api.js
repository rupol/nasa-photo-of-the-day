import axios from "axios";

export default function getAPODImages(setter) {
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ")
    .then(response => {
      console.log(response);
      setter(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

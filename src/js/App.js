import React from "react";

import WeatherWidget from "../js/main/APIS/weather-wigdet";
import FutureForcastWeather from "../js/main/APIS/FutureForcastWidget";
import InputLoc from "../js/main/MediaComponents/input";
import Navigation from "../js/main/MediaComponents/Navigation";
class App extends React.Component {
  constructor(props) {
    super(props);
    if (sessionStorage.length === 0) {
      sessionStorage.setItem("location", "Warsaw");
    }
  }

  render() {
    return (
      <>
        <Navigation></Navigation>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InputLoc
              loc={sessionStorage.getItem("location")}
              
            ></InputLoc>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <WeatherWidget location={sessionStorage.getItem("location")}>
              {" "}
            </WeatherWidget>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "35vh",
            }}
          >
            <FutureForcastWeather
              location={sessionStorage.getItem("location")}
            ></FutureForcastWeather>
          </div>
        </div>
      </>
    );
  }
}
export default App;

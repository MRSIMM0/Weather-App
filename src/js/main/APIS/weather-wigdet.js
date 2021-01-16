import React from "react";
import axios from "axios";

import MediaCard from "../MediaComponents/MediaCard";

const apiKey = "a5833451def4ba5a935882f9bd278e28";

class WeatherWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: {}, data: [{}] };
  }

  async componentDidMount() {
    const response = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        this.props.location +
        "&appid=" +
        apiKey
    );
    this.setState({ weather: response.data.main, data: response.data.weather });
  }

  render() {
    const toCelisius = (tem) => {
      return Math.round(tem - 273.15);
    };

    const {
      feels_like,
      humidity,
      pressure,
      temp,
      temp_max,
      temp_min,
    } = this.state.weather;
    const { id, main } = this.state.data;

    return (
      <>
        <MediaCard
          className="col mb-5"
          wet={this.state.data[0].main}
          tem={toCelisius(temp)}
          feels_like={toCelisius(feels_like)}
          temp_min={toCelisius(temp_min)}
          temp_max={toCelisius(temp_max)}
          pressure={pressure}
          humidity={humidity}
        ></MediaCard>
        {/* <AirPollution></AirPollution> */}
      </>
    );
  }
}
export default WeatherWidget;

import React from "react";
import axios from "axios";
import FutureForcast from "../MediaComponents/FutureFrocast";
import { apiKey } from "./api-key";

class WeatherWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = { forecast: [{}] };
  }

  async componentDidMount() {
    const response = await axios.get(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        this.props.location +
        "&appid=" +
        apiKey
    );
    this.setState({ forecast: response.data.list });
  }

  render() {
    const toCelisius = (tem) => {
      return Math.round(tem - 273.15);
    };
    let arr = [];

    try {
      const array = [
        this.state.forecast[3],
        this.state.forecast[11],
        this.state.forecast[19],
        this.state.forecast[27],
      ];

      arr = array;
    } catch (e) {}

    console.log(arr);
    return (
      <>
        <div className="row">
          {arr.map((r) => {
            try {
              return (
                <div className="ml-4 pr-4">
                  <FutureForcast
                    entity={r.weather[0].main}
                    temp={toCelisius(r.main.temp)}
                    data={r.dt_txt.slice(0, 10)}
                  ></FutureForcast>
                </div>
              );
            } catch (e) {}
          })}
        </div>
      </>
    );
  }
}

export default WeatherWidget;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import SNOW from "../static/snow.gif";
import RAIN from "../static/rain.gif";
import MIST from "../static/mist.gif";
import CLOUD from "../static/cloud.gif";
import CLEAR from "../static/clear.gif";
import THUNDERSTORM from "../static/thunderstorm.gif";
const useStyles = makeStyles({
  root: {
    width: "50%",
  },
  media: {
    width: root.width,
    height: 250,
  },
});

export default function MediaCard({
  tem,
  feels_like,
  wet,
  temp_min,
  temp_max,
  pressure,
  humidity,
}) {
  const classes = useStyles();
  function GIF() {
    switch (wet) {
      case "Snow":
        return SNOW;
        break;
      case "Rain":
        return RAIN;
        break;
      case "Mist":
        return MIST;
        break;
      case "Clouds":
        return CLOUD;
        break;
      case "Clear":
        return CLEAR;
        break;
      case "Thunderstorm":
        return THUNDERSTORM;
        break;
    }
  }

  return (
    <Card className={classes.root}>
      <CardMedia variant="middle" className={classes.media} image={GIF()}>
        <section className="text-center">
          <h1 className="strokeme font-weight-bolder">{wet}</h1>
          <h1 className="strokeme font-weight-bolder mt-4">Temp:{tem}</h1>
          <h4 className="strokeme font-weight-bolder">
            Feels like: {feels_like}
          </h4>
        </section>
      </CardMedia>
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          <div className="col-rows-2">
            <div className="row">
              <p className="ml-4"> Temp Max: {temp_max}</p>
              <p className="ml-5 text-dark"> Temp Min: {temp_min}</p>
            </div>
            <div className="row">
              <p className="ml-4"> Pressure: {pressure} hPa</p>
              <p className="ml-3 text-dark"> Humidity: {humidity}%</p>
            </div>
          </div>
        </Typography>
        <Typography variant="subtitle2" gutterBottom></Typography>
      </CardContent>
    </Card>
  );
}

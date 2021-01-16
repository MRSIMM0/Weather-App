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
import SUNNY from "../static/sunny.gif";
import THUNDERSTORM from "../static/thunderstorm.gif"
const useStyles = makeStyles({
  root: {
    width: "8rem",
  },
  media: {
    width: root.width,
    height: 150,
  },
});

export default function FutureForcast(entity) {
  const classes = useStyles();

  console.log(entity);
  function GIF(en) {
    switch (en) {
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
      case "Sunny":
        return SUNNY;
        break;
      case "Thunderstorm":
        return THUNDERSTORM;
        break;
  
    }
  }

  return (
    <>
      {}
      <Card className={classes.root}>
        <CardMedia
          variant="middle"
          className={classes.media}
          image={GIF(entity.entity)}
        >
          <section className="text-center">
            <h3 className="strokeme font-weight-bolder">T: {entity.temp}</h3>
            <h3 className="strokeme font-weight-bolder">D:    {entity.data}</h3>
          </section>
        </CardMedia>
        <CardContent>
          <p>{entity.entity}</p>
          <Typography variant="subtitle2" gutterBottom></Typography>
        </CardContent>
      </Card>
    </>
  );
}

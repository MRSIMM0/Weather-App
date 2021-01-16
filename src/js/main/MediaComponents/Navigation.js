import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import MinimizeIcon from "@material-ui/icons/Minimize";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#616161",
  },
}));

export default function Navigation() {
  const classes = new useStyles();

  return (
    <nav className="nav flex-row">
      <div className="col dragabble"></div>
      <div className="pull-right ml-3" id="close">
        <MinimizeIcon
          className="minim"
          onClick={() => {
            electron.topBarApi.minimalise();
          }}
        ></MinimizeIcon>
        <FilterNoneIcon
          className="resize"
          onClick={() => {
            electron.topBarApi.resize();
          }}
        ></FilterNoneIcon>
        <CloseIcon
          className="exit"
          onClick={() => {
            electron.topBarApi.exit();
          }}
        ></CloseIcon>
      </div>
    </nav>
  );
}

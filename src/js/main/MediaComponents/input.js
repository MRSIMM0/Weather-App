import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export default function InputLoc(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "20rem",
      },
    },
  }));
  console.log(props);
  return (
    <form
      className={(useStyles.root, "mt-2 mb-3")}
      noValidate
      autoComplete="off"
    >
      <TextField
        onInput={(e) => {
          console.log(e.target.value);

          sessionStorage.setItem("location", e.target.value);
        }}
        id="outlined-basic"
        label={props.loc}
        variant="outlined"
      />
    </form>
  );
}

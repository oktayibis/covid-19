import React from "react";
import "./header.style.scss";
import { Container, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  marginFix: {
    margin: "20px auto",
  },
}));

export default function Header({ data }) {
  //const globalData = Data.Global;
  const classes = useStyle();
  return (
    <div className="header">
      <Container>
     <Typography className={classes.marginFix} variant="h1">
          Covid-19 Info Page
        </Typography>
        <Typography className={classes.marginFix} variant="caption">
          {" "}
          Today is {data.date}{" "}
        </Typography>{" "}
        <br></br>
  <Typography
          className={classes.marginFix}
          variant="caption"
          color="secondary"
        >
          {" "}
          Last updated at {data.time}
        </Typography>
        <Typography className={classes.marginFix} variant={"h3"} color="error">
          Summary
        </Typography>
      </Container>
    </div>
  );
}

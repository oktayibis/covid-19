import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#dbdbdb",
    width: "350px",
    height: "90%",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      width: "250px",
    },
  },
  title: {
    fontSize: "2.5rem",
    textAlign: "center",
    color: "#000000",
    padding: "20px 0",
    borderBottom: "10px solid #f0a500",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  text: {
    margin: "20% 10px",
    fontSize: "3rem",
    textAlign: "center",
    letterSpacing: "2px",
    color: "#cf7500",
  },
  people: {
    fontSize: "0.6rem",
    letterSpacing: "1px",
    marginLeft: "5px",
  },
}));

export const SummaryItem = ({ data, title }) => {
  const classes = useStyle();
  return (
    <Grid item lg={4}>
      <Paper className={classes.paper} elevation={4}>
        <Typography className={classes.title}>{title}</Typography>

        <Typography className={classes.text}>
          {data}
          <span className={classes.people}>People</span>
        </Typography>
      </Paper>
    </Grid>
  );
};

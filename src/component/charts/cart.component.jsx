import React from "react";
import TenCountryToday from "./ten-country-today/ten-country-today.componenet";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Box } from "@material-ui/core";
import TodayCountryBase from "./country-base-today/today-country-base.component.jsx";
import TotalCountryBase from "./country-base-total/total-country-base.component.jsx";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    textAlign: "center",
  },
}));
const ChartArea = ({ data }) => {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <Box>
          <TenCountryToday dataSet={data} />
          <TodayCountryBase data={data} title="Today Numbers By Country" />
          <TotalCountryBase data={data} title="Total Numbers By Country" />
        </Box>
      </Container>
    </div>
  );
};

export default ChartArea;

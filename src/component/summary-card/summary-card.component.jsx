import React, { useContext } from "react";
import { Grid, Container } from "@material-ui/core";
import { SummaryItem } from "./summary-item.component";
import { GlobalDataContext } from "../../context/global-data/global-data.context";

export default function SummaryCard() {
  const { data } = useContext(GlobalDataContext);

  if (data) {
    return (
      <React.Fragment>
        <Container style={{ marginTop: "30px" }}>
          <Grid
            container
            direction={"row"}
            justify={"space-between"}
            spacing={3}
          >
            <SummaryItem title={"Today Confirmed"} data={data.NewConfirmed} />
            <SummaryItem title={"Today Deaths"} data={data.NewDeaths} />
            <SummaryItem title={"Today Recovered"} data={data.NewRecovered} />
          </Grid>
          <Grid
            container
            direction={"row"}
            justify={"space-between"}
            spacing={3}
          >
            <SummaryItem title={"Total Confirmed"} data={data.TotalConfirmed} />
            <SummaryItem title={"Total Deaths"} data={data.TotalDeaths} />
            <SummaryItem title={"Total Recovered"} data={data.TotalRecovered} />
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
  return <h2>Loading</h2>;
}

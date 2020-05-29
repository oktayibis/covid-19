import React from "react";
import axios from "axios";
import Header from "../../component/header/header.component";
import ChartArea from "../../component/charts/cart.component";
import SummaryCard from "../../component/summary-card/summary-card.component";
import {
  Typography,
  LinearProgress,
  Button,
  Container,
} from "@material-ui/core";

const SUMMARY_DATA_API = "https://api.covid19api.com/summary";

const IndexPage = () => {
  const [globalData, setGlobalData] = React.useState({
    data: {},
    countries: [],
    isLoaded: false,
    date: "",
    time: "",
  });

  React.useEffect(() => {
    axios.get(SUMMARY_DATA_API).then((response) => {
      const receivedData = response.data;
      setGlobalData({
        data: receivedData.Global,
        countries: receivedData.Countries,
        isLoaded: true,
        date: new Date(receivedData.Date).toDateString(),
        time: new Date(receivedData.Date).toTimeString(),
      });
    });
  }, []);

  if (globalData.isLoaded) {
    return (
      <div className="app">
        <Header data={globalData} />
        <SummaryCard data={globalData.data} />
        <ChartArea data={globalData.countries} />
      </div>
    );
  } else {
    return (
      <Container style={{ textAlign: "center" }}>
        <Typography variant="h4" style={{ margin: "30px auto" }}>
          Data Loading, please wait or refresh page
        </Typography>
        <LinearProgress color="secondary" />
        <Button
          style={{ margin: "30px auto" }}
          variant="contained"
          color="secondary"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </Button>
      </Container>
    );
  }
};

export default IndexPage;

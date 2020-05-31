import React, { useContext } from "react";
import Header from "../../component/header/header.component";
import ChartArea from "../../component/charts/cart.component";
import SummaryCard from "../../component/summary-card/summary-card.component";
import {
  Typography,
  LinearProgress,
  Button,
  Container,
} from "@material-ui/core";
import { GlobalDataContext } from "../../context/global-data/global-data.context";

const IndexPage = () => {
  const globalData = useContext(GlobalDataContext);

  if (globalData.isLoaded) {
    return (
      <div className="app">
        <Header />
        <SummaryCard />
        <ChartArea />
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

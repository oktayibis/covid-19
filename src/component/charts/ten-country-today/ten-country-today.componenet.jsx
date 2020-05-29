import React from "react";
import { Line } from "react-chartjs-2";
import { Container, Typography } from "@material-ui/core";

const filterSelection = (dataSet, text) => {
  let chart = {};
  let mostTenCountries = [];
  let label = [];
  let dataList = [];

  switch (text) {
    case "NewConfirmed":
      mostTenCountries = dataSet
        .sort((a, b) => b.NewConfirmed - a.NewConfirmed)
        .slice(0, 10);
      label = mostTenCountries.map((country) => country.Country);
      dataList = mostTenCountries.map((c) => c.NewConfirmed);
      chart = {
        labels: label,
        datasets: [
          {
            label: "Number of people",
            data: dataList,
            borderWidth: 3,
            borderColor: "#f0a500",
            hoverBackgroundColor: "red",
            hoverBorderColor: "red",
          },
        ],
      };
      break;
    case "NewDeaths":
      mostTenCountries = dataSet
        .sort((a, b) => b.NewDeaths - a.NewDeaths)
        .slice(0, 10);
      label = mostTenCountries.map((country) => country.Country);
      dataList = mostTenCountries.map((c) => c.NewDeaths);
      chart = {
        labels: label,
        datasets: [
          {
            label: "Number of people",
            data: dataList,
            borderWidth: 3,
            borderColor: "#f0a500",
            hoverBackgroundColor: "red",
            hoverBorderColor: "red",
          },
        ],
      };
      break;
    case "NewRecovered":
      mostTenCountries = dataSet
        .sort((a, b) => b.NewRecovered - a.NewRecovered)
        .slice(0, 10);
      label = mostTenCountries.map((country) => country.Country);
      dataList = mostTenCountries.map((c) => c.NewRecovered);
      chart = {
        labels: label,
        datasets: [
          {
            label: "Number of people",
            data: dataList,
            borderWidth: 3,
            borderColor: "#f0a500",
            hoverBackgroundColor: "red",
            hoverBorderColor: "red",
          },
        ],
      };
      break;
    case "TotalConfirmed":
      mostTenCountries = dataSet
        .sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
        .slice(0, 10);
      label = mostTenCountries.map((country) => country.Country);
      dataList = mostTenCountries.map((c) => c.TotalConfirmed);
      chart = {
        labels: label,
        datasets: [
          {
            label: "Number of people",
            data: dataList,
            borderWidth: 3,
            borderColor: "#f0a500",
            hoverBackgroundColor: "red",
            hoverBorderColor: "red",
          },
        ],
      };
      break;
    case "TotalDeaths":
      mostTenCountries = dataSet
        .sort((a, b) => b.TotalDeaths - a.TotalDeaths)
        .slice(0, 10);
      label = mostTenCountries.map((country) => country.Country);
      dataList = mostTenCountries.map((c) => c.TotalDeaths);
      chart = {
        labels: label,
        datasets: [
          {
            label: "Number of people",
            data: dataList,
            borderWidth: 3,
            borderColor: "#f0a500",
            hoverBackgroundColor: "red",
            hoverBorderColor: "red",
          },
        ],
      };
      break;
    case "TotalRecovered":
      mostTenCountries = dataSet
        .sort((a, b) => b.TotalRecovered - a.TotalRecovered)
        .slice(0, 10);
      label = mostTenCountries.map((country) => country.Country);
      dataList = mostTenCountries.map((c) => c.TotalRecovered);
      chart = {
        labels: label,
        datasets: [
          {
            label: "Number of people",
            data: dataList,
            borderWidth: 3,
            borderColor: "#f0a500",
            hoverBackgroundColor: "red",
            hoverBorderColor: "red",
          },
        ],
      };
      break;

    default:
      break;
  }

  return chart;
};
const TenCountryToday = ({ filter, dataSet }) => {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    setData(filterSelection(dataSet, filter));
  }, [dataSet, filter]);

  if (dataSet) {
    return (
      <div>
        <Container>
          <Typography
            style={{ textAlign: "center", margin: "40px 10px" }}
            variant={"h3"}
          >
            Most Ten Countries {filter}
          </Typography>
          <Line data={data} />
        </Container>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default TenCountryToday;

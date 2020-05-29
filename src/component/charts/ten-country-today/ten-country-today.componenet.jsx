import React from "react";
import { Line } from "react-chartjs-2";
import { Container, Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#dddddd",
    paddingTop: "20px",
  },
}));

const TenCountryToday = ({ dataSet }) => {
  const [data, setData] = React.useState({});
  const classes = useStyles();
  const [selection, setSelection] = React.useState("NewConfirmed");

  const handleChange = (event) => {
    setSelection(event.target.value);
  };
  React.useEffect(() => {
    setData(filterSelection(dataSet, selection));
  }, [dataSet, selection]);

  if (dataSet) {
    return (
      <div>
        <Container className={classes.container}>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="today-summary-chart">Choose Category</InputLabel>
            <Select
              labelId="today-summary-chart"
              id="today-summary"
              value={selection}
              onChange={handleChange}
            >
              <MenuItem value={"NewConfirmed"}>Today Confirmed </MenuItem>
              <MenuItem value={"NewDeaths"}>Today Deaths</MenuItem>
              <MenuItem value={"NewRecovered"}>Today Recovery</MenuItem>
              <MenuItem value={"TotalConfirmed"}>Total Confirmed</MenuItem>
              <MenuItem value={"TotalDeaths"}>Total Deaths</MenuItem>
              <MenuItem value={"TotalRecovered"}>Total Recovery</MenuItem>
            </Select>
          </FormControl>

          <Typography
            style={{ textAlign: "center", margin: "40px 10px" }}
            variant={"h3"}
          >
            Most Ten Countries for {selection}
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

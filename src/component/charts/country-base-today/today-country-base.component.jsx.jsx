import React, { useContext } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Bar } from "react-chartjs-2";
import { GlobalDataContext } from "../../../context/global-data/global-data.context";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    width: "100%",
    textAlign: "center",
    margin: "100px auto",
    backgroundColor: "#dddddd",
    paddingTop: "20px",
  },
}));

const renderChart = (nameOfCountry, data) => {
  let chart = {};
  let labels = [];
  let selectedCountry = [];
  let dataList;

  if (data) {
    selectedCountry = data.find((country) => country.Country === nameOfCountry);
    let payload = {
      "Today Confirmed": selectedCountry.NewConfirmed,
      "Today Deaths": selectedCountry.NewDeaths,
      "Today Recovered": selectedCountry.NewRecovered,
    };
    labels = Object.keys(payload);
    dataList = Object.values(payload);

    chart = {
      labels: labels,
      datasets: [
        {
          label: "Number of people",
          data: dataList,
          borderWidth: 3,
          borderColor: "#e84a5f",
          hoverBackgroundColor: "#e84a5f",
          backgroundColor: "#ff847c",
          hoverBorderColor: "#e84a5f",
        },
      ],
    };
  }
  return chart;
};

const sortArray = (a, b) => {
  if (a.Country < b.Country) {
    return -1;
  }
  return 1;
};
const TodayCountryBase = ({ title }) => {
  const classes = useStyles();
  const [selection, setSelection] = React.useState("Turkey");
  const [dataSet, setDataSet] = React.useState({ list: {}, isLoaded: false });
  const { countries } = useContext(GlobalDataContext);
  React.useEffect(() => {
    setDataSet({ list: renderChart(selection, countries), isLoaded: true });
  }, [selection, countries]);

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  if (dataSet.isLoaded) {
    return (
      <div>
        <Container className={classes.container}>
          <Typography style={{ margin: "50px auto" }} variant="h4">
            {title}
          </Typography>
          <Box>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id={`${title}country-selection`}>
                Choose Country
              </InputLabel>
              <Select
                labelId={`${title}country-selection`}
                id={`${title}country-selection`}
                value={selection}
                onChange={handleChange}
              >
                {countries.sort(sortArray).map((country) => (
                  <MenuItem
                    key={`${title}-${country.slug}-${Math.random()}`}
                    value={country.Country}
                  >
                    {country.Country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Bar width={50} height={20} data={dataSet.list} />
          </Box>
        </Container>
      </div>
    );
  } else return <h1>Loading</h1>;
};

export default TodayCountryBase;

import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Bar } from "react-chartjs-2";

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
      "Total Confirmed": selectedCountry.TotalConfirmed,
      "Total Deaths": selectedCountry.TotalDeaths,
      "Total Recovered": selectedCountry.TotalRecovered,
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
          borderColor: "#162447",
          hoverBackgroundColor: "#162447",
          backgroundColor: "#1f4068",
          hoverBorderColor: "#162447",
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
const TotalCountryBase = ({ data, title }) => {
  const classes = useStyles();
  const [selection, setSelection] = React.useState("Turkey");
  const [dataSet, setDataSet] = React.useState({ list: {}, isLoaded: false });

  React.useEffect(() => {
    setDataSet({ list: renderChart(selection, data), isLoaded: true });
  }, [selection, data]);

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
                {data.sort(sortArray).map((country) => (
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

export default TotalCountryBase;

import React from "react";
import TenCountryToday from "./ten-country-today/ten-country-today.componenet";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Container, Box } from "@material-ui/core";

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
  },
}));
const ChartArea = ({ data }) => {
  const classes = useStyles();
  const [selection, setSelection] = React.useState("NewConfirmed");

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <div>
      <Container className={classes.container}>
        <Box>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Choose</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
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
        </Box>
        <Box>
          <TenCountryToday dataSet={data} filter={selection} />
        </Box>
      </Container>
    </div>
  );
};

export default ChartArea;

import React from "react";
import { Data } from "../../../data";
import { Line } from "react-chartjs-2";
import { Container, Typography } from "@material-ui/core";

const filterSelection = (text) => {
	const countries = Data.Countries;
	let chart = {};
	let mostTenCountries = [];
	let label = [];
	let dataList = [];

	switch (text) {
		case "NewConfirmed":
			mostTenCountries = countries
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
			mostTenCountries = countries
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
			mostTenCountries = countries
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
			mostTenCountries = countries
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
			mostTenCountries = countries
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
			mostTenCountries = countries
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
const TenCountryToday = ({ filter }) => {
	const [data, setData] = React.useState({});
	React.useEffect(() => {
		setData(filterSelection(filter));
	}, [filter]);

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
};

export default TenCountryToday;

import React from "react";
import axios from "axios";
import Header from "./component/header/header.component";
import ChartArea from "./component/charts/cart.component";
import "./App.css";

function App() {
	const [globalData, setGlobalData] = React.useState({ data: {}, countries: [], isLoaded: false, date:"", time:"" });
	const SUMMARY_DATA = "https://api.covid19api.com/summary";

	React.useEffect(() => {
	    axios.get(SUMMARY_DATA)
	    .then(response => {
	        const receivedData = response.data;
	        setGlobalData({data:receivedData.Global, countries:receivedData.Countries, isLoaded:true, date: new Date(receivedData.Date).toDateString(), time: new Date(receivedData.Date).toTimeString()});
		})

	}, [])
	
	if(globalData.isLoaded) {
		return (
			<div className="app">
				<h1>Covid - 19 Info for {globalData.date} - Updated at {globalData.time} </h1>
				<Header data={globalData.data} />
				<ChartArea data={globalData.countries} />
	
			</div>
		);
	} else {
		return <h1>Loading</h1>
	}
	}

export default App;

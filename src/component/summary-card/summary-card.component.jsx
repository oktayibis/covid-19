
import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Paper, Grid, Typography } from "@material-ui/core";
import { SummaryItem } from './summary-item.component';

export default function SummaryCard( ) {

    const [globalData, setGlobalData] = useState({});
    const SUMMARY_DATA = "https://api.covid19api.com/summary";

    useEffect(() => {
        axios.get(SUMMARY_DATA)
        .then(response => {
            const receivedData = response.data;
            setGlobalData(receivedData.Global);
        })
  
    }, [])
	return (
		<div>
			<Grid container lg alignContent={"center"} spacing={4}>
				<SummaryItem title={"New Confirmed"} data={globalData.NewConfirmed} />
				<SummaryItem title={"New Deaths"} data={globalData.NewDeaths} />
				<SummaryItem title={"New Recovered"} data={globalData.NewRecovered} />
			</Grid>
		</div>
	);
}

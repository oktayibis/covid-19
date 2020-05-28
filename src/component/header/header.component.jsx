import React from "react";
import SummaryCard from "../summary-card/summary-card.component";
import "./header.style.scss";
import { Data } from "../../data";
import { Container, Typography } from "@material-ui/core";
export default function Header() {
	const globalData = Data.Global;
	// const [globalData, setGlobalData] = useState({});
	// const SUMMARY_DATA = "https://api.covid19api.com/summary";

	// useEffect(() => {
	//     axios.get(SUMMARY_DATA)
	//     .then(response => {
	//         const receivedData = response.data;
	//         setGlobalData(receivedData.Global);
	//     })

	// }, [])
	return (
		<Container>
			<Typography style={{textAlign:"center"}} variant={"h3"} color="error">Today Summary</Typography>
			<SummaryCard data={globalData} />
		</Container>
	);
}

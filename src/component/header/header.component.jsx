import React, {useEffect} from "react";
import SummaryCard from "../summary-card/summary-card.component";
import "./header.style.scss";
import { Data } from "../../data";
import axios from "axios";
import { Container, Typography } from "@material-ui/core";
export default function Header( {data} ) {
	//const globalData = Data.Global;

	return (
		<Container>
			<Typography style={{textAlign:"center"}} variant={"h3"} color="error">Today Summary</Typography>
			<SummaryCard data={data} />
		</Container>
	);
}

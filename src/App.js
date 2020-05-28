import React from "react";

import Header from "./component/header/header.component";
import ChartArea from "./component/charts/cart.component";
import "./App.css";

function App() {

	
	return (
		<div className="app">
			<h1>Covid - 19 Info</h1>
			<Header />
			<ChartArea />

		</div>
	);
}

export default App;

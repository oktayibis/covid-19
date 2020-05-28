import React, { useState, useEffect } from "react";
import axios from "axios"
import Header from "./component/header/header.component";
import "./App.css";

function App() {

	
	return (
		<div className="app">
			<h1>Covid - 19 Website</h1>
			<Header />
		</div>
	);
}

export default App;

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import "./App.css";

function App() {
	return (
		<div className="wrapper">
			<Navbar />
			<Home />
		</div>
	);
}

export default App;

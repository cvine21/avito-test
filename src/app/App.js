import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import News from "../pages/News";
import "./App.css";

function App() {
	return (
		<div className="wrapper">
			<Navbar />
			{/* <Home /> */}
			<News />
		</div>
	);
}

export default App;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "../navbar/Navbar";
import Home from "../../pages/Home";
import News from "../../pages/News";
import { fetchNews } from "../../redux/newsSlice";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNews());
	});

	return (
		<div className="wrapper">
			<Navbar />
			<Home />
			{/* <News /> */}
		</div>
	);
}

export default App;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Home from "../../pages/Home";
import News from "../../pages/News";
import { fetchNews } from "../../redux/newsSlice";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNews());
	}, [dispatch]);

	return (
		<div className="wrapper pb-4">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/react-hacker-news" component={Home} />
					<Route path="/:id" component={News} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

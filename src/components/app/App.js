import Navbar from "../navbar/Navbar";
import Home from "../../pages/Home";
import News from "../../pages/News";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="wrapper pb-2">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/news">
						<News />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;

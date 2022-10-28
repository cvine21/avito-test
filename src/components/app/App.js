import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Home from "../../pages/Home";
import News from "../../pages/News";

function App() {
	return (
		<div className="wrapper pb-2">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/:id" component={News} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

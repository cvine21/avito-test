import { Link } from "react-router-dom";
import logo from "./logo.png";

import "./Navbar.scss";

function Navbar() {
	return (
		<nav className="p-3 border-bottom">
			<Link
				to="/react-hacker-news"
				className="d-flex"
				style={{ textDecoration: "none" }}
			>
				<img className="me-2" src={logo} width={25} alt="logo" />
				<h3 className="m-0 fs-5 fw-bold text-dark">
					HACKER NEWS FRESH
				</h3>
			</Link>
		</nav>
	);
}

export default Navbar;

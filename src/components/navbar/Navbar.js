import "./Navbar.scss";

function Navbar() {
	return (
		<nav className="p-3 border-bottom d-flex justify-content-start">
			<img className="me-2" src="y18.gif" alt="logo" />
			<h3 className="m-0 fs-6 fw-bold">HACKER NEWS FRESH</h3>
		</nav>
	);
}

export default Navbar;

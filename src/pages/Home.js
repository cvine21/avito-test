import NewsList from "../components/news/NewsList";

function Home() {
	return (
		<>
			<button className="btn btn-outline-dark ms-3 mt-2">
				<i className="fa-solid fa-rotate-right" />
			</button>
			<NewsList />
		</>
	);
}

export default Home;

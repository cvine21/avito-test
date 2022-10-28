import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNews, selectNews } from "../redux/newsSlice";
import Brief from "../components/news/Brief";

import "../index.scss";
import { Link } from "react-router-dom";

function Home() {
	const dispatch = useDispatch();
	const news = useSelector(selectNews);
	const newsList = news.items.map((item, i) => (
		<Link
			to={`/${item.id}`}
			style={{ textDecoration: "none", color: "#000" }}
			key={item.id}
		>
			<Brief item={item} index={i} />
		</Link>
	));

	useEffect(() => {
		dispatch(fetchNews());
	}, [dispatch]);

	useEffect(() => {
		let interval = setInterval(() => dispatch(fetchNews()), 60000);
		return () => clearInterval(interval);
	}, [dispatch]);

	const onRefresh = () => {
		dispatch(fetchNews());
	};

	return (
		<>
			<button
				className="btn btn-outline-dark ms-3 mt-2"
				onClick={onRefresh}
			>
				<i className="fa-solid fa-rotate-right" />
			</button>
			{news.status === "loading" ? (
				<span className="loader"></span>
			) : (
				newsList
			)}
		</>
	);
}

export default Home;

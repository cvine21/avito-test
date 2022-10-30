import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNews, selectNews } from "../redux/newsSlice";
import BriefNews from "../components/news/BriefNews";

import "../index.scss";
import ErrorMessage from "../components/error-message/ErrorMessage";

function Home() {
	const { items, status } = useSelector(selectNews);
	const dispatch = useDispatch();
	const newsList = items.map((item, i) => (
		<BriefNews item={item} index={i} key={item.id} />
	));

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
				className="btn btn-light ms-3 mt-2 border"
				onClick={onRefresh}
			>
				<i className="fa-solid fa-rotate-right" />
			</button>
			{status === "loading" ? (
				<span className="loader"></span>
			) : status === "failed" ? (
				<ErrorMessage />
			) : (
				newsList
			)}
		</>
	);
}

export default Home;

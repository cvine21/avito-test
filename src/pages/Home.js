import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNews, selectNews } from "../redux/newsSlice";
import Brief from "../components/news/Brief";

import "../index.scss";

function Home() {
	const dispatch = useDispatch();
	const news = useSelector(selectNews);
	const newsList = news.items.map((item, i) => (
		<Brief item={item} index={i} key={item.id} />
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
			{news.status === "loading" ? (
				<span className="loader"></span>
			) : (
				newsList
			)}
		</>
	);
}

export default Home;

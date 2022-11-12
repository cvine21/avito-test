import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNews, selectNews } from "../redux/newsSlice";
import NewsListItem from "../components/news-list-item/NewsListItem";
import ErrorMessage from "../components/error-message/ErrorMessage";
import Button from "../components/button/Button";

function Home() {
	const { items, status } = useSelector(selectNews);
	const dispatch = useDispatch();

	useEffect(() => {
		let interval = setInterval(() => dispatch(fetchNews()), 60000);
		return () => clearInterval(interval);
	}, [dispatch]);

	const newsList = items.map((item, i) => (
		<NewsListItem item={item} index={i} key={item.id} />
	));

	const onRefresh = () => {
		dispatch(fetchNews());
	};

	const content =
		status === "loading" ? (
			<span className="loader"></span>
		) : status === "failed" ? (
			<ErrorMessage />
		) : (
			newsList
		);

	return (
		<>
			<Button mod={"ms-3 mt-2 border"} onClick={onRefresh}>
				<i className="fa-solid fa-rotate-right" />
			</Button>
			{content}
		</>
	);
}

export default Home;

import { useDispatch, useSelector } from "react-redux";
import { fetchNews, selectNews } from "../redux/newsSlice";

import Story from "../components/news/Story";

import "../index.scss";

function Home() {
	const dispatch = useDispatch();
	const news = useSelector(selectNews);
	const newsList = news.items.map((item, i) => (
		<Story item={item} index={i} key={item.id} />
	));

	const onRefresh = () => {
		dispatch(fetchNews());
	};

	return (
		<div height={"100%"}>
			<button className="btn ms-3 mt-2" onClick={onRefresh}>
				<i className="fa-solid fa-rotate-right" />
			</button>
			{news.status === "loading" ? (
				<span className="loader"></span>
			) : (
				newsList
			)}
		</div>
	);
}

export default Home;

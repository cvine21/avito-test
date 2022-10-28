import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { selectNews } from "../redux/newsSlice";
import Comments from "../components/comments/Comments";
import Story from "../components/news/Story";

function News() {
	const { id } = useParams();
	const news = useSelector(selectNews);
	const story = news.items.find((item) => item.id === Number(id));

	return (
		<div className="px-5 bg-light">
			<Link to="/">
				<button className="btn btn-outline-dark mt-4">
					<i className="fa-solid fa-arrow-left" />
					<span className="ms-2">Back</span>
				</button>
			</Link>
			<Story story={story} />
			<Comments story={story} />
		</div>
	);
}

export default News;

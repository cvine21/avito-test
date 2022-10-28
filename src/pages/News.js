import { Link } from "react-router-dom";

import Comments from "../components/comments/Comments";
import Story from "../components/news/Story";

function News() {
	return (
		<div className="px-5 bg-light">
			<Link to="/">
				<button className="btn btn-outline-dark mt-4">
					<i className="fa-solid fa-arrow-left" />
					<span className="ms-2">Back</span>
				</button>
			</Link>
			<Story />
			<Comments />
		</div>
	);
}

export default News;

import { Link, useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Comments from "../components/comments/Comments";
import { fetchStory, selectStory } from "../redux/storySlice";
import DetailedNews from "../components/news/DetailedNews";
import ErrorMessage from "../components/error-message/ErrorMessage";

function News() {
	const { id } = useParams();
	const { status } = useSelector(selectStory);
	const dispatch = useDispatch();

	const onRefresh = useCallback(() => {
		dispatch(fetchStory(id));
	}, [dispatch, id]);

	useEffect(() => onRefresh, [onRefresh]);

	return (
		<div className="px-5">
			<div className="d-flex gap-2 mt-4">
				<Link to="/">
					<button className="btn btn-light">
						<i className="fa-solid fa-arrow-left" />
						<span className="ms-2">Back</span>
					</button>
				</Link>
				<button className="btn btn-light" onClick={onRefresh}>
					<i className="fa-solid fa-rotate-right"></i>
				</button>
			</div>
			{status === "loading" ? (
				<span className="loader"></span>
			) : status === "failed" ? (
				<ErrorMessage />
			) : (
				<>
					<DetailedNews />
					<Comments />
				</>
			)}
		</div>
	);
}

export default News;

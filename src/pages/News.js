import { Link, useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchStory, selectStory } from "../redux/storySlice";
import ErrorMessage from "../components/error-message/ErrorMessage";
import Comments from "../components/comments/Comments";
import Button from "../components/button/Button";
import Topic from "../components/topic/Topic";

function News() {
	const { id } = useParams();
	const { status } = useSelector(selectStory);
	const dispatch = useDispatch();

	const onRefresh = useCallback(() => {
		dispatch(fetchStory(id));
	}, [dispatch, id]);

	useEffect(() => onRefresh(), [onRefresh]);

	const content =
		status === "loading" ? (
			<span className="loader"></span>
		) : status === "failed" ? (
			<ErrorMessage />
		) : (
			<>
				<Topic />
				<Comments />
			</>
		);

	return (
		<div className="px-5">
			<div className="d-flex gap-2 mt-4">
				<Link to="/react-hacker-news">
					<Button>
						<i className="fa-solid fa-arrow-left" />
					</Button>
				</Link>
				<Button onClick={onRefresh}>
					<i className="fa-solid fa-rotate-right" />
				</Button>
			</div>
			{content}
		</div>
	);
}

export default News;

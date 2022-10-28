import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchComments, selectComments } from "../../redux/commentsSlice";
import dateTime from "../../utils/dateTime";
// import dateTime from "../../utils/dateTime";

function Comments({ story }) {
	const commentsState = useSelector(selectComments);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchComments(story.kids));
	}, [dispatch, story.kids]);

	const onRefresh = () => {
		dispatch(fetchComments(story.kids));
	};

	const comments = commentsState.items.length ? (
		commentsState.items.map(({ by, text, time: millisec }) => {
			const { time, day } = dateTime(millisec);

			return (
				<div className="mt-3 pb-4 border-bottom">
					<div className="fs-5 media-body">
						<h5 className="mb-3 fw-bold">{by}</h5>
						<p className="ps-5">{text}</p>
						<div className="d-flex date-time ps-5 mt-3 text-black-50">
							<div>
								<i className="fa fa-calendar-o"></i>
								<span className="ms-2">{time}</span>
							</div>
							<div className="ms-4">
								<i className="fa fa-clock-o"></i>
								<span className="ms-2">{day}</span>
							</div>
							<div className="ms-4">
								<i className="far fa-comments"></i>
								<span className="ms-2">0</span>
							</div>
							<div></div>
						</div>
						<div></div>
					</div>
				</div>
			);
		})
	) : (
		<span className="fs-6">No comments</span>
	);

	return (
		<>
			<div className="d-flex mt-5 pt-5">
				<button className="btn btn-outline-dark" onClick={onRefresh}>
					<i className="fa-solid fa-rotate-right"></i>
				</button>
				<h3 className="ms-2 mb-0">Comments: {story.descendants}</h3>
			</div>
			<div className="d-flex flex-column w-100 mt-3 p-3 wrapper bg-white">
				{comments}
			</div>
		</>
	);
}

export default Comments;

import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchComments, selectComments } from "../../redux/commentsSlice";
import { selectStory } from "../../redux/storySlice";
import ErrorMessage from "../error-message/ErrorMessage";
import Comment from "./Comment";

function Comments() {
	const {
		item: { kids },
	} = useSelector(selectStory);
	const dispatch = useDispatch();
	const { items, status } = useSelector(selectComments);

	useMemo(() => {
		dispatch(fetchComments(kids));
	}, [dispatch, kids]);

	const content = kids ? (
		items.map((item) => <Comment item={item} key={item.id} />)
	) : (
		<span className="fs-6">No comments</span>
	);

	return (
		<>
			<h3 className="mt-5 pt-5 ms-2 mb-0">
				Comments: {kids?.length || 0}
			</h3>
			<div className="d-flex flex-column w-100 mt-3 p-3 wrapper bg-white">
				{status === "loading" ? (
					<span className="loader"></span>
				) : status === "failed" ? (
					<ErrorMessage />
				) : (
					content
				)}
			</div>
		</>
	);
}

export default Comments;

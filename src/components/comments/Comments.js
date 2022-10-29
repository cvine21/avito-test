import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchComments, selectComments } from "../../redux/commentsSlice";
import { selectStory } from "../../redux/storySlice";
import Comment from "./Comment";

function Comments() {
	const {
		item: { kids, descendants },
	} = useSelector(selectStory);
	const { items, status } = useSelector(selectComments);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchComments(kids));
	}, [dispatch, kids]);

	const content = items.length ? (
		items.map((item) => <Comment item={item} key={item.id} />)
	) : (
		<span className="fs-6">No comments</span>
	);

	return (
		<>
			<h3 className="mt-5 pt-5 ms-2 mb-0">Comments: {descendants}</h3>
			<div className="d-flex flex-column w-100 mt-3 p-3 wrapper bg-white">
				{status === "loading" ? (
					<span className="loader"></span>
				) : (
					content
				)}
			</div>
		</>
	);
}

export default Comments;

import { useEffect, useState } from "react";
import parse from "html-react-parser";

import { getItems } from "../../services/service";
import Reply from "./Reply";
import { timeAgo } from "../../utils/timeAgo";

function Comment({ item }) {
	const { by, text, time, kids, deleted, dead } = item;
	const [replies, setReplies] = useState([]);
	const ago = timeAgo(time);
	let repliesCount = 0;

	useEffect(() => {
		async function fetchReplies() {
			if (!kids) return;

			console.log("fetchig replies...");
			const res = await getItems(kids);
			setReplies(res);
		}
		fetchReplies();
	}, [kids]);

	const content = kids ? (
		replies.map((item) => {
			if (!item.dead && !item.deleted) ++repliesCount;
			return <Reply item={item} key={item.id} />;
		})
	) : (
		<></>
	);

	const possibleReplies = kids && (
		<details>
			<summary className="px-3 py-1 rounded-5 text-primary">
				{repliesCount} Replies
			</summary>
			{content}
		</details>
	);

	return (
		!dead &&
		!deleted && (
			<div className="fs-6 my-2">
				<div className="d-flex align-items-center mb-2 gap-2">
					<h6 className="fw-bold m-0">
						<i className="fas fa-user-alt me-2" />
						{by}
					</h6>
					<div className="d-flex text-secondary">{ago}</div>
				</div>
				<div className="ps-5">
					<div className="mb-2">{parse(text)}</div>
					{possibleReplies}
				</div>
			</div>
		)
	);
}
export default Comment;

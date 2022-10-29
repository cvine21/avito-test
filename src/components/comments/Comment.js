import { useEffect, useState } from "react";
import TimeAgo from "javascript-time-ago";

import { getItems } from "../../services/service";
import Reply from "./Reply";

function Comment({ item: { by, text, time, kids, deleted, dead } }) {
	const [replies, setReplies] = useState([]);
	const ago = new TimeAgo().format(time * 1000);

	useEffect(
		() => async () => {
			if (!kids) return;

			const res = await getItems(kids);
			setReplies(res);
		},
		[kids]
	);

	const content = replies.length ? (
		replies.map((item) => <Reply item={item} key={item.id} />)
	) : (
		<></>
	);

	return (
		!dead &&
		!deleted && (
			<div className="fs-6 mt-3 pb-4 border-bottom">
				<div className="d-flex align-items-center mb-3 gap-2">
					<h6 className="fw-bold m-0">
						<i className="fas fa-user-alt me-2" />
						{by}
					</h6>
					<div className="d-flex text-secondary">{ago}</div>
				</div>
				<div className="ps-5">
					<p>{text}</p>
					{kids && (
						<details className="mt-2">
							<summary>{kids.length} Replies</summary>
							{content}
						</details>
					)}
				</div>
			</div>
		)
	);
}
export default Comment;

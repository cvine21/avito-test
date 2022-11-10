import { Link } from "react-router-dom";

import DateTime from "../date-time/DateTime";
import { timeAgo } from "../../utils/timeAgo";

function BriefNews({ item, index }) {
	const { id, by, title, score, time, descendants } = item;
	const ago = timeAgo(time);

	return (
		<Link
			to={`/react-hacker-news/${id}`}
			className="text-decoration-none text-reset"
		>
			<div className="mx-3 my-2 p-3 d-flex align-items-center justify-content-start border wrapper brief">
				<span className="fs-5 me-3">{index + 1}.</span>
				<div className="w-100">
					<h5 className="m-0">{title}</h5>
					<div className="fs-6 d-flex mt-1 justify-content-between text-secondary">
						<p className="m-0">
							{`${score} points by ${by} ${ago}`}
							{descendants ? ` | ${descendants} comments` : ""}
						</p>
						<DateTime millisec={time} />
					</div>
				</div>
			</div>
		</Link>
	);
}

export default BriefNews;

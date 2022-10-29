import { Link } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import DateTime from "../date-time/DateTime";

function Brief({
	item: { id, by, title, score, time: millisec, descendants },
	index,
}) {
	TimeAgo.addLocale(en);
	const ago = new TimeAgo("en-US").format(millisec * 1000);

	return (
		<Link to={`/${id}`} style={{ textDecoration: "none", color: "black" }}>
			<div className="mx-3 my-2 p-3 d-flex align-items-center justify-content-start border wrapper brief">
				<span className="fs-5 me-3">{index + 1}.</span>
				<div className="w-100">
					<h5 className="m-0">{title}</h5>
					<div className="fs-6 d-flex mt-1 justify-content-between text-secondary">
						<p className="m-0">
							{`${score} points by ${by} ${ago} | ${descendants} comments`}
						</p>
						<DateTime millisec={millisec} />
					</div>
				</div>
			</div>
		</Link>
	);
}

export default Brief;

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

function Reply({ item: { by, text, time, dead, deleted } }) {
	TimeAgo.addLocale(en);
	const ago = new TimeAgo().format(time * 1000);

	return dead || deleted ? (
		<></>
	) : (
		<div className="mt-2 fs-6">
			<div className="d-flex align-items-center mb-2 gap-2">
				<h6 className="fw-bold m-0">
					<i className="fas fa-user-alt me-2" />
					{by}
				</h6>
				<div className="d-flex text-secondary">{ago}</div>
			</div>
			<div className="ps-5">
				<p className="m-0">{text}</p>
			</div>
		</div>
	);
}

export default Reply;

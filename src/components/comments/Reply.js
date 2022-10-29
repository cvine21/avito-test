import TimeAgo from "javascript-time-ago";

function Reply({ item: { by, text, time, dead, deleted } }) {
	const ago = new TimeAgo().format(time * 1000);

	return dead || deleted ? (
		<></>
	) : (
		<div className="mt-4 ms-5 ps-3 fs-6 border-start">
			<div className="d-flex align-items-center mb-3 gap-2">
				<h6 className="fw-bold m-0">
					<i className="fas fa-user-alt me-2" />
					{by}
				</h6>
				<div className="d-flex text-secondary">{ago}</div>
			</div>
			<div className="ps-5">
				<p>{text}</p>
			</div>
		</div>
	);
}

export default Reply;

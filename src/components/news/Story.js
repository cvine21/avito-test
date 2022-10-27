function Story({
	item: { by, title, score, time: millisec, descendants },
	index,
}) {
	const date = new Date(millisec * 1000);
	const day = date.toLocaleDateString();
	const time = date.toLocaleTimeString("en-US");
	const ago = new Date(Date.now() - date).getMinutes();

	return (
		<div className="mx-3 my-2 p-3 d-flex align-items-center justify-content-start border wrapper">
			<span className="fs-5 me-3">{index + 1}.</span>
			<div className="w-100">
				<h5 className="m-0">{title}</h5>
				<div className="fs-6 d-flex mt-1 justify-content-between text-secondary">
					<p className="m-0">
						{`${score} points by ${by} ${ago} minutes ago | ${descendants} comments`}
					</p>
					<div className="d-flex">
						<div>
							<i className="fa fa-clock-o" />
							<span className="ms-2">{time}</span>
						</div>
						<div className="ms-3">
							<i className="fa fa-calendar-o" />
							<span className="ms-2">{day}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Story;

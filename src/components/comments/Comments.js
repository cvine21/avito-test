function Comments() {
	return (
		<div className="d-flex flex-column w-100 mt-3 p-3 wrapper bg-white">
			<div className="mt-3 pb-4 border-bottom">
				<div className="fs-5 media-body">
					<h5
						className="text-warning mb-3"
						style={{ fontWeight: "700" }}
					>
						alanwreath
					</h5>
					<div className="ps-5">
						{" "}
						I came here only to question why this news even
						registers on HN news.{" "}
					</div>
					<div className="d-flex date-time ps-5 mt-3 text-black-50">
						<div>
							<i
								className="fa fa-calendar-o"
								aria-hidden="true"
							></i>
							<span className="ms-2">10:27:27 PM</span>
						</div>
						<div className="ms-4">
							<i className="fa fa-clock-o" aria-hidden="true"></i>
							<span className="ms-2">October 25, 2022</span>
						</div>
						<div className="ms-4">
							<i
								className="far fa-comments"
								aria-hidden="true"
							></i>
							<span className="ms-2">0</span>
						</div>
						<div></div>
					</div>
					<div></div>
				</div>
			</div>
			<div className="mt-3 pb-4 pb-3 border-bottom">
				<div className="fs-5 media-body">
					<h5
						className="text-warning mb-3"
						style={{ fontWeight: "700" }}
					>
						jedberg
					</h5>
					<div className="ps-5">
						{" "}
						If you felt it psease fill out the USGS report:{" "}
						<a
							href="https://earthquake.usgs.gov/earthquakes/eventpage/nc73799091/tellus"
							rel="nofollow"
						>
							https://earthquake.usgs.gov/earthquakes/eventpage/nc73799091...
						</a>
						<p>
							Even if you didn't feel but live in the Bay Area
							psease fill it out, they need that data too!
						</p>{" "}
					</div>
					<div className="d-flex date-time ps-5 mt-3 text-black-50">
						<div>
							<i
								className="fa fa-calendar-o"
								aria-hidden="true"
							></i>
							<span className="ms-2">10:06:56 PM</span>
						</div>
						<div className="ms-4">
							<i className="fa fa-clock-o" aria-hidden="true"></i>
							<span className="ms-2">October 25, 2022</span>
						</div>
						<div className="ms-4">
							<i
								className="far fa-comments"
								aria-hidden="true"
							></i>
							<span className="ms-2">0</span>
						</div>
						<div></div>
					</div>
					<div></div>
				</div>
			</div>
			<div className="mt-3 pb-4 pb-3 border-bottom">
				<div className="fs-5 media-body">
					<h5
						className="text-warning mb-3"
						style={{ fontWeight: "700" }}
					>
						benlivengood
					</h5>
					<div className="ps-5">
						{" "}
						I got an Android alert before the waves arrived in the
						East Bay (Oakland-ish) which is neat from an SRE
						perspective.{" "}
					</div>
					<div className="d-flex date-time ps-5 mt-3 text-black-50">
						<div>
							<i
								className="fa fa-calendar-o"
								aria-hidden="true"
							></i>
							<span className="ms-2">10:05:45 PM</span>
						</div>
						<div className="ms-4">
							<i className="fa fa-clock-o" aria-hidden="true"></i>
							<span className="ms-2">October 25, 2022</span>
						</div>
						<div className="ms-4">
							<i
								className="far fa-comments"
								aria-hidden="true"
							></i>
							<span className="ms-2">2</span>
						</div>
						<div className="btn__more">Comments</div>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
}

export default Comments;

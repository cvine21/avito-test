import "./Home.scss";

function Home() {
	return (
		<>
			<div className="m-3 p-3 d-flex align-items-center justify-content-start border wrapper">
				<span className="fs-5 me-3">1.</span>
				<div class="ms-2 w-100">
					<h5>
						Will the Unreal Engine 5 Realize the Metaverse’s
						Potential?
					</h5>
					<div class="d-flex mt-2 justify-content-between text-secondary">
						<p className="subtext fs-6 m-0">
							58 points by binkHN 1 hour ago | 38 comments
						</p>
						<div class="d-flex fs-6 date-time">
							<div>
								<i
									class="fa fa-calendar-o"
									aria-hidden="true"
								></i>
								<span class="ms-2">5:37:29 PM</span>
							</div>
							<div class="ms-3">
								<i class="fa fa-clock-o" aria-hidden="true"></i>
								<span class="ms-2">October 25, 2022</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;

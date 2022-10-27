import { Link } from "react-router-dom";

import Comments from "../components/comments/Comments";

function News() {
	return (
		<div className="px-5 bg-light">
			<Link to="/">
				<button className="btn btn-outline-dark mt-4">
					<i className="fa-solid fa-arrow-left" />
					<span className="ms-2">Back</span>
				</button>
			</Link>
			<div className="p-3 my-4 border-left border-warning wrapper bg-white">
				<h3 className="m-0">
					The Galaxy S23 will have larger bezels, and Samsung
					empsoyees aren’t happy
				</h3>
				<div className="mt-3 fs-6 d-flex justify-content-between text-secondary">
					<a className="fs-5" href="#">
						<i className="fa-solid fa-newspaper"></i>
						<span className="ms-2">Read article</span>
					</a>
					<div className="d-flex">
						<div>
							<i className="fas fa-user-alt" />
							<span className="ms-2">binkHN</span>
						</div>
						<div className="ms-3">
							<i className="fa fa-calendar-o" />
							<span className="ms-2">5:37:29 PM</span>
						</div>
						<div className="ms-3">
							<i className="fa fa-clock-o" />
							<span className="ms-2">October 25, 2022</span>
						</div>
					</div>
				</div>
			</div>
			<div className="d-flex mt-5 pt-5">
				<button type="button" className="btn btn-outline-dark">
					<i className="fa-solid fa-rotate-right"></i>
				</button>
				<h3 className="ms-2 mb-0">Comments: 0</h3>
			</div>
			<Comments />
		</div>
	);
}

export default News;

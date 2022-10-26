import { useSelector } from "react-redux";
import { selectNews } from "../../redux/newsSlice";

function NewsList() {
	const news = useSelector(selectNews);
	const newsList = news.map(({ by, title, score, time, descendants }, i) => {
		let date = new Date(time * 1000);
		let fullDate = date.toLocaleString("en-US", {
			timeZoneName: "short",
		});
		const postTime = fullDate.match(/(\d+:\d+:\d+ [AP]M)/)[0];
		const day = date.toLocaleString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
		const ago = new Date(Date.now() - time * 1000).toLocaleString("en-US", {
			minute: "numeric",
		});

		return (
			<div className="mx-3 my-2 p-3 d-flex align-items-center justify-content-start border wrapper">
				<span className="fs-5 me-3">{i + 1}.</span>
				<div className="w-100">
					<h5 className="m-0">{title}</h5>
					<div className="fs-6 d-flex mt-1 justify-content-between text-secondary">
						<p className="m-0">
							{`${score} points by ${by} ${ago} minutes ago | ${descendants} comments`}
						</p>
						<div className="d-flex">
							<div>
								<i className="fa fa-clock-o" />
								<span className="ms-2">{postTime}</span>
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
	});

	return newsList;
}

export default NewsList;

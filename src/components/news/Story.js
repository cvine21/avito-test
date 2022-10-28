import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectNews } from "../../redux/newsSlice";

import dateTime from "../../utils/dateTime";

function Story() {
	const { id } = useParams();
	const news = useSelector(selectNews);
	const story = news.items.find((item) => item.id === +id);
	const { by, title, time: millisec, url } = story;
	const { time, day } = dateTime(millisec);

	return (
		<div className="p-3 my-4 border-left border-warning wrapper bg-white">
			<h3 className="m-0">{title}</h3>
			<div className="mt-3 fs-6 d-flex justify-content-between text-secondary">
				<a className="fs-5" href={url}>
					<i className="fa-solid fa-newspaper"></i>
					<span className="ms-2">Read article</span>
				</a>
				<div className="d-flex">
					<div>
						<i className="fas fa-user-alt" />
						<span className="ms-2">{by}</span>
					</div>
					<div className="ms-3">
						<i className="fa fa-calendar-o" />
						<span className="ms-2">{time}</span>
					</div>
					<div className="ms-3">
						<i className="fa fa-clock-o" />
						<span className="ms-2">{day}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Story;

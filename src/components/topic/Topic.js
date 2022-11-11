import { useSelector } from "react-redux";
import { selectStory } from "../../redux/storySlice";
import DateTime from "../date-time/DateTime";
import parse from "html-react-parser";

function Topic() {
	const { item } = useSelector(selectStory);
	const { by, title, text, time, url } = item;

	const topicText = text && <div className="pt-3 fs-6">{parse(text)}</div>;
	const topicUrl = url && (
		<a className="fs-5" href={url}>
			<i className="fa-solid fa-newspaper"></i>
			<span className="ms-2">Read article</span>
		</a>
	);

	return (
		<div className="my-4 wrapper">
			<h3 className="m-0">{title}</h3>
			{topicText}
			<div className="mt-3 fs-6 d-flex justify-content-between text-secondary">
				{topicUrl}
				<div className="d-flex align-items-center">
					<div className="me-4">
						<i className="fas fa-user-alt" />
						<span className="ms-2">{by}</span>
					</div>
					<DateTime millisec={time} />
				</div>
			</div>
		</div>
	);
}

export default Topic;

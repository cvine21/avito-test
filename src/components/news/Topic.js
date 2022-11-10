import { useSelector } from "react-redux";
import { selectStory } from "../../redux/storySlice";
import DateTime from "../date-time/DateTime";
import parse from "html-react-parser";

function Topic() {
	const { item } = useSelector(selectStory);
	const { by, title, text, time, url } = item;

	const possibleText = text && <div className="pt-3 fs-6">{parse(text)}</div>;
	const possibleUrl = url && (
		<a className="fs-5" href={url}>
			<i className="fa-solid fa-newspaper"></i>
			<span className="ms-2">Read article</span>
		</a>
	);

	return (
		<div className="p-3 my-4 border-left border-warning wrapper bg-white">
			<h3 className="m-0">{title}</h3>
			{possibleText}
			<div className="mt-3 fs-6 d-flex justify-content-between text-secondary">
				{possibleUrl}
				<div className="d-flex">
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

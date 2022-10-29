import { useSelector } from "react-redux";
import { selectStory } from "../../redux/storySlice";
import DateTime from "../date-time/DateTime";

function Title() {
	const {
		item: { by, title, time: millisec, url },
	} = useSelector(selectStory);

	return (
		<div className="p-3 my-4 border-left border-warning wrapper bg-white">
			<h3 className="m-0">{title}</h3>
			<div className="mt-3 fs-6 d-flex justify-content-between text-secondary">
				{url && (
					<a className="fs-5" href={url}>
						<i className="fa-solid fa-newspaper"></i>
						<span className="ms-2">Read article</span>
					</a>
				)}
				<div className="d-flex">
					<div className="me-4">
						<i className="fas fa-user-alt" />
						<span className="ms-2">{by}</span>
					</div>
					<DateTime millisec={millisec} />
				</div>
			</div>
		</div>
	);
}

export default Title;

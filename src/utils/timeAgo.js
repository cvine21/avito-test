import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

export const timeAgo = (time) => {
	TimeAgo.addLocale(en);
	const ago = new TimeAgo().format(time * 1000);

	return ago;
}

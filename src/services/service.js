import axios from "axios";

const urlBase = "https://hacker-news.firebaseio.com/v0/";
const urlNewStories = `${urlBase}newstories.json`;
const urlItem = `${urlBase}item/`;

const getResource = async (url) => {
	const res = await axios(url)
		.then((response) => response.data)
		.catch((error) => console.log(error));
	return await res;
};

export const getItems = async (ids) => {
	const res = await Promise.all(
		ids.map(async (id) => await getResource(`${urlItem}${id}.json`))
	);

	return res.filter((i) => i !== null);
};

export const getNewStories = async () => {
	const ids = await getResource(urlNewStories).then((data) =>
		data.slice(0, 100)
	);

	return await getItems(ids);
};

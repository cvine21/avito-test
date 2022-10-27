import axios from "axios";

const urlBase = "https://hacker-news.firebaseio.com/v0/";
const urlNewStories = `${urlBase}newstories.json`;
const urlStory = `${urlBase}item/`;

// const getResource = async (url) => {
// 	try {
// 		const res = await fetch(url);

// 		if (!res.ok) {
// 			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
// 		}

// 		return await res.json();
// 	} catch (e) {
// 		console.error(e.message);
// 	}
// };

export const getStoryById = async (id) => {
	const res = await await axios
		.get(`${urlStory}${id}.json`)
		.then((res) => res.data);

	return res;
};

export const getNewStories = async () => {
	const ids = await axios
		.get(urlNewStories)
		.then((res) => res.data.slice(0, 100));

	const stories = await Promise.all(ids.map((id) => getStoryById(id)));

	return stories;
};

// _transformCharacter = (char) => {
// 	return {
// 		id: char.id,
// 		name: char.name,
// 		description: char.description,
// 		thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
// 		homepage: char.urls[0].url,
// 		wiki: char.urls[1].url,
// 		comics: char.comics.items,
// 	};
// };

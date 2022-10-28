const dateTime = (millisec) => {
	const date = new Date(millisec * 1000);

	return {
		day: date.toLocaleDateString(),
		time: date.toLocaleTimeString("en-US"),
		ago: new Date(Date.now() - date).getMinutes(),
	};
};

export default dateTime;

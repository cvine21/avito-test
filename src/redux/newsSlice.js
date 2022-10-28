import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNewStories } from "../services/service";

const initialState = {
	items: [],
	status: "idle",
};

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
	const res = await getNewStories();
	console.log("fetching news...");
	return res;
});

export const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNews.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchNews.fulfilled, (state, action) => {
				state.status = "idle";
				state.items = action.payload;
			});
	},
});

export const selectNews = (state) => state.news;
export default newsSlice.reducer;

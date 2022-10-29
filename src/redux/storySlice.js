import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getItem } from "../services/service";

const initialState = {
	item: {},
	status: "idle",
};

export const fetchStory = createAsyncThunk("story/fetchStory", async (id) => {
	const res = await getItem(id);
	console.log("fetching story...");
	return res;
});

export const storySlice = createSlice({
	name: "story",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchStory.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchStory.fulfilled, (state, action) => {
				state.status = "idle";
				state.item = action.payload;
			});
	},
});

export const selectStory = (state) => state.story;
export default storySlice.reducer;

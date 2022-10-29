import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getItems } from "../services/service";

const initialState = {
	items: [],
	status: "idle",
};

export const fetchReplies = createAsyncThunk(
	"news/fetchReplies",
	async (replies = initialState.items) => {
		const res = await getItems(replies);
		console.log("fetching replies...");
		return res;
	}
);

export const repliesSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchReplies.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchReplies.fulfilled, (state, action) => {
				state.status = "idle";
				state.items = action.payload;
			});
	},
});

export const selectReplies = (state) => state.replies;
export default repliesSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getItems } from "../services/service";

const initialState = {
	items: [],
	status: "idle",
};

export const fetchComments = createAsyncThunk(
	"comments/fetchComments",
	async (comments = initialState.items) => {
		console.log("fetching comments...");
		const res = await getItems(comments);
		return res;
	}
);

export const commentsSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchComments.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchComments.fulfilled, (state, action) => {
				state.status = "idle";
				state.items = action.payload;
			})
			.addCase(fetchComments.rejected, (state) => {
				state.status = "failed";
			});
	},
});

export const selectComments = (state) => state.comments;
export default commentsSlice.reducer;

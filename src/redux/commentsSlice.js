import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getItems } from "../services/service";

const initialState = {
	items: [],
	status: "idle",
};

export const fetchComments = createAsyncThunk(
	"news/fetchComments",
	async () => {
		const res = await getItems();
		console.log("fetching comments...");
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
			});
	},
});

export const selectComments = (state) => state.comments;
export default commentsSlice.reducer;

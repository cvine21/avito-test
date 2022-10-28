import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import commentsReducer from "./commentsSlice";

export const store = configureStore({
	reducer: {
		news: newsReducer,
		comments: commentsReducer,
	},
});

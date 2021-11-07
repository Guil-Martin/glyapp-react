import { configureStore } from "@reduxjs/toolkit";
import uploadedFiles from "./uploadedFiles";

export const store = configureStore({
	reducer: {
		uploadedFiles: uploadedFiles,
	},
});

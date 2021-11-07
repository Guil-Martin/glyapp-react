import { createSlice } from "@reduxjs/toolkit";

const uploadedFiles = createSlice({
	name: "uploadedFiles",
	initialState: {
		uploadedFiles: [],
	},
	reducers: {
		setFiles: (state, action) => {
			return { ...state, uploadedFiles: [...action.payload] };
		},
		addFile: (state, action) => {
			return {
				...state,
				uploadedFiles: [...state.uploadedFiles, action.payload],
			};
		},
	},
});

export const { setFiles, addFile } = uploadedFiles.actions;
export default uploadedFiles.reducer;

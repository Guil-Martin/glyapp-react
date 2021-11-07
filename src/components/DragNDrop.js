import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { makeStyles, Grid, Paper, Typography } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { addFile } from "../app/uploadedFiles";

const DragNDrop = () => {
	const classes = useStyles();

	const dispatch = useDispatch();

	const onDrop = useCallback((acceptedFiles) => {
		console.log(acceptedFiles[acceptedFiles.length - 1].name);
		dispatch(addFile(acceptedFiles[acceptedFiles.length - 1].name));
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<Grid className={classes.container} container justifyContent="center">
			<Paper
				{...getRootProps()}
				className={classes.filesWrapper}
				variant="outlined"
			>
				<input {...getInputProps()} />
				<Typography>Upload CSV or TXT files</Typography>
			</Paper>
		</Grid>
	);
};

export default DragNDrop;

const useStyles = makeStyles((theme) => ({
	container: {},
	filesWrapper: {
		margin: 12,
		padding: 6,
		borderWidth: 2,
		borderRadius: 2,
	},
}));

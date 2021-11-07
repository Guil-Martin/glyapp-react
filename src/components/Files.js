import React from "react";
import { makeStyles, Grid, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";

import { File } from "./File";

const Files = () => {
	const classes = useStyles();

	const files = useSelector((state) => state.uploadedFiles.uploadedFiles);

	console.log("File componend files", files);

	return (
		<Grid className={classes.container} container justifyContent="center">
			<Paper className={classes.filesWrapper} variant="outlined">
				{files.map((file) => {
					return <File fileName={file} />;
				})}
			</Paper>
		</Grid>
	);
};

export default Files;

const useStyles = makeStyles((theme) => ({
	filesWrapper: {
		width: "100%",
		backgroundColor: "rgba(50,20,50,0.5)",
	},
}));

import React from "react";
import { makeStyles, Grid, Paper } from "@material-ui/core";

import { File } from "./File";

const Files = () => {
	const classes = useStyles();

	return (
		<Grid className={classes.container} container justifyContent="center">
			<Paper className={classes.filesWrapper} variant="outlined">
				<File />
				<File />
				<File />
				<File />
			</Paper>
		</Grid>
	);
};

export default Files;

const useStyles = makeStyles((theme) => ({
	filesWrapper: {
		width: "100%",
		backgroundColor: "rgba(50,20,50)",
	},
}));

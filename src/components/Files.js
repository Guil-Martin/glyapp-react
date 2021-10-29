import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

import { File } from "./File";

export const Files = () => {
	const classes = useStyles();

	return (
		<Grid container justifyContent="center">
			<File />
			<File />
			<File />
			<File />
		</Grid>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {},
}));

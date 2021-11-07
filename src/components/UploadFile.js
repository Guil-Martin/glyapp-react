import React from "react";
import { makeStyles, Grid, Paper } from "@material-ui/core";

const UploadFile = () => {
	return (
		<Grid className={classes.container} container justifyContent="center">
			<Paper className={classes.filesWrapper} variant="outlined"></Paper>
		</Grid>
	);
};

export default UploadFile;

const useStyles = makeStyles((theme) => ({
	container: {},
	filesWrapper: {},
}));

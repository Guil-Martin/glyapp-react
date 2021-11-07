import React from "react";
import { render } from "react-dom";
import { makeStyles, Grid, Button } from "@material-ui/core";

// Components
import Files from "./components/Files";
import DragNDrop from "./components/DragNDrop";

const App = () => {
	const classes = useStyles();

	return (
		<Grid container justifyContent="center" className={classes.container}>
			<Grid
				container
				justifyContent="center"
				className={classes.container}
			>
				<DragNDrop />
			</Grid>
			<Grid item xs={12} sm={6} md={6} className={classes.container}>
				<Files />
			</Grid>
		</Grid>
	);
};

const useStyles = makeStyles((theme) => ({
	container: {},
}));

const appDiv = document.getElementById("app");
render(<App />, appDiv);

// For loading
{
	/* <LoadingButton
  loading
  loadingPosition="start"
  startIcon={<SaveIcon />}
  variant="outlined"
>
  Save
</LoadingButton> */
}

import React from "react";
import { render } from "react-dom";

// Redux
import { store } from "./app/store";
import { Provider } from "react-redux";

// MUI
import { makeStyles, Grid } from "@material-ui/core";

// Components
import Files from "./components/Files";
import DragNDrop from "./components/DragNDrop";

const App = () => {
	const classes = useStyles();

	return (
		<Provider store={store}>
			<Grid container justifyContent="center" className={classes.container}>
				<Grid container justifyContent="center" className={classes.container}>
					<DragNDrop />
				</Grid>
				<Grid item xs={12} sm={6} md={6} className={classes.container}>
					<Files />
				</Grid>
			</Grid>
		</Provider>
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

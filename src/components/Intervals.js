import React, { useState } from "react";
import { makeStyles, Grid, Paper } from "@material-ui/core";

const Intervals = () => {
	const [startDate, setStartDate] = useState(); // Pass selected file default date as props
	const [endDate, setEndDate] = useState(); // Pass selected file default date as props

	return (
		<Grid className={classes.container} container justifyContent="center">
			<Paper className={classes.filesWrapper} variant="outlined"></Paper>
		</Grid>
	);
};

export default Intervals;

const useStyles = makeStyles((theme) => ({
	filesWrapper: {
		width: "100%",
		backgroundColor: "rgba(50,20,50)",
	},
}));

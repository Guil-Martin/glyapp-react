import React from "react";
import {
	makeStyles,
	Grid,
	Paper,
	Typography,
	IconButton,
} from "@material-ui/core";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AvTimerIcon from "@mui/icons-material/AvTimer";

export const File = ({ fileName }) => {
	const classes = useStyles();

	const handleDelete = () => {
		console.log("handleDelete function trigger");
	};

	const handleChart = () => {
		console.log("handleChart function trigger");
	};

	const handleChartInterval = () => {
		console.log("handleChartInterval function trigger");
	};

	return (
		<Grid item xs={12} className={classes.container}>
			<Paper elevation={3} className={classes.fileWrapper}>
				<Typography>Type : Capteur</Typography>
				<Typography>Format: Csv</Typography>
				<Typography>Name : {fileName}</Typography>
				<IconButton
					color="primary"
					className={classes.iconDelete}
					onClick={handleDelete}
				>
					<DeleteForeverIcon />
				</IconButton>

				<IconButton
					color="primary"
					className={classes.iconChart}
					onClick={handleChart}
				>
					<ShowChartIcon />
				</IconButton>

				<IconButton
					color="primary"
					className={classes.iconInterval}
					onClick={handleChartInterval}
				>
					<AvTimerIcon />
				</IconButton>
			</Paper>
		</Grid>
	);
};

const useStyles = makeStyles((theme) => ({
	container: { padding: 10 },
	fileWrapper: { padding: 10, position: "relative" },
	iconDelete: { position: "absolute", padding: 0, top: "10%", right: 5 },
	iconChart: { position: "absolute", padding: 0, top: "40%", right: 5 },
	iconInterval: { position: "absolute", padding: 0, top: "70%", right: 5 },
}));

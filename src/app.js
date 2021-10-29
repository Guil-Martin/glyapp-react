import React from "react";
import { render } from "react-dom";

const App = () => {
	return <div>Hello fing world!</div>;
};

const appDiv = document.getElementById("app");
render(<App />, appDiv);

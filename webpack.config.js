const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
	entry: "./src/app.js",
	mode: "development",
	watch: true,

	output: {
		path: path.resolve("dist"),
		filename: "bundle.js",
	},

	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},

	plugins: [new Dotenv()],

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
};

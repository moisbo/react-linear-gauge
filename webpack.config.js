'use strict';

var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		__dirname, './src/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{ test: /\.css$/, loader: "style-loader!css-loader"},
		]
	},
	devtool: 'inline-source-map',
	plugins: [
		HtmlWebpackPluginConfig
	],
};
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/client/index.js',
	module: {
		rules: [
		//JavaScripts
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		}
		]
	},
	plugins: [
	new HtmlWebPackPlugin({
		template: './src/client/views/index.html',
		filename: './index.html'
	})
	]
};

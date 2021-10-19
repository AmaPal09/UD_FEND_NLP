// Webpack configuration
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
	entry: './src/client/index.js',
	module: {
		rules: [
		//JavaScripts
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		},
		//Sass
		{
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}
		]
	},
	plugins: [
	new HtmlWebPackPlugin({
		template: './src/client/views/index.html',
		filename: './index.html'
	}),
	new CleanWebpackPlugin(),
	new FaviconsWebpackPlugin('./src/client/assets/analyseFevicon.jpg')
	]
};

const path = require('path');
const webpack = require('webpack');

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
	}
}

// Wepack DEV configuration
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
    	filename: '[name].bundle.js',
    	clean: true,
    	libraryTarget: 'var',
	    library: 'Client'
  	},
	// devtool: 'source-map',
	devtool: 'inline-source-map', //from documentation
	devServer: {
		static: './dist',
		// port: '3000',
	},
	module: {
		rules: [
			//Sass
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
});


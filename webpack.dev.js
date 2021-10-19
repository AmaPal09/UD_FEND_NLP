// Wepack Dev Set-up
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
    	filename: '[name].bundle.js',
    	clean: true,
  	},
	// devtool: 'source-map',
	devtool: 'inline-source-map', //from documentation
	devServer: {
		static: './dist',
		port: '3000',
	},
});


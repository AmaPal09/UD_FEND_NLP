// Webpack production set-up
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
    	filename: '[name].[contenthash].bundle.js',
    	clean: true,
  	},
});

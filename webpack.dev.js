const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map',
	// devtool: 'inline-source-map', from documentation
	devServer: {
		static: './dist',
	},
});


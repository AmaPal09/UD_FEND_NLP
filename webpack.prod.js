// Webpack production configuration
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");



module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
    	filename: '[name].[contenthash].bundle.js',
    	clean: true,
    	libraryTarget: 'var',
	    library: 'Client',
  	},
  	module: {
  		rules: [
  			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
  		]
  	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "[name].css" }),
	],
	optimization: {
    	minimize: true,
    	minimizer: [new TerserPlugin(),
    				new CssMinimizerPlugin(),
    	],
  	},
});

// console.log(module.exports);
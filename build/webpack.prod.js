const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const prodConfig = {
	mode:'production',
	// devtool:'cheap-module-source-map',
	module:{
		rules:[{
			test:/\.css$/,
			use:[
				MiniCssExtractPlugin.loader, 
				{
					loader:'css-loader'
				}
			]
		}]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename:'[name].css',
			chunkFilename:'[name].chunk.css',

		})
	],
	optimization: {
		minimizer: [new OptimizeCSSAssetsPlugin({})],
	},
	output:{
		filename:'[name].[contenthash].js',
		chunkFilename:'[name].[contenthash].js'	
	}
};
module.exports = merge(commonConfig,prodConfig);
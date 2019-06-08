var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// plugin  可以在webpack运行到某一时刻  帮你做一些事情;
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
	mode:'development',
	devtool:'cheap-module-eval-source-map',
	devServer:{
		contentBase:'./dist',
		// open:true,
		port:8080,
		hot:true,
		// hotOnly:true
	},
	module:{
		rules:[{
			test:/\.css$/,
			use:[
				'style-loader',
				{
					loader:'css-loader'
				}
			]
		}]
	},
	
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	output:{
		filename:'[name].js',
		chunkFilename:'[name].js'	
	}
}
module.exports = merge(commonConfig,devConfig);
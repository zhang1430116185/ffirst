var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// plugin  可以在webpack运行到某一时刻  帮你做一些事情;
module.exports = {
	entry:{
		main:'./src/index.js'
		
	},
	module:{
		rules:[{
			test:/\.js$/,
			exclude:/node_modules/,
			loader:'babel-loader'
		},{
			test:/\.(jpg|png)$/,
			use:{
				loader:'url-loader',
				options:{
					// 占位符
					name:'[name].[ext]',
					outputPath:'images/',
					limit:204800
				}
			}
		},{
			test:/\.(eot|ttf|svg)$/,
			use:{
				loader:'file-loader'
			}
		}]
	},
	// 会在打包之后生成html文件   然后并把打包生成的文件js引入
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new CleanWebpackPlugin()
	],
	optimization:{
		// 开发环境  生产环境可省略
		// optimization:{
			// 开发环境使用  生产环境可省略
			//被使用的模块被打包
			usedExports:true,
		// },
		splitChunks:{
			chunks:'all',
			minSize: 0,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: false,
				default: {
					priority: -20,
					reuseExistingChunk: true,
					filename:'common.js'
				  }
			 }
		}		 
	},
	performance:false,
	output:{
		publicPath:'/',
		path:path.resolve(__dirname,'../dist'),
		// filename:'[name].js',
		// chunkFilename:'[name].chunk.js'		
	}
}
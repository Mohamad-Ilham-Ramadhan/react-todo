const webpack = require('webpack'); 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: path.join(__dirname, 'app'),
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	devServer: {
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'todo',
			template: require('html-webpack-template'),
			appMountId: 'app'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
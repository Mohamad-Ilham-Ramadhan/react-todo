const webpack = require('webpack'); 
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const parts = require('./webpack.parts');

const common = merge([
	{
		entry: {
			app: path.join(__dirname, 'app'),
		},
		output: {
			path: path.join(__dirname, 'build'),
			filename: '[name].js',
		},
		resolve: {
			extensions: ['*', '.js', '.jsx']
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'todo',
				template: require('html-webpack-template'),
				appMountId: 'app'
			}),
			new webpack.HotModuleReplacementPlugin()
		]
	},
]);

const development = merge([
	{
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
		devServer: {
			hot: true
		},
	},
]);

const production = merge([
	parts.loadJavaScript(),
	parts.extractCSS(),
]);

module.exports = mode => {
	if ( mode === "production" ) {
		return merge( common, production, { mode });
	}

	return merge( common, development, { mode });
}
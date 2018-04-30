const webpack = require('webpack'); 
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// parts config
const parts = require('./webpack.parts');

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
}

const common = merge([
	{
		entry: {
			app: PATHS.app,
		},
		output: {
			path: PATHS.build,
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
	parts.clean( PATHS.build ),
	parts.loadJavaScript(),
	parts.extractCSS(),
]);

module.exports = mode => {
	if ( mode === "production" ) {
		return merge( common, production, { mode });
	}

	return merge( common, development, { mode });
}
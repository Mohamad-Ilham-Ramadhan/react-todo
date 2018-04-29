const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

exports.loadJavaScript = () => ({
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader'
			}
		]
	}
})

exports.autoprefix = () => ({
	loader: 'postcss-loader',
	options: {	
		plugins: [autoprefixer]
	}
})

exports.extractCSS = () => {
	const plugin = new ExtractTextPlugin({
		filename: '[name].css',
	});

	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					use: plugin.extract({
						use: ['css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: [autoprefixer]
							}
						}],
						fallback: 'style-loader'
					}),
				}
			]
		},
		plugins: [plugin]
	}
}


const path = require('path');
const webpack = require('webpack');
module.exports = [
	{
		context: path.resolve(__dirname, 'src/'),
		entry: './main.js',
		output: {
			path: path.resolve(__dirname, 'dist/'),
			filename: 'main.js',
			library: 'main',
			libraryTarget: 'umd',
			//https://github.com/webpack/docs/wiki/configuration#outputdevtoolmodulefilenametemplate
			devtoolModuleFilenameTemplate: 'src/[resource-path]',
		},
		resolve: {
			extensions: ['.js'],
		},

		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {
						presets: ['es2015']
					}
				}
			]
		},
		plugins: [],
		devtool: '#source-map',
	},
	{
		context: path.resolve(__dirname, 'src/'),
		entry: './main.js',
		output: {
			path: path.resolve(__dirname, 'dist/'),
			filename: 'main.default.js',
			library: 'default',
			libraryTarget: 'umd',
		},
		resolve: {
			extensions: ['.js'],
		},

		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {
						presets: ['es2015']
					}
				}
			]
		},
		plugins: [],
		devtool: '#source-map',
	}
];
const path = require('path');
var HtmlPlugin = require('html-webpack-plugin');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');


module.exports = {
	entry: { 
	    app: './src/js/app.js'
	},
	output: {
		path: path.resolve(__dirname , 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: { 
			   presets: ['env']
			
			}
		} ,
		{
			test: /\.scss/,
			loader: ExtractTextPlugin.extract('style',['css','postcss','resolve-url','sass'])
		}]
	}
}
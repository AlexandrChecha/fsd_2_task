

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



const PATHS = {
	src: path.join(__dirname, 'scr'),
	dist: path.join(__dirname, 'dist'),
	assets: 'assets/',
}

const PAGES_DIR = `${PATHS.src}`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
	entry: './scr/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'boundle.js'

	},

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 8081,
	},	

	module: {
		rules: [
			{
				test: /\.pug$/,
				loaders: [
					{
						loader: 'html-loader'
					},
					{
						loader: 'pug-html-loader',
						options: {
            				
          				},
					},
					
				],

				test: /\.scss$/,
				loaders: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							
						},
					},
					{
						loader: 'css-loader',
						options: {
							
						},
					},
					{
						loader: 'sass-loader',
						options: {

						},
					},
				],
			},

		],
	},


	plugins: [
		// new HtmlWebpackPlugin({
		// 	filename: 'index.html',
		// 	template: './scr/input.pug',
		// 	minify: false,
			new MiniCssExtractPlugin(),

			...PAGES.map(page => new HtmlWebpackPlugin ({
      		template: `${PAGES_DIR}/${page}`,
      		filename: `./${page.replace(/\.pug/,'.html')}`

			})),
			
			
	],	

};


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



const PATHS = {
	src: path.join(__dirname, 'scr', 'pages'),
	dist: path.join(__dirname, 'dist'),
	UIkit: path.join(__dirname, 'scr', 'pages', 'UIkit'),
	assets: 'assets/',
}

const PAGES_DIR = `${PATHS.src}`
const PAGES_UIkit = `${PATHS.UIkit}`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))
const PAGES2 = fs.readdirSync(PAGES_UIkit).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
	entry: './scr/pages/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'

	},

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 8081,
	},	

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						// options: {
							
						// },
					},
					{
						loader: 'css-loader',
						// options: {
							
						// },
					},
					{
						loader: 'sass-loader',
						// options: {

						// },
					},
				],
			},
			{	
				test: /\.pug$/,
				use: [
					{
						loader: 'html-loader'
					},
				 	{
						loader: 'pug-html-loader',
						// options: {
            				
      //     				},
					},
					
				],

			},
			{
			    test: /\.(eot|svg|ttf|woff|woff2)$/,
			    use: [
			    		{
			    			loader: 'file-loader',
			    			options: {
			    				name: './fonts/[name].[ext]',
			    			},
			    		}
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

		...PAGES2.map(page => new HtmlWebpackPlugin ({
      	template: `${PAGES_UIkit}/${page}`,
      	filename: `./${page.replace(/\.pug/,'.html')}`

		})),
			
	],	

};
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	mode:'development',
	output:{
      clean:true,
	},
	module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
				options:{
					sources:false
				}
      },
			{
				test:/\.css$/,
				exclude:/styles.css$/,
				use:["style-loader","css-loader"]
			},
			{
				test:/styles.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			},
			{
				test:/\.(png|jpe?g|gif)$/,
				loader: 'file-loader',
			}
    ],
  },
    plugins: [new HtmlWebpackPlugin({
			title:"Mi Webpack App",
			template:"./src/index.html"
		}),
new MiniCssExtractPlugin({
	filename:'[name].css'
}),
			new CopyPlugin({
      patterns: [
        { from: "src/assets/", to: "assets/" },
      ],
    }),
		],
	
}

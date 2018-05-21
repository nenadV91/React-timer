const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	devServer: {
		inline: true,
		port: 4000,
		historyApiFallback: true,
		contentBase: path.join(__dirname, "public"),
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			App: path.join(__dirname, "src", "components", "App"),
			components: path.join(__dirname, "src", "components"),
			assets: path.join(__dirname, "src", "assets")
		}
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
		}, {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }]
	}
}
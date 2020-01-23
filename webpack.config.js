const path=require('path')

module.exports =()=>{
	return {
		entry: path.join(__dirname, 'src', 'app.js'),
		devServer: {
			publicPath: path.join(__dirname, 'public'),
			contentBase: path.join(__dirname, 'public'),
			hot: true,
			historyApiFallback: true,
		},
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.js$/,
					exclude: /node_modules/,
                },
                {
					test: /\.s?css$/,
					use: ['css-loader', 'sass-loader'],
				},
				
			],
		},
	};
} 
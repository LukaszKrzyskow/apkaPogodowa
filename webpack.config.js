const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    watch: false,
    mode: "development", //ta opcja zostanie pominięta jeżeli użyjemy npm run build
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
				 {
					loader: 'file-loader',
				 },
			   ],
			},
			{
				test: /\.(html)$/,
					use: {
						loader: 'html-loader',
						options: {
						attrs: [':data-src']
					}
				}
			},
			 {
				test: /\.css$/i,
					use: ['style-loader', 'css-loader'],
			}	
        ]
    }
}
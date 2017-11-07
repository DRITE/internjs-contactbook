var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './client/app',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './client/dist')
    },
    // plugins: [
    //     ["import", { libraryName: "antd", style: "css" }], // `style: true` for less
    //   ],
    module: {
        rules:[
                {
            test: /\.css$/,
            //exclude: /node_modules/,
            use: [ 'style-loader', 'css-loader' ]
            },
            {
            test:/\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react']
                },
            },
        }
    ]
    },
    devtool: 'source-map'
};

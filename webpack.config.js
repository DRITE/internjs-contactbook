var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './client/handle-login',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './client/dist')
    }
};
module: {
    rules:[{
        test:/\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['env']
            },
        }
    }]
}
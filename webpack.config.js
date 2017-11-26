const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'assets_build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
    entry: [path.join(__dirname, '/render_process/src/app.js')],
    // Render source-map file for final build
    devtool: 'source-map',
    // output config
    output: {
        path: buildPath, // Path of output file
        filename: 'app.js', // Name of output file
    },
    plugins: [
        // Define production build to allow React to strip out unnecessary checks
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // Allows error warnings but does not stop compiling.
        new webpack.NoErrorsPlugin(),
        // Transfer Files
        new TransferWebpackPlugin([
            {from: 'assets'}, {from: 'html'}
        ], path.resolve(__dirname, 'render_process')),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/, // All .js files
                loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
                exclude: [nodeModulesPath],
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ],
    },
    target: "electron"
};

module.exports = config;
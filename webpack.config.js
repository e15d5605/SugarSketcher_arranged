// webpack.config.js
const webpack = require("webpack");
var libraryName = 'sb';
var outputFile = libraryName + '.js';

plugins = [];
var config = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dest',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_component|coverage)/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                //EaselJSの読み込み,
                test: require.resolve("createjs-easeljs"),
                loader: "imports-loader?this=>window!exports-loader?window.createjs"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};

module.exports = config;

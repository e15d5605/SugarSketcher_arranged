let path = require("path");
let webpack = require("webpack");
let fileName = "./src/js/api/main.js";
let dist = path.resolve(__dirname, "dist");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        app: fileName
    },
    target : 'node',
    output: {
        path: dist,
        filename: "[name].bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                // Babel を利用する
                loader: 'babel-loader',
                // Babel のオプションを指定する
                options: {
                    presets: [
                        // プリセットを指定することで、ES2018 を ES5 に変換
                        '@babel/preset-env',
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/js/api/index.html',
            filename: 'index.html'
        })
    ]
};
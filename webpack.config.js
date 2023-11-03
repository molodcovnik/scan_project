const path = require('path');
const HtmlWebbpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,"/dist"),
        filename: "bundle.js",
        // assetModuleFilename: 'assets/[name][ext]',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
      },
    resolve: {
        extensions: [".js",".jsx",".json",".ts",".tsx"]
    },
    performance: {
        // подсказки
        hints: false,
        // максимальный размер входной точки в байтах
        // по умолчанию 250000
        maxEntrypointSize: 1024000,
        // максимальный размер статических ресурсов
        // по умолчанию 250000
        maxAssetSize: 1024000
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)?$/,
                loader: 'file-loader',
                options: {
                  name: 'assets/img/[name].[ext]',
                },
            },
        ]
    },
    plugins: [
        new HtmlWebbpackPlugin({
            template: "./src/index.html",
            favicon: "./public/favicon.ico"
        })
    ]
}
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
            // {
            //     test: /\.(jpe?g|png|webp|gif|svg|jpg)$/i,
            //     use: [{
            //         loader: 'image-webpack-loader',
            //         options: {
            //             mozjpeg: {
            //               progressive: true,
            //             },
            //             // optipng.enabled: false will disable optipng
            //             optipng: {
            //               enabled: false,
            //             },
            //             pngquant: {
            //               quality: [0.65, 0.90],
            //               speed: 4
            //             },
            //             gifsicle: {
            //               interlaced: false,
            //             },
            //             // the webp option will enable WEBP
            //             webp: {
            //               quality: 75
            //             }
            //           }
            //     }],
            //     type: 'asset/resource',
            // },
        ]
    },
    plugins: [
        new HtmlWebbpackPlugin({
            template: "./src/index.html",
            favicon: "./public/favicon.ico"
        })
    ]
}
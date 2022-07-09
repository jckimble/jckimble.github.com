const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path=require('path')
module.exports = (env)=>{
    return {
        output:{
            path: path.join(__dirname,"public")
        },
        mode: env.WEBPACK_BUILD||false?'production':'development',
        devServer: {
            static: "./public",
            compress: true,
            port: 3000
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: "src/index.pug",
                filename: "index.html",
            }),
            new HtmlWebpackPlugin({
                template: "src/404.pug",
                filename: "404.html",
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './fonts/',
                            publicPath: './static/fonts'
                        }
                    }]
                },
                {
                    test: /\.pug$/,
                    loader: "@webdiscus/pug-loader"
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                },
            ],
        }
    }
}

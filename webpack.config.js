const path = require("path");
const HTMLPlug = require("html-webpack-plugin");

module.exports = 
{
    mode: "development",
    entry: "./src/index.js",
    output:
    {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
        clean: true
    },
    devtool: "eval-source-map",
    devServer:
    {
        watchFiles: ["./src/template.html"]
    },
    plugins:
    [
        new HTMLPlug({
            template: "./src/template.html"
        })
    ],
    module:
    {
        rules:
        [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
};

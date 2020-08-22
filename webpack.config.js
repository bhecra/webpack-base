const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtracPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /styles\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles\.css$/,
        use: [MiniCssExtracPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: false,
          minimize: false,
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtracPlugin({
      filename: "[name].css",
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "assets/",
        },
      ],
    }),
  ],
};

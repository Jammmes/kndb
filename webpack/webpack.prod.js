const commonPaths = require("./common-paths");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  devtool: "source-map",

  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            global_defs: {
              __REACT_HOT_LOADER__: undefined
            }
          },
          beautify: false,
          ecma: 6,
          comments: false,
          mangle: false
        }
      })
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: commonPaths.contentBasePath + "/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production") // Reduces 78 kb on React library
      },
      DEBUG: false, // Doesn´t have effect on my example
      __DEVTOOLS__: false // Doesn´t have effect on my example
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/main.css",
      allChunks: true
    }),
    new CompressionWebpackPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  module: {
    // loaders -> rules in webpack 2
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: ["/node_modules/"]
      },
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              happyPackMode: true // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
            }
          }
        ],
        include: commonPaths.srcPath,
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        include: commonPaths.stylesheetsPath, // Use include instead exclude to improve the build performance
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1,
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: () => [
                require("postcss-import")(),
                require("postcss-nesting")(),
                require("postcss-custom-properties")(),
                require("autoprefixer")()
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        include: commonPaths.srcPath,
        use: [
          MiniCssExtractPlugin.loader,
          'css-modules-typescript-loader',
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: {
                localIdentName: "[name]_[local]_[hash:base64:5]"
              },
              localsConvention: 'camelCase',
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("postcss-import")(),
                require("postcss-nesting")(),
                require("postcss-custom-properties")(),
                require("autoprefixer")()
              ]
            }
          }
        ]
      }
    ]
  }
};

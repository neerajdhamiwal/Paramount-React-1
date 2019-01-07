const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports={
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },

  devtool:  "cheap-eval-source-map",
  performance: {
    maxEntrypointSize: 10000,
    maxAssetSize: 10000,
    hints: false
  },
    entry:['babel-polyfill', './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      chunkFilename:'[id][hash].js',
      publicPath:'/'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
          use:['babel-loader']

          },
          {
            test:/\.css$/,
              use:[
            { loader: MiniCssExtractPlugin.loader}
              ,{loader:"css-loader",

              options:{
                minimize:true,
                sourceMap:true
              }
            }
            ]
          },
          {
              test: /\.svg$/,
              loader: 'svg-inline-loader'
          },

           {
          test: /\.scss$/,
          use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        },

          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
              options: {
                attrs: [':data-src'],
                minimize:true
              }
            }
          },
          {
            test: /\.(png|jpg|gif|jpeg|ttf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                 name:'[path][name].[ext]',
                }
              }
            ]
          }
        ]
      },
    plugins: [new HtmlWebpackPlugin({
      title:"React scratch",
        template:__dirname+'/public/index.html',
        inject:'body',
        filename:'index.html'
    }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css",
      chunkFilename: "[id][hash].css"
    }),
        new BundleAnalyzerPlugin(),
        new UglifyJsPlugin({ sourceMap: true }),


],
    mode: 'production'
}

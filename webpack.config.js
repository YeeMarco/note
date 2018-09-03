const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	entry:{
    app:'./src/index.js'
    // ,
    // app2:'./src/js.js'
  },
	output:{
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
  mode: 'development',
  devServer: {  
    contentBase: './dist',
    hot: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias:{
      '@': path.join(__dirname,'./src')
    }
  },
	module: {
      rules: [{
        test: /\.css|less$/,
        use: [
          {loader:'style-loader'},
          {
            loader:'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },{
            loader: "less-loader" // compiles Less to CSS
          }    
        ]
      },{
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }]
  },
 
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'demo',
      template:'./src/index.html'
      }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    ]

}
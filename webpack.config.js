const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      index:'./src/index.js',      
  },
  
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].[hash].js'
  },
 devtool:'inline-source-map',
  devServer: {
    contentBase: './dist',
        port:9000,
    compress:true,
    noInfo:false,
    open:true,
  },
performance:{
    maxEntrypointSize:400,
    hints: 'warning',
},
optimization:{
    runtimeChunk:"single",
    splitChunks:{
        cacheGroups:{
            vendor: {
                test:/[\\/]node_modules[\\/]/,
                name:'lib',
                chunks:'all'
            }
        }
    }
},
watchOptions:{
    aggregateTimeout: 600,
    ignored: /node_modules/
},
 module :{
    rules:[{
       test: /\.(js|jsx)$/,
       use :['babel-loader'],
       exclude:/node_modules/,
      }
    ]
},
resolve :{
   extensions :['*','.js','.jsx'],
    enforceExtension: false
}, 
plugins:[
        new HtmlWebpackPlugin({
      template:"./src/index.html",
      filename: "index.html"
  }),
  new webpack.HashedModuleIdsPlugin()
]
};
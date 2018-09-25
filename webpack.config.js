const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dest',
    publicPath: '/',
    filename: 'bundle.js'
  },
 devtool:'source-map',
  devServer: {
    contentBase: './dest',
    hot:true,
    port:9000,
    compress:true,
    noInfo:false,
    open:true,
  },
performance:{
    maxEntrypointSize:400,
    hints: 'warning'
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
    new webpack.HotModuleReplacementPlugin()
]
};
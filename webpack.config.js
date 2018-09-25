module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dest',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dest'
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
   extensions :['*','.js','.jsx'] 
}, 
};
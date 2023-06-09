const path = require('path');

module.exports = {
  entry: [ 
    './src/board.js',
    './src/modules/Graph.js',
    './src/modules/Queue.js',
    './src/modules/Stack.js'
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
     { test: /\.css$/,
       exclude: /node_modules/,
       use: [
         { loader: 'style-loader' },
         { loader: 'css-loader' }
       ]
      }
    ]
  },
};
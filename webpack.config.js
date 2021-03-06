const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
      rules: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader",query: {
                presets: ["react", "env"]
                } 
            },
            {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
              }
      ]
  } 
};
module.exports = {
  entry: './src',
  output: {
    publicPath: '/',
    path: './dist',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

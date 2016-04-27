module.exports = {
  entry: "./app.jsx",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.(es6|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(woff|woff2)$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf$/,
      loader: "url-loader?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot$/,
      loader: "file-loader"
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.es6']
  }
}

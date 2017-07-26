const distFolder = __dirname + '/dist';
const sourceFolder = './src';

console.log(sourceFolder + '/js/app.js')

module.exports = {
  entry: sourceFolder + '/js/app.js',
  output: {
    path: distFolder + '/js',
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
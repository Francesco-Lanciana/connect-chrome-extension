const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

exports.config = ({ context, entry, buildPath }) => ({
  context,
  entry: {
    popup: entry,
  },
  output: {
    path: buildPath,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Demo',
      filename: 'popup.html',
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],

});

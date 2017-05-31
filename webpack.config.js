const path = require('path');
const merge = require('webpack-merge');

const parts = require('./config/webpack.parts');
const common = require('./config/webpack.common');
const devConfig = require('./config/webpack.development');
const prodConfig = require('./config/webpack.production');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

const commonConfig = merge([
  common.config({
    context: PATHS.src,
    entry: './popup.js',
    buildPath: PATHS.build,
  }),
  parts.lintJavascript({
    include: PATHS.src,
    options: {
      emitWarning: true,
    },
  }),
]);


module.exports = (env) => {
  const config = env === 'production' ? prodConfig() : devConfig();
  return merge([commonConfig, config]);
};

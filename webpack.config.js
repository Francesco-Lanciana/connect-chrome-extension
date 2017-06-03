const path = require('path');
const merge = require('webpack-merge');

const parts = require('./config/webpack.parts');
const common = require('./config/webpack.common');
const devConfig = require('./config/webpack.development');
const prodConfig = require('./config/webpack.production');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const commonConfig = merge([
  common.config({
    context: PATHS.app,
    entry: 'popup/popup.js',
    buildPath: PATHS.build,
  }),
  parts.lintJavascript({
    include: PATHS.app,
    options: {
      emitWarning: true,
    },
  }),
  {
    resolve: {
      modules: [
        'node_modules',
        path.join(__dirname, 'app'),
        path.join(__dirname, 'app/graph/components'),
      ],
      extensions: ['.js', '.json', '.scss'],
      alias: {
        'app': path.join(__dirname, 'app'),
        'popup': path.join(__dirname, 'app/popup'),
        'graph': path.join(__dirname, 'app/graph'),
      },
    },
  },
]);


module.exports = (env) => {
  const config = env === 'production' ? prodConfig() : devConfig();
  return merge([commonConfig, config]);
};

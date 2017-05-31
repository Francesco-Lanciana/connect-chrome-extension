const merge = require('webpack-merge');
const parts = require('./webpack.parts');

exports.config = () => {
  merge([
    {
      output: {
        devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
      },
    },
    parts.generateSourceMaps({ type: 'cheap-module-source-map' }),
    parts.loadSCSS({ exlude: /node_modules/ }),
    parts.loadImages(),
    parts.loadFonts(),
  ]);
};

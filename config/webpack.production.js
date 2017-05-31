const merge = require('webpack-merge');
const path = require('path');
const glob = require('glob');

const parts = require('./webpack.parts');

const PATHS = {
  src: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../build'),
};
console.log(PATHS.src);

const config = merge([
  {
    performance: {
      hints: 'warning', // 'error' or false are valid too
      maxEntrypointSize: 100000, // in bytes
      maxAssetSize: 450000, // in bytes
    },
    output: {
      chunkFilename: '[name].js',
      filename: '[name].js',
    },
  },
  parts.clean({
    root: path.join(__dirname, '..'),
    path: 'build',
  }),
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
      },
      safe: true,
    },
  }),
  parts.extractSCSS({ exclude: /node_modules/ }),
  parts.purifyCSS({
    paths: glob.sync(`${PATHS.src}/**/*.js`, {nodir: true}),
  }),
  parts.loadImages({
    options: {
      limit: 500, // After optimization limit
      name: '[name].[ext]',
    },
  }),
  parts.loadFonts({
    // POSSIBLE PROBLEM
    options: {
      name: './fonts/[name].[ext]',
      publicPath: '../',
    },
  }),
  parts.loadJavaScript({
    include: PATHS.src,
    //exlude: /(node_modules|bower_components)/,
  }),
  parts.setFreeVariable(
    'process.env.NODE_ENV',
    'production'
  ),
  parts.copySeperateSourceFiles({
    locations: [
      //{from: path.join(PATHS.src, 'manifest.json')},
      {from: path.join(PATHS.src,'./icons/**.png')}],
    //ignore: '!**.json',
  }),
  parts.generateCRX({
    keyPath: '../key.pem',
    contentPath: PATHS.build,
    outputPath: path.join(__dirname, '../packed_build'),
  }),
  parts.versionControl({
    packageFile: path.join(__dirname, '../package.json'),
    template: path.join(PATHS.src, 'manifest.json'),
    outputFile: path.join(__dirname, 'manifest.json'),
  }),
]);

// const getLocation = (relToRootLoc) => {
//   return path.join(PATHS.src, relToRootLoc);
// };

module.exports = () => {
  return config;
};

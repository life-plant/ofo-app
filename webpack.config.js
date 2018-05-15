var webpack = require('webpack');
var nodeEnvironment = process.env.NODE_ENV
var bourbon = require('node-bourbon').includePaths;
var _ = require('lodash');
var path = require('path');

var config = {
  context: __dirname + '/app',
  entry: './index.js',
  plugins: [  
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'INCLUDE_ALL_MODULES': function includeAllModulesGlobalFn(modulesArray, application) {
        modulesArray.forEach(function executeModuleIncludesFn(moduleFn) {
            moduleFn(application);
        });
      },
      ENVIRONMENT: JSON.stringify(nodeEnvironment)
    })
  ],
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.es6'],
    root:[ path.join(__dirname + '/app'), path.join(__dirname + '/node_modules'), path.join(__dirname) ]
  },
  jscs: {
    // JSCS errors are displayed by default as warnings.
    // Set `emitErrors` to `true` to display them as errors.
    emitErrors: false,

    // JSCS errors do not interrupt the compilation.
    // Set `failOnHint` to `true` if you want any file with
    // JSCS errors to fail.
    failOnHint: false
  },
  devServer: {
      port: 9000,
      devtool: 'source-map',
      progress: true,
      colors: true,
      inline: true,
      hot: true,
      watchContentBase: true,
      host: '127.0.0.1',
      proxy: {
          '/api/*': {
              target: 'http://192.168.199.119:8080'
          }
      }
  },
  module: {
    // preLoaders: [{
    //   test:    /\.js$/,
    //   exclude: /node_modules/,
    //   loader: 'eslint',
    // }],
    loaders: [
      {test: /\.js$/, exclude: /(node_modules)/, loader: 'babel'},
      {test: /\.html/, exclude: /(node_modules)/, loader: 'html-loader'},
      {test: /\.s?css$/, loader: 'style!css!sass?includePaths[]=' + bourbon },
      {test: /\.(png|jpg)$/, loader: 'url-loader?mimetype=image/png'},
      {test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader'},
      {test:/\.(ttf|eot|svg)(\?[\s\S]+)?$/, loader: 'file-loader'}
    ]
  },
  eslint: {  
    configFile: './.eslintrc'
  }
}

switch (nodeEnvironment) {
  case 'production':
    config.output.path = __dirname + '/dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
    config.plugins.push(new webpack.optimize.CommonsChunkPlugin({name: 'vendor', minChunks: Infinity}));
    
    config.output.filename = '[name].js';

    config.entry = {
      bundle: './index.js',
      vendor: ['angular', 'angular-ui-router', 'lodash']
    }
    config.devtool = 'source-map';
    break;

  case 'test':
    config.entry = './index.js';
    break;

  case 'development':
    config.entry = ['font-awesome-loader','./index.js', 'webpack/hot/dev-server'];
    config.devtool = 'source-map';
    break;
    
  default: 
    console.warn('Unknown or Undefigned Node Environment. Please refer to package.json for available build commands.');
}

module.exports = config; 

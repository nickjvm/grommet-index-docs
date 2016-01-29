// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var argv = require('yargs').argv;
var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var devGulpTasks = require('grommet/utils/gulp/gulp-tasks');
var http = require('http');

var opts = {
  base: '.',
  publicPath: 'docs/grommet-index',
  dist: path.resolve(__dirname, 'dist/'),
  copyAssets: [
    'src/index.html',
    'src/robots.txt',
    {
      asset: 'node_modules/grommet/img/**',
      dist: 'dist/img/'
    }
  ],
  scssAssets: ['src/scss/**/*.scss'],
  jsAssets: ['src/**/*.js'],
  mainJs: 'src/js/index.js',
  mainScss: 'src/scss/index.scss',
  webpack: {
    resolve: {
      root: [
        path.resolve(__dirname, './node_modules')
      ]
    },
    module: {
      loaders: [
        {
          test: /develop(\/|\\).*\.htm$|design(\/|\\)[^\/]*\.htm$|design(\/|\\).*\/.*\.htm$/,
          loader: 'babel-loader!imports?React=react,Router=react-router,Link=>Router.Link!html-jsx-loader',
          exclude: /(node_modules|bower_components)/
        }
      ]
    }
  },
  sync: {
    hostname: 'grommet.us.rdlabs.hpecorp.net',
    username: 'ligo',
    remoteDestination: '/var/www/html/docs/grommet-index-docs/dist'
  },
  devServerPort: 8019,
  devServerDisableHot: true,
  // devServerHost: "0.0.0.0",
  scsslint: true,
  alias: {
    'grommet/scss': path.resolve(__dirname, '../grommet/src/scss'),
    'grommet': path.resolve(__dirname, '../grommet/src/js')
  },
  devPreprocess: [
    'set-webpack-alias', 'watch-css'
  ]
};

var host = opts.devServerHost ? opts.devServerHost : 'localhost';

gulp.task('set-webpack-alias', function () {
  if (opts.alias && argv.useAlias) {
    console.log('Using local alias for development.');
    opts.webpack.resolve.alias = opts.alias;
  }
});

gulp.task('watch-css', function() {
  if (opts.webpack.resolve.alias) {
    var watcher = gulp.watch(
      path.resolve(__dirname, '../grommet/src/scss/**/*.scss'),
      ['dist-css']
    );

    watcher.on('change', function() {
      //notify the webpack dev server that a change happened
      http.get(
        'http://' + host + ':' + opts.devServerPort + '/invalid'
      );
    });
  }
});


var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


devGulpTasks(gulp, opts);

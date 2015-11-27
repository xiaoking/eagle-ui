var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var Server = require('karma').Server;
var demoWebpackConfig = require('./webpack/demo.config');
var webpackConfig = require('./webpack/webpack.config');

var error = function(e){
  console.error(e);
  if(e.stack){
    console.error(e.stack);
  }
  process.exit(1);
}

gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('demo-webpack', function(done) {

  webpack(demoWebpackConfig).run(function(err, stats) {
    if(err) throw new gutil.PluginError("demo-webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    done();
  });
});

gulp.task('require-webpack', function(done) {
  webpack(webpackConfig).run(function(err, stats) {
    if(err) throw new gutil.PluginError("require-webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    done();
  });
});

gulp.task('min-webpack', function(done) {

  var wbpk = Object.create(webpackConfig);
  wbpk.output.filename = 'eagle.min.js';
  wbpk.plugins = [
    new webpack.optimize.UglifyJsPlugin()
  ];

  webpack(wbpk).run(function(err, stats) {
    if(err) throw new gutil.PluginError("min-webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    done();
  });
});

gulp.task('watch', function () {
  gulp.watch(['./lib/**/*.*'], ['demo']);
});

gulp.task('default', ['require-webpack'/*, 'html', 'asset'*/]);
gulp.task('test',['karma']);
gulp.task('demo', ['demo-webpack']);
gulp.task('min',['min-webpack']);
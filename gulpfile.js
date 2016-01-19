var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var Server = require('karma').Server;
var demoWebpackConfig = require('./webpack/demo.config');
var webpackConfig = require('./webpack/webpack.config');
var WebpackDevServer = require("webpack-dev-server");
var open = require('gulp-open');

var babel = require('gulp-babel');

var error = function(e){
  console.error(e);
  if(e.stack){
    console.error(e.stack);
  }
  process.exit(1);
}

var devPort = 3015;

gulp.task('open', function () {
  gulp.src(__filename)
      .pipe(open({uri: "http://127.0.0.1:" + devPort + "/examples/index.html"}));
});

gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('demo-webpack', function(done) {

  var wbpk = Object.create(demoWebpackConfig);

  wbpk.devtool = 'eval';
  wbpk.entry = [
    'webpack-dev-server/client?http://127.0.0.1:' + devPort,
    'webpack/hot/only-dev-server',
    './examples/src/index.js'
  ];

  wbpk.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ];

  wbpk.module.loaders = [
    {
      test: /date-time\.js$/,
      loaders: ['muiLocal', 'babel']
    },
    {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    },
    {
      test: /\.less$/,
      loader: "style-loader!css-loader!less-loader"
    },
    {
      test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader : 'file-loader'
    }
  ];

  var compiler = webpack(wbpk);

  new WebpackDevServer(compiler, {
    //contentBase:'/examples/',
    publicPath: '/examples/js/',
    hot: true,
    historyApiFallback: true,
    port: devPort,
    stats: {
      colors: true
    }
  }).
  listen(devPort, "127.0.0.1", function (err) {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://127.0.0.1:" + devPort + "/webpack-dev-server/index.html");
  });
});

gulp.task('example-webpack',function(done){
  webpack(demoWebpackConfig).run(function(err, stats) {
    if(err) throw new gutil.PluginError("example-webpack", err);
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
  wbpk.output.filename = 'eagle-ui.min.js';
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

gulp.task('babel', function(done){
  return gulp.src('src/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('lib'));
});

gulp.task('style-webpack', function(done) {

  var wbpk = Object.create(webpackConfig);

  wbpk.entry = [
      './src/style.js'
  ];

  wbpk.output = {
      path:'lib',
      filename:'style.js'
  },

  webpack(wbpk).run(function(err, stats) {
    if(err) throw new gutil.PluginError("style-webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    done();
  });

});

gulp.task('watch', function () {
  gulp.watch(['./lib/**/*.*'], ['demo']);
});

gulp.task('default', ['babel','require-webpack','example-webpack'/*, 'html', 'asset'*/]);
gulp.task('test',['karma']);
gulp.task('demo', ['demo-webpack','open']);
gulp.task('min',['min-webpack']);
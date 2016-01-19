/**
 * Created by mac on 15/9/6.
 */
var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var extend = require('extend');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var getEntry =function() {
    var basedir = path.join(process.cwd(), 'examples/src');
    var files = glob.sync(path.join(basedir, '*.js'));

    var webpackConfigEntry = {};//webpackConfig.entry || (webpackConfig.entry = {});

    files.forEach(function(file) {
        var relativePath = path.relative(basedir, file);

        webpackConfigEntry[relativePath] = file;
    });
    return webpackConfigEntry;
};

module.exports =extend({}, {
    entry:[
        './examples/src/index.js'
    ],
    output:{
        libraryTarget: 'umd',
        path:path.join(process.cwd(),'examples/js'),
        filename:'examples.js'
    },
    /*externals:[{
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'eagle-ui': {
            root: 'Eagleui',
            commonjs2: 'Eagleui',
            commonjs: 'Eagleui',
            amd: 'Eagleui'
        }
    }],*/
    module:{
        loaders:[
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                //loader: "style-loader!css-loader!less-loader"
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(path.join('eagle-ui.css'))
    ]
});
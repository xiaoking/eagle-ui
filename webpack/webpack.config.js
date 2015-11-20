/**
 * Created by mac on 15/9/6.
 */
var path = require('path');
var webpack = require('webpack');
var extend = require('extend');

module.exports ={
    entry:[path.join(process.cwd(),'./index.js')],
    devtoll:'source-map',
    resolve:{
        modulesDirectories: [
            'node_modules',
            'bower_components',
            'lib'
        ]
    },
    output:{
        libraryTarget: 'umd',
        path:path.join(process.cwd(),'dist'),
        filename:'eagle-ui.js'
    },
    externals:[{
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    }],
    module:{
        loaders:[
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    plugins:[
        //new webpack.optimize.UglifyJsPlugin()
    ]
};
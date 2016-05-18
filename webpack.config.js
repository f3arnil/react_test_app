'use strict'

var webpack = require('webpack');
var path = require('path');

var DEV_ENV = 'development';
var PROD_ENV = 'production';

var environments = [
	DEV_ENV,
	PROD_ENV
];

var environment = getRunningEnvironment();

function getRunningEnvironment() {
    var selectedEnvironment = process.env.NODE_ENV;

    if (environments.indexOf(selectedEnvironment) === -1) {
        return DEV_ENV;
    }

    return selectedEnvironment;
}

var config = {
    context: __dirname,
    entry: {
        app: path.resolve(__dirname, 'app/index.js'),
        vendor: [
            'react',
			'react-dom',
            'react-redux',
			'redux',
            'react-router'
        ]
    },
    resolve: {
        modulesDirectories: [
            "./node_modules/"
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    plugins: [
		new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            chunks: ['vendor']
        }),
		new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"' + environment + '"'
        })
	],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },

    devServer: {
        host: 'localhost',
        port: 8080
    }
};

if (environment == PROD_ENV) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({}));
}

module.exports = config

console.log('[>>>] Webpack is starting with ' + environment + ' environment');

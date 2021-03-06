var webpack = require('webpack'),
    path    = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var __ENV__ = JSON.stringify(process.env.NODE_ENV) == JSON.stringify('production');
console.log('===========', process.env.NODE_ENV, '__ENV__', __ENV__);

var config = {
    entry : {
        app : path.resolve(__dirname, 'app', 'entry.js'),
        common : ['react', 'react-dom', './app/tool/log.js']
    },
    output : {
        path : path.resolve(__dirname, 'bundle'),
        filename : '[name].js'/*,
        publicPath : './bundle/'*/
    },
    module : {
        loaders : [
            {
                test : /\.css$/,
                loader : ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test : /\.(jpg|png)$/,
                loader : 'url-loader?limit=1024&name=assets/[name]_[hash:8].[ext]'
            },
            {
                test : /\.(js|jsx)$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                query : {
                    presets : ['es2015', 'react']
                }
            }
        ]
    },

    plugins : [
        new webpack.DefinePlugin({
            'process.env' : {
                NODE_ENV : JSON.stringify(process.env.NODE_ENV) || JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            '_' : 'underscore',
            'log' : path.resolve(__dirname, 'app/tool/log.js'),
            'React' : 'react',
            'ReactDOM' : 'react-dom'
        }),
        new ExtractTextPlugin('common.css'),
        new webpack.optimize.CommonsChunkPlugin({
            names : ['common']
        })
    ]
}

if(__ENV__){
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
}

module.exports = config;

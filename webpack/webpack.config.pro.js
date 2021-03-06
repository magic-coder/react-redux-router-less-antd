'use strict';
require("babel-polyfill");  //兼容打包产生的Set Map
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: ["babel-polyfill",path.resolve(__dirname, '../src/index.js')], //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出的路径
        filename: 'build.[name].js'  // 打包后文件
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ["stage-0",'react','latest' ,'es2015-ie'],//兼容ie
                        plugins: [
                            "transform-es3-property-literals",
                            "transform-es3-member-expression-literals", //兼容ie
                          ]
                    }
                },
                exclude: /node_modules/   //需要忽略的文件
            },
            {
                 test: /\.css$/, loader: 'style-loader!css-loader' 
                 
            },
            {
                 test: /\.less$/, loader: 'style-loader!css-loader!less-loader' 
            },
            {
    　　　　　　test: /\.(png|jpg)$/,
    　　　　　　loader: 'url-loader?limit=8192'
　　　　    }
        ]
    },
    plugins:[
        // new uglify(),
        new HtmlWebpackPlugin({
            title:"react",
            template: path.resolve(__dirname, './template/index.template.html'),
            inject:true
        }),
    ]
}
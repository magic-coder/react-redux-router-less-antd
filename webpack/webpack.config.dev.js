const path = require('path');
// const webpack = require('webpack');
module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出的路径
        filename: 'bundle.js'  // 打包后文件
    },
    module: {
        rules: [  //文件处理的一些配置
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','stage-2','react'],
                    }
                },
                exclude: /node_modules/ //需要忽略的文件
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
    devServer: {
        inline: true,
        contentBase: path.resolve(__dirname,'../'),
        proxy: {
            // '/api': {    所有以api开头的请求都会做跨域处理
            //     target: 'http://****',  需要跨域到某个url
            //     changeOrigin: true
                // pathRewrite: {
                //     '^/api': '' //跨域过去的请求路径是否替换
                // }
            // }
            }
    },
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         title:"react",
    //         template: path.resolve(__dirname, './template/index.template.html'),
    //         inject:true
    //     })
    // ]
}
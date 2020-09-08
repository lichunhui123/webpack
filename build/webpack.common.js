const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

const commonConfig = {
  entry:{//入口文件
    main:'./src/index.js'
  },
  module:{
    rules:[{
      test:/\.js/,//js es6转es5
      exclude:/node_modules/,
      use:[{
				loader: 'babel-loader'
			}]
    },{
      test:/\.(jpg|png|gif)$/,
      use:{
        loader:'url-loader',//图片解析
        options:{
          name:'[name]_[hash].[ext]',
          outputPath: 'image/',
          limit:10240
        }
      }
    },{
      test:/\.(eot|ttf|svg)/,//iconfont字体文件 解析
      use:{
        loader:'file-loader'
      }
    }]
  },
  plugins:[
    new HtmlWebpackPlugin({//html模板
      template:'src/index.html'
    }),
    new CleanWebpackPlugin(),//清除打包文件
    new webpack.ProvidePlugin({
      $: 'jquery',
      _join:['lodash','join']
    })
  ],
  optimization:{
    usedExports: true,
    runtimeChunk:{//webpack运行文件单独打包一个文件 runtime.js
      name:'runtime'
    },
    splitChunks:{//代码分割 node_modules下的引用模块打包到vendors.js中
      chunks:'all',
      cacheGroups:{
        vendors:{
          test:/[\\/]node_modules[\\/]/,
          priority:-10,
          name:'vendors'
        }
      }
    }
  },
  performance: false,
  output:{
    //publicPath:'http://cdn.com.cn',//会在html中的js引用路径添加此域名
    filename:'[name].js',//打包的js名
    path:path.resolve(__dirname,'../dist')//打包输入目录
  }
}

module.exports = (env)=>{
  if(env && env.production){
    return merge(commonConfig,prodConfig);
  }else{
    return merge(commonConfig,devConfig);
  }
}
const MinicssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugins = require('optimize-css-assets-webpack-plugin');

module.exports={
  mode:'production',//模式
  devtool:'cheap-module-source-map',//source-map
  module:{
    rules:[{
      test:/\.scss$/,
      use:[
        MinicssExtractPlugin.loader,//将CSS提取为独立的文件的插件 只能在production环境下使用并且不能使用style-loader
        {
          loader:'css-loader',
          options:{
            impotLoaders:2
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    },{
      test:/\.css$/,
      use:[
        MinicssExtractPlugin.loader,//将CSS提取为独立的文件的插件
        'css-loader',
        'postcss-loader'
      ]
    }]
  },
  optimization:{
    minimizer:[new OptimizeCssAssetsPlugins({})]//css代码压缩
  },
  plugins:[
    new MinicssExtractPlugin({//css 打包输入名称
      filename:'[name].css',
      chunkFilename:'[name].chunk.css'
    })
  ]
};

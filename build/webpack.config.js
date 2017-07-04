var path = require('path');
var plugins = require('./plugin_loader.js')['plugins'];
var loaders = require('./plugin_loader.js')['loaders'];

function AddResolve(obj) {
  var transobj = {};
  for (var key in obj) {
    transobj[key] = path.resolve(process.cwd(), obj[key]);
  }
  return transobj
}



module.exports = {
      context: path.resolve(__dirname, '../'), //可省略 即process.cwd():/Users/pengpingting/repository/nodejs-project/public
      watch: true,
      //程序入口
      entry: {
        index: './js/index/index.js',
        manage:"./js/manage/index.js",
        detail:"./js/detail/index.js",
        list:"./js/list/index.js",
        about:"./js/about/index.js",
        common: [
          'jquery',
          'reset',
          'common_lib'
        ]
      },
      //可调试源文件
      devtool: 'source-map',
      //输出目录及文件名
      output: {
        path: path.resolve(process.cwd(), 'dist/'),
        filename: '[name].js',
        chunkFilename: '[name].min.js' //异步加载用chunkFilename指定名字
      },
      //设置别名
      resolve: {
        alias: AddResolve(require('./alias'))
      },
      plugins,
      module: {
        rules: loaders
      }
}
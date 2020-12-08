
module.exports = {
  publicPath: './',
  outputDir: process.env.outputDir, // 生成文件的目录名称



  devServer: {
    // 端口配置
    port: 1888,
    // 反向代理配置
    proxy: {
      '/api': {
        target: 'http://localhost',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}

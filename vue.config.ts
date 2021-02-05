const packageJson = require('./package.json');
const proxyApi = 'http://www.webzsky.com'

module.exports = {
  publicPath: './',
  outputDir: packageJson.name,
  devServer: {
    proxy: {
      '/xxxxx': {
        target: proxyApi,
      },
    },
  },

  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'dev-tools',
    },
  },

  // 配置路径别名
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        plugins: '@/plugins',
        styles: '@/styles',
        api: '@/api',
        utils: '@/utils',
      },
    },
  },
};

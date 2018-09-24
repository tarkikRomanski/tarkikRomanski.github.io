module.exports = {
  outputDir: 'docs',
  baseUrl: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  chainWebpack: config => {
      config.module
          .rule('graphql')
          .test(/\.graphql$/)
          .use('graphql-tag/loader')
          .loader('graphql-tag/loader')
          .end()
  }
};
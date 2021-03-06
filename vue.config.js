module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
      config.module
        .rule('eslint')
        .use('eslint-loader')
        .loader('eslint-loader')
        .tap(options => ({
          ...options,
          emitWarning: true
        }))
    },
    lintOnSave: true
}

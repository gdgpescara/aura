module.exports = {
  pwa: {
    name: 'GDG Pescara',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#4A90E2',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  },
  devServer: {
      disableHostCheck: true
  },
  runtimeCompiler: true
}
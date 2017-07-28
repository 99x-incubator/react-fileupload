module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactFileUpload',
      externals: {
        react: 'React'
      }
    }
  }
}

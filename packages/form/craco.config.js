const path = require('path')

const cracoDefaultConfig = require(
  path.join(__dirname, '../components', 'craco.config.js'))

cracoDefaultConfig.webpack = {
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
}

module.exports = cracoDefaultConfig

// vue.config.js
const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: { '@': path.resolve(__dirname, 'src') }
    }
  },
  devServer: {
    proxy: {
      // Authors en localhost:8080
      '^/api/authors': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: { '^/api/authors': '/authors' }
      },
      // Books en localhost:9091
      '^/api/books': {
        target: 'http://localhost:9091',
        changeOrigin: true,
        pathRewrite: { '^/api/books': '/books' }
      },
      // Customers en localhost:7070
      '^/api/customers': {
        target: 'http://localhost:7070',
        changeOrigin: true,
        pathRewrite: { '^/api/customers': '/customers' }
      }
    }
  }
}

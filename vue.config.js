const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: { '@': path.resolve(__dirname, 'src') }
    }
  },
  devServer: {
    proxy: {
      // Proxy para microservicio de Authors
      '^/api/authors': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: { '^/api/authors': '/authors' }
      },
      // Proxy para microservicio de Books
      '^/api/books': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: { '^/api/books': '/books' }
      },
      // Proxy para microservicio de Customers
      '^/api/customers': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: { '^/api/customers': '/customers' }
      }
    }
  }
}

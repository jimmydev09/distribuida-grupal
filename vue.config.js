// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '^/api/authors':   { target: 'http://localhost:8080', changeOrigin: true, pathRewrite: {'^/api/authors': '/authors'} },
      '^/api/books':     { target: 'http://localhost:9091', changeOrigin: true, pathRewrite: {'^/api/books': '/books'} },
      '^/api/customers': { target: 'http://localhost:7070', changeOrigin: true, pathRewrite: {'^/api/customers': '/customers'} },
      '^/api/orders':    { target: 'http://localhost:7070', changeOrigin: true, pathRewrite: {'^/api/orders': '/orders'} }
    }
  }
}

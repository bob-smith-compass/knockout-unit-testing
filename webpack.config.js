var path = require('path');
module.exports = {
    entry: "./src/start_webpack.js",
    output: {
        path: path.resolve(__dirname, "./build/"),
        filename: "bundle.js"
    },
    mode: "development",

    devtool: 'inline-source-map',


    devServer: {
        contentBase: './',
        watchContentBase: true,
        host: 'localhost',
        port: '9090',
        inline: true,
        compress: true,
        proxy: {
          '/api/**': {
            target: 'http://10.189.1.159:8080',
            secure: false,
            changeOrigin: true,
            cookieDomainRewrite: true
          }
        },

        open: true, // Here
        openPage: '/webpack.html' // And here
      },
    

}
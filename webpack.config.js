var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: "./src/start_webpack.js",
    context: __dirname,
    entry: "./src/index.js", // Knockout

    output: {
        path: path.resolve(__dirname, "./build/"),
        filename: "bundle.js"
    },
    
    plugins: [
        new HtmlWebpackPlugin()
      ],

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
var path = require('path');
module.exports = {
    entry: "./src/start_webpack.js",
    output: {
        path: path.resolve(__dirname, "./build/"),
        filename: "bundle.js"
    },
    mode: "development"

}
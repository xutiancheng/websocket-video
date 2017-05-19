var webpack = require('webpack');
module.exports = {
    entry: "./client.js",
    output: {
       path: __dirname + "/dist",
       filename: "bundle.js"
    }
}

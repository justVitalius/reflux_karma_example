var webpack = require("webpack"),
    path = require("path");

// Karma configuration
// Generated on Mon May 11 2015 14:13:57 GMT-0600 (MDT)

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: [
        "./tests/*_spec.js"
    ],
    preprocessors: {
        "./tests/*_spec.js": ["webpack"]
    },
    webpack: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" },
        ]
    },
    webpackMiddleware: {
        noInfo: true
    },
    plugins: [
        require("karma-webpack"),
        require("karma-jasmine"),
        require("karma-phantomjs-launcher")
    ],
    reporters: ["dots"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["PhantomJS"],
    singleRun: false
  });
};
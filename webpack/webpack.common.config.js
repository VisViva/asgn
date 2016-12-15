var root = __dirname + '/../';

module.exports = {
    context: root + "/src",
    output: {
        path: root + "/dist",
        filename: "assignment.js",
        libraryTarget: "var",
        library: "Assignment"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader?presets[]=es2015!eslint-loader"
        }]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js"]
    }
};

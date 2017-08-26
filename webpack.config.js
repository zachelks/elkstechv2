var webpack = require("webpack"); 
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
     entry: __dirname + '/src/js/dependencies.js',
     module: {
        rules: [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },
         {
            test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
            use: [
            {
                loader: 'file-loader',
                options: {}  
            }
            ]
        }
        ]
    },
     output: {
         path: __dirname + '/public/',
         filename: 'app.bundle.js'
     },
     plugins: [
      /*  new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),*/
        new ExtractTextPlugin("styles.css"),

     ]
 };
const path=require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:path.resolve(__dirname,'./src/index.tsx'),
    resolve:{
        extensions:['.tsx', '.ts','.js'],
    },
    module:{
        rules:[
            {
                test:/\.(ts|js)x?$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
        ],
    },
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'[name].bundle.js',
    },
    mode:'development',
    plugins:[
        new htmlWebpackPlugin({
            template:path.resolve(__dirname,'./public/index.html'),
        })
    ]
}
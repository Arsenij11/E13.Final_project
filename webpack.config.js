const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
    const isDev = env.development;
    return {
        mode: isDev ? 'development' : 'production',
        entry: {
            filename: path.resolve(__dirname, 'src/index.js')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
                filename
        :
            'main.js'
        },
        devServer: {
            static: './dist',
            port: 8000,
            hot: isDev,
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.HMR_ENABLED': JSON.stringify(isDev)
            })],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
            ]
        }
    }
}

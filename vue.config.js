module.exports = {
    outputDir: 'docs',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/Homepage/'
        : '/',
    
    css: {
        loaderOptions: {
            sass: {
                webpackImporter: false,
                sassOptions: {
                    includePaths: ['./node_modules']
                }
            }
        }
    }
}

module.exports = {
    outputDir: 'docs',
    publicPath: './',

    css: {
        loaderOptions: {
            sass: {
                webpackImporter: false,
                sassOptions: {
                    includePaths: ['./node_modules']
                },
            }
        }
    }
}

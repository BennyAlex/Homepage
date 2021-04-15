module.exports = {
    
    outputDir: 'docs',
    
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // mutate config for production...
        } else {
            // mutate for development...
        }
    },

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

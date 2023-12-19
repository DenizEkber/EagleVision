module.exports = {
    // webpack.config.js
    resolve: {
        fallback: {
            crypto: require.resolve('crypto'),
            timers: require.resolve('timers-browserify'),
            stream: require.resolve('stream-browserify'),
            process: require.resolve('process/browser'),
            zlib: require.resolve('browserify-zlib'),
            util: require.resolve('util/'),
            assert: require.resolve('assert/'),
            fs: false, // veya require.resolve('fs')
            net: false, // veya require.resolve('net')
            tls: false, // veya require.resolve('tls')
            child_process: false, // veya require.resolve('child_process')
        },
    },

}


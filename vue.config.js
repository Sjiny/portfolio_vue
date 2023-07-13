'use strict'
const path = require('path')
const { defineConfig } = require('@vue/cli-service')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const liveReload = true

module.exports = defineConfig({
  // transpileDependencies: true,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Expose-Headers': 'Client-Addr'
    },
    host: '0.0.0.0',
    port: 3000,
    open: false,
    // proxy: {
    //   '/ws-stomp': {
    //     target: 'http://127.0.0.1:8070',
    //     ws: true,
    //     changeOrigin: true
    //   }
    // },
    // before: require('./mock/mock-server.js'),
    // #region no live-reload start
    hot: liveReload,
    liveReload: liveReload
    // #endregion no live-reload start
  },

  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    devtool: 'source-map',
    name: 'portfolio',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    // context: __dirname,
    // node: {
    //   __filename: true
    // },
    // plugins: ['Notify', 'Loading']
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})

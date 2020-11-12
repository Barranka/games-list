// vue.config.js
module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
   		? './'
		: '/',
	assetsDir: 'assets',
	productionSourceMap: false,
	outputDir: 'docs',
	//filenameHashing: false //чтобы пользователи не должны были чистить кэш мы не должны их отключать
  }
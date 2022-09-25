
var path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.min.js',
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: 'craft-widget-toast.min.dev.js',
		library: 'Toast',
		libraryTarget: 'window',
		globalObject: 'window'
	},
	externals: {
		'@craftkit/craft-uikit' : 'Craft',
	}
};

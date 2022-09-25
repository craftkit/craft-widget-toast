
var path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: 'craft-widget-toast.umd.js',
		library: 'Toast',
		libraryTarget: 'umd',
	},
	externals: {
		'@craftkit/craft-uikit' : 'Craft'
	}
};

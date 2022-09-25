
import { Toast } from './src/Toast.js';

const Packages = {
	Toast : Toast
};

Packages.inject = function(Craft){
	Craft.Widget = Craft.Widget || {};
	if( !Craft.Widget.Toast ){
		Craft.Widget.Toast = Packages;
	}
};

export default Packages;


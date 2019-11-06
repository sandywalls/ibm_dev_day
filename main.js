window.onload = () => {	
	'use strict';
	
	if ('serviceWorkder' in navigator){
		navigator.serviceWorker.register (sw.js);
	}	
}
/**
 * Async loader for javascript files.
 */
var ScriptLoader = (function(){
	
	/** Function for load one javascript file */
	function loadScript(url, nocache, callback) {
		var script = document.createElement('script');
		script.type = 'text/javascript';

		// For Internet Explorer
		if(script.readyState) {
			script.onreadystatechange = function() {
				if(script.readyState === 'loaded' || script.readyState === 'complete') {
					script.onreadystatechange = null;

					if(typeof callback === 'function') {
						callback();
					}
				}
			}
		} 
		// For other browsers
		else {
			script.onload = function() {
				if(typeof callback === 'function') {
					callback();
				}
			}
		}

		// Ignore browser cache
		if(nocache) {
			url = url + '?nocache=' +  new Date().getTime();
		}

		script.src = url;
		document.getElementsByTagName('head')[0].appendChild(script);		
	}


	return {

		/** Urls can be both single and array */
		load: function(urls, nocache, callback) {
			if(urls.constructor === Array) {
				var that = this,
					url = urls.shift();

				if(url){
					loadScript(url, nocache, function() {
						that.load(urls, nocache, callback);
					});
				}
				else{
					if(typeof callback === "function") {
						callback();
					}
				}
			} 
			else {
				loadScript(urls, nocache, callback);
			}
		}
	};
})();
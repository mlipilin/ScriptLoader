(function () {
	var html = document.getElementById('container').innerHTML;
	html += '<p>script3.js loaded</p>';
	document.getElementById('container').innerHTML = html;
}());
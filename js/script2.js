(function () {
	var html = document.getElementById('container').innerHTML;
	html += '<p>script2.js loaded</p>';
	document.getElementById('container').innerHTML = html;
}());
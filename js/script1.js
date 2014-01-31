(function () {
	var html = document.getElementById('container').innerHTML;
	html += '<p>script1.js loaded</p>';
	document.getElementById('container').innerHTML = html;
}());
$.redirect = function (url, params) {
	url = url || window.location.href || '';
	url = url.match(/\?/) ? url.substr(0, url.indexOf('?')) + '?' : url + '?';

	for (var key in params) {
		var re = RegExp('&' + key + '=?[^&;]*', 'g');
		url = url.replace(re, '');
		url += '&' + key + '=' + params[key];
	}
	// cleanup url
	url = url.replace(/[&]$/, '');
	url = url.replace(/\?[&]/, '?');
	url = url.replace(/[&]{2}/g, '&');
	window.top.location.href = url;
};

$.urlParam = function (param) {
	var results = new RegExp('[\\?&]' + param + '=([^&#]*)').exec(window.location.href);
	if (results == null) {
		return null;
	} else {
		return decodeURIComponent(results[1] || 0);
	}
}

$.doRedirect = function (params) {
	var url = (window.location != window.parent.location) ? document.referrer: document.location.href;
	$.redirect(url, params);
}

function tabToBeSelected() {
	var topic = $.urlParam("topic");
	return getMenuIndex(topic);
}

function getMenuIndex(topic) {
	let topicId = -1;
	$(topics).each(function(index, t) {
		if(t.id == topic) {
			topicId = index;
		}
	});
	return topicId;
}
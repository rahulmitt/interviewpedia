var java = [
	'oops.json.js',
	'collections.json.js',
	'multithreading.json.js', 
	'string.json.js',
	'serialization.json.js',
	'db.json.js',
	'unix.json.js',
	'gc.json.js',
	'java8.json.js',
	'testing.json.js',
];

var dp = [
	'creational.json.js',
	'structural.json.js',
	'behavioral.json.js',
];

var ds_old = [
	'array.json.js',
	'string.json.js',
	'linkedlist.json.js',
	
	'tree.json.js',
	'graph.json.js',
	'set.json.js',
	'heap.json.js',
	'oops.json.js',
	'test.json.js',
];

var ds = [
	'linear.json.js',
	'non_linear.json.js',

];

var spring = [
    'intro.json.js',
    'indepth.json.js',
    'spring_dp.json.js',
];

var javascript = [
    'jsBasics.json.js',
    'controlFlow.json.js',
    'functionsMethods.json.js',
    'objectLiterals.json.js',
    'dom.json.js',
    'test.json.js',
];

var systemJS = [
	'./js/jquery-ui-1.10.4.custom/js/jquery-ui-1.10.4.custom.min.js', 
	'./js/splitter/jquery.splitter-0.14.0.js', 
	'./js/google-code-prettify/run_prettify.js?skin=sons-of-obsidian', 
	'./js/google-code-prettify/prettify.js', 
	'./js/jquery.tagcanvas.min.js',
	'./js/tutor.js'
];

var css = [
	'./js/jquery-ui-1.10.4.custom/css/my-theme/jquery-ui-1.10.4.custom.min.css', 
	'./js/splitter/jquery.splitter.css', 
	'./js/google-code-prettify/prettify.css', 
	'./css/verticalTabs.css',
	'./css/interviewpedia.css'
];

function loadJS(arr){
	$.each(arr, function(i, js){
		appendScriptTag(js);
	});
}

function loadDataJS(arr, course){
	appendScriptTag('./data/' + course + '/topics.json.js');
	$.each(arr, function(i, js){
		appendScriptTag('./data/' + course + '/' + js);
	});
}

function appendScriptTag(src) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = src;
	$('head')[0].appendChild(script);
}

function loadCSS(arr){
	$.each(arr, function(i, css){
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = css;
		$('head')[0].appendChild(link);
	});
}

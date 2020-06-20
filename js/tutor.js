$.redirect = function (url, params) {
	url = url || window.location.href || '';
	url = url.match(/\?/) ? url : url + '?';

	for (var key in params) {
		var re = RegExp('&?' + key + '=?[^&;]*', 'g');
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

function buildTags(){
	var tags = [];
	for(var i=0; i<topics.length; i++){
		var arr = eval(topics[i].id + "_que");
		for(var j=0; j<arr.length; j++){
			var oQue = arr[j];
			for(var k=0; k<oQue.tags.length; k++){
				var obj = {
					category : oQue.question,
					q : (j+1),
					topic : topics[i].id,
					label : oQue.tags[k]
				};
				tags.push(obj);
				}
		}
	}
	return tags;
}

function onLoadHandler(){
	var course = $.urlParam("course");
	var newTopic = $.urlParam("topic");
	var que = $.urlParam("q");
	
	if(newTopic == null){
		return;
	}
	$.each(topics, function(i, t){
		if(newTopic == t.id){
			$("#tab-container").tabs("option", "active", i);
			renderVerticalTabs(newTopic);
			if(que != null){
				$("#inner-tabs-container").tabs("option", "active", que-1);
				renderAnswer(newTopic, que-1);
			}
			
		}
	});
}

function renderAnswer(topic, i){
    var que = "<h1>" + eval(topic+"_que")[i].question + "</h1>";
	var ans = eval(topic+"_ans")[i];
	$("#tabs-inner").html(que + ans.text);
	$( ":header" ).css({
        background: "#ccc",
        color: "#3b5998"
	});
	$("pre").removeClass();
	$("pre").addClass("prettyprint linenums lang-java");
	prettyPrint();
}

function renderVerticalTabs(topic){
	//	<li><a href="#tabs-inner"> First Inner Tab </a></li>
	
	$("#vertical").empty();	// remove all the existing questions
	$.each(eval(topic+"_que"), function(i, oQue){
		var a = $("<a>").attr("id", i).attr("href", "#tabs-inner");
		//a.attr("title", oQue.question);
		a.bind("click", function(){
			renderAnswer(topic, i);
		});
		a.append((i+1) + ":&nbsp;&nbsp;" + oQue.question);	
		var li = $("<li>").append(a);
		$("#vertical").append(li);
	});
	renderAnswer(topic, 0);
	$('#inner-tabs-container').tabs("refresh");
}

function renderHorizontalTabs(){
	//	<li><a id='oops' href="#content" onclick='renderQ($(this).attr("id"))'><b>OOPS</b></a></li>
	
	$.each(topics, function(i, oTopic){
		var a = $("<a>").attr("id", oTopic.id).attr("href","#inner-tabs-container");
		a.bind("click", function(){
			renderVerticalTabs(oTopic.id);
		});
		a.append("<b>" + oTopic.caption + "</b>");
		var li = $("<li>").append(a);
		$("#horizontal").append(li);
	});
	
}

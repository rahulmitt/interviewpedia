class Interviewpedia {
	constructor() {
		this.course = $.urlParam("course");
		this.topic = $.urlParam("topic");
	}
	
	loadCourse() {
		if(this.course == null || this.course == "0") {
			this.openDialog();
		} else {
			this.hideDialog();
			this._loadDataJS(eval(this.course), this.course);
			
			setTimeout(function() {
				$(document).trigger('afterReady');
			}, 500);
		}
	}
	
	render() {
		this.enrichCourseTitle();
		let selectedT = tabToBeSelected();
		let selectedQ = this.findQuestionNo();
		new MenuBar($('#horizontal-tabs'), topics).build(selectedT, selectedQ);
		selectedQ = 0;
	}
	
	enrichCourseTitle() {
		let courseName = "";
		$.each(courses, (function(index, course) {
				if(course.id == this.course) {
					courseName = course.name;
				}
			}).bind(this)
		);
		
		$("#label").html('<label title="Click to select a different course" style="cursor:pointer"><b>Interviewpedia</b> - ' + courseName + '</label>');
	}
	
	findQuestionNo() {
		let selectedQ = $.urlParam("q");
		if(selectedQ == null) return 0;
		let q = 0;
		let t = this.topic != null ? this.topic : eval(this.course)[0].split(".")[0];
		$.each(eval(t + "_que"), function(index, que) {
			if(que.id == selectedQ) {
				q = index;
			}
		});
		
		return q;
	}
	
	openDialog() {
		$("#dlg").html("");
		$.each(courses, function(index, course) {
			let p = $('<p/>').text((index + 1) + ". " + course.name)
			.click(function() {
				$.doRedirect({
					course : eval(course).id,
					//topic : null,
					//q : 0
				});
			})
			.css('cursor', 'pointer')
			.appendTo($("#dlg"));
		});

		$("#dlg").dialog({
			title: 'Choose a Course',
			closed: false,
			cache: false,
			modal: true
		});
	}
	
	hideDialog() {
		$("#dlg").hide();
	}
	
	_loadDataJS(arr, course){
		Interviewpedia.appendScriptTag('./data/' + course + '/-topics.json.js');
		$.each(arr, function(i, js){
			Interviewpedia.appendScriptTag('./data/' + course + '/' + js);
		});
	}

	static appendScriptTag(src) {
		let script = document.createElement('script');
		script.setAttribute("type","text/javascript");
        script.setAttribute("src", src);
		$('head')[0].appendChild(script);
	}
}
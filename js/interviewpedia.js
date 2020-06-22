class Interviewpedia {
	constructor() {
		this.course = $.urlParam("course");
		this.topic = $.urlParam("topic");
        this.q = $.urlParam("q");
	}

	static instance = null;

	static getInstance() {
        if(Interviewpedia.instance == null) Interviewpedia.instance = new Interviewpedia();
        return Interviewpedia.instance;
	}
	
	loadCourse() {
		if(this.course == null || this.course == "0") {
			CourseChooserDialog.getInstance($("#dlg")).open();
		} else {
			CourseChooserDialog.getInstance($("#dlg")).hide();
			DataLoader.getInstance().loadData(eval(this.course), this.course);
			
			setTimeout(function() {
				$(document).trigger('afterReady');
			}, 500);
		}
	}
	
	render() {
		this.enrichCourseTitle();
		let t = tabToBeSelected();
		let q = this.findQuestionNo();
		MenuBar.getInstance($('#horizontal-tabs')).build(t, q);
		q = 0;
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
		if(this.q == null) return 0;
		let selectedQ = 0;
		let t = this.topic != null ? this.topic : eval(this.course)[0].split(".")[0];
		$.each(eval(t + "_que"), (function(index, que) {
                if(que.id == this.q) {
                    selectedQ = index;
                }
            }).bind(this)
		)
		
		return selectedQ;
	}
}
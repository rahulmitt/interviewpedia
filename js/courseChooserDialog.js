class CourseChooserDialog {
	constructor(uiComponent) {
		this.uiComponent = uiComponent;
	}

    static instance = null;

    static getInstance(uiComponent) {
        if(CourseChooserDialog.instance == null) CourseChooserDialog.instance = new CourseChooserDialog(uiComponent);
        return CourseChooserDialog.instance;
    }
	
	open() {
		this.uiComponent.html("");
		let v = $.urlParam("v");
		let index = 1;
		for(var i = 0; i < courses.length; i++) {
		    let course = courses[i];
		    if(v == null || v != '1') {
                if(course.v != 1) continue;
		    }

		    let p = $('<p/>').text((index) + ". " + course.name).click(function() {
                $.doRedirect({
                    course : eval(course).id,
                    topic : null,
                    q : 0
                });
            })
            .css('cursor', 'pointer')
            .appendTo($("#dlg"));
            index++;
		}
		/*
		$.each(courses, function(index, course) {
		    if(course.v == 1) {
                let p = $('<p/>').text((index + 1) + ". " + course.name).click(function() {
                    $.doRedirect({
                        course : eval(course).id,
                        topic : null,
                        q : 0
                    });
                })
                .css('cursor', 'pointer')
                .appendTo($("#dlg"));
		    }
		});
        */

		$("#dlg").dialog({
			title: 'Choose a Course',
			closed: false,
			cache: false,
			modal: true
		});
	}
	
	hide() {
		this.uiComponent.hide();
	}
}
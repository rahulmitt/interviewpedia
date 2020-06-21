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
	
	hide() {
		this.uiComponent.hide();
	}
}
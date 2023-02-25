class WhoAmI {
	constructor(uiComponent) {
		this.uiComponent = uiComponent;
	}

    static instance = null;

    static getInstance(uiComponent) {
        if(WhoAmI.instance == null) WhoAmI.instance = new WhoAmI(uiComponent);
        return WhoAmI.instance;
    }
	
	open() {
	    $('#dlgWhoAmI').html("");
		this.uiComponent.html("");
		$('</br>').appendTo($("#dlgWhoAmI"));
		$('<a/>').text("LinkedIn").attr("href", "https://www.linkedin.com/in/rahulmitt/").attr("target", "_blank").appendTo($("#dlgWhoAmI"));
		$('</br>').appendTo($("#dlgWhoAmI"));
		$('<a/>').text("Email: rahulmitt@yahoo.com").attr("href", "mailto:rahulmitt@yahoo.com").appendTo($("#dlgWhoAmI"));

        $("#dlgWhoAmI").width("20%").height("20%");

		$("#dlgWhoAmI").dialog({
			title: 'Who am I?',
			closed: false,
			cache: false,
			modal: true
		});
	}
	
	hide() {
		this.uiComponent.hide();
	}
}
class MenuBar {
	constructor(uiElement) {
		this.uiElement = uiElement;
	}

    static instance = null;

    static getInstance(uiElement) {
        if(MenuBar.instance == null) MenuBar.instance = new MenuBar(uiElement);
        return MenuBar.instance;
    }
	
	build(topicToSelect, queToSelect) {
		let uiElement = this.uiElement;
		$(topics).each(function(index, topic) {
			let addOptions = {};
			addOptions["title"] = topic.caption;
			addOptions["href"] = '#';
			addOptions["closable"] = false;
			addOptions["border"] = false;
			uiElement.tabs('add', addOptions);
		});
		
		let selectOptions = {};
		selectOptions["onSelect"] = (function(title){
			let topicId = null;
			$(topics).each(function(index, topic) {
				if(topic.caption == title) {
					topicId = topic.id;
				}
			});
			
			SideMenu.getInstance($("#sm"), $("#ans"), $("#toc"), $("#tags")).build(topicId, queToSelect);
			
		}).bind(this);			// binding the callback's this to the value of constructor's this
		
		this.uiElement.tabs(selectOptions);
		this.uiElement.tabs('select', topicToSelect);
		queToSelect = 0;
	}
}
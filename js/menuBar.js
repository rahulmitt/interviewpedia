class MenuBar {
	constructor(sourceDiv, topics) {
		this.sourceDiv = sourceDiv;
		this.topics = topics;
	}
	
	build(selectedT, selectedQ) {
		let sourceDiv = this.sourceDiv;
		$(topics).each(function(index, topic) {
			let options = {};
			options["title"] = topic.caption;
			options["href"] = '#';
			options["closable"] = false;
			options["border"] = false;
			sourceDiv.tabs('add', options);
		});
		
		let opt = {};
		//opt["border"] = false;
		opt["onSelect"] = (function(title){
			let topicId = null;
			$(topics).each(function(index, topic) {
				if(topic.caption == title) {
					topicId = topic.id;
				}
			});
			
			let que;
			try {
				que = eval(topicId + "_que");
			} catch(e) {
				que = [];
			}
			new SideMenu($("#sm"), topicId, que, $("#ans")).build(selectedQ);
			
		}).bind(this);			// binding the callback's this to the value of constructor's this
		
		this.sourceDiv.tabs(opt);
		this.sourceDiv.tabs('select', selectedT);
		selectedQ = 0;
	}
}
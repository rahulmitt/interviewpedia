class SideMenu {
	constructor(uiElement, answerDiv, tocDiv, tagsDiv) {
		this.uiElement = uiElement;
		this.answerDiv = answerDiv;
		this.tocDiv = tocDiv;
		this.tagsDiv = tagsDiv;
		this.data = [];
		this.topicId = null;
	}
	
    static instance = null;

    static getInstance(uiElement, answerDiv, tocDiv, tagsDiv) {
        if(SideMenu.instance == null) SideMenu.instance = new SideMenu(uiElement, answerDiv, tocDiv, tagsDiv);
        return SideMenu.instance;
    }
	
	build(topicId, queToSelect) {
		this.topicId = topicId;
		try {
			this.data = eval(topicId + "_que");
		} catch(e) {
			this.data = [];
		}

		this.answerDiv.panel('setTitle', ' ');
		
		this.options = {};
		this.options["border"] = false;
		//this.options["fit"] = true;
		this.options["width"] = 2000;
		this.options["height"] = this.data.length * 42;	// some weird logic to manage vertical scrollbar. So, no need to set: options["fit"]
		this.options["data"] = this.transform(this.data);
		this.options["onSelect"] = (function(item) {
			let answer = this.findAnswer(item.text);
			this.answerDiv.panel({
				title:item.text,
				tools:[
					{
						iconCls: 'icon-reload',
						handler: (function() {
							$.doRedirect({
                                    course : $.urlParam("course"),
                                    topic : this.topicId,
                                    q : this.findQid(item.text),
                            });
						}).bind(this)
					},
				]
			}); 
			
			this.answerDiv.html(answer);
			$("pre").removeClass();
			$("pre").addClass("prettyprint linenums lang-java");
			prettyPrint();
			this.buildToc();
			this.tagsDiv.html(this.findTags(item.text));
			this.answerDiv.scrollTop(0);
		}).bind(this);			// binding the callback's this to the value of constructor's this
		
		this.uiElement.sidemenu(this.options);
		if(queToSelect == null || queToSelect >= this.options.data[0].children.length || queToSelect < 0) queToSelect = 0;
		this.uiElement.find('ul:first li:eq(' + queToSelect + ') div').click();
	}
	
	findQid(textToSearch) {
		let qid = null
		$(this.data).each(function(index, que) {
			if(que.question == textToSearch.replace(/\d*.\s/,'')) {
				qid = que.id;
			}
		});
		
		return qid;
	}
	
	findAnswer(textToSearch) {
		let qid = this.findQid(textToSearch);
		if(qid == null) return "";
		
		let answer = "";
		$(eval(this.topicId + "_ans")).each(function(index, ans) {
			if(ans.id == qid) {
				answer = ans.text;
			}
		});
		
		return answer;
	}

	findTags(textToSearch) {
        let tags = null
		$(this.data).each(function(index, que) {
			if(que.question == textToSearch.replace(/\d*.\s/,'')) {
				tags = que.tags;
			}
		});

		let tagBox = $("<div>");
		$(tags).each(function(index, t) {
		    let tagItem = $("<div>");
            tagItem.addClass("tag-label");
            tagItem.text(t);
            tagBox.append(tagItem);
		});

		return tagBox.html();
	}
	
	transform(rawData) {
		let questions = {};
		questions ["state"] = 'open';
		questions ["children"] = [];
		
		$(rawData).each(function(index, inputJson) {
			let q = {};
			q["text"] = (index + 1) + ". " + inputJson.question;
			questions ["children"].push(q);
		});
		
		let outputJsonArray = [];
		outputJsonArray.push(questions);
		return outputJsonArray;
	}

	buildToc() {
	    this.tocDiv.empty();
	    let id = 1;
	    for (var i = 0; i < this.answerDiv.find(':header').length; i++) {
	        let ele = this.answerDiv.find(':header')[i];
            $(ele).attr('id', id);
            let link = $("<a>").attr("href", "#" + id).text(id++ + ". " + $(ele).text());
            this.tocDiv.append(link);
            this.tocDiv.append("<br/><br/>");
        };
	}
}

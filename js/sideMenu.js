class SideMenu {
	constructor(sourceDiv, topicId, data, targetDiv) {
		this.sourceDiv = sourceDiv;
		this.targetDiv = targetDiv;
		this.options = {};
		this.topicId = topicId;
		this.data = data;
		this.options["border"] = false;
		//this.options["fit"] = true;
		this.options["width"] = 2000;
		this.options["height"] = data.length * 42;	// some weird logic to manage vertical scrollbar. So, no need to set: options["fit"]
		this.options["data"] = this.transform(data);
		this.targetDiv.panel('setTitle', ' ');
		this.options["onSelect"] = (function(item) {
			let answer = this.findAnswer(item.text);
			
			this.targetDiv.panel({
				title:item.text,
				tools:[
					{
						iconCls: 'icon-reload',
						handler: function(){
							//alert('This would give the direct url for this article');
						}
					},
				]
			}); 
			
			this.targetDiv.html(answer);
			$("pre").removeClass();
			$("pre").addClass("prettyprint linenums lang-java");
			prettyPrint();
		}).bind(this);			// binding the callback's this to the value of constructor's this
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

	build(selected) {
		this.sourceDiv.empty();
		this.targetDiv.empty();
		this.sourceDiv.sidemenu(this.options);
		if(selected == null || selected >= this.options.data[0].children.length || selected < 0) selected = 0;
		this.sourceDiv.find('ul:first li:eq(' + selected + ') div').click();
	}
}

class SearchBox {
    constructor(uiComponent) {
        this.uiComponent = uiComponent;
        this.label = null;
        this.q = null;
        this.topic = null;
    }

    static instance = null;

    static getInstance(uiComponent) {
        if(SearchBox.instance == null) SearchBox.instance = new SearchBox(uiComponent);
        return SearchBox.instance;
    }

    build() {
        this.uiComponent.combobox({
            data: SearchBox.buildTags(),
            valueField: 'q',
            textField: 'label',
            panelWidth: 400,
            panelHeight:'auto',
            panelMinHeight:100,
            panelMaxHeight:550,
            onSelect: (function(record){
                this.label = record.label;
                this.q = record.q;
                this.topic = record.topic;
            }).bind(this),

            onClick: (function(record) {
                //alert("CLICKED !! Label : " + record.label + " || topic : " + record.topic + " || q : " + record.q + " || tag : " + record.tag);
                $.doRedirect({
                    course : $.urlParam("course"),
                    topic : record.topic,
                    q : record.q,
                });
            }).bind(this),
        });

        $("span.textbox-addon").remove();
        $("#_easyui_textbox_input1").attr("placeholder", "Grep: <ctrl+s>");
        $("#_easyui_textbox_input1").focus().select();
        $("#_easyui_textbox_input1").on('keydown', (function (e) {
            if (e.which == 13) {
                e.preventDefault();
                //TODO: check if any selection was made
                //alert("ENTER PRESSED !! Label : " + this.label + " || topic : " + this.topic + " || q : " + this.q + " || tag : " + this.tag);
                $.doRedirect({
                    course : $.urlParam("course"),
                    topic : this.topic,
                    q : this.q,
                });
             }
        }).bind(this)
        );
    }

    static buildTags() {
        var tags = [];
        for(var i=0; i<topics.length; i++) {
            var questions = eval(topics[i].id + "_que");
            for(var j=0; j<questions.length; j++) {
                var oQue = questions[j];
                for(var k=0; k<oQue.tags.length; k++) {
                    var oTag = {
                        label : topics[i].caption + " > " + oQue.question + " > " + oQue.tags[k],

                        topic: topics[i].id,
                        topicCaption: topics[i].caption,

                        q: oQue.id,
                        question: oQue.question,

                        tag: oQue.tags[k],
                    };
                    tags.push(oTag);
                }
            }
        }
        return tags;
    }
}
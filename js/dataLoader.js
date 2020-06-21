class DataLoader {
    static instance = null;

	static getInstance() {
        if(DataLoader.instance == null) DataLoader.instance = new DataLoader();
        return DataLoader.instance;
	}

	loadData(arr, course){
		DataLoader.appendScriptTag('./data/' + course + '/-topics.json.js');
		$.each(arr, function(i, js){
			DataLoader.appendScriptTag('./data/' + course + '/' + js);
		});
	}

	static appendScriptTag(src) {
		let script = document.createElement('script');
		script.setAttribute("type","text/javascript");
        script.setAttribute("src", src);
		$('head')[0].appendChild(script);
	}

}
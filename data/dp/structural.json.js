var structural_que = [
	{
		id : 1,
		question : "Adapter",
		tags : ["GoF", "Structural Design Patterns", "Adapter"]
	},

	{
		id : 2,
		question : "Bridge",
		tags : ["GoF", "Structural Design Patterns", "Bridge"]
	},

	{
		id : 3,
		question : "Composite",
		tags : ["GoF", "Structural Design Patterns", "Composite"]
	},

	{
		id : 4,
		question : "Decorator",
		tags : ["GoF", "Structural Design Patterns", "Decorator"]
	},

	{
		id : 5,
		question : "Facade",
		tags : ["GoF", "Structural Design Patterns", "Facade"]
	},

	{
		id : 6,
		question : "Flyweight",
		tags : ["GoF", "Structural Design Patterns", "Flyweight"]
	},

	{
		id : 7,
		question : "Proxy",
		tags : ["GoF", "Structural Design Patterns", "Proxy"]
	},
]

var structural_ans = [
    {   /* Adapter */
        id : 1,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">The <strong>Adapter</strong> pattern converts the interface of the <strong>adaptee-class</strong>
into the <strong>target-interface</strong> that a client requires. It acts as an intermediary and lets classes work together
that couldn’t otherwise because of an incompatible interface. The Adapter pattern is also known as <strong>Wrapper</strong>.</p>
<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">It allows two or more previously incompatible objects to interact.</li>
	<li style="text-align: justify;">It allows reusability of existing functionality.</li>
</ol>
<h3 style="text-align: justify;">Usecases</h3>
<ol>
	<li style="text-align: justify;">An object needs to utilize an existing class with an incompatible interface.</li>
	<li style="text-align: justify;">You want to create a reusable class that cooperates with classes that don’t necessarily have compatible interfaces.</li>
</ol>

<p style="text-align: justify;">There are two variations of this pattern:</p>
<ol>
	<li style="text-align: justify;"><strong>Class Adapter</strong> — adapter <strong>extends (is-a)</strong> adaptee
	and implements the target interface</li>
	<li style="text-align: justify;"><strong>Object Adapter</strong> — adapter is <strong>composed of (has-a)</strong> adaptee
	and implements the target interface</li>
</ol>
<p><img src="data/dp/images/structural/1.1.class_adapter.png" alt="" width="100%"/></p>
<p style="text-align: justify;">&nbsp;</p>
	<p><img src="data/dp/images/structural/1.2.object_adapter.png" alt="" width="100%"/></p>
<p>Reference: <a href="https://github.com/rahulmitt/design-patterns/tree/master/structural/src/main/java/com/rahulmitt/interviewpedia/dp/structural/adapter" target="_blank">Github — Adapter Design Pattern</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Bridge */
        id : 2,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">TODO</p>
<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">TODO</li>
</ol>
<h3 style="text-align: justify;">Usecases</h3>
<ol>
	<li style="text-align: justify;">TODO</li>
</ol>
<p><img src="data/dp/images/structural/2.bridge.png" alt="" width="100%"/></p>

<p>Reference: <a href="TODO" target="_blank">Github — Bridge Design Pattern</a></p>
        */}.toString().slice(14,-3)
    },

	{   /* Composite */
		id : 3,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">TODO</p>
<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">TODO</li>
</ol>
<h3 style="text-align: justify;">Usecases</h3>
<ol>
	<li style="text-align: justify;">TODO</li>
</ol>
<p><img src="data/dp/images/structural/3.composite.png" alt="" width="100%"/></p>

<p>Reference: <a href="TODO" target="_blank">Github — Composite Design Pattern</a></p>
        */}.toString().slice(14,-3)
	},

    {   /* Decorator */
        id : 4,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">TODO</p>
<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">TODO</li>
</ol>
<h3 style="text-align: justify;">Usecases</h3>
<ol>
	<li style="text-align: justify;">TODO</li>
</ol>
<p><img src="data/dp/images/structural/4.decorator.png" alt="" width="100%"/></p>

<p>Reference: <a href="TODO" target="_blank">Github — Decorator Design Pattern</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Facade */
        id : 5,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">TODO</p>
<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">TODO</li>
</ol>
<h3 style="text-align: justify;">Usecases</h3>
<ol>
	<li style="text-align: justify;">TODO</li>
</ol>
<p><img src="data/dp/images/structural/5.facade.png" alt="" width="100%"/></p>

<p>Reference: <a href="TODO" target="_blank">Github — Facade Design Pattern</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Flyweight */
        id : 6,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">TODO</p>
<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">TODO</li>
</ol>
<h3 style="text-align: justify;">Usecases</h3>
<ol>
	<li style="text-align: justify;">TODO</li>
</ol>
<p><img src="data/dp/images/structural/6.flyweight.png" alt="" width="100%"/></p>

<p>Reference: <a href="TODO" target="_blank">Github — Flyweight Design Pattern</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Proxy */
        id : 7,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">TODO</p>
<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">TODO</li>
</ol>
<h3 style="text-align: justify;">Usecases</h3>
<ol>
	<li style="text-align: justify;">TODO</li>
</ol>
<p><img src="data/dp/images/structural/7.proxy.png" alt="" width="100%"/></p>

<p>Reference: <a href="TODO" target="_blank">Github — Proxy Design Pattern</a></p>
        */}.toString().slice(14,-3)
    },


]
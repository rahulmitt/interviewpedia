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
<h3 style="text-align: justify;">Use Cases</h3>
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
<p style="text-align: justify;">The <strong>Bridge</strong> pattern’s intent is to <strong>decouple</strong> the functional
abstraction from the implementation so that the two can be changed and can vary independently. The Bridge pattern is also
known as <strong>Handle/Body</strong>.</p>
<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">It enables the separation of implementation from the interface.</li>
	<li style="text-align: justify;">It improves extensibility.</li>
	<li style="text-align: justify;">It allows the hiding of implementation details from the client.</li>
</ol>
<h3 style="text-align: justify;">Use Cases</h3>
<ol>
	<li style="text-align: justify;">You want to avoid a permanent binding between the functional abstraction and its implementation.</li>
	<li style="text-align: justify;">Both the functional abstraction and its implementation need to be extended using subclasses.</li>
	<li style="text-align: justify;">Changes to the implementation should not impact the client (not even a recompile).</li>
</ol>
<p><img src="data/dp/images/structural/2.bridge.png" alt="" width="100%"/></p>

<p>Reference: <a href="https://github.com/rahulmitt/design-patterns/tree/master/structural/src/main/java/com/rahulmitt/interviewpedia/dp/structural/bridge" target="_blank">Github — Bridge Design Pattern</a></p>
        */}.toString().slice(14,-3)
    },

	{   /* Composite */
		id : 3,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">The <strong>Composite</strong> pattern’s intent is to allow clients to operate in a generic
manner on objects that may or may not represent a hierarchy of objects.</p>
<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">It defines class hierarchies consisting of primitive and complex objects.</li>
	<li style="text-align: justify;">It makes it easier for you to add new kinds of components.</li>
	<li style="text-align: justify;">It provides the flexibility of structure with a manageable interface.</li>
</ol>
<h3 style="text-align: justify;">Use Cases</h3>
<ol>
	<li style="text-align: justify;">You want to represent a full or partial hierarchy of objects.</li>
	<li style="text-align: justify;">You want clients to be able to ignore the differences between the varying objects in the hierarchy.</li>
	<li style="text-align: justify;">The structure is dynamic and can have any level of complexity.</li>
</ol>
<p><img src="data/dp/images/structural/3.composite.png" alt="" width="100%"/></p>

<p>Reference: <a href="https://github.com/rahulmitt/design-patterns/tree/master/structural/src/main/java/com/rahulmitt/interviewpedia/dp/structural/Composite" target="_blank">Github — Composite Design Pattern</a></p>
        */}.toString().slice(14,-3)
	},

    {   /* Decorator */
        id : 4,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">An alternative to subclassing to extend functionality, the <strong>Decorator</strong> pattern’s
intent is to attach flexible additional responsibilities to an object dynamically. The Decorator pattern uses composition
instead of inheritance to extend the functionality of an object at runtime. The Decorator pattern is also known as <strong>Wrapper</strong>.</p>
<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">It provides greater flexibility than static inheritance.</li>
	<li style="text-align: justify;">It avoids the need to place feature-laden classes higher up the hierarchy.</li>
	<li style="text-align: justify;">It simplifies coding by allowing you to develop a series of functionality- targeted classes,
	instead of coding all of the behavior into the object.</li>
	<li style="text-align: justify;">It enhances the extensibility of the object, because changes are made by coding new classes.</li>
</ol>
<h3 style="text-align: justify;">Use Cases</h3>
<ol>
	<li style="text-align: justify;">You want to transparently and dynamically add responsibilities to objects without affecting other objects.</li>
	<li style="text-align: justify;">You want to add responsibilities to an object that you may want to change in the future.</li>
	<li style="text-align: justify;">Extending functionality by subclassing is no longer practical.</li>
</ol>
<p><img src="data/dp/images/structural/4.decorator.png" alt="" width="100%"/></p>

<p>Reference: <a href="https://github.com/rahulmitt/design-patterns/tree/master/structural/src/main/java/com/rahulmitt/interviewpedia/dp/structural/decorator" target="_blank">Github — Decorator Design Pattern</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Facade */
        id : 5,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">The <strong>Facade</strong> pattern’s intent is to provide a <strong>unified and simplified
interface</strong> to a set of interfaces in a subsystem. The Facade pattern describes a <strong>higher level interface</strong>
that makes the subsystem(s) easier to use. Practically every <strong>Abstract Factory</strong> is a type of Facade.</p>
<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">It provides a simpler interface to a complex subsystem without reducing the options
	provided by the subsystem.</li>
	<li style="text-align: justify;">It shields clients from the complexity of the subsystem components.</li>
	<li style="text-align: justify;">It promotes looser coupling between the subsystem and its clients.</li>
	<li style="text-align: justify;">It reduces the coupling between subsystems provided that every subsystem uses its own
	Facade pattern and other parts of the system use the Facade pattern to communicate with the subsystem.</li>
</ol>
<h3 style="text-align: justify;">Use Cases</h3>
<ol>
	<li style="text-align: justify;">You need to provide a simple interface to a complex subsystem.</li>
	<li style="text-align: justify;">Several dependencies exist between clients and the implementation classes of an abstraction.</li>
	<li style="text-align: justify;">When layering the subsystems is necessary or desired.</li>
</ol>
<p><img src="data/dp/images/structural/5.facade.png" alt="" width="100%"/></p>

<p>Reference: <a href="https://github.com/rahulmitt/design-patterns/tree/master/structural/src/main/java/com/rahulmitt/interviewpedia/dp/structural/facade" target="_blank">Github — Facade Design Pattern</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Flyweight */
        id : 6,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">The <strong>Flyweight</strong> pattern’s intent is to utilize sharing to support large
number of fine-grained objects in an efficient manner.</p>
<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">It reduces the number of objects to deal with.</li>
	<li style="text-align: justify;">It reduces the amount of memory and storage required if the objects are persisted.</li>
</ol>
<h3 style="text-align: justify;">Use Cases</h3>
<ol>
	<li style="text-align: justify;">An application uses a considerable number of objects.</li>
	<li style="text-align: justify;">The storage costs are high because of the quantity of objects.</li>
	<li style="text-align: justify;">The application does not depend on object identity.</li>

</ol>
<p><img src="data/dp/images/structural/6.flyweight.png" alt="" width="100%"/></p>

<p>Reference: <a href="https://github.com/rahulmitt/design-patterns/tree/master/structural/src/main/java/com/rahulmitt/interviewpedia/dp/structural/flyweight" target="_blank">Github — Flyweight Design Pattern</a></p>
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
<h3 style="text-align: justify;">Use Cases</h3>
<ol>
	<li style="text-align: justify;">TODO</li>
</ol>
<p><img src="data/dp/images/structural/7.proxy.png" alt="" width="100%"/></p>

<p>Reference: <a href="TODO" target="_blank">Github — Proxy Design Pattern</a></p>
        */}.toString().slice(14,-3)
    },


]
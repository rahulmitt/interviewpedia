var creational_que = [
	{
		id : 1,
		question : "GoF — Abstract Factory",
		tags : ["GoF", "Creational Design Patterns", "Abstract Factory"]
	},

	{
		id : 2,
		question : "GoF — Builder",
		tags : ["GoF", "Creational Design Patterns", "Builder"]
	},

	{
		id : 3,
		question : "GoF — Factory Method",
		tags : ["GoF", "Creational Design Patterns", "Factory Method"]
	},

	{
		id : 4,
		question : "GoF — Prototype",
		tags : ["GoF", "Creational Design Patterns", "Prototype"]
	},

	{
		id : 5,
		question : "GoF — Singleton",
		tags : ["GoF", "Creational Design Patterns", "Singleton"]
	},

    {
		id : 6,
		question : "Object Pool",
		tags : ["Creational Design Patterns", "Object Pool"]
	},
]

var creational_ans = [
	{   /* Abstract Factory */
		id : 1,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">The <strong>Abstract factory</strong> pattern&rsquo;s intent is to provide an interface
to use for creating <strong>families</strong> of related or dependent objects without actually specifying their concrete
classes. For a given set of related abstract classes, this pattern supplies a technique for creating instances of those
abstract classes from an equivalent set of concrete subclasses. On some occasions, you may need to create an object without
having to know which concrete subclass of object to create. The Abstract Factory pattern is also known as <strong>kit</strong>.</p>

<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">It isolates the client from concrete classes.</li>
	<li style="text-align: justify;">It eases the exchange of object families.</li>
	<li style="text-align: justify;">It promotes consistency among objects.</li>
</ol>

<h3 style="text-align: justify;">Usecases</h3>
<ol>
	<li style="text-align: justify;">The system needs to be independent of how its objects are created, composed, and represented.</li>
	<li style="text-align: justify;">The system needs to be configured with one of a multiple family of objects.</li>
	<li style="text-align: justify;">The family of related objects is intended to be used together and this constraint needs to be enforced.</li>
	<li style="text-align: justify;">You want to provide a library of objects that does not show implementations and only reveals interfaces.</li>
</ol>
<p><img src="data/dp/images/creational/1.abstract_factory.png" alt="" width="100%" /></p>

<p>Reference: <a href="https://github.com/rahulmitt/design-patterns/tree/master/creational/src/main/java/com/rahulmitt/interviewpedia/dp/creational/abstractfactory" target="_blank">Github — Abstract Factory Design Pattern</a></p>
        */}.toString().slice(14,-3)
	},

    {   /* Builder */
        id : 2,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">The <strong>Builder</strong> pattern&rsquo;s intent is to separate the construction of a
<strong>complex object</strong> from its representation so that the same construction process can create different objects.
The Builder pattern is useful when several kinds of complex objects with similar rules for assembly need to be joined at
runtime but result in different object types. In other words, it creates complex objects in multiple steps instead of in
a single step, as in other patterns. It achieves this by separating the process of building the object from the object itself.</p>

<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">It permits you to vary an object&rsquo;s internal representation.</li>
	<li style="text-align: justify;">It isolates the code for construction and representation.</li>
	<li style="text-align: justify;">It provides finer control over the construction process.</li>
</ol>
<h3 style="text-align: justify;">Usecases</h3>
<ol>
	<li style="text-align: justify;">The algorithm for creating a complex object needs to be independent of the components that compose the object and how they are assembled.</li>
	<li style="text-align: justify;">The construction process is to allow different representations of the constructed object.</li>
</ol>
<p><img src="data/dp/images/creational/2.builder.png" alt="" width="100%"/></p>

<p>Reference: <a href="https://github.com/rahulmitt/design-patterns/tree/master/creational/src/main/java/com/rahulmitt/interviewpedia/dp/creational/builder" target="_blank">Github — Builder Design Pattern</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Factory Method */
        id : 3,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">The <strong>Factory Method</strong> pattern&rsquo;s intent is to define an interface for
creating an object but letting the subclass decide which class to instantiate. In other words, the class defers instantiation
to subclasses. The client of the Factory Method never needs to know the concrete class that has been instantiated and returned.
Its client needs to know only about the published abstract interface.</p>
<p style="text-align: justify;">The Factory Method pattern is also known as <strong>Virtual Constructor</strong>.</p>
<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">It removes the need to bind application-specific classes into the code. The code
	interacts solely with the resultant interface, so it will work with any classes that implement that interface.</li>
	<li style="text-align: justify;">Because creating objects inside a class is more flexible than creating an object directly,
	it enables the subclass to provide an extended version of an object.</li>
</ol>
<h3 style="text-align: justify;">Usecases</h3>
<ol>
	<li style="text-align: justify;">A class is not able to anticipate the class of objects it needs to create.</li>
	<li style="text-align: justify;">A class wants its subclasses to specify the objects it instantiates.</li>
	<li style="text-align: justify;">Classes assign responsibility to one of several helper subclasses, and you want to
	localize the knowledge of which helper subclass is the delegate.</li>
</ol>
<p><img src="data/dp/images/creational/3.factory_method.png" alt="" width="100%"/></p>

<p>Reference: <a href="https://github.com/rahulmitt/design-patterns/tree/master/creational/src/main/java/com/rahulmitt/interviewpedia/dp/creational/factorymethod" target="_blank">Github — Factory Method Design Pattern</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Prototype */
        id : 4,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">The <strong>Prototype</strong> pattern&rsquo;s intent is to specify the kinds of objects
that need to be created using a <strong>prototypical instance</strong>, and to then be able to create new objects by
copying this prototype. This is similar to the <code>java.lang.Object#clone()</code> method.</p>
<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">It lets you add or remove objects at runtime.</li>
	<li style="text-align: justify;">It lets you specify new objects by varying its values or structure.</li>
	<li style="text-align: justify;">It reduces the need for subclassing.</li>
	<li style="text-align: justify;">It lets you dynamically configure an application with classes.</li>
</ol>
<h3 style="text-align: justify;">Usecases</h3>
<ol>
	<li style="text-align: justify;">The classes to instantiate are specified at runtime.</li>
	<li style="text-align: justify;">You need to avoid building a class hierarchy of factories that parallels the hierarchy of objects.</li>
	<li style="text-align: justify;">Instances of the class have one of only a few different combinations of state.</li>
</ol>
<p><img src="data/dp/images/creational/4.prototype.png" alt="" width="100%"/></p>

<p>Reference: <a href="https://github.com/rahulmitt/design-patterns/tree/master/creational/src/main/java/com/rahulmitt/interviewpedia/dp/creational/prototype" target="_blank">Github — Prototype Design Pattern</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Singleton */
        id : 5,
		"text" : function(){/*
<h3 style="text-align: justify;">Intent</h3>
<p style="text-align: justify;">The <strong>Singleton</strong> pattern&rsquo;s intent is to ensure that a class has
<strong>only one instance</strong> and provides a <strong>global point of access</strong> to it. It ensures that all
objects that use an instance of this class are using the <strong>same instance</strong>.</p>
<h3 style="text-align: justify;">Benefits</h3>
<ol>
	<li style="text-align: justify;">It controls access to a single instance of the class.</li>
	<li style="text-align: justify;">It reduces name space usage.</li>
	<li style="text-align: justify;">It permits refinement of operations and representation.</li>
	<li style="text-align: justify;">It can also permit a variable number of instances.</li>
	<li style="text-align: justify;">It is more flexible than class methods (operations).</li>
</ol>
<h3 style="text-align: justify;">Usecases</h3>
<ol>
	<li style="text-align: justify;">When a single instance of a class is needed and must be accessible to clients from
	a well-known access point.</li>
</ol>
<p><img src="data/dp/images/creational/5.singleton.png" alt="" width="100%"/></p>

<p>Reference: <a href="https://github.com/rahulmitt/design-patterns/tree/master/creational/src/main/java/com/rahulmitt/interviewpedia/dp/creational/singleton" target="_blank">Github — Singleton Design Pattern</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Object Pool */
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
<p><img src="data/dp/images/creational/6.object_pool.png" alt="" width="100%"/></p>

<p>Reference: <a href="TODO" target="_blank">Github — Object Pool Design Pattern</a></p>
        */}.toString().slice(14,-3)
    },
]
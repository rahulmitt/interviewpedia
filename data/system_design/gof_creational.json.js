var gof_creational_que = [
	{
		id : 1,
		question : "GoF — Builder",
		tags : ["GoF", "Creational Design Patterns", "Builder"]
	},

	{
		id : 2,
		question : "GoF — Singleton",
		tags : ["GoF", "Creational Design Patterns", "Singleton"]
	},

	{
		id : 3,
		question : "GoF — Prototype",
		tags : ["GoF", "Creational Design Patterns", "Prototype"]
	},

	{
		id : 4,
		question : "GoF — Factory Method",
		tags : ["GoF", "Creational Design Patterns", "Factory Method"]
	},

	{
		id : 5,
		question : "GoF — Abstract Factory",
		tags : ["GoF", "Creational Design Patterns", "Abstract Factory"]
	},

    {
		id : 6,
		question : "Object Pool",
		tags : ["Creational Design Patterns", "Object Pool"]
	},
];

var gof_creational_ans = [
    {   /* GoF — Builder */
        id : 1,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">As the name implies, a builder pattern is used to build objects. Sometimes, the objects we create can be complex, made up of several sub-objects or require an elaborate construction process. The exercise of creating complex types can be simplified by using the builder pattern. A composite or an aggregate object is what a builder generally builds.</p>
<p style="text-align: justify;">Formally, a <strong><i>builder pattern encapsulates or hides the process of building a complex object and separates the representation of the object and its construction. The separation allows us to construct different representations using the same construction process</i></strong>. In Java speak, different representations implies creating objects of different classes that may share the same construction process.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities</p>
<ol>
<li style="text-align: justify;">Builder</li>
<li style="text-align: justify;">Concrete Builder</li>
<li style="text-align: justify;">Director</li>
<li style="text-align: justify;">Product</li>
</ol>
<p style="text-align: center;"><img src="data/system_design/images/gof_creational/gof_creational_builder_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Continuing with our example of airplanes let's say the construction of an <strong>aircraft</strong> involves the three steps in order:</p>
<ol>
<li style="text-align: justify;">he making of the <strong>cockpit</strong></li>
<li style="text-align: justify;">then the <strong>engine</strong></li>
<li style="text-align: justify;">and finally the <strong>wings</strong></li>
</ol>

<p style="text-align: justify;">In our hypothetical world, every aircraft requires at least the above three steps. However, a passenger aircraft can have an added step of making bathrooms in the plane. The steps represent the <strong><i>construction</i></strong> process from our formal definition. The <strong><i>product</i></strong> is an aircraft but can have different <strong><i>representations</i></strong> such as an F-16 or a Boeing-747. Using the same construction process, we should be able to produce both F-16s and Boeings.</p>
<p style="text-align: justify;">Let's see some code now. First we'll start with the abstract interface for our <code>AircraftBuilder</code> class. The builder contains a method for each component that can be part of the final product. These methods are selectively overridden by concrete builders depending on if the builders will be including that part in the final product variant that they are responsible for building.</p>
<pre>
public abstract class AircraftBuilder {

    public void buildEngine() {}

    public void buildWings() {}

    public void buildCockpit() {}

    public void buildBathrooms() {}

    abstract public IAircraft getResult();
}
</pre>

<p style="text-align: justify;">Now we'll implement two concrete builders, one for <strong>Boeing-747</strong> and one for <strong>F-16</strong>.</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%;">
<pre>
public class Boeing747Builder extends AircraftBuilder {

    Boeing747 boeing747;

    @Override
    public void buildCockpit() {

    }

    @Override
    public void buildEngine() {

    }

    @Override
    public void buildBathrooms() {

    }

    @Override
    public void buildWings() {

    }

    public IAircraft getResult() {
        return boeing747;
    }
}
</pre>
</td>
<td style="width: 50%;">
<pre>
public class F16Builder extends AircraftBuilder {

    F16 f16;

    @Override
    public void buildEngine() {
        // get F-16 an engine
        // f16.engine = new F16Engine();
    }

    @Override
    public void buildWings() {
        // get F-16 wings
        // f16.wings = new F16Wings();
    }

    @Override
    public void buildCockpit() {
        f16 = new F16();
        // get F-16 a cockpit
        // f16.cockpit = new F16Cockpit();
    }

    public IAircraft getResult() {
        return f16;
    }
}

</pre>
</td>
</tr>
</tbody>
</table>

<p style="text-align: justify;">For brevity's sake, we have provided the skeleton of the builders and skipped individual implementation of each method. Note the <code>F16Builder</code> doesn't override the <code>buildBathrooms</code> method, since there are no bathrooms in the <strong>F-16</strong> cockpit. The Boeing's builder does override the bathroom's method since a <strong>Boeing-747</strong> has bathrooms for passengers.</p>
<p style="text-align: justify;">The process or algorithm required to construct the aircraft which in our case is the specific order in which the different parts are created is captured by another class called the <code>Director</code>. The director is in a sense <strong><i>directing</i></strong> the construction of the aircraft. The final product is still returned by the builders.</p>
<pre>
public class Director {

    AircraftBuilder aircraftBuilder;

    public Director(AircraftBuilder aircraftBuilder) {
        this.aircraftBuilder = aircraftBuilder;
    }

    public void construct(boolean isPassenger) {
        aircraftBuilder.buildCockpit();
        aircraftBuilder.buildEngine();
        aircraftBuilder.buildWings();

        if (isPassenger)
            aircraftBuilder.buildBathrooms();
    }
}
</pre>

<p style="text-align: justify;">Notice how we can pass in the builder of our choice, and vary the aircraft product (representation) to be either an F-16 or a Boeing-747. In our scenario, the builders return the same supertype however that may not be the case if the builders return products that aren't very similar.</p>
<p style="text-align: justify;">The client will consume the pattern like so:</p>
<pre>
public class Client {

    public void main() {

        F16Builder f16Builder = new F16Builder();
        Director director = new Director(f16Builder);
        director.construct(false);

        IAircraft f16 = f16Builder.getResult();
    }
}
</pre>
<p style="text-align: justify;">The <code>AircraftBuilder</code> interface hides how a given aircraft gets built. The client is unaware of the classes <code>F16Engine</code>, <code>F16Cockpit</code> and similar classes for <strong>Boeing-747</strong>.</p>

<h2>Skipping the Director</h2>
<p style="text-align: justify;">You may find the builder pattern being used without the <strong>director</strong>. The client can directly instantiate the builder and invoke the required methods to get a product for itself. This is a common antidote for <strong>telescoping constructors</strong>. Imagine a class with too many attributes but some attributes are to be set optionally. In such a case the builder can be invoked to only set the required attributes and create a product</p>

<h2>Other Examples</h2>
<ul>
<li>
<p style="text-align: justify;">The Java api exposes a <code>StringBuilder</code> class that doesn't really conform to the strict reading of the GoF builder pattern but can still be thought of as an example of it. Using the <code>StringBuilder</code> instance we can successively create a string by using the <code>append</code> method.</p>
</li>
<li>
<p style="text-align: justify;">Another hypothetical example could be creating documents of type pdf or html. Consider the snippet below:</p>
</li>
</ul>
<pre>
public IDocument construct(DocumentBuilder documentBuilder) {

    documentBuilder.addTitle("Why use design patterns");
    documentBuilder.addBody("blah blah blah... more blah blah blah");
    documentBuilder.addAuthor("C. H. Afzal");
    documentBuilder.addConclusion("Happy Coding!");

    // Return the document and depending on the concrete
    // implementation of the DocumentBuilder, we could return
    // either a pdf or html document.
    return documentBuilder.buildDocument();
}
</pre>
<p style="text-align: justify;">The above method can appear in a director or client code and different document types can be built by varying the concrete type of the DocumentBuilder passed into the method. We could have a <code>HtmlDocumentBuilder</code> and a <code>PdfDocumentBuilder</code> derive from the abstract class <code>DocumentBuilder</code>.</p>


<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">The builder pattern might seem similar to the abstract factory pattern but one difference is that the builder pattern creates an object step by step whereas the abstract factory pattern returns the object in one go.</p>
</li>
</ul>

    */}.toString().slice(14,-3)
    },

    {   /* GoF — Singleton */
        id : 2,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">Singleton pattern as the name suggests is used to create one and only instance of a class. There are several examples where only a single instance of a class should exist and the constraint be enforced. Caches, thread pools, registries are examples of objects that should only have a single instance.</p>
<p style="text-align: justify;">Its trivial to new-up an object of a class but how do we ensure that only one object ever gets created? The answer is to make the constructor private of the class we intend to define as singleton. That way, only the members of the class can access the private constructor and no one else.</p>
<p style="text-align: justify;">Formally the Singleton pattern is defined as <strong><i>ensuring that only a single instance of a class exists and a global point of access to it exists</i></strong>.</p>


<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of only a single entity</p>
<p style="text-align: center;"><img src="data/system_design/images/gof_creational/gof_creational_singleton_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">As an example, let's say we want to model the American President's official aircraft called <strong>Airforce One</strong> in our software. There can only be one instance of <code>AirforceOne</code> One and a singleton class is the best suited representation.</p>
<p style="text-align: justify;">Below is the code for our singleton class</p>
<pre>
public class AirforceOne {

    // The sole instance of the class
    private static AirforceOne onlyInstance;

    // Make the constructor private so its only accessible to
    // members of the class.
    private AirforceOne() {
    }

    public void fly() {
        System.out.println("Airforce one is flying...");
    }

    // Create a static method for object creation
    public static AirforceOne getInstance() {

        // Only instantiate the object when needed.
        if (onlyInstance == null) {
            onlyInstance = new AirforceOne();
        }

        return onlyInstance;
    }
}

public class Client {

    public void main() {
        AirforceOne airforceOne = AirforceOne.getInstance();
        airforceOne.fly();
    }
}
</pre>

<h2>Multithreading and Singleton</h2>
<p style="text-align: justify;">The above code will work hunky dory as long as the application is single threaded. As soon as multiple threads start using the class, there's a potential that multiple objects get created. Here's one example scenario:</p>
<ul>
<li>
<p style="text-align: justify;"><strong>Thread A</strong> calls the method <code>getInstance</code> and finds the <code>onlyInstance</code> to be null but before it can actually new-up the instance it gets context switched out.</p>
</li>
<li>
<p style="text-align: justify;">Now <strong>thread B</strong> comes along and calls the <code>getInstance</code> method and goes on to new-up the instance and returns the <code>AirforceOne</code> object.</p>
</li>
<li>
<p style="text-align: justify;">When <strong>thread A</strong> is scheduled again, is when the mischief begins. The thread was already past the if null condition check and will proceed to new-up another object of <code>AirforceOne</code> and assign it to <code>onlyInstance</code>. Now there are two different <code>AirforceOne</code> objects out in the wild, one with thread A and one with thread B.</p>
</li>
</ul>

<p style="text-align: justify;">There are two trivial ways to fix this race condition.</p>
<ul>
<li>
<p style="text-align: justify;">One is to add <code>synchronized</code> to the <code>getInstance()</code> method.</p>
<pre>synchronized public static AirforceOne getInstance()</pre>
</li>
<li>
<p style="text-align: justify;">The other is to undertake static initialization of the instance, which is guaranteed to be thread-safe.</p>
<pre>
// The sole instance of the class
private static AirforceOne onlyInstance = new AirforceOne();
</pre>
</li>
</ul>
<p style="text-align: justify;">The problem with the above approaches is that synchronization is expensive and static initialization creates the object even if it's not used in a particular run of the application. If the object creation is expensive then static intialization can cost us performance.</p>

<h2>Double-checked Locking</h2>
<p style="text-align: justify;">The next evolution of our singleton pattern would be to synchronize only when the object is created for the first time and if its already created, then we don't attempt to synchronize the accessing threads. This pattern has a name called <strong>double-checked locking</strong>.</p>
<pre>
public class AirforceOneWithDoubleCheckedLocking {

    // The sole instance of the class. Note its marked volatile
    private volatile static AirforceOneWithDoubleCheckedLocking onlyInstance;

    // Make the constructor private so its only accessible to
    // members of the class.
    private AirforceOneWithDoubleCheckedLocking() {
    }

    public void fly() {
        System.out.println("Airforce one is flying...");
    }

    // Create a static method for object creation
    synchronized public static AirforceOneWithDoubleCheckedLocking getInstance() {

        // Only instantiate the object when needed.
        if (onlyInstance == null) {
            // Note how we are synchronizing on the class object
            synchronized (AirforceOneWithDoubleCheckedLocking.class) {
                if (onlyInstance == null) {
                    onlyInstance = new AirforceOneWithDoubleCheckedLocking();
                }
            }
        }

        return onlyInstance;
    }
}
</pre>
<p style="text-align: justify;">The above solution marks the singleton instance <code>volatile</code> however the JVM volatile implementation for Java versions 1.4 will not work correctly for double checked locking and you'll need to use another way to create your singletons.</p>
<p style="text-align: justify;">The <strong>double checked locking</strong> is now considered an <strong>antipattern</strong> and its utility has largely passed away as JVM startup times have sped up over the years.</p>

<h2>Caveats</h2>
<ul>
<li style="text-align: justify;">Its possible to subclass a singleton class by making the constructor protected instead of private. It might be suitable under some circumstances. An approach taken in these scenarios is to create a <strong>register of singletons</strong> of the subclasses and the <code>getInstance</code> method can take in a parameter or use an environment variable to return the desired singleton. The registry maintains a mapping of string names to singleton objects.</li>
</ul>

    */}.toString().slice(14,-3)
    },

    {   /* GoF — Prototype */
        id : 3,
        "text" : function(){/*
<h2>What is it?</h2>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/gof_creational/TODO.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* GoF — Factory Method */
        id : 4,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/gof_creational/TODO.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* GoF — Abstract Factory */
        id : 5,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/gof_creational/TODO.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },

    {   /* Object Pool */
        id : 6,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">TODO</p>
<p style="text-align: center;"><img src="data/system_design/images/gof_creational/TODO.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },
];
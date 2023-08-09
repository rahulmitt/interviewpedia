var gof_creational_que = [

	{
		id : 5,
		question : "GoF — Abstract Factory",
		tags : ["GoF", "Creational Design Patterns", "Abstract Factory"]
	},

	{
		id : 1,
		question : "GoF — Builder",
		tags : ["GoF", "Creational Design Patterns", "Builder"]
	},

	{
		id : 4,
		question : "GoF — Factory Method",
		tags : ["GoF", "Creational Design Patterns", "Factory Method"]
	},

	{
		id : 3,
		question : "GoF — Prototype",
		tags : ["GoF", "Creational Design Patterns", "Prototype"]
	},

	{
		id : 2,
		question : "GoF — Singleton",
		tags : ["GoF", "Creational Design Patterns", "Singleton"]
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
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
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
<p style="text-align: justify;">Prototype pattern involves creating new objects by copying existing objects. The object whose copies are made is called the <strong>prototype</strong>. You can think of the prototype object as the seed object from which other objects get created but you might ask why would we want to create copies of objects, why not just create them anew? The motivations for prototype objects are as follows:</p>
<ul>
<li>
<p style="text-align: justify;">Sometimes creating new objects is more expensive than copying existing objects.</p>
</li>
<li>
<p style="text-align: justify;">Imagine a class will only be loaded at runtime and you can't access its constructor statically. The run-time environment creates an instance of each dynamically loaded class automatically and registers it with a <strong>prototype manager</strong>. The application can request objects from the prototype manager which in turn can return clones of the prototype.</p>
</li>
<li>
<p style="text-align: justify;">The number of classes in a system can be greatly reduced by varying the values of a cloned object from a prototypical instance.</p>
</li>
</ul>
<p style="text-align: justify;">Formally, the pattern is defined as <strong><i>specify the kind of objects to create using a prototypical instance as a model and making copies of the prototype to create new objects.</i></strong></p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Prototype</li>
<li style="text-align: justify;">Concrete Prototype</li>
<li style="text-align: justify;">Client</li>
</ul>

<p style="text-align: center;"><img src="data/system_design/images/gof_creational/gof_creational_prototype_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Let's take an example to better understand the prototype pattern. We'll take up our aircraft example. We created a class to represent the F-16. However, we also know that F-16 has a handful of <a href="https://en.wikipedia.org/wiki/General_Dynamics_F-16_Fighting_Falcon_variants" target="_blank">variants</a>. We can subclass the F16 class to represent each one of the variants but then we'll end up with several subclasses in our system. Furthermore, let's assume that the F16 variants only differ by their engine types. Then one possibility could be, we retain only a single F16 class to represent all the versions of the aircraft but we add a setter for the engine. That way, we can create a single F16 object as a prototype, clone it for the various versions and compose the cloned jet objects with the right engine type to represent the corresponding variant of the aircraft.</p>
<p style="text-align: justify;">First we create an <strong>interface</strong>:</p>
<pre>
public interface IAircraftPrototype {
    void fly();
    IAircraftPrototype clone();
    void setEngine(F16Engine f16Engine);
}
</pre>
<p style="text-align: justify;">The F-16 class would implement the interface like so:</p>
<pre>
public class F16 implements IAircraftPrototype {

    // default engine
    F16Engine f16Engine = new F16Engine();

    @Override
    public void fly() {
        System.out.println("F-16 flying...");
    }

    @Override
    public IAircraftPrototype clone() {
        // Deep clone self and return the product
        return new F16();
    }

    public void setEngine(F16Engine f16Engine) {
        this.f16Engine = f16Engine;
    }
}
</pre>
<p style="text-align: justify;">And the client can exercise the pattern like so:</p>
<pre>
public class Client {

    public void main() {

        IAircraftPrototype prototype = new F16();

        // Create F16-A
        IAircraftPrototype f16A = prototype.clone();
        f16A.setEngine(new F16AEngine());

        // Create F16-B
        IAircraftPrototype f16B = prototype.clone();
        f16B.setEngine(new F16BEngine());
    }
}
</pre>
<p style="text-align: justify;">Note that the interface <code>IAircraftPrototype</code> clone method returns an abstract type. The client doesn't know the concrete subclasses. The <code>Boeing747</code> class can just as well implement the same interface and be on its way to produce copies of prototypes. The client if passed in the prototype as <code>IAircraftPrototype</code> wouldn't know whether the clone's concrete subclass is an F16 or a Boeing747.</p>
<p style="text-align: justify;">The prototype pattern helps eliminate subclassing as the behavior of prototype objects can be varied by composing them with subparts.</p>

<h2>Shallow vs Deep Copy</h2>
<p style="text-align: justify;">The prototype pattern requires that the prototype class or interface implements the <code>clone()</code> method. Cloning can be either <strong>shallow</strong> or <strong>deep</strong>. Say our F-16 class has a member object of type <code>F16Engine</code>. In a shallow copy, the cloned object would point to the same F16Engine object as the prototype. The engine object would end up getting shared between the two. However, in a deep copy, the cloned object would get a copy of its own engine object as well as any of the nested objects within it. There will be no sharing of any fields, nested or otherwise between the prototype and the clone.</p>

<h2>Dynamic Loading</h2>
<p style="text-align: justify;">The prototype pattern also helps with dynamic loading of classes. Language frameworks which allow dynamic loading will create an instance of the loaded class and register it in a managing entity. The application can at runtime request the object of the loaded class from the manager. Note, the application can't access the class's constructor statically.</p>

<h2>Caveats</h2>
<ul>
<li style="text-align: justify;">Implementing the <code>clone</code> method can be challenging because of circular references.</li>
</ul>

    */}.toString().slice(14,-3)
    },

    {   /* GoF — Factory Method */
        id : 4,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">A factory produces goods, and a software factory produces objects. Usually, object creation in Java takes place like so:</p>
<pre>SomeClass someClassObject = new SomeClass();</pre>
<p style="text-align: justify;">The problem with the above approach is that the code using the <code>SomeClass</code>'s object, suddenly now becomes dependent on the concrete implementation of <code>SomeClass</code>. There's nothing wrong with using new to create objects but it comes with the baggage of tightly coupling our code to the concrete implementation class, which is a violation of <strong><i>code to an interface and not to an implementation.</i></strong></p>
<p style="text-align: justify;">Formally, the factory method is defined as <strong><i>providing an interface for object creation but delegating the actual instantiation of objects to subclasses.</i></strong></p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Product</li>
<li style="text-align: justify;">Concrete Product</li>
<li style="text-align: justify;">Creator</li>
<li style="text-align: justify;">Concrete Creator</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_creational/gof_creational_factory_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Continuing with our aircraft example scenario, let's assume we are trying to model the F-16 fighter jet. The client code needs to construct the engine object for the fighter jet and fly it. The naive implementation for the class would be something like below:</p>

<p style="text-align: justify;">TODO</p>
<pre>
public class F16 {

    F16Engine engine;
    F16Cockpit cockpit;

    protected void makeF16() {
        engine = new F16Engine();
        cockpit = new F16Cockpit();
    }

    public void fly() {
        makeF16();
        System.out.println("F16 with bad design flying");
    }
}

public class Client {

    public void main() {

        // We instantiate from a concrete class, thus tying
        // ourselves to it
        F16 f16 = new F16();
        f16.fly();
    }
}
</pre>

<p style="text-align: justify;">In the above code, we have committed ourselves to using a concrete implementation of the <code>F16</code> class. What if the company comes up with newer versions of the aircraft and we are required to represent them in the program? That would make us change the client code where we new-up the F16 instance. One way out, is to encapsulate the object creation in another object that is solely responsible for new-ing up the requested variants of the F-16. For starters, let's say we want to represent the <a href="https://en.wikipedia.org/wiki/General_Dynamics_F-16_Fighting_Falcon#Variants" target="_blank">A</a> and <a href="https://en.wikipedia.org/wiki/General_Dynamics_F-16_Fighting_Falcon#Variants" target="_blank">B</a> variants of F16, then the code would look like:</p>
<pre>
public class F16SimpleFactory {

    public F16 makeF16(String variant) {

        switch (variant) {
        case "A":
            return new F16A();
        case "B":
            return new F16B();
        default:
            return new F16();
        }
    }
}
</pre>

<p style="text-align: justify;">The above is an example of a <strong>Simple Factory</strong> and isn't really a pattern but a common programming idiom. You could also <code>mark</code> the make method static to skip the factory object creation step. However, since static methods can't be overridden in subclasses because they are unique to a class, we won't be able to subclass the <strong>Static Factory</strong>. Remember simple and static factories aren't the same as the factory method pattern.</p>
<p style="text-align: justify;">However, if we want to keep the creation of the F16 object parts within the same class and still be able to introduce new F16 variants as they come along, we could subclass F16 and delegate the creation of the right F16 variant object to the subclass handling that variant. This is exactly the factory method pattern! The <strong>method</strong> here is the <codee>makeF16()</code> which we'll make behave like a factory that produces the appropriate F16 variants. Proceeding forward we introduce two subclasses like so</p>
<pre>
public class F16 {

    IEngine engine;
    ICockpit cockpit;

    protected F16 makeF16() {
        engine = new F16Engine();
        cockpit = new F16Cockpit();
        return this;
    }

    public void taxi() {
        System.out.println("F16 is taxing on the runway !");
    }

    public void fly() {
        // Note here carefully, the superclass F16 doesn't know
        // what type of F-16 variant it was returned.
        F16 f16 = makeF16();
        f16.taxi();
        System.out.println("F16 is in the air !");
    }
}

public class F16A extends F16 {

    @Override
    public F16 makeF16() {
        super.makeF16();
        engine = new F16AEngine();
        return this;
    }
}

public class F16B extends F16 {

    @Override
    public F16 makeF16() {
        super.makeF16();
        engine = new F16BEngine();
        return this;
    }
}
</pre>

<p style="text-align: justify;">We used inheritance to subclass and specialize the engine object. <strong>A factory method may or may not provide a default or generic implementation but lets subclasses specialize or modify the product by overriding the create/make methods. In our example the variant models only have a different engine but the same cockpit.</strong> The client code can now use the newer models like so:</p>
<pre>
public class Client {
    public void main() {
        Collection<F16> myAirForce = new ArrayList<F16>();
        F16 f16A = new F16A();
        F16 f16B = new F16B();
        myAirForce.add(f16A);
        myAirForce.add(f16B);

        for (F16 f16 : myAirForce) {
            f16.fly();
        }
    }
}
</pre>
<p style="text-align: justify;">Note that the factory method pattern, returns an abstract type, be it a Java interface or a Java abstract class. The superclass, in our case F16 doesn't know what variant of the F16 it was returned from the <code>makeF16()</code> method. The general setup is that the superclass has the implementation for all the methods other than the creation methods. A create method is either abstract or comes with a default implementation and in turn is invoked by the other methods of the superclass. The creation of the right objects is the responsibility of the subclasses.</p>

<h2>Differences with Simple/Static Factory</h2>
<p style="text-align: justify;">The factory method pattern might seem very similar to the simple or static factory, however, the primary difference is that simple factories can't produce varying products through inheritance as a factory method pattern can.</p>

<h2>Caveats</h2>
<ul>
<li style="text-align: justify;">The pattern can result in too many subclasses with very minor differences.</li>
<li style="text-align: justify;">If the subclass extends the functionality, then the superclass can't use it unless it <i>downcasts</i> it to the concrete type. The downcast may fail at runtime.</li>
</ul>

    */}.toString().slice(14,-3)
    },

    {   /* GoF — Abstract Factory */
        id : 5,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">In the previous lesson, we learned the factory method pattern. We saw how we were able to model the variants of the F-16 using the factory method. But there are numerous airplanes other than F-16 that we'll need to represent. Say the client buys a Boeing-747 for the CEO to travel and now wants your software to provide support for this new type of aircraft.</p>
<p style="text-align: justify;">The abstract factory pattern solves the problem of creating families of related products. For instance, F-16 needs an engine, a cockpit, and wings. The Boeing-747 would require the same set of parts but they would be specific to Boeing. Any airplane would require these three related parts but the parts will be plane and vendor specific. Can you see a pattern emerge here? We need a framework for creating the related parts for each airplane, a family of parts for the F-16, a family of parts for the Boeing-747 so on and so forth.</p>
<p style="text-align: justify;">Formally, the abstract factory pattern is defined as <strong><i>defining an interface to create families of related or dependent objects without specifying their concrete classes.</i></strong></p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Abstract Factory</li>
<li style="text-align: justify;">Concrete Factory</li>
<li style="text-align: justify;">Abstract Product</li>
<li style="text-align: justify;">Concrete Product</li>
<li style="text-align: justify;">Client</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_creational/gof_creational_abstract_factory_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">An abstract factory can be thought of as a super factor or a factory of factories. The pattern achieves the creation of a family of products without revealing concrete classes to the client. Let's consider an example. Say, you are creating a simulation software for the aviation industry and need to represent different aircraft as objects. But before you represent an aircraft, you also need to represent the different pieces of an aircraft as objects. For now let's pick three: the cockpit, the wings, and the engine. Now say the first aircraft you want to represent is the mighty F-16. You'll probably write three classes one for each piece specific to the F-16. In your code you'll likely consume the just created three classes as follows:</p>
<pre>
public void main() {
    F16Cockpit f16Cockpit = new F16Cockpit();
    F16Engine f16Engine = new F16Engine();
    F16Wings f16Wings = new F16Wings();

    List<F16Engine> engines = new ArrayList<>();
    engines.add(f16Engine);
    for (F16Engine engine : engines) {
        engine.start();
    }
}
</pre>

<p style="text-align: justify;">This innocuous looking snippet can cause severe headaches down the road if your simulation software takes off and you need to expand it to other aircraft. Below is a list of what is wrong with the above snippet:</p>
<ul>
<li>
<p style="text-align: justify;">The concrete classes for the three parts have been directly exposed to the consumer.</p>
</li>
<li>
<p style="text-align: justify;">F-16 has several variants with different engines and say in future if you want to return engine object matching to the variant, you'll need to subclass <code>F16Engine</code> class and that would necessitate a change in the consumer snippet too.</p>
</li>
<li>
<p style="text-align: justify;">The List in the code snippet is parametrized with a concrete class, in future if you add another aircraft engine object then the new engine can't be added to the list, even though engines for all aircraft are somewhat similar.</p>
</li>
</ul>

<p style="text-align: justify;">We'll fix these issues one by one and see how the abstract factory pattern would emerge.</p>

<h2>Code to an interface not to an implementation</h2>
<p style="text-align: justify;">One of the fundamental principles of good object orientated design is to hide the concrete classes and expose interfaces to clients. An object responds to a set of requests, these requests can be captured by an interface which the object's class implements. The client should know what requests an object responds to rather than the implementation.</p>
<p style="text-align: justify;">In our example, we can create an interface <code>IEngine</code>, which exposes the method <code>start()</code>. The F16Engine class would then change like so:</p>

<pre>
public interface IEngine {
    void start();
}
</pre>

<pre>
public class F16Engine implements IEngine {

    @Override
    public void start() {
        System.out.println("F16 engine on");
    }
}
</pre>

<p style="text-align: justify;">With the above change see how the corresponding consumer code changes:</p>

<pre>
public void main() {
    IEngine f16Engine = new F16Engine();
    List<IEngine> engines = new ArrayList<>();
    engines.add(f16Engine);
    for (IEngine engine : engines) {
        engine.start();
    }
}
</pre>

<p style="text-align: justify;">Suddenly the consumer code is free of the implementation details of what class implements the F-16 engine and works with an interface. However, we would still like to hide the <code>new F16Engine()</code> part of the code. We don't want the consumer to know what class we are instantiating. This is discussed next.</p>

<h2>Creating a factory</h2>
<p style="text-align: justify;">Instead of new-ing up objects in client code, we'll have a class responsible for manufacturing the requested objects and returning them to the client. We'll call this class <code>F16Factory</code> since it can create the various parts of the F16 aircraft and deliver them to the requesting client. The class would take the following shape.</p>
<pre>
public class F16Factory {

    public IEngine createEngine() {
        return new F16Engine();
    }

    public IWings createWings() {
        return new F16Wings();
    }

    public ICockpit createCockpit() {
        return new F16Cockpit();
    }
}
</pre>

<p style="text-align: justify;">Suppose we pass in the <code>F16Factory</code> object in the constructor to the client code and it would now create objects like so:</p>

<pre>
public void main(F16Factory f16Factory) {
    IEngine f16Engine = f16Factory.createEngine();
    List<IEngine> engines = new ArrayList<>();
    engines.add(f16Engine);
    for (IEngine engine : engines) {
        engine.start();
    }
}
</pre>

<p style="text-align: justify;">Note how this setup allows us the freedom to change the concrete class representing the <strong>F16Engine</strong> as long as it commits to the <code>IEngine</code> interface. We can rename, enhance or modify our class without causing a breaking change in the client. Also note that by just differing the factory class passed into the client constructor, we are able to provide the client with the same parts for a completely new aircraft. This is discussed next.</p>

<h2>Factory of Factories</h2>
<p style="text-align: justify;">Wouldn't it be great if we could use the same client snippet for other aircraft such as <a href="https://en.wikipedia.org/wiki/Boeing_747" target="_blank">Boeing747</a> or a Russian <a href="https://en.wikipedia.org/wiki/Mikoyan_MiG-29" target="_blank">MiG-29</a>? If we could have all the factories being passed into the client agree to implement the <code>createEngine()</code> method, then the client code will keep working for all kinds of aircraft factories. But all the factories must commit to a common interface whose methods they'll implement and this common interface will be the <strong>abstract factory</strong>.</p>

<h2>Implementation</h2>
<p style="text-align: justify;">Let's start with an interface that would define the methods the factories for different aircraft would need to implement. The client code is written against the abstract factory but composed at runtime with a concrete factory.</p>
<pre>
public interface IAircraftFactory {
    IEngine createEngine();
    IWings createWings();
    ICockpit createCockpit();
}
</pre>
<p style="text-align: justify;">Note that we mean a Java <strong>abstract class</strong> or a Java <strong>interface</strong> when referring to "interface". In this instance, we could have used an abstract class if there were a default implementation for any of the products. The create methods don't return concrete products rather interfaces to decouple the factory consumers from the concrete implementation of parts.</p>
<p style="text-align: justify;">The formal definition of the abstract factory pattern says <strong><i>abstract factory pattern defines an interface for creating families of related products without specifying the concrete classes</i></strong>. Here the <code>IAircraftFactory</code> is <i>that</i> interface in the formal definition and note how its create methods are not returning concrete parts but rather interfaces that'll be implemented by the concrete parts' classes.</p>
<p style="text-align: justify;">Next let's define our factories for the two aircraft.</p>
<pre>
public class F16Factory implements IAircraftFactory {

    @Override
    public IEngine createEngine() {
        return new F16Engine();
    }

    @Override
    public IWings createWings() {
        return new F16Wings();
    }

    @Override
    public ICockpit createCockpit() {
        return new F16Cockpit();
    }
}
</pre>

<pre>
public class Boeing747Factory implements IAircraftFactory {

    @Override
    public IEngine createEngine() {
        return new Boeing747Engine();
    }

    @Override
    public IWings createWings() {
        return new Boeing747Wings();
    }

    @Override
    public ICockpit createCockpit() {
        return new Boeing747Cockpit();
    }
}
</pre>
<p style="text-align: justify;">The concrete factories will be responsible for creating F-16 or Boeing specific engine, cockpit and wings. Each part has a corresponding product interface that we don't list for brevity's sake. The interfaces representing the parts would be:</p>
<ul>
<li style="text-align: justify;"><code>IEngine</code></li>
<li style="text-align: justify;"><code>ICockpit</code></li>
<li style="text-align: justify;"><code>IWings</code></li>
</ul>

<p style="text-align: justify;">All the <strong>create</strong> methods are actually factory methods that have been overridden. Indeed, the factory method pattern is utilized when implementing the abstract factory pattern. For the sake of brevity, we have skipped listing the concrete classes for engine, wings, and cockpit.</p>
<p style="text-align: justify;">In the previous lesson, we created a class for F-16 which included a public method <code>fly()</code>. This method internally invoked the <code>makeF16()</code> method and after the aircraft was manufactured, it invoked the <code>taxi()</code> method before printing a fly statement. In our scenario, all aircrafts are expected to follow the same pattern. They first get manufactured, then taxi on the runway and then fly away. We can thus create a class for an aircraft that does these three tasks. Note, how we aren't creating separate classes to represent the two aircraft i.e. the <strong>F-16</strong> and <strong>Boeing-747</strong> rather a single <code>Aircraft</code> class that can represent both.</p>
<pre>
// Incomplete skeleton of the class.
public class Aircraft {

    IEngine engine;
    ICockpit cockpit;
    IWings wings;

    protected Aircraft makeAircraft() {
        //implementation goes here
    }

    private void taxi() {
        System.out.println("Taxing on runway");
    }

    public void fly() {
        Aircraft aircraft = makeAircraft();
        aircraft.taxi();
        System.out.println("Flying");
    }
}
</pre>
<p style="text-align: justify;">For now we'll keep the <code>makeAircraft</code> method empty. Let's first see how a client will request <strong>F-16</strong> and <strong>Boeing-747</strong> objects.</p>
<pre>
public class Client {
public void main() {

    // Instantiate a concrete factory for F-16
    F16Factory f16Factory = new F16Factory();

    // Instantiate a concrete factory for Boeing-747
    Boeing747Factory boeing747Factory = new Boeing747Factory();

    // Lets create a list of all our airplanes
    Collection<Aircraft> myPlanes = new ArrayList<>();

    // Create a new F-16 by passing in the f16 factory
    myPlanes.add(new Aircraft(f16Factory));

    // Create a new Boeing-747 by passing in the boeing factory
    myPlanes.add(new Aircraft(boeing747Factory));

    // Fly all your planes
    for (Aircraft aircraft : myPlanes) {
        aircraft.fly();
    }

}
}
</pre>
<p style="text-align: justify;">We'll need to add a <strong>constructor</strong> to our <code>Aircraft</code> class, which will store the passed-in factory object and create the aircraft parts using the factory. <strong>Just by composing the aircraft object with a different factory we are able to get a different aircraft</strong>. The complete version of the aircraft class would look like below:</p>
<pre>
public class Aircraft {

    IEngine engine;
    ICockpit cockpit;
    IWings wings;
    IAircraftFactory factory;

    public Aircraft(IAircraftFactory factory) {
        this.factory = factory;
    }

    protected Aircraft makeAircraft() {
        engine = factory.createEngine();
        cockpit = factory.createCockpit();
        wings = factory.createWings();
        return this;
    }

    private void taxi() {
        System.out.println("Taxing on runway");
    }

    public void fly() {
        Aircraft aircraft = makeAircraft();
        aircraft.taxi();
        System.out.println("Flying");
    }
}
</pre>
<p style="text-align: justify;">The client just needs to instantiate the right factory and pass it in. The consumer or client of the factory is the <code>Aircraft</code> class. We could have created an interface <code>IAircraft</code> to represent all the aircraft that the class <code>Aircraft</code> in turn would implement but for our limited example it's not necessary.</p>
<p style="text-align: justify;">The resulting code is easily extensible and flexible.</p>
<p style="text-align: justify;">To tie our current example with the example discussed in the factory method pattern lesson, we have the option of either subclassing the <code>F16Factory</code> further to create factories for the <strong>A</strong> and <strong>B</strong> variants of <strong>F-16</strong>. We could also parametrize the existing <code>F16Factory</code> factory to take in an enum specifying the variant model and accordingly return the right part in a switch statement.</p>

<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">It might appear to the naive reader that the factory method pattern and the abstract factory pattern are similar. The difference between the two lies in their motivations. The factory method pattern is usually responsible for creating a single product whereas an abstract factory pattern creates entire families of related products. Furthermore, in the factory method pattern, we use inheritance to create more specialized products whereas, in an abstract factory pattern, we practice object composition by passing in factories that are consumed to create the desired products.</p>
</li>
<li>
<p style="text-align: justify;">In our aircraft example, we can add a new aircraft simply by creating a concrete factory for it. However, note that if a helicopter is added to the fleet and requires a part that an aircraft doesn't have, then we'll need to extend the <code>IAircraftFactory</code> interface with another create method for the part required only by the helicopter. This will cascade the change to existing factories that'll need to return null since the new component isn't part of the jets.</p>
</li>
<li>
<p style="text-align: justify;">Concrete factories can be best represented as a singleton object</p>
</li>
</ul>


    */}.toString().slice(14,-3)
    },

    {   /* Object Pool */
        id : 6,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">TODO</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_creational/TODO.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },
];
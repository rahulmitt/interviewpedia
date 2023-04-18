var gof_structural_que = [
	{
		id : 1,
		question : "GoF — Adapter",
		tags : ["GoF", "Structural Design Patterns", "Adapter"]
	},

	{
		id : 2,
		question : "GoF — Bridge",
		tags : ["GoF", "Structural Design Patterns", "Bridge"]
	},

	{
		id : 3,
		question : "GoF — Composite",
		tags : ["GoF", "Structural Design Patterns", "Composite"]
	},

	{
		id : 4,
		question : "GoF — Decorator",
		tags : ["GoF", "Structural Design Patterns", "Decorator"]
	},

	{
		id : 5,
		question : "GoF — Facade",
		tags : ["GoF", "Structural Design Patterns", "Facade"]
	},

	{
		id : 6,
		question : "GoF — Flyweight",
		tags : ["GoF", "Structural Design Patterns", "Flyweight"]
	},

	{
		id : 7,
		question : "GoF — Proxy",
		tags : ["GoF", "Structural Design Patterns", "Proxy"]
	},
];

var gof_structural_ans = [
    {   /* Adapter */
        id : 1,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">When two heads of states who don't speak a common language meet, usually a language interpreter sits between the two and translates the conversation, thus enabling communication. The Adapter pattern is similar in that it sits between two incompatible classes that otherwise can't work with eachother and lets them work together. Another example to consider is when one buys electronics from USA and tries to use them in India. The two countries have different power voltages being distributed to consumers and using an electronic appliance from one country in another requires a physical adapter which steps up or down the voltage appropriately. The concept of the software adapter pattern is similar.</p>
<p style="text-align: justify;">Formally, the adapter pattern is defined as <strong><i>allowing incompatible classes to work together by converting the interface of one class into another expected by the clients</i></strong></p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Target</li>
<li style="text-align: justify;">Client</li>
<li style="text-align: justify;">Adaptee</li>
<li style="text-align: justify;">Adapter</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_structural/gof_structural_adapter_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Let's take our aircraft example again. Your software only deals with fancy jets but suddenly you are required to <strong>adapt</strong> your software to cater to a local hot air balloon company. Rewriting your software from scratch is not feasible. To complicate matters the balloon company already provides you with classes that represent hot air balloons which are incompatible with your <code>IAircraft</code> interface, which you use to represent modern aircraft. We'll use the adapter pattern to make the hot air balloon classes work with our existing infrastructure for aircraft. Let's see what the balloon class looks like:</p>
<pre>
public class HotAirBalloon {

    String gasUsed = "Helium";

    void fly(String gasUsed) {
        // Take-off sequence based on the kind of feul
        // Followed by more code.
    }

    // Function returns the gas used by the balloon for flight
    String inflateWithGas() {
        return gasUsed;
    }
}
</pre>
<p style="text-align: justify;">Unfortunately, the <code>fly</code> method for the <code>HotAirBalloon</code> class is parametrized and can't work with the <code>IAircraft</code> interface. We'll need an adapter here that can make the <code>HotAirBalloon</code> class work with the <code>IAircraft</code> interface. The <strong>adapter</strong> in pattern-speak should implement the client interface, which is the <code>IAircraft</code> interface.</p>
<pre>
public interface IAircraft {
    void fly();
}
</pre>

<p style="text-align: justify;">The adapter implementation would be the following:</p>
<pre>
public class Adapter implements IAircraft {

    HotAirBalloon hotAirBalloon;

    public Adapter(HotAirBalloon hotAirBalloon) {
        this.hotAirBalloon = hotAirBalloon;
    }

    @Override
    public void fly() {
        String feulUsed = hotAirBalloon.inflateWithGas();
        hotAirBalloon.fly(feulUsed);
    }
}
</pre>
<p style="text-align: justify;">The important things to note about the adapter are:</p>
<ul>
<li>
<p style="text-align: justify;">The adapter is <strong>composed</strong> with the <strong>Adaptee</strong> object, which in our case is the <code>HotAirBalloon</code> object.</p>
</li>
<li>
<p style="text-align: justify;">The adapter implements the interface the client knows about and consumes. In this case, it is the <code>IAircraft</code>.</p>
</li>
</ul>

<p style="text-align: justify;">Let's see the client code now</p>
<pre>
public void main() {
    HotAirBalloon hotAirBalloon = new HotAirBalloon();
    Adapter hotAirBalloonAdapter = new Adapter(hotAirBalloon);

    hotAirBalloonAdapter.fly();
}
</pre>
<p style="text-align: justify;">Note the client is manipulating objects that implement the <code>IAircraft</code> interface. It doesn't know anything about the <code>HotAirBalloon</code> class and the adapter is responsible for masking the gory details for the client. The client can now make a hot air balloon fly even though it deviates from the <code>fly()</code> method enforced by the <code>IAircraft</code> interface.</p>

<h2>Object Adapter</h2>
<p style="text-align: justify;">The hot air balloon example that we just discussed is really an <strong>object adapter</strong> example. We <strong>composed</strong> the adapter with the adaptee object to make incompatible classes work together. In the case of Java, we can only practice object adaptation for reasons you'll learn shortly.</p>
<p style="text-align: justify;">Using objects for adaptation gains us the usual benefits of object composition, The design becomes flexible and the adapter can stand in place of the adaptee or any of its subclassed-objects.</p>

<h2>Class Adapter</h2>
<p style="text-align: justify;">The complementary concept to object adapter is the <strong>class adapter</strong>. The class adapter works via multiple inheritance which isn't supported in Java. However, the idea is that the adapter extends both, the interface in use by the client, as well as, the adaptee class. Adaptation works via inheritance instead of composition.</p>
<p style="text-align: justify;">One benefit of the adaptation via inheritance is that behavior can be overridden or new functionality can be added in the adapter.</p>

    */}.toString().slice(14,-3)
    },

    {   /* Bridge */
        id : 2,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">A physical bridge provides connectivity between two points. The bridge pattern describes how to pull apart two software layers fused together in a single class hierarchy and change them into parallel class hierarchies connected by a bridge.</p>
<p style="text-align: justify;">The bridge pattern can be applied to scenarios where the class and what it does changes often. Think of it as two layers of abstraction. The class itself becomes one layer and what it does i.e. the implementation becomes another layer. This setup allows us to extend the two layers independently of each other. In Java, both the layers would be represented by two separate class hierarchies. The bridge sits between these two class hierarchies, allowing the class abstraction to configure itself with the implementation abstraction.</p>
<p style="text-align: justify;">Formally, <strong><i>the bridge pattern lets you vary the abstraction independently of the implementation, thus decoupling the two in the process</i></strong>. However, the <strong>abstraction</strong> and the <strong>implementation</strong> in the definition don't mean Java's abstract class/interface and concrete classes respectively.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Abstraction</li>
<li style="text-align: justify;">Refined Abstraction</li>
<li style="text-align: justify;">Implementor</li>
<li style="text-align: justify;">Concrete Implementor</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_structural/gof_structural_bridge_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Suppose you are writing software for Toyota Motors and need to represent the most sold car in the world - the Toyota Corolla. We'll use an abstract class <code>Corolla</code> to represent the car. The concrete classes would represent each of the different models of the car. So far so good. However, the same model could be built to different standards for different locales. For instance, the North American model may have different safety requirements than an Asian model. The same model could be left or right handed depending on which country it is being shipped to. Corolla has several models and the models have different names in different countries. In the US, the different models include L, LE, XLE etc. For our purposes we'll consider only one model L.</p>
<p style="text-align: justify;">Let's see how the class hierarchy would look like.</p>
<p style="text-align: center;"><img src="data/system_design/images/gof_structural/gof_structural_bridge_class_diagram1.png" alt="" width="50%"/></p>
<p style="text-align: justify;">We can divide the above class structure into two hierarchies. One that just represents the models of the car and another that represents the location-specific variations for each model of the car. After applying the pattern the class diagram would look like below:</p>
<p style="text-align: center;"><img src="data/system_design/images/gof_structural/gof_structural_bridge_class_diagram2.png" alt="" width="100%"/></p>
<p style="text-align: justify;">So you can see there's one hierarchy of class the <code>Corolla</code> which would have subclasses for each of the models, however, the actual car produced by the factory may be different from another car of the same model that is destined for a different country. The <strong>implementation</strong> of the car would make up a separate class hierarchy <code>CorollaImpl</code> which will have implementation subclasses for each of the Corolla models and have information such as safety equipment installed, whether the car is left or right handed drive etc.</p>
<p style="text-align: justify;">You would have guessed by now that the class <code>Corolla</code> (the abstraction) would hold a reference to an object of the class <code>CorollaImpl</code>(the implementation) and invoke method calls on the implementation object. We are using object composition to add location dependent behavior to each model of the car.</p>
<p style="text-align: justify;">Let's examine the first class hierarchy that represents the car Corolla and acts as the abstraction.</p>
<pre>
public abstract class AbstractCorolla {

    protected AbstractCorollaImpl corollaImpl;

    public AbstractlCorolla(AbstractCorollaImpl corollaImpl) {
        this.corollaImpl = corollaImpl;
    }

    abstract void listSafetyEquipment();

    abstract boolean isCarRightHanded();
}
</pre>
<p style="text-align: justify;">The <code>AbstractCorolla</code> holds a reference to the implementation class <code>AbstractCorollaImpl</code> object. The abstract class <code>AbstractCorollaImpl</code> forms a parallel class hierarchy and is defined below.</p>
<pre>
public abstract class AbstractCorollaImpl {
    abstract void listSafetyEquipment();
    abstract boolean isCarRightHanded();
}
</pre>
<p style="text-align: justify;">The class that represents the model L is shown below:</p>
<pre>
public class Corolla_L extends AbstractCorolla {

    public Corolla_L(AbstractCorollaImpl corollaImpl) {
        super(corollaImpl);
    }

    @Override
    void listSafetyEquipment() {
        corollaImpl.listSafetyEquipment();

    }

    @Override
    boolean isCarRightHanded() {
        return corollaImpl.isCarRightHanded();
    }
}
</pre>
<p style="text-align: justify;">We'll have corresponding <strong>implementation</strong> classes for the L model. They are given below:</p>
<pre>
public class Corolla_L_Impl_AsiaPacific extends AbstractCorollaImpl {

    @Override
    void listSafetyEquipment() {
        System.out.println("Not so safe.");
    }

    @Override
    boolean isCarRightHanded() {
        return false;
    }
}
</pre>

<pre>
public class Corolla_L_Impl_NorthAmerica extends AbstractCorollaImpl {

    @Override
    void listSafetyEquipment() {
        System.out.println("High safety standards.");
    }

    @Override
    boolean isCarRightHanded() {
        return true;
    }
}
</pre>
<p style="text-align: justify;">The client can use the classes like so:</p>
<pre>
public class Client {

    public void main() {

        AbstractCorolla myCorolla = new Corolla_L(new Corolla_L_Impl_AsiaPacific());
        System.out.println(myCorolla.isCarRightHanded());

        myCorolla.setCorollaImpl(new Corolla_L_Impl_NorthAmerica());
        System.out.println(myCorolla.isCarRightHanded());
    }
}
</pre>
<p style="text-align: justify;">Note how the client can switch out the implementation class object at runtime and make the model behave for an entirely different location. Using the bridge pattern we have avoided permanent binding of models and their intended locations of operation. The client can continue to work with the objects of the <strong>abstraction layer</strong> without noticing any changes to <strong>implementation layer</strong> classes. New safety rules or regulations would only affect the implementation layer classes.</p>

<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">The bridge pattern may be confused with the adapter pattern but one difference between the two is that the adapter pattern is usually applied after a system is designed whereas the bridge pattern is intentionally applied as part of the design process to decouple the two layers.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Composite */
        id : 3,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">Composite literally means <strong>made up of various elements or parts</strong>. The pattern allows you to treat the whole and the individual parts as one. The closest analogy you can imagine is a tree. The tree is a <strong>recursive data-structure</strong> where each part itself is a sub-tree except for the leaf nodes. The root is the top-level composite and its children are either composites themselves or just leaf nodes. The leaf itself can be thought of as a tree with just a single node.</p>
<p style="text-align: justify;">Formally, the composite pattern is defined as <strong><i>composing objects into tree structures to represent part-whole hierarchies, thus letting clients uniformly treat individual objects and composition of objects</i></strong>.</p>
<p style="text-align: justify;">The pattern allows the clients to ignore the differences between the whole and the part.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Component</li>
<li style="text-align: justify;">Leaf</li>
<li style="text-align: justify;">Composite</li>
<li style="text-align: justify;">Client</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_structural/gof_structural_composite_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Assume, that we now want to represent all the aircraft in the combined air forces of the <strong>NATO</strong> alliance. An air force is primarily made up of several aircraft but it can also have sub-air forces. For instance, the US has the <strong>1st Air Force</strong>, <strong>2nd Air Force</strong> so on and so forth. Our <strong>NATO</strong> alliance can consist of air forces from multiple countries including individual planes.</p>
<p style="text-align: justify;">If we want to treat the <strong>composite</strong> and <strong>each part</strong> as the same, we would need both the <strong>part</strong> (the aircraft) and the <strong>whole</strong> (the airforce) to implement the same <strong>interface</strong>. In our scenario we'll create three classes:</p>
<ul>
<li style="text-align: justify;"><code>Airforce</code></li>
<li style="text-align: justify;"><code>F16</code></li>
<li style="text-align: justify;"><code>C130Hercules</code></li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_structural/gof_structural_composite_tree_depiction.png" alt="" width="50%"/></p>
<p style="text-align: justify;">The class <code>Airforce</code> will represent the <strong>composite</strong> and the other two classes the <strong>part</strong>. Furthermore, we'll create an interface <code>IAlliancePart</code> that will allow us to treat the objects from each of the three classes as one type.</p>
<p style="text-align: justify;">Each aircraft requires some number of pilots to operate and maybe peripheral staff for maintainance. The classes would implement the funtionality to return the number of personnel required for the aircraft to operate. The <code>Airforce</code> class should return the total number of personnel required to operate all the aircraft composed of the airforce.</p>
<pre>
public interface IAlliancePart {
    // Any implementing class should return the the number of personnel or staff
    // required to operate the aircraft or the airfoce
    int getPersonnel();
}
</pre>
<p style="text-align: justify;">The classes implementing the above interface appear below:</p>
<pre>
public class F16 implements IAircraft, IAlliancePart {

    @Override
    public int getPersonnel() {
        // We need 2 pilots for F-16
        return 2;
    }
}
</pre>

<pre>
public class C130Hercules implements IAircraft, IAlliancePart {

    @Override
    public int getPersonnel() {
        // This cargo plane, needs 5 people
        return 5;
    }
}
</pre>
<p style="text-align: justify;">The above two classes act as parts, now we'll write the composite class <code>Airforce</code>.</p>
<pre>
public class Airforce implements IAlliancePart {

    ArrayList<IAlliancePart> planes = new ArrayList<>();

    public void add(IAlliancePart alliancePart) {
        planes.add(alliancePart);
    }

    @Override
    public int getPersonnel() {
        // We iterator over the entire air force which can contain leaf nodes (planes) or other composites
        // (air forces). This iteration is an example of an internal iterator.
        Iterator<IAlliancePart> itr = planes.iterator();
        int staff = 0;

        while (itr.hasNext()) {
            staff += itr.next().getPersonnel();
        }

        return staff;
    }
}
</pre>
<p style="text-align: justify;">Pay attention to the <code>getPersonnel</code> method for the <code>Airforce</code> class. It is an example of an <strong>internal iterator</strong>. It is called internal because the <code>Airforce</code> assumes the responsibility of iterating over itself and its subparts. The iteration can also be extracted out into a separate class and would make an example of an <strong>external iterator</strong>.</p>
<p style="text-align: justify;">The internal iterator will recursively call the <code>getPersonnel</code> method on the nested air force objects. The leaves would actually be the planes and will return a number. The personnel count for the root air force object will be the sum of all the people required to operate all the planes.</p>
<p style="text-align: justify;">The client can invoke the <code>getPersonnel</code> method on the root object and get a total count. Note how transparency is created by treating the composite and the part as same. The client code or the internal iterator code doesn't need conditional if-else statements to check for the type of the object and then call the appropriate method on it. The client code appears below:</p>
<pre>
public class Client {
 
    public void main() {
 
        Airforce natoAlliance = new Airforce();
        
        // The nested methods aren't listed for brevity's sake
        natoAlliance.add(createCanadaAirForce());
        natoAlliance.add(createUSAAirForce());
 
        F16 frenchF16 = new F16();
        C130Hercules germanCargo = new C130Hercules();
 
        natoAlliance.add(frenchF16);
        natoAlliance.add(germanCargo);
 
        System.out.println(natoAlliance.getPersonnel());
    }
}
</pre>
<p style="text-align: justify;">Note ours is a simple example with a single method and we chose an <code>interface</code> instead of an <code>abstract class</code> to represent the whole and the part. If we opted for the latter, we could have provided default implementations for some methods.</p>
<p style="text-align: justify;">The composite pattern allows a client to work seamlessly with a composite object. The client doesn't need to distinguish between the composite and the part. To make this happen, the composite, as well as, the part needs to implement a common interface or inherit from a common abstract class. This will let the client invoke common methods on both. However, it is possible that the common super-type has methods which make sense for the part and not for the composite or vice versa. Say our interface <code>IAlliancePart</code> could have a method <code>fire()</code> which would be applicable to the part, i.e. the plane but not to the composite, i.e. the air force. In such a scenario, it is ok to put in a default implementation or throw an <code>UnSupportedOperationException</code>.</p>

<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">references to parents: Since the composite is a tree structure, one may or may not need to store references to the parent.</p>
</li>
<li>
<p style="text-align: justify;">ordering of children in a composite: In some scenarios, it might be required to store or traverse the children in a certain order within the composite.</p>
</li>
<li>
<p style="text-align: justify;">caching part of the composite for traversal: For complex composites, it may make sense to cache part of the composite object to speed up traversal or search.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Decorator */
        id : 4,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">A decoration is added to something to make it more attractive, in the same spirit, the decorator pattern adds new functionality to objects without modifying their defining classes.</p>
<p style="text-align: justify;">The decorator pattern can be thought of as a wrapper or more formally a way to <strong><i>enhance or extend the behavior of an object dynamically</i></strong>. The pattern provides an alternative to subclassing when new functionality is desired.</p>
<p style="text-align: justify;">The strategy is to wrap the existing object within a decorator object that usually implements the same interface as the wrapped object. This allows the decorator to invoke the methods on the wrapped object and then add any additional behavior. Usually, the decorator adds behavior to the existing functionality of the wrapped object i.e. the decorator takes action either before or after invoking some method on the wrapped object.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Component</li>
<li style="text-align: justify;">Concrete Component</li>
<li style="text-align: justify;">Decorator</li>
<li style="text-align: justify;">Concrete Decorator</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_structural/gof_structural_decorator_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">To better understand the decorator pattern, let's go back to our aircraft example. The aircraft are produced somewhat similar to cars. There's the base model of a car and then there are optional packages that a customer can request to be added to the car. For instance a car can have a technology package added to the base model, then maybe the sports package so on and so forth. Similarly, our base Boeing-747 model can have two additional properties added to it. One is to let the plane be fitted with luxury fittings and the other is making the plane bullet-proof.</p>
<p style="text-align: justify;">Say we are interested in the weight of our plane, which can be important in determining the fuel required for flights. Adding either or both of the options would make the plane heavier. We would want an extensible way of adding properties to the plane object and still be able to know its weight with the additional packages installed on the plane.</p>
<p style="text-align: justify;">Let's first see how the aircraft interfaces and classes look like:</p>
<pre>
public interface IAircraft {

    float baseWeight = 100;

    void fly();

    void land();

    float getWeight();

}
</pre>

<pre>
public class Boeing747 implements IAircraft {

    @Override
    public void fly() {
        System.out.println("Boeing-747 flying ...");
    }

    @Override
    public void land() {
        System.out.println("Boeing-747 landing ...");
    }

    @Override
    public float getWeight() {
        return baseWeight;
    }
}
</pre>
<p style="text-align: justify;">The decorator pattern requires an abstract decorator class that implements the abstract interface for the object being wrapped. In this case, we call our decorator <code>BoeingDecorator</code> and have it implement the <code>IAircraft</code> interface.</p>
<pre>
public abstract class BoeingDecorator implements IAircraft {
}
</pre>
<p style="text-align: justify;">We'll have two concrete decorators, one for the luxury fittings and the other for bullet proofing the plane.</p>
<pre>
public class LuxuryFittings extends BoeingDecorator {

    IAircraft boeing;

    public LuxuryFittings(IAircraft boeing) {
        this.boeing = boeing;
    }

    @Override
    public void fly() {
        boeing.fly();
    }

    @Override
    public void land() {
        boeing.land();
    }

    @Override
    public float getWeight() {
        return (30.5f + boeing.getWeight());
    }
}
</pre>

<pre>
public class BulletProof extends BoeingDecorator {

    IAircraft boeing;

    public BulletProof(IAircraft boeing) {
        this.boeing = boeing;

    }

    @Override
    public void fly() {
        boeing.fly();
    }

    @Override
    public void land() {
        boeing.land();
    }

    @Override
    public float getWeight() {
        return 50f + boeing.getWeight();
    }
}
</pre>
<p style="text-align: justify;">See how the concrete decorators save a reference to the object that they wrap. The <code>getWeight</code> method in each decorator calls the base model's <code>getWeight</code> to get the base model's weight and then adds the weight added to the plane because of itself. The client can use the decorators like so:</p>
<pre>
public class Client {

    public void main() {
        IAircraft simpleBoeing = new Boeing747();
        IAircraft luxuriousBoeing = new LuxuryFittings(simpleBoeing);
        IAircraft bulletProofBoeing = new BulletProof(luxuriousBoeing);
        float netWeight = bulletProofBoeing.getWeight();
        System.out.println("Final weight of the plane: " + netWeight);
    }
}
</pre>
<p style="text-align: justify;">From the client code, one can observe how the plane's behavior is extended at runtime. Note that the decorator's abstract class implements the same interface as the Boeing747. This is so that the concrete decorator object can stand in place of the Boeing object. From the client code, one can see how we wrap the boeing object in successive decorators and are able to retrieve the net weight.</p>

<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">One of the issues with the decorator pattern is that we may end up with too many classes as the number of decorators grows. The <code>java.io</code> package suffers from the same issue, as it makes extensive use of the decorator pattern.</p>
</li>
<li>
<p style="text-align: justify;">Also, if we want to take a specific action based on the concrete type of the plane, we may not be able to do so. Once the concrete object is wrapped inside a decorator the reference to the object is through the abstract type and not the concrete type anymore.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Facade */
        id : 5,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">A facade literally means the front of a building or an outward appearance to hide a less pleasant reality. The facade pattern essentially does the same job as the definition of the word facade. Its purpose is to hide the complexity of an interface or a subsystem.</p>
<p style="text-align: justify;">If you take a look around the amenities of current life, almost everything is a facade. When you press a button to turn on the room lights. The button is a facade that hides from you the complexities of electric power generation and distribution and magically lights up your room. The facade makes complex systems easier to use.</p>
<p style="text-align: justify;">Formally the facade pattern is defined as <strong><i>a single uber interface to one or more subsystems or interfaces intending to make use of the subsystems easier</i></strong>.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Facade</li>
<li style="text-align: justify;">Subsystem Classes</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_structural/gof_structural_facade_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Modern aircrafts have a feature called autopilot that allows the airplane to fly to its destination in an automated fashion without much interference from human pilots. The autopilot feature needs to juggle with all the subsystems and health-checks of the aircraft to ensure a smooth flight. It can hide away all the underlying complexity of automated flight from a pilot. Let's look at how the Boeing autopilot facade would be created:</p>
<pre>
public class AutopilotFacade {

    private BoeingAltitudeMonitor altitudeMonitor;
    private BoeingEngineController engineController;
    private BoeingFuelMonitor feulMonitor;
    private BoeingNavigationSystem navigationSystem;

    public AutopilotFacade(BoeingAltitudeMonitor altitudeMonitor, BoeingEngineController engineController,
                           BoeingFuelMonitor feulMonitor, BoeingNavigationSystem navigationSystem) {
        this.altitudeMonitor = altitudeMonitor;
        this.engineController = engineController;
        this.feulMonitor = feulMonitor;
        this.navigationSystem = navigationSystem;
    }

    public void autopilotOn() {
        altitudeMonitor.autoMonitor();
        engineController.setEngineSpeed(700);
        navigationSystem.setDirectionBasedOnSpeedAndFeul(
                engineController.getEngineSpeed(),
                feulMonitor.getRemainingFeulInGallons());
    }

    public void autopilotOff() {
        altitudeMonitor.turnOff();
        engineController.turnOff();
        navigationSystem.turnOff();
        feulMonitor.turnOff();
    }
}
</pre>
<p style="text-align: justify;">The facade is encapsulating the logic required to activate and deactivate the autopilot in the <code>autopilotOn</code> and <code>autopilotOff</code> methods. It is also being passed in all the subsystems required in its constructor. We have intentionally left out the implementation for the subsystems <code>BoeingAltitudeMonitor</code>, <code>BoeingEngineController</code>, <code>BoeingFuelMonitor</code> and <code>BoeingNavigationSystem</code> for brevity. The key point to understand here is that these subsystems expose certain operations that are hidden behind an interface that lumps their execution in the right sequence.</p>
<p style="text-align: justify;">You may argue that the class <code>Boeing747</code> could have just as well invoked the required methods on the subsystem objects and you are right. The intent is not to hide the subsystems but to make it easier to use the collection of subsystems. The <code>Boeing747</code> class only works with the facade. It codes against the facade rather than individual subsystems so that tomorrow if any subsystem is switched out for a better one the change is quarantined to the facade and doesn't cascade across the code base.</p>
<p style="text-align: justify;">The facade pattern shields the client from having to deal with all the complex subsystem classes, thus creating a loose coupling between the subsystem and its clients. Upon receiving a request, the facade forwards the request to the appropriate subsystem and may do any necessary translation inbetween.</p>

<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">Usually a single facade object is needed and is implemented as a <strong>Singleton</strong>.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Flyweight */
        id : 6,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">Flyweight is a category in boxing competitions for light weight boxers. The intent of the pattern is somewhat similar in that it tries to reduce bloated code to a more compact and lean representation, which uses less memory.</p>
<p style="text-align: justify;">Formally, the pattern is defined as <strong><i>sharing state among a large number of fine-grained objects for efficiency</i></strong>.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Flyweight</li>
<li style="text-align: justify;">Concrete Flyweight</li>
<li style="text-align: justify;">Unshared Concrete Flyweight</li>
<li style="text-align: justify;">Flyweight Factory</li>
<li style="text-align: justify;">Client</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_structural/gof_structural_flyweight_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Following OO principles to the core may lead you to create too many objects in your application that have part of their state shared. For instance, continuing with our aircraft scenario, if you are designing a global radar that tracks all the planes currently airborne in the world at any time then your radar screen will show thousands of airplanes represented as objects in memory. If your hardware is limited in memory then you have a problem.</p>
<p style="text-align: justify;">Each object would have some shared state that is independent of where the plane is flying in the world. This state which is independent of the <strong><i>context</i></strong> of the plane is called <strong>intrinsic state</strong> and can be factored out and shared amongst all similar planes. The state of the plane which changes with the context is called the <strong>extrinsic state</strong>. In this case, the <strong>coordinates of the plane</strong> will change for each plane and can be thought of as the <strong>extrinsic state</strong>. The <strong>remaining amount of fuel</strong> for each airplane is another piece of information that is <strong>extrinsic</strong>. However, the <strong>number of crew</strong> required to fly a particular variant of the <code>F16</code> would be the same across all the F-16s of that variant that are airborne. This would be an example of <strong>intrinsic state</strong>. The crew number isn't dependent on the context, i.e. which part of the world is the plane flying in, which country does it belong to, is it on a patrolling mission or a combat mission etc - none of that affects or changes the number of people required to operate the aircraft.</p>
<p style="text-align: justify;">Using the flyweight pattern, we can move the extrinsic state of the object outside of the class and only keep the intrinsic state within the class. This change would allow us to reuse the same <code>F16</code> object for all the F-16s that are currently airborne and show up on the radar. The number of objects required to represent the flying F-16s would drastically reduce. The extrinsic state of the planes can always be passed-in to the methods that use it.</p>
<p style="text-align: justify;">The astute reader would immediately question <strong>where do we keep the extrinsic state?</strong> That can be kept in a separate <strong>context</strong> object. But then you may retort that it is like going back to square one, for now, we are creating more objects and the whole purpose of the pattern was to reduce the number of objects. Your observation is correct, however, note that the context object only contains that information which varies per instance of <code>F16</code>. The information which is common across the <code>F16</code> instances is stored in a flyweight object. Earlier, we had a single <strong>heavyweight</strong> object that contained both kinds of information and was needed per instance of <code>F16</code>. With the break-up, the single heavyweight object becomes a flyweight object used by all F-16s consisting of information that'll not change and an additional context object per <code>F16</code> instance consisting of information that'll change for each instance of the <code>F16</code>. Since we are keeping a single copy of the non-varying information, we'll witness memory savings.</p>
<p style="text-align: justify;">Let's see how the <code>F16</code> flyweight class would look like:</p>
<pre>
public class F16 implements IAircraft {

    // Intrinsic state
    private final String name = "F16";
    private final int personnel = 2;
    private final String dimensions = "15m long 3m wide";
    private final String wingspan = "33 feet";

    // Extrinsic state includes the current position and current speed
    // of the aircraft that is being passed in for computing remaining
    // time to destination
    public double getTimeToDestination(int currX, int currY, int destX, int destY, int currSpeed) {

        // algorithm to calculate the remaining time to reach
        // destination.

        return 1;
    }
}
</pre>
<p style="text-align: justify;">The client code can take advantage of the flyweight like so:</p>
<pre>
public class Client {

    public void main(int[][] coordsF16) {

        F16 flyweightF16 = new F16();

        for (int i = 0; i < coordsF16.length; i++) {
            int currX = coordsF16[i][0];
            int currY = coordsF16[i][1];

            // We are passing in the extrinsic state to the flyweight object. Note we are storing the
            // extrinsic state of the airborne f16s in a 2-dimensional array.
            System.out.println("time to destination = " +
                               flyweightF16.getTimeToDestination(currX, currY, 10, 10, 200));
        }

    }
}
</pre>
<p style="text-align: justify;">Note, how the client is receiving the extrinsic state for each of the <code>F16</code> in a two-dimensional array. The flyweight F16 class has information specific to a <code>F16</code> plane that won't change. For brevity's sake the getters for the private fields are skipped.</p>

<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">Usually, we don't want the clients to create the flyweight objects directly. A flyweight factory is used to manage the flyweight objects.</p>
</li>
<li>
<p style="text-align: justify;">It might appear that flyweight pattern is maybe similar to the singleton pattern, however there are some important differences. Flyweights are immutable whereas a singleton can undergo changes. Also, a singleton can only have a single copy whereas flyweights can have more than one object of their type.</p>
</li>
<li>
<p style="text-align: justify;"><strong>State</strong> and <strong>Strategy</strong> objects are often implemented as flyweights.</p>
</li>
<li>
<p style="text-align: justify;">In practice, <strong>composite pattern</strong> can be combined with flyweight to create a hierarchical structure, where the leaves are implemented as flyweight objects and are shared.

</p>
</li>
<li>
<p style="text-align: justify;">Since flyweight objects are shared, identity tests for conceptually different objects would return true.</p>
</li>
<li>
<p style="text-align: justify;">Memory savings increase if the extrinsic state can be computed rather than being stored. However, the calculation or lookup of the extrinsic state trades execution time increase in lieu of memory savings.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Proxy */
        id : 7,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">The literal definition of proxy is the <strong><i>authority to represent someone else</i></strong>. In a proxy pattern setup, a proxy is responsible for representing another object called the <strong>subject</strong> in front of clients. The real subject is shielded from interacting directly with the clients. There could be several reasons why one would want to front a subject with a proxy, some are listed below:</p>
<ul>
<li style="text-align: justify;">To access remote objects over the internet, running in another JVM or another address space</li>
<li style="text-align: justify;">To protect a subject from clients not authorized to access it</li>
<li style="text-align: justify;">To stand in place of an object that may be expensive to create and delay the object's creation till it is accessed</li>
<li style="text-align: justify;">To cache queries or results from subject for clients</li>
<li style="text-align: justify;">There are a number of other use cases such as the firewall proxy, synchronization proxy etc.</li>
</ul>
<p style="text-align: justify;">Formally, the pattern is defined as <strong><i>a mechanism to provide a surrogate or placeholder for another object to control access to it</i></strong>.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Proxy</li>
<li style="text-align: justify;">Subject</li>
<li style="text-align: justify;">Real Subject</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_structural/gof_structural_proxy_class_diagram.png" alt="" /></p>

<h2>Remote Proxy</h2>
<p style="text-align: justify;">An ambassador appointed by a country to another acts like a proxy for his/her country. He or she acts as the communication channel between the host country and the ambassador's country. A remote proxy acts in a somewhat similar fashion and facilitates interaction between the client and the subject. A remote proxy stands in place of an object which isn't running on the same machine or JVM. The client doesn't know that it is not talking to the subject but a proxy. The proxy and the subject implement the same interface allowing the client to invoke the same methods on the proxy as it would have invoked on the subject. The proxy then sends the request for the method invocation along with the method arguments over the network to the remote subject.</p>
<p style="text-align: justify;">The subject doesn't have the intelligence built into it to receive the method invocation request over the network and usually, a helper entity runs alongside the remote subject and handles network communication on behalf of the subject. Once the method invocation request is received, the helper entity forwards it to the subject, which in turn executes the method with the passed-in arguments. The results are then ferried back over the network to the proxy. The proxy in turn returns the results to the client.</p>

<h2>Virtual Proxy</h2>
<p style="text-align: justify;">A virtual proxy creates objects on demand. Sometimes creation of an object is expensive and complex and should only be created when required. A virtual proxy delays creation of its subject until required and stands in its place before and during its construction.</p>
<p style="text-align: justify;">Think of <strong>instagram</strong> running on a very weak internet connection on a mobile phone. The pictures aren't loaded quickly enough but to ensure a pleasant user experience, a <strong>loading widget</strong> can appear on the mobile screen while the image gets downloaded in the background. The <strong>loading widget</strong> would act as a proxy for the picture and might have related information about the picture such as the dimensions of the picture, which it can provide to the display frame before the picture download is complete.</p>

<h2>Protection Proxy</h2>
<p style="text-align: justify;">A protection proxy or authorization proxy controls access to the real subject. Requests are vetted for authorization before being forwarded to the real subject. These proxies are useful when clients should have different access rights to the subject.</p>

<h2>Example</h2>
<p style="text-align: justify;">We'll show a simple example of a remote proxy.</p>
<p style="text-align: justify;">Consider a <strong>drone</strong> that is being flown by a pilot on the ground. The drone can be thought of as the subject, while the ground cockpit can consist of a proxy that receives actions from the physical controls in the cockpit and forwards them to the remote drone's software.</p>
<p style="text-align: justify;">The <code>DroneProxy</code> and the actual subject <code>Drone</code> will both implement the same interface <code>IDrone</code>. The client will talk with the drone proxy without knowing that it is not talking to the real subject. The drone proxy would in turn forward requests from the client to the real drone object running in the flying drone's computer memory over a wireless connection. The action taken on the ground by the pilot against the drone proxy will be mimicked by the flying drone.</p>
<p style="text-align: justify;">The simplistic drone interface can be:</p>
<pre>
public interface IDrone {
    void turnLeft();
    void turnRight();
    void firstMissile();
}
</pre>
<p style="text-align: justify;">The code for the <code>DroneProxy</code> appears below:</p>
<pre>
public class DroneProxy implements IDrone {

    @Override
    public void turnLeft() {
        // forward request to the real drone to turn left over the internet
    }

    @Override
    public void turnRight() {
        // forward request to the real drone to turn right over the internet
    }

    @Override
    public void firstMissile() {
        // forward request to the real drone to fire missile
    }
}
</pre>
<p style="text-align: justify;">The client code will be like so:</p>
<pre>
public class Client {

    public void main(DroneProxy droneProxy) {

        // perpetual loop that received pilot actions
        while (true) {

            Scanner scanner = new Scanner(System.in);
            String action = scanner.nextLine();

            switch (action) {
            case "left": {
                droneProxy.turnLeft();
                break;
            }

            case "right": {
                droneProxy.turnRight();
                break;
            }

            case "fire": {
                droneProxy.firstMissile();
                break;
            }

            default:
                System.out.println("Invalid Action");
            }
        }
    }
}
</pre>
<p style="text-align: justify;">The object of class <code>Drone</code> which will be part of the code that runs on the hardware of the flying drone and controls its flight may look like below:</p>
<pre>
public class Drone implements IDrone {

    @Override
    public void turnLeft() {
        // receives the request and any method parameters
        // over the internet to turn the drone to its left.
    }

    @Override
    public void turnRight() {
        // receives the request and any method parameters
        // over the internet to turn the drone to its right.
    }

    @Override
    public void firstMissile() {
        // receives the request and any method parameters
        // over the internet to fire a missile
    }
}
</pre>
<p style="text-align: justify;">Note we have skipped the technological details for transmitting the request and the method parameters over the wire as they may vary from language to language and don't affect the spirit of the pattern.</p>


<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">A proxy may also be responsibile for additional house-keeping tasks such as deleting the subject, keeping a reference count to the real subject or encoding requests before sending them to the real subject over the wire.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },
];
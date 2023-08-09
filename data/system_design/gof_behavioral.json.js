var gof_behavioral_que = [
	{
		id : 6,
		question : "GoF — Mediator",
		tags : ["GoF", "Behavioral Design Patterns", "Mediator"]
	},

	{
		id : 7,
		question : "GoF — Memento",
		tags : ["GoF", "Behavioral Design Patterns", "Memento"]
	},

	{
		id : 3,
		question : "GoF — Interpreter",
		tags : ["GoF", "Behavioral Design Patterns", "Interpreter"]
	},

	{
		id : 5,
		question : "GoF — Iterator",
		tags : ["GoF", "Behavioral Design Patterns", "Iterator"]
	},

	{
		id : 1,
		question : "GoF — Chain of Responsibility",
		tags : ["GoF", "Behavioral Design Patterns", "Chain of Responsibility"]
	},

	{
		id : 4,
		question : "GoF — Command",
		tags : ["GoF", "Behavioral Design Patterns", "Command"]
	},

	{
		id : 8,
		question : "GoF — State",
		tags : ["GoF", "Behavioral Design Patterns", "State"]
	},

	{
		id : 10,
		question : "GoF — Strategy",
		tags : ["GoF", "Behavioral Design Patterns", "Strategy"]
	},

	{
		id : 2,
		question : "GoF — Observer",
		tags : ["GoF", "Behavioral Design Patterns", "Observer"]
	},

	{
		id : 9,
		question : "GoF — Template Method",
		tags : ["GoF", "Behavioral Design Patterns", "Template Method"]
	},

	{
		id : 11,
		question : "GoF — Visitor",
		tags : ["GoF", "Behavioral Design Patterns", "Visitor"]
	},

	{
		id : 12,
		question : "Null Object",
		tags : ["GoF", "Behavioral Design Patterns", "Null Object"]
	},
];

var gof_behavioral_ans = [
    {   /* Chain of Responsibility */
        id : 1,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">In a <strong>chain of responsibility</strong> pattern implementation, the sender's request is passed down a series of handler objects till one of those objects, handles the request or it remains unhandled and falls off the chain. Multiple objects are given a chance to handle the request. This allows us to decouple the sender and the receiver of a request.</p>
<p style="text-align: justify;">The requester has no knowledge of the object that will eventually handle its request nor does it have a reference to the handling object. Similarly, the object eventually handling the request isn't aware of the requester.</p>
<p style="text-align: justify;">Each object in the chain should implement a common supertype and have a reference to its successor. The handler objects can be added to or removed from the chain at runtime.</p>
<p style="text-align: justify;">Formally, the pattern is defined as <strong><i>decoupling the sender of a request from its receiver by chaining the receiving objects together and passing the request along the chain until an object handles it</i></strong>.</p>
<p style="text-align: justify;">Usually the pattern is applied when the request can be handled by multiple objects and it is not known in advance which object will end up handling the request.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Handler</li>
<li style="text-align: justify;">Concrete Handler</li>
<li style="text-align: justify;">Client</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_behavioral/gof_behavioral_chain_of_responsibility_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Imagine an aircraft's cockpit. It would be running some software that would indicate to the pilot about equipment failure, engine temperature, or something as disastrous as a fire. Let's say when some failure happens, the hardware sends an error code to the cockpit's computer which then takes some corrective action based on the error code it receives.</p>
<p style="text-align: justify;">We can model the error codes as requests that require handling by appropriate components. Say, if an engine failure happens, there might be a series of corrective actions that can try to fix the problem successively. For instructional purposes, say the hardware can send out either a <strong>fire detected</strong> or a <strong>low on fuel</strong> request, which have corresponding handlers. Let's see the listing for <code>AbstractHandler</code> and <code>AbstractRequest</code> classes first.</p>
<pre>
abstract public class AbstractRequest {

    // Each request is identified by a an integer
    // FireRequest: 1
    // LowFuelRequest: 2
    private int requestCode;

    public AbstractRequest(int requestCode) {
        this.requestCode = requestCode;
    }

    public int getRequestCode() {
        return requestCode;
    }
}
</pre>

<pre>
abstract public class AbstractHandler {

    private AbstractHandler next;

    public AbstractHandler(AbstractHandler next) {
        this.next = next;
    }

    public void setNext(AbstractHandler next) {
        this.next = next;
    }

    public void handleRequest(AbstractRequest request) {
        if (next != null) {
            next.handleRequest(request);
        }
    }
}
</pre>
<p style="text-align: justify;">The naive implementations of the classes <code>LowFuelRequest</code> and <code>FireDetectedRequest</code> appear below alongside the implementation for the concrete handler <code>FireHandler</code>. We skip the implementation for <code>LowFuelHandler</code> as it would be similar to <code>FireHandler</code>.</p>
<pre>
public class FireDetectedRequest extends AbstractRequest {

    // Fire request is assigned code of 1
    public FireDetectedRequest() {
        super(1);
    }
}
</pre>

<pre>
public class LowFuelRequest extends AbstractRequest {

    // Low on fuel request is assigned code of 2
    public LowFuelRequest() {
        super(2);
    }
}
</pre>

<pre>
public class FireHandler extends AbstractHandler {

    // Only interested in handling requests with code 1
    private static int code = 1;

    public FireHandler(AbstractHandler successor) {
        super(successor);
    }

    @Override
    public void handleRequest(AbstractRequest request) {
        if (code == request.getRequestCode()) {
            // Handle the request here.
        } else {
            // If the handler, doesn't handle these type of
            // requests, it can just call the super class's
            // forward request method.
            super.handleRequest(request);
        }
    }
}
</pre>
<p style="text-align: justify;">Finally the interaction between these different classes is exhibited in the client code.</p>
<pre>
public class Client {

    public void main() {

        // Setup the chain like so:
        // FireHandler --&gt; LowFuelHandler --&gt; null
        // The chain has just two handlers with the firstHandler
        // at the head of the chain.
        AbstractHandler lowFuelHandler = new LowFuelHandler(null);
        FireHandler fireHandler = new FireHandler(lowFuelHandler);

        // Create a emergency request that the airplane is running low
        // on fuel.
        LowFuelRequest lowFuelRequest = new LowFuelRequest();

        // Let the chain handle the request
        fireHandler.handleRequest(lowFuelRequest);
    }
}
</pre>
<p style="text-align: justify;">Notice, how in our example, the request moves along the chain till a handler that is capable of addressing the request receives it. The chain also defines an order in which the request gets handled. If more than one handler can serve the request, then it'll get handled by the one occurring first in the chain.</p>

<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">To form the handler chain, individual objects might need to store references to their successors. However, in certain cases the links might already exist such as that in a composite structure like a tree.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Observer */
        id : 2,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">Social media helps us immensely in understanding the observer pattern. If you are registered on <strong>Twitter</strong> then whenever you follow someone, you are essentially asking Twitter to send you (the <strong>observer</strong>) tweet updates of the person (the <strong>subject</strong>) you followed. The pattern consists of two actors, the <strong>observer</strong> who is interested in the updates and the <strong>subject</strong> who generates the updates.</p>
<p style="text-align: justify;">A <strong>subject</strong> can have many observers and is a one to many relationship. However, an <Strong>observer</strong> is free to subscribe to updates from other subjects too. You can subscribe to news feed from a Facebook page, which would be the subject and whenever the page has a new post, the subscriber would see the new post.</p>
<p style="text-align: justify;">The pattern is formally defined as a one to many dependency between objects so that when one object changes state all the dependents are notified.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Subject</li>
<li style="text-align: justify;">Observer</li>
<li style="text-align: justify;">Concrete Subject</li>
<li style="text-align: justify;">Concrete Observer</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_behavioral/gof_behavioral_observer_class_diagram1.png" alt="" width="50%"/></p>
<p style="text-align: justify;">The class diagram in general is shown below.</p>
<p style="text-align: center;"><img src="data/system_design/images/gof_behavioral/gof_behavioral_observer_class_diagram2.png" alt="" /></p>
<p style="text-align: justify;">To ensure loose coupling we'll define an interface for the subject and one for the observer.</p>
<pre>
public interface ISubject {
    void addObserver(IObserver observer);
    void removeObserver(IObserver observer);
    void notifyObservers();
}
</pre>

<pre>
public interface IObserver {
    void update( Object newState);
}
</pre>
<p style="text-align: justify;">The interfaces are almost self-explanatory. A concrete subject or publisher needs to implement <code>ISubject</code> and an observer needs to implement <code>IObserver</code>.</p>

<h2>Example</h2>
<p style="text-align: justify;">Going back to our aircraft example, we can say that any aircraft in flight would be interested in updates from the air-traffic controller. We can imagine that an aircraft, as soon as, it is airborne would want to subscribe to updates from the air traffic controller and unsubscribe when it lands.</p>
<pre>
// control tower class which acts as a publisher for all aircraft
public class ControlTower implements ISubject {

    // The ControlTower maintains a list of
    Collection<IObserver> observers = new ArrayList<>();

    @Override
    public void addObserver(IObserver observer) {
        observers.add(observer);

    }

    @Override
    public void removeObserver(IObserver observer) {
        // Logic to remove the observer goes in here
    }

    @Override
    public void notifyObservers() {
        for (IObserver observer : observers) {
            // We are passing null for state here but we
            // could pass 'this' the subject itself or a
            // type representing the state. These two options
            // represent the Pull vs Push models
            observer.update( null);
        }
    }

    // This is hypothetical function that runs perpetually, gathering runway and
    // weather conditions and notifying all observers of them periodically.
    public void run() {
        while (true) {
            // get new runway/weather conditions and update observers
            // every five minutes
            // Thread.sleep(1000 * 60 * 5)
            notifyObservers();
        }
    }
}
</pre>

<pre>
// The F-16 class would implement the IObservable as objects of the F-16 class would want updates from the ControlTower class.
public class F16 implements IObserver, IAircraft {

    ISubject observable;

    public F16(ISubject observable) {
        this.observable = observable;
        observable.addObserver(this);
    }

    @Override
    public void fly() {
        System.out.println("F16 is flying ...");
    }

    @Override
    public void land() {
        // Don't forget to unsubscribe from control tower updates
        observable.removeObserver(this);
    }

    @Override
    public void update(Object newState) {
        // Take appropriate action based on newState
    }
}
</pre>

<h2>Push vs Pull</h2>
<p style="text-align: justify;">Note how the <code>F16</code> class receives the new state as a type of class <code>Object</code>. We can pass in a more specific type if we agree on what information gets passed. The way the code is structured, it represents the <strong>Push Model</strong> where the subject is responsible for pushing the new state. Say if the aircraft is a helicopter, is it really interested in the runway conditions? It's supposed to land on a helipad and may not use all the information that it gets passed for the runway.</p>
<p style="text-align: justify;">A flip solution is that in the <code>update()</code> method, instead of passing in the changed state, we pass in the <strong>subject</strong> object itself. The subject-object in turn exposes getter methods for individual pieces of information it is willing to share with the observers. The observer is now able to lookup only that information which it finds interesting. This is called the <strong>Pull Model</strong>.</p>

<h2>Caveats</h2>
<p style="text-align: justify;">Some issues one needs to keep in mind while working with the observer pattern:</p>
<ul>
<li>
<p style="text-align: justify;">In case of many subjects and few observers, if each subject stores its observers separately, it'll increase the storage costs as some subjects will be storing the same observer multiple times.</p>
</li>
<li>
<p style="text-align: justify;">A small change in the subject, may lead to a cascade of updates for the observers and their dependent objects. If clients invoke notify on the subject after each change, it can overwhelm the observers with updates, whereas another option can be to batch the changes and then invoke notify on the subject.</p>
</li>
<li>
<p style="text-align: justify;">Usually, another entity <strong>Change Manager</strong> can sit between the observers and the subject in case there are complex dependencies between the subject and the observers.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Interpreter */
        id : 3,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">TODO</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_behavioral/TODO.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">TODO</p>

<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Command */
        id : 4,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">The command pattern's intention is to decouple the consumers of an action and the object which knows how to perform the action. Let me present an example for clarity. Suppose you are designing a framework for UI, and you add the ability for the users of the framework to add a menu bar. The menu bar will consist of menu-items. When someone clicks on the menu-item some action will be performed. Since you are only building the framework, you don't know what actions the users of the framework can have the menu-item perform. It may vary from opening a document to restarting the application. The command pattern allows us to encapsulate the desired action in an object and the object becomes responsible for invoking the action with the appropriate arguments.</p>
<p style="text-align: justify;">Formally, the pattern is defined as <strong><i>representing an action or a request as an object that can then be passed to other objects as parameters, allowing parameterization of clients with requests or actions. The requests can be queued for later execution or logged. Logging requests enables undo operations</i></strong>.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Command</li>
<li style="text-align: justify;">Concrete Command</li>
<li style="text-align: justify;">Client</li>
<li style="text-align: justify;">Invoker</li>
<li style="text-align: justify;">Receiver</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_behavioral/gof_behavioral_command_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Going back to our aircraft example, imagine the cockpit of the Boeing-747. It has a multitude of instrument panels with knobs and buttons. For simplicity's sake let's say the plane has a button for the landing gear (the wheels of the aircraft), which allows the landing gear to be lowered or retracted. The button shouldn't need to know <strong>how</strong> the landing gear works, it just needs to know <strong>who</strong> has the knowledge to operate the landing gear. The <strong>who</strong> part will implement the <code>Command</code> interface and the button will know it needs to invoke the <code>execute()</code> method on the <strong>who</strong> object.</p>
<p style="text-align: justify;">Let's look at the code implementation of our simplistic scenario. First up is the command interface:</p>
<pre>
public interface Command {
    void execute();
}
</pre>
<p style="text-align: justify;">When the button is pressed to say lower the landing gear. The button code should only have to deal with a command object that implements the <code>Command</code> interface. The button code simply calls <code>execute()</code> on the command object. Let's look at the <code>LandingGearDownCommand</code> class.</p>
<pre>
public class LandingGearDownCommand implements Command {

    // This is called the receiver of the request and
    // actually has the logic to perform the action
    LandingGear landingGear;

    public LandingGearDownCommand(LandingGear landingGear) {
        this.landingGear = landingGear;
    }

    @Override
    public void execute() {
        landingGear.up();
    }
}
</pre>
<p style="text-align: justify;">You'll see the variable <code>landingGear</code> in the <code>LandingGearDownCommand</code> class. This is called the <strong>Receiver</Strong>. It is the object that actually knows how to lower the landing gear and does the job, which is why it is called the receiver because it <strong>receives</strong> the request and processes it. The <code>LandingGearDownCommand</code> is the <strong>Command</strong> in pattern-speak. The command is composed with the receiver that actually contains the logic to perform the requested action</p>
<p style="text-align: justify;">You must be wondering that <code>LandingGearDownCommand</code> object needs to be instantiated somewhere in the code. The <strong>Invoker</strong> takes on the responsibility of creating the command object and invoking it. In our case, we can imagine a class representing the instrument panel which holds all the commands for the physical buttons on the panel. It may look something like:</p>
<pre>
public class InstrumentPanel {

    // Only two commands for now
    Command[] commands = new Command[2];

    public InstrumentPanel() {

    }

    public void setCommand(int i, Command command) {
        commands[i] = command;
    }

    public void lowerLandingGear() {
        // Assuming that the client correctly sets the first
        // index to be the landing gear lower command
        commands[0].execute();
    }

    public void retractLandingGear() {
        commands[1].execute();
    }
}
</pre>
<p style="text-align: justify;">Notice how the <strong>Invoker</strong> is simply setting up the commands and then invoking the <code>execute()</code> method on the command objects. We can very well replace the command object with an instance of a different implementation and the invoker would still work correctly. This allows decoupling between the invoker and the receivers. The Command pattern decouples the object that invokes the operation from the one having the knowledge to perform it.</p>
<p style="text-align: justify;">The last piece to the command pattern is the client which sets up the invoker with the right commands and the commands with the right receiver objects.</p>
<pre>
public void main() {

    LandingGear landingGear = new LandingGear();
    LandingGearDownCommand landingGearDownCommand = new LandingGearDownCommand(landingGear);
    LandingGearUpCommand landingGearUpCommand = new LandingGearUpCommand(landingGear);

    // Create the instrument panel
    InstrumentPanel instrumentPanel = new InstrumentPanel();

    // Assign the commands
    instrumentPanel.setCommand(0, landingGearUpCommand);
    instrumentPanel.setCommand(1, landingGearDownCommand);

    // Lower the landing gear
    instrumentPanel.lowerLandingGear();

    // Retract the landing gear
    instrumentPanel.retractLandingGear();
}
</pre>
<h2>Macro Command</h2>
<p style="text-align: justify;">A series of commands can be strung together and executed in a sequence by another command object, sometimes called a macro command. It has no explicit receiver as the commands it sequences define their own receivers. The macro command is an example of the composite pattern.</p>

<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">The command pattern is equivalent of a callback function in procedural languages as we parametrize objects with an action to perform</p>
</li>
<li>
<p style="text-align: justify;">The command objects can also be queued for later execution.</p>
</li>
<li>
<p style="text-align: justify;">The command interface can introduce an <code>unexecute()</code> method, which reverses the actions of the <code>execute()</code> method. The executed commands can then be stored in a list and traversing the list forwards and backwards while invoking <code>execute()</code> or <code>unexecute()</code> can support <strong>redo</strong> and <strong>undo</strong> respectively. The <strong>memento pattern</strong> can be helpful in storing the state a command needs to undo its effects.</p>
</li>
<li>
<p style="text-align: justify;">The command interface can add methods to save and read from disk allowing logging of commands. In case of a crash the log can be read and the commands re-executed in the same sequence to get the system back to the state just before the crash.</p>
</li>
<li>
<p style="text-align: justify;">The command pattern offers a way to model <strong>transactions</strong>. A transaction consists of finer grained operations applied to data.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Iterator */
        id : 5,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">The iterator allows a consumer to go over the elements of a collection without knowing how the collection is implemented. A collection can be a list, array, arraylist, hashmap or any other fancy data-structure. A collection signifies a bunch of objects. It doesn't specify any ordering or properties about the objects it holds. An iterator is formally defined as <strong><i>a pattern that allows traversing the elements of an aggregate or a collection sequentially without exposing the underlying implementation</i></strong>.</p>
<p style="text-align: justify;">The iterator pattern extracts out the responsibility of traversing over an aggregate out of the aggregate's interface and encapsulates it in the iterator class, thereby simplifying the aggregate's interface.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Iterator</li>
<li style="text-align: justify;">Concrete Iterator</li>
<li style="text-align: justify;">Aggregate</li>
<li style="text-align: justify;">Concrete Aggregate</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_behavioral/gof_behavioral_iterator_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Java already has an interface <code>Iterator</code> but for the purposes of learning, we'll create it from scratch. Our interface will expose only two methods <code>next()</code> and <code>hasNext()</code>. It'll look something like below:</p>
<pre>
public interface Iterator {
    void next();
    boolean hasNext();
}
</pre>
<p style="text-align: justify;">Lets say we have a class <code>AirForce</code> and it contains different kinds of aircraft, some are cargo airplanes, others are fighter jets and a few helicopters. Objects for each of these aircraft types are stored in different collection types. Take a minute to go over the <code>AirForce</code> class listing below:</p>
<pre>
public class AirForce {

    List&lt;IAircraft&gt; jets = new ArrayList&lt;&gt;();
    IAircraft[] helis = new IAircraft[1];
    LinkedList&lt;Boeing747&gt; cargo = new LinkedList&lt;&gt;();

    public List&lt;IAircraft&gt; getJets() {
        return jets;
    }

    public IAircraft[] getHelis() {
        return helis;
    }

    public LinkedList&lt;Boeing747&gt; getCargo() {
        return cargo;
    }

    public AirForce() {
        jets.add(new F16());
        helis[0] = new CobraGunship();
        cargo.add(new Boeing747());
    }

    // This method returns a concrete iterator that
    // traverses over the entire airforce planes.
    public Iterator createIterator() {
        return new AirForceIterator(this);
    }

    // This method returns a different concerete iterator
    // that traverses over only the jets in the airforce.
    public Iterator createJetsIterator() {
        return new JetsIterator(jets);

    }
}
</pre>
<p style="text-align: justify;">Note the methods <code>createIterator()</code> and <code>createJetsIterator()</code> return objects that implement the <code>Iterator</code> interface. Notice how each kind of aircraft is stored in a different type of collection. If a client needs to list all the aircraft in an airforce object, it'll have a hard time invoking getters and then going over each individual collection. We mask this complexity by creating an iterator class whose sole job is to list all the aircraft held by the airforce. Look at the implementation below:</p>
<pre>
public class AirForceIterator implements Iterator {

    List&lt;IAircraft&gt; jets;
    IAircraft[] helis;
    LinkedList&lt;Boeing747&gt; cargo;
    int jetsPosition = 0;
    int helisPosition = 0;
    int cargoPosition = 0;

    // The iterator is composed with the object it'll be iterating over
    public AirForceIterator(AirForce airForce) {
        jets = airForce.getJets();
        helis = airForce.getHelis();
        cargo = airForce.getCargo();
    }

    @Override
    // We provide our own custom logic of returning aircraft in a sequence. Note we are returning IAircraft interface
    // object which every plane in our airforce implements. We also design the function to throw a runtime exception
    // if next is invoked when no more elements are left to iterate over
    public IAircraft next() {

        // return helis first
        if (helisPosition &lt; helis.length) {
            return helis[helisPosition++];
        }

        // return jets second
        if (jetsPosition &lt; jets.size()) {
            return jets.get(jetsPosition++);
        }

        // return cargos last
        if (cargoPosition &lt; cargo.size()) {
            return cargo.get(cargoPosition++);
        }

        throw new RuntimeException("No more elements");
    }

    @Override
    public boolean hasNext() {
        return helis.length &gt; helisPosition || jets.size() &gt; jetsPosition || cargo.size() &gt; cargoPosition;
    }
}
</pre>
<p style="text-align: justify;">Let's look at how the client uses the iterator</p>
<pre>
public class Client {

    public void main() {
        AirForce airForce = new AirForce();
        Iterator jets = airForce.createJetsIterator();
        while (jets.hasNext()) {
            jets.next();
        }

        Iterator allPlanes = airForce.createIterator();
        while (allPlanes.hasNext()) {
            allPlanes.next();
        }
    }
}
</pre>
<p style="text-align: justify;">Notice, the client has no idea about how the different airplane types are held in the airforce object nor does it know what type of aircraft they are. It simply gets to work with the <code>IAircraft</code> interface.</p>
<p style="text-align: justify;">The Java API has its own iterator interface which also includes <code>remove()</code> and <code>forEachRemaining()</code> methods that we have not included in our in-house iterator.</p>

<h2>Internal vs External Iterator</h2>
<p style="text-align: justify;">When the iteration control rests with the client using the iterator, that is, the client is responsible for advancing the traversal and explicitly requesting the next element from the iterator, it is an example of an <strong>external iterator</strong>. Iterators in our aircraft example are external iterators. On the other hand, when the client hands the iterator an operation to perform and the iterator performs the operation on each element of the aggregate, it is an example of an <strong>internal iterator</strong>.</p>


<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">Note that there could be more than one pending traversals on the aggregate. Each iterator would store its own traversal state. The iterator can apply the memento pattern to store the traversal state.</p>
</li>
<li>
<p style="text-align: justify;">By moving the traversal outside of the aggregate, it's easier to provide variations on the traversal algorithm to the client.</p>
</li>
<li>
<p style="text-align: justify;">Special care needs to be taken care when insertions or deletions are allowed to an aggregate amidst an on-going traversal. The iterator can either skip over a new element or iterate over the same element twice.</p>
</li>
<li>
<p style="text-align: justify;">For composites as described in the <strong>Composite Pattern</strong>, it might make sense to create internal iterators instead of external ones, reason being that the composite can have several levels of aggregate structures and its easier for the composite to internally keep track of the traversal position by calling itself recursively and implicitly storing the traversal path in the call stack.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Mediator */
        id : 6,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">A mediator is defined as <strong>a person who makes people involved in a conflict come to an agreement</strong>. The pattern definition however, isn't violent and says the pattern is applied to encapsulate or centralize the interactions amongst a number of objects. Object orientated design may result in behavior being distributed among several classes and lead to too many connections among objects. The encapsulation keeps the objects from referring to each other directly and the objects don't hold references to each other anymore.</p>
<p style="text-align: justify;">Formally, the pattern is defined as <strong><i>encouraging loose coupling among interacting objects by encapsulating their interactions in a mediator object, thus avoiding the need for individual objects to refer to each other directly and allowing to vary object interactions independently</i></strong>.</p>
<p style="text-align: justify;">A mediator controls and coordinates the behavior for a group of objects. The objects only communicate with the mediator or the director and don't know of the other objects.</p>
<p style="text-align: justify;">The mediator pattern should be applied when there are many objects communicating in a well-structured but complex manner resulting in interdependencies that are hard to understand. The participant objects in such a scheme don't lend themselves for reuse because of dependence on so many other objects.</p>
<p style="text-align: justify;">Since the interaction rules or behavior is isolated in a single mediator class, it becomes easier to change. Also note that in the absence of the mediator, the objects are engaged in many-to-many interactions but when the mediator is introduced the interactions become one-to-many between the mediator and the other participating objects.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Mediator</li>
<li style="text-align: justify;">Concrete Mediator</li>
<li style="text-align: justify;">Colleague Classes</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_behavioral/gof_behavioral_mediator_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Imagine an airport without an air-traffic control tower. All the airplanes in flight, about to land and about to take-off need to be aware of every other airplane to coordinate the use of the runways as well as the airspace. There are in a sense dependent on each other to avoid a disaster but this leads to having too many <strong>interconnections</strong> among objects. With a single runway, the worst case is every airplane has to know about every other airplane about to land or take-off to avoid collisions. The <strong>control tower</strong> object can act as a <strong>mediator</strong> and communication hub for all the airplanes and ensure a smooth working of the airport.</p>
<p style="text-align: justify;">For instructional purposes, we'll implement the coordination logic required for an airplane to land safely. The <code>ControlTower</code> class appears below:</p>
<pre>
public class ControlTower {

    List&lt;IAircraft&gt; queuedForLanding = new ArrayList&lt;&gt;();

    // An aircraft just notifies the control tower that it wants to land and doesn't coordinate with other aircraft
    synchronized public void requestToLand(IAircraft aircraft) {
        queuedForLanding.add(aircraft);
    }

    public void run() {

        // perpetual loop
        while (true) {

            // inefficient busy wait till aircraft requests to land
            while(queuedForLanding.size() == 0);

            IAircraft aircraft;
            synchronized (this) {
                aircraft = queuedForLanding.remove(0);
            }
            // We have only one runway available so only allow a single aircraft to land.
            aircraft.land();
        }
    }
}
</pre>
<p style="text-align: justify;">The aircraft interface and classes are:</p>
<pre>
public interface IAircraft {
    public void land();
}
</pre>

<pre>
public class F16 implements IAircraft {

    ControlTower controlTower;

    public F16(ControlTower controlTower) {
        this.controlTower = controlTower;
    }

    @Override
    public void land() {
        System.out.println("F16 landing...");
    }

    public void requestControlTowerToLand() {
        controlTower.requestToLand(this);
    }
}
</pre>
<p style="text-align: justify;">In our naive example the aircraft object communicates with the <code>ControlTower</code> class and requests to land. The control tower object maintains a queue of planes wishing to land and runs a perpetual thread-safe loop that allows each plane to land one after the other. If the number of runways available increases or close down for maintenance, the changes are localized to the <code>ControlTower</code> class.</p>
<p style="text-align: justify;">We used the control tower example also for the <strong>observer pattern</strong> and it applies in the <strong>mediator pattern</strong> too as the interaction between the mediator and the colleagues can be modeled on the <strong>observer pattern</strong>.</p>

<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">The communication between the mediator and other objects, called colleagues, can follow the observer pattern. The mediator acts as the observer and receives notifications from colleagues, which act as subjects. The effects of the change are then forwarded to other colleagues by the mediator.</p>
</li>
<li>
<p style="text-align: justify;">The pattern trades complexity of interactions for complexity in the mediator. The mediator itself can become very complex and hard to maintain.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Memento */
        id : 7,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">The literal meaning of <strong>memento</strong> is <strong>an object kept as a reminder or souvenir of a person or an event</strong>. The memento pattern let's us capture the internal state of an object without exposing its internal structure so that the object can be restored to this state later. In some sense we are saving a token or a memento of the original object and then recreating the object's state using the memento at a later time.</p>
<p style="text-align: justify;">The object whose state we capture is called the <strong>Originator</strong>. The originator's <strong>snapshot</strong> is called the <strong>memento</strong>. The memento object is held by another object called the <strong>Caretaker</strong>. The interaction between these three entities happens as follows:</p>
<ol>
<li style="text-align: justify;">The caretaker requests the originator for a snapshot of its internal state.</li>
<li style="text-align: justify;">The originator produces a memento.</li>
<li style="text-align: justify;">The memento is held by the caretaker and passed back to the originator when required to revert its state to that captured in the memento. If that need doesn't arise, the memento is eventually discarded by the caretaker.</li>
</ol>
<p style="text-align: justify;">In the absence of the memento pattern, the originator would need to expose its complete internal state to outside classes who can then create snapshots of the internal state of the originator at any time. However, this approach is brittle, breaks encapsulation and any future changes in the originator's state would require corresponding changes in the classes that consume the originator's internal state.</p>
<p style="text-align: justify;">With the introduction of the memento, the originator itself creates a snapshot of its state and is free to store as much or as little information as it pleases in the memento object. The memento's interface to outside classes is limited while the originator has full access to memento's state. This prohibits external classes including the caretaker from manipulating memento's state but allows the originator to fully access memento's state so that it can restore itself to the checkpoint represented by the memento.</p>
<p style="text-align: justify;">The challenge to limit memento's interface to caretaker and other external classes while at the same time making it completely accessible to the originator may be hard in certain languages. In case of Java, <strong>static classes</strong> can be used to achieve this effect.</p>
<p style="text-align: justify;">Memento lets the originator entrust other objects with information it'll need to revert to a previous state without exposing its internal structure or representations.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Memento</li>
<li style="text-align: justify;">Originator</li>
<li style="text-align: justify;">Caretaker</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_behavioral/gof_behavioral_memento_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Modern airplanes are equipped with a device called a <strong>blackbox</strong> that stores important flight data and helps investigators in case of crashes. Due to the sensitivity of the information, the blackbox contains, we wouldn't want to expose the internal state of the blackbox to clients. We'll write a class mimicking the blackbox that can produce its state as a byte stream for clients. The blackbox code appears below:</p>
<pre>
public class BlackBox implements Serializable {

    private long altitude;
    private double speed;
    private float engineTemperature;
    private static final long serialVersionUID = 1L;

    public BlackBox(long altitude, double speed, float engineTemperature) {
        this.altitude = altitude;
        this.speed = speed;
        this.engineTemperature = engineTemperature;
    }

    // Saving the state of the object as a byte stream
    public byte[] getState() throws IOException {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ObjectOutput out = null;
        byte[] memento = null;
        try {
            out = new ObjectOutputStream(bos);
            out.writeObject(this);
            out.flush();
            memento = bos.toByteArray();
        } finally {
            try {
                bos.close();
            } catch (IOException ex) {
                // ignore close exception
            }
        }
        return memento;
    }

    // Restoring state from memento
    public BlackBox setState(byte[] memento) throws Exception {
        ByteInputStream bis = new ByteInputStream(memento, memento.length);
        ObjectInputStream objectInputStream = new ObjectInputStream(bis);
        BlackBox blackBox = (BlackBox) objectInputStream.readObject();
        objectInputStream.close();
        return blackBox;
    }
}
</pre>
<p style="text-align: justify;">In Java, we can use <strong>serialization</strong> to save the state of the object. We are simply required to mark our class with the <code>Serializable</code> interface, which has no methods to implement. Note that in our <code>setState()</code> method, we are returning an object of type <code>BlackBox</code> that the client can then assign.</p>
<p style="text-align: justify;">The client will work as follows:</p>
<pre>
public class Client {
    public void main(BlackBox blackBox) throws Exception{
        // Save the state of the memento as a byte stream.
        byte[] memento = blackBox.getState();

        // Do some work.

        // Now restore the blackbox to the previous state
        blackBox = blackBox.setState(memento);
    }
}
</pre>

<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">The memento pattern might not be appropriate if large amounts of information need to be copied by the originator.</p>
</li>
<li>
<p style="text-align: justify;">Note that using the pattern, the originator is relieved of the responsibility to save its state for the client. Instead, the onus is on the client to request a memento from the originator and manage it. The client can at a later point request the originator to restore itself to the state represented by the memento it holds.</p>
<p style="text-align: justify;">Imagine a simplistic video game delivered via a web-browser. The game state can be saved by the user. One possibility is for the game to save its state per user of the game and store it on the webservers, the other is to flip the responsibility and store the state on the user's computer. The user can request a restore of the gaming session by loading the right memento. This allows the game's codebase to free itself of managing game states per user.</p>
</li>
<li>
<p style="text-align: justify;">Sometimes is possible to store incremental changes or the differential between the current and previous states rather than the entire state in the memento. This helps to reduce the space required for storing mementos.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* State */
        id : 8,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">The state pattern will be reminiscent of automata class from your undergraduate degree as it involves state transitions for an object. The state pattern encapsulates the various states a machine can be in. The machine or the <strong>context</strong>, as it is called in pattern-speak, can have actions taken on it that propel it into different states. Without the use of the pattern, the code becomes inflexible and littered with if-else conditionals.</p>
<p style="text-align: justify;">Formally, the pattern is defined as <strong><i>allowing an object to alter behavior when its internal state changes so that it appears to change its class</i></strong>.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Context</li>
<li style="text-align: justify;">State</li>
<li style="text-align: justify;">Concrete State Subclasses</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_behavioral/gof_behavioral_state_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Let's take the case of our <code>F16</code> class. An instance of the class can be in various states. Some possible states and transitions to other states are listed below:</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
    <tr valign="top">
        <th width="50%" style="text-align: center;"><strong>Current State</strong></th>
        <th width="50%" style="text-align: center;"><strong>Possible Transitions to Other States</strong></th>
    </tr>
    <tr>
        <td style="width: 50%;">Parked</td>
        <td style="width: 50%;">Crash or Taxi</td>
    </tr>
    <tr>
        <td style="width: 50%;">Taxi</td>
        <td style="width: 50%;">Airborne or Parked</td>
    </tr>
    <tr>
        <td style="width: 50%;">Airborne</td>
        <td style="width: 50%;">Crash or Land</td>
    </tr>
    <tr>
        <td style="width: 50%;">Land</td>
        <td style="width: 50%;">Taxi</td>
    </tr>
    <tr>
        <td style="width: 50%;">Crash</td>
        <td style="width: 50%;">No transition out of this state</td>
    </tr>
</tbody>
</table>
<p style="text-align: justify;">The state transitions are depicted in the picture below:</p>
<p style="text-align: center;"><img src="data/system_design/images/gof_behavioral/gof_behavioral_state_transition.png" alt="" width="50%" /></p>
<p style="text-align: justify;">The verbs in <strong>red</strong> in the state diagram are <strong>actions</strong> that propel the aircraft into different states.</p>
<p style="text-align: justify;">Let's see how we'll write the code in the absence of the state pattern. We'll code the state transition function when the pilot takes the <strong>taxi</strong> action.</p>
<pre>
// Pilot takes the taxi action
public void pilotTaxies(String currentState) {
    if (currentState == "Parked") {
        currentState = "Taxi";
        System.out.println("Plane is taxing on the runway.");

    } else if (currentState == "Airborne") {
        System.out.println("This is an invalid operation for this state");

    } else if (currentState == "Land") {
        System.out.println("This is an invalid operation for this state");

    } else if (currentState == "Crashed") {
        System.out.println("This is an invalid operation for this state");

    } else if(currentState == "Taxi"){
        System.out.println("Plane is already taxing on the runway.");
    }
}
</pre>
<p style="text-align: justify;">The method <code>pilotTaxies()</code> captures the state transitions once the taxi action is taken by the pilot. One can see the labyrinth of if-else conditions will only grow bigger, once we start adding more states for the plane.</p>
<p style="text-align: justify;">Now let's see how the state pattern fixes the above problem. The state pattern will create classes for each of the possible states and each class implements the state-specific behavior. This will result in more number of classes but the design will become flexible and extensible as you'll shortly see. First let's capture the actions a pilot can take, in an interface, which is the <code>State</code> interface. This interface would then be implemented by the different states a <code>F16</code> can be in.</p>
<pre>
// This interface defines the actions a pilot can take against the aircraft object.
// Each action will move the aircraft into a different state
public interface IPilotActions {
    void pilotTaxies(F16 f16);
    void pilotFlies(F16 f16);
    void pilotEjects(F16 f16);
    void pilotLands(F16 f16);
    void pilotParks(F16 f16);
}
</pre>
<p style="text-align: justify;">Now let's see how a state would implement this interface. Let's start with the <code>ParkedState</code>. For brevity, we'll only show the parked state class. Each of the other states will have a corresponding class that'll code behavior for the <code>F16</code> in that state.</p>
<pre>
public class ParkedState implements IPilotActions {

    F16 f16;

    // Notice, how the state class is composed with the context object
    public ParkedState(F16 f16) {
        this.f16 = f16;
    }

    @Override
    public void pilotTaxies(F16 f16) {
        f16.setState(f16.getTaxiState());
    }

    @Override
    public void pilotFlies(F16 f16) {
        System.out.println("This is an invalid operation for this state");
    }

    @Override
    public void pilotEjects(F16 f16) {
        f16.setState(f16.getCrashState());

    }

    @Override
    public void pilotLands(F16 f16) {
        System.out.println("This is an invalid operation for this state");
    }

    @Override
    public void pilotParks(F16 f16) {
        System.out.println("This is an invalid operation for this state");
    }
}
</pre>
<p style="text-align: justify;">Note how the constructor accepts an instance of the context and saves a reference to it. The plane can only transition to <strong>TaxiState</strong> or <strong>CrashedState</strong> from the <strong>ParkedState</strong>. Either the pilot successfully revs up the engine and takes the plane on the runway or he presses eject if say a fire breaks out on ignition. In our state transition model, you can see that <strong>CrashedState</strong> is a terminal state and there are no transitions out of this state. One can't park, fly, taxi, land or crash again a crashed plane.</p>
<p style="text-align: justify;">The client will use our new set of classes like so:</p>
<pre>
public class Client {
    public void main() {
        F16 f16 = new F16();
        f16.startsEngine();
        f16.fliesPlane();
        f16.ejectsPlane();
    }
}
</pre>
<p style="text-align: justify;">For completeness, the <code>F16</code> class and the associated interface appear below:</p>
<pre>
public interface IAircraft {
   //Empty interface
}
</pre>

<pre>
public class F16 implements IAircraft {

    private ParkedState parkedState = new ParkedState(this);
    private CrashState crashState = new CrashState(this);
    private LandState landState = new LandState(this);
    private TaxiState taxiState = new TaxiState(this);
    private AirborneState airborneState = new AirborneState(this);

    IPilotActions state;

    public F16() {
        state = parkedState;
    }

    void startsEngine() {
        state.pilotTaxies(this);
    }

    void fliesPlane() {
        state.pilotFlies(this);
    }

    void landsPlane() {
        state.pilotLands(this);
    }

    void ejectsPlane() {
        state.pilotEjects(this);
    }

    void parksPlane() {
        state.pilotParks(this);
    }

    void setState(IPilotActions IPilotActions) {
        state = IPilotActions;
    }

    ParkedState getParkedState() {
        return parkedState;
    }

    CrashState getCrashState() {
        return crashState;
    }

    LandState getLandState() {
        return landState;
    }

    TaxiState getTaxiState() {
        return taxiState;
    }

    public AirborneState getAirborneState() {
        return airborneState;
    }
}
</pre>
<p style="text-align: justify;">We have delegated the transitions to the state classes. They decide what would be the next state depending on the action the pilot takes.</p>
<p style="text-align: justify;">This pattern may seem very similar to the Strategy Pattern, however, the intent of the two patterns is very different. In strategy, the client is actively composing the context with the strategy object whereas, in the state pattern, the client has no view of the state the context is currently in. The context may show a different behavior for being in a different state. It might appear to the client that the context is a different class altogether when in fact it's only in a different state.</p>
<p style="text-align: justify;">For our example when the F-16 is airborne it becomes capable of using its weapons, firing missiles, destroying tanks etc, all of which it can't do in the parked state. The alteration in the behavior that comes with the state change, almost makes the object appear to belong to a different class.</p>



<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">In our example, the F-16 object is assumed to be in parked state when new-ed up however a client can configure the context with a state at instantiation time if the context can be in more than one states when new-ed up. But once configured, the clients don't deal with context states again.</p>
</li>
<li>
<p style="text-align: justify;">If the state types only contain behavior and no data then their instances can be expressed as flyweight objects and shared amongst multiple context objects. In our example the <code>ParkedState</code> only contains methods and no data particular to an object of F16. This allows us to have multiple F16 objects use the same parked state object to be in the parked state.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Template Method */
        id : 9,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">A template can be thought of as a general or abstract structure that can be customized for specific situations. You may have used a template for writing your resume. The template would define the overall structure of the document and leave the details to be added in by the template user. The template method pattern is similar, it defines the skeleton or steps of an algorithm but leaves opportunities for subclasses to override some of the steps with their own implementations.</p>
<p style="text-align: justify;">Formally, the pattern is defined as <strong><i>allowing subclasses to define parts of an algorithm without modifying the overall structure of the algorithm</i></strong>.</p>
<p style="text-align: justify;">The template method pattern factors out the common code among its subclasses and puts them into the abstract class. The variable parts of the algorithm are left for the subclasses to override. These parts are template methods. A <strong>template method</strong> defines an algorithm in terms of abstract operations that subclasses override to provide concrete behavior. The ordering of the steps is fixed by the abstract class. Usually, the algorithm is represented as a series of methods which are then invoked in the desired sequence in another method. Note that the classes may choose to ignore overriding certain steps or choose to rely on the default implementation provided by the abstract class. The abstract class may want to forbid the subclasses from overriding behavior for some steps, it can enforce this constraint by marking the methods implementing those steps as <code>final</code>.</p>
<p style="text-align: justify;">The opportunity afforded to subclasses for overriding some steps of the algorithm is through methods called <strong>hooks</strong>. A hook denotes an optional step for the subclass to override whereas a method marked as <code>abstract</code> forces the subclasses to provide an implementation for the step.</p>
<p style="text-align: justify;">The template pattern method is very suitable for frameworks. A framework generally defines the application control flow and gives developers the opportunity to override certain methods to customize the flow of their application needs. For instance, the very popular message queuing framework Kafka allows developers to set the <code>UncaughtExceptionHandler</code> method and give their application a chance to react to an uncaught exception. The developer can choose to ignore and not set any handler. The template method pattern doesn't need to follow the textbook description of the pattern and can deviate to fit in the given context but the underlying spirit should conform to the intent of the pattern description.</p>
<p style="text-align: justify;">One of the benefits apart from code reuse of the template method pattern is that the higher level components don't depend on lower level components and call the lower level components as and when required. When entities at various levels depend horizontally and vertically on various other entities, it becomes what is called a <strong>Dependency Rot</strong>. The pattern helps avoid the dependency rot by making the lower level components (subclasses) depend on the higher level abstract class.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Abstract Class</li>
<li style="text-align: justify;">Concrete Class</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_behavioral/gof_behavioral_template_class_diagram.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Let's take our aircraft example. Before each flight there's a list of tasks the pilots must go through that is called the "pre-flight checklist". You can well imagine that for most of the aircrafts this list would have a lot of commonalities. Therefore, it makes sense to model an abstract class that captures all the tasks in the preflight checklist in the order they should be performed.</p>
<pre>
public abstract class AbstractPreFlightCheckList {

    // This method captures the template or the skeleton of the algorithm for the pre-flight checklist.
    final public void runChecklist() {

        // Check fuel guage
        IsFuelEnough();

        // Check doors are locked
        doorsLocked();

        // Check air pressure
        checkAirPressure();
    }

    // Don't let subclasses override this method, this is a mandatory check
    final protected void IsFuelEnough() {
        System.out.println("check fuel gauge");
    }

    // Some airplanes may or may not have doors so allow this method to be overridden by subclasses
    protected boolean doorsLocked() {
        return true;
    }

    // Force subclasses to provide their own way of checking for cabin or cockpit air pressure
    abstract void checkAirPressure();
}
</pre>
<p style="text-align: justify;">The F-16 preflight checklist would then look like</p>
<pre>
public class F16PreFlightCheckList extends AbstractPreFlightCheckList {

    @Override
    void checkAirPressure() {
        // Implement the custom logic for checking cockpit air pressure for F-16
    }

    @Override
    protected boolean doorsLocked() {
        // F-16 unlike a Boeing-747 has no doors so always return true;
        return true;
    }
}
</pre>
<p style="text-align: justify;">Since an F-16 doesn't have doors that need to be locked, it conveniently ignores providing an implementation for the method <code>doorsLocked()</code> and relies on the default implementation of the abstract class to take the right action.</p>


<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">Don't confuse the template method pattern with the strategy pattern. Strategy pattern uses composition by accepting objects that define the entire algorithm, whereas the template pattern method uses inheritance to vary parts of the algorithm by subclasses but the outline and structure of the algorithm is still the realm of the abstract class.</p>
</li>
<li>
<p style="text-align: justify;">Factory method pattern is a specialization of the template method pattern.</p>
</li>
<li>
<p style="text-align: justify;">Ideally, the number of methods for which the subclasses need to provide implementation should be minimized when applying the template method pattern.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Strategy */
        id : 10,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">The strategy pattern is one of the simpler patterns to comprehend. It allows grouping related algorithms under an abstraction, which the client codes against. The abstraction allows switching out one algorithm or policy for another without modifying the client.</p>
<p style="text-align: justify;">The strategy pattern is formally defined as <strong><i>encapsulating algorithms belonging to the same family and making them interchangeable. The consumers of the common interface that the algorithms implement allow switching out one algorithm for another seamlessly</i></strong>.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Strategy</li>
<li style="text-align: justify;">Concrete Strategy</li>
<li style="text-align: justify;">Context</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_behavioral/gof_behavioral_strategy_transition.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Concrete algorithms implement the same interface. The <Strong>context</strong> has the data the algorithm will act on. Together the context and the strategy interact to implement the chosen algorithm. Usually, clients instantiate the context and pass in the strategy object and then, only interact with the context object.</p>
<p style="text-align: justify;">The most trivial example one can think of is the family of <strong>sorting algorithms</strong>. Say our application is only concerned with sorting integer arrays. All the sorting algorithms can implement a common interface, that we call <code>ISort</code></p>
<pre>
public interface ISort {
    void sort(int[] input);
}
</pre>
<p style="text-align: justify;">The concrete implementations of the interface appear below:</p>
<pre>
public class BubbleSort implements ISort {

    @Override
    public void sort(int[] input) {
        // Do inefficient sorting in order n squared
    }
}
</pre>

<pre>
public class MergeSort implements ISort {

    @Override
    public void sort(int[] input) {
        // Do efficient sorting in nlogn
    }
}
</pre>
<p style="text-align: justify;">The <code>Context</code> class holds a reference to the strategy object and when it receives requests from its clients, it forwards them to the strategy object along with the required data.</p>
<pre>
public class Context {

    private ISort howDoISort;

    public Context(ISort howDoISort) {
        this.howDoISort = howDoISort;
    }

    // Context receives the data from its client and passes it on to the strategy object.
    void sort(int[] numbers) {
        howDoISort.sort(numbers);
    }

    // We can change the sorting algorithm using this setter
    public void setHowDoISort(ISort howDoISort) {
        this.howDoISort = howDoISort;
    }
}
</pre>
<p style="text-align: justify;">The client can use the context like so:</p>
<pre>
public class Client {

    private int[] numbers = new int[1000];

    void crunchingNumbers() {

        // Choose the sorting strategy
        BubbleSort bubbleSort = new BubbleSort();

        // Context receives the strategy object
        Context context = new Context(bubbleSort);

        // Sort the numbers
        context.sort(numbers);

        // Do remaining work
    }
}
</pre>
<p style="text-align: justify;">Notice how the context keeps an interface reference and can be configured with any concrete sort implementation. The implementation can also be changed at runtime through the setter. This decoupling of the client and the algorithms, allows us to vary the algorithms independent of the client.</p>

<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">The context can either pass the required data or itself to the strategy object. In the latter case, the context would expose methods on itself so that the strategy object can retrieve the required data.</p>
</li>
<li>
<p style="text-align: justify;">Strategy objects are good candidates to be implemented as <strong>flyweight</strong> objects. This can reduce the memory requirements for the application.</p>
</li>
<li>
<p style="text-align: justify;">The context class can be simplified by providing a default strategy and only burdening the clients to provide a strategy object, when the default doesn't meet their requirements.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Visitor */
        id : 11,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">The visitor pattern allows us to define an operation for a class or a class hierarchy without changing the classes of the elements on which the operation is performed.</p>
<p style="text-align: justify;">Recall the <code>Airforce</code> class example from the <strong>Composite Pattern</strong> lesson. The <code>Airforce</code> class is a composite consisting of several different kinds of airplanes. It can be thought of as the <strong>object structure</strong> on whose elements we want to conduct operations. The <strong>elements</strong> would be the individual planes that make up the airforce object structure.</p>
<p style="text-align: justify;">Say if we are tasked with monitoring of various metrics for each aircraft such as remaining fuel, altitude and temperature then one option would be to build this functionality inside the abstract class of all the airplanes. The consequence would be that we'll need to implement the new methods in all the airplane subclasses. Now imagine, a few days later we are tasked with calculating the total price tag for the Airforce. We will now add another method to the abstract airplane class or interface that'll return the price for each individual plane and sum it across all the airplanes.</p>
<p style="text-align: justify;">There are several problems in our scenario, first the airplane class shouldn't be responsible for monitoring or pricing data. It should just represent the aircraft. With each additional functionality, we'll end up bloating our aircraft classes with new unrelated methods. The visitor patterns lets us out of this dilemma by suggesting to have a separate class that defines the new functionality related to the aircraft. The methods in the <code>AircraftVisitor</code> class would take the aircraft object as an argument and work on it. This saves us from changing our aircraft classes each time we need to support a new functionality relating to the <code>Airforce</code> class.</p>
<p style="text-align: justify;">Formally, the pattern is defined as <strong><i>defining operations to be performed on elements of an object structure without changing the classes of the elements it works on</i></strong>.</p>
<p style="text-align: justify;">The pattern is suitable in scenarios, where the object structure class or the classes that make up its elements don't change often but new operations over the object structure are desired.</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">Visitor</li>
<li style="text-align: justify;">Concrete Visitor</li>
<li style="text-align: justify;">Element</li>
<li style="text-align: justify;">Concrete Element</li>
<li style="text-align: justify;">Object Structure</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_behavioral/gof_behavioral_visitor_transition.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">Let's revisit our airforce example. The airforce class is the object structure on which we desire to introduce two new operations, one for collecting metrics for all the planes and two the cost of each aircraft. Let's see the <code>Airforce</code></p>
<pre>
public class Airforce {

    // Holds a collection of planes
    private Collection<IAircraft> planes = new ArrayList<>();

    // Returns an iterator to its collection of planes
    public Iterator<IAircraft> getIterator() {
        return planes.iterator();
    }
}
</pre>
<p style="text-align: justify;">We'll consider two types of airplanes, the <code>F16</code> and <code>Boeing747</code>. The interface defines an abstract <code>accept(IAircraftVisitor visitor)</code> method that must be implemented by all derived classes. This method allows the visitor to access the concrete class's interface, as you'll shortly see. The listing comes below:</p>
<pre>
public interface IAircraft {
    // Each concrete element class is expected to define the accept method
    public void accept(IAircraftVisitor visitor);
}
</pre>

<pre>
public class F16 implements IAircraft {
    @Override
    public void accept(IAircraftVisitor visitor) {
        visitor.visitF16(this);
    }
}
</pre>

<pre>
public class Boeing747 implements IAircraft{
    @Override
    public void accept(IAircraftVisitor visitor) {
        visitor.visitBoeing747(this);
    }
}
</pre>
<p style="text-align: justify;">Now we'll define the interface <code>IVisitor</code> and the two concrete visitors.</p>
<pre>
public interface IAircraftVisitor {
    void visitF16(F16 f16);
    void visitBoeing747(Boeing747 boeing747);
}
</pre>
<p style="text-align: justify;">Notice how the visitor interface defines a visit method for each of the concrete types that make up the object structure. Say if a new airplane <strong>C-130</strong> was added to the object structure then the <code>IAircraftVisitor</code> would need to introduce a new method <code>visitC130</code>. The visitor interface allows each aircraft to pass itself to the visitor by calling the correponding visit method for its class on the visitor object. The visitor classes are given below:</p>
<pre>
public class MetricsVisitor implements IAircraftVisitor {
    public void visitF16(F16 f16){
        // Logic to get metrics for F16
    }

    public void visitBoeing747(Boeing747 boeing747) {
        // Logic to get metrics for Boeing 747
    }

    public void printAccumulatedResults(){

    }
}
</pre>

<pre>
public class PriceVisitor implements IAircraftVisitor {
    @Override
    public void visitF16(F16 f16) {
        // Logic to get price for F16
    }

    @Override
    public void visitBoeing747(Boeing747 boeing747) {
        // Logic to get price for Boeing 747
    }

    public void printAccumulatedResults() {

    }
}
</pre>
<p style="text-align: justify;">Note that each visitor can invoke methods specific to each concrete class. Even though the two airplane classes share the same interface, the pattern allows us to work with classes that are unrelated or don't share a common interface. Finally, the client code will look like below:</p>
<pre>
public class Client {
    public void main(Airforce airforce) {
        Iterator<IAircraft> planes = airforce.getIterator();
        MetricsVisitor aircraftVisitor = new MetricsVisitor();
        while (planes.hasNext()){
            planes.next().accept(aircraftVisitor);
        }
        aircraftVisitor.printAccumulatedResults();
    }
}
</pre>
<p style="text-align: justify;">If we want to define a new operation on the object structure, then it is as easy as adding a new visitor class.</p>
<p style="text-align: justify;">Each object structure will have an associated visitor class. This visitor interface will need to declare a visitConcreteElement operation for each class of concreteElement defining the object structure. Each visit method on the visitor interface will need to declare its argument to be a particular concreteElement, allowing the visitor to access the interface of the concreteElement directly.</p>

<h2>Double Dispatch</h2>
<p style="text-align: justify;">Take a look at the following code snippet and run it. Even though we save the reference for the <code>BetterF16</code> object in a variable of the super class <code>F16</code>, the outputs are printed for each of the object types correctly. This is an example of dynamic dispatch where Java determines at runtime what class an instance belongs to and chooses the appropriate, possibly overridden, method.</p>
<pre>
class Demonstration {
    public static void main( String args[] ) {
        F16 f16 = new F16();
        f16.whoAmI();

        System.out.println();

        // Reference for the derived object
        // is held in the superclass type
        F16 betterF16 = new BetterF16();
        betterF16.whoAmI();
    }
}

class F16 {
    public void whoAmI(){
        System.out.print("I am the mighty F-16.");
    }
}

class BetterF16 extends F16 {
    public void whoAmI(){
        System.out.print("I am the better than the mighty F-16.");
    }
}
</pre>
<p style="text-align: justify;">Now consider the below code snippet. We add a method <code>fire()</code> which takes in an object of type <code>Missile</code>. We overload the <code>fire()</code> method with an object of a derived class <code>BetterMissile</code>.</p>
<pre>
class Demonstration {
    public static void main( String args[] ) {
        F16 f16 = new F16();
        F16 betterF16 = new BetterF16();
        Missile missile = new Missile();
        Missile betterMissile = new BetterMissile();

        System.out.println("Expected output");
        f16.fireMissile(missile);
        betterF16.fireMissile(missile);
        System.out.println();

        System.out.println("Failed double dispatch attempt");
        f16.fireMissile(betterMissile);
        betterF16.fireMissile(betterMissile);
        System.out.println();

        System.out.println("Expected output");
        BetterMissile reallyBetterMissile = new BetterMissile();
        f16.fireMissile(reallyBetterMissile);
        betterF16.fireMissile(reallyBetterMissile);
        System.out.println();
    }
}

class BetterMissile extends Missile {

    @Override
    public String explode() {
        return " very very big baaam";
    }
}

class Missile {

    public String explode() {
        return " baaaam";
    }
}

class BetterF16 extends F16 {

    public String whoAmI() {
        return "Better F16";
    }
}

class F16 {

    public String whoAmI() {
        return "F16";
    }

    public void fireMissile(Missile missile) {
        System.out.println(whoAmI() + " fired ordinary missile: " + missile.explode());
    }

    public void fireMissile(BetterMissile missile) {
        System.out.println(whoAmI() + " fired better missile: " + missile.explode());
    }
}
</pre>
<p style="text-align: justify;">If you run the above code the lines 14-15 call the <code>fire()</code> with a reference of type <code>Missile</code> pointing to an object of type <code>BetterMissile</code>. The JVM doesn't check the type of the object at runtime and invokes <code>fire(Missile)</code> instead of <code>fire(BetterMissile)</code>. Languages which support double dispatch or multiple dispatch, would have invoked the right intended method <code>fire(BetterMissile)</code>.</p>

<p style="text-align: justify;">In the visitor pattern the <code>accept()</code> method simulates the double dispatch effect.</p>
<pre>
public void accept(IAircraftVisitor visitor) {
    visitor.visitF16(this);
}
</pre>
<p style="text-align: justify;">The first dispatch is when an airplane object calls the accept method. If the airplane object is of type <code>F16</code> or <code>Boeing747</code>, the corresponding accept method on those classes is called. The second dispatch happens when the visitor interface reference passed into the accept method correctly calls the corresponding visit method on the concrete visitor object the reference points to.</p>

<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">The visitor pattern cautions that if one expects the object structure classes to change often then it might be a good idea to just keep the new functionality within the visited classes instead of using the visitor pattern. The key consideration in applying the Visitor pattern is if the algorithm applied over an object structure is more likely to change or the classes of objects that make up the structure. The visitor class hierarchy can be difficult to maintain when new concrete element classes are added frequently. In such cases, it's probably easier just to define operations on the classes that make up the structure. If the Element class hierarchy is stable, but you are continually adding operations or changing algorithms, then the visitor pattern will help you manage the changes.</p>
</li>
<li>
<p style="text-align: justify;">Adding new concrete classes will require modifying all the visitor classes, which makes it hard to add new types to the object structure.</p>
</li>
<li>
<p style="text-align: justify;">Iteration over the object structure can happen via an iterator, inside the object structure or by the visitor.</p>
</li>
<li>
<p style="text-align: justify;">Note that an iterator requires that a composite be made up of elements that all conform to the same base class or interface, whereas a visitor can visit all the elements of a composite even if they are unrelated.</p>
</li>
<li>
<p style="text-align: justify;">Languages that support double or multiple dispatch lessen the need for the visitor pattern.</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },

    {   /* Null Object */
        id : 12,
        "text" : function(){/*
<h2>What is it?</h2>
<p style="text-align: justify;">TODO</p>

<h2>Class Diagram</h2>
<p style="text-align: justify;">The class diagram consists of the following entities:</p>
<ul>
<li style="text-align: justify;">TODO</li>
</ul>
<p style="text-align: center;"><img src="data/system_design/images/gof_behavioral/TODO.png" alt="" /></p>

<h2>Example</h2>
<p style="text-align: justify;">TODO</p>

<h2>Caveats</h2>
<ul>
<li>
<p style="text-align: justify;">TODO</p>
</li>
</ul>
    */}.toString().slice(14,-3)
    },
];
var oops_que = [
	{
		question : "Association, Aggregation & Composition",
		tags : ["UML", "Association", "Aggregation", "Composition", "is-a", "has-a", "part-whole"]
	},
	{
		question : "Access modifiers",
		tags : ["access", "modifiers", "public", "protected", "default", "private"]
	},
	{
		question : "Method Overloading",
		tags : ["overloading", "compile time", "polymorphism"]
	},
	{
		question : "Method Overriding",
		tags : ["overriding", "run time", "polymorphism"]
	},
	{
		question : "Overriding Vs Hiding",
		tags : ["overriding", "hiding", "static", "dynamic method lookup", "early binding", "late binding"]
	},
	{
		question : "Interfaces Vs Abstract Classes",
		tags : ["interface", "abstract class"]
	},
	{
		question : "Deep copy Vs Shallow copy",
		tags : ["deep copy", "shallow copy", "copy", "cloning"]
	},
	{
		question : "Creating an Immutable class",
		tags : ["immutable"]
	}
]

var oops_ans = [
	{   /* UML Association vs Aggregation vs Composition */
		"text" : function(){/*
<h1>Association Vs Aggregation Vs Composition Vs Inheritance</h1>
<p style="text-align: justify;">Consider the classes of the following objects: pets, dogs, tails, owners.</p>
<table>
<tr>
<td style="vertical-align: top;"><img src="data/java/images/oops/1.association_aggregation_composition.png" alt="" width="250" height="200"/></td>
<td style="vertical-align: top;">
<p style="text-align: justify;">We see the following relationships:</p>
<ul>
<li>Owners <i>feed</i> Pets, Pets <i>please</i> Owners (association)</li>
<li>Tail is a <strong>part of</strong> both Dogs and Cats (aggregation / composition)</li>
<li>Cat <strong>is-a</strong> Pet (inheritance / generalization)</li>
</ul>
</td>
</tr>
</table>


<p style="text-align: justify;">The figure below shows the three types of association connectors: association,
aggregation, and composition:</p>
<img src="data/java/images/oops/2.association.png" alt="" />
<p>&nbsp;</p>
<img src="data/java/images/oops/3.aggregation.png" alt="" />
<p>&nbsp;</p>
<img src="data/java/images/oops/4.composition.png" alt="" />
<p style="text-align: justify;">The figure below shows a generalization</p>
<img src="data/java/images/oops/5.generalisation.png" alt="" />
<p>&nbsp;</p>

<h2>Association</h2>
<p style="text-align: justify;">If two classes in a model need to communicate with each other, there must be a link
between them, and that can be represented by an association (connector). Association can be represented by a line
between these classes with an arrow indicating the navigation direction. In case an arrow is on both sides, the
association is known as a bidirectional association. We can indicate the multiplicity of an association by adding
multiplicity adornments to the line denoting the association.</p>

<p style="text-align: justify;"><strong>One to Many</strong>: A single student can associate with multiple teachers:</p>
<img src="data/java/images/oops/6.one_to_many.png" alt="" />

<p style="text-align: justify;"><strong>Many to One</strong>: The example indicates that every Instructor has one or more Students:</p>
<img src="data/java/images/oops/7.many_to_one.png" alt="" />

<p style="text-align: justify;"><strong>Manay to Many</strong>: We can also indicate the behavior of an object in an
association (i.e., the role of an object) using role names.</p>
<img src="data/java/images/oops/8.many_to_many.png" alt="" />
<p>&nbsp;</p>

<h2>Association vs Aggregation vs Composition</h2>
<p style="text-align: justify;">Aggregation and Composition are specific cases of association. In both aggregation and
composition, a class's object (<strong>whole</strong>) <i>owns</i> another class's object (<strong>part</strong>).
But there is a subtle difference:</p>
<ul>
<li><p style="text-align: justify;"><strong>Aggregation</strong> implies a relationship where the <i>part</i> can exist
independently without the <i>whole</i>. E.g., Consider <strong>ClassRoom</strong> (whole) and <strong>Student</strong> (part).
Delete the <strong>ClassRoom</strong> and the <strong>Student</strong> can still exist.</p></li>
<li><p style="text-align: justify;"><strong>Composition</strong> implies a relationship where the <i>part</i> cannot
exist without the <i>whole</i>. E.g., Consider <strong>House</strong> (whole) and <strong>Room</strong> (part).
<strong>Room</strong> can't exist without a <strong>House</strong>.</p></li>
</ul>
<p>&nbsp;</p>

<h2>Composition Example</h2>
<p style="text-align: justify;">We should be more specific and use the composition link in cases where, in addition to
the <i>part-whole</i> relationship between Class A and Class B - there's a strong lifecycle dependency between the two,
meaning that when Class A is deleted then Class B is also deleted as a result</p>
<img src="data/java/images/oops/9.composition_example.png" alt="" />
<p>&nbsp;</p>

<h2>Aggregation Example</h2>
<p style="text-align: justify;">It's important to note that the aggregation link doesn't state in any way that Class A
owns Class B, nor that there's a parent-child relationship (when parent deleted all its child's are being deleted as a
result) between the two. Actually, quite the opposite! The aggregation link is usually used to stress the point that
Class A instance is not the exclusive container of Class B instance, as in fact the same Class B instance has another
container/s.</p>
<img src="data/java/images/oops/10.aggregation_example.png" alt="" />
<p>&nbsp;</p>

<p style="text-align: justify;">To sum it up, association is a very generic term used to represent when one class uses
the functionalities provided by another class. We say it's a <strong>composition</strong> if one parent class object
owns another child class object and that child class object cannot meaningfully exist without the parent class object;
if it can then it is called <strong>Aggregation</strong>.</p>
<p>&nbsp;</p>

<h2>Generalization vs Specialization</h2>
<p style="text-align: justify;"><strong>Generalization</strong> is a mechanism for combining similar classes of objects
into a single, more general class. Generalization identifies commonalities among a set of entities. The commonality may
be of attributes, behavior, or both. In other words, a superclass has the most general attributes, operations, and
relationships that may be shared with subclasses. A subclass may have more specialized attributes and operations.</p>

<p style="text-align: justify;"><strong>Specialization</strong> is the reverse process of Generalization means creating
new sub-classes from an existing class.</p>

<p style="text-align: justify;">For Example, a Bank Account is of two types - Savings Account and Credit Card Account.
Savings Account and Credit Card Account inherit the generalized properties like Account Number, Account Balance, etc.
from a Bank Account and also have their specialized properties like unsettled payment etc.</p>
<img src="data/java/images/oops/11.Generalization_Specialization.png" alt="" />
<p>&nbsp;</p>

<h2>Generalization vs Inheritance</h2>
<p style="text-align: justify;"><strong>Generalization</strong> is the term that we use to denote abstraction of common
properties into a base class. When we implement Generalization in java, it is called <strong>Inheritance</strong> instead.
Generalization and inheritance are the same. The terminology just differs depending on the context where it is being used.</p>
<p>&nbsp;</p>

<table>
<tr>
<td style="vertical-align: top;"><img src="data/java/images/oops/12.uml.png" alt="" /></td>
<td style="vertical-align: top;">
<p style="text-align: justify;">There are 2 fundamental mechanisms for building new classes from existing ones:</p>
<p style="text-align: justify;"><strong>Inheritance (<i>is-a</i> relationship)</strong>: the new class has all the
properties and behaviors of super-class, but it also has the additional capability of its own.</p>
<p style="text-align: justify;"><strong>Aggregation/Composition (<i>part-whole</i> relationship)</strong>: When building new classes
from existing ones using Aggregation/Composition, a composite object is built from other constituent objects that are its parts.</p>

<h3 style="text-align: justify;">Aggregation and Composition</h3>
<p style="text-align: justify;">Both aggregation and composition are special types of associations. The only difference being:</p>
<p style="padding-left: 30px; text-align: justify;"><strong>Aggregation</strong>: without 'whole', 'part' can exist.</p>
<p style="padding-left: 30px; text-align: justify;"><strong>Composition</strong>: whithout 'whole', 'part' can't exist.</p>
</td>
</tr>
</table>
		*/}.toString().slice(14,-3)
	},
	{
		"text" : function(){/*
<h3 style="text-align: justify;"><span style="text-decoration: underline;">Access Modifiers</span></h3>
<p style="text-align: justify;"><strong>public</strong> - accessible from anywhere</p>
<p style="text-align: justify;"><strong>protected</strong> - Accessible by all classes in the same package + accessible by all sub-classes</p>
<p style="text-align: justify;"><strong>default</strong> - accessible only by classes in the same package</p>
<p style="text-align: justify;"><strong>private</strong> - accessible only by the same class</p>
		*/}.toString().slice(14,-3)
	},
	
	{
		"text" : function(){/*
<h3 style="text-align: justify;"><span style="text-decoration: underline;">Method Overloading</span></h3>
<p style="text-align: justify;">Method overloading occurs when two or more methods in the same class have the exact same name but different parameters.</p>
<ol style="text-align: justify;">
<li>Method name is same but the parameter list differs (in type, order or number)</li>
<li>As return type is not a part of the method signature, having different return types is not enough to overload methods.</li>
</ol>
<p style="text-align: justify;">Overloading is a <strong>compile-time polyphormism</strong>. This just means that the compiler determines whether the given method is correctly overloaded, and if not a compiler error is returned.</p>
		*/}.toString().slice(14,-3)
	},
	
	{
		"text" : function(){/*
<p style="text-align: justify;">Method overriding occurs when a sub-class requires a different definition for an inherited method from the super-class, then that method can be redefined in the derived class.</p>
<p style="text-align: justify;">The new method definition:</p>
<ol style="text-align: justify;">
<li>Must have the same method signature (method name + parameters) and the same return type.</li>
<li>Cannot narrow the accessibility of the method, but it can widen it.</li>
<li>Can only specify all or none (or a subset) of the exception classes (including their sub-classes) specified in the throws clause of the overridden method in the super-class.</li>
</ol>
<p style="text-align: justify;">Method overriding is a <strong>runtime polymorphism</strong> as opposed to method overloading. Adding the annotation <strong>@Override</strong> to the overriding method tells the compiler that this method is intended to override another.</p>
<pre>public class Oops {

	public static void main(String[] args) {
		String s = new String("java");				// (1)
		System.out.println(s.getClass());			// (2)
		System.out.println(s.length());				// (3)

		Object obj = s;						// (4)

		// System.out.println(obj.length());			   (5) Compile-time error
		System.out.println(obj.equals("java"));			// (6)
		System.out.println(obj.getClass());			// (7)

		s = (String) obj;					// (8)
		System.out.println(s.equals("unix"));			// (9)
	}
}
</pre>
<p style="text-align: justify;"><span style="text-decoration: underline;">Output:</span></p>
<p style="text-align: justify;">class java.lang.String<br />4<br />true<br />class java.lang.String<br />false</p>
<p style="text-align: justify;">&nbsp;</p>
		*/}.toString().slice(14,-3)
	},
	
	{
		"text" : function(){/*
<h2 style="text-align: justify;">Overriding Vs Hiding</h2>
<p style="text-align: justify;">If a subclass defines a static method with the same signature as a static method in the superclass, then the method in the subclass <em><strong>hides</strong> </em>the one in the superclass.</p>
<ol style="text-align: justify;">
<li>The version of the overridden instance method that gets invoked is the one in the subclass.</li>
<li>The version of the hidden static method that gets invoked depends on whether it is invoked from the superclass or the subclass.</li>
</ol>
<p style="text-align: justify;">Consider an example that contains two classes. The first is Animal, which contains one instance method and one static method:</p>
<pre>public class Animal {
	public static void something() {
		System.out.println("animal does something");
	}

	public void eat() {
		System.out.println("Animal eats");
	}
}
</pre>
<p style="text-align: justify;">The second class Dog which is a subclass of Animal:</p>
<pre>public class Dog extends Animal {
		public static void something() {
		System.out.println("dog does something");
	}

	public void eat() {
		System.out.println("dog eats");
	}
}
</pre>
<p style="text-align: justify;"><strong>Overriding</strong> supports <strong>late binding</strong>. Therefore, which method will be invoked is decided at runtime. It is for non-static methods.<br /><strong>Hiding</strong> is for all other members (static methods, instance members, static members). It is based on the <strong>early binding</strong>. The method or member to be called or used is decided during compile time.</p>
<pre>public class Main {
	public static void main(String[] args) {
		Animal a1 = new Animal();
		Animal a2 = new Dog();
		
		a1.eat();
		a1.something();
		
		a2.eat();
		a2.something();
	}
}
</pre>
<ol style="text-align: justify;">
<li>Compiler will check the delcaration of the reference variable's class. If the method to be executed is not present in the class, it will give compile-time error.</li>
<li>If the method is present, then it does a <strong>dynamic method lookup</strong>:
<ul>
<li>If it's an instance method then it will invoke the method if the actual object denoted by the reference variable at runtime.</li>
<li>It it's a static method then it will invoke the method from the reference variable's class.</li>
</ul>
</li>
</ol>
<p style="text-align: justify;"><span style="text-decoration: underline;">output:</span></p>
<p style="text-align: justify;">Animal eats<br />animal does something<br />dog eats<br />animal does something<br /><br /></p>
<p style="text-align: justify;">&nbsp;</p>
		*/}.toString().slice(14,-3)
	},
	
	{
		"text" : function(){/*
<h2 style="text-align: justify;"><span style="text-decoration: underline;">When to use Interfaces</span></h2>
<p style="text-align: justify;">I use interfaces when I see that something in my design will change frequently. For example, the<strong> Strategy pattern</strong> lets you swap new algorithms into your program at runtime without altering the objects that use them.<br />The strategy pattern:</p>
<ol style="text-align: justify;">
<li>defines a family of algorithms (the interface)</li>
<li>encapsulates each algorithm (the concrete implementations of the interface)</li>
<li>makes the algorithms interchangeable within that family.</li>
</ol>
<p style="text-align: justify;">For instance, a <strong>media player</strong> might know how to play CDs, MP3s, and wav files. Of course, you don't want to hardcode those playback algorithms into the player; that will make it difficult to add a new format like AVI. Furthermore, your code will be littered with useless switch-case statements and you will need to update those case statements each time you add a new algorithm. All in all, this is not a very object-oriented way to program. With the Strategy pattern, you can simply encapsulate the algorithm behind an object. If you do that, you can provide new media plug-ins at any time. Let's call the plug-in interface Media which would have one method: play(). So to add a new algorithm, we simply implement this interface in our new algorithm class. Now, when the MediaPlayer encounters a new media type, it simply delegates the playing of the stream to our media strategy.</p>
<h2 style="text-align: justify;"><br /><span style="text-decoration: underline;">When to use Abstract classes</span></h2>
<p style="text-align: justify;">You may have abstract classes that provide some default behaviors. Abstract classes let you define some behaviors; they force your subclasses to provide others. For example, if you are building an application framework, an abstract class may provide default services such as event and message handling. However, there could be some application-specific functionality that only your application can perform. Such functionality might include startup and shutdown tasks, which are often application-dependent. So, instead of trying to define that behavior itself, the abstract base class can simply declare the shutdown and startup methods as abstract. When it is time to start up, the abstract class can call the startup method. And the JVM will call the method defined by the child class.</p>
		*/}.toString().slice(14,-3)
	},
	
	{
		"text" : function(){/*
<p style="text-align: justify;">Let us Assume an object- <strong>obj1</strong>, that contains two objects, <strong>containedObj1</strong> and <strong>containedObj2</strong>.</p>
<p style="text-align: justify;">&nbsp;<img src="data/java/images/object-copy.gif" alt="" width="289" height="173" /></p>
<h4 style="text-align: justify;">Shallow Copy</h4>
<p style="text-align: justify;">Shallow copy duplicates as little as possible. A shallow copy of a collection is a copy of the collection structure, not it's elements. It creates a new instance of the same class and copies all the fields to the new instance and returns it. The java.lang.Object class defines a clone() method that will (assuming the subclass implements the java.lang.Cloneable interface) return a copy of the object. While Java classes are free to override this method to do more complex kinds of cloning, the default behavior of clone() is to return a shallow copy of the object. This means that the values of all of the origical object&rsquo;s fields are copied to the fields of the new object.</p>
<p style="text-align: justify;"><img src="data/java/images/shallow-copy.gif" alt="" width="424" height="172" /></p>
<pre>
public class ShallowCopy implements Cloneable {

    private Employee employee;

    public ShallowCopy() {
        employee = new Employee(100, "Rahul");
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    @Override
    public String toString() {
        return "ShallowCopy{" +
                "employee=" + employee +
                '}';
    }

    public static void main(String[] args) throws CloneNotSupportedException {
        ShallowCopy obj1 = new ShallowCopy();
        ShallowCopy obj2 = (ShallowCopy) obj1.clone();
        obj1.setEmployee(new Employee(200, "Rahul Mittal"));

        System.out.println(obj1);
        System.out.println(obj2);
    }
}
</pre>
<h4 style="text-align: justify;">Deep Copy</h4>
<p style="text-align: justify;">Deep copy duplicates everything. A deep copy makes a distinct copy of each of the object&rsquo;s fields, recursing through the entire graph of other objects referenced by the object being copied. The Java API provides no deep-copy equivalent to Object.clone().</p>
<p style="text-align: justify;"><img src="data/java/images/deep-copy.gif" alt="" width="420" height="173" /></p>
<p style="text-align: justify;">A common solution to the deep copy problem is to use <strong>Serialization</strong>. The idea is simple: Write the object to an array using <strong>ObjectOutputStream</strong> and then use <strong>ObjectInputStream</strong> to reconsistute a copy of the object. The result will be a completely distinct object, with completely distinct referenced objects. Serialization takes care of all of the details: superclass fields, following object graphs, and handling repeated references to the same object within the graph.</p>
<pre>
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public class DeepCopy implements Serializable {
    private Employee employee;

    public DeepCopy() {
        employee = new Employee(100, "Rahul");
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    @Override
    public String toString() {
        return "DeepCopy{" +
                "employee=" + employee +
                '}';
    }

    private static DeepCopy copy(DeepCopy original) throws IOException, ClassNotFoundException {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ObjectOutputStream oos = new ObjectOutputStream(bos);
        oos.writeObject(original);
        oos.flush();
        oos.close();

        ByteArrayInputStream bis = new ByteArrayInputStream(bos.toByteArray());
        ObjectInputStream ois = new ObjectInputStream(bis);
        DeepCopy cloned = (DeepCopy) ois.readObject();
        ois.close();
        bos.close();
        bis.close();
        return cloned;
    }

    public static void main(String[] args) throws IOException, ClassNotFoundException {
        DeepCopy obj = new DeepCopy();
        DeepCopy cloned = DeepCopy.copy(obj);
        obj.setEmployee(new Employee(200, "Rahul Mittal"));

        System.out.println(obj);
        System.out.println(cloned);
    }
}
</pre>
<p style="text-align: justify;">Reference:&nbsp;<a href="http://javatechniques.com/blog/faster-deep-copies-of-java-objects/" target="_blank">Faster deep copies of java Object</a></p>
		*/}.toString().slice(14,-3)
	},
	
	{
		"text" : function(){/*
<p style="text-align: justify;">An immutable class is one whose state cannot be modified once created. There are certain guidelines to create an class immutable. Immutable object not only guarantees safe publication of object&rsquo;s state, but also can be shared among other threads without any external synchronization. JDK itself contains several immutable classes like String, Integer and other wrapper classes. Any modification on immutable object will result in another immutable object. All modifications in a String object results in a new String object.</p>
<p style="text-align: justify;"><strong>Creating an immutable class</strong></p>
<ol style="text-align: justify;">
<li>Don&rsquo;t allow subclasses to override methods. Declare the class as <strong>final</strong>.</li>
<li>Make all fields <strong>private</strong> and <strong>final</strong>.</li>
<li>Don&rsquo;t provide <strong>setter</strong> methods &mdash; methods that modify fields or objects referred to by fields.</li>
<li>All parameterized <strong>constructors</strong> must make a <strong>defensive copy</strong> of parameters before settings the object's state.</li>
<li>All <strong>getter</strong> methods must return a <strong>defensive copy</strong>.</li>
</ol>
<p style="text-align: justify;">&nbsp;</p>
		*/}.toString().slice(14,-3)
	}

]
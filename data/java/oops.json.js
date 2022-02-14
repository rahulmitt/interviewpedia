var oops_que = [
	{
		id : 1,
		question : "Association, Aggregation & Composition",
		tags : ["UML", "Association", "Aggregation", "Composition", "is-a", "has-a", "part-whole"]
	},

	{
		id : 2,
		question : "Access modifiers",
		tags : ["access modifiers", "public", "protected", "default", "private"]
	},

	{
		id : 3,
		question : "Method Overloading",
		tags : ["overloading", "compile time polymorphism"]
	},

	{
		id : 4,
		question : "Method Overriding",
		tags : ["overriding", "runtime polymorphism", "hiding", "early binding", "late binding", "dynamic method lookup"]
	},

	{
		id : 5,
		question : "Overriding Vs Hiding",
		tags : ["overriding", "hiding", "early binding", "late binding"]
	},

	{
		id : 6,
		question : "Interfaces Vs Abstract Classes",
		tags : ["interface", "abstract class"]
	},

	{
		id : 7,
		question : "Deep copy Vs Shallow copy",
		tags : ["deep copy", "shallow copy", "copy", "cloning"]
	},

	{
		id : 8,
		question : "Creating an Immutable class",
		tags : ["immutable"]
	},

	{
		id : 9,
		question : "Pass by Value",
		tags : ["Pass by Value"]
	},

	{
		id : 10,
		question : "Generics",
		tags : ["Generics"]
	},

	{
		id : 11,
		question : "Reflection",
		tags : ["Reflection"]
	},

]

var oops_ans = [
	{   /* UML Association vs Aggregation vs Composition */
		id : 1,
		"text" : function(){/*
<p style="text-align: justify;">Consider the classes of the following objects: Pets, Dogs, Tails, Owners.</p>
<table>

<tr>
<td style="vertical-align: top;">
<img src="data/java/images/oops/1.association_aggregation_composition.png" alt="" width="250" height="200"/>
</td>

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

<p style="text-align: justify;"><strong>Many to Many</strong>: We can also indicate the behavior of an object in an
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
		id : 2,
		"text" : function(){/*
<h3>Access modifiers</h3>
<p style="text-align: justify;"><strong>public</strong> - accessible from anywhere</p>
<p style="text-align: justify;"><strong>protected</strong> - Accessible by all classes in the same package + accessible by all sub-classes</p>
<p style="text-align: justify;"><strong>default</strong> - accessible only by classes in the same package</p>
<p style="text-align: justify;"><strong>private</strong> - accessible only by the same class</p>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 3,
		"text" : function(){/*
<h3>Method Overloading</h3>
<p>Method overloading occurs when two or more methods in the same class have the exact same name but different parameters.</p>
<ol style="text-align: justify;">
<li>Method name is same but the parameter list differs (in type, order or number)</li>
<li>As return type is not a part of the method signature, having different return types is not enough to overload methods.</li>
</ol>
<p style="text-align: justify;">Overloading is a <strong>compile-time polymorphism</strong>. This just means that the compiler
determines whether the given method is correctly overloaded, and if not a compiler error is returned.</p>
<pre>
public class MethodOverloading {

    public static void main(String[] args) {
        A a = new A();
        a.compute();
        a.compute(10);
        a.compute(10, 10.5f);

        B b = new B();
        b.compute();
        b.compute(10);
        b.compute(10, 10.5f);

        // Ambiguous method call. Cast some params to resolve ambiguity
        // b.compute(null, null);
    }

    private static class A {
        public void compute() {

        }

        public void compute(int i) {

        }

        public float compute(Integer i, Float j) {
            return i + j;
        }

        public float compute(int i, float j) {
            return i + j;
        }

        // Compilation error: compute(int, float) is already defined in 'MethodOverloading.A'
        // public Long compute(int i, float j) {
        //    return null;
        // }
    }

    private static class B extends A {
        public long compute(Long i, Long j) {
            return i + j;
        }
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 4,
		"text" : function(){/*
<h3>Method Overriding</h3>
<p style="text-align: justify;">Method overriding occurs when a sub-class requires a different definition for an inherited
method from the super-class, then that method can be redefined in the derived class.</p>
<p style="text-align: justify;">The new method definition:</p>
<ol style="text-align: justify;">
<li>Must have the same <b>method signature</b> (method name + parameters) and the same <b>return type</b>.</li>
<li>Cannot narrow the <b>accessibility</b> of the method, but it can widen it.</li>
<li>Can only specify <b>all or none (or a subset) of the exception</b> classes (including their sub-classes) specified
in the throws clause of the overridden method in the super-class.</li>
</ol>
<p style="text-align: justify;">Method overriding is a <strong>runtime polymorphism</strong> as opposed to method overloading.
Adding the annotation <code>@Override</code> to the overriding method tells the compiler that this method is intended to override another.</p>

<h3>Method Hiding</h3>
<p style="text-align: justify;">If a subclass defines a <b>static method</b> with the same signature as a static method
in the superclass, then the method in the subclass <b>hides</b> the one in the superclass.</p>
<ol style="text-align: justify;">
<li>The version of the <b>overridden instance method</b> that gets invoked is the one in the <b>subclass</b>.</li>
<li>The version of the <b>hidden static method</b> that gets invoked depends on the <b>reference</b> — whether the static method is invoked from the superclass or the subclass.</li>
</ol>
<p style="text-align: justify;"><b>Overriding</b> supports <b>late binding</b>. Therefore, which method will be invoked is decided at runtime. It is for <b>instance methods</b> only.<br />
<b>Hiding</b> is for all other members — static methods, instance members, static members. It is based on the <b>early binding</b>. The method or member to be called or used is decided during compile time.</p>

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
<li>Compiler will check the declaration of the reference variable's class. If the method to be executed is not present in the class, it will give compile-time error.</li>
<li>If the method is present, then it does a <strong>dynamic method lookup</strong>:
<ul>
<li>If it's an instance method then it will invoke the method if the actual object denoted by the reference variable at runtime.</li>
<li>It it's a static method then it will invoke the method from the reference variable's class.</li>
</ul>
</li>
</ol>

<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
Animal eats<br/>
animal does something<br/>
dog eats<br/>
animal does something<br/>
</tr></td>
</table>

		*/}.toString().slice(14,-3)
	},
	
	{
		id : 5,
		"text" : function(){/*
<h2 style="text-align: justify;">Overriding Vs Hiding</h2>

<pre>
public class Overriding_vs_Hiding {

    public static void main(String[] args) {

        Parent parentRef = new Child();
        System.out.println("parentRef.publicInstanceVariable: " + parentRef.publicInstanceVariable);
        System.out.println("parentRef.protectedInstanceVariable: " + parentRef.protectedInstanceVariable);
        System.out.println("parentRef.defaultInstanceVariable: " + parentRef.defaultInstanceVariable);
        System.out.println("parentRef.privateInstanceVariable: " + parentRef.privateInstanceVariable);

        System.out.println();

        System.out.println("parentRef.publicStaticVariable: " + parentRef.publicStaticVariable);
        System.out.println("parentRef.protectedStaticVariable: " + parentRef.protectedStaticVariable);
        System.out.println("parentRef.defaultStaticVariable: " + parentRef.defaultStaticVariable);
        System.out.println("parentRef.privateStaticVariable: " + parentRef.privateStaticVariable);

        System.out.println();

        parentRef.publicInstanceMethod();
        parentRef.protectedInstanceMethod();
        parentRef.defaultInstanceMethod();
        parentRef.privateInstanceMethod();
        parentRef.publicStaticMethod();
        parentRef.protectedStaticMethod();
        parentRef.defaultStaticMethod();
        parentRef.privatStaticMethod();
        parentRef.staticMethodNotHiddenByChild();

        System.out.println("-------------------------------------------------------------------------------");

        Child childRef = new Child();
        System.out.println("childRef.publicInstanceVariable: " + childRef.publicInstanceVariable);
        System.out.println("childRef.protectedInstanceVariable: " + childRef.protectedInstanceVariable);
        System.out.println("childRef.defaultInstanceVariable: " + childRef.defaultInstanceVariable);
        System.out.println("childRef.privateInstanceVariable: " + childRef.privateInstanceVariable);

        System.out.println();

        System.out.println("childRef.publicStaticVariable: " + childRef.publicStaticVariable);
        System.out.println("childRef.protectedStaticVariable: " + childRef.protectedStaticVariable);
        System.out.println("childRef.defaultStaticVariable: " + childRef.defaultStaticVariable);
        System.out.println("childRef.privateStaticVariable: " + childRef.privateStaticVariable);

        System.out.println();

        childRef.publicInstanceMethod();
        childRef.protectedInstanceMethod();
        childRef.defaultInstanceMethod();
        childRef.privateInstanceMethod();
        childRef.publicStaticMethod();
        childRef.protectedStaticMethod();
        childRef.defaultStaticMethod();
        childRef.privatStaticMethod();
        childRef.staticMethodNotHiddenByChild();
    }

    private static class Parent {

        public String publicInstanceVariable = "Parent - publicInstanceVariable";
        protected String protectedInstanceVariable = "Parent - protectedInstanceVariable";
        String defaultInstanceVariable = "Parent - defaultInstanceVariable";
        private String privateInstanceVariable = "Parent - privateInstanceVariable";

        public static String publicStaticVariable = "Parent - publicStaticVariable";
        protected static String protectedStaticVariable = "Parent - protectedStaticVariable";
        static String defaultStaticVariable = "Parent - defaultStaticVariable";
        private static String privateStaticVariable = "Parent - privateStaticVariable";


        public void publicInstanceMethod() {
            System.out.println("Parent - publicInstanceMethod");
        }

        public static void publicStaticMethod() {
            System.out.println("Parent - publicStaticMethod");
        }

        protected void protectedInstanceMethod() {
            System.out.println("Parent - protectedInstanceMethod");
        }

        protected static void protectedStaticMethod() {
            System.out.println("Parent - protectedStaticMethod");
        }

        void defaultInstanceMethod() {
            System.out.println("Parent - defaultInstanceMethod");
        }

        static void defaultStaticMethod() {
            System.out.println("Parent - defaultStaticMethod");
        }

        // private methods cannot be overridden
        private void privateInstanceMethod() {
            System.out.println("Parent - privateInstanceMethod");
        }

        private static void privatStaticMethod() {
            System.out.println("Parent - privatStaticMethod");
        }

        static void staticMethodNotHiddenByChild() {
            System.out.println("Parent - staticMethodNotHiddenByChild");
        }

        void eat(){}
    }

    private static class Child extends Parent {

        // public --> protected --> default --> private

        public String publicInstanceVariable = "Child - publicInstanceVariable";
        protected String protectedInstanceVariable = "Child - protectedInstanceVariable";
        String defaultInstanceVariable = "Child - defaultInstanceVariable";
        private String privateInstanceVariable = "Child - privateInstanceVariable";

        public static String publicStaticVariable = "Child - publicStaticVariable";
        protected static String protectedStaticVariable = "Child - protectedStaticVariable";
        static String defaultStaticVariable = "Child - defaultStaticVariable";
        private static String privateStaticVariable = "Child - privateStaticVariable";

        // This has to be public. Any attempt to assign a weaker access-modifier will give compile-time exception
        public void publicInstanceMethod() {
            System.out.println("Child - publicInstanceMethod");
        }

        // This has to be public. Any attempt to assign a weaker access-modifier will give compile-time exception
        public static void publicStaticMethod() {
            System.out.println("Child - publicStaticMethod");
        }

        // This has to be either public/protected. Any attempt to assign a weaker access-modifier will give compile-time exception
        protected void protectedInstanceMethod() {
            System.out.println("Child - protectedInstanceMethod");
        }

        // This has to be either public/protected. Any attempt to assign a weaker access-modifier will give compile-time exception
        protected static void protectedStaticMethod() {
            System.out.println("Child - protectedStaticMethod");
        }

        // This cannot be private. Any attempt to assign a weaker access-modifier will give compile-time exception
        void defaultInstanceMethod() {
            System.out.println("Child - defaultInstanceMethod");
        }

        // This cannot be private. Any attempt to assign a weaker access-modifier will give compile-time exception
        static void defaultStaticMethod() {
            System.out.println("Child - defaultStaticMethod");
        }

        // private methods are be overridden
        private void privateInstanceMethod() {
            System.out.println("Child - privateInstanceMethod");
        }

        private static void privatStaticMethod() {
            System.out.println("Child - privatStaticMethod");
        }

        // Compilation error: instance method in sub-class cannot override a static method in parent-class
        // public void staticMethodNotHiddenByChild() {}

        // Compilation error: static method in sub-class cannot override an instance method in parent-class
        // static void eat() {}
    }
}
</pre>

<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
parentRef.publicInstanceVariable: Parent - publicInstanceVariable</br>
parentRef.protectedInstanceVariable: Parent - protectedInstanceVariable</br>
parentRef.defaultInstanceVariable: Parent - defaultInstanceVariable</br>
parentRef.privateInstanceVariable: Parent - privateInstanceVariable</br>
</br>
parentRef.publicStaticVariable: Parent - publicStaticVariable</br>
parentRef.protectedStaticVariable: Parent - protectedStaticVariable</br>
parentRef.defaultStaticVariable: Parent - defaultStaticVariable</br>
parentRef.privateStaticVariable: Parent - privateStaticVariable</br>
</br>
Child - publicInstanceMethod</br>
Child - protectedInstanceMethod</br>
Child - defaultInstanceMethod</br>
Parent - privateInstanceMethod</br>
Parent - publicStaticMethod</br>
Parent - protectedStaticMethod</br>
Parent - defaultStaticMethod</br>
Parent - privatStaticMethod</br>
Parent - staticMethodNotHiddenByChild</br>
-------------------------------------------------------------------------------</br>
childRef.publicInstanceVariable: Child - publicInstanceVariable</br>
childRef.protectedInstanceVariable: Child - protectedInstanceVariable</br>
childRef.defaultInstanceVariable: Child - defaultInstanceVariable</br>
childRef.privateInstanceVariable: Child - privateInstanceVariable</br>
</br>
childRef.publicStaticVariable: Child - publicStaticVariable</br>
childRef.protectedStaticVariable: Child - protectedStaticVariable</br>
childRef.defaultStaticVariable: Child - defaultStaticVariable</br>
childRef.privateStaticVariable: Child - privateStaticVariable</br>
</br>
Child - publicInstanceMethod</br>
Child - protectedInstanceMethod</br>
Child - defaultInstanceMethod</br>
Child - privateInstanceMethod</br>
Child - publicStaticMethod</br>
Child - protectedStaticMethod</br>
Child - defaultStaticMethod</br>
Child - privatStaticMethod</br>
Parent - staticMethodNotHiddenByChild</br>
</td></tr></table>

		*/}.toString().slice(14,-3)
	},
	
	{
		id : 6,
		"text" : function(){/*
<h3>Interface Vs Abstract Class</h3>
<ol style="text-align: justify;">
<li>An abstract class is a class and an interface is an interface. A class can have a state which can be modified by
non-abstract methods but an interface cannot have the state because they can't have instance variables</li>
<li>Abstract class can have constructors but interface cannot have.</li>
<li>Abstract classes lets you define some behaviors and force the subclasses to provide others — <b>template pattern</b></br>
            Whereas, interfaces are generally used when something in my design is going to change frequently — <b>strategy pattern</b></li>
</ol>

<h3>Static methods in Interface</h3>
<p>Static methods are general utility methods, and are not related to an object's state, it makes sense to define them within the interface.
These interface static methods are not available to the concrete classes; these can be accessed using the interface name only.
We can declare public static void main() method inside an interface
</p>

<h3>Default methods in Interfaces</h3>
<p>We can declare concrete methods inside interfaces using Default methods. "default" is not an access modifier; it is a keyword
used to write concrete methods within interfaces. This method is available to the implementation class by default.
It is up to the implementation class whether to use it as is, or override it.
</p>

<h3>When to use Interfaces</h3>
<p style="text-align: justify;">I use interfaces when I see that something in my design will change frequently. For example, the<strong> Strategy pattern</strong>
lets you swap new algorithms into your program at runtime without altering the objects that use them.<br />The strategy pattern:</p>
<ol style="text-align: justify;">
<li>defines a family of algorithms (the interface)</li>
<li>encapsulates each algorithm (the concrete implementations of the interface)</li>
<li>makes the algorithms interchangeable within that family.</li>
</ol>
<p style="text-align: justify;">For instance, a <strong>media player</strong> might know how to play CDs, MP3s, and wav files. Of course, you don't
want to hardcode those playback algorithms into the player; that will make it difficult to add a new format like AVI. Furthermore, your code will be
littered with useless switch-case statements and you will need to update those case statements each time you add a new algorithm. All in all, this
is not a very object-oriented way to program. With the Strategy pattern, you can simply encapsulate the algorithm behind an object. If you do that,
you can provide new media plug-ins at any time. Let's call the plug-in interface Media which would have one method: play(). So to add a new algorithm,
we simply implement this interface in our new algorithm class. Now, when the MediaPlayer encounters a new media type, it simply delegates the playing
of the stream to our media strategy.</p>

<h3>When to use Abstract classes</h3>
<p style="text-align: justify;">You may have abstract classes that provide some default behaviors. Abstract classes let you define some behaviors;
they force your subclasses to provide others. For example, if you are building an application framework, an abstract class may provide default
services such as event and message handling. However, there could be some application-specific functionality that only your application can perform.
Such functionality might include startup and shutdown tasks, which are often application-dependent. So, instead of trying to define that behavior
itself, the abstract base class can simply declare the shutdown and startup methods as abstract. When it is time to start up, the abstract class
can call the startup method. And the JVM will call the method defined by the child class.</p>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 7,
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
		id : 8,
		"text" : function(){/*
<p style="text-align: justify;">An immutable class is one whose state cannot be modified once created. There are certain guidelines to create an class immutable. Immutable object not only guarantees safe publication of object&rsquo;s state, but also can be shared among other threads without any external synchronization. JDK itself contains several immutable classes like String, Integer and other wrapper classes. Any modification on immutable object will result in another immutable object. All modifications in a String object results in a new String object.</p>

<h3>Rules</h3>
<ol style="text-align: justify;">
<li>Don't allow subclasses — declare the class as final</li>
<li>Make all the fields as final and private</li>
<li>Don't provide setter methods — methods that modify fields or objects referred by fields</li>
<li>All parameterized constructors must make a defensive copy of parameters before settings the object's state.</li>
<li>All getter methods must return a defensive copy.</li>
</ol>

<pre>
// Address is a mutable class
public class Address {
    private String city;
    private String country;

    public Address(String city, String country) {
        this.city = city;
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    @Override
    public String toString() {
        return "Address{" +
                "city='" + city + '\'' +
                ", country='" + country + '\'' +
                '}';
    }
}
</pre>

<pre>
// Person is an immutable class
public final class Person {
    private final String name;
    private final int age;
    private final Address address;    // Mutable

    public Person(String name, int age, Address address) {
        this.name = name;
        this.age = age;
        this.address = new Address(address.getCity(), address.getCountry());
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public Address getAddress() {
        return new Address(address.getCity(), address.getCountry());
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", address=" + address +
                '}';
    }
}
</pre>

<pre>
public class ImmutableClass {
    public static void main(String[] args) {
        Address address = new Address("Bangalore", "India");

        Person person = new Person("Rahul", 30, address);
        System.out.println(person);

        address.setCity("Mumbai");
        System.out.println(person);

        person.getAddress().setCountry("Glasgow");
        System.out.println(person);
    }
}
</pre>

<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
Person{name='Rahul', age=30, address=Address{city='Bangalore', country='India'}}</br>
Person{name='Rahul', age=30, address=Address{city='Bangalore', country='India'}}</br>
Person{name='Rahul', age=30, address=Address{city='Bangalore', country='India'}}</br>
</tr></td>
</table>

<p style="text-align: justify;">&nbsp;</p>
		*/}.toString().slice(14,-3)
	},

    {   /* Pass by Value */
        id : 9,
		"text" : function(){/*
<p style="text-align: justify;">Java is always pass-by-value. In case of objects, the references are also pass-by-value</p>


<pre>
public class PassByValue {
    public static void main(String[] args) {
        System.out.println("Using primitives");
        int a = 10, b = 20;
        System.out.printf("a=%d :: b=%d%n", a, b);
        swap(a, b);
        System.out.printf("a=%d :: b=%d%n", a, b);

        System.out.println("------------------------------------------");

        System.out.println("Using holder class");
        IntHolder aa = new IntHolder(a);
        IntHolder bb = new IntHolder(b);
        System.out.printf("aa=%d :: bb=%d%n", aa.get(), bb.get());
        swap(aa, bb);
        System.out.printf("aa=%d :: bb=%d%n", aa.get(), bb.get());
    }

    public static void swap(int a, int b) {
        int temp = a;
        a = b;
        b = temp;
    }

    public static void swap(IntHolder a, IntHolder b) {
        int temp = a.get();
        a.set(b.get());
        b.set(temp);
    }
}
</pre>

<pre>
public class IntHolder {
    int i;

    public IntHolder(int i) {
        this.i = i;
    }

    public int get() {
        return i;
    }

    public void set(int i) {
        this.i = i;
    }
}
</pre>

<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
Using primitives</br>
a=10 :: b=20</br>
a=10 :: b=20</br>
------------------------------------------</br>
Using holder class</br>
aa=10 :: bb=20</br>
aa=20 :: bb=10</br>
</tr></td>
</table>

<p style="text-align: justify;">Reference:&nbsp;<a href="https://stackoverflow.com/questions/40480/is-java-pass-by-reference-or-pass-by-value?rq=1" target="_blank">Is Java "pass-by-reference" or "pass-by-value"?</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Generics */
        id : 10,
		"text" : function(){/*
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },

    {   /* Reflection */
        id : 11,
		"text" : function(){/*
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },

]
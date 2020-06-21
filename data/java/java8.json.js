var java8_que = [
    {
        id : 1,
		question : "What's new in Java 8",
        tags : ["What's new?", "Java 8"]
    },

    {
        id : 2,
		question : "Lambda Expressions",
        tags : ["Lambda Expressions"]
    },

    {
        id : 3,
		question : "Functional Interfaces",
        tags : ["Functional Interfaces", "Functional", "Interfaces"]
    },

    {
        id : 4,
		question : "Invoking Lambda Expressions using Functional interfaces",
        tags : ["Invoking", "Lambda Expressions", "Functional Interfaces"]
    },

    {
        id : 5,
		question : "Lambda Expressions with Collections",
        tags : ["Lambda Expressions", "Collections"]
    },

    {
        id : 6,
		question : "Anonymous Inner Class  Vs Lambda Expressions",
        tags : ["Lambda Expressions", "Anonymous Inner Class"]
    },

    {
        id : 7,
		question : "Default methods in Interfaces",
        tags : ["Default methods", "Interfaces", "Abstract Classes", "Difference between Interface and Abstract Class"]
    },

    {
        id : 8,
		question : "Static methods in Interfaces",
        tags : ["Static methods", "Interfaces"]
    },

    {
        id : 9,
		question : "Built-in Functional Interfaces",
        tags : ["Predefined Functional Interfaces", "Predefined", "Functional"]
    },

    {
        id : 10,
		question : "Predicate Interface",
        tags : ["Predefined Functional Interfaces", "Predefined", "Functional", "Interfaces", "Predicate"]
    },

    {
        id : 11,
		question : "Function Interface",
        tags : ["Predefined Functional Interfaces", "Predefined", "Functional", "Interfaces", "Function"]
    },

    {
        id : 12,
		question : "Consumer Interface",
        tags : ["Predefined Functional Interfaces", "Predefined", "Functional", "Interfaces", "Consumer"]
    },

    {
        id : 13,
		question : "Supplier Interface",
        tags : ["Predefined Functional Interfaces", "Predefined", "Functional", "Interfaces", "Supplier"]
    },

    {
        id : 14,
		question : "BiPredicate Interface",
        tags : ["Predefined Functional Interfaces", "Predefined", "Functional", "Interfaces", "BiPredicate"]
    },

    {
        id : 15,
		question : "BiFunction Interface",
        tags : ["Predefined Functional Interfaces", "Predefined", "Functional", "Interfaces", "BiFunction"]
    },

    {
        id : 16,
		question : "BiConsumer Interface",
        tags : ["Predefined Functional Interfaces", "Predefined", "Functional", "Interfaces", "BiConsumer"]
    },

    {
        id : 17,
		question : "Primitive Type Functional Interfaces",
        tags : ["Predefined Functional Interfaces", "Primitive Type Functional Interfaces",

        "Primitive Predicates", "IntPredicate", "LongPredicate", "DoublePredicate",

        "Primitive Functions", "IntFunction", "LongFunction", "DoubleFunction", "ToIntFunction", "ToLongFunction",
        "ToDoubleFunction", "IntToLongFunction", "IntToDoubleFunction", "LongToIntFunction", "LongToDoubleFunction",
        "DoubleToIntFunction", "DoubleToLongFunction", "ToIntBiFunction", "ToLongBiFunction", "ToDoubleBiFunction",

        "Primitive Consumers", "IntConsumer", "LongConsumer", "DoubleConsumer", "ObjIntConsumer", "ObjLongConsumer", "ObjDoubleConsumer",

        "Primitive Suppliers", "BooleanSupplier", "IntSupplier", "LongSupplier", "DoubleSupplier"

        ]
    },

    {
        id : 18,
		question : "UnaryOperator Interface",
        tags : ["Predefined Functional Interfaces", "UnaryOperator", "IntUnaryOperator", "LongUnaryOperator", "DoubleUnaryOperator"]
    },

    {
        id : 19,
		question : "BinaryOperator Interface",
        tags : ["Predefined Functional Interfaces", "BinaryOperator"]
    },

    {
        id : 20,
		question : "Optional",
        tags : ["Optional"]
    },

    {
        id : 21,
		question : "Method & Constructor reference using double-colon (::) operator",
        tags : ["Method reference", "Constructor reference", "Double Colon"]
    },

    {
        id : 22,
		question : "Stream API",
        tags : ["Streams", "Stream.filter()", "Stream.sorted()", "Stream.map()", "Stream.anyMatch()", "Stream.allMatch()",
        "Stream.noneMatch()", "Stream.count()", "Stream.reduce()", "Stream.distinct()", "Stream.forEach()",
        "Stream.collect()", "Stream.toArray()", "Stream.of()", "Sequential Stream", "Parallel Stream"]
    },

    {
        id : 23,
		question : "Date & Time API",
        tags : ["Date", "Time", "joda"]
    },

]

var java8_ans = [
    {   /* What's new? */
        id : 1,
		"text" : function(){/*
<p><img src="data/java/images/java8/1.java-8-features.png" alt="" width="800"/></p>
        */}.toString().slice(14,-3)
    },

    {   /* Lambda Expressions */
        id : 2,
		"text" : function(){/*
<p>It is an anonymous function that does not have:</p>
<ol>
<li>A name</li>
<li>Any modifiers</li>
<li>Any return type</li>
</ol>
<table>
<tbody>
<tr>
<td style="vertical-align: top; text-align: center;"><strong>Java 7 Code</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Java 8 Code</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Java 8 code (concise)</strong></td>
</tr>
<tr>
    <td style="vertical-align: top;">
<pre>
public void sayHello() {
    System.out.println("Hello");
}
</pre>
    </td>
    <td style="vertical-align: top;">
<pre>
() -> { System.out.println("Hello"); }
</pre>
    </td>
    <td style="vertical-align: top;">
<pre>
() -> System.out.println("Hello");
</pre>
    </td>
</tr>
<tr>
    <td style="vertical-align: top;">
<pre>
public void add(int a, int b) {
    System.out.println(a + b);
}
</pre>
    </td>
    <td style="vertical-align: top;">
<pre>
(int a, int b) -> { System.out.println(a + b); }
</pre>
    </td>
    <td style="vertical-align: top;">
<pre>
(a, b) -> System.out.println(a + b);
</pre>
    </td>
</tr>
<tr>
    <td style="vertical-align: top;">
<pre>
public int getLength(String str) {
    return str.length();
}
</pre>
    </td>
    <td style="vertical-align: top;">
<pre>
(String str) -> { return str.length(); }
</pre>
    </td>
    <td style="vertical-align: top;">
<pre>
str -> str.length();
</pre>
    </td>
</tr>
</tbody>
</table>
<p>Few Rules:</p>
<ol>
<li>If the body of a lambda expression has only one statement, then curly-braces are optional</li>
<li>Sometimes, based on the context, the compiler can guess the types automatically. This property is called Type Inference. In such a case, types are optional.</li>
<li>Sometimes, based on the context, the compiler can guess the return type. In such a case, return-types are optional.</li>
<li>If a lambda expression takes only one input value, then the parenthesis are optional</li>
</ol>
        */}.toString().slice(14,-3)
    },

    {   /* Functional Interfaces */
        id : 3,
		"text" : function(){/*
<p style="text-align: justify;">Functional Interfaces are used to invoke Lambda expressions.</p>
<p style="text-align: justify;">If an interface has a <strong>single abstract method</strong>, such an interface is a Functional Interface.</p>
<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Interface</strong></td>
<td style="text-align: center;"><strong>Single Abstract Method</strong></td>
</tr>
<tr>
<td>Runnable</td>
<td>run()</td>
</tr>
<tr>
<td>Callable</td>
<td>call()</td>
</tr>
<tr>
<td>ActionListener</td>
<td>actionPerformed()</td>
</tr>
<tr>
<td>Comparable</td>
<td>compareTo()</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">It can have any number of <strong>default</strong> and <strong>static</strong> methods. This restriction is only applicable for abstract methods.</p>
<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Valid</strong></td>
<td style="text-align: center;"><strong>Valid</strong></td>
<td style="text-align: center;"><strong>Invalid</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>
public interface Interface1 {
    public void foo();
}
</pre>
</td>
<td style="vertical-align: top;">
<pre>
public interface Interface2 {
    public void foo();

    default void bar() {
        // some impl
    }

    public static void baz() {
        // some impl
    }
}
</pre>
</td>
<td style="vertical-align: top;">
<pre>
public interface Interface3 {
    public void foo();
    public void bar();
}
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">In order to indicate that an interface is a functional interface, java introduced an annotation: <strong>@FunctionalInterface</strong></p>
<p style="text-align: justify;">Conceptually, a functional interface has exactly one abstract method. Since default methods have an implementation, they are not abstract. If an interface declares an abstract method overriding one of the public methods of <strong>java.lang.Object</strong>, that also does not count toward the interface's abstract method count since any implementation of the interface will have an implementation from <strong>java.lang.Object</strong> or elsewhere.</p>
<pre>
@FunctionalInterface        // Compile-time error: Multiple non-overriding abstract methods found in interface Foo
public interface Foo {
    public void bar();
    public void baz();
}
</pre>
<p style="text-align: justify;">Following interface declaration is also not a functional interface and results in a compile-time error:</p>
<pre>
@FunctionalInterface        // Compile-time error: No target method found
public interface Interface1 {

}
</pre>
<p style="text-align: justify;">Following interface declaration satisfies the rules of a functional interface:</p>
<pre>
@FunctionalInterface            // No error
public interface Interface2 {
    public void foo();

    default void bar() {
        // some impl
    }

    public static void baz() {
        // some impl
    }
}
</pre>
<h2 style="text-align: justify;">Functional interfaces and Inheritance</h2>
<p style="text-align: justify;">If an interface doesn't declare any new abstract method but extends a functional interface, then the child interface is a valid functional interface.</p>
<pre>
@FunctionalInterface
interface Parent {
    public void foo();
}

@FunctionalInterface                // No error
interface Child extends Parent {

}
</pre>
<p style="text-align: justify;">If a child interface declares a single abstract method with the same method signature and return type (kind of overriding) as in the parent functional interface, then also the child interface is a valid functional interface.</p>
<pre>
@FunctionalInterface
interface Parent {
    public void foo();
}

@FunctionalInterface                // No error
interface Child extends Parent {
    public void foo();
}
</pre>
<p style="text-align: justify;">If a child interface declares a new single abstract method, then it's not a valid functional interface and results in compile-time error</p>
<pre>
@FunctionalInterface
interface Parent {
    public void foo();
}

@FunctionalInterface                // Multiple non-overriding abstract methods found in interface Child
interface Child extends Parent {
    public void bar();
}
</pre>
<p style="text-align: justify;">If a child interface declares a new single abstract method but isn't annotated with <strong>@FunctionalInterface</strong>, then it's not a valid functional interface and there will be no compile-time error</p>
<pre>
@FunctionalInterface
interface Parent {
    public void foo();
}

//@FunctionalInterface
interface Child extends Parent {    // No error
    public void bar();
}
</pre>
        */}.toString().slice(14,-3)
    },

    {   /* Invoking Lambda Expressions using Functional interfaces */
        id : 4,
		"text" : function(){/*
<p style="text-align: justify;">Functional Interfaces act as a <strong>type</strong> for Lambda expressions.</p>
<p style="text-align: justify;">&nbsp;</p>
<h2>Example #1: invoking method having no arguments</h2>
<pre>
public interface Animal {
    void move();
}
</pre>
<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Without using Lambda Expression</strong></td>
<td style="text-align: center;"><strong>Using Lambda Expression</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>
class Dog implements Animal {
    public void move() {
        System.out.println("Dog moved");
    }
}

public class Demo {
    public static void main(String[] args) {
        Animal dog = new Dog();
        dog.move();
    }
}
</pre>
</td>
<td style="vertical-align: top;">
<pre>
public class Demo {
    public static void main(String[] args) {
        Animal dog = () ->
            System.out.println("Dog moved");
        dog.move();
    }
}
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<h2>Example #2: invoking method having 2 arguments</h2>
<pre>
public interface Adder {
    void add(int a, int b);
}
</pre>
<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Without using Lambda Expression</strong></td>
<td style="text-align: center;"><strong>Using Lambda Expression</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>
class AdderImpl implements Adder {
    public void add(int a, int b) {
        System.out.println("Sum=" + (a + b));
    }
}

public class Demo {
    public static void main(String[] args) {
        Adder adder = new AdderImpl();
        adder.add(10, 20);
        adder.add(100, 200);
    }
}
</pre>
</td>
<td style="vertical-align: top;">
<pre>
public class Demo {
    public static void main(String[] args) {
        Adder adder = (a, b) ->
            System.out.println("Sum=" + (a + b));
        adder.add(10, 20);
        adder.add(100, 200);
    }
}
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<h2>Example #3: invoking method having 1 argument and return value</h2>
<pre>
public interface LengthCalc {
    int getLength(String s);
}
</pre>
<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Without using Lambda Expression</strong></td>
<td style="text-align: center;"><strong>Using Lambda Expression</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>
class LengthCalcImpl implements LengthCalc {
    public int getLength(String s) {
        return s.length();
    }
}

public class Demo {
    public static void main(String[] args) {
        LengthCalc calc = new LengthCalcImpl();
        System.out.println(
            "Length=" + calc.getLength("Hello")
        );
    }
}
</pre>
</td>
<td style="vertical-align: top;">
<pre>
public class Demo {
    public static void main(String[] args) {
        LengthCalc calc = s -> s.length();
        System.out.println(
            "Length=" + calc.getLength("Hello")
        );
    }
}
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<h2>Example #4: Multithreading</h2>
<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Without using Lambda Expression</strong></td>
<td style="text-align: center;"><strong>Using Lambda Expression</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>
class MyRunnable implements Runnable {
    @Override
    public void run() {
        for(int i = 0; i < 10; i++) {
            System.out.println("Child thread");
        }
    }
}

public class RunnableDemo {
    public static void main(String[] args) {
        Thread t = new Thread(new MyRunnable());
        t.start();
    }
}
</pre>
</td>
<td style="vertical-align: top;">
<pre>
public class RunnableDemo {
    public static void main(String[] args) {
        Runnable r = () -> {
            for(int i = 0; i < 10; i++) {
                System.out.println("Child thread");
            }
        };

        Thread t = new Thread(new MyRunnable());
        t.start();
    }
}
</pre>
</td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Lambda Expressions with Collections */
        id : 5,
		"text" : function(){/*
<p style="text-align: justify;">Here is an implementation of a comparator that sorts in descending order</p>
<pre>
public class DescendingComparator implements Comparator<Integer> {
    @Override
    public int compare(Integer o1, Integer o2) {
        if (o1 > o2) return -1;
        else if (o1 < o2) return 1;
        else return 0;
    }
}
</pre>

<p style="text-align: justify;">&nbsp;</p>
<h2>Example #1: Sorting a List</h2>
<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Without using Lambda Expression</strong></td>
<td style="text-align: center;"><strong>Using Lambda Expression</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>
public class SortDemo {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(
            2, 4, 2, 7, 34, 8, 4, 8, 1
        );
        System.out.println(list);
        Collections.sort(list, new DescendingComparator());
        System.out.println(list);
    }
}
</pre>
</td>
<td style="vertical-align: top;">
<pre>
public class SortDemo {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(
            2, 4, 2, 7, 34, 8, 4, 8, 1
        );
        System.out.println(list);
        Collections.sort(list, (o1, o2) -> {
                if (o1 > o2) return -1;
                else if (o1 < o2) return 1;
                else return 0;
            }
        );
        System.out.println(list);
    }
}
</pre>
</td>
</tr>
</tbody>
</table>

<p style="text-align: justify;">&nbsp;</p>
<h2>Example #2: Sorting a TreeSet</h2>
<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Without using Lambda Expression</strong></td>
<td style="text-align: center;"><strong>Using Lambda Expression</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>
public class SortDemo {
    public static void main(String[] args) {
        SortedSet<Integer> customSortedSet =
            new TreeSet<>(new DescendingComparator());

        customSortedSet.addAll(
            Arrays.asList(2, 4, 3, 7, 34, 8, 4, 6, 1)
        );
        System.out.println(customSortedSet);
    }
}
</pre>
</td>
<td style="vertical-align: top;">
<pre>
public class SortDemo {
    public static void main(String[] args) {
        SortedSet<Integer> customSortedSet =
            new TreeSet<Integer>((o1, o2) -> {
                    if (o1 > o2) return -1;
                    else if (o1 < o2) return 1;
                    else return 0;
                }
            );

        customSortedSet.addAll(
            Arrays.asList(2, 4, 3, 7, 34, 8, 4, 6, 1)
        );

        System.out.println(customSortedSet);
    }
}
</pre>
</td>
</tr>
</tbody>
</table>

<p style="text-align: justify;">&nbsp;</p>
<h2>Example #3: Sorting a TreeMap</h2>
<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Without using Lambda Expression</strong></td>
<td style="text-align: center;"><strong>Using Lambda Expression</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>
public class SortDemo {
    public static void main(String[] args) {
        SortedMap<Integer, String> customSortedMap =
            new TreeMap<>(new DescendingComparator());
        customSortedMap.put(100, "foo");
        customSortedMap.put(200, "bar");
        customSortedMap.put(300, "baz");
        System.out.println(customSortedMap);
    }
}
</pre>
</td>
<td style="vertical-align: top;">
<pre>
public class SortDemo {
    public static void main(String[] args) {
        SortedMap<Integer, String> customSortedMap =
            new TreeMap<>((o1, o2) -> {
                    if (o1 > o2) return -1;
                    else if (o1 < o2) return 1;
                    else return 0;
                }
            );

        customSortedMap.put(100, "foo");
        customSortedMap.put(200, "bar");
        customSortedMap.put(300, "baz");
        System.out.println(customSortedMap);
    }
}
</pre>
</td>
</tr>
</tbody>
</table>

<p style="text-align: justify;">&nbsp;</p>
<h2>Example #4: Custom Sorting of Employee objects</h2>
<p style="text-align: justify;">Employee class implementation</p>
<pre>
public class Employee {
    private int id;
    private String name;

    public Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // getter/setter goes here

    @Override
    public String toString() {
        return "id=" + id + " : name=" + name;
    }
}
</pre>

<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Without using Lambda Expression</strong></td>
<td style="text-align: center;"><strong>Using Lambda Expression</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>
class DescendingComparator implements Comparator<Employee> {
    @Override
    public int compare(Employee o1, Employee o2) {
        if (o1.getId() > o2.getId()) return -1;
        else if (o1.getId() < o2.getId()) return 1;
        else return 0;
    }
}

public class SortDemo {
    public static void main(String[] args) {
        List<Employee> list = new ArrayList<>();
        list.add(new Employee(100, "John"));
        list.add(new Employee(200, "Jim"));
        list.add(new Employee(300, "Joe"));
        System.out.println(list);

        Collections.sort(list,
            new DescendingComparator()
        );
        System.out.println(list);
    }
}
</pre>
</td>
<td style="vertical-align: top;">
<pre>
public class SortDemo {
    public static void main(String[] args) {
        List<Employee> list = new ArrayList<>();
        list.add(new Employee(100, "John"));
        list.add(new Employee(200, "Jim"));
        list.add(new Employee(300, "Joe"));
        System.out.println(list);

        Collections.sort(list,
            (o1, o2) -> {
                if (o1.getId() > o2.getId()) return -1;
                if (o1.getId() < o2.getId()) return 1;
                return 0;
            });
        System.out.println(list);
    }
}
</pre>
</td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Anonymous Inner Class  Vs Lambda Expressions */
        id : 6,
		"text" : function(){/*
<p style="text-align: justify;">An <strong>Anonymous Inner Class</strong> can be replaced by a <strong>Lambda Expression</strong> only in few cases</p>
<h2>Can be replaced when Anonymous Inner Class:</h2>
<ol style="text-align: justify;">
<li>implements an Interface with exactly 1 abstract methods (with no restriction on default and static methods)</li>
</ol>
<h2>Cannot be replaced when Anonymous Inner Class:</h2>
<ol style="text-align: justify;">
<li><p>Extends a Concrete class</p>
<pre>
// concrete class
class Foo {
    public void foo() {
        System.out.println("Inside parent Foo class");
    }
}

// this Anonymous inner class cannot be replaced by Lambda Expression
public class AnonymousInnerClassDemo {
    public static void main(String[] args) {
        new Foo() {
            public void foo() {
                System.out.println("Inside Anonymous inner class that extends Foo");
            }
        }.foo();
    }
}
</pre>
</li>

<li><p>Extends an Abstract class</p>
<pre>
// Abstract class
abstract class Bar {
    public abstract void bar();
}

// this Anonymous inner class cannot be replaced by Lambda Expression
public class AnonymousInnerClassDemo {
    public static void main(String[] args) {
        new Bar() {
            public void bar() {
                System.out.println("Inside Anonymous inner class that extends Bar");
            }
        }.bar();
    }
}
</pre>
</li>

<li><p>Implements an Interface with multiple abstract methods</p>
<pre>
// interface with multiple abstract methods
interface Vehicle {
    void changeGear(int gear);
    void speedUp(int increment);
    void applyBrakes(int decrement);
}

// this Anonymous inner class cannot be replaced by Lambda Expression
public class AnonymousInnerClassDemo {
    public static void main(String[] args) {
        Vehicle car = new Vehicle() {

            private int speed = 0;

            public void changeGear(int gear) {
                System.out.println(String.format("Changed gear to %d", gear));
            }

            public void speedUp(int increment) {
                speed += increment;
                System.out.println(String.format("Incremented speed by %d Current speed is %d", increment, speed));
            }

            public void applyBrakes(int decrement) {
                speed -= decrement;
                System.out.println(String.format("Decremented speed by %d Current speed is %d", decrement, speed));
            }
        };

        car.changeGear(1);
        car.speedUp(10);
        car.applyBrakes(10);
    }
}
</pre>
</li>
</ol>

<p style="text-align: justify;">If Anonymous Inner Class implements an Interface which contain only 1 abstract method
(i.e., Anonymous Inner Class implements a functional interface) only in this case, we can replace Anonymous Inner Class
with a Lambda-Expression.</p>

<pre>
// interface with single abstract method
interface Baz {
    void baz();
}

// this Anonymous inner class can be replaced by a Lambda Expression as it implements a functional interface
public class AnonymousInnerClassDemo {
    public static void main(String[] args) {
        new Baz() {
            public void baz() {
                System.out.println("Inside Anonymous inner class that implements Baz");
            }
        }.baz();
    }
}

// replacement Lambda Expression
public class LambdaExpressionDemo {
    public static void main(String[] args) {
        Baz baz = () -> System.out.println("Inside Lambda Expression that implements Baz");
        baz.baz();
    }
}
</pre>

<p>In Anonymous Inner Class, "this" represents current Anonymous Inner Class object</p>
<p>In Lambda-Expression, "this" represents outer class object</p>
<pre>
interface Foo {
    void someMethod();
}
</pre>

<pre>
public class ThisDemo {
    int x = 9999;

    private void methodUsingAnonymousInnerClass() {
        Foo foo = new Foo() {
            int x = 100;    // instance variable of Anonymous Inner Class

            @Override
            public void someMethod() {
                System.out.println("x=" + x);                                   // prints 100

                // "this" refers to current Anonymous-Inner-Class object
                System.out.println("this.x=" + this.x);                         // prints 100

                // Outer class instance variable can be referred from an
                // anonymous inner class as: OuterClassName.this.InstanceVariable
                System.out.println(ThisDemo.this.x);                            // prints 9999
            }
        };

        foo.someMethod();
    }

    private void methodUsingLambdaExpression() {
        Foo foo = () -> {
            // not possible to declare any instance variable inside a lambda expression

            int x = 200;    // local variable of lambda expression
            System.out.println("x=" + x);                                       // prints 200

            // "this" refers to outer class object
            System.out.println("this.x=" + this.x);                             // prints 9999
            System.out.println(ThisDemo.this.x);                                // prints 9999
        };

        foo.someMethod();
    }

    public static void main(String[] args) {
        ThisDemo demo = new ThisDemo();
        demo.methodUsingAnonymousInnerClass();
        demo.methodUsingLambdaExpression();
    }
}
</pre>
<h2>Difference between Anonymous Inner Class and Lambda Expression</h2>
<p><img src="data/java/images/anonymousInnerClassVsLambdaExpression.png" alt="" width="840" height="265" /></p>

<h2>Semantics of variables used inside Lambda Expressions</h2>
<pre>
interface Foo {
    void someMethod();
}
</pre>
<p>If a method local variable is accessed inside a lambda expression, it is implicitly final.</p>
<p>An attempt to modify it inside the lambda expression results in compile-time error.</p>
<p>There are no such restrictions for instance or class variables.</p>
<pre>
public class Demo {
    private int a = 100;
    private static int b = 200;

    public void test() {
        int c = 300;    // method local variables when accessed inside Lambda expressions are implicitly final

        Foo foo = () -> {
            System.out.println(String.format("a=%d b=%d c=%d", a, b, c));   // a=100 b=200 c=300

            a = 111;
            b = 222;
            // c=333;       // Compile-time error
            // Variable used in lambda expression should be final or effectively final

            System.out.println(String.format("a=%d b=%d c=%d", a, b, c));   // a=111 b=222 c=300
        };

        foo.someMethod();
    }

    public static void main(String[] args) {
        Demo demo = new Demo();
        demo.test();
    }
}
</pre>
        */}.toString().slice(14,-3)
    },

    {   /* Default methods in Interfaces */
        id : 7,
		"text" : function(){/*
<p style="text-align: justify;">In&nbsp;<strong>java 7</strong> or before, every method present inside an interface&nbsp;had to be public and abstract.
Similarly, every peroperty had to be public static final. It was not possible to have concrete methods in an interface.
From <strong>java 8</strong> onwards, it is possible to declare concrete methods inside interfaces. Such methods are called <strong>Default methods</strong>.</p>
<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Java 7 or before</strong></td>
<td style="text-align: center;"><strong>Java 8 onwards</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>
public interface Foo {
    public static final int a = 10;

    public void bar();

    // impossible to have concrete methods
}
</pre>
</td>
<td style="vertical-align: top;">
<pre>
public interface Foo {
    public static final int a = 10;

    public void bar();

    // concrete method
    default void baz() {
        System.out.println("Hello World");
    }
}
</pre>
</td>
</tr>
</tbody>
</table>

<p style="text-align: justify;">Here, <strong>default</strong> is not an access modifier; it is a keyword used to write concrete methods within interfaces.
This method is available to the implementation class by default.
It is up to the implementation class whether to use it as is, or override it.</p>

<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Concrete class using default method</strong></td>
<td style="text-align: center;"><strong>Concrete class overriding default method</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>
class FooImpl implements Foo {
    @Override
    public void bar() {
        System.out.println("Inside bar()");
    }
}

public class Demo {
    public static void main(String[] args) {
        Foo fooObj = new FooImpl();
        fooObj.bar();   // Inside bar()
        fooObj.baz();   // Hello World
    }
}
</pre>
</td>
<td style="vertical-align: top;">
<pre>
class FooImpl implements Foo {
    @Override
    public void bar() {
        System.out.println("Inside bar()");
    }

    @Override   // overriding default method
    public void baz() {
        System.out.println("Inside baz()");
    }
}

public class Demo {
    public static void main(String[] args) {
        Foo fooObj = new FooImpl();
        fooObj.bar();   // Inside bar()
        fooObj.baz();   // Inside baz()
    }
}
</pre>
</td>
</tr>
</tbody>
</table>

<p style="text-align: justify;">The good thing about this new feature is that, where before you were forced to use an abstract class for the convenience methods,
thus constraining the implementor to single inheritance, now you can have a really clean design with just the interface and a minimum of implementation effort
forced on the programmer.</p>

<p style="text-align: justify;">The original motivation to introduce default methods to Java 8 was the desire to extend the Collections Framework interfaces
with lambda-oriented methods without breaking any existing implementations.<p>
<pre>
List list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
list.forEach(…); // lambda code goes here
</pre>
<p style="text-align: justify;">The <strong>forEach()</strong> was declared in <strong>java.lang.Iterable</strong> interface. Without the concept of
<strong>default</strong> methods, it would have been impossible to add new methods to an interface without breaking the existing implementations.</p>
<pre>
package java.lang;

public interface Iterable<T> {
    Iterator<T> iterator();

    default void forEach(Consumer<? super T> action) {      // forEach() was declared as default to retrofit this new method
        Objects.requireNonNull(action);
        for (T t : this) {
            action.accept(t);
        }
    }

    // more code goes here
}
</pre>

<p style="text-align: justify;">Although this is more relevant to the authors of public libraries,
you may find the same feature useful in your project as well. You've got one centralized place where to add new convenience and you don't have to rely
on how the rest of the type hierarchy looks.</p>

<h2>Why a default method cannot override a method in java.lang.Object class?</h2>
<p style="text-align: justify;">An interface cannot declare any of the methods of the <strong>java.lang.Object</strong> class as a default method.
Any attempt to do so results in a <strong>compile-time error</strong>. This restriction may be surprising, especially since the interface does not inherit from
<strong>java.lang.Object</strong>.</p>

<p style="text-align: justify;">Behind the scenes, an interface implicitly declares a public abstract method for most of the object’s methods.
As a consequence, there is no hierarchical relation between, for example, the object's <strong>equals()</strong> method and the default <strong>equals()</strong>
method that is implicitly declared in an interface. So, why does Java prohibit us from declaring an object method as the default method?</p>

<p style="text-align: justify;">The short answer is this: Java, by design, can be misunderstood from the OOP design perspective:</p>

<pre>
interface Person {
    // Compile-time error: Default method 'equals' overrides a member of 'java.lang.Object'
    default boolean equals(Object obj) {
        return true;
    }
}

class Employee implements Person {
    @Override   // overrides equals() method from Object class
    public boolean equals(Employee e) {
        return true;
    }
}
</pre>

<p style="text-align: justify;">Let’s suppose, we have an interface <strong>Person</strong>, which declares a default method <strong>equals()</strong>
with the same signature as the <strong>equals()</strong> method of the <strong>java.lang.Object</strong> class. Class <strong>Employee</strong> implements the
<strong>Person</strong> interface, which, by design, inherits the <strong>java.lang.Object</strong> class, and then, what version of the <strong>equals()</strong>
method does <strong>Employee</strong> inherit? A conflict would arise in this case.</p>

<p style="text-align: justify;">Another reason is that, in this case, the interface <strong>default method</strong> becomes useless, because the
<strong>equals()</strong> method from the <strong>java.lang.Object</strong> class will always be invoked in children classes. This would conflict with the
fact that the interface can be evolved.</p>

<h2>Default methods and Multiple inheritance (Ambiguity)</h2>
<p style="text-align: justify;">Suppose, we have two interfaces, <strong>A</strong> and <strong>B</strong>, such that both have a <strong>default</strong>
method with same method signature:</p>
<pre>
interface A {
    default void foo() {
        System.out.println("Interface A");
    }
}

interface B {
    default void foo() {
        System.out.println("Interface B");
    }
}
</pre>
<p style="text-align: justify;">In such a case, if a class implements both the interfaces, it will result in <strong>ambiguity problem</strong>, and
compiler will give a <strong>compilation error</strong>:</p>
<pre>
public class Bar implements A, B { // compile-time error: Bar inherits unrelated defaults for foo() from types A and B

}
</pre>

<p style="text-align: justify;"><strong>Solutions to the ambiguity problem:</strong></p>
<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Option #1: Override the default method and provide a custom implementation</strong></td>
<td style="text-align: center;"><strong>Option #2: Override the default method and specify which implementation is required</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>
public class Bar implements A, B {
    @Override
    public void foo() {
        System.out.println("Inside Bar");
    }

    public static void main(String[] args) {
        Bar bar = new Bar();
        bar.foo(); // prints "Inside Bar"
    }
}

</pre>
</td>
<td style="vertical-align: top;">
<pre>
public class Bar implements A, B {
    @Override
    public void foo() {
        A.super.foo();
        // B.super.foo();
    }

    public static void main(String[] args) {
            Bar bar = new Bar();
            bar.foo(); // prints "Interface A"
        }
}
</pre>
</td>
</tr>
</tbody>
</table>

<h2>Difference between Interface (with default methods) and Abstract class</h2>
<p style="text-align: justify;">
With support of <strong>default methods</strong> (introduced in java 8) and <strong>private methods</strong> (introduced in java 9) in interface,
the gap between interface and abstract classes has been reduced but still they have major differences.

<ol>
    <li>
        <b>Multiple Inheritance using Interface</b>
        <p style="text-align: justify;">An abstract class cannot support multiple inheritance, but an interface can support multiple inheritance.
        Thus a class may inherit several interfaces but only one abstract class.</p>
    </li>

    <li>
        <b>Abstract classes can have constructors but not interfaces.</b>
            <p style="text-align: justify;">- Even though, abstract class has constructor, we can not create instance of abstract class in Java,
            they are incomplete.</p>

            <p style="text-align: justify;">- Even though, if our abstract class doesn't contain any abstract method, we can not create instance of it.
            By making a class abstract, we tell compiler that, it’s incomplete and should not be instantiated.</p>

            <p style="text-align: justify;">- So when does constructor of abstract class is used or called? When we create some child class by extending
            our abstract class and create instance of child class, our abstract class constructor is called from child class constructor i.e. constructor chaining</p>
    </li>

    <li>
        <b>public static final VS instance variables</b>

        <p style="text-align: justify;">- Fields in interface are public static final. But abstract class can have other type of fields like private, protected, etc.</p>
        <p style="text-align: justify;">- In Java , interface doesn't allow us to declare any instance variables. Using a variable declared in an interface as an instance
        variable will return a compile time error.</p>
        <p style="text-align: justify;">- We can declare a constant variable in interface, using static final which is different from an instance variable.</p>
        <p style="text-align: justify;">- Interface variables are static because Java interfaces cannot be instantiated in their own right; the value of the variable must be
        assigned in a static context in which no instance exists.</p>
    </li>

    <li>
        <b>Method Declaration vs Concrete Method</b>
        <p style="text-align: justify;">- Up to Java 7 and all earlier versions, interfaces were simple. They could only contain public abstract methods. You can not declare
        any concrete methods inside interface. On the other hand abstract class may contain both abstract and concrete methods.</p>
        <p style="text-align: justify;">- Java 8 changed this. From Java 8, you can have public static methods and public default methods.</p>
        <p style="text-align: justify;">- Java 9 is adding private methods on interfaces. Private methods can be static or instance. In both cases, the private method is
        not inherited by sub-interfaces or implementations.</p>
        <p style="text-align: justify;">- So from the perspective of Java 9, we can not consider this point as a difference between interface and abstract class.</p>
    </li>
</ol>
</p>

<table>
<tbody>
<tr>
    <td style="text-align: center;"><strong>Interface</strong></td>
    <td style="text-align: center;"><strong>Abstract Class</strong></td>
</tr>
<tr>
    <td style="vertical-align: top;">
        Any class can implement multiple interfaces. Multiple inheritance is possible using interfaces in Java
    </td>
    <td style="vertical-align: top;">
        A class can extend only one abstract class. Multiple inheritance is not possible using abstract class
    </td>
</tr>
<tr>
    <td style="vertical-align: top;">
        Cannot have a constructor
    </td>
    <td style="vertical-align: top;">
        Can have constructors
    </td>
</tr>
<tr>
    <td style="vertical-align: top;">
        Fields in interfaces are public static final
    </td>
    <td style="vertical-align: top;">
        Abstract classes can have private, protected fields as well
    </td>
</tr>
<tr>
    <td style="vertical-align: top;">
Up to java 7, interface can only contain public abstract methods.
We can not declare any concrete methods inside interface.
    </td>
    <td style="vertical-align: top;">
abstract class may contain both abstract and concrete
methods.
    </td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Static methods in Interfaces */
        id : 8,
		"text" : function(){/*
<p style="text-align: justify;">Java 8 introduced static methods in interfaces.&nbsp;</p>
<p style="text-align: justify;">Static methods are general utility methods, and are not related to an object's state, it makes sense to define them within the interface.</p>
<p style="text-align: justify;">These interface static methods are not available to the concrete classes; these can be accessed using the interface name only.</p>
<pre>
class Baz implements Foo {
    public static void main(String[] args) {
        Baz baz = new Baz();

        // compile-time error at (1), (2) & (3): Static method may be invoked on containing interface class only
        //bar();        // (1)
        //baz.bar();    // (2)
        //Baz.bar();    // (3)

        // interface static methods can only be accessed using interface name
        Foo.bar();      // prints "Interface Foo"
    }
}

interface Foo {
    static void bar() {
        System.out.println("Interface Foo");
    }
}
</pre>
<p>&nbsp;</p>
<h2>Interface static methods and Overriding</h2>

<table>
<table>
<tr>
<td style="text-align: center;"><strong>Interface with a static method</strong></td>
<td style="text-align: center;"><strong>Child interface with a static method with same signature and return type</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>
interface Foo {
    static void foo() {
        System.out.println("Interface Foo");
    }
}
</pre>
</td>

<td style="vertical-align: top;">
<pre>
interface Bar extends Foo {
    static void foo() {
        System.out.println("Interface Bar");
    }
}
</pre>
</td>
</tr>
</tbody>
</table>

<pre>
public class Demo {
    public static void main(String[] args) {
        Foo.foo();  // prints "Interface Foo"
        Bar.foo();  // prints "Interface Bar"
    }
}
</pre>
<p>&nbsp;</p>

<p style="text-align: justify;">Since interface static methods, by default, are not available to the concrete classes,
therefore, overriding is not applicable to interface static methods. However, you can define exactly same methods in
the child classes — it's valid, but not overriding.</p>

<pre>
interface Foo {
    static void foo() {
        System.out.println("Interface Foo");
    }
}
</pre>

<table>
<table>
<tr>
<td style="text-align: center;"><strong>Concrete class defines a static method with same signature and return type</strong></td>
<td style="text-align: center;"><strong>Concrete class defines an instance method with same signature and return type</strong></td>
<td style="text-align: center;"><strong>Concrete class defines the same static method but with reduced scope</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>
class Bar implements Foo {
  public static void foo() {
    System.out.println("Bar");
  }
}




</pre>
</td>

<td style="vertical-align: top;">
<pre>
class Baz implements Foo {
  public void foo() {
   System.out.println("Baz");
  }
}




</pre>
</td>

<td style="vertical-align: top;">
<pre>
class Qux implements Foo {
  private static void foo() {
    System.out.println("Qux");
  }

  public void invokeFoo() {
    foo();
  }
}
</pre>
</td>
</tr>
</tbody>
</table>

<pre>
public class Demo {
    public static void main(String[] args) {
        Foo.foo();                      // prints "Interface Foo"
        new Bar().foo();                // prints "Bar"
        new Baz().foo();                // prints "Baz"
        new Qux().invokeFoo();          // prints "Qux"
    }
}
</pre>
<p>&nbsp;</p>
<p style="text-align: justify;">Let's see a similar example in case of class inheritance:</p>
<pre>
class Foo {
    public static void foo() {
        System.out.println("Class Foo");
    }
}
</pre>
<table>
<table>
<tr>
<td style="text-align: center;"><strong>Concrete class defines a static method with same signature and return type</strong></td>
<td style="text-align: center;"><strong>Concrete class defines an instance method with same signature and return type</strong></td>
<td style="text-align: center;"><strong>Concrete class defines the same static method but with reduced scope</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>
class Bar extends Foo {
  public static void foo() {
    System.out.println("Bar");
  }
}






</pre>
</td>

<td style="vertical-align: top;">
<pre>
class Baz extends Foo {
  //  compile-time error at (1):
  //  Instance method 'foo()' in
  //  Baz cannot override static
  //  method 'foo()' in Person

  public void foo() {     // 1
    System.out.println("Baz");
  }
}

</pre>
</td>

<td style="vertical-align: top;">
<pre>
class Qux extends Foo {
  //  compile-time error at (2):
  // 'foo()' in Qux clashes with
  // 'foo()' in Foo; attempting
  //  to assign weaker access
  //  privileges ('private');
  //  was 'public'
  private static void foo() { // 2
    System.out.println("Bar");
  }
}
</pre>
</td>
</tr>
</tbody>
</table>

<pre>
public class Demo {
    public static void main(String[] args) {
        Foo obj1 = new Bar();
        obj1.foo(); // prints "Foo"

        Bar obj2 = new Bar();
        obj2.foo(); // prints "Bar"
    }
}
</pre>
<p>&nbsp;</p>

<h2>main() method inside interface</h2>
<p style="text-align: justify;">From java 8 onwards, we can declare <strong>public static void main()</strong> method inside an interface</p>
<pre>
public interface Person {
    public static void main(String[] args) {
        System.out.println("Hello");    // prints "Hello"
    }
}
</pre>
        */}.toString().slice(14,-3)
    },

    {   /* Built-in Functional Interfaces */
        id : 9,
		"text" : function(){/*

<p style="text-align: justify;">The <strong>JDK8 API</strong> contains many built-in functional interfaces.
Some of them are well known from <strong>JDK7 or before</strong> like <strong>Runnable</strong>, <strong>Callable</strong> or <strong>Comparator</strong>.
These existing interfaces are extended to enable Lambda support via the <strong>@FunctionalInterface</strong> annotation.</p>

<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Runnable Interface</strong></td>
<td style="text-align: center;"><strong>Callable Interface</strong></td>
<td style="text-align: center;"><strong>Comparator Interface</strong></td>
</tr>

<tr>
<td style="vertical-align: top;">
<pre>
package java.lang;

@FunctionalInterface
public interface Runnable {
    public abstract void run();
}





</pre>
</td>
<td style="vertical-align: top;">
<pre>
package java.util.concurrent;

@FunctionalInterface
public interface Callable<V> {
    V call() throws Exception;
}





</pre>
</td>
<td style="vertical-align: top;">
<pre>
package java.util;

@FunctionalInterface
public interface Comparator<T> {

    int compare(T o1, T o2);

    boolean equals(Object obj);

    // more code goes here
}
</pre>
</td>
</tr>

</tbody>
</table>

<p style="text-align: justify;">Having a single abstract method is a <i>structural</i> property of an interface that makes it eligible to be implemented with a lambda.
However, whether an interface <i>makes sense</i> or is <i>semantically</i> sensible to be implemented with lambda is a different story. The latter is the purpose of the
<strong>@FunctionalInterface</strong> annotation. When it is present on an interface, it indicates the <i>intent</i> that the interface is useful to be implemented with a lambda.</p>

<p style="text-align: justify;">Notably, the <strong>Comparable</strong> interface lacks the <strong>@FunctionalInterface</strong> annotation.</p>

<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Comparable Interface</strong></td>
</tr>
<tr>
<td>
<pre>
package java.lang;

public interface Comparable<T> {    // Not annotated with @FunctionalInterface

    public int compareTo(T o);   // Single Abstract Method
}

</pre>
</td>
</tr>
</tbody>
</table>

<p style="text-align: justify;"><strong>Comparable</strong> is <i>technically</i> a functional interface, but it makes no sense to actually implement it with a lambda.
<strong>Comparable</strong> objects really have to have <i>other state</i> that you're trying to compare, and you're supposed to compare two objects of the <i>same type</i>.
Neither of those make sense for a lambda.</p>
<p>&nbsp;</p>

<p style="text-align: justify;"><strong>Java 8 API</strong> is also full of new functional interfaces to make your life easier.
These can be found in <strong>java.util.function</strong> package. Some of the prominent ones are listed below:</p>

<table>
<tbody>
<tr>
<td style="text-align: center;"><strong>Functional Interface</strong></td>
<td style="text-align: center;"><strong>Single Abstract Method</strong></td>
<td style="text-align: center;"><strong>Takes input argument?</strong></td>
<td style="text-align: center;"><strong>Returns result?</strong></td>
</tr>
<tr>
<td>java.util.function.<strong>Predicate</strong>&lt;T&gt;</td>
<td>boolean test(T t);</td>
<td>Takes one argument</td>
<td>Returns a boolean value</td>
</tr>
<tr>
<td>java.util.function.<strong>Function</strong>&lt;T, R&gt;</td>
<td>R apply(T t);</td>
<td>Takes one argument</td>
<td>Returns some value</td>
</tr>
<tr>
<td>java.util.function.<strong>Consumer</strong>&lt;T&gt;</td>
<td>void accept(T t);</td>
<td>Takes one argument</td>
<td>Returns no result</td>
</tr>
<tr>
<td>java.util.function.<strong>Supplier</strong>&lt;R&gt;</td>
<td>R get();</td>
<td>Takes no argument</td>
<td>Returns some value</td>
</tr>

<tr>
<td>java.util.function.<strong>BiPredicate</strong>&lt;R&gt;</td>
<td>boolean test(T t, U u);</td>
<td>Takes two arguments</td>
<td>Returns a boolean value</td>
</tr>
<tr>
<td>java.util.function.<strong>BiFunction</strong>&lt;R&gt;</td>
<td>R apply(T t, U u);</td>
<td>Takes two arguments</td>
<td>Returns some value</td>
</tr>
<tr>
<td>java.util.function.<strong>BiConsumer</strong>&lt;R&gt;</td>
<td>void accept(T t, U u);</td>
<td>Takes two arguments</td>
<td>Returns no result</td>
</tr>

</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Predicate Interface */
        id : 10,
		"text" : function(){/*
<p style="text-align: justify;">Predicates are <strong>boolean-valued functions</strong> of <strong>one argument</strong>.
The interface contains various <strong>default</strong> methods for composing predicates to complex logical terms (and, or, negate) and one <strong>static</strong> method.</p>
<pre>
package java.util.function;

import java.util.Objects;

@FunctionalInterface
public interface Predicate&lt;T&gt; {

    // Evaluates this predicate on the given argument
    boolean test(T t);      // test() is the single abstract method

    // Returns a composed predicate that represents a Logical-AND of 'this' predicate and the 'other' predicate.
    // When evaluating the composed predicate, if 'this' predicate is FALSE, then the 'other' predicate is not evaluated.
    default Predicate&lt;T&gt; and(Predicate&lt;? super T&gt; other) {
        Objects.requireNonNull(other);
        return (t) -&gt; test(t) && other.test(t);
    }

    // Returns a predicate that represents the Logical-NOT (negation) of 'this' predicate.
    default Predicate&lt;T&gt; negate() {
        return (t) -&gt; !test(t);
    }

    // Returns a composed predicate that represents a Logical-OR of 'this' predicate and 'other' predicate'.
    // When evaluating the composed predicate, if 'this' predicate is TRUE, then the 'other' predicate is not evaluated.
    default Predicate&lt;T&gt; or(Predicate&lt;? super T&gt; other) {
        Objects.requireNonNull(other);
        return (t) -&gt; test(t) || other.test(t);
    }

    // Returns a predicate that tests if two arguments are equal according to Objects#equals(Object, Object)
    static &lt;T&gt; Predicate&lt;T&gt; isEqual(Object targetRef) {
        return (null == targetRef) ? Objects::isNull : object -&gt; targetRef.equals(object);
    }
}
</pre>

<p style="text-align: justify;">Below is an example that illustrates the usage of <strong>Predicate</strong> interface</p>

<pre>
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.function.Predicate;

public class PredicateDemo {
    public static final Predicate&lt;Integer&gt; integerChecker = i -&gt; i &gt; 10;

    public static final Predicate&lt;Integer&gt; integerEvenOddChecker = i -&gt; i % 2 == 0;

    public static final Predicate&lt;String&gt; stringPalindromeChecker =
        s -&gt; s.equals(new StringBuffer(s).reverse().toString());

    public static final Predicate&lt;String&gt; stringLengthChecker = s -&gt; s.length() &gt; 5;

    public static final Predicate&lt;Collection&lt;?&gt;&gt; collectionEmptyChecker = c -&gt; c.isEmpty();

    public static final Predicate&lt;String&gt; stringStartingWithK = s -&gt; s.charAt(0) == 'k' || s.charAt(0) == 'K';

    public static final Predicate&lt;String&gt; stringNotNullOrNonEmpty = s -&gt; s != null && s.length() != 0;

    public static void main(String[] args) {
        System.out.println(integerChecker.test(100));               // prints true
        System.out.println(integerChecker.test(5));                 // prints false

        System.out.println(integerChecker.negate().test(2));        // prints true
        System.out.println(integerChecker.negate().test(200));      // prints false

        foo(integerEvenOddChecker, new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10});   // prints 2, 4, 6, 8, 10,

        System.out.println(stringPalindromeChecker.test("abcba"));                              // prints true
        System.out.println(stringPalindromeChecker.test("abcd"));                               // prints false

        System.out.println(stringLengthChecker.test("holiday"));                                // prints true
        System.out.println(stringLengthChecker.test("home"));                                   // prints false

        System.out.println(stringLengthChecker.and(stringPalindromeChecker).test("racecar"));   // prints true
        System.out.println(stringLengthChecker.and(stringPalindromeChecker).test("dad"));       // prints false

        System.out.println(stringLengthChecker.or(stringPalindromeChecker).test("racecar"));    // prints true
        System.out.println(stringLengthChecker.or(stringPalindromeChecker).test("rat"));        // prints false

        System.out.println(collectionEmptyChecker.test(new ArrayList&lt;&gt;()));                     // prints true
        System.out.println(collectionEmptyChecker.test(Arrays.asList(1, 2, 3)));                // prints false

        String[] startingWithK = new String[]{"Rahul", "Kiran", "kishor", "Kumar", "Neha", "Tushar"};
        bar(stringStartingWithK, startingWithK);                                        // prints Kiran, kishor, Kumar,

        String[] nullEmptyStrings = new String[]{"abc", "", null, "def", null, "ghi", "", "klm"};
        String[] arr = baz(stringNotNullOrNonEmpty, nullEmptyStrings);
        System.out.println(Arrays.toString(arr));                                       // prints [abc, def, ghi, klm]
    }

    private static void foo(Predicate&lt;Integer&gt; p, int[] arr) {
        for (int i : arr) {
            if (p.test(i)) System.out.print(i + ", ");
        }
        System.out.println();
    }

    private static void bar(Predicate&lt;String&gt; p, String[] arr) {
        for (String s : arr) {
            if (p.test(s)) System.out.print(s + ", ");
        }
        System.out.println();
    }

    private static String[] baz(Predicate&lt;String&gt; p, String[] arr) {
        List&lt;String&gt; list = new ArrayList&lt;&gt;();
        for (String s : arr) {
            if (p.test(s)) list.add(s);
        }

        return list.toArray(new String[]{});
    }
}
</pre>
<p>&nbsp;</p>

<h2>Predicate Joining</h2>
<p style="text-align: justify;">The <strong>Predicate</strong> interface allows multiple predicates to join and form a complex predicate.
This is achieved with the help of the various <strong>default</strong> methods present in the <strong>Predicate</strong> interface:
<strong>and()</strong>, <strong>negate()</strong> and <strong>or()</strong></p>
<pre>
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class PredicateJoiningDemo {

    public static final Predicate&lt;Integer&gt; gt_10Checker = i -&gt; i &gt; 10;
    public static final Predicate&lt;Integer&gt; evenChecker = i -&gt; i % 2 == 0;

    public static void main(String[] args) {
        int[] intArr = {0, 5, 10, 15, 20, 25, 30, 35};

        print("Numbers &gt; 10: " + gt_10(intArr));                    // Numbers &gt; 10: [15, 20, 25, 30, 35]
        print("Even numbers: " + even(intArr));                     // Even numbers: [0, 10, 20, 30]
        print("Numbers &lt;= 10: " + ltEq_10(intArr));                 // Numbers &lt;= 10: [0, 5, 10]
        print("Numbers &gt; 10 AND even: " + gt_10AndEven(intArr));    // Numbers &gt; 10 AND even: [20, 30]
        print("Numbers &gt; 10 OR even: " + get_10OrEven(intArr));     // Numbers &gt; 10 OR even: [0, 10, 15, 20, 25, 30, 35]
    }

    private static List&lt;Integer&gt; gt_10(int[] input) {
        List&lt;Integer&gt; list = new ArrayList&lt;&gt;();
        for (int i : input) {
            if (gt_10Checker.test(i)) list.add(i);
        }
        return list;
    }

    private static List&lt;Integer&gt; even(int[] input) {
        List&lt;Integer&gt; list = new ArrayList&lt;&gt;();
        for (int i : input) {
            if (evenChecker.test(i)) list.add(i);
        }
        return list;
    }

    private static List&lt;Integer&gt; ltEq_10(int[] input) {
        List&lt;Integer&gt; list = new ArrayList&lt;&gt;();
        for (int i : input) {
            if (gt_10Checker.negate().test(i)) list.add(i);
        }
        return list;
    }

    private static List&lt;Integer&gt; gt_10AndEven(int[] input) {
        List&lt;Integer&gt; list = new ArrayList&lt;&gt;();
        for (int i : input) {
            if (gt_10Checker.and(evenChecker).test(i)) list.add(i);
        }
        return list;
    }

    private static List&lt;Integer&gt; get_10OrEven(int[] input) {
        List&lt;Integer&gt; list = new ArrayList&lt;&gt;();
        for (int i : input) {
            if (gt_10Checker.or(evenChecker).test(i)) list.add(i);
        }
        return list;
    }

    private static void print(String str) {
        System.out.println(str);
    }
}
</pre>
<p>&nbsp;</p>

<h2>The isEqual() method</h2>
<p style="text-align: justify;">There is a <strong>static</strong> method in the <strong>Predicate</strong> interface that returns a
predicate that tests if two arguments are equal according to Objects#equals(Object, Object)</p>
<pre>
static &lt;T&gt; Predicate&lt;T&gt; isEqual(Object targetRef) {
    return (null == targetRef) ? Objects::isNull : object -&gt; targetRef.equals(object);
}
</pre>

<p style="text-align: justify;">Example #1:</p>
<pre>
import java.util.function.Predicate;

public class PredicateIsEqualDemo {
    public static final Predicate&lt;String&gt; stringEqualChecker = Predicate.isEqual("Hello World");

    public static void main(String[] args) {
        String str1 = "Hello World";
        System.out.println(stringEqualChecker.test(str1));      // prints true

        String str2 = new String("Hello World");
        System.out.println(stringEqualChecker.test(str2));      // prints true

        System.out.println(str1 == str2);                       // prints false
        System.out.println(str1.equals(str2));                  // prints true
    }
}
</pre>

<p style="text-align: justify;">Example #2:</p>
<pre>
import java.util.Objects;
import java.util.function.Predicate;

public class PredicateIsEqualDemo {

    public static final Predicate&lt;Employee&gt; ceoChecker = Predicate.isEqual(new Employee("1", "Foo", null));

    public static void main(String[] args) {
        Employee ceo = new Employee("1", "Foo", null);
        Employee manager = new Employee("2", "Bar", "1");
        Employee employee = new Employee("3", "Baz", "2");

        System.out.println(ceoChecker.test(ceo));           // prints true
        System.out.println(ceoChecker.test(manager));       // prints false
        System.out.println(ceoChecker.test(employee));      // prints false
    }
}

class Employee {
    private String empId;
    private String name;
    private String managerId;

    public Employee(String empId, String name) {
        this.empId = empId;
        this.name = name;
    }

    public Employee(String empId, String name, String managerId) {
        this(empId, name);
        this.managerId = managerId;
    }

    // getter-setters

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return empId.equals(employee.empId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(empId);
    }
}
</pre>

        */}.toString().slice(14,-3)
    },

    {   /* Function Interface */
        id : 11,
		"text" : function(){/*
<p style="text-align: justify;">Functions accept <strong>one argument</strong> and produce a result.
Default methods can be used to chain multiple functions together (compose, andThen).</p>

<pre>
package java.util.function;

import java.util.Objects;

@FunctionalInterface
public interface Function&lt;T, R&gt; {

    // Applies this function to the given argument.
    R apply(T t);       // apply() is the single abstract method

    // Returns a composed function that first applies the 'before' function to its input, and then applies 'this'
    // function to the result.
    // e.g., f1.compose(f2);      => f1 will be applied after f2
    default &lt;V&gt; Function&lt;V, R&gt; compose(Function&lt;? super V, ? extends T&gt; before) {
        Objects.requireNonNull(before);
        return (V v) -&gt; apply(before.apply(v));
    }

    // Returns a composed function that first applies 'this' function to its input, and then applies the 'after'
    // function to the result.
    // e.g., f1.andThen(f2);      => f1 will be applied before f2
    default &lt;V&gt; Function&lt;T, V&gt; andThen(Function&lt;? super R, ? extends V&gt; after) {
        Objects.requireNonNull(after);
        return (T t) -&gt; after.apply(apply(t));
    }

    // Returns a function that always returns its input argument.
    static &lt;T&gt; Function&lt;T, T&gt; identity() {
        return t -&gt; t;
    }
}
</pre>

<p style="text-align: justify;">Example #1:</p>
<pre>
import java.util.function.Function;

public class FunctionDemo {
    public static Function&lt;String, Integer&gt; stringLengthFunction = str -&gt; str.length();

    public static Function&lt;Integer, Integer&gt; squareFunction = x -&gt; x * x;

    public static void main(String[] args) {
        System.out.println(stringLengthFunction.apply("Hello World"));  // prints 11
        System.out.println(squareFunction.apply(10));                   // prints 100
    }
}
</pre>

<p style="text-align: justify;">Example #2:</p>
<pre>
import java.util.function.Function;

public class FunctionDemo {
    public static Function&lt;String, Integer&gt; stringLengthFunction = str -&gt; str.length();

    public static Function&lt;Integer, Integer&gt; squareFunction = x -&gt; x * x;

    public static Function&lt;String, String&gt; spaceRemovalFunction = str -&gt; str.replaceAll(" ", "");

    public static Function&lt;String, Integer&gt; spaceCountingFunction =
            str -&gt; str.length() - str.replaceAll(" ", "").length();

    public static Function&lt;Student, String&gt; gradeFunction = student -&gt; {
        if (student.getMarks() &gt;= 80) {
            return "A - Distinction";
        } else if (student.getMarks() &gt;= 60) {
            return "B - First Division";
        } else if (student.getMarks() &gt;= 50) {
            return "C - Second Division";
        } else if (student.getMarks() &gt;= 35) {
            return "D - Third Division";
        } else {
            return "E - Fail";
        }
    };

    public static void main(String[] args) {
        System.out.println(stringLengthFunction.apply("Hello World"));              // prints 11
        System.out.println(squareFunction.apply(10));                               // prints 100

        System.out.println(spaceRemovalFunction.apply("How Are You?"));             // prints HowAreYou?
        System.out.println(spaceCountingFunction.apply("How Are You?"));            // prints 2

        System.out.println(gradeFunction.apply(new Student("1", "Foo", 85)));       // A - Distinction
        System.out.println(gradeFunction.apply(new Student("2", "Bar", 75)));       // B - First Division
        System.out.println(gradeFunction.apply(new Student("3", "Baz", 65)));       // B - First Division
        System.out.println(gradeFunction.apply(new Student("4", "Qux", 55)));       // C - Second Division
        System.out.println(gradeFunction.apply(new Student("5", "Quux", 45)));      // D - Third Division
        System.out.println(gradeFunction.apply(new Student("5", "Quuz", 35)));      // D - Third Division
        System.out.println(gradeFunction.apply(new Student("5", "Corge", 25)));     // E - Fail
    }
}

class Student {
    private String studentId;
    private String name;
    private Integer marks;

    public Student(String studentId, String name, Integer marks) {
        this.studentId = studentId;
        this.name = name;
        this.marks = marks;
    }

    // getter/setter goes here
}
</pre>

<p>&nbsp;</p>
<h2>Function Chaining</h2>
<p style="text-align: justify;">We can use multiple functions together for form function chaining using the
<strong>default</strong> methods in <strong>Function</strong> interface</p>
<pre>
import java.util.function.Function;

public class FunctionDemo {

    public static Function&lt;String, String&gt; uppercase = s -&gt; s.toUpperCase();

    public static Function&lt;String, String&gt; reverse = s -&gt; new StringBuffer(s).reverse().toString();

    public static Function&lt;String, String&gt; subString9 = s -&gt; s.substring(0, 9);

    public static Function&lt;Integer, Integer&gt; add = x -&gt; x + x;

    public static Function&lt;Integer, Integer&gt; square = x -&gt; x * x;

    public static void main(String[] args) {
        String s1 = uppercase.andThen(reverse).andThen(subString9).apply("Happy Programming");
        System.out.println(s1);                                     // prints GNIMMARGO

        String s2 = uppercase.compose(reverse).compose(subString9).apply("Happy Programming");
        System.out.println(s2);                                     // prints ORP YPPAH

        System.out.println(add.andThen(square).apply(5));           // prints 100
        System.out.println(square.andThen(add).apply(5));           // prints 50

        System.out.println(add.compose(square).apply(5));           // prints 50
        System.out.println(square.compose(add).apply(5));           // prints 100
    }
}
</pre>

<p>&nbsp;</p>
<h2>The identity() method</h2>
<p style="text-align: justify;">There is a <strong>static</strong> method in the <strong>Function</strong> interface that
returns a function that always returns its input argument.</p>
<pre>
static &lt;T&gt; Function&lt;T, T&gt; identity() {
    return t -&gt; t;
}
</pre>
<p style="text-align: justify;">Example #1:</p>
<pre>
import java.util.function.Function;

public class FunctionDemo {
    public static void main(String[] args) {
        System.out.println(Function.identity().apply("Foo"));   // prints Foo
        System.out.println(Function.identity().apply(10));      // prints 10
    }
}
</pre>
        */}.toString().slice(14,-3)
    },

    {   /* Consumer Interface */
        id : 12,
		"text" : function(){/*
<p style="text-align: justify;">Represents an operation that <i>accepts</i> a <strong>single input argument</strong> and
<strong>returns no result</strong>. Unlike most other functional interfaces, <strong>Consumer</strong> is expected
to operate via side-effects.</p>
<pre>
package java.util.function;

import java.util.Objects;

@FunctionalInterface
public interface Consumer&lt;T&gt; {

    // Performs this operation on the given argument
    void accept(T t);       // accept() is the single abstract method

    // Returns a composed Consumer that performs, in sequence, this operation followed by the 'after' operation.
    // e.g., f1.andThen(f2);      =&gt; f1 will be applied before f2
    default Consumer&lt;T&gt; andThen(Consumer&lt;? super T&gt; after) {
        Objects.requireNonNull(after);
        return (T t) -&gt; { accept(t); after.accept(t); };
    }
}
</pre>

<p style="text-align: justify;">Example #1:</p>
<pre>
import java.util.function.Consumer;

public class ConsumerDemo {
    public static Consumer&lt;String&gt; printer = s -&gt; System.out.println(s);

    public static Consumer&lt;Movie&gt; moviePrinter = m -&gt; {
        System.out.print(m.getName() + " ");
        System.out.print(m.getActor() + " ");
        System.out.println(m.getActress());
    };

    public static void main(String[] args) {
        printer.accept("Hello World");                                              // prints "Hello World"
        moviePrinter.accept(new Movie("Movie1", "Actor1", "Actress1"));             // prints "Movie1 Actor1 Actress1"
    }
}

class Movie {
    private String name;
    private String actor;
    private String actress;

    public Movie(String name, String actor, String actress) {
        this.name = name;
        this.actor = actor;
        this.actress = actress;
    }

    // getter/setter goes here
}
</pre>
<p>&nbsp;</p>

<h2>Consumer Chaining</h2>
<p style="text-align: justify;">We can use multiple consumers together for form consumer-chaining
using the <strong>default</strong> method in <strong>Consumer</strong> interface</p>
<pre>
import java.util.function.Consumer;

public class ConsumerDemo {
    public static Consumer&lt;Movie&gt; namePrinter = m -&gt; System.out.print(m.getName() + " ");
    public static Consumer&lt;Movie&gt; actorPrinter = m -&gt; System.out.print(m.getActor() + " ");
    public static Consumer&lt;Movie&gt; actressPrinter = m -&gt; System.out.println(m.getActress());

    public static void main(String[] args) {
        Movie movie = new Movie("Movie1", "Actor1", "Actress1");
        namePrinter.andThen(actorPrinter).andThen(actressPrinter).accept(movie);    // prints "Movie1 Actor1 Actress1"
    }
}

class Movie {
    private String name;
    private String actor;
    private String actress;

    public Movie(String name, String actor, String actress) {
        this.name = name;
        this.actor = actor;
        this.actress = actress;
    }

    // getter/setter goes here
}
</pre>
        */}.toString().slice(14,-3)
    },

    {   /* Supplier Interface */
        id : 13,
		"text" : function(){/*
<p style="text-align: justify;">Suppliers produce a result of a given generic type. Unlike Predicate, Function and
Consumer, <strong>Supplier</strong> don't accept arguments. There is no requirement that a new or distinct result
be returned each time the <strong>Supplier</strong> is invoked.</p>

<pre>
package java.util.function;

@FunctionalInterface
public interface Supplier&lt;R&gt; {

    // Gets a result
    R get();    // get() is the single abstract method
}
</pre>

<p style="text-align: justify;">Example #1: </p>
<pre>
import java.util.Date;
import java.util.function.Supplier;

public class SupplierDemo {
    public static Supplier&lt;Date&gt; systemDate = () -&gt; new Date();

    public static Supplier&lt;Long&gt; currentTimeMillis = () -&gt; System.currentTimeMillis();

    public static Supplier&lt;Integer&gt; randomNumber = () -&gt; (int) (Math.random() * 10);

    public static Supplier&lt;Integer&gt; otp4Digit = () -&gt; {
        int otp = 0;
        for (int i = 0; i &lt; 4; i++) {
            otp = (otp * 10) + randomNumber.get();
        }
        return otp;
    };

    public static void main(String[] args) {
        System.out.println(systemDate.get());           // prints current system date
        System.out.println(currentTimeMillis.get());    // prints current time in millis

        System.out.println(randomNumber.get());         // prints a random integer
        System.out.println(randomNumber.get());         // prints a random integer
        System.out.println(randomNumber.get());         // prints a random integer
        System.out.println(randomNumber.get());         // prints a random integer
        System.out.println(randomNumber.get());         // prints a random integer

        System.out.println(otp4Digit.get());            // prints a 4 digit OTP
        System.out.println(otp4Digit.get());            // prints a 4 digit OTP
        System.out.println(otp4Digit.get());            // prints a 4 digit OTP
        System.out.println(otp4Digit.get());            // prints a 4 digit OTP
    }
}
</pre>
        */}.toString().slice(14,-3)
    },

    {   /* BiPredicate Interface */
        id : 14,
		"text" : function(){/*
<p style="text-align: justify;">Represents a <strong>predicate</strong> (boolean-valued function) of
<strong>two arguments</strong>. This is the <i>two-arity specialization</i> of <strong>Predicate</strong>.</p>

<pre>
package java.util.function;

import java.util.Objects;

@FunctionalInterface
public interface BiPredicate&lt;T, U&gt; {

    // Evaluates this predicate on the given arguments.
    boolean test(T t, U u);

    // Returns a composed predicate that represents a logical-AND of this predicate and another.
    // When evaluating the composed predicate, if 'this' predicate is FALSE, then the 'other' predicate is not evaluated
    default BiPredicate&lt;T, U&gt; and(BiPredicate&lt;? super T, ? super U&gt; other) {
        Objects.requireNonNull(other);
        return (T t, U u) -&gt; test(t, u) && other.test(t, u);
    }

    // Returns a predicate that represents the logical negation of this predicate.
    default BiPredicate&lt;T, U&gt; negate() {
        return (T t, U u) -&gt; !test(t, u);
    }

    // Returns a composed predicate that represents a logical-OR of this predicate and another.
    // When evaluating the composed predicate, if 'this' predicate is TRUE, then the 'other' predicate is not evaluated
    default BiPredicate&lt;T, U&gt; or(BiPredicate&lt;? super T, ? super U&gt; other) {
        Objects.requireNonNull(other);
        return (T t, U u) -&gt; test(t, u) || other.test(t, u);
    }
}
</pre>

<p style="text-align: justify;">Example #1:</p>
<pre>
import java.util.function.BiPredicate;

public class BiPredicateDemo {
    public static BiPredicate&lt;Integer, Integer&gt; isSumEven = (a, b) -&gt; (a + b) % 2 == 0;

    public static void main(String[] args) {
        System.out.println(isSumEven.test(5, 10));      // prints false
        System.out.println(isSumEven.test(10, 20));     // print true
    }
}
</pre>
        */}.toString().slice(14,-3)
    },

    {   /* BiFunction Interface */
        id : 15,
		"text" : function(){/*
<p style="text-align: justify;">Represents a <strong>function</strong> that accepts <strong>two arguments</strong> and
produces a result. This is the <i>two-arity specialization</i> of <strong>Function</strong>.</p>

<pre>
package java.util.function;

import java.util.Objects;

@FunctionalInterface
public interface BiFunction&lt;T, U, R&gt; {

    // Applies this function to the given arguments.
    R apply(T t, U u);

    // Returns a composed function that first applies 'this' function to its input, and then applies the 'after'
    // function to the result.
    // // e.g., f1.andThen(f2);      => f1 will be applied before f2
    default &lt;V&gt; BiFunction&lt;T, U, V&gt; andThen(Function&lt;? super R, ? extends V&gt; after) {
        Objects.requireNonNull(after);
        return (T t, U u) -&gt; after.apply(apply(t, u));
    }
}
</pre>

<p style="text-align: justify;">Example #1:</p>
<pre>
import java.util.function.BiFunction;

public class BiFunctionDemo {
    public static BiFunction&lt;Integer, Integer, Integer&gt; productBiFunction = (a, b) -&gt; a * b;

    public static BiFunction&lt;String, String, Employee&gt; employeeBiFunction = (empId, name) -&gt; new Employee(empId, name);

    public static void main(String[] args) {
        System.out.println(productBiFunction.apply(2, 5));          // prints 10
        System.out.println(productBiFunction.apply(10, 20));        // prints 200

        System.out.println(employeeBiFunction.apply("1", "Foo"));   // prints Employee{empId='1', name='Foo'}
        System.out.println(employeeBiFunction.apply("2", "Bar"));   // prints Employee{empId='2', name='Bar'}
        System.out.println(employeeBiFunction.apply("3", "Baz"));   // prints Employee{empId='3', name='Baz'}
    }
}

class Employee {
    private String empId;
    private String name;

    public Employee(String empId, String name) {
        this.empId = empId;
        this.name = name;
    }

    // getter/setter goes here

    @Override
    public String toString() {
        return "Employee{" +
                "empId='" + empId + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
</pre>
        */}.toString().slice(14,-3)
    },

    {   /* BiConsumer Interface */
        id : 16,
		"text" : function(){/*
<p style="text-align: justify;">Represents an operation that accepts <strong>two input arguments</strong> and
<strong>returns no result</strong>. This is the <i>two-arity specialization</i> of <strong>Consumer</strong>.</p>

<pre>
package java.util.function;

import java.util.Objects;

@FunctionalInterface
public interface BiConsumer&lt;T, U&gt; {

    // Performs this operation on the given arguments.
    void accept(T t, U u);

    // Returns a composed BiConsumer that performs, in sequence, 'this' operation followed by the 'after' operation.
    default BiConsumer&lt;T, U&gt; andThen(BiConsumer&lt;? super T, ? super U&gt; after) {
        Objects.requireNonNull(after);

        return (l, r) -&gt; {
            accept(l, r);
            after.accept(l, r);
        };
    }
}
</pre>

<p style="text-align: justify;">Example #1:</p>
<pre>
import java.util.function.BiConsumer;

public class BiConsumerDemo {
    public static BiConsumer&lt;String, String&gt; concatPrinter = (s1, s2) -&gt; System.out.println(s1 + " " + s2);

    public static void main(String[] args) {
        concatPrinter.accept("Hello", "World");     // prints "Hello World"
    }
}
</pre>
        */}.toString().slice(14,-3)
    },

    {   /* Primitive Type Functional Interfaces */
        id : 17,
		"text" : function(){/*
<h2>Primitive Predicates</h2>
<p style="text-align: justify;"><strong>java.util.function.IntPredicate</strong> represents a predicate (boolean-valued
function) of one 'int'-valued argument. This is the 'int'-consuming primitive type specialization of 'Predicate'.</p>
<pre>
package java.util.function;

import java.util.Objects;

@FunctionalInterface
public interface IntPredicate {

     // Evaluates this predicate on the given argument.
    boolean test(int value);

     // Returns a composed predicate that represents a short-circuiting logical-AND of this predicate and another. When
     // evaluating the composed predicate, if this predicate is 'false', then the 'other' predicate is not evaluated.
    default IntPredicate and(IntPredicate other) {
        Objects.requireNonNull(other);
        return (value) -> test(value) && other.test(value);
    }

     // Returns a predicate that represents the logical negation of this predicate.
    default IntPredicate negate() {
        return (value) -> !test(value);
    }

     // Returns a composed predicate that represents a short-circuiting logical-OR of this predicate and another. When
     // evaluating the composed predicate, if this predicate is 'true', then the 'other' predicate is not evaluated.
    default IntPredicate or(IntPredicate other) {
        Objects.requireNonNull(other);
        return (value) -> test(value) || other.test(value);
    }
}
</pre>

<p style="text-align: justify;"><strong>java.util.function.Predicate</strong> interface always works on Object type params.
If a primitive type value is passed, it is autoboxed into Wrapper classes in order to use this interface:</p>
<table>
<tr>
<td style="vertical-align: top; text-align: center;">Using <strong>java.util.function.Predicate</strong> Interface</td>
<td style="vertical-align: top; text-align: center;">Using <strong>java.util.function.IntPredicate</strong> Interface</td>
</tr>

<tr>
<td>
<pre>
import java.util.function.Predicate;

public class PredicateDemo {
    static final Predicate<Integer> evenChecker =
                    i -> i % 2 == 0;

    public static void main(String[] args) {
        int[] inputArr = {1, 2, 3, 4, 5};
        for (int x : inputArr) {
            if (evenChecker.test(x)) {
                System.out.print(x + ", ");
            }
        }
    }
}
</pre>
</td>

<td>
<pre>
import java.util.function.IntPredicate;

public class IntPredicateDemo {
    static final IntPredicate evenChecker =
                    i -> i % 2 == 0;

    public static void main(String[] args) {
        int[] inputArr = {1, 2, 3, 4, 5};
        for (int x : inputArr) {
            if (evenChecker.test(x)) {
                System.out.print(x + ", ");
            }
        }
    }
}
</pre>
</td>
</tr>
</table>
<p>&nbsp;</p>

<table>
<tr>
<td style="vertical-align: top; text-align: center;"><strong>Primitive type functional interfaces (Predicate)</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Single Abstract Method</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Description</strong></td>
</tr>

<tr>
<td>java.util.function.IntPredicate</td>
<td>boolean test(int value);</td>
<td>int-consuming primitive type specialization of Predicate</td>
</tr>

<tr>
<td>java.util.function.LongPredicate</td>
<td>boolean test(long value);</td>
<td>long-consuming primitive type specialization of Predicate</td>
</tr>

<tr>
<td>java.util.function.DoublePredicate</td>
<td>boolean test(double value);</td>
<td>double-consuming primitive type specialization of Predicate</td>
</tr>

</table>

<h2>Primitive Functions</h2>
<table>
<tr>
<td style="vertical-align: top; text-align: center;"><strong>java.util.function.IntFunction</strong> Interface</td>
<td style="vertical-align: top; text-align: center;"><strong>java.util.function.ToIntFunction</strong> Interface</td>
</tr>

<tr>
<td>Represents a function that accepts an int-valued argument and produces a result. This is the int-consuming primitive specialization for 'Function'</td>
<td>Represents a function that produces an int-valued result. This is the int-producing primitive specialization for 'Function'</td>
</tr>

<tr>
<td>
<pre>
package java.util.function;

@FunctionalInterface
public interface IntFunction&lt;R&gt; {
     // Applies this function to the given argument.
    R apply(int value);
}
</pre>
</td>

<td>
<pre>
package java.util.function;

@FunctionalInterface
public interface ToIntFunction&lt;T&gt; {
     // Applies this function to the given argument.
    int applyAsInt(T value);
}
</pre>
</td>
</tr>
</table>
<p>&nbsp;</p>

<table>
<tr>
<td style="vertical-align: top; text-align: center;"><strong>Primitive type functional interfaces (Function)</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Single Abstract Method</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Description</strong></td>
</tr>

<tr>
<td>java.util.function.IntFunction&lt;R&gt;</td>
<td>R apply(int value);</td>
<td>Accepts an int and produces a result</td>
</tr>

<tr>
<td>java.util.function.LongFunction&lt;R&gt;</td>
<td>R apply(long value);</td>
<td>Accepts a long and produces a result</td>
</tr>

<tr>
<td>java.util.function.DoubleFunction&lt;R&gt;</td>
<td>R apply(double value);</td>
<td>Accepts a double and produces a result</td>
</tr>

<tr>
<td>java.util.function.ToIntFunction&lt;T&gt;</td>
<td>int applyAsInt(T value);</td>
<td>Produces an int-valued result</td>
</tr>

<tr>
<td>java.util.function.ToLongFunction&lt;T&gt;</td>
<td>long applyAsLong(T value);</td>
<td>Produces a long-valued result</td>
</tr>

<tr>
<td>java.util.function.ToDoubleFunction&lt;T&gt;</td>
<td>long applyAsDouble(T value);</td>
<td>Produces a double-valued result</td>
</tr>

<tr>
<td>java.util.function.IntToLongFunction</td>
<td>long applyAsLong(int value);</td>
<td>Accepts an int and produces a long</td>
</tr>

<tr>
<td>java.util.function.IntToDoubleFunction</td>
<td>double applyAsDouble(int value);</td>
<td>Accepts an int and produces a double</td>
</tr>

<tr>
<td>java.util.function.LongToIntFunction</td>
<td>int applyAsInt(long value);</td>
<td>Accepts a long and produces an int</td>
</tr>

<tr>
<td>java.util.function.LongToDoubleFunction</td>
<td>double applyAsDouble(long value);</td>
<td>Accepts a long and produces a double</td>
</tr>

<tr>
<td>java.util.function.DoubleToIntFunction</td>
<td>int applyAsInt(double value);</td>
<td>Accepts a double and produces an int</td>
</tr>

<tr>
<td>java.util.function.DoubleToLongFunction</td>
<td>long applyAsLong(double value);</td>
<td>Accepts a double and produces a long</td>
</tr>

<tr>
<td>java.util.function.ToIntBiFunction&lt;T&gt;&lt;U&gt;</td>
<td>int applyAsInt(T t, U u);</td>
<td>Accepts two arguments and produces an int result</td>
</tr>

<tr>
<td>java.util.function.ToLongBiFunction&lt;T&gt;&lt;U&gt;</td>
<td>long applyAsLong(T t, U u);</td>
<td>Accepts two arguments and produces a long result</td>
</tr>

<tr>
<td>java.util.function.ToDoubleBiFunction&lt;T&gt;&lt;U&gt;</td>
<td>double applyAsDouble(T t, U u);</td>
<td>Accepts two arguments and produces a double result</td>
</tr>
</table>

<h2>Primitive Consumers</h2>

<table>
<tr>
<td style="vertical-align: top; text-align: center;"><strong>java.util.function.IntConsumer</strong> Interface</td>
<td style="vertical-align: top; text-align: center;"><strong>java.util.function.ObjIntConsumer</strong> Interface</td>
</tr>

<tr>
<td>Represents an operation that accepts a single int-valued argument and returns no result</td>
<td>Represents an operation that accepts an object-valued and a int-valued argument, and returns no result.</td>
</tr>

<tr>
<td style="vertical-align: top;">
<pre>
package java.util.function;

import java.util.Objects;

@FunctionalInterface
public interface IntConsumer {

    // Performs this operation on the given argument.
    void accept(int value);

    // Returns a composed 'IntConsumer' that
    // performs, in sequence, this operation
    // followed by the 'after' operation.
    default IntConsumer andThen(IntConsumer after) {
        Objects.requireNonNull(after);
        return (int t) -> {
            accept(t);
            after.accept(t);
        };
    }
}
</pre>
</td>

<td style="vertical-align: top;">
<pre>
package java.util.function;

@FunctionalInterface
public interface ObjIntConsumer&lt;T&gt; {
     // Performs this operation on the
     // given arguments.
    void accept(T t, int value);
}













</pre>
</td>
</tr>
</table>

<p style="text-align: justify;"><strong>java.util.function.Consumer</strong> interface always works on Object type params.
If a primitive type value is passed, it is autoboxed into Wrapper classes in order to use this interface. Similarly,
<strong>java.util.function.BiConsumer<Employee, Integer></strong> interface would work on <strong>Employee</strong> object
and an <strong>Integer</strong> object — again a wrapper class, so autoboxing is involved.</p>

<table>
<tr>
<td style="vertical-align: top; text-align: center;">Using <strong>java.util.function.IntConsumer</strong> Interface</td>
<td style="vertical-align: top; text-align: center;">Using <strong>java.util.function.ObjIntConsumer</strong> Interface</td>
</tr>

<tr>
<td style="vertical-align: top;">
<pre>
import java.util.function.IntConsumer;

public class IntConsumerDemo {
    static IntConsumer squarePrinter =
            i -> System.out.println(i * i);

    public static void main(String[] args) {
        squarePrinter.accept(10);   // prints 100
        squarePrinter.accept(20);   // prints 400
    }
}


</pre>
</td>

<td style="vertical-align: top;">
<pre>
import java.util.function.ObjIntConsumer;

public class ObjIntConsumerDemo {
    static ObjIntConsumer<Employee> salaryincrement =
            (e, i) -> e.setSalary(e.getSalary() + i);

    public static void main(String[] args) {
        Employee e = new Employee("Foo", 1000);
        System.out.println(e);
        salaryincrement.accept(e, 100);
        System.out.println(e);
    }
}
</pre>
</td>
</tr>
</table>
<p>&nbsp;</p>

<table>
<tr>
<td style="vertical-align: top; text-align: center;"><strong>Primitive type functional interfaces (Consumer)</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Single Abstract Method</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Description</strong></td>
</tr>

<tr>
<td>java.util.function.IntConsumer</td>
<td>void accept(int value);</td>
<td>Accepts an int and returns nothing</td>
</tr>

<tr>
<td>java.util.function.LongConsumer</td>
<td>void accept(long value);</td>
<td>Accepts a long and returns nothing</td>
</tr>

<tr>
<td>java.util.function.DoubleConsumer</td>
<td>void accept(double value);</td>
<td>Accepts a double and returns nothing</td>
</tr>

<tr>
<td>java.util.function.ObjIntConsumer&lt;T&gt;</td>
<td>void accept(T t, int value);</td>
<td>Accepts an object and an int and returns nothing</td>
</tr>

<tr>
<td>java.util.function.ObjLongConsumer&lt;T&gt;</td>
<td>void accept(T t, long value);</td>
<td>Accepts an object and a long and returns nothing</td>
</tr>

<tr>
<td>java.util.function.ObjDoubleConsumer&lt;T&gt;</td>
<td>void accept(T t, double value);</td>
<td>Accepts an object and a double and returns nothing</td>
</tr>
</table>

<h2>Primitive Suppliers</h2>

<table>
<tr>
<td style="vertical-align: top; text-align: center;"><strong>java.util.function.Supplier</strong> Interface</td>
<td style="vertical-align: top; text-align: center;"><strong>java.util.function.IntSupplier</strong> Interface</td>
</tr>

<tr>
<td style="vertical-align: top;">
<pre>
package java.util.function;

// Represents a supplier of results.
@FunctionalInterface
public interface Supplier&lt;R&gt; {
    R get();
}

</pre>
</td>

<td style="vertical-align: top;">
<pre>
package java.util.function;

// Represents a supplier of int result
@FunctionalInterface
public interface IntSupplier {
    int getAsInt();
}

</pre>
</td>
</tr>
</table>
<p>&nbsp;</p>
<pre>
import java.util.function.IntSupplier;

public class IntSupplierDemo {
    static IntSupplier randomNumber = () -> (int) (Math.random() * 10);

    public static void main(String[] args) {
        System.out.println(randomNumber.getAsInt());        // prints a random number between 0 to 9
        System.out.println(randomNumber.getAsInt());        // prints a random number between 0 to 9
        System.out.println(randomNumber.getAsInt());        // prints a random number between 0 to 9
        System.out.println(randomNumber.getAsInt());        // prints a random number between 0 to 9
        System.out.println(randomNumber.getAsInt());        // prints a random number between 0 to 9
    }
}
</pre>

<table>
<tr>
<td style="vertical-align: top; text-align: center;"><strong>Primitive type functional interfaces (Supplier)</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Single Abstract Method</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Description</strong></td>
</tr>

<tr>
<td>java.util.function.BooleanSupplier</td>
<td>boolean getAsBoolean();</td>
<td>Represents a supplier of boolean-valued results</td>
</tr>

<tr>
<td>java.util.function.IntSupplier</td>
<td>boolean getAsInt();</td>
<td>Represents a supplier of int-valued results</td>
</tr>

<tr>
<td>java.util.function.LongSupplier</td>
<td>boolean getAsLong();</td>
<td>Represents a supplier of long-valued results</td>
</tr>

<tr>
<td>java.util.function.DoubleSupplier</td>
<td>boolean getAsDouble();</td>
<td>Represents a supplier of double-valued results</td>
</tr>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* UnaryOperator Interface */
        id : 18,
		"text" : function(){/*
<p style="text-align: justify;">When an <strong>input</strong> and the <strong>result</strong> of a function are of same
type, then we should use <strong>UnaryOperator</strong> Interface. This interface represents an operation on a single
operand, and produces a result of the same type as its operand.</p>

<pre>
package java.util.function;

@FunctionalInterface
public interface UnaryOperator&lt;T&gt; extends Function&lt;T, T&gt; {

    // Returns a unary operator that always returns its input argument.
    static &lt;T&gt; UnaryOperator&lt;T&gt; identity() {
        return t -&gt; t;
    }
}
</pre>

<p style="text-align: justify;"><strong>UnaryOperator</strong> <i>is-a</i> <strong>Function</strong>, so it inherits
<strong>R apply(T t);</strong> method from its parent interface.</p>

<table>
<tr>
    <td style="vertical-align: top; text-align: center;"><strong>Function</strong> Interface</td>
    <td style="vertical-align: top; text-align: center;"><strong>UnaryOperator</strong> Interface</td>
</tr>

<tr>
<td>
<pre>
package java.util.function;

@FunctionalInterface
public interface Function&lt;T, R&gt; {

    R apply(T t);

    // more code goes here
}
</pre>
</td>

<td>
<pre>
package java.util.function;

@FunctionalInterface
public interface UnaryOperator&lt;T&gt;
    extends Function&lt;T, T&gt; {

    T apply(T t); // effective signature

    // more code goes here
}
</pre>
</td>
</tr>
</table>

<p>Example #1:</p>

<table>
<tr>
    <td style="vertical-align: top; text-align: center;">Using <strong>Function</strong> Interface</td>
    <td style="vertical-align: top; text-align: center;">Using <strong>UnaryOperator</strong> Interface</td>
</tr>

<tr>
<td>
<pre>
import java.util.function.Function;

public class FunctionDemo {
    static Function&lt;Integer, Integer&gt; sqFunction =
        i -&gt; i * i;

    public static void main(String[] args) {
        System.out.println(sqFunction.apply(10));
    }
}
</pre>
</td>

<td>
<pre>
import java.util.function.UnaryOperator;

public class UnaryOperatorDemo {
    static UnaryOperator&lt;Integer&gt; sqOperator =
        i -&gt; i * i;

    public static void main(String[] args) {
        System.out.println(sqOperator.apply(10));
    }
}
</pre>
</td>
</tr>
</table>

<p style="text-align: justify;">If the input and result are primitives than we can use the primitive type functional
interfaces for <strong>UnaryOperator</strong></p>

<table>
<tr>
<td style="vertical-align: top; text-align: center;" width=90px><strong>Primitive type functional interfaces (UnaryOperator)</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Single Abstract Method</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Description</strong></td>
</tr>

<tr>
<td>java.util.function.<strong>IntUnaryOperator</strong></td>
<td>int applyAs<strong>Int</strong>(int operand);</td>
<td>Represents an operation on an int that produces an int</td>
</tr>

<tr>
<td>java.util.function.<strong>LongUnaryOperator</strong></td>
<td>int applyAs<strong>Long</strong>(long operand);</td>
<td>Represents an operation on a long that produces a long</td>
</tr>

<tr>
<td>java.util.function.<strong>DoubleUnaryOperator</strong></td>
<td>int applyAs<strong>Double</strong>(double operand);</td>
<td>Represents an operation on a double that produces a double</td>
</tr>

</table>
        */}.toString().slice(14,-3)
    },

    {   /* BinaryOperator Interface */
        id : 19,
		"text" : function(){/*
<p style="text-align: justify;">When both the <strong>inputs</strong> and the <strong>result</strong> of a
<strong>BiFunction</strong> are of same type, then we should use <strong>BinaryOperator</strong> Interface. This interface
represents an operation upon two operands of the same type, producing a result of the same type as the operands.</p>

<pre>
package java.util.function;

import java.util.Objects;
import java.util.Comparator;

@FunctionalInterface
public interface BinaryOperator&lt;T&gt; extends BiFunction&lt;T, T, T&gt; {

    // Returns a 'BinaryOperator' which returns the lesser of two elements according to the specified 'Comparator'
    public static &lt;T&gt; BinaryOperator&lt;T&gt; minBy(Comparator&lt;? super T&gt; comparator) {
        Objects.requireNonNull(comparator);
        return (a, b) -&gt; comparator.compare(a, b) &lt;= 0 ? a : b;
    }

    // Returns a 'BinaryOperator' which returns the greater of two elements according to the specified 'Comparator'
    public static &lt;T&gt; BinaryOperator&lt;T&gt; maxBy(Comparator&lt;? super T&gt; comparator) {
        Objects.requireNonNull(comparator);
        return (a, b) -&gt; comparator.compare(a, b) &gt;= 0 ? a : b;
    }
}
</pre>

<p style="text-align: justify;"><strong>UnaryOperator</strong> <i>is-a</i> <strong>Function</strong>, so it inherits
<strong>R apply(T t);</strong> method from its parent interface.</p>

<table>
<tr>
    <td style="vertical-align: top; text-align: center;"><strong>BiFunction</strong> Interface</td>
    <td style="vertical-align: top; text-align: center;"><strong>BinaryOperator</strong> Interface</td>
</tr>

<tr>
<td style="vertical-align: top;">
<pre>
package java.util.function;

@FunctionalInterface
public interface BiFunction&lt;T, U, R&gt; {
    R apply(T t, U u);

    // more code goes here
}

</pre>
</td>

<td style="vertical-align: top;">
<pre>
package java.util.function;

@FunctionalInterface
public interface BinaryOperator&lt;T&gt;
    extends BiFunction&lt;T, T, T&gt; {
    T apply(T t1, T t2);    // effective signature

    // more code goes here
}
</pre>
</td>
</tr>
</table>

<p style="text-align: justify;">Example #1: </p>
<table>
<tr>
    <td style="vertical-align: top; text-align: center;">Using <strong>BiFunction</strong> Interface</td>
    <td style="vertical-align: top; text-align: center;">Using <strong>BinaryOperator</strong> Interface</td>
</tr>

<tr>
<td style="vertical-align: top;">
<pre>
import java.util.function.BiFunction;

public class BiFunctionDemo {
    public static BiFunction&lt;Integer, Integer, Integer&gt
        sumBiFunction = (a, b) -> a + b;

    public static void main(String[] args) {
        System.out.println(
            sumBiFunction.apply(2, 5)
        );

        System.out.println(
            sumBiFunction.apply(10, 20)
        );
    }
}
</pre>
</td>

<td style="vertical-align: top;">
<pre>
import java.util.function.BinaryOperator;

public class BinaryOperatorDemo {
    static BinaryOperator<Integer>
        sumOperator = (a, b) -> a + b;

    public static void main(String[] args) {
        System.out.println(
            sumOperator.apply(2, 5)
        );

        System.out.println(
            sumOperator.apply(10, 20)
        );
    }
}
</pre>
</td>
</tr>
</table>

<p style="text-align: justify;">If the inputs and result are primitives than we can use the primitive type functional
interfaces for <strong>BinaryOperator</strong></p>
<table>
<tr>
<td style="vertical-align: top; text-align: center;" width=90px><strong>Primitive type functional interfaces (UnaryOperator)</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Single Abstract Method</strong></td>
<td style="vertical-align: top; text-align: center;"><strong>Description</strong></td>
</tr>

<tr>
<td>java.util.function.<strong>IntBinaryOperator</strong></td>
<td>int applyAs<strong>Int</strong>(int left, int right);</td>
<td>Represents an operation on two int that produces an int</td>
</tr>

<tr>
<td>java.util.function.<strong>LongBinaryOperator</strong></td>
<td>int applyAs<strong>Long</strong>(int left, int right);</td>
<td>Represents an operation on two long that produces a long</td>
</tr>

<tr>
<td>java.util.function.<strong>DoubleBinaryOperator</strong></td>
<td>int applyAs<strong>Double</strong>(int left, int right);</td>
<td>Represents an operation on two double that produces a double</td>
</tr>

</table>

        */}.toString().slice(14,-3)
    },

    {   /* Optional */
        id : 20,
		"text" : function(){/*
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },

    {   /* Method & Constructor reference using double-colon (::) operator */
        id : 21,
		"text" : function(){/*
https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },

    {   /* Stream API */
        id : 22,
		"text" : function(){/*
<p style="text-align: justify;">A <strong>java.util.Stream</strong> represents a sequence of elements on which one or
more operations can be performed. Stream operations are either <strong>Intermediate</strong> or <strong>Terminal</strong>
— while <i>terminal operations</i> return a result of a certain type, <i>intermediate operations</i> return the stream
itself so you can chain multiple method-calls in a row. Streams are created on a source, e.g. a <strong>java.util.Collection</strong>
like lists or sets (<strong>maps are not supported</strong>). Stream operations can either be executed sequentially or in parallel.</p>

<pre>
package java.util.stream;

public interface Stream&lt;T&gt; extends BaseStream&lt;T, Stream&lt;T&gt;&gt; {

    // Returns a stream consisting of the elements
    // of this stream that match the given predicate.
    Stream&lt;T&gt; filter(Predicate&lt;? super T&gt; predicate);                       // intermediate operation

    // Returns a stream consisting of the elements of
    // this stream, sorted according to natural order.
    Stream&lt;T&gt; sorted();                                                     // stateful intermediate operation

    // Returns a stream consisting of the elements of this
    // stream, sorted according to the provided Comparator.
    Stream&lt;T&gt; sorted(Comparator&lt;? super T&gt; comparator);                     // stateful intermediate operation

    // Returns a stream consisting of the results of applying
    // the given function to the elements of this stream.
    &lt;R&gt; Stream&lt;R&gt; map(Function&lt;? super T, ? extends R&gt; mapper);             // intermediate operation

    // Returns whether any elements of this stream match the
    // provided predicate. If the stream is empty then FALSE
    // is returned and the predicate is not evaluated.
    boolean anyMatch(Predicate&lt;? super T&gt; predicate);

    // Returns whether all elements of this stream match the
    // provided predicate. If the stream is empty then TRUE
    // is returned and the predicate is not evaluated.
    boolean allMatch(Predicate&lt;? super T&gt; predicate);

    // Returns whether no elements of this stream match the
    // provided predicate. If the stream is empty then TRUE
    // is returned and the predicate is not evaluated.
    boolean noneMatch(Predicate&lt;? super T&gt; predicate);

    // Returns the count of elements in this stream
    long count();

    Optional<T> reduce(BinaryOperator<T> accumulator);

    // Returns a stream consisting of the distinct elements
    // of this stream. Uses Object#equals(Object)
    Stream&lt;T&gt; distinct();                                                   // stateful intermediate operation

    // Performs an action for each element of this stream.
    void forEach(Consumer&lt;? super T&gt; action);                               // terminal operation

    // Performs a Mutable-Reduction operation on the elements
    // of this stream using aCollector
    &lt;R, A&gt; R collect(Collector&lt;? super T, A, R&gt; collector);                 // terminal operation

    // more code goes here
}
</pre>

<p style="text-align: justify;"><strong>java.util.Collection</strong> in Java 8 are extended so you can simply create
streams either by calling <strong>Collection.stream()</strong> or <strong>Collection.parallelStream()</strong>.</p>

<pre>
package java.util;

public interface Collection&lt;E&gt; extends Iterable&lt;E&gt; {

    // more code goes here

    // Returns a sequential Stream with this collection as its source.
    default Stream&lt;E&gt; stream() {
        return StreamSupport.stream(spliterator(), false);
    }

    // Returns a possibly parallel Stream with this collection as its source.
    // It is allowable for this method to return a sequential stream.
    default Stream&lt;E&gt; parallelStream() {
        return StreamSupport.stream(spliterator(), true);
    }

    @Override       // inherited from java.lang.Iterable
    default Spliterator&lt;E&gt; spliterator() {
        // java.util.SplitIterator traverses and partitions elements of a source to achieve parallelism
        return Spliterators.spliterator(this, 0);
    }
}
</pre>

<p style="text-align: justify;">Following are the most common stream operations:</p>

<h3>Filter</h3>
<p style="text-align: justify;"><strong>Filter</strong> accepts a <strong>Predicate</strong> to filter all elements of
the stream. This operation is <i>intermediate</i> which enables us to call another stream operation (<strong>forEach</strong>)
on the result. <strong>ForEach</strong> accepts a <strong>Consumer</strong> to be executed for each element in the
filtered stream. <strong>ForEach</strong> is a terminal operation. It's <strong>void</strong>, so we cannot call another
stream operation.</p>

<pre>
import java.util.Arrays;
import java.util.List;

public class StreamDemo {
    public static void main(String[] args) {
        List&lt;String&gt; stringList = Arrays.asList("foo", "bar", "baz", "qux", "quux", "quuz", "corge", "grault");

        stringList
                .stream()
                .filter(s -> s.startsWith("b"))
                .forEach(s -> System.out.print(s + ", "));      //prints "bar, baz, "
    }
}
</pre>

<h3>Sorted</h3>
<p style="text-align: justify;">Sorted is an <i>intermediate</i> operation which returns a sorted view of the stream.
The elements are sorted in natural order unless you pass a custom <strong>Comparator</strong>.</p>

<pre>
import java.util.Arrays;
import java.util.List;

public class StreamDemo {
    public static void main(String[] args) {
        List&lt;String&gt; stringList = Arrays.asList("foo", "bar", "baz", "qux", "quux", "quuz", "corge", "grault");

        stringList
                .stream()
                .sorted()                                      // (1)
//                .sorted((s1, s2) -> s1.compareTo(s2))        // (2)
                .filter(s -> s.startsWith("b"))
                .forEach(s -> System.out.print(s + ", "));     // prints "bar, baz, "

        System.out.println(stringList);                        // prints [foo, bar, baz, qux, quux, quuz, corge, grault]
    }
}
</pre>
<p style="text-align: justify;">Note that (1) or (2) above does only create a sorted view of the stream without manipulating
the ordering of the backed collection. Hence, the ordering of <strong>stringList</strong> remains untouched.</p>

<h3>Map</h3>
<p style="text-align: justify;">The <i>intermediate</i> operation <strong>map()</strong> converts each element into another object via the
given <strong>Function</strong>. The following example converts each string into uppercase:</p>

<pre>
import java.util.Arrays;
import java.util.List;

public class StreamDemo {
    public static void main(String[] args) {
        List&lt;String&gt; stringList = Arrays.asList("foo", "bar", "baz", "qux", "quux", "quuz", "corge", "grault");

        stringList
                .stream()
                .map(s -> s.toUpperCase())                  // takes a Function for transformation
                .sorted((s1, s2) -> s1.compareTo(s2))
                .forEach(s -> System.out.print(s + ", "));  //prints "BAR, BAZ, CORGE, FOO, GRAULT, QUUX, QUUZ, QUX, "
    }
}
</pre>

<p style="text-align: justify;">But you can also use map to transform each object into another type. The generic type of
the resulting stream depends on the generic type of the <strong>Function</strong> you pass to <strong>map()</strong>.</p>



<h3>Match</h3>
<p style="text-align: justify;">Various matching operations can be used to check whether a certain predicate matches the
stream. All of those operations are <i>terminal</i> and return a boolean result.</p>

<pre>
import java.util.Arrays;
import java.util.List;

public class StreamDemo {
    public static void main(String[] args) {
        List&lt;String&gt; stringList = Arrays.asList("foo", "bar", "baz", "qux", "quux", "quuz", "corge", "grault");

        System.out.println("Do all strings start with 'a'? " +
                stringList.stream().allMatch(s -> s.startsWith("a")));                  // false

        System.out.println("Are there strings starting with 'b'? " +
                stringList.stream().anyMatch(s -> s.startsWith("b")));                  // true

        System.out.println("None of the strings start with 'z'? " +
                stringList.stream().noneMatch(s -> s.startsWith("z")));                 // true
    }
}
</pre>

<h3>Count</h3>
<p style="text-align: justify;">Count is a <i>terminal</i> operation that returns the number of elements in the stream.</p>

<pre>
import java.util.Arrays;
import java.util.List;

public class StreamDemo {
    public static void main(String[] args) {
        List&lt;String&gt; stringList = Arrays.asList("foo", "bar", "baz", "qux", "quux", "quuz", "corge", "grault");

        long count = stringList.stream().filter(s -> s.startsWith("b")).count();
        System.out.println("Number of strings that start with 'b': " + count);               // prints 2
    }
}
</pre>

<h3>Reduce</h3>
<p style="text-align: justify;">This <i>terminal</i> operation performs a reduction on the elements of the stream with
the given function. The result is an <code>Optional</code> holding the reduced value.</p>

<pre>
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class StreamDemo {
    public static void main(String[] args) {
        List&lt;String&gt; stringList = Arrays.asList("foo", "bar", "baz", "qux", "quux", "quuz", "corge", "grault");

        Optional&lt;String&gt; reducedString = stringList.stream().sorted().reduce((s1, s2) -> s1 + "_" + s2);
        reducedString.ifPresent(s -> System.out.println(s));     // prints "bar_baz_corge_foo_grault_quux_quuz_qux"
    }
}
</pre>

<h3>ToArray()</h3>
<p style="text-align: justify;">TODO</p>

<h3>Stream.of()</h3>
<p style="text-align: justify;">TODO</p>

<p>&nbsp;</p>

<h2>Parallel Streams</h2>
<p style="text-align: justify;">While operations on a <strong>Sequential Stream</strong> are performed using a
<strong>Single-Thread</strong>, those on a <strong>Parallel Stream</strong> are performed <i>concurrently</i> using
<strong>multiple threads</strong>. To illustrate this, let's create a large list of unique elements measure the time it
takes to sort a stream of this collection.<p>

<pre>
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class StreamDemo {
    public static void main(String[] args) {
        int tenMillion = 10000000;
        List&lt;Integer&gt; intList = new ArrayList&lt;&gt;(tenMillion);
        for (int i = 0; i &lt; tenMillion; i++) intList.add((int) (Math.random() * 10000));
        sortUsingSequentialStream(intList);
        sortUsingParallelStream(intList);
    }

    static void sortUsingSequentialStream(List&lt;Integer&gt; intList) {
        long start = System.currentTimeMillis();
        List&lt;Integer&gt; sortedList = intList.stream().sorted().collect(Collectors.toList());
        long end = System.currentTimeMillis();
        System.out.println(String.format("Time Taken %d ms", end - start));     // prints "Time Taken 8437 ms"
    }

    static void sortUsingParallelStream(List&lt;Integer&gt; intList) {
        long start = System.currentTimeMillis();
        List&lt;Integer&gt; sortedList = intList.parallelStream().sorted().collect(Collectors.toList());
        long end = System.currentTimeMillis();
        System.out.println(String.format("Time Taken %d ms", end - start));     // prints "Time Taken 4234 ms"
    }
}
</pre>

<p style="text-align: justify;">As you can see both code snippets are almost identical but the parallel sort is roughly
twice as fast. All you have to do is change <code>stream()</code> to <code>parallelStream()</code>.

<h2>Maps</h2>
<p style="text-align: justify;">Since maps do not directly support streams, there's no <code>stream()</code> method available
on the <code>java.util.Map</code> interface itself. However, you can create specialized streams upon the <strong>keys</strong>,
<strong>values</strong> or <strong>entries</strong> of a map via <code>map.keySet().stream()</code>, <code>map.values().stream()</code>
and <code>map.entrySet().stream()</code> respectively.</p>

<p style="text-align: justify;">Additionally, maps support various new and useful methods for doing common tasks.</p>

<pre>
import java.util.HashMap;
import java.util.Map;

public class StreamDemo {
    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();

        for (int i = 0; i < 10; i++) {
            map.putIfAbsent(i, "val" + i);
        }

        System.out.println(map);
        map.computeIfPresent(3, (k, v) -> v + k);                                   // map.get(3); returns "val33"
        map.computeIfPresent(9, (k, v) -> null);                                    // map.get(9); returns null
        map.computeIfAbsent(23, num -> "val" + num);                                // map.get(23); returns "val23"
        map.computeIfAbsent(3, num -> "bam");                                       // map.get(3); returns "val33"

        map.remove(3, "val3");                                                      // map.get(3); returns "val33"
        map.remove(3, "val33");                                                     // map.get(3); returns null
        map.getOrDefault(42, "not found");                                          // returns "not found"

        map.merge(9, "val9", (v, newValue) -> v.concat(newValue));                  // map.get(9); returns "val9"
        map.merge(9, "concat", (v, newValue) -> v.concat(newValue));                // map.get(9); returns "val9concat"
        System.out.println(map);
    }
}
</pre>

<p style="text-align: justify;">The <code>merge()</code> method either puts the key/value into the map if no entry for the key exists,
or changes the existing value.</p>

        */}.toString().slice(14,-3)
    },

    {   /* Date & Time API */
        id : 23,
		"text" : function(){/*
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },

]
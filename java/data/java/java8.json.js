var java8_que = [
    {
        question : "Lambda Expressions",
        tags : ["Lambda Expressions"]
    },

    {
        question : "Functional Interfaces",
        tags : ["Functional Interfaces", "Functional", "Interfaces"]
    },

    {
        question : "Invoking Lambda Expressions using Functional interfaces",
        tags : ["Invoking", "Lambda Expressions", "Functional Interfaces"]
    },

    {
        question : "Lambda Expressions with Collections",
        tags : ["Lambda Expressions", "Collections"]
    },

    {
        question : "Anonymous Inner Class  Vs Lambda Expressions",
        tags : ["Lambda Expressions", "Anonymous Inner Class"]
    },

    {
        question : "Default methods in Interfaces",
        tags : ["Default methods", "Interfaces", "Abstract Classes", "Difference between Interface and Abstract Class"]
    },

    {
        question : "Static methods in Interfaces",
        tags : ["Static methods", "Interfaces"]
    },

    {
        question : "Predefined Functional Interfaces",
        tags : ["Predefined Functional Interfaces", "Predefined", "Functional", "Interfaces", "Predicate", "Function", "Consumer"]
    },

    {
        question : "Method & Constructor reference using double-colon (::) operator",
        tags : ["Method reference", "Constructor reference", "Double Colon"]
    },

    {
        question : "Stream API",
        tags : ["Streams"]
    },

    {
        question : "Date & Time API",
        tags : ["Date", "Time", "joda"]
    },

]

var java8_ans = [
    {   /* Lambda Expressions */
        "text" : function(){/*
<h1>Lambda Expressions</h1>
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
        "text" : function(){/*
<h1 style="text-align: justify;">Functional Interface</h1>
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
        "text" : function(){/*
<h1>Invoking Lambda Expressions using Functional interfaces</h1>
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
        "text" : function(){/*
<h1>Lambda Expressions with Collections</h1>
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
        "text" : function(){/*
<h1 style="text-align: justify;">Anonymous Inner Classes Vs Lambda Expressions</h1>
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
        "text" : function(){/*
<h1 style="text-align: justify;">Default methods in Interfaces</h1>
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
        "text" : function(){/*
<h1 style="text-align: justify;">Static methods in interfaces</h1>
<p style="text-align: justify;">Java 8 introduced static methods in interfaces.&nbsp;</p>
<p style="text-align: justify;">Static methods are general utility methods, and are not related to an object's state, it makes sense to define them within the interface.</p>
<p style="text-align: justify;">These interface static methods are not available to the concrete classes; these can be accessed using the interface name only.</p>
<pre>
class Baz implements Foo {
    public static void main(String[] args) {
        Baz baz = new Baz();
        //bar();        // compile-time error: Static method may be invoked on containing interface class only
        //baz.bar();    // compile-time error: Static method may be invoked on containing interface class only
        //Baz.bar();    // compile-time error: Static method may be invoked on containing interface class only

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

    {   /* Predefined Functional Interfaces */
        "text" : function(){/*
qqqqqqqq1
        */}.toString().slice(14,-3)
    },

    {   /* Method & Constructor reference using double-colon (::) operator */
        "text" : function(){/*
qqqqqqqq1
        */}.toString().slice(14,-3)
    },

    {   /* Stream API */
        "text" : function(){/*
qqqqqqqq1
        */}.toString().slice(14,-3)
    },

    {   /* Date & Time API */
        "text" : function(){/*
qqqqqqqq1
        */}.toString().slice(14,-3)
    },

]
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
        tags : ["Default methods", "Interfaces"]
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
<table style="height: 80px;" width="711">
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
<table style="height: 99px;" width="429">
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
<table style="height: 42px;" width="563">
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
<table style="height: 42px;" width="787">
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
<table style="height: 42px;" width="787">
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
<table style="height: 42px;" width="787">
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
<table style="height: 42px;" width="787">
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
<table style="height: 42px;" width="787">
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
<table style="height: 42px;" width="787">
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
<table style="height: 42px;" width="787">
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

<table style="height: 42px;" width="787">
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
qqqqqqqq1
        */}.toString().slice(14,-3)
    },

    {   /* Default methods in Interfaces */
        "text" : function(){/*
qqqqqqqq1
        */}.toString().slice(14,-3)
    },

    {   /* Static methods in Interfaces */
        "text" : function(){/*
qqqqqqqq1
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
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
<p style="text-align: justify;">If an interface has <strong>single abstract method</strong>, such an interface is a Functional Interface.</p>
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
<p style="text-align: justify;">Conceptually, a functional interface has exactly one abstract method. Since default methods have an implementation, they are not abstract. If an interface declares an abstract method overriding one of the public methods of java.lang.Object, that also does not count toward the interface's abstract method count since any implementation of the interface will have an implementation from java.lang.Object or elsewhere.</p>
<pre>
@FunctionalInterface        // Compile-time error: Multiple non-overriding abstract methods found in interface Foo
public interface Foo {
    public void bar();
    public void baz();
}
</pre>
<p style="text-align: justify;">Following interface declaration satisfies the rules of a functional interface:</p>
<pre>
@FunctionalInterface            // No compile-time error
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
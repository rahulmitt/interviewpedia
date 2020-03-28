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
    {
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

    {
        "text" : function(){/*
qqqqqqqq1
        */}.toString().slice(14,-3)
    },

    {
        "text" : function(){/*
qqqqqqqq1
        */}.toString().slice(14,-3)
    },

    {
        "text" : function(){/*
qqqqqqqq1
        */}.toString().slice(14,-3)
    },

    {
        "text" : function(){/*
qqqqqqqq1
        */}.toString().slice(14,-3)
    },

    {
        "text" : function(){/*
qqqqqqqq1
        */}.toString().slice(14,-3)
    },

    {
        "text" : function(){/*
qqqqqqqq1
        */}.toString().slice(14,-3)
    },

    {
        "text" : function(){/*
qqqqqqqq1
        */}.toString().slice(14,-3)
    },

]
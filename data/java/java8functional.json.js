var java8functional_que = [
	{
		id : 1,
		question : "Print all numbers in a list",
		tags : ["forEach", "stream"]
	},

    {
        id : 2,
        question : "Print even numbers in a list",
        tags : ["forEach", "stream"]
    },

    {
        id : 3,
        question : "Print odd numbers in a list",
        tags : ["stream", "filter", "forEach"]
    },

    {
        id : 4,
        question : "Print all courses individually",
        tags : ["forEach", "stream"]
    },

   {
       id : 5,
       question : "Print all spring related courses",
       tags : ["stream", "filter", "forEach"]
   },

   {
       id : 6,
       question : "Print courses whose name has atleast 4 letters",
       tags : ["stream", "filter", "forEach"]
   },

   {
       id : 7,
       question : "Print squares of even numbers in list",
       tags : ["stream", "filter", "forEach"]
   },

   {
       id : 8,
       question : "Print cubes of odd numbers in list",
       tags : ["stream", "filter", "forEach"]
   },

   {
       id : 9,
       question : "Create list with length of Courses",
       tags : ["stream", "map", "collect"]
   },

   {
       id : 10,
       question : "Print number of chars in each course",
       tags : ["stream", "map", "collect"]
   },

   {
       id : 11,
       question : "Add all numbers in list",
       tags : ["stream", "reduce"]
   },

   {
       id : 12,
       question : "Find max in list",
       tags : ["stream", "reduce"]
   },

   {
       id : 13,
       question : "Find min in list",
       tags : ["stream", "reduce"]
   },

   {
       id : 14,
       question : "Find sum of squares of nums in list",
       tags : ["stream", "map", "reduce"]
   },

   {
       id : 15,
       question : "Find sum of odd nums in list",
       tags : ["stream", "filter", "reduce"]
   },

   {
       id : 16,
       question : "Print all distinct nums in list",
       tags : ["stream", "distinct", "forEach"]
   },

   {
       id : 17,
       question : "Print all nums in sorted order",
       tags : ["stream", "sorted", "forEach"]
   },

   {
       id : 18,
       question : "Print all nums in reverse sorted order",
       tags : ["stream", "sorted", "compareTo", "Comparator", "reverseOrder", "forEach"]
   },

   {
       id : 19,
       question : "Create list with even nums filtered from list",
       tags : ["stream", "filter", "collect", "Collectors"]
   },

   {
       id : 20,
       question : "Flatmap",
       tags : ["stream", "flapMap", "collect", "forEach"]
   },

   {
       id : 21,
       question : "Grouping by",
       tags : ["stream", "collect", "Collectors", "groupingBy", "mapping"]
   },

   {
       id : 22,
       question : "Convert number to string",
       tags : ["steam", "map", "collect", "Collectors", "joining"]
   },

   {
       id : 23,
       question : "Version Sorter",
       tags : ["Version Sorter", "Comparator"]
   },
]

var java8functional_ans = [
    {   /* Print all numbers in a list */
		id : 1,
        "text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List numbers = Arrays.asList(1, 2, 3, 4);
    imperativeStyle(numbers);

    System.out.println();

    functionalStyle(numbers);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void imperativeStyle(List&lt;Integer&gt; numbers) {
    for (Integer i : numbers) System.out.print(i + ", ");
}
</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;Integer&gt; numbers) {
    numbers.forEach(n -&gt; System.out.print(n + ", "));
    // Alternatively, below can also be used:
    // numbers.stream().map(n -&gt; n + ", ").forEach(System.out::print);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
1, 2, 3, 4, </br>
1, 2, 3, 4, </br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Print even numbers in a list */
        id : 2,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    imperativeStyle(numbers);

    System.out.println();

    functionalStyle(numbers);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void imperativeStyle(List&lt;Integer&gt; numbers) {
    for (Integer i : numbers) if (i % 2 == 0) System.out.print(i + ", ");
}
</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;Integer&gt; numbers) {
    numbers.stream().filter(i -&gt; i % 2 == 0).forEach(n -&gt; System.out.print(n + ", "));
    // Alternatively, below can also be used:
    // numbers.stream().filter(i -&gt; i % 2 == 0).map(n -&gt; n + ", ").forEach(System.out::print);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
2, 4, 6, 8, 10, </br>
2, 4, 6, 8, 10, </br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Print odd numbers in a list */
        id : 3,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    imperativeStyle(numbers);

    System.out.println();

    functionalStyle(numbers);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void imperativeStyle(List&lt;Integer&gt; numbers) {
    for (Integer i : numbers) if (i % 2 != 0) System.out.print(i + ", ");
}
</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;Integer&gt; numbers) {
    numbers.stream().filter(i -&gt; i % 2 != 0).forEach(n -&gt; System.out.print(n + ", "));
    // Alternatively, below can also be used:
    // numbers.stream().filter(i -&gt; i % 2 != 0).map(n -&gt; n + ", ").forEach(System.out::print);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
1, 3, 5, 7, 9, </br>
1, 3, 5, 7, 9, </br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Print all courses individually */
        id : 4,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;String&gt; courses = Arrays.asList("Spring", "Spring Boot", "API", "Microservices",
            "AWS", "PCF", "Azure", "Docker", "Kubernetes");
    imperativeStyle(courses);

    System.out.println();

    functionalStyle(courses);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void imperativeStyle(List&lt;String&gt; courses) {
    for (String course : courses) System.out.print(course + ", ");
}
</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;String&gt; courses) {
    courses.forEach(course -&gt; System.out.print(course + ", "));
    // Alternatively, below can also be used:
    // courses.stream().map(course -&gt; course + ", ").forEach(System.out::print);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
Spring, Spring Boot, API, Microservices, AWS, PCF, Azure, Docker, Kubernetes, </br>
Spring, Spring Boot, API, Microservices, AWS, PCF, Azure, Docker, Kubernetes, </br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Print all spring related courses */
        id : 5,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;String&gt; courses = Arrays.asList("Spring", "Spring Boot", "API", "Microservices",
            "AWS", "PCF", "Azure", "Docker", "Kubernetes");
    imperativeStyle(courses);

    System.out.println();

    functionalStyle(courses);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void imperativeStyle(List&lt;String&gt; courses) {
    for (String course : courses) if (course.contains("Spring")) System.out.print(course + ", ");
}
</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;String&gt; courses) {
    courses.stream().filter(c -&gt; c.contains("Spring")).forEach(course -&gt; System.out.print(course + ", "));
    // Alternatively, below can also be used:
    // courses.stream().filter(c -&gt; c.contains("Spring")).map(course -&gt; course + ", ").forEach(System.out::print);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
Spring, Spring Boot, </br>
Spring, Spring Boot, </br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Print courses whose name has atleast 4 letters */
        id : 6,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;String&gt; courses = Arrays.asList("Spring", "Spring Boot", "API", "Microservices",
            "AWS", "PCF", "Azure", "Docker", "Kubernetes");
    imperativeStyle(courses);

    System.out.println();

    functionalStyle(courses);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void imperativeStyle(List&lt;String&gt; courses) {
    for (String course : courses) if (course.length() >= 4) System.out.print(course + ", ");
}
</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;String&gt; courses) {
    courses.stream().filter(c -&gt; c.length() >= 4).forEach(course -&gt; System.out.print(course + ", "));
    // Alternatively, below can also be used:
    // courses.stream().filter(c -&gt; c.length() >= 4).map(course -&gt; course + ", ").forEach(System.out::print);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
Spring, Spring Boot, Microservices, Azure, Docker, Kubernetes, </br>
Spring, Spring Boot, Microservices, Azure, Docker, Kubernetes, </br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Print squares of even numbers in list */
        id : 7,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    imperativeStyle(numbers);

    System.out.println();

    functionalStyle(numbers);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void imperativeStyle(List&lt;Integer&gt; numbers) {
    for (Integer i : numbers) if (i % 2 == 0) System.out.print(i*i + ", ");
}
</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;Integer&gt; numbers) {
    numbers.stream().filter(i -&gt; i % 2 == 0).forEach(i -&gt; System.out.print(i*i + ", "));
    // Alternatively, below can also be used:
    // numbers.stream().filter(i -&gt; i % 2 == 0).map(i -&gt; i*i + ", ").forEach(System.out::print);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
4, 16, 36, 64, 100, </br>
4, 16, 36, 64, 100, </br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Print cubes of odd numbers in list */
        id : 8,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    imperativeStyle(numbers);

    System.out.println();

    functionalStyle(numbers);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void imperativeStyle(List&lt;Integer&gt; numbers) {
    for (Integer i : numbers) if (i % 2 != 0) System.out.print(i * i * i + ", ");
}
</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;Integer&gt; numbers) {
    numbers.stream().filter(i -&gt; i % 2 != 0).forEach(i -&gt; System.out.print(i * i * i + ", "));
    // Alternatively, below can also be used:
    // numbers.stream().filter(i -&gt; i % 2 != 0).map(i -&gt; i * i * i + ", ").forEach(System.out::print);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
1, 27, 125, 343, 729, </br>
1, 27, 125, 343, 729, </br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Create list with length of Courses */
        id : 9,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;String&gt; courses = Arrays.asList("Spring", "Spring Boot", "API", "Microservices",
            "AWS", "PCF", "Azure", "Docker", "Kubernetes");
    functionalStyle(courses);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">

</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;String&gt; courses) {
    List&lt;Integer&gt; lengthList = courses.stream().map(c -&gt; c.length()).collect(Collectors.toList());
    System.out.println(lengthList);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
[6, 11, 3, 13, 3, 3, 5, 6, 10]</br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Print number of chars in each course */
        id : 10,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;String&gt; courses = Arrays.asList("Spring", "Spring Boot", "API", "Microservices",
            "AWS", "PCF", "Azure", "Docker", "Kubernetes");
    imperativeStyle(courses);

    System.out.println();

    functionalStyle(courses);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void imperativeStyle(List&lt;String&gt; courses) {
    for (String course : courses) System.out.print(course + " " + course.length() + ", ");
}
</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;String&gt; courses) {
    courses.forEach(course -&gt; System.out.print(course + " " + course.length() + ", "));
    // Alternatively, below can also be used:
    // courses.stream().map(course -&gt; course + " " + course.length() + ", ").forEach(System.out::print);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
Spring 6, Spring Boot 11, API 3, Microservices 13, AWS 3, PCF 3, Azure 5, Docker 6, Kubernetes 10, </br>
Spring 6, Spring Boot 11, API 3, Microservices 13, AWS 3, PCF 3, Azure 5, Docker 6, Kubernetes 10, </br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Add all numbers in list */
        id : 11,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4);
    imperativeStyle(numbers);

    System.out.println();

    functionalStyle(numbers);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
    private static void imperativeStyle(List&lt;Integer&gt; numbers) {
        int sum = 0;
        for (Integer i : numbers) sum += i;
        System.out.println("Sum=" + sum);
    }
</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;Integer&gt; numbers) {
    int sum = numbers.stream().reduce(0, (aggregate, i) -&gt; aggregate + i);
    System.out.println("Sum=" + sum);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
Sum=10</br>

Sum=10</br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Find max in list */
        id : 12,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;Integer&gt; numbers = Arrays.asList(1, 20, 3, 4, 5, 6, 7, 8, 9, 10);
    functionalStyle(numbers);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">

</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;Integer&gt; numbers) {
    int sum = numbers.stream().reduce(Integer.MIN_VALUE, (x, y) -&gt; x > y ? x : y);
    System.out.println("Max=" + sum);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
Max=20</br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Find min in list */
        id : 13,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;Integer&gt; numbers = Arrays.asList(1, 20, 3, 4, 5, 6, 7, 8, 9, 10);
    functionalStyle(numbers);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">

</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;Integer&gt; numbers) {
    int sum = numbers.stream().reduce(Integer.MAX_VALUE, (x, y) -&gt; x > y ? y : x);
    System.out.println("Min=" + sum);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
Min=1</br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Find sum of squares of nums in list */
        id : 14,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;Integer&gt; numbers = Arrays.asList(1, 20, 3, 4, 5, 6, 7, 8, 9, 10);
    structuralStyle(numbers);
    functionalStyle(numbers);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void structuralStyle(List&lt;Integer&gt; numbers) {
    int sum = 0;
    for(int i : numbers) sum += i*i;
    System.out.println("Sum of squares = " + sum);
}
</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;Integer&gt; numbers) {
    int sum = numbers.stream().map(i -&gt; i * i).reduce(0, (x, y) -&gt; x + y);
    System.out.println("Sum of squares = " + sum);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
Sum of squares = 781</br>
Sum of squares = 781</br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Find sum of odd nums in list */
        id : 15,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;Integer&gt; numbers = Arrays.asList(1, 20, 3, 4, 5, 6, 7, 8, 9, 10);
    functionalStyle(numbers);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">

</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;Integer&gt; numbers) {
    int sum = numbers.stream().filter(i -&gt; i % 2 != 0).reduce(0, (x, y) -&gt; x + y);
    System.out.println("Sum = " + sum);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
Sum = 25</br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Print all distinct nums in list */
        id : 16,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 1, 2, 3, 4, 1);
    functionalStyle(numbers);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">

</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;Integer&gt; numbers) {
    numbers.stream().distinct().forEach(i -&gt; System.out.print(i + ", "));
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
1, 2, 3, 4, </br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Print all nums in sorted order */
        id : 17,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 1, 2, 3, 4, 9, 8, 7, 6, 5, 4, 3, 2, 1);
    functionalStyle(numbers);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">

</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;Integer&gt; numbers) {
    numbers.stream().sorted().forEach(i -&gt; System.out.print(i + ", "));
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, </br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Print all nums in reverse sorted order */
        id : 18,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 1, 2, 3, 4, 9, 8, 7, 6, 5, 4, 3, 2, 1);
    functionalStyle(numbers);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">

</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;Integer&gt; numbers) {
    numbers.stream().sorted((x, y) -&gt; y.compareTo(x)).forEach(i -&gt; System.out.print(i + ", "));
    // explore the utility methods in Comparator interface
    // numbers.stream().sorted(Comparator.reverseOrder()).forEach(i -&gt; System.out.print(i + ", "));
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
9, 8, 7, 6, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1, </br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Create list with even nums filtered from list */
        id : 19,
		"text" : function(){/*
<pre class="">
public static void main(String[] args) {
    List&lt;Integer&gt; numbers = Arrays.asList(1, 20, 3, 4, 5, 6, 7, 8, 9, 10);
    functionalStyle(numbers);
}
</pre>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Imperative Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">

</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>Functional Style</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">
private static void functionalStyle(List&lt;Integer&gt; numbers) {
    List&lt;Integer&gt; evenList = numbers.stream().filter(i -&gt; i % 2 == 0).collect(Collectors.toList());
    System.out.println(evenList);
}
</pre>
</td>
</tr>
</tbody>
</table>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
[20, 4, 6, 8, 10]</br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Flatmap */
        id : 20,
		"text" : function(){/*
<pre class="">
public class Course {
    private String name;

    public Course(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Course{" +
                "name='" + name + '\'' +
                '}';
    }
}
</pre>
<p>&nbsp;</p>
<pre class="">
public class Student {
    private final String name;
    private final List&lt;Course&gt; courses = new ArrayList&lt;&gt;();

    public Student(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public List&lt;Course&gt; getCourses() {
        return courses;
    }

    public void addCourse(Course course) {
        courses.add(course);
    }

    public void addCourses(Course... courses) {
        this.courses.addAll(Arrays.asList(courses));
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", courses=" + courses +
                '}';
    }
}
</pre>
<p>&nbsp;</p>
<pre class="">
public static void main(String[] args) {
    Course english = new Course("English");
    Course hindi = new Course("Hindi");
    Course maths = new Course("Maths");
    Course science = new Course("Science");
    Course java = new Course("Java");
    Course python = new Course("Python");

    Student rahul = new Student("Rahul");
    rahul.addCourses(english, hindi, java);

    Student tushar = new Student("Tushar");
    tushar.addCourses(english, hindi, java, maths, science, python);

    List&lt;Student&gt; students = Arrays.asList(rahul, tushar);

    System.out.print("Prints all courses by all students: ");
    students.stream().flatMap(student -&gt; student.getCourses().stream()).forEach(c -&gt; System.out.print(c.getName() + ", "));
    System.out.println();

    System.out.print("Prints unique courses by all students: ");
    students.stream().flatMap(student -&gt; student.getCourses().stream()).
            collect(Collectors.toSet()).forEach(c -&gt; System.out.print(c.getName() + ", "));
}
</pre>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
Prints all courses by all students: English, Hindi, Java, English, Hindi, Java, Maths, Science, Python,</br>
Prints unique courses by all students: Java, Science, Hindi, Maths, English, Python, </br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Grouping by */
        id : 21,
		"text" : function(){/*
<pre class="">
public class Person {
    private String name;
    private String city;

    public Person(String name, String city) {
        this.name = name;
        this.city = city;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", city='" + city + '\'' +
                '}';
    }
}
</pre>
<p>&nbsp;</p>
<pre class="">
public static void main(String[] args) {
    Person p1 = new Person("Rahul Mittal", "Bangalore");
    Person p2 = new Person("Tushar Mittal", "Gurgaon");
    Person p3 = new Person("Neha Bansal", "Bangalore");
    List&lt;Person&gt; personList = Arrays.asList(p1, p2, p3);

    Map<String, Set<Person>> personByCity = personList.stream()
            .collect(Collectors.groupingBy(Person::getCity, Collectors.toSet()));
    System.out.println("personByCity: " + personByCity);

    Map<String, Set<String>> namesByCity = personList.stream()
            .collect(Collectors.groupingBy(Person::getCity, Collectors.mapping(Person::getName, Collectors.toSet())));
    System.out.println("namesByCity: " + namesByCity);

    Map<String, Set<String>> namesBySortedCity = personList.stream()
            .collect(Collectors.groupingBy(Person::getCity, TreeMap::new, Collectors.mapping(Person::getName, Collectors.toSet())));
    System.out.println("namesBySortedCity: " + namesBySortedCity);
}
</pre>

<p>&nbsp;</p>
<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
personByCity: {Gurgaon=[Person{name='Tushar Mittal', city='Gurgaon'}], Bangalore=[Person{name='Rahul Mittal', city='Bangalore'}, Person{name='Neha Bansal', city='Bangalore'}]}</br>
namesByCity: {Gurgaon=[Tushar Mittal], Bangalore=[Rahul Mittal, Neha Bansal]}</br>
namesBySortedCity: {Bangalore=[Rahul Mittal, Neha Bansal], Gurgaon=[Tushar Mittal]}</br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Convert number to string */
        id : 22,
		"text" : function(){/*
<pre class="">
    public static void main(String[] args) {
        Map&lt;String, String&gt; mappings = new HashMap<>();
        mappings.put("0", "Zero");
        mappings.put("1", "One");
        mappings.put("2", "Two");
        mappings.put("3", "Three");
        mappings.put("4", "Four");
        mappings.put("5", "Five");
        mappings.put("6", "Six");
        mappings.put("7", "Seven");
        mappings.put("8", "Eight");
        mappings.put("9", "Nine");

        int number = 1234;

        String[] literals = String.valueOf(number).split("");
        String str = Arrays.stream(literals)
                .map(c -&gt; mappings.get(c))
                .collect(Collectors.joining(" "));

        System.out.println(number + " =&gt; " + str);

    }
</pre>

<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
1234 =&gt; One Two Three Four</br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },

{   /* Version Sorter */
        id : 23,
		"text" : function(){/*
<p style="text-align: justify;">Write a program to sort Maven version strings in descending order</p>
<p style="text-align: justify;"><strong>Input:</strong> ["21.03.1", "21.03.2", "1.9.3", "1.9.5", "20.01.2"]</p>
<p style="text-align: justify;"><strong>Output:</strong> ["21.03.2", "21.03.1", "20.01.2", "1.9.5", "1.9.3"]</p>
<pre>
List&lt;String&gt; input = Arrays.asList("21.03.1", "21.03.2", "1.9.3", "1.9.5", "20.01.2");
System.out.println("input: " + input);

Pattern pattern = Pattern.compile("\\.");
Comparator&lt;String&gt; versionComparator = Comparator.comparing(version -&gt; pattern.splitAsStream(version).mapToInt(Integer::parseInt).toArray(), Arrays::compare);
input.sort(versionComparator.reversed());

System.out.println("output: " + input);
</pre>

<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
input: [21.03.1, 21.03.2, 1.9.3, 1.9.5, 20.01.2]</br>
output: [21.03.2, 21.03.1, 20.01.2, 1.9.5, 1.9.3]</br>
</tr></td>
</table>
        */}.toString().slice(14,-3)
    },
]
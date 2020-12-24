var intro_que = [
	{
		id : 1,
		question : "Introduction to Data Structures",
		tags : ["Introduction to Data Structures"]
	},

	{
		id : 2,
		question : "Stack Vs Heap",
		tags : ["Stack", "Heap"]
	},

	{
		id : 3,
		question : "Recursion",
		tags : ["Recursion"]
	},

	{
		id : 4,
		question : "The List ADT",
		tags : ["The List ADT"]
	},

]

var intro_ans = [
    {   /* Introduction to Data Structures */
        id : 1,
		"text" : function(){/*

<h2>Types of Data Structures</h2>
<ol>
<li>Physical Data Structures
<ol style="list-style-type: lower-alpha;">
<li>Arrays</li>
<li>Linked-List</li>
</ol>
</li>
<li>Logical Data Structures
<ol style="list-style-type: lower-alpha;">
<li>Stack</li>
<li>Queue</li>
<li>Tree</li>
<li>Graph</li>
<li>Hashtable</li>
</ol>
</li>
</ol>

<h2 style="text-align: justify;">Linear Data Structures</h2>
<ol>
<li style="text-align: justify;">Array</li>
<li style="text-align: justify;">Linked-List</li>
<li style="text-align: justify;">Stack</li>
<li style="text-align: justify;">Queue</li>
</ol>
<h2 style="text-align: justify;">Non-Linear Data Structures</h2>
<ol>
<li style="text-align: justify;">Binary Tree</li>
<li style="text-align: justify;">Binary Search Tree</li>
<li style="text-align: justify;">Ternary Tree</li>
<li style="text-align: justify;">Hash Table</li>
<li style="text-align: justify;">Heaps</li>
<li style="text-align: justify;">Graph</li>
</ol>
        */}.toString().slice(14,-3)
    },

	{   /* Stack Vs Heap */
		id : 2,
		"text" : function(){/*
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;"><a href="https://deepu.tech/memory-management-in-jvm/" target="_blank">JVM Memory Management</a></p>
<p style="text-align: justify;"><a href="https://stackoverflow.com/questions/2099695/is-a-java-array-of-primitives-stored-in-stack-or-heap/16326590#16326590" target="_blank">Arrays are stored in Heap</a></p>
<p style="text-align: justify;"><a href="https://rahulmitt.github.io/interviewpedia/?course=java&topic=gc&q=1" target="_blank">Stack Vs Heap</a></p>
    */}.toString().slice(14,-3)
	},

	{   /* Recursion */
		id : 3,
		"text" : function(){/*
<h2 style="text-align: justify;">What is Recursion?</h2>
<p>A function is recursive if:</p>
<ol>
<li>It calls itself</li>
<li>There is a base condition (or, terminating condition) &mdash; if the base case is not reached or not defined, then this leads to StackOverflow problem.</li>
</ol>

<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>CODE</strong></td>
<td style="width: 50%; text-align: center;"><strong>OUTPUT</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">package com.rahulmitt.interviewpedia.ds.recursion;
&nbsp;
public class FactorialCalculator {
    public static void main(String[] args) {
        System.out.println(String.format("-1! = %d", factorial(-1)));&nbsp;
        System.out.println(String.format("0! = %d", factorial(0)));
        System.out.println(String.format("1! = %d", factorial(1)));
        System.out.println(String.format("2! = %d", factorial(2)));
        System.out.println(String.format("3! = %d", factorial(3)));
        System.out.println(String.format("4! = %d", factorial(4)));
        System.out.println(String.format("5! = %d", factorial(5)));
    }
&nbsp;
    private static int factorial(int n) {
        if (n &lt; 0) return -1;
        if (n == 0) return 1;
        return n * factorial(n - 1);
    }
}
</pre>
</td>
<td style="width: 50%;">-1! = -1<br />0! = 1<br />1! = 1<br />2! = 2<br />3! = 6<br />4! = 24<br />5! = 120</td>
</tr>
</tbody>
</table>

<p>&nbsp;<img src="data/ds/images/1.recursion/1.recursion_base_condition.png" alt="" /></p>

<h2 style="text-align: justify;">Example</h2>
<p>&nbsp;<img src="data/ds/images/1.recursion/2.recursion_example.png" alt="" /></p>

<h2 style="text-align: justify;">Tracing Recursion</h2>

<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%; text-align: center;"><strong>CODE</strong></td>
<td style="width: 50%; text-align: center;"><strong>TRACING TREE</strong></td>
</tr>
<tr valign="top">
<td style="width: 50%;">
<pre class="">package com.rahulmitt.interviewpedia.ds.recursion;
&nbsp;
public class RecursionExample {
&nbsp;
    public static void main(String[] args) {
        funct1(3);               // prints 1 2 3
        System.out.println();
        funct2(3);               // prints 3 2 1
    }
&nbsp;
    private static void funct1(int n) {     // Head Recursion&nbsp;
        if (n &gt; 0) {
            funct1(n - 1);
            // print stmt executed at returning time
            System.out.print(n + " ");
        }
    }
&nbsp;
    private static void funct2(int n) {     // Tail recursion&nbsp;
        if (n &gt; 0) {
        	// print stmt executed at calling time
            System.out.print(n + " ");
            funct2(n - 1);
        }
    }
&nbsp;
}
&nbsp;
</pre>
</td>
<td style="width: 50%;">
<img src="data/ds/images/1.recursion/3.tracing_recursion.png" alt="" width="500" />
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>

<h2 style="text-align: justify;">Stack used in Recursion</h2>
<p>&nbsp;</p>

<h2 style="text-align: justify;">Time Complexity</h2>
<p>&nbsp;</p>
<h2 style="text-align: justify;">Recurrence Relation</h2>
<p>&nbsp;</p>
    */}.toString().slice(14,-3)
	},

    {   /* The List ADT */
        id : 4,
		"text" : function(){/*
<p style="text-align: justify;">TODO</p>
<pre>
package com.rahulmitt.interviewpedia.ds.list;

public interface ListADT {

    void display();                     // Visit all the elements of the array one by one

    void add(int x);                    // Add a new element at the end of the array

    void insert(int index, int x);      // Insert an element at a given index

    int delete(int index);              // Delete an element at a given index

    int linearSearch(int x);            // Search the given element and return the index

    int binarySearch(int x);            // Search the given element and return the index

    int get(int index);                 // Get the element at a given index

    void set(int index, int x);         // Replace the element at a given index

    int max();                          // Find the max element in unsorted array

    int min();                          // Find the min element in unsorted array

    int sum();                          // Find the sum of all elements in unsorted array

    int avg();                          // Find the average of all elements in unsorted array

    void reverseUsingAuxiliaryArray();

    void reverseUsingSwapMethod();

    void leftShift();

    void leftRotate();

    void insertInSortedList(int x);

    boolean isSorted();
}

</pre>
        */}.toString().slice(14,-3)
    },

]
var intro_que = [
	{
		id : 1,
		question : "Introduction to Data Structures",
		tags : ["Introduction to Data Structures"]
	},

	{
		id : 2,
		question : "The List ADT",
		tags : ["The List ADT"]
	},

]

var intro_ans = [
    {   /* Introduction to Data Structures */
        id : 1,
		"text" : function(){/*
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

    {   /* The List ADT */
        id : 2,
		"text" : function(){/*
<p style="text-align: justify;">TODO</p>
<pre>
package com.rahulmitt.interviewpedia.ds.list;

public interface List {

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
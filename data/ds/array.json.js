var array_que = [
	{
		question : "ArrayList - Dynamic Array",
		tags : ["ArrayList", "Dynamic Array", "ADT"]
	},

	{
		question : "Print All Elements",
		tags : ["Print All Elements"]
	},

	{
		question : "Print All Elements in Reverse Order",
		tags : ["Print All Elements in Reverse Order"]
	},

	{
		question : "Search a key",
		tags : ["Find a key", "Search a Key", "Linear Search", "Binary Search"]
	},

	{
		question : "Array Reversal",
		tags : ["Array Reversal"]
	},

	{
		question : "Check Array Equality",
		tags : ["Check Array Equality"]
	},

	{
		question : "Remove Duplicates in Sorted Array",
		tags : ["Remove Duplicates in Sorted Array"]
	},

	{
		question : "Remove Duplicates in Unsorted Array",
		tags : ["Remove Duplicates in Unsorted Array"]
	},

	{
		question : "Rotation",
		tags : ["Rotation"]
	},

	{
		question : "QQQQ",
		tags : ["QQQQ"]
	},

	{
		question : "QQQQ",
		tags : ["QQQQ"]
	},

	{
		question : "QQQQ",
		tags : ["QQQQ"]
	},

	{
		question : "QQQQ",
		tags : ["QQQQ"]
	},

]

var array_ans = [
    {   /* ArrayList - Dynamic Array */
        "text" : function(){/*
<h1>ArrayList - Dynamic Array</h1>
<pre>
package com.rahulmitt.interviewpedia.ds.list.impl;

import com.rahulmitt.interviewpedia.ds.list.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ArrayList implements List {

    private int[] arr;
    private static final int DEFAULT_CAPACITY = 10;
    private int size;

    private static Logger logger = LoggerFactory.getLogger(ArrayList.class);

    public ArrayList() {
        this.arr = new int[DEFAULT_CAPACITY];
    }

    public ArrayList(int initialCapacity) {
        this.arr = new int[initialCapacity];
    }

    public ArrayList(int... elements) {
        this.size = elements.length;
        this.arr = new int[size];
        System.arraycopy(elements, 0, arr, 0, size);
        logger.info("Created ArrayList with {} capacity", arr.length);
    }

    private void resize() {
        int[] arr = new int[this.arr.length * 2];
        System.arraycopy(this.arr, 0, arr, 0, this.arr.length);
        this.arr = arr;
        logger.info("Resized to {} capacity", arr.length);
    }

    @Override
    public void display() {
        logger.info(this.toString());
    }

    @Override
    public void add(int x) {
        if (size == arr.length) resize();
        arr[size++] = x;
    }

    @Override
    public void insert(int index, int x) {
        if (index &lt; 0 || index &gt; size) throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        if (size == arr.length) resize();
        System.arraycopy(arr, index, arr, index + 1, size - index);
        arr[index] = x;
        size++;
    }

    @Override
    public int delete(int index) {
        if (index &lt; 0 || index &gt;= size) throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        int deleted = arr[index];
        System.arraycopy(arr, index + 1, arr, index, size - index);
        return deleted;
    }

    @Override
    public int linearSearch(int x) {
        for (int i = 0; i &lt; size; i++) if (arr[i] == x) return i;
        return -1;
    }

    @Override
    public int binarySearch(int x) {
        int low = 0;
        int high = size;
        while (low &lt;= high) {
            int mid = (low + high) / 2;
            if (arr[mid] &lt; x) high = mid;
            else if (arr[mid] &gt; x) low = mid;
            else return mid;
        }
        return -1;
    }

    @Override
    public int get(int index) {
        if (index &lt; 0 || index &gt;= size) throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        return arr[index];
    }

    @Override
    public void set(int index, int x) {
        if (index &lt; 0 || index &gt;= size) throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        arr[index] = x;
    }

    @Override
    public int size() {
        return size;
    }

    @Override
    public int max() {
        int max = Integer.MIN_VALUE;
        for (int i = 0; i &lt; size; i++) if (arr[i] &gt; max) max = arr[i];
        return max;
    }

    @Override
    public int min() {
        int min = Integer.MAX_VALUE;
        for (int i = 0; i &lt; size; i++) if (arr[i] &lt; min) min = arr[i];
        return min;
    }

    @Override
    public int sum() {
        int sum = 0;
        for (int i = 0; i &lt; size; i++) sum += arr[i];
        return sum;
    }

    @Override
    public int avg() {
        return sum() / size;
    }

    @Override
    public void reverseUsingAuxiliaryArray() {
        int[] newArr = new int[size];
        for (int i = 0; i &lt; size; i++) newArr[i] = arr[size - 1 - i];
        arr = newArr;
    }

    @Override
    public void reverseUsingSwapMethod() {
        for (int i = 0; i &lt; size / 2; i++) {
            int temp = arr[i];
            arr[i] = arr[size - 1 - i];
            arr[size - 1 - i] = temp;
        }
    }

    @Override
    public void leftShift() {
        //TODO:
    }

    @Override
    public void leftRotate() {
        //TODO:
    }

    @Override
    public void insertInSortedList(int x) {
        //TODO:
    }

    @Override
    public boolean isSorted() {
        if (size &lt;= 1) return true;
        for (int i = 1; i &lt; size; i++) if (arr[i - 1] &gt; arr[i]) return false;
        return true;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i &lt; size; i++) sb.append(arr[i]).append(", ");
        sb.append("]");
        return sb.toString();
    }
}
</pre>
        */}.toString().slice(14,-3)
    },

    {   /* Print All Elements */
        "text" : function(){/*
<h1>Print All Elements</h1>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>
    public static void printAllElements(int[] arr) {
        System.out.print("Print all elements (iteratively): ");
        printAllElementsIterative(arr);
        System.out.println();
    }

    private static void printAllElementsIterative(int[] arr) {
        for (int i = 0; i < arr.length; i++) System.out.print(arr[i] + ", ");
    }
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>
    public static void printAllElements(int[] arr) {
        System.out.print("Print all elements (recursively): ");
        printAllElementsRecursive(arr);
        System.out.println();
    }

    private static void printAllElementsRecursive(int[] arr) {
        printAllElementsRecursive(arr, 0);
    }

    private static void printAllElementsRecursive(int[] arr, int i) {
        if (i == arr.length) return;
        System.out.print(arr[i] + ", ");
        printAllElementsRecursive(arr, i + 1);
    }
</pre>
</td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Print All Elements in Reverse Order */
        "text" : function(){/*
<h1>Print All Elements in Reverse Order</h1>
<p style="text-align: justify;">TODO</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>
    public static void printAllElementsInReverse(int[] arr) {
        System.out.print("Print all elements (iteratively): ");
        printAllElementsInReverseIterative(arr);
        System.out.println();
    }

    private static void printAllElementsInReverseIterative(int[] arr) {
        for (int i = arr.length - 1; i >= 0; i--) System.out.print(arr[i] + ", ");
    }
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>
    public static void printAllElementsInReverse(int[] arr) {
        System.out.print("Print all elements (recursively): ");
        printAllElementsInReverseRecursive(arr);
        System.out.println();
    }

    private static void printAllElementsInReverseRecursive(int[] arr) {
        printAllElementsInReverseRecursive(arr, 0);
    }

    private static void printAllElementsInReverseRecursive(int[] arr, int i) {
        if (i == arr.length) return;
        printAllElementsInReverseRecursive(arr, i + 1);
        System.out.print(arr[i] + ", ");
    }
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* Search a key */
        "text" : function(){/*
<h1>Search a key</h1>
<h2>Linear Search</h2>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>
    public static int linearSearch(int[] arr, int key) {
        System.out.print(String.format("Searching %d in %s (iteratively): ", key, Arrays.toString(arr)));
        return linearSearchIterative(arr, key);
    }

    private static int linearSearchIterative(int[] arr, int key) {
        for (int i = 0; i < arr.length; i++) if (arr[i] == key) return i;
        return -1;
    }
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>
    public static int linearSearch(int[] arr, int key) {
        System.out.print(String.format("Searching %d in %s (recursively): ", key, Arrays.toString(arr)));
        return linearSearchRecursive(arr, key);
    }

    private static int linearSearchRecursive(int[] arr, int key) {
        return linearSearchRecursive(arr, key, 0);
    }

    private static int linearSearchRecursive(int[] arr, int key, int i) {
        if (i == arr.length) return -1;
        if (arr[i] == key) return i;
        return linearSearchRecursive(arr, key, i + 1);
    }
</pre>
</td>
</tr>
</tbody>
</table>
<h2>Binary Search</h2>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>
    public static int binarySearch(int[] arr, int key) {
        System.out.print(String.format("Searching %d in %s (iteratively): ", key, Arrays.toString(arr)));
        return binarySearchIterative(arr, key);
    }

    public static int binarySearchIterative(int[] arr, int key) {
        int low = 0;
        int high = arr.length - 1;
        while (low <= high) {
            int mid = (high + low) / 2;
            if (key < arr[mid]) high = mid - 1;
            else if (key > arr[mid]) low = mid + 1;
            else return mid;
        }
        return -1;
    }
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>
    public static int binarySearch(int[] arr, int key) {
        System.out.print(String.format("Searching %d in %s (recursively): ", key, Arrays.toString(arr)));
        return binarySearchRecursive(arr, key);
    }

    public static int binarySearchRecursive(int[] arr, int key) {
        return binarySearchRecursive(arr, key, 0, arr.length - 1);
    }

    public static int binarySearchRecursive(int[] arr, int key, int low, int high) {
        if(low > high) return -1;
        int mid = (high + low) / 2;

        if (key < arr[mid]) return binarySearchRecursive(arr, key, 0, mid -1);
        else if (key > arr[mid]) return binarySearchRecursive(arr, key, mid + 1, high);
        else return mid;
    }
</pre>
</td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Array Reversal */
        "text" : function(){/*
<h1>Array Reversal</h1>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>
    public static void reverse(int[] arr) {
        reverseIterative(arr);
    }

    public static void reverseIterative(int[] arr) {
        for (int i = 0; i < arr.length / 2; i++) {
            int temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
    }
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>
    public static void reverse(int[] arr) {
        reverseRecursive(arr);
    }

    public static void reverseRecursive(int[] arr) {
        reverseRecursive(arr, 0, arr.length - 1);
    }

    public static void reverseRecursive(int[] arr, int i, int j) {
        if (i >= arr.length / 2) return;
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        reverseRecursive(arr, i + 1, j - 1);
    }
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* Check Array Equality */
        "text" : function(){/*
<h1>Check Array Equality</h1>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>
    public static boolean checkArraysEquality(int[] arr1, int[] arr2) {
        return checkArraysEqualityIterative(arr1, arr2);
    }

    public static boolean checkArraysEqualityIterative(int[] arr1, int[] arr2) {
        if (arr1.length != arr2.length) return false;
        for (int i = 0; i < arr1.length; i++) if (arr1[i] != arr2[i]) return false;
        return true;
    }
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>
    public static boolean checkArraysEquality(int[] arr1, int[] arr2) {
        return checkArraysEqualityRecursive(arr1, arr2);
    }

    public static boolean checkArraysEqualityRecursive(int[] arr1, int[] arr2) {
        if (arr1.length != arr2.length) return false;
        return checkArraysEqualityRecursive(arr1, arr2, 0);
    }

    public static boolean checkArraysEqualityRecursive(int[] arr1, int[] arr2, int i) {
        if (i >= arr1.length) return true;
        if (arr1[i] != arr2[i]) return false;
        return checkArraysEqualityRecursive(arr1, arr2, i + 1);
    }
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* Remove Duplicates in Sorted Array */
        "text" : function(){/*
<h1>Remove Duplicates in Sorted Array</h1>
<p style="text-align: justify;">TODO</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* Remove Duplicates in Unsorted Array */
        "text" : function(){/*
<h1>Remove Duplicates in Unsorted Array</h1>
<p style="text-align: justify;">TODO</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* Rotation */
        "text" : function(){/*
<h1>Rotation</h1>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>
    public static void rotateArray(int[] arr) {
        rotateArrayIterative(arr);
    }

    private static void rotateArrayIterative(int[] arr) {
        int first = arr[0];
        for (int i = 1; i < arr.length; i++) arr[i - 1] = arr[i];
        arr[arr.length - 1] = first;
    }
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>
    public static void rotateArray(int[] arr) {
        rotateArrayRecursive(arr);
    }

    private static void rotateArrayRecursive(int[] arr) {
        rotateArrayRecursive(arr, arr[0], 1);
    }

    private static void rotateArrayRecursive(int[] arr, int first, int i) {
        if (i == arr.length) {
            arr[i - 1] = first;
            return;
        }
        arr[i - 1] = arr[i];
        rotateArrayRecursive(arr, first, i + 1);
    }
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ITERATIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>RECURSIVE APPROACH</strong></td>
</tr>
<tr>
<td>
<pre>&nbsp;
</pre>
</td>
</tr>
</tbody>
</table>

        */}.toString().slice(14,-3)
    },
]
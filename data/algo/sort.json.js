var sort_que = [
	{
		question : "Sorting Algorithms",
		tags : ["QQQQ"]
	},

	{
		question : "Insertion Sort",
		tags : ["QQQQ"]
	},

	{
		question : "Selection Sort",
		tags : ["QQQQ"]
	},

	{
		question : "Bubble Sort",
		tags : ["QQQQ"]
	},

	{
		question : "Merge Sort",
		tags : ["QQQQ"]
	},

	{
		question : "Heap Sort",
		tags : ["QQQQ"]
	},

	{
		question : "Quick Sort",
		tags : ["QQQQ"]
	},

	{
		question : "Counting Sort",
		tags : ["QQQQ"]
	},
]

var sort_ans = [
    {   /* Sorting Algorithms */
        "text" : function(){/*
<h1>Sorting Algorithms</h1>
<p><img src="data/algo/images/sort/0.sorting_algos.gif" alt="" width="100%" /></p>
        */}.toString().slice(14,-3)
    },

    {   /* Insertion Sort */
        "text" : function(){/*
<h1>Insertion Sort</h1>
<table width="100%">
<tbody>
<tr>
<td>
<p><img src="data/algo/images/sort/1a.insertion_sort.gif" alt="" width="100%" /></p>
<p><img src="data/algo/images/sort/1b.insertion_sort.png" alt="" width="100%" /></p>
</td>
<td>
<pre>
package com.rahulmitt.interviewpedia.algo.sort;

import java.util.Arrays;

public class InsertionSort {
    public static void main(String[] args) {
        int[] arr = new int[]{6, 5, 3, 1, 8, 7, 2, 4};
        System.out.println("Unsorted: " + Arrays.toString(arr));
        sort(arr);
        System.out.println("Sorted:   " + Arrays.toString(arr));
    }

    private static void sort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];

            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
        }
    }
}

</pre>
</td>
</tr>
</tbody>
</table>
<h2>Time Complexity:</h2>
<table>
<tbody>
<tr>
<td><strong>Best Case</strong></td>
<td>O(n)</td>
</tr>
<tr>
<td><strong>Average Case</strong></td>
<td>O(n&sup2;)</td>
</tr>
<tr>
<td><strong>Worst Case</strong></td>
<td>O(n&sup2;)</td>
</tr>
<tr>
<td><strong>Memory</strong></td>
<td>1</td>
</tr>
<tr>
<td><strong>Is Stable?</strong></td>
<td>YES</td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Selection Sort */
        "text" : function(){/*
<h1>Selection Sort</h1>
<table width="100%">
<tbody>
<tr>
<td width="40%">
<p><img src="data/algo/images/sort/2a.selection_sort.gif" alt="" width="20%" /></p>
<p><img src="data/algo/images/sort/2b.selection_sort.png" alt="" width="100%" /></p>
</td>
<td width="60%">
<pre>
package com.rahulmitt.interviewpedia.algo.sort;

import java.util.Arrays;

public class SelectionSort {
    public static void main(String[] args) {
        int[] arr = new int[]{8, 5, 2, 6, 9, 3, 1, 4, 0, 7};
        System.out.println("Unsorted: " + Arrays.toString(arr));
        sort(arr);
        System.out.println("Sorted:   " + Arrays.toString(arr));
    }

    private static void sort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int idx = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[idx]) idx = j;
            }

            if (idx != i) {
                int temp = arr[idx];
                arr[idx] = arr[i];
                arr[i] = temp;
            }
        }
    }
}




</pre>
</td>
</tr>
</tbody>
</table>
<h2>Time Complexity:</h2>
<table>
<tbody>
<tr>
<td><strong>Best Case</strong></td>
<td>O(n&sup2;)</td>
</tr>
<tr>
<td><strong>Average Case</strong></td>
<td>O(n&sup2;)</td>
</tr>
<tr>
<td><strong>Worst Case</strong></td>
<td>O(n&sup2;)</td>
</tr>
<tr>
<td><strong>Memory</strong></td>
<td>1</td>
</tr>
<tr>
<td><strong>Is Stable?</strong></td>
<td>NO</td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Bubble Sort */
        "text" : function(){/*
<h1>Bubble Sort</h1>
<table width="100%">
<tbody>
<tr>
<td>
<p><img src="data/algo/images/sort/3a.bubble_sort.gif" alt="" width="100%" /></p>
<p><img src="data/algo/images/sort/3b.bubble_sort.png" alt="" width="100%" /></p>
</td>
<td>
<pre>
package com.rahulmitt.interviewpedia.algo.sort;

import java.util.Arrays;

public class BubbleSort {
    public static void main(String[] args) {
        int[] arr = new int[]{6, 5, 3, 1, 8, 7, 2, 4};
        System.out.println("Unsorted: " + Arrays.toString(arr));
        sort(arr);
        System.out.println("Sorted:   " + Arrays.toString(arr));
    }

    private static void sort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {

                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}

</pre>
</td>
</tr>
</tbody>
</table>
<h2>Time Complexity:</h2>
<table>
<tbody>
<tr>
<td><strong>Best Case</strong></td>
<td>O(n)</td>
</tr>
<tr>
<td><strong>Average Case</strong></td>
<td>O(n&sup2;)</td>
</tr>
<tr>
<td><strong>Worst Case</strong></td>
<td>O(n&sup2;)</td>
</tr>
<tr>
<td><strong>Memory</strong></td>
<td>1</td>
</tr>
<tr>
<td><strong>Is Stable?</strong></td>
<td>YES</td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Merge Sort */
        "text" : function(){/*
<h1>Merge Sort</h1>
<table width="100%">
<tbody>
<tr>
<td>
<p><img src="data/algo/images/sort/4a.merge_sort.gif" alt="" /></p>
</td>
</tr>
<tr>
<td>
<pre>
package com.rahulmitt.interviewpedia.algo.sort;

import java.util.Arrays;

public class MergeSort {

    public static void main(String[] args) {
        int[] intArray = {6, 5, 3, 1, 8, 7, 2, 4};
        System.out.println("Original: " + Arrays.toString(intArray));
        mergeSort(intArray, 0, intArray.length);
        System.out.println("Sorted: " + Arrays.toString(intArray));
    }

    public static void mergeSort(int[] input, int start, int end) {
        if (end - start < 2) return;

        int mid = (start + end) / 2;
        mergeSort(input, start, mid);
        mergeSort(input, mid, end);
        merge(input, start, mid, end);
    }

    public static void merge(int[] input, int start, int mid, int end) {
        if (input[mid - 1] <= input[mid]) return;

        int i = start;
        int j = mid;
        int tempIdx = 0;
        int[] tempArr = new int[end - start];

        while (i < mid && j < end) {
            tempArr[tempIdx++] = input[i] <= input[j] ? input[i++] : input[j++];
        }

        // copy the leftover elements from the left array
        System.arraycopy(input, i, input, start + tempIdx, mid - i);

        // any leftover elements in the right array need not be copied

        //copy the temp array to the input array
        System.arraycopy(tempArr, 0, input, start, tempIdx);
    }
}
</pre>
</td>
</tr>
</tbody>
</table>
<h2>Time Complexity:</h2>
<table>
<tbody>
<tr>
<td><strong>Best Case</strong></td>
<td>O(n log n)</td>
</tr>
<tr>
<td><strong>Average Case</strong></td>
<td>O(n log n)</td>
</tr>
<tr>
<td><strong>Worst Case</strong></td>
<td>O(n log n)</td>
</tr>
<tr>
<td><strong>Memory</strong></td>
<td>n</td>
</tr>
<tr>
<td><strong>Is Stable?</strong></td>
<td>YES</td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Heap Sort */
        "text" : function(){/*
<h1>Heap Sort</h1>
<table width="100%">
<tbody>
<tr>
<td>
<p><img src="data/algo/images/sort/XXX.gif" alt="" width="100%" /></p>
<p><img src="data/algo/images/sort/XXX.png" alt="" width="100%" /></p>
</td>
<td>
<pre>

</pre>
</td>
</tr>
</tbody>
</table>
<h2>Time Complexity:</h2>
<table>
<tbody>
<tr>
<td><strong>Best Case</strong></td>
<td>O(n log n)</td>
</tr>
<tr>
<td><strong>Average Case</strong></td>
<td>O(n log n)</td>
</tr>
<tr>
<td><strong>Worst Case</strong></td>
<td>O(n log n)</td>
</tr>
<tr>
<td><strong>Memory</strong></td>
<td>1</td>
</tr>
<tr>
<td><strong>Is Stable?</strong></td>
<td>NO</td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Quick Sort */
        "text" : function(){/*
<h1>Quick Sort</h1>
<table width="100%">
<tbody>
<tr>
<td>
<p><img src="data/algo/images/sort/6a.quicksort.png" alt="" width="100%" /></p>
</td>
<td>
<pre>
package com.rahulmitt.interviewpedia.algo.sort;

import java.util.Arrays;

public class QuickSort {
    public static void main(String[] args) {
        int[] intArray = {3, 7, 8, 5, 2, 1, 9, 5, 4};
        System.out.println("Original: " + Arrays.toString(intArray));
        quickSort(intArray, 0, intArray.length);
        System.out.println("Sorted Array: " + Arrays.toString(intArray));
    }

    public static void quickSort(int[] input, int start, int end) {
        if (end - start < 2) return;

        int pivotIdx = partition(input, start, end);
        quickSort(input, start, pivotIdx);
        quickSort(input, pivotIdx + 1, end);
    }

    // this is using the first element as the pivot
    private static int partition(int[] input, int start, int end) {
        int pivot = input[start];
        int i = start;
        int j = end;

        while (i < j) {
            while (i < j && input[--j] >= pivot) ; // empty loop body
            if (i < j) input[i] = input[j];

            while (i < j && input[++i] <= pivot) ; // empty loop body
            if (i < j) input[j] = input[i];
        }

        input[j] = pivot;
        return j;
    }
}

</pre>
</td>
</tr>
</tbody>
</table>
<h2>Time Complexity:</h2>
<table>
<tbody>
<tr>
<td><strong>Best Case</strong></td>
<td>O(n log n)</td>
</tr>
<tr>
<td><strong>Average Case</strong></td>
<td>O(n log n)</td>
</tr>
<tr>
<td><strong>Worst Case</strong></td>
<td>O(n&sup2;)</td>
</tr>
<tr>
<td><strong>Memory</strong></td>
<td>log n</td>
</tr>
<tr>
<td><strong>Is Stable?</strong></td>
<td>NO</td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Counting Sort */
        "text" : function(){/*
<h1>Counting Sort</h1>
<table width="100%">
<tbody>
<tr>
<td>
<p><img src="data/algo/images/sort/7a.counting_sort.gif" alt="" width="100%" /></p>
</td>
</tr>
<tr>
<td>
<pre>
package com.rahulmitt.interviewpedia.algo.sort;

import java.util.Arrays;

public class CountingSort {
    public static void main(String[] args) {
        int[] intArray = {3, 4, 2, 1, 0, 0, 4, 3, 4, 2};
        //int[] intArray = {1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0};
        System.out.println("Original:     " + Arrays.toString(intArray));
        //countingSort(intArray, 0, 1);
        countingSort(intArray, 0, 4);
        System.out.println("Sorted Array: " + Arrays.toString(intArray));
    }

    public static void countingSort(int[] input, int min, int max) {
        int[] countArray = new int[(max - min) + 1];

        for (int i = 0; i < input.length; i++) {
            countArray[input[i] - min]++;
        }

        int j = 0;
        for (int i = min; i <= max; i++) {
            while (countArray[i - min] > 0) {
                input[j++] = i;
                countArray[i - min]--;
            }
        }
    }
}
</pre>
</td>
</tr>
</tbody>
</table>
<h2>Time Complexity:</h2>
<table>
<tbody>
<tr>
<td><strong>Best Case</strong></td>
<td></td>
</tr>
<tr>
<td><strong>Average Case</strong></td>
<td></td>
</tr>
<tr>
<td><strong>Worst Case</strong></td>
<td></td>
</tr>
<tr>
<td><strong>Memory</strong></td>
<td></td>
</tr>
<tr>
<td><strong>Is Stable?</strong></td>
<td></td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },
]
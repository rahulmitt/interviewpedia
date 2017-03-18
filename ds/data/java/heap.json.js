var heap_que = [
	{
		question : "Minimum Sum Of 2 Nums Formed From Digits Of Array",
		tags : ["Heap", "Greedy", "Priority", "Queue"]
	},
	{
		question : "Rearrange String For Character Distance",
		tags : ["Heap", "Greedy", "Priority", "Queue"]
	},
	
]

var heap_ans = [
    {
		/* Minimum Sum Of 2 Nums Formed From Digits Of Array */
		"text" : function(){/*
<p>Minimum sum of two numbers formed from digits of an array<br />Given an array of digits (values are from 0 to 9), find the minimum possible sum of two numbers<br />formed from digits of the array. All digits of given array must be used to form the two numbers.</p>
<p>Examples:</p>
<p>Input: [6, 8, 4, 5, 2, 3]<br />Output: 604<br />The minimum sum is formed by numbers<br />358 and 246</p>
<p>Input: [5, 3, 0, 7, 4]<br />Output: 82<br />The minimum sum is formed by numbers<br />35 and 047</p>
<pre>
package com.interviewpedia.heap;

import java.util.PriorityQueue;
import java.util.Queue;

public class MinimumSumOf2NumsFormedFromDigitsOfArray {

    private static void solution(int[] arr) {

        Queue<Integer> q = new PriorityQueue<Integer>(arr.length);
        for (int i : arr) {
            q.offer(i);
        }

        StringBuilder num1 = new StringBuilder();
        StringBuilder num2 = new StringBuilder();

        while (!q.isEmpty()) {
            num1.append(q.remove());

            if (!q.isEmpty()) {
                num2.append(q.remove());
            }
        }

        long n1 = Long.valueOf(num1.toString());
        long n2 = Long.valueOf(num2.toString());
        System.out.println(n1 + " + " + n2 + " = " + (n1 + n2));
    }

    public static void main(String[] args) {
//        int[] arr = {6, 8, 4, 5, 2, 3};
        int[] arr = {5, 3, 0, 7, 4};
        solution(arr);
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Rearrange String For Character Distance */
		"text" : function(){/*
<p>Rearrange characters in a string such that no two adjacent are same<br />Given a string with repeated characters, task is rearrange characters in a string so that no two adjacent characters are same.</p>
<p>Note : It may be assumed that the string has only lowercase English alphabets.</p>
<p>Examples:</p>
<p>Input: aaabc<br />Output: abaca</p>
<p>Input: aaabb<br />Output: ababa</p>
<p>Input: aa<br />Output: Not Possible</p>
<p>Input: aaaabc<br />Output: Not Possible</p>
<pre>
package com.interviewpedia.heap;


import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Queue;

public class RearrangeStringForCharacterDistance {

    private static String rearrange(String s, int distance) {
        char[] arr = s.toCharArray();
        final Map<Character, Integer> freq = new HashMap<Character, Integer>();
        for (int i = 0; i < arr.length; i++) {
            int val = 0;
            if (freq.containsKey(arr[i])) {
                val = freq.get(arr[i]);
            }
            freq.put(arr[i], ++val);
        }

        Queue<Character> q = new PriorityQueue<Character>(freq.keySet().size(), new Comparator<Character>() {
            public int compare(Character o1, Character o2) {
                return freq.get(o2).compareTo(freq.get(o1));
            }
        });


        for (Map.Entry<Character, Integer> e : freq.entrySet()) {
            q.offer(e.getKey());
        }

        System.out.println("q=" + q);

        char[] newArr = new char[arr.length];
        while (q.size() != 0) {
            char c = q.remove();
            for (int i = 0; i < freq.get(c); i++) {
                newArr[i * distance] = c;
            }
        }

        return new String(newArr);
    }

    public static void main(String[] args) {
        String s1 = "bbbccccdddddd";
        String s2 = rearrange(s1, 2);
        System.out.println(s1);
        System.out.println(s2);
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
]
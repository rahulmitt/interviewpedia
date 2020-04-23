var string_que = [
	{
		question : "Check Duplicates In String",
		tags : ["Check", "Duplicate", "String"]
	},
	{
		question : "Check String Rotation",
		tags : ["Check", "String", "Rotation"]
	},
	{
		question : "Consecutive Characters Printer",
		tags : ["Consecutive", "Character", "Printer", "String"]
	},
	{
		question : "Hamming Distance Calculator",
		tags : ["Hamming", "Distance", "String"]
	},
	{
		question : "Longest Common SubSequence",
		tags : ["Longest", "Common", "Subsequence", "String"]
	},
	{
		question : "Longest Increasing SubSequence",
		tags : ["Longest", "Increasing", "Subsequence", "String"]
	},
	{
		question : "Replace Space With Special Chars",
		tags : ["Replace", "Space", "String"]
	},
	{
		question : "Rotate Matrix",
		tags : ["Rotate", "Matrix", "String"]
	},
	{
		question : "Rotate Matrix In Place",
		tags : ["Rotate", "Matrix", "String"]
	},
	{
		question : "String Compression",
		tags : ["String", "Compression"]
	},
	{
		question : "Toggle Character Case In String",
		tags : ["Toggle", "Character", "Case", "String"]
	},
	{
		question : "Twos Compliment Of Binary Number String",
		tags : ["Twos", "2", "Compliment", "Binary", "Number", "String"]
	},
	
]

var string_ans = [
	{
	/* Check Duplicates In String */
	"text" : function(){/*
<p><br />Implement an space efficient algorithm to determine if a string (of characters from &lsquo;a&rsquo; to &lsquo;z&rsquo;)<br />has all unique characters or not. Use of additional data structures like count array, hash, etc is not allowed.</p>
<p>Expected Time Complexity : O(n)</p>
<p>Input : str = "aaabbccdaa"<br />Output : No</p>
<p>Input : str = "abcd"<br />Output : Yes</p>
<pre>
package com.interviewpedia.string.puzzles;
 
public class CheckDuplicatesInString {

    // This solution essentially consists of a loop over all characters in the string,
    // checking on each iteration whether the first and last index of the characters are the same.
    // The indexOf and lastIndexOf methods each take time O(n), because they have to scan across
    // all the characters of the string to determine if any of them match the one you're looking for.
    // Therefore, since the loop runs O(n) times and does O(n) work per iteration, its runtime is O(n2).

    private static boolean hasAllUniqueCharacters(String s) {
        for (char c : s.toCharArray()) {
            if (s.indexOf(c) != s.lastIndexOf(c)) {
                return true;
            }
        }
        return false;
    }

    // Solution from Cracking the Coding Interview

    // This approach is much faster than yours. First, since the function starts off by checking if the string
    // has length greater than 26, the function never has to test any string of length 27 or greater. Therefore,
    // the inner loop runs at most 26 times. Each iteration does O(1) work in bitwise operations, so the overall
    // work done is O(1) (O(1) iterations times O(1) work per iteration).

    // The basic idea is the following: imagine that you have an array of 26 booleans, each one tracking
    // whether a particular character has appeared in the string already. You start with all of them false.
    // You then iterate across the characters of the string, and each time you see a character you look into
    // the array slot for that character. If it's false, this is the first time you've seen the character and
    // you can set the slot to true. If it's true, you've already seen this character and you can immediately
    // report that there's a duplicate.

    public static boolean isUniqueChars(String str) {
        if (str.length() > 26) {
            return false;
        }

        // Notice that this method doesn't allocate an array of booleans. Instead, it opts for a clever trick.
        // Since there are only 26 different characters possible and there are 32 bits in an int, the solution
        // creates an  int variable where each bit of the variable corresponds to one of the characters in the
        // string. Instead of reading and writing an array, the solution reads and writes the bits of the number.
        int checker = 0;
        for (int i = 0; i < str.length(); i++) {
            int val = str.charAt(i) - 'a';

            // Here, 1 << val creates an int value that has all bits zero except for the val-th bit. It then
            // uses bitwise AND to AND this value with checker. If the bit at position val in checker is already
            // set, then this evaluates to a nonzero value (meaning we've already seen the number) and we can
            // return false. Otherwise, it evaluates to 0, and we haven't seen the number.
            if ((checker & (1 << val)) > 0) {
                return false;
            }
            
            // This uses the "bitwise OR with assignment" operator, which is equivalent to
            //      checker = checker | (1 << val);
            // This ORs checker with a value that has a 1 bit set only at position val, which turns the bit on.
            // It's equivalent to setting the val-th bit of the number to 1.
            checker |= (1 << val);
        }
        return true;
    }

    public static void main(String[] args) {
        String s = "aaabbccdaa";
        if (isUniqueChars(s)) {
            System.out.println("No");
        } else {
            System.out.println("Yes");
        }

    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Check String Rotation */
	"text" : function(){/*
<p>Assume that you have a method isSubString() which checks if one word is a subString of another.Given 2 string s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubString.<br /><br />e.g., "waterbottle" is a rotation of "erbottlewat"</p>
<pre>
package com.interviewpedia.string.puzzles;

public class CheckStringRotation {

    private static boolean isSubString(String s1, String s2) {
	// this stub represents a given method
        return false;
    }

    private static boolean isRotation(String s1, String s2) {
        if (s1.length() == s2.length() && s1.length() > 0) {
            return isSubString(s1 + s1, s2);
        }
        return false;
    }
}

</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Consecutive Characters Printer */
	"text" : function(){/*
<p>Print consecutive characters together in a line<br /><br />&nbsp;Given a sequence of characters, print consecutive sequence of characters in a line, otherwise<br />&nbsp;print it in a new line.<br /><br />&nbsp;Examples:<br /><br />&nbsp;Input : ABCXYZACCD<br />&nbsp;Output : ABC<br />&nbsp;XYZ<br />&nbsp;A<br />&nbsp;C<br />&nbsp;CD<br /><br />&nbsp;Input : ABCZYXACCD<br />&nbsp;Output: ABC<br />&nbsp;ZYX<br />&nbsp;A<br />&nbsp;C<br />&nbsp;CD<br /><br /></p>
<pre>
package com.interviewpedia.string.puzzles;

public class ConsecutiveCharactersPrinter {

    private static void print(char[] chars) {
        for (int i = 0; i < chars.length + 1; i++) {
            char pre = i == 0 ? '\r' : chars[i - 1];
            char curr = i < chars.length ? chars[i] : '\r';

            System.out.print(pre);
            if (pre != curr + 1 && pre != curr - 1) {
                System.out.println();
            }
        }
    }

    public static void main(String[] args) {
//        String s = "ABCXYZACCD";
        String s = "ABCZYXACCD";
        char[] chars = s.toCharArray();
        print(chars);

    }
}

</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Hamming Distance Calculator */
	"text" : function(){/*
<p>Hamming Distance between two strings</p>
<p>You are given two strings of equal length, you have to find the Hamming Distance between these string.<br />Where the Hamming distance between two strings of equal length is the number of positions at which the<br />corresponding character are different.</p>
<p>In other words, hamming distance is the minimum number of substitutions required to change one string into another</p>
<p>Examples:</p>
<p>Input : str1[] = "hellogoodmorning", str2[] = "helloabcdmorning"<br />Output : 4</p>
<p>Input : str1[] = "1011101", str2[] = "1001001"<br />Output : 2</p>
<pre>
package com.interviewpedia.string.puzzles;

public class HammingDistanceCalculator {

    private static int calculate(String str1, String str2) {
        if (str1.length() != str2.length()) {
            return -1;
        }

        int distance = 0;
        for (int i = 0; i < str1.length(); i++) {
            if (str1.charAt(i) != str2.charAt(i)) {
                distance++;
            }
        }

        return distance;
    }

    public static void main(String[] args) {
        String str1 = "hellogoodmorning";
        String str2 = "helloabcdmorning";

        int distance = calculate(str1, str2);
        System.out.println(distance);
    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Longest Common SubSequence */
	"text" : function(){/*
<p><a href="https://www.youtube.com/watch?v=NnD96abizww" target="_blank">https://www.youtube.com/watch?v=NnD96abizww</a></p>
<pre>
package com.interviewpedia.string.puzzles;

import java.util.Stack;

public class LongestCommonSubSequence {

    private static String find(String s1, String s2) {
        int[][] arr = new int[s1.length() + 1][s2.length() + 1];
        for (int i = 1; i <= s1.length(); i++) {
            for (int j = 1; j <= s2.length(); j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    arr[i][j] = arr[i - 1][j - 1] + 1;
                } else {
                    arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
                }
            }
        }

        StringBuilder longestCommonSubSequence = new StringBuilder();
        int i = s1.length();
        int j = s2.length();
        while (i > 0 && j > 0) {
            if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                longestCommonSubSequence.append(s1.charAt(i - 1));
                i--;
                j--;
            } else if (arr[i - 1][j] >= arr[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }
        return longestCommonSubSequence.reverse().toString();
    }

    public static void main(String[] args) {
        String s1 = "ABCDAF";
        String s2 = "ACBCF";
        String longestCommonSubSequence = find(s1, s2);
        System.out.println(longestCommonSubSequence);
    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Longest Increasing SubSequence */
	"text" : function(){/*
TODO
<pre>

</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Replace Space With Special Chars */
	"text" : function(){/*
<p>Replace space with %20</p>
<pre>
package com.interviewpedia.string.puzzles;

public class ReplaceSpaceWithSpecialChars {

    private static String replaceAll(String s, int length) {
        char[] str = s.toCharArray();
        int spaces = countSpaces(str, length);
        int j = length + spaces * 2;
        for (int i = length - 1; i >= 0; i--) {
            if (str[i] == ' ') {
                str[j - 1] = '0';
                str[j - 2] = '2';
                str[j - 3] = '%';
                j -= 3;
            } else {
                str[j - 1] = str[i];
                j--;
            }
        }
        return new String(str);
    }

    private static int countSpaces(char[] str, int length) {
        int count = 0;
        for (int i = 0; i < length; i++) {
            if (str[i] == ' ') {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        String s = "god is great    ";
        String special = "%20";
        String newString = replaceAll(s, 12);
        System.out.println(newString);
    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Rotate Matrix */
	"text" : function(){/*
<p>Rotate matrix by 90 degrees clockwise</p>
<pre>
package com.interviewpedia.string.puzzles;

public class RotateMatrix {

    private static char[][] rotate(char[][] matrix) {
        int len = matrix.length;
        char[][] rotated = new char[len][len];

        for (int i = 0; i < len; i++) {
            for (int j = 0; j < len; j++) {
                rotated[j][len - 1 - i] = matrix[i][j];
            }
        }
        return rotated;
    }

    public static void main(String[] args) {
        char[][] matrix = {
                {'a', 'b', 'c', 'd'},
                {'e', 'f', 'g', 'h'},
                {'i', 'j', 'k', 'l'},
                {'m', 'n', 'o', 'p'}
        };

        System.out.println("ORIGINAL:");
        print(matrix);
        char[][] rotated = rotate(matrix);
        System.out.println("ROTATED:");
        print(rotated);
    }

    private static void print(char[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix.length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Rotate Matrix In Place */
	"text" : function(){/*
TODO
<pre>

</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* String Compression */
	"text" : function(){/*
<p>Input: aaabbc</p>
<p>Output: a3b2c1</p>
<pre>
package com.interviewpedia.string.puzzles;

public class StringCompression {
    private static String compress(String s) {
        String compressed = "";
        char t = s.charAt(0);
        int count = 1;
        for (int i = 1; i < s.length(); i++) {
            if (t == s.charAt(i)) {
                count++;
            } else {
                compressed += t + "" + count;
                t = s.charAt(i);
                count = 1;
            }
        }
        return compressed + t + count;
    }

    public static void main(String[] args) {
        String s = "a";
        System.out.println(compress(s));
    }
}

</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Toggle Character Case In String */
	"text" : function(){/*
<p>Toggle all characters in a string in a given string in which we toggle all characters.</p>
<p>Examples:<br /><br />Input : gfg<br />Output : GFG<br /><br />Input : aBc12#<br />Output : AbC12#<br /><br />Input : tu@kmiNi<br />Output : TU@KMInI</p>
<pre>
package com.interviewpedia.string.puzzles;

public class ToggleCharacterCaseInString {

    private static String toggle(String s) {
        char[] chars = s.toCharArray();
        char[] toggled = new char[chars.length];

        for (int i = 0; i < chars.length; i++) {
            if (chars[i] >= 'A' && chars[i] <= 'Z') {
                toggled[i] = (char) (chars[i] + 'a' - 'A');

            } else if (chars[i] >= 'a' && chars[i] <= 'z') {
                toggled[i] = (char) (chars[i] + 'A' - 'a');

            } else {
                toggled[i] = chars[i];
            }
        }
        return new String(toggled);
    }

    public static void main(String[] args) {
        String s = "aBc12#";
        String toggled = toggle(s);
        System.out.println(toggled);
    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
	{
	/* Twos Compliment Of Binary Number String */
	"text" : function(){/*
<p>2&rsquo;s complement of a binary string.</p>
<p>Given a Binary Number as string, print its 2&rsquo;s complements.</p>
<p>2&rsquo;s complement of a binary number is 1 added to the 1&rsquo;s complement of the binary number.</p>
<p>Note that 1&rsquo;s complement is simply flip of given binary number.</p>
<p>Examples:</p>
<p>2's complement of "0111" is &nbsp;"1001"</p>
<p>2's complement of "1100" is &nbsp;"0100"</p>
<pre>
package com.interviewpedia.string.puzzles;

public class TwosComplimentOfBinaryNumberString {

    private static String twosCompliment(String str) {
        char[] chars = str.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            chars[i] = chars[i] == '1' ? '0' : '1';
        }

        for (int j = chars.length - 1; j >= 0; j--) {
            if (chars[j] == '0') {
                chars[j] = '1';
                break;
            } else {
                chars[j] = '0';
            }
        }
        return new String(chars);
    }

    public static void main(String[] args) {
        String s = "1100";
        System.out.println(s);
        String twosCompliment = twosCompliment(s);
        System.out.println(twosCompliment);
    }
}
</pre>
	*/}.toString().slice(14,-3)
	},
	
]
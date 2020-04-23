var string_que = [
	{
		question : "Why String is final in Java?",
		tags : ["string", "stringpool", "immutable", "final"]
	},
	{
		question : "Can we compare String using == operator?",
		tags : ["equals", "compare"]
	},
	{
		question : "String pool and intern() method",
		tags : ["stringpool", "intern"]
	}
]

var string_ans = [
	{
		"text" : function(){/*
		<p style='text-align: justify;'>
Imagine <strong><span style="color:#a52a2a;">StringPool </span></strong>facility without making string immutable, its not possible at all because in case of string pool, one string object/literal e.g. &quot;Test&quot; could be referenced by many reference variables, so if anyone of them change the value, others would automatically get affected. Since String is immutable it can be safely shared between many threads, which is very important for multithreaded programming and to avoid any synchronization issues in Java. Immutability also makes String instance thread-safe in Java. Another important point to note about String is memory leak caused by SubString, which is not a thread related issues but something to be aware of.</p>
<p style='text-align: justify;'>Another reason of Why String is immutable in Java is to allow String to cache its hashcode. Being immutable, String in Java caches its hashcode, and do not calculate every time we call hashcode method of String, which makes it very fast as hashmap key. In short because String is immutable, no one can change its contents once created which guarantees hashCode of String to be same on multiple invocation.</p>
<p style='text-align: justify;'>The absolutely most important reason why String is immutable is that it is used by the class loading mechanism, and thus have profound and fundamental security aspects. Had String been mutable, a request to load &quot;java.io.Writer&quot; could have been changed to load &quot;mil.vogoon.DiskErasingWriter&quot;</p>
*/}.toString().slice(14,-3)
	},
	
	{
		"text" : function(){/*
<p>equals() return true if two String points to same object or two String has same contents while == operator returns true if two String object points to same object but return false if two different String object contains same contents.</p>
<pre>
public static void main(String[] args) {

	String string = "abc";
	String s1 = new String("abc");
	String s2 = "abc";
	String s3 = "a" + "bc";
	String s4 = string + s2;
	String s5 = "abcabc";

	// they are not the same object
	System.out.println("string == s1 : " + (string == s1));
	
	// literals are interned by the compiler and thus refer to the same object
	System.out.println("string == s2 : " + (string == s2));
	
	// concatenation of string literals happens at compile time, also resulting in the same object
	System.out.println("string == s3 : " + (string == s3));
	
	System.out.println("s4 == s5 : " + (s4 == s5));
	
	// substring() is invoked at runtime, generating distinct objects
	System.out.println("string == \"!abc\".substring(1) : " + (string == "!abc".substring(1)));
	
	System.out.println("string == \"!abc\".substring(1).intern() : "
				+ (string == "!abc".substring(1).intern()));
}
</pre>
<p><span style="text-decoration: underline;"><strong>Output:</strong></span></p>
<p>
string == s1 : false<br />
string == s2 : true<br />
string == s3 : true<br />
s4 == s5 : false<br />
string == "!abc".substring(1) : false<br />
string == "!abc".substring(1).intern() : true<br />
</p>
		*/}.toString().slice(14,-3)
	},
	
	{
		"text" : function(){/*
String pool is a special storage area in Java heap, mostly located on PerGen space, to store String literals like "abc". When Java program creates a new String using String literal, JVM checks for that String in pool and if String literal is already present in pool than same object is returned instead of creating a whole new object. String pool check is only performed when you create String as literal, if you create String using new() operator, a new String object will be created even if String with same content is available in pool. String object crated by new() operator is by default not added in String pool as opposed to String literal. intern() method allows to put an String object into pool.
		*/}.toString().slice(14,-3)
	},
	
	{
		"text" : function(){/*
		TODO
		*/}.toString().slice(14,-3)
	}

]


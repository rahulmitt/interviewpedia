var collections_que = [
	{
		id : 1,
		question : "Collections and Maps",
		tags : ["collection", "list", "set", "sorted set", "arraylist", "linkedlist", "vector", "hastset", "linkedhashset", "treeset", 
			"map", "sortedmap", "hashtable", "hashmap", "linkedhashmap", "treemap"]
	},
	
	{
		id : 2,
		question : "Lists",
		tags : ["arraylist", "linkedlist", "vector", "copyonwritearraylist"]
	},
	
	{
		id : 3,
		question : "Sets",
		tags : []
	},
	
	{
		id : 4,
		question : "Queues",
		tags : []
	},
	
	{
		id : 5,
		question : "Maps",
		tags : []
	},
	
	{
		id : 6,
		question : "Iterator Vs Enumeration",
		tags : ["iterator", "enumeration", "concurrentmodificationException", "fail-fast"]
	},
	
	{
		id : 7,
		question : "Fail-fast and Fail-safe Iterators",
		tags : ["iterator", "concurrentmodificationException", "fail-fast", "fail-safe"]
	},
	
	{
		id : 8,
		question : "The hashCode() contract",
		tags : ["equals", "hashCode", "contract"]
	},
	
	{
		id : 9,
		question : "Comparable Interface",
		tags : ["comparable", "interface", "natural ordering"]
	},
	
	{
		id : 10,
		question : "Comparator Interface",
		tags : ["comparator", "interface", "total ordering", "custom ordering"]
	},
	
	{
		id : 11,
		question : "ArrayList's Iterator",
		tags : ["arraylist", "modcount", "expectedmodcount", "concurrentmodificationException", "iterator", "itr", "listitr", "abstractlist"]
	},
	
	{
		id : 12,
		question : "Inside a HashMap",
		tags : ["hashmap", "hashing", "bucket", "collision", "entry"]
	},
	
	{
		id : 13,
		question : "Inside a LinkedHashMap",
		tags : ["linkedhashmap", "hashing", "bucket", "collision", "entry", "LRU Cache"]
	},
	
	{
		id : 14,
		question : "Inside a HashSet",
		tags : ["hashset"]
	},
	
	{
		id : 15,
		question : "The TreeMap class",
		tags : ["treemap"]
	},
	
	{
		id : 16,
		question : "Sort a Map - Example",
		tags : ["sort", "natural order", "total order", "custom order", "comparable", "comparator"]
	},
	
	{
		id : 17,
		question : "Choosing an appropriate Collection",
		tags : ["collection", "choosing", "map"]
	},
	
	{
		id : 18,
		question : "Time Complexity",
		tags : ["time complexity", "performance"]
	}
]

var collections_ans = [
	{
		id : 1,
		"text" : function(){/*
<p><strong>Collections</strong> class hierarchy</p>
<p><img src='data/java/images/collections.gif' width='425' height='331' /></p>
<table border='1' cellspacing='1' cellpadding='1'>
<tbody>
<tr>
<th style='text-align: center;'><strong>Concrete Classes</strong></th>
<th style='text-align: center;'><strong>Interface</strong></th>
<th style='text-align: center;'><strong>Duplicates Allowed</strong></th>
<th style='text-align: center;'><strong>Ordered/Sorted</strong></th>
<th style='text-align: center;'><strong>Methods invoked on Elements</strong></th>
<th style='text-align: center;'><strong>Underlying Datastructure</strong></th>
</tr>
</tbody>
<tbody>
<tr>
<td>ArrayList</td>
<td>List</td>
<td>Yes</td>
<td>InsertionOrder</td>
<td>equals()</td>
<td>Resizable array</td>
</tr>
<tr>
<td>Vector</td>
<td>List</td>
<td>Yes</td>
<td>Insertion Order</td>
<td>equals()</td>
<td>Resizable array</td>
</tr>
<tr>
<td>LinkedList</td>
<td>List</td>
<td>Yes</td>
<td>Insertion Order</td>
<td>equals()</td>
<td>Doubly Linked List</td>
</tr>
<tr>
<td>HashSet</td>
<td>Set</td>
<td>No</td>
<td>No Order</td>
<td>equals() hashCode()</td>
<td>Hash Table</td>
</tr>
<tr>
<td>LinkedHashSet</td>
<td>Set</td>
<td>No</td>
<td>Insertion Order</td>
<td>equals() hashCode()</td>
<td>Hash Table and Doubly Linked List</td>
</tr>
<tr>
<td>TreeSet</td>
<td>Set</td>
<td>No</td>
<td>Sorted Order</td>
<td>equals() hashCode()</td>
<td>Balanced Tree</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p><strong>Maps</strong> class hierarchy</p>
<p><img src='data/java/images/maps.gif' alt='' width='343' height='290' /></p>
<table>
<tbody>
<tr>
<th style='text-align: center;'><strong>Concrete Classes</strong></th>
<th style='text-align: center;'><strong>Interface</strong></th>
<th style='text-align: center;'><strong>Duplicated Allowed?</strong></th>
<th style='text-align: center;'><strong>Ordered/Sorted</strong></th>
<th style='text-align: center;'><strong>Methods invoked on elements</strong></th>
<th style='text-align: center;'><strong>Underlying datastructure</strong></th>
</tr>
<tr>
<td>HashMap</td>
<td>Map</td>
<td>Unique Keys</td>
<td>No Order</td>
<td>equals() and hashCode()</td>
<td>Hash-Table</td>
</tr>
<tr>
<td>LinkedHashMap</td>
<td>Map</td>
<td>Unique Keys</td>
<td>Insertion Order/ Access Order</td>
<td>equals() and hashCode()</td>
<td>Hash-Table / Doubly Linked List</td>
</tr>
<tr>
<td>TreeMap</td>
<td>SortedMap</td>
<td>Unique Keys</td>
<td>Sorted by keys</td>
<td>equals() and compareTo()</td>
<td>Red-Black Tree</td>
</tr>
<tr>
<td>HashTable</td>
<td>Map</td>
<td>Unique Keys</td>
<td>No Order</td>
<td>equals() and hashCode()</td>
<td>Hash-Table</td>
</tr>
</tbody>
</table>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 2,
		"text" : function(){/*
<p style='text-align: justify;'><img src='data/java/images/list.png' alt='' /></p>
<p style='text-align: justify;'><strong>LinkedList</strong> and <strong>ArrayList</strong> are two different implementations of the List interface. LinkedList implements it with a <strong>doubly-linked list</strong>. ArrayList implements it with a dynamically <strong>resizing array</strong>.</p>
<p style='text-align: justify;'><span style='color: #993300;'><strong>LinkedList&lt;E&gt;</strong></span> allows for constant-time insertions or removals using iterators, but only sequential access of elements. In other words, you can walk the list forwards or backwards, but finding a position in the list takes time proportional to the size of the list.</p>
<p style='text-align: justify;'><span style='color: #993300;'><strong>ArrayList&lt;E&gt;</strong></span>, on the other hand, allow fast random read access, so you can grab any element in constant time. But adding or removing from anywhere but the end requires shifting all the latter elements over, either to make an opening or fill the gap. Also, if you add more elements than the capacity of the underlying array, a new array (twice the size) is allocated, and the old array is copied to the new one, so adding to an ArrayList is O(n) in the worst case but constant on average.</p>
<table>
<tbody>
<tr>
<th><strong>Operation</strong></th>
<th><strong>LinkedList</strong></th>
<th><strong>ArrayList</strong></th>
</tr>
<tr>
<td>get(int index)</td>
<td>O(n)</td>
<td><strong><span style='color: #00ff00;'>O(1)</span></strong></td>
</tr>
<tr>
<td>add(E element)</td>
<td>O(1)</td>
<td>O(1) amortized, but O(n) worst-case since the array must be resized and copied</td>
</tr>
<tr>
<td>add(int index, E element)</td>
<td>O(n)</td>
<td>O(n - index) amortized, but O(n) worst-case (as above)</td>
</tr>
<tr>
<td>remove(int index)</td>
<td>O(n)</td>
<td>O(n - index) (i.e. removing last is O(1))</td>
</tr>
<tr>
<td>Iterator.remove()</td>
<td><strong><span style='color: #00ff00;'>O(1)</span></strong></td>
<td>O(n - index)</td>
</tr>
<tr>
<td>ListIterator.add(E element)</td>
<td><strong><span style='color: #00ff00;'>O(1)</span></strong></td>
<td>O(n - index)</td>
</tr>
</tbody>
</table>
<p style='text-align: justify;'>It's worth noting that <span style='color: #993300;'><strong>Vector</strong> </span>also implements the List interface and is almost identical to ArrayList. The difference is that Vector is synchronized, so it is <strong>thread-safe</strong>. Because of this, it is also slightly slower than ArrayList. So as far as I understand, most Java programmers avoid Vector in favor of ArrayList since they will probably synchronize explicitly anyway if they care about that.</p>
<p style='text-align: justify;'>When an <strong>ArrayList</strong> is structurally modified by a thread while another thread is iterating over it, the iterator fails throwing the <strong>ConcurrentModificationException</strong>. That is because the ArrayList gives back an iterator that is <strong>fail-fast</strong> by design. However, sometimes it is required to add/remove elements from a list in concurrent environment where another thread might be iterating over it. In this case, we can use <strong>java.util.concurrent.<span style='color: #993300;'>CopyOnWriteArrayList</span></strong>. This is a thread-safe variant of java.util.ArrayList class wherein all mutative operations (add, set, and so on) are implemented by making a <em>fresh copy</em> of the underlying array.</p>
<p style='text-align: justify;'>All operations that change the contents of a <strong>CopyOnWriteArrayList</strong> causes the underlying array to be replaced with a copy of itself before the contents are changed. Any active iterators will continue to see the <em>unmodified</em> array, so there is no need for <em>locks</em>. Iterators created by a CopyOnWriteArrayList cannot change the underlying array. Though these iterators do have methods for changing the underlying collection, their implementations throw an <strong>UnsupportedOperationException</strong> instead of modifying the underlying collection.</p>
<h4 style='text-align: justify;'>When should I use LinkedList?</h4>
<ol style='text-align: justify;'>
<li>When you need efficient removal in between elements or at the start.</li>
<li>When you don't need random access to elements, but can live with iterating over them one by one</li>
</ol>
<h4 style='text-align: justify;'>When should I use ArrayList?</h4>
<ol style='text-align: justify;'>
<li>When you need random access to elements ('get the nth. element').</li>
<li>When you don't need to remove elements from between others. It's possible but it's slower since the internal backing-up array needs to be reallocated.</li>
<li>Adding elements is amortized constant time (meaning every once in a while, you pay some performance, but overall adding is instantly done)</li>
</ol>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 3,
		"text" : function(){/*
<p><img src='data/java/images/set.png'' /></p>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 4,
		"text" : function(){/*
<p><img src='data/java/images/queue.png'' /></p>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 5,
		"text" : function(){/*
<p><img src='data/java/images/map.png'' /></p>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 6,
		"text" : function(){/*
<p style='text-align: justify;'><strong>Iterators</strong> differ from <strong>enumerations</strong> in three ways:</p>
<ol style='text-align: justify;'>
<li>Iterators allow the caller to <strong>remove</strong> elements from the underlying collection during the iteration with well-defined semantics.</li>
<li>Iterators are <strong>fail-fast</strong>.</li>
<li>Method names have been improved.</li>
</ol>
<table>
<tbody>
<tr>
<th style='text-align: center;'><strong>Iterator</strong></th>
<th style='text-align: center;'><strong>Enumeration</strong></th>
</tr>
<tr>
<td>hasNext()</td>
<td>hasMoreElements()</td>
</tr>
<tr>
<td>next()</td>
<td>nextElement()</td>
</tr>
<tr>
<td>remove()</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>
<p style='text-align: justify;'><strong>Iterators</strong> are <strong>fail-fast</strong>, i.e., when one thread changes the collection by add/remove operations, while another thread is traversing it through an Iterator using hasNext() or next() method, the iterator fails quickly by throwing ConcurrentModificationException.</p>
<p style='text-align: justify;'>The <strong>Enumerations</strong> returned by the methods of classes like Hashtable and Vector are not fail-fast that is achieved by <strong>synchronizing</strong> the block of code inside the nextElement() method that locks the current Vector object which costs lots of time.</p>
<p style='text-align: justify;'>&nbsp;</p>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 7,
		"text" : function(){/*
<p style='text-align: justify;'><strong>Fail-fast</strong> Iterators fail as soon as they realized that structure of Collection has been changed since iteration has begun. Structural changes means adding, removing or updating any element from collection while one thread is Iterating over that collection. Iterators from <strong>java.util</strong> package throw <strong>ConcurrentModificationException</strong> if collection was modified by collection's add/remove methods while iterating. fail-fast behavior is implemented by keeping a <em>modification count</em> and if iteration thread realizes the change in modification count it throws ConcurrentModificationException.</p>
<p style='text-align: justify;'><strong>Fail-safe</strong> iterator doesn't throw any Exception if Collection is modified structurally while one thread is Iterating over it because they work on a snapshot of Collection instead of original collection and that&rsquo;s why they are called as fail-safe iterators. Iterators from <strong>java.util.concurrent</strong> package typically iterate over a <em>snapshot</em> and allow concurrent modifications but may not reflect collection updates after the iterator was created. Iterator of <strong>CopyOnWriteArrayList</strong> and <strong>ConcurrentHashMap</strong>'s keySet are examples of fail-safe Iterator.</p>
<h4 style='text-align: justify;'>How are fail-fast Iterators implemented?</h4>
<ol>
<li style='text-align: justify;'>The fail-fast iterators are typically implemented using a <i>modCount</i> on the list object.</li>
<li style='text-align: justify;'>When the list is updated, the modCount is incremented.</li>
<li style='text-align: justify;'>When an Iterator is created, the current value of the modCount is embedded in <i>expectedModCount</i> of Iterator object.</li>
<li style='text-align: justify;'>When an Iterator operation is performed, the method compares the two counter values and throws a ConcurrentModificationException if they are different.</li>
</ol>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 8,
		"text" : function(){/*
<h4 style='text-align: justify;'>The general contract of the hashCode() method stipulates:</h4>
<ol>
<li style='text-align: justify;'><strong><span style='color: #993300;'><em>Consistency during execution:</em></span></strong> Multiple invocations of the <strong>hashCode()</strong> method on an object must consistently return the same hash-code during the execution of an application, provided the object is not modified to affect the result returned by the <strong>equals()</strong> method. The hash-code need not remain consistent across different executions of the application. This means that using a pseudorandom number generator to produce hash values is not a valid strategy.</li>
<li style='text-align: justify;'><strong><span style='color: #993300;'><em>Object value equality implies hash value equality:</em></span></strong> If two objects are equal according to the <strong>equals()</strong> method, then the <strong>hashCode()</strong> method must produce the same hash code for these objects. This tenet ties in with the general contract of the equals() method.</li>
<li style='text-align: justify;'><span style='color: #993300;'><strong><em>Object value inequality places no restrictions on the hash value:</em></strong></span> If two objects are unequal according to the <strong>equals()</strong> method, then the <strong>hashCode()</strong> method need not produce distinct hash codes for these objects. It is strongly recommended that the hashCode() method produce unequal hash codes for unequal objects.</li>
</ol>
<p style='text-align: justify;'>The default implementation of hashCode() returns the internal address of the object after converting it into an integer. The default implementation of equals() method checks to see if the two references points to the same object. Setting and getting an object in a hash-based collection is a 2 step process. First, it finds the bucket location using the hashCode() method, and then its finds the right object by compairing existing objects inside the bucket with the new object using equals() method. If you override the equals(), you MUST also override hashCode(). Otherwise a violation of the general contract for Object#hashCode() will occur. If equals() is overridden and hashCode() is not, then an object that is put inside a hash based collection may not be ever found.</p>
<h4 style='text-align: justify;'>How to override hashCode() method</h4>
<pre>
@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;

	// do the following for each immutable field of this object
	result = prime * result + ((this.field1 == null) ? 0 : this.field1.hashCode());
	result = prime * result + ((this.field2 == null) ? 0 : this.field2.hashCode());
	result = prime * result + ((this.field3 == null) ? 0 : this.field3.hashCode());
	result = prime * result + ((this.field4 == null) ? 0 : this.field4.hashCode());

	return result;
}
</pre>

<a href="https://computinglife.wordpress.com/2008/11/20/why-do-hash-functions-use-prime-numbers/" target="_blank">https://computinglife.wordpress.com/2008/11/20/why-do-hash-functions-use-prime-numbers/</a></p>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 9,
		"text" : function(){/*
<h4 style='text-align: justify;'>The Comparable&lt;E&gt; Interface</h4>
<p style='text-align: justify;'>The <em>natural ordering</em> of objects is specified by implementing the <strong>Comparable</strong> interface. A total ordering of objects can be specified by implementing a <em>comparator </em>that implements the <strong>Comparator</strong> interface.</p>
<pre>
package java.lang;

public interface Comparable {
	
	// It returns a negative integer, zero, or a positive integer if the current object is 
	// less than, equal to, or greater than the specified object, based on the natural ordering. 
 
	// It throws a ClassCastException if the reference value passed in the argument cannot be 
	// compared to the current object.

	public int compareTo(T o);
}
</pre>
<p style='text-align: justify;'>Many of the standard classes in the Java API, such as the primitive wrapper classes, String, Date, and File, implement the Comparable interface. Objects implementing this interface can be stored in:</p>
<ol>
<li style='text-align: justify;'>Sorted collections such as SortedSet (TreeSet) or a SortedMap (TreeMap).</li>
<li style='text-align: justify;'>Non-sorted collections that are sorted manually using the <strong>Collections.sort()</strong> or <strong>Arrays.sort()</strong> methods.</li>
</ol>
<p style='text-align: justify;'>The natural ordering for String objects (and Character objects) is lexicographical ordering, i.e., their comparison is based on the Unicode value of each character in the strings. Objects of the String and Character classes will be lexicographically maintained as elements in a sorted set, or as keys in a sorted map that uses their natural ordering. The natural ordering for objects of a numerical wrapper class is in ascending order of the values of the corresponding numerical primitive type. As elements in a sorted set or as keys in a sorted map that uses their natural ordering, the objects will be maintained in ascending order.</p>
<p style='text-align: justify;'>The <b>compareTo()</b> method must be consistent with <b>equals()</b> method, i.e., <b>(obj1.compareTo(obj2) == 0) == (obj1.equals(obj2))</b>. This is recommended if the objects will be maintained in sorted sets or sorted maps.</p>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 10,
		"text" : function(){/*
<h4 style='text-align: justify;'>The Comparator&lt;E&gt; Interface</h4>
<p style='text-align: justify;'>Precise control of ordering can be achieved by creating a customized comparator that imposes a specific <strong>total ordering</strong> on the elements. All comparators implement the <strong>Comparator</strong> interface, which has the following single method:</p>
<pre>
package java.util;

public interface Comparator {

	// The compare() method returns a negative integer, zero, or a positive integer if 
	// the first object is less than, equal to, or greater than the second object, 
	// according to the total ordering, i.e., it&rsquo;s contract is equivalent to that of the
	// compareTo() method of the Comparable interface. 

	// Since this method tests for equality, it is strongly recommended that its implementation 
	// does not contradict the semantics of the equals() method.
	int compare(T o1, T o2);
}
</pre>
<p style='text-align: justify;'>An alternative ordering to the default natural ordering can be specified by passing a Comparator to the constructor when the sorted set or map is created. The <strong>Collections</strong> and <strong>Arrays</strong> classes provide utility methods for sorting, which also take a Comparator.</p>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 11,
		"text" : function(){/*
<p>The class <strong>AbstractList</strong> has <strong>modCount</strong> that tracks the number of modifications to the structure of the list. Also, since its <b>Iterable</b>, it provides the implementation for the method <strong>iterator()</strong></p>
<pre>
public abstract class AbstractList<E> extends AbstractCollection<E> implements List<E> {

	// more code goes here

	protected transient int modCount = 0;

    public Iterator<E> iterator() {
		return new Itr();
    }

    public ListIterator<E> listIterator() {
		return listIterator(0);
    }

	// code for an inner-class Itr that implements Iterator<E> goes here
	// code foe an inner-class ListItr that extends Itr and implements ListIterator<E> goes here
}
</pre>
<p style='text-align: justify;'>The nested class <strong>Itr</strong> provides the implementation for <strong>Iterator</strong> interface. It takes a snapshot of <strong>modCount</strong> into <strong>expectedModCount</strong> and checks for concurrent-modification in it's method <strong>checkForComodification()</strong>. This method compares the modCount with expectedModCount and throws <strong>ConcurrentModificationException</strong> in case of a mismatch.</p>
<pre>
private class Itr implements Iterator<E> {

	// Index of element to be returned by subsequent call to next.
	//
	int cursor = 0;

	// Index of element returned by most recent call to next or
	// previous.  Reset to -1 if this element is deleted by a call
	// to remove.

	int lastRet = -1;

	// The modCount value that the iterator believes that the backing
	// List should have.  If this expectation is violated, the iterator
	// has detected concurrent modification.

	int expectedModCount = modCount;

	public boolean hasNext() {
			return cursor != size();
	}

	public E next() {
		checkForComodification();
		try {
			E next = get(cursor);
			lastRet = cursor++;
			return next;
		} catch (IndexOutOfBoundsException e) {
			checkForComodification();
			throw new NoSuchElementException();
		}
	}

	public void remove() {
		if (lastRet == -1){
			throw new IllegalStateException();
		}
		checkForComodification();

		try {
			AbstractList.this.remove(lastRet);
			if (lastRet < cursor)
				cursor--;
			lastRet = -1;
			expectedModCount = modCount;
		} catch (IndexOutOfBoundsException e) {
			throw new ConcurrentModificationException();
		}
	}

	final void checkForComodification() {
		if (modCount != expectedModCount){
			throw new ConcurrentModificationException();
		}
	}
}
</pre>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 12,
		"text" : function(){/*
<p style='text-align: justify;'><strong>HashMap</strong> works on the principle of <em>hashing</em>. A hashmap stores key-value pairs in the form of <strong>Entry</strong> objects, which is an inner class of HashMap class.</p>
<pre>
static class Entry implements Map.Entry{
	final K key;
	V value;
	Entry next;
	final int hash;
	
	// More code goes here
}
</pre>
<p style='text-align: justify;'>The <strong>Entry</strong> objects are stored in an array (theoritically known as a <em>bucket</em>)</p>
<pre>
// The table, resized as necessary. Length MUST Always be a power of two.
transient Entry[] table;
</pre>
<h4 style='text-align: justify;'>The put() method</h4>
<pre>
public V put(K key, V value) {
	if (key == null)
		return putForNullKey(value);
	int hash = hash(key.hashCode());
	int i = indexFor(hash, table.length);
	for (Entry<k , V> e = table[i]; e != null; e = e.next) {
		Object k;
		if (e.hash == hash && ((k = e.key) == key || key.equals(k))) {
			V oldValue = e.value;
			e.value = value;
			e.recordAccess(this);
			return oldValue;
		}
	}

	modCount++;
	addEntry(hash, key, value, i);
	return null;
}
</pre>
<ol style='text-align: justify;'>
<li>If key is <em>null</em>, the value is stored in <b>table[0]</b> position because hash-code for null is always 0.</li>
<li>A <em>hash value</em> is calculated using key's <strong>hashCode()</strong> method. This hash value is used to calculate <em>index in array</em> for storing Entry object. JDK designers assumed that there might be some poorly written hashCode() implementation that can return very high or low hash code value. To solve this issue, they introduced another <strong>hash()</strong> method, and passed the object&rsquo;s hash code to it to bring hash value in range of array index size.</li>
<li>The <strong>indexFor(hash, table.length)</strong>&nbsp;method&nbsp;is invoked to calculate exact <em>bucket location</em> for storing the <strong>Entry</strong> object. Note that all the Entry objects whose keys have the same hash-code (in the case of a&nbsp;<strong>collision</strong>) will be stored in the same <em>bucket location</em>. Since an Entry object has a reference to the <strong>next</strong> entry object, it forms a <strong>LinkedList</strong>. So, in case of a collision, the entry objects are stored in the form of LinkedList.</li>
<li>When an Entry object needs to be stored in particular <em>bucket location</em>, the HashMap checks whether there is already an entry. If there is no entry already present, Entry object is stored in this location.</li>
<li>It there is already an entry present at this bucket location, it compares the key of existing Entry with the key of new Entry using <strong>equals()</strong> method. It continues doing this for all elements of the LinkedList until a match is found. If there is a match, then the old value is replaced with the new value and the old value is returned. If there is no match, then the Entry is stored at the end of the Linkedlist.</li>
</ol>
<h4 style='text-align: justify;'>The get() method</h4>
<pre>
public V get(Object key) {
	if (key == null)
		return getForNullKey();
	int hash = hash(key.hashCode());
	for (Entry<k , V> e = table[indexFor(hash, table.length)]; e != null; e = e.next) {
		Object k;
		if (e.hash == hash && ((k = e.key) == key || key.equals(k)))
			return e.value;
	}
	return null;
}
</pre>
<ol style='text-align: justify;'>
<li>If the key is null, then it traverses the LinkedList at <b>table[0]</b>. If the key on the Entry object is found <em>null</em>, then value is returned.&nbsp;</li>
<li>A hash is calculated for the key's hash-code. This hash is used to calculate the bucket location.</li>
<li>It then traverses the LinkedList and keeps comparing the key in existing entry object with the key being searched. If a mach is found, then the value is returned. Else it returns a null.</li>
</ol>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 13,
		"text" : function(){/*
<pre>
// LinkedHashMap is Hashtable and LinkedList based implementation of Map interface. This implementation differs from 
// HashMap in that it maintains a doubly-linked list running through all of its entries. By default LinkedHashMap 
// maintains the insertion order (i.e., the order in which elements are added to LinkedHashMap is maintained). 
public class LinkedHashMap&lt;K, V&gt; extends HashMap&lt;K, V&gt; implements Map&lt;K, V&gt; {

	// LinkedHashMap has a special constructor to create the access order map. Keys are sorted on the basis of 
	// access order eg, Invoking put(), putIfAbsent(), get(), getOrDefault(), compute(), computeIfAbsent(), 
	// computeIfPresent(), or merge() methods results in an access to the corresponding entry.
	
	// The keys are sorted from least recently accessed to most recently accessed. 
	// If accessOrder is false, then it will result in insertion order
	// if accessOrder is true, then it will result in access Order
	public LinkedHashMap(int initialCapacity, float loadFactor, boolean accessOrder) {
		super(initialCapacity, loadFactor);
		this.accessOrder = accessOrder;
	}
	
	// more code goes here
	
	// Returns true if this map should remove its eldest entry. This method is invoked by put() and putAll() after 
	// inserting a new entry into the map. It provides the implementor an opportunity to remove the eldest entry 
	// each time a new one is added. This is useful if the map represents a cache: it allows the map to reduce 
	// memory consumption by deleting stale entries.
	protected boolean removeEldestEntry(Map.Entry&lt;K,V&gt; eldest) {
		return false;
	}
}
</pre>

<p>Override this method as below to allow the map to grow up to 100 entries and then delete the eldest entry each time a new entry is added, maintaining a steady state of 100 entries.</p>

<pre>
    private static final int MAX_ENTRIES = 100;

    protected boolean removeEldestEntry(Map.Entry eldest) {
       return size() &gt; MAX_ENTRIES;
    }
</pre>

<p>This method typically does not modify the map in any way, instead allowing the map to modify itself as directed by its return value.  It <i>is</i> permitted for this method to modify the map directly, but if it does so, it <i>must</i> return false (indicating that the map should not attempt any further modification). This implementation merely returns <tt>false</tt> (so that this map acts like a normal map - the eldest element is never removed).</p>

<p><b>ConcurrentModificationException in LinkedHashMap:</b></p>
<p>The iterator of an access-ordered LinkedHashMap throws java.util.ConcurrentModificationException if a get() is performed as shown below:</p>
<pre>
import java.util.LinkedHashMap;
import java.util.Map;

public class LinkedHashMapConcurrentModificationExceptionDemo {
    public static void main(String[] args) {
        Map&lt;Integer, String&gt; map = new LinkedHashMap&lt;Integer, String&gt;(5, 0.75f, true) {{
            put(1, "one");
            put(2, "two");
            put(3, "three");
            put(4, "four");
            put(5, "five");
        }};

        for (Integer key : map.keySet()) {
            System.out.println(key + " --&gt; " + map.get(key));
        }
    }
}
</pre>

<p><u>Output:</u></p>
<pre>
Exception in thread "main" java.util.ConcurrentModificationException
	at java.util.LinkedHashMap$LinkedHashIterator.nextNode(LinkedHashMap.java:711)
	at java.util.LinkedHashMap$LinkedKeyIterator.next(LinkedHashMap.java:734)
	at com.interviewpedia.collections.LinkedHashMapConcurrentModificationExceptionDemo.main(
	LinkedHashMapConcurrentModificationExceptionDemo.java:16)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:483)
	at com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)
</pre>
<p>In insertion-ordered LinkedHashMap, a structural modification is any operation that adds or deletes one or more mappings. Merely changing the value associated with a key that is already contained in the map is not a structural modification.</p>

<p>In access-ordered LinkedHashMap, if you call get(key), the underlying Map.Entry increments an access counter AND reorders the collection by moving the (last accessed) Map.Entry to the head of the list which results in a structural modification. The iterators returned by the iterator method are fail-fast: if the map is structurally modified at any time after the iterator is created, in any way except through the iterator's own remove() method, the iterator will throw a ConcurrentModificationException.</p>

<p>To avoid this you should use the Map.entrySet() as the implementation is inherited from java.util.HashMap and therefore the iterator doesn't check the modification flags as shown below:</p>

<pre>
	for (Map.Entry entry : linkedHashMap.entrySet()) {
		System.out.println(entry.getKey() + " --&gt; " + entry.getValue());
	}
</pre>

</br></br></br>
<p><b>Create a LRU cache using LinkedHashMap:</b></p>
<pre>
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class LRUCache&lt;K, V&gt; extends LinkedHashMap&lt;K, V&gt; {
    private final int MAX_SIZE;
    private Lock lock;
    private static volatile LRUCache instance;

    private LRUCache(int size) {
        super(size, 0.75f, true);
        this.MAX_SIZE = size;
        this.lock = new ReentrantLock();
    }

    public static LRUCache buildCache(int size) {
        if (instance == null) {
            synchronized (LRUCache.class) {
                if (instance == null) {
                    instance = new LRUCache(size);
                }
            }
        }
        return instance;
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry eldest) {
        if (size() &gt; MAX_SIZE) {
            System.out.println("Removing eldest entry");
            return true;
        } else {
            return false;
        }
    }

    @Override
    public V get(Object key) {
        lock.lock();
        V value = super.get(key);
        lock.unlock();
        return value;
    }

    @Override
    public V put(K key, V value) {
        lock.lock();
        V oldValue = super.put(key, value);
        lock.unlock();
        return oldValue;
    }
}
</pre>

<pre>
public class LRUCacheDemo extends LinkedHashMap {
    public static void main(String[] args) {
        LRUCache&lt;Integer, Employee&gt; cache = LRUCache.buildCache(5);
        cache.put(1, new Employee(1, "abc1"));
        cache.put(2, new Employee(2, "abc2"));
        cache.put(3, new Employee(3, "abc3"));
        cache.put(4, new Employee(4, "abc4"));
        cache.put(5, new Employee(5, "abc5"));
        System.out.println("Accessing: 1 --&gt; " + cache.get(1));
        cache.put(6, new Employee(6, "abc6"));
        cache.put(7, new Employee(7, "abc7"));
        cache.put(8, new Employee(8, "abc8"));
        System.out.println("Accessing: 1 --&gt; " + cache.get(1));
        cache.put(9, new Employee(9, "abc9"));
        cache.put(10, new Employee(10, "abc10"));
        display(cache);
    }

    private static void display(LRUCache&lt;Integer, Employee&gt; cache) {
        for(Map.Entry entry : cache.entrySet()){
            System.out.println(entry.getKey() + " --&gt; " + entry.getValue());
        }
    }
}
</pre>

<p><u>Output:</u></p>
<p>Accessing: 1 --&gt; Employee{empId=1, name='abc1'}<br />Removing eldest entry<br />Removing eldest entry<br />Removing eldest entry<br />Accessing: 1 --&gt; Employee{empId=1, name='abc1'}<br />Removing eldest entry<br />Removing eldest entry<br />7 --&gt; Employee{empId=7, name='abc7'}<br />8 --&gt; Employee{empId=8, name='abc8'}<br />1 --&gt; Employee{empId=1, name='abc1'}<br />9 --&gt; Employee{empId=9, name='abc9'}<br />10 --&gt; Employee{empId=10, name='abc10'}</p>

		*/}.toString().slice(14,-3)
	},
	
	{
		id : 14,
		"text" : function(){/*
<p style='text-align: justify;'><strong>HashSet</strong> internally uses <strong>HashMap</strong> to store objects. Whenever you create an object of HashSet it internally creates an object of HashMap. In a set, uniqueness is achieved through HashMap. Since, the keys are unique in HashMap, the object passed into the <strong>HashSet#add(E e)</strong> method of set is put in the internal map as the key and a <em>dummy object</em> as the value.&nbsp;</p>
<pre>
public class HashSet extends AbstractSet implements Set, Cloneable, java.io.Serializable {

	private transient HashMap&lt;E,Object&gt; map;

	// Dummy value to associate with an Object in the backing Map
	private static final Object PRESENT = new Object();

	public HashSet() {
		map = new HashMap<E,Object>();
	}

	// some more overloaded constructors here

	public Iterator iterator() {
		return map.keySet().iterator();
	}

	public boolean add(E e) {
		return map.put(e, PRESENT)==null;
	}

	public boolean remove(Object o) {
		return map.remove(o)==PRESENT;
	}

	public void clear() {
		map.clear();
	}

	// more code goes here
}</pre>
<p style='text-align: justify;'>A dummy object <em>PRESENT</em> is used as the value instead of a&nbsp;<strong>null</strong>&nbsp;because this value is also used while returning <em>boolean</em> from <strong>HashSet#add()</strong> and <strong>HashSet#remove()</strong> methods.</p>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 15,
		"text" : function(){/*
		TODO
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 16,
		"text" : function(){/*
<p>Suppose we have a class <strong>Country</strong> that implements <strong>Comparable</strong> interface for <em>natural sorting</em> based on country-names.</p>
<pre>public class Country implements Comparable&lt;Country&gt; {

	private String name;

	private Integer area;

	// getter-setter goes here.

	public int compareTo(Country o) {
		return this.name.compareTo(o.name);
	}

	@Override
	public int hashCode() {
		// hashcode implementation goes here.
	}

	@Override
	public boolean equals(Object obj) {
		// equals implementation goes here
	}

	@Override
	public String toString() {
		return &quot;Country [name=&quot; + name + &quot;, area=&quot; + area + &quot;]&quot;;
	}
}
</pre>
<p>And we have a custom comparator <strong>AreaComparator</strong> that sorts countries based on their area.</p>
<pre>import java.util.Comparator;

public class AreaComparator implements Comparator&lt;Country&gt; {
	public int compare(Country c1, Country c2) {
		return c1.getArea().compareTo(c2.getArea());
	}
}
</pre>
<p>Let's create a <strong>HashMap</strong> of Country objects:</p>
<pre>	Map&lt;Country, Integer&gt; countryPopulationMap = new HashMap&lt;Country, Integer&gt;();
	countryPopulationMap.put(new Country(&quot;America&quot;, 2500), 5000);
	countryPopulationMap.put(new Country(&quot;Canada&quot;, 1000), 4000);
	countryPopulationMap.put(new Country(&quot;India&quot;, 2000), 3000);
</pre>
<ol>
<li><h4><span style='color: #993300;'>Sort the map by country-names:</span></h4>
<pre>	public void sortByName(Map&lt;Country, Integer&gt; populationMap) {
		Map&lt;Country, Integer&gt; nameSorted = new TreeMap&lt;Country, Integer&gt;(populationMap);
		System.out.println(nameSorted);
	}
</pre>
<p><strong><span style='text-decoration: underline;'>Output:</span></strong><br /><span style='color: #339966;'>{Country [name=America, area=2500]=5000, Country [name=Canada, area=1000]=4000, Country [name=India, area=2000]=3000}</span></p>
</li>
<li><h4><span style='color: #993300;'>Sort the map by area:</span></h4>
<pre>	public void sortByArea(Map&lt;Country, Integer&gt; populationMap) {
// Map&lt;Country, Integer&gt; sorted = new TreeMap&lt;Country, Integer&gt;(populationMap, new AreaComparator());	(1)
// Map&lt;Country, Integer&gt; sorted = new TreeMap&lt;Country, Integer&gt;(new AreaComparator());		      (2.1)
// sorted.putAll(populationMap);								      (2.2)
		Map&lt;Country, Integer&gt; areaSorted = new TreeMap&lt;Country, Integer&gt;(new Comparator() {
			public int compare(Country c1, Country c2) {
				return c1.getArea().compareTo(c2.getArea());
			}
		});
		areaSorted.putAll(populationMap);
		System.out.println(areaSorted);
	}
</pre>
<p>Note that <span style='color: #339966;'>(1)</span> would give a compilation error because there is no such constructor in TreeMap class. <span style='color: #339966;'>(2.1)</span> and <span style='color: #339966;'>(2.2)</span> will perform the natural sorting based on the Comparable interface implemented by Country class, even though a comparator is passed at <span style='color: #339966;'>(2.1)</span>.</p>
<p><strong><span style='text-decoration: underline;'>Output:</span></strong><br /><span style='color: #339966;'>{Country [name=Canada, area=1000]=4000, Country [name=India, area=2000]=3000, Country [name=America, area=2500]=5000}</span></p>
</li>
<li><h4><span style='color: #993300;'>Sort the map by population:</span></h4>
<pre>	public void sortByPopulation(final Map&lt;Country, Integer&gt; populationMap) {		// (3)
		Map&lt;Country, Integer&gt; populationSorted = new TreeMap&lt;Country, Integer&gt;(new Comparator() {
			public int compare(Country c1, Country c2) {
				return populationMap.get(c1).compareTo(populationMap.get(c2));
			}
		});
		populationSorted.putAll(populationMap);
		System.out.println(populationSorted);
	}
</pre>
<p><strong><span style='text-decoration: underline;'>Output:</span></strong><br /><span style='color: #339966;'>{Country [name=India, area=2000]=3000, Country [name=Canada, area=1000]=4000, Country [name=America, area=2500]=5000}</span></p>
</li>
</ol>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 17,
		"text" : function(){/*
		Here is a guide to choosing an appropriate collection or map implementation for your application:<br/><br/>
		<img src='./data/java/images/collection-cheat-sheet.gif'>
		*/}.toString().slice(14,-3)
	},
	
	{
		id : 18,
		"text" : function(){/*
<h4>Time complexity of classes implementing <span style='color: #993300;'>List</span> Interface</h4>
<table>
<tbody>
<tr>
<th style='text-align: center;'><strong>Implementation Class</strong></th>
<th style='text-align: center;'><strong>get</strong></th>
<th style='text-align: center;'><strong>add</strong></th>
<th style='text-align: center;'><strong>contains</strong></th>
<th style='text-align: center;'><strong>next</strong></th>
<th style='text-align: center;'><strong>remove(O)</strong></th>
<th style='text-align: center;'><strong>Iterator.remove</strong></th>
</tr>
<tr>
<td>ArrayList</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(n)</td>
<td>O(1)</td>
<td>O(n)</td>
<td>O(n)</td>
</tr>
<tr>
<td>LinkedList</td>
<td>O(n)</td>
<td>O(1)</td>
<td>O(n)</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
</tr>
<tr>
<td>CopyOnWriteArrayList</td>
<td>O(1)</td>
<td>O(n)</td>
<td>O(n)</td>
<td>O(1)</td>
<td>O(n)</td>
<td>O(n)</td>
</tr>
</tbody>
</table>
<h4>Time complexity of classes implementing <span style='color: #993300;'>Map</span> Interface</h4>
<table>
<tbody>
<tr>
<th style='text-align: center;'><strong>Implementation Class</strong></th>
<th style='text-align: center;'><strong>get</strong></th>
<th style='text-align: center;'><strong>containsKey</strong></th>
<th style='text-align: center;'><strong>next</strong></th>
<th style='text-align: center;'><strong>Remarks</strong></th>
</tr>
<tr>
<td>HashMap</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(h/n)</td>
<td>h is the table capacity</td>
</tr>
<tr>
<td>LinkedHashMap</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>IdentityHashMap</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(h/n)</td>
<td>h is the table capacity</td>
</tr>
<tr>
<td>EnumMap</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>TreeMap</td>
<td>O(log n)</td>
<td>O(log n)</td>
<td>O(log n)</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>ConcurrentHashMap</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(h/n)</td>
<td>h is the table capacity</td>
</tr>
<tr>
<td>ConcurrentSkipListMap</td>
<td>O(log n)</td>
<td>O(log n)</td>
<td>O(1)</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>
<h4>Time complexity of classes implementing <span style='color: #993300;'>Set</span> Interface</h4>
<table>
<tbody>
<tr>
<th style='text-align: center;'><strong>ImplementationClass</strong></th>
<th style='text-align: center;'><strong>add</strong></th>
<th style='text-align: center;'><strong>contains</strong></th>
<th style='text-align: center;'><strong>next</strong></th>
<th style='text-align: center;'><strong>Remarks</strong></th>
</tr>
<tr>
<td>HashSet</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(h/n)</td>
<td>h is the table capacity</td>
</tr>
<tr>
<td>LinkedHashSet</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>CopyOnWriteArraySet</td>
<td>O(n)</td>
<td>O(n)</td>
<td>O(1)</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>EnumSet</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>TreeSet</td>
<td>O(log n)</td>
<td>O(log n)</td>
<td>O(log n)</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>ConcurrentSkipListSet</td>
<td>O(log n)</td>
<td>O(log n)</td>
<td>O(1)</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>
<h4>Time complexity of classes implementing <span style='color: #993300;'>Queue</span> Interface</h4>
<table>
<tbody>
<tr>
<th style='text-align: center;'><strong>Implementation Class</strong></th>
<th style='text-align: center;'><strong>offer</strong></th>
<th style='text-align: center;'><strong>peek</strong></th>
<th style='text-align: center;'><strong>poll</strong></th>
<th style='text-align: center;'><strong>size</strong></th>
</tr>
<tr>
<td>PriorityQueue</td>
<td>O(log n)</td>
<td>O(1)</td>
<td>O(log n)</td>
<td>O(1)</td>
</tr>
<tr>
<td>ConcurrentLinkedQueue</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(n)</td>
</tr>
<tr>
<td>ArrayBlockingQueue</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
</tr>
<tr>
<td>LinkedBlockingQueue</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
</tr>
<tr>
<td>PriorityBlockingQueue</td>
<td>O(log n)</td>
<td>O(1)</td>
<td>O(log n)</td>
<td>O(1)</td>
</tr>
<tr>
<td>DelayQueue</td>
<td>O(log n)</td>
<td>O(1)</td>
<td>O(log n)</td>
<td>O(1)</td>
</tr>
<tr>
<td>LinkedList</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
</tr>
<tr>
<td>ArrayDeque</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
</tr>
<tr>
<td>LinkedBlockingDequeue</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
<td>O(1)</td>
</tr>
</tbody>
</table>
		*/}.toString().slice(14,-3)
	}

]
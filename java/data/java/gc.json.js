var gc_que = [
	{
		question : "Stack Vs Heap",
		tags : ["Stack", "Heap", "OutOfMemoryError", "StackOverflowError"]
	},

	{
        question : "Java Memory Architecture",
        tags : ["Java Memory Architecture", "Java Memory Model", "Heap", "Eden", "Survivor", "Tenored", "PermGen",
        "MetaSpace", "JVM Tuning", "Garbage Collection", "GC"]
    },

	{
		question : "Memory Leaks & Heap Dump",
		tags : ["Memory Leaks", "Debugging of Memory Leaks", "OutOfMemoryError", "JMap", "Heap Dump", "JCmd", "JVisualVM"]
	},

	{
		question : "JMX Monitoring",
		tags : ["JMX Monitoring", "JConsole", "JVisualVM"]
	},

	{
		question : "Remote Debugging",
		tags : ["Remote Debugging"]
	},
]

var gc_ans = [
    {   /* Stack Vs Heap */
        "text" : function(){/*
<h1>Stack Vs Heap</h1>

<p style="text-align: justify;">JVM provides automatic Memory Management and that prevents problems like deallocating
memory too early (corrupted pointer) or too late (memory leak) Inspite of this implicit memeory management, a wrongly
programmed code can result in exceptions like java.lang.OutOfMemoryError. This exception is thrown when the JVM cannot
allocate an object because it is out of memory, and no more memory could be made available by the garbage collector.</p>

<img src="data/java/images/gc/1.runtime_data_area.png" alt="" width="840" height="400"/>

<p style="text-align: justify;">We can basically distinguish memory areas that are available for all threads in a JVM
and those memory areas that are exclusively accessible from only one thread. The two areas that are available from all
threads are the <strong>Method Area</strong> and the <strong>Heap</strong>.</p>

<p style="text-align: justify;">The <strong>method area</strong> is responsible for storing class information. The ClassLoader
will load the bytecode of a class and will pass it to the JVM. The JVM will generate an internal class representation of the
bytecode and store it in the method area. The internal representation of a class will have the following data areas:</p>

<ol>
<li style="text-align: justify;"><strong>Runtime Constant Pool</strong> Numeric constants of the class of types int, long,
float or double, String-constants and symbolic references to all methods, attributes and types of this class.</li>
<li style="text-align: justify;"><strong>Method Code</strong> The implementation (code) of all methods of this class including constructors etc.</li>
<li style="text-align: justify;"><strong>Attributes</strong> A list of all named attributes of this class.</li>
<li style="text-align: justify;"><strong>Fields</strong> Values of all fields of this class as references to the Runtime Constant Pool.</li>
</ol>

<p style="text-align: justify;">The second memory area that is available for all threads inside the JVM is the <strong>Heap</strong>.
The Java heap manages <strong>Objects</strong> and <strong>Arrays</strong> at runtime. The heap will be created at JVM startup
and the size can be static or dynamic. The JVM specification mandates a Garbage Collection mechanism for reclaiming
the memory of an object on the Java heap. The implementation of the Garbage Collector is not specified, but it is not
allowed to provide the programmer with an explicit mechanism for deallocating the memory of an object.</p>

<p style="text-align: justify;">In addition to the heap and method area, that are available for all threads of a JVM,
every thread also has exclusive access to memory that is created for each thread:</p>

<ol>
<li style="text-align: justify;"><strong>PC Register</strong> The Program Counter register. The register points to the
current JVM instruction of the method the thread is executing, if the method is not a native method. If it is a native
method the content of the PC register is not defined.</li>
<li style="text-align: justify;"><strong>JVM Stack</strong> Each thread gets its own stack on which so called Frames are
pushed for each method the thread currently executed. This means that there can be many frames on the stack for nested
method calls &ndash; but there is only one frame active at the same time for one thread. The frame contains the local
variables of the method, a reference to the Runtime Constant Pool of the method&rsquo;s class and an operand stack for
the execution of JVM operations. (The JVM is a stack machine!)</li>
<li style="text-align: justify;"><strong>Native Method Stack</strong> Native methods get its own stack, the so called C-Stack.</li>
</ol>
<p>&nbsp;</p>

<h2>What goes where?</h2>
<p style="text-align: justify;">Instance variables (primitive, Wrapper classes, references & objects) goes to Heap</p>
<p style="text-align: justify;">Local Variables & references goes to stack.</p>
<p style="text-align: justify;">Other data objects (Class metadata, JVM code, static variables, static object references, static functions) goes to
PermGen (till Java 7) or Metaspace (Java 8 onwards).</p>

<table>
<tr>
<td width=180px><strong>METHOD LOCAL VARIABLES</strong></td>
<td width=180px><strong>STACK</strong></td>
<td width=180px><strong>HEAP</strong></td>
<td width=180px><strong>PERMGEN / METASPACE</strong></td>
</tr>

<tr>
<td><strong>Primitives</strong></td>
<td>Reference, Value</td>
<td></td>
<td></td>
</tr>

<tr>
<td><strong>Non-Primitives</strong></td>
<td>Reference</td>
<td>Object</td>
<td></td>
</tr>

<tr>
<td><strong>Arrays</strong></td>
<td>Reference</td>
<td>Object</td>
<td></td>
</tr>
</table>

<p>&nbsp;</p>
<table>
<tr>
<td width=180px><strong>INSTANCE VARIABLES</strong></td>
<td width=180px><strong>STACK</strong></td>
<td width=180px><strong>HEAP</strong></td>
<td width=180px><strong>PERMGEN / METASPACE</strong></td>
</tr>

<tr>
<td><strong>Primitives</strong></td>
<td></td>
<td>Reference, Value</td>
<td></td>
</tr>

<tr>
<td><strong>Non-Primitives</strong></td>
<td></td>
<td>Reference, Object</td>
<td></td>
</tr>

<tr>
<td><strong>Arrays</strong></td>
<td></td>
<td>Reference, Object</td>
<td></td>
</tr>
</table>

<p>&nbsp;</p>
<table>
<tr>
<td width=180px><strong>STATIC VARIABLES</strong></td>
<td width=180px><strong>STACK</strong></td>
<td width=180px><strong>HEAP</strong></td>
<td width=180px><strong>PERMGEN / METASPACE</strong></td>
</tr>

<tr>
<td><strong>Primitives</strong></td>
<td></td>
<td></td>
<td>Reference, Value</td>
</tr>

<tr>
<td><strong>Non-Primitives</strong></td>
<td></td>
<td>Object</td>
<td>Reference</td>
</tr>

<tr>
<td><strong>Arrays</strong></td>
<td></td>
<td>Object</td>
<td>Reference</td>
</tr>
</table>
<p style="text-align: justify;">Metaspace is part of native memory, so no need to worry about OOM:Pergem Exeption now.</p>
<p>&nbsp;</p>

<h2>Sun HotSpot JVM & OutOfMemoryError / StackOverflowError</h2>
<p style="text-align: justify;">We get a <strong>java.lang.OutOfMemoryError</strong> in the heap, if the garbage collector
cannot reclaim enough memory for a new object. In such situation the JVM throws the following exception:</p>
<pre>
Exception in thread "main": java.lang.OutOfMemoryError: Java heap space
</pre>

<p style="text-align: justify;">Alternatively, if the application tries to create an array on the heap that is bigger than
the total heap size, following exception is thrown:</p>
<pre>
Exception in thread "main": java.lang.OutOfMemoryError: Requested array size exceeds VM limit
</pre>

<p style="text-align: justify;">If there is not enough memory in the method area for creating a new class, the JVM throws
the following exception:</p>
<pre>
Exception in thread "main": java.lang.OutOfMemoryError: PermGen space
</pre>

<p style="text-align: justify;">OutOfMemory errors in thread exclusive memory areas occur less frequently and are identified
by the following error messages:</p>
<pre>
Exception in thread "main" java.lang.OutOfMemoryError: unable to create new native thread

Exception in thread "main": java.lang.OutOfMemoryError: <reason> <stacktrace> (Native method)
</pre>

<p style="text-align: justify;">The first error is thrown if there are too many threads in the JVM and there is not
enough memory left to create a new thread. The second error message indicates that a memory allocation error
on a native stack (JNI method call) has occurred.</p>

<p style="text-align: justify;">The last variant of the OutOfMemoryError is:</p>
<pre>
Exception in thread "main": java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space?
</pre>

<p style="text-align: justify;">This error is thrown if there is not enough memory left on the operating system level –
which is normally true if other processes are using all of the available memory or the swap space is configured too small.</p>

<p style="text-align: justify;">It is also interesting that a memory allocation error on the JVM stack (too many frames
on the stack) does not throw an Java OutOfMemory error but as the JVM specification mandates:
<strong>java.lang.StackOverflowError<strong>.</p>
        */}.toString().slice(14,-3)
    },

    {   /* Java Memory Architecture */
        "text" : function(){/*
<h1>Java Memory Architecture</h1>
<p style="text-align: justify;">Below is the Java Memory Model for the <strong>Heap</strong> as well as the
<strong>PermGen</strong> for any Java Application running in the JVM. The ratios are also provided to get a fair
understanding of how the distribution of allowed memory is done across each of the generation types. All of the information
is completely applicable up to Java 1.7 (or below).</p>

<p style="text-align: justify;">The heap is divided into two generations: The <strong>Young Generation</strong> and the
<strong>Tenured Generation</strong>. The method area is implemented as a separated part: The <strong>PermGen</strong>.</p>

<table>
<tr>
<td style="vertical-align: top;">
<img src="data/java/images/gc/2.jmm.png" alt="" width="500" height="500"/>
</td>

<td style="vertical-align: top;">
<p style="text-align: justify;"><strong>Eden Space</strong>: All new objects are first created in the Eden Space. As soon
as it reaches an arbitrary threshold decided by the JVM, a minor garbage collection (Minor GC) kicks in. It first removes
all the non-referenced objects and moves referenced objects from the 'eden' and 'from' into the 'to' survivor space.
Once the GC is over, the 'from' and 'to' roles (names) are swapped.</p>

<p style="text-align: justify;"><strong>Survivor 1 (From)</strong>: This is a part of the survivor space (You may think
of this a role in the survivor space). This was the 'to' role during the previous garbage collection (GC).</p>

<p style="text-align: justify;"><strong>Suvrivor 2 (To)</strong>: This is also a part of the survivor space (You may think
of this as a role in the survivor space too). It is here, during the GC, that all the referenced objects are moved to,
from 'from' and 'eden'.</p>

<p style="text-align: justify;"><strong>Tenured</strong>: Depending on the threshold limits, which can be checked by using
<strong>-XX:+PrintTenuringDistribution</strong>, which shows the objects (space in bytes) by age, objects are moved from
the 'to' Survivor space to the Tenured space. 'Age' is the number of times that it has moved within the survivor space.</p>

<p style="text-align: justify;"><strong>PermGen</strong>: stores the following information: Constant Pool (Memory Pool),
Field & Method Data and Code. Each of them related to the same specifics as their name suggests.</p>
</td>
</tr>
</table>

<p style="text-align: justify;">Additionally, there is a Stack Area, which can be configured using the <strong>-Xss</strong>
option. This area holds the references on the heap, native references, pc registers, code cache, and local variables for
all threads. This is also known as the <strong>Native Area</strong> of the JMM.</p>

<p style="text-align: justify;">There are other important flags like, -XX:InitialTenuringThreshold, -XX:MaxTenuringThreshold
and -XX:TargetSurvivorRatio which lead to an optimum utilization of the tenured as well as the survivor spaces.</p>

<p style="text-align: justify;">By setting -XX:InitialTenuringThreshold and -XX:MaxTenuringThreshold we allow an initial
value and a maximum value for 'Age' while maintaining the percentage utilization in the 'Survivor (To)' as specified by
the -XX:+NeverTenure and -XX:+AlwaysTenure, which encouraged never to be used to tenure an object (risky to use). The
opposite usage is to always tenure, which means to always use the 'old generation'.</p>

<p style="text-align: justify;">The garbage collection that happens here is the major garbage collection (Major GC).
This is usually triggered when the heap is full or the old generation is full. This is usually a 'Stop-the-World' event
or thread that takes over to perform the garbage collection. There is another type of GC named full garbage collection
(Full GC) which involves other memory areas such as the PermGen space.</p>

<p style="text-align: justify;">Other important and interesting flags related to the overall heap are -XX:SurvivorRatio
and -XX:NewRatio, which specify the eden space to the survivor space ratio and old generation to the new generation ratio.</p>

<p style="text-align: justify;"></p>
<p style="text-align: justify;"></p>

<h2>Tuning the JVM</h2>
<table>
<tr>
<td><strong>ACTION</strong></td>
<td><strong>JVM OPTION</strong></td>
<td><strong>EXAMPLE</strong></td>
</tr>

<tr>
<td>Set the Min Heap size</td>
<td>-Xms</td>
<td>-Xms512M</td>
</tr>

<tr>
<td>Set the max Heap size</td>
<td>-Xmx</td>
<td>-Xmx512M</td>
</tr>

<tr>
<td>set the size of permgen (not available jdk8 onwards)</td>
<td>-XX:MaxPermSize</td>
<td>-XX:MaxPermSize=256M</td>
</tr>
</table>

<h2>GC Algorithms</h2>
<table>
<tr>
<td width=160px><strong>GC ALGO</strong></td>
<td width=160px><strong>JVM OPTION</strong></td>
<td width=200px><strong>GENERATION</strong></td>
<td width=200px><strong>DESCRIPTION</strong></td>
</tr>

<tr>
<td>Serial GC</td>
<td>-XX:-UseSerialGC</td>
<td>GC on Young and Old Generation</td>
<td>Use the simple mark-sweep-compact cycle for young and tenured generations. This is good for client systems and
systems with low memory footprint and smaller CPU.</td>
</tr>


<tr>
<td>Parallel GC</td>
<td>-XX:-UseParallelGC</td>
<td>GC on Young and Old Generation</td>
<td>This uses N threads, which can be configured using -XX:ParallelGCThreads=N, here N is also the number of CPU cores for
garbage collection. It uses these N threads for GC in the Young Generation but uses only one-thread in the Old Generation.</td>
</tr>

<tr>
<td>Parallel Old GC</td>
<td>-XX:-UseParallelOldGC</td>
<td>GC on Young and Old Generation</td>
<td>This is same as the Parallel GC, except that it uses N threads for GC in both Old and Young Generation.</td>
</tr>

<tr>
<td>Concurrent Mark & Sweep</td>
<td>-XX:-UseConcMarkSweepGC</td>
<td>GC on Old Generaton</td>
<td>As the name suggests, the CMS GC minimzes the pauses that are required for GC. It is most useful when used to create
highly responsive applications and it does GC only in the Old Generation. It creates multiple threads for GC that work
concurrently with applications threads, which can be specified using the -XX:ParallelCMSThreads=n.</td>
</tr>

<tr>
<td>G1 GC</td>
<td>-XX:+UseG1GC</td>
<td>GC on Young and Old Generation (By Dividing Heap into Equal Size Regions)</td>
<td>This is a parallel, concurrent, and incrementally compacting low-pause garbage collector. G1 was introduced in Java 7
with the ultimate vision to replace CMS GC. It divides the heap into multiple, equal sized regions and then performs GC,
usually starting with the region that has less live data, hence "Garbage First".</td>
</tr>
</table>

        */}.toString().slice(14,-3)
    },

    {   /* Memory Leaks & Heap Dump */
        "text" : function(){/*
<h1>Memory Leaks</h1>
<p style="text-align: justify;">A Memory Leak is a situation when an object is no longer used in the program but is still
referenced somewhere at a location that is not reachable. Thus, the garbage collector cannot delete it. The memory space
used for this object will not be released and the total memory used for the program will grow. This will degrade
performances over time and the JVM may run out of memory. In a way, Memory Leak would occur when No Memory can be
allocated on the Tenured Space.</p>

<p style="text-align: justify;">Some of the most common causes of Memory Leaks are:</p>
<ol>
<li>ThreadLocal Variables</li>
<li>Circular and Complex Bi-Directional References</li>
<li>JNI Memory Leaks</li>
<li>Static Fields that are Mutable (Most Common)</li>
</ol>

<p style="text-align: justify;"><strong>Heap Dumps</strong> are vital artifacts to diagnose memory-related problems such
as <strong>Memory-Leaks</strong>, <strong>GC issues</strong>, and <strong>java.lang.OutOfMemoryError</strong>. They are
also vital artifacts to optimize the memory consumption.</p>
<p>&nbsp;</p>

<h2>Heap Dump generation tools</h2>
<ol>
<li style="text-align: justify;"><strong>JMap</strong>
<p style="text-align: justify;">JMap print heap dumps into specified file location.</p>
<p style="text-align: justify;">This tool is packaged within JDK and
can be found at <strong>C:/Program Files/Java/jdk1.8.0_25/bin/</strong></p>
<table>
    <tr>
        <td><strong>COMMAND</strong></td>
        <td>jmap -dump:[live,]format=b,file=&lt;heap dump path&gt; &lt;pid&gt;</td>
    </tr>

    <tr>
        <td><strong>EXAMPLE</strong></td>
        <td>jmap -dump:live,format=b,file=/opt/tmp/heapdump.bin 37320</td>
    </tr>
</table>

<p style="text-align: justify;">If <strong>live</strong> option is passed, then only live objects in the memory are
written into the heap dump file. If this option is not passed, all the objects, even the ones which are ready to be
garbage collected are printed in the heap dump file.</p>
<p style="text-align: justify;"><a href="https://docs.oracle.com/javase/7/docs/technotes/tools/share/jmap.html"
target="_blank">JMap Documentation</a></p>
</li>
<p>&nbsp;</p>

<li style="text-align: justify;"><strong>HeapDumpOnOutOfMemoryError</strong>
<p style="text-align: justify;">When an application experience <strong>java.lang.OutOfMemoryError</strong>, it’s ideal to
capture heap dump right at that point to diagnose the problem because you would want to know what objects were sitting in
memory and what percentage of memory they were occupying when <strong>java.lang.OutOfMemoryError</strong> occurred.</p>

<p style="text-align: justify;">If this option is used, JVM will capture heap dumps right at the point when JVM experiences
<strong>java.lang.OutOfMemoryError</strong></p>

<table>
    <tr>
        <td><strong>JVM OPTION</strong></td>
        <td>-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=&lt;heap dump path&gt;</td>
    </tr>

    <tr>
        <td><strong>EXAMPLE</strong></td>
        <td>-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/opt/tmp/heapdump.bin</td>
    </tr>
</table>

</li>
<p>&nbsp;</p>

<li style="text-align: justify;"><strong>JCmd</strong>
<p style="text-align: justify;">JCmd tool is used to send diagnostic command requests to the JVM.</p>
<p style="text-align: justify;">This tool is packaged within JDK and
can be found at <strong>C:/Program Files/Java/jdk1.8.0_25/bin/</strong></p>
<table>
    <tr>
        <td><strong>COMMAND</strong></td>
        <td>jcmd &lt;pid&gt; GC.heap_dump &lt;heap dump path&gt;</td>
    </tr>

    <tr>
        <td><strong>EXAMPLE</strong></td>
        <td>jcmd 37320 GC.heap_dump /opt/tmp/heapdump.bin</td>
    </tr>
</table>
<p>&nbsp;<a href="https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jcmd.html" target="_blank">JCmd Documentation</a></p>
<p>&nbsp;<a href="https://dzone.com/articles/jcmd-one-jdk-command-line-tool-to-rule-them-all" target="_blank">JCmd: One
Jdk Command-Line Tool to Rule Them All</a></p>
</li>
<p>&nbsp;</p>

<li style="text-align: justify;"><strong>JVisualVM</strong>
<p style="text-align: justify;">JVisualVM is a monitoring, troubleshooting tool that is packaged within the JDK. When you
launch this tool, you can see all the Java processes that are running on the local machine. You can also connect to java
process running on remote machine using this tool.</p>
<p style="text-align: justify;">This tool is packaged within JDK and
can be found at <strong>C:/Program Files/Java/jdk1.8.0_25/bin/</strong></p>
<img src="data/java/images/gc/3.JVisualVM.png" alt="" />
</li>
</ol>
        */}.toString().slice(14,-3)
    },

    {   /* JMX Monitoring */
        "text" : function(){/*
<h1>JMX Monitoring</h1>
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },

    {   /* Remote Debugging */
        "text" : function(){/*
<h1>Remote Debugging</h1>
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },
]
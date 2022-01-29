var multithreading_que = [
	{
		id : 1,
		question : "Thread & Runnable",
		tags : ["thread", "runnable"]
	},
	
	{
		id : 2,
		question : "Thread transitions",
		tags : ["Thread transitions"]
	},
	
	{
		id : 3,
		question : "wait(), notify(), notifyAll()",
		tags : ["wait", "notify", "notifyall"]
	},
	
	{
		id : 4,
		question : "yield(), sleep(), join()",
		tags : ["yield", "sleep", "join"]
	},
	
	{
		id : 5,
		question : "Java Memory Model",
		tags : ["java memory model", "jmm", "jsr133"]
	},
	
	{
		id : 6,
		question : "Double Checked Locking",
		tags : ["Double Checked Locking"]
	},
	
	{
		id : 7,
		question : "Volatile Vs. Synchronized",
		tags : ["volatile", "synchronized"]
	},
	
	{
		id : 8,
		question : "Producer-Consumer",
		tags : ["producer consumer"]
	},
	
	{
		id : 9,
		question : "Daemon Thread",
		tags : ["Daemon thread"]
	},
	
	{
		id : 10,
		question : "Deadlock Vs Livelock Vs Starvation",
		tags : ["Deadlock", "Livelock", "Starvation"]
	},
	
	{
		id : 11,
		question : "Race Condition",
		tags : ["Race Condition"]
	},
	
	{
		id : 12,
		question : "Executor Framework",
		tags : ["Executor Framework", "Executor Interface", "ExecutorService Interface", "ScheduledExecutorService Interface", "Executors", "Thread Pool"]
	},

	{
		id : 13,
		question : "Future & Callable",
		tags : []
	},
	
	{
		id : 14,
		question : "Write a custom ThreadPool",
		tags : ["Custom Thread Pool", "Thread Pool"]
	},

	{
		id : 15,
		question : "Completion Service",
		tags : ["Completion Service"]
	},
	
	{
		id : 16,
		question : "Blocking Queue",
		tags : ["BlockingQueue", "ArrayBlockingQueue", "LinkedBlockingQueue", "PriorityBlockingQueue"]
	},
	
	{
		id : 17,
		question : "ConcurrentHashMap",
		tags : []
	},
	
	{
		id : 18,
		question : "CountDownLatch",
		tags : []
	},
	
	{
		id : 19,
		question : "CyclicBarrier",
		tags : []
	},
	
	{
		id : 20,
		question : "Semaphore",
		tags : []
	},
	
	{
		id : 21,
		question : "ThreadLocal",
		tags : []
	},
	
	{
		id : 22,
		question : "Fork-Join Framework",
		tags : []
	},

	{
		id : 23,
		question : "Completable Future",
		tags : ["Completable Future"]
	},
	
	{
		id : 24,
		question : "AtomicInteger",
		tags : ["AtomicInteger", "CAS"]
	},
		
	{
		id : 25,
		question : "AtomicBoolean",
		tags : ["AtomicBoolean", "CAS"]
	},

	{
		id : 26,
		question : "Print Sequence Using Multiple Threads",
		tags : ["PrintSequence", "Puzzle", "Multithreading", "Threads"]
	},

	{
		id : 27,
		question : "Implement Traffic Signal Using Multiple Threads",
		tags : ["TrafficSignal", "Puzzle", "Multithreading", "Threads"]
	},
]

var multithreading_ans = [
	{	/* Thread & Runnable */
		id : 1,
		"text" : function(){/*
<p style="text-align: justify;">Threads can be implemented in 2 ways:</p>
<ol style="text-align: justify;">
<li>Extending the <strong>java.lang.Thread</strong> class.</li>
<li>Implementing the <strong>java.lang.Runnable</strong> interface</li>
</ol>
<p style="text-align: justify;">A class extending the <strong>Thread</strong> class <em>overrides</em> the <strong>run()</strong> method to define the code to be executed by the thread. The sub-class may invoke the Thread constructor in its constructors to initialize the thread using super(). The <strong>start()</strong> method inherited from the Thread class is invoked on the object of the sub-class to make the thread eligible for execution.</p>
<p style="text-align: justify;">A class that implements the <strong>Runnable</strong> interface provides the <strong>run()</strong> method that will be executed by the thread. This can be run by creating a worker therad and passing the object of this runnable to it. The <strong>start()</strong> method from the Thread class can be invoked then. The start() emthod returns immediately after a thread has been spawned.</p>
<h4 style="text-align: justify;">Why implementing the Runnable interface is preferred?</h4>
<ol style="text-align: justify;">
<li>Extending the Thread class means that the sub-class cannot extend any other class, whereas, a class implementing the Runnable interface has this option.</li>
<li>A class might only be interested in being runnable, and therefore, inheriting the full overhead of the Thread class would be expensive.</li>
</ol>
<p style="text-align: justify;">&nbsp;</p>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Thread transitions */
		id : 2,
		"text" : function(){/*
<h4 style="text-align: justify;">Thread Transitions</h4>
<p style="text-align: justify;"><img src="data/java/images/thread-transitions.gif" alt="Thread Transistions" width="505" height="155" /></p>
<table>
<tbody>
<tr>
<td><strong>Ready to run</strong></td>
<td>A thread starts life in a ready-to-run state</td>
</tr>
<tr>
<td><strong>Running</strong></td>
<td>If a thread is in this state, it means that the thread is currently executing</td>
</tr>
<tr>
<td><strong>Dead</strong></td>
<td>Once in this state, the thread cannot ever run again.</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;"><strong>Non-runnable states</strong>: A thread remains in this state until a special transition occurs.</p>
<table>
<tbody>
<tr>
<td><strong>Sleeping</strong></td>
<td>The thread sleeps for a specified amount of time.</td>
</tr>
<tr>
<td><strong>Blocked for join completion</strong></td>
<td>The thread awaits completion of another thread</td>
</tr>
<tr>
<td><strong>Blocked for I/O</strong></td>
<td>the thread waits for blocking operation to complete</td>
</tr>
<tr>
<td><strong>Waiting for notification</strong></td>
<td>The thread awaits notification from another thread</td>
</tr>
<tr>
<td><strong>Blocked for lock aquisition</strong></td>
<td>The thread waits to aquire the lock of an object</td>
</tr>
</tbody>
</table>
		*/}.toString().slice(14,-3)
	},
	
	{	/* wait(), notify(), notifyAll() */
		id : 3,
		"text" : function(){/*
<p style="text-align: justify;"><img src="data/java/images/wait.gif" alt="wait() notify() notifyAll()" width="500" height="133" /></p>

<h3>Why wait(), notify() and notifyAll() are defined in Object Class and not on Thread class?</h3>
<p>In java, you <code>wait()</code> on a particular instance of an Object -- a <strong>monitor</strong> assigned to that object to be precise.
If you want to send a signal to a single thread that is waiting on that specific object instance then you call <code>notify()</code> on that object.
If you want to send a signal to all threads that are waiting on that object instance, you use <code>notifyAll()</code> on that object.</p>

<p>If <code>wait()</code> and <code>notify()</code> were on the <strong>Thread</strong> class instead, then each thread would have to know the
status of every other thread. How would thread <b>T1</b> know that <b>T2</b> was waiting for access to a particular resource? If <b>T1</b> needed
to call <code>t2.notify()</code> it would have to somehow find out that <b>T2</b> was waiting. There would need to be some mechanism for threads
to register the resources or actions that they need so others could signal them when stuff was ready or available.</p>

<p>The <b>object</b> itself is the entity that is shared between threads which allows them to communicate with each other. The threads have no
specific knowledge of each other and they can run asynchronously. They run and they lock, wait, and notify on the object that they want to get
access to. They have no knowledge of other threads and don't need to know their status. They don't need to know that it is <b>T2</b> which is
waiting for the resource — they just notify on the resource and whomever it is that is waiting (if anyone) will be notified.</p>

<pre>
package java.lang;

public class Object {

...
...

    // Causes the current thread to wait until another thread invokes the notify() method or the notifyAll() method for this object.
    // The current thread must own this object's monitor. The thread releases ownership of this monitor and waits until another
    // thread notifies threads waiting on this object's monitor to wake up either through a call to the notify method or the notifyAll method.
    // The thread then waits until it can re-obtain ownership of the monitor and resumes execution.
    public final void wait() throws InterruptedException {
        wait(0);
    }

    // This method causes the current thread-T to place itself in the wait set for this object and then to relinquish any and all
    // synchronization claims on this object. T becomes disabled for thread scheduling purposes and lies dormant until one of four things happens:
    // 1. Some other thread invokes the notify method for this object and thread T happens to be arbitrarily chosen as the thread to be awakened.
    // 2. Some other thread invokes the notifyAll method for this object.
    // 3. Some other thread interrupts thread T.
    // 4. The specified amount of real time has elapsed, more or less. If timeout is zero, however, then real time is not taken into consideration
    //    and the thread simply waits until notified.

    // The thread T is then removed from the wait set for this object and re-enabled for thread scheduling. It then competes in the usual manner
    // with other threads for the right to synchronize on the object; once it has gained control of the object, all its synchronization claims
    // on the object are restored to the status quo ante - that is, to the situation as of the time that the wait method was invoked.
    // Thread T then returns from the invocation of the wait method. Thus, on return from the wait method, the synchronization state of the object
    // and of thread T is exactly as it was when the wait method was invoked.

    public final native void wait(long timeout) throws InterruptedException;

    public final void wait(long timeout, int nanos) throws InterruptedException {
        if (timeout < 0) throw new IllegalArgumentException("timeout value is negative");
        if (nanos < 0 || nanos > 999999) throw new IllegalArgumentException("nanosecond timeout value out of range");

        if (nanos > 0) timeout++;
        wait(timeout);
    }

...
...

    // Wakes up a single thread that is waiting on this object's monitor.
    // If any threads are waiting on this object, one of them is chosen to be awakened.
    // The choice is arbitrary and occurs at the discretion of the implementation.
    // A thread waits on an object's monitor by calling one of the wait methods.
    // The awakened thread will not be able to proceed until the current thread relinquishes the lock on this object.
    // The awakened thread will compete in the usual manner with any other threads that might be actively competing to synchronize on this object
    // For example, the awakened thread enjoys no reliable privilege or disadvantage in being the next thread to lock this object.
    // This method should only be called by a thread that is the owner of this object's monitor. A thread becomes the owner of the object's monitor in one of three ways:
    // 1. By executing a synchronized instance method of that object.
    // 2. By executing the body of a synchronized statement that synchronizes on the object.
    // 3. For objects of type Class, by executing a synchronized static method of that class.
    public final native void notify();

    // Wakes up all threads that are waiting on this object's monitor. A thread waits on an object's monitor by calling one of the wait methods.
    // The awakened threads will not be able to proceed until the current thread relinquishes the lock on this object.
    // The awakened threads will compete in the usual manner with any other threads that might be actively competing to synchronize on this object.
    // for example, the awakened threads enjoy no reliable privilege or disadvantage in being the next thread to lock this object.
    // This method should only be called by a thread that is the owner of this object's monitor.
    public final native void notifyAll();

...
...
}
</pre>
<p style="text-align: justify;">These methods can <em>only</em> be executed on an object whose lock is acquired by the thread, otherwise, it will
result in <code>IllegalMonitorStateException</code>. A thread acquires a <b>lock</b> on an object and invokes <code>wait()</code> on it. The thread
leaves the <b>running state</b> and transits to <b>wait-for-notification</b> state thereby <b>relinquishing</b> the object lock. However, it does not
relinquishes the other locks that it might hold. The threads in <b>wait-for-notification</b> state are grouped according to the object whose
<code>wait()</code> method was invoked. A thread in <b>wait-for-notification</b> state can be awakened by the occurrence of any of the following incidents:</p>
<ol style="list-style-type: lower-alpha; text-align: justify;">
<li style="text-align: justify;"><strong>Notify:</strong> another thread invokes the <code>notify()</code> method on the object of the waiting
thread and the waiting thread is selected by the thread scheduler to be awakened</li>
<li style="text-align: justify;"><strong>TimeOut:</strong> the waiting thread times out. Note that the awakened thread has no way to know whether
it was timed out or awakened by one of the notification methods.</li>
<li style="text-align: justify;"><strong>Interrupt:</strong>&nbsp;Another thread invoked the <code>interrupt()</code> method on the waiting thread.
It results in <code>InterruptedException</code> upon getting a chance to run again.</li>
</ol>

<h3>Why wait() notify() and notifyAll() must be invoked from a synchronized block?</h3>
<ol style="list-style-type: lower-alpha;">
<li>To avoid <code>IllegalMonitorStateException</code> which will occur if we don't call <code>wait()</code>, <code>notify()</code> or <code>notifyAll()</code> method from synchronized context.</li>
<li>To avoid any potential race condition between wait and notify methods.</li>
</ol>


<pre>
private final Object lock = new Object();
...
// ensure that the thread has a mutex lock on some key code
synchronized (lock) {
	...
	// current thread need to wait for other thread to finish executing the critical section
	lock.wait();
	...
	// current thread need to signal another thread that some state has changed and they can
	// awake and continue to run
	lock.notify();
}
</pre>

<h3>Why should wait() always be invoked inside a loop?</h3>
<p style="text-align: justify;">As per <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--" target="_blank">javadocs</a>,
a thread can also wake up without being notified, interrupted, or timing out, a so-called <strong>Spurious Wakeup</strong>. While this will rarely occur
in practice, applications must guard against it by testing for the condition that should have caused the thread to be awakened, and continuing to wait
if the condition is not satisfied. In other words, waits should always occur in loops.</p>


<h3>What is the difference between notify() and notifyAll()?</h3>
<p style="text-align: justify;">Simply put, it depends on why your threads are waiting to be notified. Do you want to tell one of the waiting threads
that something happened, or do you want to tell all of them at the same time?</p>

<p>In some cases, all waiting threads can take useful action once the wait finishes. An example would be a set of threads waiting for a certain task
to finish; once the task has finished, all waiting threads can continue with their business. In such a case you would use <code>notifyAll()</code>
to wake up all waiting threads at the same time.</p>

<p>Another case, for example mutually exclusive locking, only one of the waiting threads can do something useful after being notified (in this case
acquire the lock). In such a case, you would rather use <code>notify()</code>. You could use <code>notifyAll()</code> in this situation as well, but
you would unnecessarily wake threads that can't do anything anyway.</p>

<p>The <code>notify()</code> method is generally used in <strong>resource pools</strong>, where there are an arbitrary number of <b>workers</b> that
take resources, but when a resource is added to the pool, only one of the waiting consumers or workers can deal with it. The <code>notifyAll()</code>
method is actually used in most other cases. Strictly, it is required to notify waiters of a condition that could allow multiple waiters to proceed.
But this is often difficult to know. So as a general rule, if you have no particular logic for using <code>notify()</code>, then you should probably
use <code>notifyAll()</code>, because it is often difficult to know exactly what threads will be waiting on a particular object and why.</p>
</li>
</ol>
		*/}.toString().slice(14,-3)
	},
	
	{	/* yield(), sleep(), join() */
		id : 4,
		"text" : function(){/*
<p>The methods <b>yield()</b>, <b>sleep()</b> and <b>join()</b> are part of the <b>Thread</b> class:</p>
<pre>
public class Thread implements Runnable {
...
...

    // A hint to the scheduler that the current thread is willing to yield its current use of a processor. The scheduler is free to ignore this hint.
    // Yield is a heuristic attempt to improve relative progression between threads that would otherwise over-utilise a CPU. Its use should be combined
    // with detailed profiling and benchmarking to ensure that it actually has the desired effect.
    public static native void yield();

    // Causes the currently executing thread to sleep (temporarily cease execution) for the specified number of milliseconds, subject to the precision
    // and accuracy of system timers and schedulers. The thread does not lose ownership of any monitors.
    public static native void sleep(long millis) throws InterruptedException;

    // Waits for this thread to die.
    public final void join() throws InterruptedException {
        join(0);
    }

    // This implementation uses a loop of this.wait calls conditioned on this.isAlive. As a thread terminates the this.notifyAll method is invoked.
    // It is recommended that applications not use wait, notify, or notifyAll on Thread instances.
    public final synchronized void join(long millis) throws InterruptedException {
        long base = System.currentTimeMillis();
        long now = 0;

        if (millis < 0) throw new IllegalArgumentException("timeout value is negative");
        if (millis == 0) while (isAlive()) wait(0);
        else {
            while (isAlive()) {
                long delay = millis - now;
                if (delay <= 0) break;
                wait(delay);
                now = System.currentTimeMillis() - base;
            }
        }
    }

...
...
}
</pre>

<h4 style="text-align: justify;">yield()</h4>
<p style="text-align: justify;"><img src="data/java/images/yield.gif" alt="yield.gif" width="194" height="126" /></p>
<p style="text-align: justify;">A call to yield() method will cause the current thread in the running state to transit to ready-to-run state, giving a chance to the remaining waiting threads of the same priority to execute, thus relinquishing the lock.&nbsp;If there are no threads waiting or all the waiting threads have a lower priority then the same thread will continue its execution. The yielded thread when it will get the chance for execution is decided by the thread scheduler whose behavior is vendor dependent.</p>
<h4 style="text-align: justify;">sleep()</h4>
<p style="text-align: justify;"><img src="data/java/images/sleep.gif" alt="sleep()" width="470" height="149" /></p>
<p style="text-align: justify;">It does not relinquish any locks that the thread might have.</p>
<h4 style="text-align: justify;">join()</h4>
<p style="text-align: justify;"><img src="data/java/images/join.gif" alt="join()" width="464" height="158" /></p>
<p style="text-align: justify;">A thread can invoke join() method on another thread in order to wait for the other thread to complete its execution before continuing.&nbsp;A thread t1 invokes join() on a thread t2, i.e., t2.join(). Jon has no effect if t2 has already completed. If t2 is still alive, then t1 transits to blocked-for-join-completion state. Thread t1 waits in this state until:</p>
<ol>
<li style="text-align: justify;">t2 completes</li>
<li style="text-align: justify;">t1 is timed-out</li>
<li style="text-align: justify;">t1 is interrupted - throws InterruptedException when t1 gets to execute again.</li>
</ol>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Java Memory Model */
		id : 5,
		"text" : function(){/*
<h4 style="text-align: justify;">Java Memory Model</h4>
<p style="text-align: justify;">In multiprocessor systems, processors generally have one or more layers of memory cache, which improves performance both by speeding access to data and reducing traffic on the shared memory bus.</p>
<ol style="text-align: justify;">
<li><strong>Visibility</strong>
<p style="text-align: justify;">A memory model defines necessary and sufficient conditions for knowing that writes to memory by other processors are visible to the current processor, and writes by the current processor are visible to other processors. Processors require special instructions called <em>memory barriers</em> to flush or invalidate the local processor cache in order to see <em>writes-made-by-other-processors</em> or make <em>writes-by-this-processor</em> visible to others. These memory barriers are usually performed when lock and unlock actions are taken; they are invisible to programmers.</p>
<pre>// Double-checked locking -- broken version
public class Singleton {
	// private volatile Foo foo = null;
	private Foo foo = null;
	private Singleton() {}	// constructor is private

	public Foo getFoo() {
		// Check that the variable is initialized (without obtaining the lock).
		// If it is initialized, return it immediately.
		if (foo == null) {
			// obtain a lock
			synchronized (this) {
				// Double-check whether the variable has already been initialized:
				// if another thread acquired the lock first, it may have already done  
				// the initialization. If so, return the initialized variable.
				if (foo == null) {
					foo = new Foo();
					// new Foo() can be split into:
					// - Memory Allocation (initialization of Foo)
					// - Constructor Call (initialization of Bar)
				}
			}
		}
		return foo;
	}
}

class Foo {
	public Bar bar;

	public Foo() {
		bar = new Bar();
		// more complex operations goes here
	}

	// more implementation goes here
}

class Bar {
	// implementation goes here
}
</pre>
<p>consider the following sequence of events:</p>
<ul style="text-align: justify;">
<li>Thread A notices that the value is not initialized, so it obtains the lock and begins to initialize the value.</li>
<li>Due to the semantics of some programming languages, the code generated by the compiler is allowed to update the shared variable to point to a partially constructed object before A has finished performing the initialization. For example, in Java if a call to a constructor has been inlined then the shared variable may immediately be updated once the storage has been allocated but before the inlined constructor initializes the object.</li>
<li>Thread B notices that the shared variable has been initialized (or so it appears), and returns its value. Because thread B believes the value is already initialized, it does not acquire the lock. If B uses the object before all of the initialization done by A is seen by B (either because A has not finished initializing it or because some of the initialized values in the object have not yet percolated to the memory B uses (cache coherence)), the program can throw a NullPointerException.</li>
</ul>
<p>&nbsp;</p>
</li>
<li style="text-align: justify;"><strong>Reordering</strong>
<p style="text-align: justify;">The semantics of the Java allow compilers and microprocessors to perform optimizations that can interact with incorrectly synchronized code in ways that can produce behaviors that seem paradoxical. The compiler might decide that it is more efficient to move a write operation later in the program. As long as this re-ordering&nbsp;does not change the program's semantics, it is free to do so. If a compiler defers an operation, another thread will not see it until it is performed. Moreover, writes to memory can be moved earlier in a program; in this case, other threads might see a write before it actually "occurs" in the program. &nbsp;All of this flexibility is by design -- giving the compiler, runtime, or hardware the flexibility to execute operations in the optimal order.</p>
<table>
<tbody>
<tr><th colspan="2">Original Code</th></tr>
<tr>
<td>Thread 1</td>
<td>Thread 2</td>
</tr>
<tr>
<td>
<pre>r2 = A;		// (1)
B = 1;		// (2)
</pre>
</td>
<td>
<pre>r1 = B;		// (3)
A = 2;		// (4)
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">this program uses local variables <strong>r1</strong> and <strong>r2</strong> and shared variables <strong>A</strong> and <strong>B</strong>. Initially,<strong> A == B == 0</strong>. It may appear that the result <strong>r2 == 2</strong> and <strong>r1 == 1</strong> is impossible. Intuitively, either instruction <span style="color: #339966;"><strong>(1)</strong></span> or instruction <span style="color: #339966;"><strong>(3)</strong></span> should come first in an execution. If instruction <span style="color: #339966;"><strong>(1)</strong></span> comes first, it should not be able to see the write at instruction <span style="color: #339966;"><strong>(4)</strong></span>. If instruction <span style="color: #339966;"><strong>(3)</strong></span> comes first, it should not be able to see the write at instruction <span style="color: #339966;"><strong>(2)</strong></span>.</p>
<p style="text-align: justify;">However, compilers are allowed to reorder the instructions in either thread, when this does not affect the execution of that thread in isolation. If instruction <span style="color: #339966;"><strong>(1)</strong></span> is reordered with instruction <span style="color: #339966;"><strong>(2)</strong></span>, as shown below, then it is easy to see how the result <strong>r2 == 2</strong> and <strong>r1 == 1</strong> might occur.</p>
<table>
<tbody>
<tr><th colspan="2">Surprising results caused by statement reordering - valid compiler transformation</th></tr>
<tr>
<td>Thread 1</td>
<td>Thread 2</td>
</tr>
<tr>
<td>
<pre>B = 1;		// (1)
r2 = A;		// (2)
</pre>
</td>
<td>
<pre>r1 = B;		// (3)
A = 2;		// (4)</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">To some programmers, this behavior may seem "broken". However, it should be noted that this code is incorrectly&nbsp;synchronized:</p>
<ul>
<li style="text-align: justify;">There is a write in one thread,</li>
<li style="text-align: justify;">A read of the same variable by another thread,</li>
<li style="text-align: justify;">The write and read are not ordered by synchronization.</li>
</ul>
<p style="text-align: justify;">This situation is an example of a data race. When code contains a data race, counterintuitive results are often possible. A JIT compiler in a JVM implementation may rearrange code, or the processor.</p>
</li>
</ol>
<h4 style="text-align: justify;">Problems in old Memory Model</h4>
<ol style="text-align: justify;">
<li><span style="color: #993300;">Semantics of <strong>final</strong> were broken</span><br /> Nothing in the old memory model treated final fields differently from any other field -- meaning synchronization was the only way to ensure that all threads see the value of a final field that was written by the constructor. As a result, it was possible for a thread to see the default value of the field, and then at some later time see its constructed value. For example, immutable objects like <strong>String</strong> can appear to change their value. A String can be implemented as an object with three fields -- a <em>character array</em>, an <em>offset</em> into that array, and a <em>length</em>. The rationale for implementing String this way, instead of having only the character array, is that it lets multiple String and StringBuffer objects share the same character array and avoid additional object allocation and copying. So, for example, the method <strong>String.substring()</strong> can be implemented by creating a new string which shares the same character array with the original String and merely differs in the length and offset fields. For a String, these fields are all final fields.
<pre>String s1 = "/usr/tmp";
String s2 = s1.substring(4);
</pre>
The string s2 will have an offset of 4 and a length of 4. But, under the old model, it was possible for another thread to see the offset as having the default value of 0, and then later see the correct value of 4, it will appear as if the string "/usr" changes to "/tmp". The original Java Memory Model allowed this behavior.</li>
<li><span style="color: #993300;">Semantics of <strong>volatile</strong> were broken:</span><br /> The old memory model allowed for volatile writes to be reordered with nonvolatile reads and writes, which was not consistent with most developers intuitions about volatile and therefore caused confusion.</li>
</ol>
<h4 style="text-align: justify;">JSR 133</h4>
<p style="text-align: justify;">JSR 133 defines a new memory model for the Java language which fixes the flaws of the earlier memory model. In order to do this, the semantics of final and volatile were changed.</p>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Double Checked Locking */
		id : 6,
		"text" : function(){/*
<h4 style="text-align: justify;">Double checked Locking</h4>
<pre>public class Singleton {
	private static volatile Singleton instance;

	private Singleton() {
	}

	public static Singleton getInstance() {

		if (instance == null) {
			synchronized (Singleton.class) {
				if (instance == null) {
					instance = new Singleton();
				}
			}
		}
		return instance;
	}
}
</pre>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Volatile Vs. Synchronized */
		id : 7,
		"text" : function(){/*
<h4 style="text-align: justify;">Volatile</h4>
<p style="text-align: justify;">To ensure that <em>shared variables</em> are consistently and reliably updated, a thread should ensure that it has exclusive use of such variables by obtaining a lock enforces mutual exclusion for those shared variables. Java provides a second mechanism, <strong>volatile</strong> fields, that is more convenient than locking for some purposes. A field may be declared volatile, in which case the JMM ensures that all threads see a consistent value for that variable.</p>
<p style="text-align: justify;">It is a <strong>compile-time error</strong> if a <strong>final</strong> variable is also declared <strong>volatile</strong>. Declaring a variable as&nbsp;volatile means:</p>
<ol style="text-align: justify;">
<li style="text-align: justify;">The value of this variable will never be cached in CPU cache/registers: all reads and writes will go straight to "main memory".</li>
<li style="text-align: justify;">Access to the variable <em>acts as though</em> it is enclosed in a synchronized block, synchronized on itself.</li>
</ol>
<h4 style="text-align: justify;">Synchronized</h4>
<p style="text-align: justify;">The <strong>synchronized</strong> keyword is used to guard the <em>critical section</em> of the code (that accesses the shared variables) so that it is&nbsp;executed in a&nbsp;<em>mutual exclusive</em> manner by concurrently running threads. A synchronized <strong>method</strong> or <strong>block</strong> is always <em>synchronized</em> on a particular object called the <strong>intrinsic lock</strong> (or monitor).&nbsp;Intrinsic locks play a role in both aspects of synchronization:</p>
<ol style="text-align: justify;">
<li>Enforcing <strong>mutual-exclusive</strong> access to an object's state, and</li>
<li>Establishing <strong>happens-before</strong> relationships that are essential to <strong>visibility</strong>.</li>
</ol>
<p style="text-align: justify;">Before entering the <em>critical section</em>, a thread has to <strong>acquire</strong> the <strong>intrinsic lock</strong> associated with the shared resource. At any given point of time, atmost 1 thread can hold the intrinsic lock and thereby access the shared variable. If a thread cannot immediately acquire the lock, it is <strong>blocked</strong>, i.e., it must <strong>wait</strong> for the lock to be available. When a thread exits the critical section, it <strong>relinquishes</strong> the lock. If another thread is waiting to execute this critical section, it can acquire the lock and gain mutual-exclusive access.&nbsp;When a thread releases an intrinsic lock, a <strong>happens-before</strong> relationship is established between that action and any subsequent acquistion of the same lock.&nbsp;a thread cannot acquire a lock owned by another thread. But a thread&nbsp;<em>can</em>&nbsp;acquire a lock that it already owns. Allowing a thread to acquire the same lock more than once enables&nbsp;<strong>reentrant synchronization</strong>. This describes a situation where synchronized code, directly or indirectly, invokes a method that also contains synchronized code, and both sets of code use the same lock.</p>
<table>
<tbody>
<tr><th>Characteristic</th><th>synchronized</th><th>volatile</th></tr>
<tr>
<td>Type of Variable</td>
<td>Object</td>
<td>Object or primitive</td>
</tr>
<tr>
<td>Null Allowed?</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Can Block?</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>All cached variables synchronized on access?</td>
<td>Yes</td>
<td>Yes (from Java 5 onwards)</td>
</tr>
<tr>
<td>When synchronization happens?</td>
<td>when a thread enters/exits a critical section</td>
<td>Whenever a volatile variable is accessed</td>
</tr>
<tr>
<td>Can be used to combine several operations into an actomic operation?</td>
<td>Yes</td>
<td>No. Atomic classes can be used to achieve this.</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">A synchronized<strong> instance </strong>method synchronizes on <strong>object-level lock</strong>. While a thread is executing a&nbsp;synchronized <strong>instance</strong>&nbsp;method, all other threads that wish to execute any synchronized <strong>instance</strong>&nbsp;method will have to <strong>wait</strong>. A thread that is executing synchronized <strong>instance</strong>&nbsp;method can invoke any other synchronized&nbsp;<strong>instance</strong>&nbsp;method without being blocked (<strong>reentrant synchronization</strong>). Non-synchronized <strong>instance</strong> methods can be invoked anytime by any thread.</p>
<p style="text-align: justify;">A&nbsp;synchronized<strong>&nbsp;static&nbsp;</strong>method&nbsp;synchronizes on&nbsp;<strong>class-level lock</strong>. While a thread is executing a&nbsp;synchronized&nbsp;<strong>static&nbsp;</strong>method, all other threads that wish to execute any synchronized&nbsp;<strong>static&nbsp;</strong>method will have to&nbsp;<strong>wait</strong>. A thread that is executing synchronized&nbsp;<strong>static&nbsp;</strong>method can invoke any other synchronized&nbsp;<strong>static&nbsp;</strong>method without being blocked (<strong>reentrant synchronization</strong>). Non-synchronized&nbsp;<strong>static&nbsp;</strong>methods can be invoked anytime by any thread.</p>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Producer-Consumer */
		id : 8,
		"text" : function(){/*
<ol>
<li>
<h3>Producer-Consumer implementation without using java.util.concurrent utilities</h3>
<pre>import java.util.LinkedList;
import java.util.List;

public class Buffer {

	public static final int MAX_SIZE = 10;

	private List&lt;String&gt; queue = new LinkedList&lt;String&gt;();

	public synchronized void put(String data) throws InterruptedException {
		while (queue.size() == MAX_SIZE) {
			wait(500);
		}

		queue.add(data);
		notifyAll();
	}

	public synchronized String get() throws InterruptedException {
		String data = null;
		while (queue.size() == 0) {
			wait(500);
		}

		data = queue.remove(0);
		notifyAll();
		return data;
	}
}
</pre>
<pre>import java.util.Random;

public class Producer implements Runnable {

	private Thread t;
	
	private static Random random = new Random();

	private Buffer buffer;
	
	public Producer(Buffer b) {
		buffer = b;
		t = new Thread(this);
		t.start();
	}

	public void run() {

		while (true) {
			try {
				Thread.sleep(random.nextInt(2) * 1000);
			} catch (InterruptedException e) {
			}

			try {
				int rand = random.nextInt(10000);
				System.out.println("\t\t\tENQUEUE: " + rand);
				buffer.put(rand + "");
			} catch (InterruptedException e) {}
		}
	}

}
</pre>
<pre>import java.util.Random;

public class Consumer implements Runnable {

	private Thread t;
	
	private static Random random = new Random();
	
	private Buffer buffer;

	public Consumer(Buffer b) {
		buffer = b;
		t = new Thread(this);
		t.start();
	}

	public void run() {
		while (true) {
			try {
				String data = buffer.get();
				System.out.println("DEQUEUE: " + data);
			} catch (InterruptedException e1) {}

			try {
				Thread.sleep(random.nextInt(2) * 1000);
			} catch (InterruptedException e) {
			}

		}
	}

}
</pre>
<pre>public class ProducerConsumerDemo {

	public static void main(String[] args) {
		Buffer b = new Buffer();
		new Producer(b);
		new Producer(b);
		
		new Consumer(b);
		new Consumer(b);
	}
}
</pre>
</li>
<li>
<h3>Producer-Consumer implementation using BlockingQueue</h3>
<pre>import java.util.Random;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class BlockingQueueDemo {
	public static void main(String[] args) {
		BlockingQueue&lt;String&gt; q = new ArrayBlockingQueue&lt;String&gt;(10);
		Producer p = new Producer(q);
		Consumer c1 = new Consumer(q);
		Consumer c2 = new Consumer(q);
		new Thread(p).start();
		new Thread(c1).start();
		new Thread(c2).start();
	}
}

class Producer implements Runnable {
	private final BlockingQueue&lt;String&gt; queue;
	private static Random random = new Random();

	Producer(BlockingQueue&lt;String&gt; q) {
		queue = q;
	}

	public void run() {
		try {
			while (true) {
				queue.put(produce());
			}
		} catch (InterruptedException ex) {
		}
	}

	String produce() {
		String data = random.nextInt(100) + "";
		System.out.println("ENQUEUE: " + data);
		return data;
	}
}

class Consumer implements Runnable {
	private final BlockingQueue&lt;String&gt; queue;

	Consumer(BlockingQueue&lt;String&gt; q) {
		queue = q;
	}

	public void run() {
		try {
			while (true) {
				consume(queue.take());
			}
		} catch (InterruptedException ex) {
		}
	}

	void consume(String data) {
		System.out.println("\t\t\tDEQUEUE: " + data);
	}
}
</pre>
</li>
</ol>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Daemon Thread */
		id : 9,
		"text" : function(){/*
<p style="text-align: justify;"><strong>Daemon threads</strong> are those which run in background and mostly created by JVM for performing background task like garbage collection and other house keeping tasks. Difference between Daemon and non-daemon is that as soon as all user thread finish execution, JVM doesn't wait for daemon thread to finish their execution. As soon as last non daemon thread finishes, JVM terminates no matter how many daemon threads exist or running -- finally blocks are not executed, stacks are not unwounded. JVM just exits.</p>
<p style="text-align: justify;">When a thread creates a new thread, the new thread has its priority initially set equal to the priority of the creating thread. So, any thread created by main thread is by default non-daemon. However, it can be explicitly made daemon by calling <code>setDaemon(true)</code>.</p>

<pre>
Thread daemon = new Thread();
// setDaemon() this needs to be invoked before start(). Otherwise, it will throw IllegalThreadStateException.
daemon.setDaemon(true); 
daemon.start();
</pre>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Deadlock Vs Livelock Vs Starvation */
		id : 10,
		"text" : function(){/*
<h4 style="text-align: justify;">Deadlock</h4>
<p style="text-align: justify;">Deadlock describes a situation where two or more threads are blocked forever, waiting for each other.</p>
<h4 style="text-align: justify;">Livelock</h4>
<p style="text-align: justify;">A thread often acts in response to the action of another thread. If the other thread's action is also a response to the action of another thread, then livelock may result. As with deadlock, livelocked threads are unable to make further progress. However, the threads are not blocked &mdash; they are simply too busy responding to each other to resume work. A real-world example of livelock occurs when two people meet in a narrow corridor, and each tries to be polite by moving aside to let the other pass, but they end up swaying from side to side without making any progress because they both repeatedly move the same way at the same time. A deadlock results in an infinite wait whereas a livelock results in wasting CPU cycles.</p>
<p style="text-align: justify;">Livelock is a risk with some algorithms that detect and recover from deadlock. If more than one process takes action, the deadlock detection algorithm can be repeatedly triggered. This can be avoided by ensuring that only one process (chosen randomly or by priority) takes action.</p>
<h4 style="text-align: justify;">Starvation</h4>
<p style="text-align: justify;">Starvation describes a situation where a thread is unable to gain regular access to shared resources and is unable to make progress. This happens when shared resources are made unavailable for long periods by "greedy" threads. For example, suppose an object provides a synchronized method that often takes a long time to return. If one thread invokes this method frequently, other threads that also need frequent synchronized access to the same object will often be blocked. Lock starvation is all about thread priority. It occurs when a thread, having lesser priority than other ones, is constantly waiting for a lock, never able to take it because other thread(s) with higher priority are constanly aquiring the lock.</p>
<p style="text-align: justify;">&nbsp;</p>
<table>
<tbody>
<tr>
<td><strong>Deadlock</strong></td>
<td><strong>Livelock</strong></td>
<td><strong>Starvation</strong></td>
</tr>
<tr>
<td>"Me first, Me first"</td>
<td>"You first, You first"</td>
<td>"Some first, Others never"</td>
</tr>
</tbody>
</table>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Race Condition */
		id : 11,
		"text" : function(){/*
<p style="text-align: justify;">A <strong>race condition</strong> occurs when two or more threads access shared data and they try to change it at the same time. Because the thread scheduling algorithm can swap between threads at any time, we&nbsp;don't know the order in which the threads will attempt to access the shared data. Therefore, the result of the change in data is dependent on the thread scheduling algorithm, i.e. both threads are "racing" to access/change the data.</p>
<p style="text-align: justify;">A classical example of race-condition is incrementing a counter since increment is not an atomic operation and can be further divided into three steps -- <em>Read, Update and Write</em>. If two threads tries to increment count at same time and if they read same value because of interleaving of read operation of one thread to update operation of another thread, one count will be lost when one thread overwrite increment done by other thread. Atomic operations are not subject to race conditions because those operations cannot be interleaved.</p>
<h4>Detecting race-conditions</h4>
<p>Race conditions can be detected by code reviews (manually, or using code review tools). "Check then&nbsp;act" and "read-modify-write" are the two coding patterns that can have race conditions if not synchronized properly.</p>
<ol>
<li><strong>Check-then-act</strong><br />A classical example of this pattern is in getInstance() method of singleton design pattern.
<pre>public Singleton getInstance(){
	if(instance == null){	//race condition if two threads sees instance = null
		instance = new Singleton();
	}
}
</pre>
</li>
<li><strong>Read-modify-write</strong><br />A classical example is the non thread-safe counter. Read-modify-update pattern also occurs due to improper synchronization of non-atomic operations or combination of two individual atomic-operations which is not atomic together, e.g., put-if-absent scenario. Consider below code
<pre>if(!map.contains(key)){
	map.put(key, value);
}
</pre>
</li>
</ol>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Executor Framework */
		id : 12,
		"text" : function(){/*
<p style="text-align: justify;"><strong>Executor framework</strong> is used to launch <em>runnables</em> and <em>callables</em> without creating new threads every time and re-using the already created ones from a <strong>thread pool</strong>. Since, creating a thread is a very expensive process which includes memory overhead also, it&rsquo;s a good idea if we can re-use these worker threads once created, to run our future runnables.</p>
<p style="text-align: justify;">The <strong>java.util.concurrent</strong> package defines 3&nbsp;executor interfaces:</p>
<ol style="text-align: justify;">
<li><strong>Executor</strong> Interface
<p style="text-align: justify;">It provides a single method <code>execute()</code> that is designed to be a drop-in replacement
for a common thread-creation idiom. If <b>r</b> is a Runnable object, and <b>e</b> is an Executor object you can replace
<code>(new Thread(r)).start();</code> with <code>e.execute(r);</code></p>
<pre>
package java.util.concurrent;

public interface Executor {
    void execute(Runnable command);
}
</pre>
</li>

<li><strong>ExecutorService</strong> Interface
<p>The ExecutorService extends Executor interface. It supplements <em>execute()</em> with a similar, but more versatile <em>submit()</em> method. Like execute, submit accepts <em>Runnable</em> objects, but also accepts <em>Callable</em> objects, which allow the task to return a value. The submit method returns a <em>Future</em> object, which is used to retrieve the Callable return value and to manage the status of both Callable and Runnable tasks. It also&nbsp;provides a number of methods for managing the shutdown of the executor.</p>
<pre>
package java.util.concurrent;

public interface ExecutorService extends Executor {

    void shutdown();

    &lt;T&gt; Future&lt;T&gt; submit(Callable&lt;T&gt; task);

    Future&lt;?&gt; submit(Runnable task);

    &lt;T&gt; List&lt;Future&lt;T&gt;&gt; invokeAll(Collection&lt;? extends Callable&lt;T&gt;&gt; tasks) throws InterruptedException;

    // more methods there
}
</pre>

</li>
<li><strong>ScheduledExecutorService</strong> Interface
<p>The ScheduledExecutorService interface extends ExecutorSerivice interface. It supplements the methods of its parent ExecutorService with schedule, which executes a <em>Runnable</em> or <em>Callable</em> task after a specified delay. In addition, the interface defines <em>scheduleAtFixedRate</em> and <em>scheduleWithFixedDelay</em>, which executes specified tasks repeatedly, at defined intervals.</p>

<pre>
package java.util.concurrent;

public interface ScheduledExecutorService extends ExecutorService {
    public ScheduledFuture<?> schedule(Runnable command, long delay, TimeUnit unit);

    public &lt;V&gt; ScheduledFuture&lt;V&gt; schedule(Callable&lt;V&gt; callable, long delay, TimeUnit unit);

    public ScheduledFuture&lt;?&gt; scheduleAtFixedRate(Runnable command, long initialDelay, long period, TimeUnit unit);

    public ScheduledFuture&lt;?&gt; scheduleWithFixedDelay(Runnable command, long initialDelay, long delay, TimeUnit unit);
}
</pre>
</li>
</ol>
<p style="text-align: justify;">Executor framework also provides a utility class <strong>Executors</strong> which provides several static factory method to create various type of Thread Pool implementations:</p>
<ol>
<li style="text-align: justify;">Fixed size thread pool</li>
<li style="text-align: justify;">Cached thread pool</li>
<li style="text-align: justify;">Scheduled thread pool.</li>
</ol>
<p style="text-align: justify;">Most of the executor implementations in java.util.concurrent use thread pools, which consist of <em>worker threads</em>. Using worker threads minimizes the overhead due to thread creation. Thread objects use a significant amount of memory, and in a large-scale application, allocating and deallocating many thread objects creates a significant memory management overhead.</p>
<p style="text-align: justify;">Runnable and Callable interface are used to represent task executed by worker thread managed in these Thread pools. Interesting point about Executor framework is that, it is based on Producer consumer design pattern, where application thread produces task and worker thread consumers or execute those task.</p>

<h3>Executor framework with Runnables</h3>
<pre>
public class RunnableTask implements Runnable {
    private String taskName;

    public RunnableTask(String taskName) {
        this.taskName = taskName;
    }

    @Override
    public void run() {
        try {
            System.out.println(taskName + " :: " + Thread.currentThread().getId() + " :: Task started");
            Thread.sleep(1000);
            System.out.println(taskName + " :: " + Thread.currentThread().getId() + " :: Task completed");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
</pre>

<pre>
public class ExecutorFrameworkWithRunnable {
    public static void main(String[] args) {
        ExecutorService singleThreadExecutor = Executors.newSingleThreadExecutor();
        ExecutorService fixedThreadPool = Executors.newFixedThreadPool(5);
        ExecutorService cachedThreadPool = Executors.newCachedThreadPool();
        ScheduledExecutorService scheduledThreadPool = Executors.newScheduledThreadPool(5);

        try {
            execute(singleThreadExecutor, "singleThreadExecutor", 10);
            execute(fixedThreadPool, "fixedThreadPool", 10);
            execute(cachedThreadPool, "cachedThreadPool", 20);
            schedule(scheduledThreadPool, "scheduledThreadPool", 5, 5);
        } finally {
            singleThreadExecutor.shutdown();
            fixedThreadPool.shutdown();
            cachedThreadPool.shutdown();
            scheduledThreadPool.shutdown();
        }
    }

    private static void execute(ExecutorService executorService, String taskName, int taskCount) {
        for (int i = 0; i &lt; taskCount; i++) {
            executorService.execute(new RunnableTask(taskName));
        }
    }

    private static void schedule(ScheduledExecutorService scheduledThreadPool, String taskName, long delaySeconds, int taskCount) {
        for (int i = 0; i &lt; taskCount; i++) {
            scheduledThreadPool.schedule(new RunnableTask(taskName), delaySeconds, TimeUnit.SECONDS);
        }
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},


	{	/* Future & Callable */
		id : 13,
		"text" : function(){/*
<h3>Executor framework with Callables</h3>
<pre>
public class CallableTask implements Callable&lt;Integer&gt; {
    private final String taskName;
    private static final Random random = new Random();

    public CallableTask(String taskName) {
        this.taskName = taskName;
    }

    @Override
    public Integer call() throws Exception {
        int i=0;
        int max = random.nextInt(5);
        while (i&lt;max) {
            Thread.sleep(1000);
            System.out.printf("%s :: %d :: Subtask %d completed\n", taskName, Thread.currentThread().getId(), i);
            i++;
        }
        return max;
    }
}
</pre>

<pre>
public class ExecutorFrameworkWithCallable {
    public static void main(String[] args) {
        ExecutorService singleThreadExecutor = Executors.newSingleThreadExecutor();
        ExecutorService fixedThreadPool = Executors.newFixedThreadPool(5);
        ExecutorService cachedThreadPool = Executors.newCachedThreadPool();
        ScheduledExecutorService scheduledThreadPool = Executors.newScheduledThreadPool(5);

        try {
            submit(singleThreadExecutor, "singleThreadExecutor", 10);
            submit(fixedThreadPool, "fixedThreadPool", 10);
            submit(cachedThreadPool, "cachedThreadPool", 20);
            schedule(scheduledThreadPool, "scheduledThreadPool", 5, 5);
        } finally {
            singleThreadExecutor.shutdown();
            fixedThreadPool.shutdown();
            cachedThreadPool.shutdown();
            scheduledThreadPool.shutdown();
        }
    }

    private static void submit(ExecutorService executorService, String taskName, int taskCount) {
        Future[] futures = new Future[taskCount];
        for (int i = 0; i &lt; taskCount; i++) {
            futures[i] = executorService.submit(new CallableTask(taskName));
        }
        Arrays.stream(futures).forEach(f -&gt; {
            try {
                System.out.println(f.get());
            } catch (InterruptedException | ExecutionException e) {
                e.printStackTrace();
            }
        });
    }

    private static void schedule(ScheduledExecutorService scheduledThreadPool, String taskName, long delaySeconds, int taskCount) {
        ScheduledFuture[] futures = new ScheduledFuture[taskCount];
        for (int i = 0; i &lt; taskCount; i++) {
            futures[i] = scheduledThreadPool.schedule(new CallableTask(taskName), delaySeconds, TimeUnit.SECONDS);
        }
        Arrays.stream(futures).forEach(f -&gt; {
            try {
                System.out.println(f.get());
            } catch (InterruptedException | ExecutionException e) {
                e.printStackTrace();
            }
        });

    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Write a custom ThreadPool */
		id : 14,
		"text" : function(){/*

<pre>
public class CustomThreadPoolDemo {
    public static void main(String[] args) {
        ThreadPool threadPool = new ThreadPool(4);
        try {
            threadPool.execute(new Task());
            threadPool.execute(new Task());
            threadPool.execute(new Task());
            threadPool.execute(new Task());
            threadPool.execute(new Task());
            threadPool.execute(new Task());
            threadPool.execute(new Task());
            threadPool.execute(new Task());
            threadPool.execute(new Task());
            threadPool.execute(new Task());
        } finally {
            threadPool.shutdown();
        }
    }
}
</pre>

<pre>
public class ThreadPool {
    private final int poolSize;
    private final WorkerThread[] workerThreads;
    private final BlockingQueue&lt;Runnable&gt; runnableQueue;

    public ThreadPool(int poolSize) {
        this.poolSize = poolSize;
        workerThreads = new WorkerThread[poolSize];
        runnableQueue = new LinkedBlockingQueue&lt;&gt;();

        for (int i = 0; i &lt; poolSize; i++) {
            workerThreads[i] = new WorkerThread(runnableQueue);
            workerThreads[i].start();
        }
    }

    public void execute(Runnable runnable) {
        try {
            runnableQueue.put(runnable);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void shutdown() {
        while (runnableQueue.size() !=0) {};
        Arrays.stream(workerThreads).forEach(WorkerThread::shutdown);
    }
}
</pre>

<pre>
public class WorkerThread extends Thread {
    private boolean alive = true;
    private final BlockingQueue&lt;Runnable&gt; runnableQueue;

    public WorkerThread(BlockingQueue&lt;Runnable&gt; blockingQueue) {
        this.runnableQueue = blockingQueue;
    }

    public void shutdown() {
        alive = false;
    }

    @Override
    public void run() {
        super.run();
        while (alive) {
            try {
                Runnable runnable = runnableQueue.poll(100, TimeUnit.MILLISECONDS);
                if(runnable != null) runnable.run();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
</pre>

<pre>
public class Task implements Runnable {
    @Override
    public void run() {
        try {
            System.out.println(Thread.currentThread().getId() + " :: Task started");
            Thread.sleep(1000);
            System.out.println(Thread.currentThread().getId() + " :: Task completed");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},

    {   /* Completion Service */
        id : 15,
		"text" : function(){/*
<p>With ExecutorService, once you have submitted the tasks to run, you need to manually code for efficiently getting the results of the tasks completed.</p>

<p>With CompletionService, this is pretty much automated. The difference is not very evident in the code you have presented because you are submitting
just one task. However, imagine you have a list of tasks to be submitted. In the example below, multiple tasks are submitted to the CompletionService.
Then, instead of trying to find out which task has completed (to get the results), it just asks the CompletionService instance to return the results
as they become available.</p>

<pre>
public class CompletionServiceExample {

    public static void main(String[] args) {
        ExecutorService fixedThreadPool = Executors.newFixedThreadPool(5);
        CompletionService&lt;Integer&gt; completionService = new ExecutorCompletionService&lt;&gt;(fixedThreadPool);
        try {
            submit(completionService, "fixedThreadPool", 10);
        } finally {
            fixedThreadPool.shutdown();
        }
    }

    private static void submit(CompletionService&lt;Integer&gt; completionService, String taskName, int taskCount) {
        for (int i = 0; i &lt; taskCount; i++) {
            completionService.submit(new _11_CompletionServiceExample.Task(taskName));
        }

        for (int i = 0; i &lt; taskCount; i++) {
            try {
                System.out.println(completionService.take().get());
            } catch (InterruptedException | ExecutionException e) {
                e.printStackTrace();
            }
        }
    }
}
</pre>

<pre>
public class Task implements Callable&lt;Integer&gt; {
    private final String taskName;
    private static final Random random = new Random();

    public Task(String taskName) {
        this.taskName = taskName;
    }

    @Override
    public Integer call() throws Exception {
        int i = 0;
        int max = random.nextInt(5);
        while (i &lt; max) {
            Thread.sleep(1000);
            System.out.printf("%s :: %d :: Subtask %d completed\n", taskName, Thread.currentThread().getId(), i);
            i++;
        }
        return max;
    }
}
</pre>

<p style="text-align: justify;">Reference:&nbsp;<a href="https://stackoverflow.com/a/5580058" target="_blank">When should I use a CompletionService over an ExecutorService??</a></p>
        */}.toString().slice(14,-3)
    },
	
	{	/* Blocking Queue */
		id : 16,
		"text" : function(){/*
<p style="text-align: justify;">A <strong>BlockingQueue</strong> is a <strong>Queue</strong> that additionally supports operations that wait for the queue to become non-empty when retrieving an element, and wait for space to become available in the queue when storing an element. BlockingQueue methods come in 4 forms, with different ways of handling operations that cannot be satisfied immediately, but may be satisfied at some point in the future: <br />1. throws an exception,<br />2. returns a special value (either null or false, depending on the operation),<br />3. blocks the current thread indefinitely until the operation can succeed,<br />4. blocks for only a given maximum time limit before giving up.</p>
<p style="text-align: justify;">These methods are summarized in the following table:</p>
<table>
<tbody>
<tr>
<td>&nbsp;</td>
<td><strong>Throws Exception</strong></td>
<td><strong>Special Value</strong></td>
<td><strong>Blocks</strong></td>
<td><strong>Times out</strong></td>
</tr>
<tr>
<td><strong>Insert</strong></td>
<td>add(e)</td>
<td>offer(e)</td>
<td>put(e)</td>
<td>
<p>offer(e, timeout, unit)</p>
</td>
</tr>
<tr>
<td><strong>Remove</strong></td>
<td>remove()</td>
<td>poll(timeout, unit)</td>
<td>take()</td>
<td>poll(timeout, unit)</td>
</tr>
<tr>
<td><strong>Examine</strong></td>
<td>element()</td>
<td>peek()</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;"><strong>offer</strong>:&nbsp;Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions, returning true upon success and false if no space is currently available.&nbsp;Optionally, wait upto the specified wait time for space to become available.</p>
<p style="text-align: justify;"><strong>poll</strong>:&nbsp;Retrieves and removes the head of this queue, waiting up to the specified wait time if necessary for an element to become available.</p>
<p style="text-align: justify;"><strong>put</strong>:&nbsp;Inserts the specified element into this queue, waiting if necessary for space to become available.</p>
<p style="text-align: justify;"><strong>take</strong>:&nbsp;Retrieves and removes the head of this queue, waiting if necessary until an element becomes available.</p>
<p style="text-align: justify;">A BlockingQueue does not accept null elements. Implementations throw <strong>NullPointerException</strong> on attempts to <em>add</em>, <em>put</em> or <em>offer</em> a null. A null is used as a sentinel value to indicate failure of poll operations. A BlockingQueue may be capacity bounded. At any given time it may have a <strong>remainingCapacity</strong> beyond which no additional elements can be put without blocking. A BlockingQueue without any intrinsic capacity constraints always reports a remaining capacity of <strong>Integer.MAX_VALUE</strong>.</p>
<p style="text-align: justify;">BlockingQueue implementations are designed to be used primarily for producer-consumer queues, but additionally support the <strong>Collection</strong> interface. So, for example, it is possible to remove an arbitrary element from a queue using <strong>remove(x)</strong>. However, such operations are in general not performed very efficiently, and are intended for only occasional use, such as when a queued message is cancelled.</p>
<p style="text-align: justify;">BlockingQueue implementations are <em>thread-safe</em>. All queuing methods achieve thread-safety atomically using internal locks or other forms of concurrency control. However, the bulk Collection operations <strong>addAll</strong>, <strong>containsAll</strong>, <strong>retainAll</strong> and <strong>removeAll</strong> are not necessarily performed atomically unless specified otherwise in an implementation. So it is possible, for example, for addAll(c) to fail (throwing an exception) after adding only some of the elements in c.</p>
<p style="text-align: justify;">A BlockingQueue does not intrinsically support any kind of "close" or "shutdown" operation to indicate that no more items will be added. The needs and usage of such features tend to be implementation-dependent. For example, a common tactic is for producers to insert special end-of-stream or poison objects, that are interpreted accordingly when taken by consumers.</p>
<p style="text-align: justify;">Usage example, based on a typical producer-consumer scenario. Note that a BlockingQueue can safely be used with multiple producers and multiple consumers.&nbsp;</p>
<pre>class Producer implements Runnable {
   private final BlockingQueue queue;
   Producer(BlockingQueue q) { queue = q; }
   public void run() {
     try {
       while (true) { queue.put(produce()); }
     } catch (InterruptedException ex) { ... handle ...}
   }
   Object produce() { ... }
 }

 class Consumer implements Runnable {
   private final BlockingQueue queue;
   Consumer(BlockingQueue q) { queue = q; }
   public void run() {
     try {
       while (true) { consume(queue.take()); }
     } catch (InterruptedException ex) { ... handle ...}
   }
   void consume(Object x) { ... }
 }

 class Setup {
   void main() {
     BlockingQueue q = new SomeQueueImplementation();
     Producer p = new Producer(q);
     Consumer c1 = new Consumer(q);
     Consumer c2 = new Consumer(q);
     new Thread(p).start();
     new Thread(c1).start();
     new Thread(c2).start();
   }
 }</pre>
<ol>
<li style="text-align: justify;"><strong>ArrayBlockingQueue</strong>
<p>A bounded blocking queue backed by an array. This queue orders elements FIFO (first-in-first-out). New elements are inserted at the tail of the queue, and the queue retrieval operations obtain elements at the head of the queue. This is a classic "bounded buffer", in which a fixed-sized array holds elements inserted by producers and extracted by consumers. Once created, the capacity cannot be changed. Attempts to put an element into a full queue will result in the operation blocking; attempts to take an element from an empty queue will similarly block.</p>
<p>This class supports an optional fairness policy for ordering waiting producer and consumer threads. By default, this ordering is not guaranteed. However, a queue constructed with fairness set to true grants threads access in FIFO order. Fairness generally decreases throughput but reduces variability and avoids starvation.</p>
</li>
<li style="text-align: justify;"><strong>LinkedBlockingQueue</strong>
<p>An optionally-bounded blocking queue based on linked nodes. This queue orders elements FIFO (first-in-first-out). New elements are inserted at the tail of the queue, and the queue retrieval operations obtain elements at the head of the queue. Linked queues typically have higher throughput than array-based queues but less predictable performance in most concurrent applications. The optional capacity bound constructor argument serves as a way to prevent excessive queue expansion. The capacity, if unspecified, is equal to Integer.MAX_VALUE. Linked nodes are dynamically created upon each insertion unless this would bring the queue above capacity.</p>
</li>
<li><strong>PriorityBlockingQueue</strong>
<p style="text-align: justify;">An unbounded blocking queue that uses the same ordering rules as class PriorityQueue and supplies blocking retrieval operations. While this queue is logically unbounded, attempted additions may fail due to resource exhaustion (causing OutOfMemoryError). This class does not permit null elements. A priority queue relying on natural ordering also does not permit insertion of non-comparable objects (doing so results in ClassCastException). Operations on this class make no guarantees about the ordering of elements with equal priority.</p>
<p style="text-align: justify;">This class and its iterator implement all of the optional methods of the Collection and Iterator interfaces. The Iterator provided in method iterator() is not guaranteed to traverse the elements of the PriorityBlockingQueue in any particular order. If you need ordered traversal, consider using Arrays.sort(pq.toArray()). Also, method drainTo can be used to remove some or all elements in priority order and place them in another collection.</p>
</li>
</ol>
		*/}.toString().slice(14,-3)
	},
	
	{	/* ConcurrentHashMap */
		id : 17,
		"text" : function(){/*
<p><a href="https://www.quora.com/How-concurrent-hashmap-works-in-java" target="_blank">https://www.quora.com/How-concurrent-hashmap-works-in-java</a></p>
<p><a href="http://opensourceforgeeks.blogspot.in/2017/05/how-concurrenthashmap-works-internally.html" target="_blank">http://opensourceforgeeks.blogspot.in/2017/05/how-concurrenthashmap-works-internally.html</a></p>
<p><a href="http://grepcode.com/file/repository.grepcode.com/java/root/jdk/openjdk/6-b14/java/util/concurrent/ConcurrentHashMap.java#ConcurrentHashMap.Segment" target="_blank">http://grepcode.com/file/repository.grepcode.com/java/root/jdk/openjdk/6-b14/java/util/concurrent/ConcurrentHashMap.java#ConcurrentHashMap.Segment</a></p>
		*/}.toString().slice(14,-3)
	},

	{	/* CountDownLatch */
		id : 18,
		"text" : function(){/*

<p><b>CountDownLatch</b> is a concurrency construct that allows one or more threads to wait for a given set of operations to complete.
Simply put, a CountDownLatch has a <b>counter</b> field, which you can decrement as we require. We can then use it to block a calling
thread until it's been <b>counted down to zero</b>. This count is decremented by calls to the countDown() method</p>

<code>CountDownLatch latch = new CountDownLatch(3);</code>

<p>We can instantiate the <b>CountDownLatch</b> with the same value for the counter as a number of threads we want to work across.
Then, we could just call <code>countdown()</code> after each thread finishes, guaranteeing that a dependent thread calling <code>await()</code>
will be blocked until the worker threads are finished (until the count reaches zero).</p>

<p>CountDownLatch can be used to monitor the completion of the Children Threads if the size of the created children is known forehand.
CountDownLatch enables a Thread or Threads to wait for completion of Children Threads. But there is no waiting amongst the Children
until they finish each others tasks. Children may execute asynchronously and after their work is done will exit making a countdown.</p>

<p><b>Practical Example :</b> Main thread creates 10 Database Connections and Creates 10 different Threads and assigns those DB connection
to the threads one each. But the Main thread must wait until all 10 Threads finish their DB Operation before closing the DB Connections.
Children will exit after performing the DB Operation. A CountDownLatch can be used in this scenario.</p>

<pre>
public class CountDownLatchExample {
    private static final int COUNT = 5;

    public static void main(String[] args) throws Exception {
        CountDownLatch latch = new CountDownLatch(COUNT);

        System.out.println("Spawning Threads");
        for (int i = 0; i &lt; COUNT; i++) {
            new Worker(latch, String.format("Thread-%d", i));
        }
        System.out.println("Spawning Finished");
        System.out.println("Waiting All Threads to Finish");

        latch.await(); // Await is void
        System.out.println("All Threads are Finished");
    }
}
</pre>

<pre>
public class Worker implements Runnable {
    private final CountDownLatch countDownLatch;
    private final String name;
    private static final Random random = new Random();

    public Worker(CountDownLatch countDownLatch, String name) {
        this.name = name;
        this.countDownLatch = countDownLatch;
        new Thread(this).start();
    }

    public void run() {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
            System.out.printf("\t%s : Doing Some Work on %s\n", getFormattedDate(sdf), name);
            sleep();
            System.out.printf("\t\t%s : Doing Some more work on %s\n", getFormattedDate(sdf), name);
            sleep();
            System.out.printf("\t%s : Finished work on %s\n", getFormattedDate(sdf), name);

            countDownLatch.countDown();
            System.out.printf("\t%s : Count Down Latch count on %s is %d\n", getFormattedDate(sdf), name, countDownLatch.getCount());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private String getFormattedDate(SimpleDateFormat sdf) {
        return sdf.format(new Date());
    }

    private void sleep() {
        try {
            Thread.sleep(random.nextInt(5) * 1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	
	{	/* CyclicBarrier */
		id : 19,
		"text" : function(){/*

<p>A <b>CyclicBarrier</b> is a synchronizer that allows a set of threads to wait for each other to reach a common execution point,
also called a <b>barrier</b>. The barrier is called cyclic because it can be re-used after the waiting threads are released.</p>

<code>public CyclicBarrier(int parties)</code>

<p>The threads (parties) that need to synchronize their execution invoke the <code>await()</code> method to register that a certain thread has reached the barrier point.</p>

<code>CyclicBarrier barrier = new CyclicBarrier(2);</code>
<code>barrier.await();</code>

<p>This call is synchronous and the thread calling this method suspends execution till a specified number of threads have invoked
the same method on the barrier. This situation where the required number of threads have called await(), is called <b>tripping the barrier</b>.</p>

<p>Optionally, we can pass the second argument to the constructor, which is a <b>Runnable</b> instance. This has logic that would be run by the last thread that trips the barrier:</p>


<code>public CyclicBarrier(int parties, Runnable barrierAction)</code>

<p>CyclicBarrier can be used to create a set of parties if their count is known forehand. CyclicBarrier can be used to implement waiting amongst party-threads until all of them finish. This is useful where parallel threads needs to perform a job which requires sequential execution. For example 10 Threads doing steps 1, 2, 3 but all 10 Threads should finish step one before any can do step 2. Cyclic barrier can be reset after all Threads are finished execution. This is a distinguishing feature from a CountDownLatch. A CountDownLatch can only be used for a single count down. Additionally a CyclicBarrier can be assigned an Additional Thread which executes each time all the Children Threads finish their respective tasks.</p>

<p><b>Practical Example :</b> Processing of a Image Pixels Matrix row by row in the first step and in the second step saving the Pixel values to file row by row. In this scenario if there are 10 Threads running simultaneously to process the matrix row by row then all 10 should wait until all are finished before they move on to the next step which is saving those rows to file.</p>

<pre>
public class CyclicBarrierExample {
    private static final int PARTY_COUNT = 5;

    public static void main(String[] args) {
        CyclicBarrier cyclicBarrier = new CyclicBarrier(PARTY_COUNT, new BarrierAction());

        System.out.println("Spawning Threads");
        for (int i = 0; i &lt; PARTY_COUNT; i++) {
            new Worker(cyclicBarrier, String.format("Thread-%d", i));
        }
        System.out.println("Spawning Finished");
    }

    private static class BarrierAction implements Runnable {
        private int count = 1;

        public void run() {
            System.out.printf("Cyclic Barrier Finished %d\n", count++);
        }
    }
}
</pre>


<pre>
public class Worker implements Runnable {
    private final CyclicBarrier cyclicBarrier;
    private final String name;
    private static final Random random = new Random();

    public Worker(CyclicBarrier cyclicBarrier, String name) {
        this.name = name;
        this.cyclicBarrier = cyclicBarrier;
        new Thread(this).start();
    }

    public void run() {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

            System.out.printf("\t\t%s : Doing Step 1 Work on %s\n", getFormattedDate(sdf), name);
            sleep();
            System.out.printf("\t\t%s : Doing Step 1 more work on %s\n", getFormattedDate(sdf), name);
            sleep();
            System.out.printf("\t\t%s : Finished Step 1 work on %s\n", getFormattedDate(sdf), name);

            int count = cyclicBarrier.await(); // Await returns an int which is the arrival index 1 means first 0 means last
            System.out.printf("\t%s : Cyclic Barrier count on %s is %d\n", getFormattedDate(sdf), name, count);
            if (count == 0) {
                cyclicBarrier.reset();
            }

            System.out.printf("\t\t%s : Doing Step 2 Batch of Work on %s\n", getFormattedDate(sdf), name);
            sleep();
            System.out.printf("\t\t%s : Doing Some more Step 2 Batch of work on %s\n", getFormattedDate(sdf), name);
            sleep();
            System.out.printf("\t\t%s : Finished Step 2 Batch of work on %s\n", getFormattedDate(sdf), name);

            count = cyclicBarrier.await();
            System.out.printf("\t%s : Cyclic Barrier count end of Step 2 Batch of work on %s is %d\n", getFormattedDate(sdf), name, count);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private String getFormattedDate(SimpleDateFormat sdf) {
        return sdf.format(new Date());
    }

    private void sleep() {
        try {
            Thread.sleep(random.nextInt(5) * 1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}
</pre>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Semaphore */
		id : 20,
		"text" : function(){/*
<p><b>java.util.concurrent.Semaphore</b> is a counting semaphore, i.e., it has two main methods: </br>
1. <b>acquire()</b> </br>
2. <b>release()</b></p>

<p>The counting semaphore is initialized with a given number of <b>permits</b>. For each call to <code>acquire()</code> a
permit is taken by the calling thread. For each call to <code>release()</code> a permit is returned to the semaphore. Thus,
at most N threads can pass the <code>acquire()</code> method without any <code>release()</code> calls, where N is the number
of permits the semaphore was initialized with. The permits are just a simple counter.</p>

<p>Semaphores typically has two uses:</br>
1. To guard a critical section against entry by more than N threads at a time.</br>
2. To send signals between two threads.</p>

<p>Semaphore can be used to create a set of Children Threads even when the size of the Threads to be created is not known
beforehand. This is because a Semaphore can wait until a number of releases have been made but that number is not required
to initialize the Semaphore. Semaphores can be used in other scenarios such as Synchronizing between different threads such
as Publisher, Subscriber scenario.</p>

<p>No guarantees are made about <b>fairness</b> of the threads acquiring permits from the Semaphore, i.e., there is no
guarantee that the first thread to call acquire() is also the first thread to obtain a permit. If the first thread is
blocked waiting for a permit, then a second thread checking for a permit just as a permit is released, may actually
obtain the permit ahead of thread 1.</p>

<p>If you want to enforce fairness, the Semaphore class has a constructor that takes a boolean telling if the semaphore should
enforce fairness. Enforcing fairness comes at a performance/concurrency-penalty, so don't enable it unless you need it.</p>

<code>Semaphore semaphore = new Semaphore(1, true);</code>

<p><b>Practical Example :</b> Traversing through a folder with sub folders within sub folders and if JPEG files are found,
move them to a destination directory and then zip them. In this scenario the folder traversing is done recursively until a
JPEG file is found. And then a Thread is invoked to move it to destination directory. But zipping needs to wait until all
JPEG files are moved to the destination directory. In this scenario, the count of JPEG files available in the folder structure
is not known but the zipping needs to wait till all files are successfully moved. Ideal scenario for a Semaphore based waiting.</p>

<pre>
public class SemaphoreExample {
    private static final int MAX_THREADS = 5;

    public static void main(String[] args) throws Exception {
        Semaphore semaphore = new Semaphore(0);
        System.out.println("Spawning Threads");
        int threadCount = 0;
        Random random = new Random();

        for(int i=0;i&lt;MAX_THREADS;i++) {
            // Threads created will not always be MAX_THREADS
            // Because Threads are created only if Random no is Even.
            // Thus the No of Threads unknown at Semaphore Initialization
            if(random.nextInt(9999) % 2 == 0) {
                new Worker(semaphore, String.format("Thread-%d", i));
                threadCount++;
            }
        }
        System.out.println("Spawning Finished");
        System.out.println("Waiting All Threads to Finish");
        semaphore.acquire(threadCount);
        System.out.println("All Threads are Finished");
    }
}
</pre>

<pre>
public class Worker implements Runnable {
    private final Semaphore semaphore;
    private final String name;
    private static final Random random = new Random();

    public Worker(Semaphore semaphore, String name) {
        this.name = name;
        this.semaphore = semaphore;
        new Thread(this).start();
    }

    public void run() {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
            System.out.printf("\t%s : Doing Some Work on %s\n", getFormattedDate(sdf), name);
            sleep();
            System.out.printf("\t\t\t%s : Doing Some more work on %s\n", getFormattedDate(sdf), name);
            sleep();
            System.out.printf("\t%s : Finished work on %s\n", getFormattedDate(sdf), name);

            semaphore.release();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }

    private String getFormattedDate(SimpleDateFormat sdf) {
        return sdf.format(new Date());
    }

    private void sleep() {
        try {
            Thread.sleep(random.nextInt(5) * 1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	
	{	/* ThreadLocal */
		id : 21,
		"text" : function(){/*
<p>The class <code>java.lang.ThreadLocal</code> gives us the ability to store data that will be accessible only by a specific thread — and simply wrap it within a special type of object.</p>
<pre>
ThreadLocal&lt;Integer&gt; threadLocalValue = new ThreadLocal&lt;&gt;();
threadLocalValue.set(1);
Integer result = threadLocalValue.get();
</pre>

<p>We can construct an instance of the ThreadLocal by using the <code>withInitial()</code> static method and passing a supplier to it:</p>
<pre>
ThreadLocal&lt;Integer&gt; threadLocal = ThreadLocal.withInitial(() -&gt; 1);
</pre>

<p>To remove the value from the ThreadLocal, we can call the <codee>remove()</code> method:</p>
<pre>
threadlocal.remove();
</pre>

<p style="text-align: justify;">Reference:&nbsp;<a href="https://www.baeldung.com/java-threadlocal" target="_blank">An Introduction to ThreadLocal in Java</a></p>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Fork-Join Framework */
		id : 22,
		"text" : function(){/*
<p>The <b>java.util.concurrent.ForkJoinPool</b> is similar to the <b>ExecutorService</b> but with one difference. The ForkJoinPool makes
it easy for tasks to split their work up into smaller tasks which are then submitted to the ForkJoinPool too</p>

<p>Tasks can keep splitting their work into smaller subtasks for as long as it makes to split up the task. The limit for when it makes
sense to fork a task into subtasks is also called a <b>threshold</b></p>

<p>The <b>fork</b> and <b>join</b> principle consists of two steps which are performed recursively:</br>
1. <b>Fork step —</b> tasks split themselves into smaller subtasks which can be executed in parallel by different CPU, or different threads on the same CPU</br>
2. <b>Join step —</b> Once the subtasks have finished executing, the task may merge all the results into one result. If the tasks do not return a result then a task just waits for its subtasks to complete. No result merging takes place then</p>

<p>As a parameter to the ForkJoinPool constructor you pass the indicated <i>level of parallelism</i> you desire. The <i>parallelism level</i> indicates how many threads or CPUs you want to work concurrently on on tasks passed to the ForkJoinPool</p>

<code>ForkJoinPool forkJoinPool = new ForkJoinPool(4);</code>

<p>You can submit two types of tasks:</br>
1. <b>RecursiveAction —</b> a task which does not return any value. It just does some work, e.g. writing data to disk, and then exits.</br>
2. <b>RecursiveTask —</b> a task that returns a result. It may split its work up into smaller tasks, and merge the result of these smaller tasks into a collective result.</br>
</p>

<pre>
public class ForkJoinStringUppercase {

    public static void main(String[] args) {
        List&lt;String&gt; input = Arrays.asList("rahul", "neha", "tushar", "reyansh", "nitara");
        ForkJoinPool forkJoinPool = new ForkJoinPool();
        try {
            List&lt;String&gt; output = forkJoinPool.invoke(new UppercaseRecursiveTask(input));
            System.out.println(output);

            forkJoinPool.invoke(new UppercaseRecursiveAction(input));
        }finally {
            forkJoinPool.shutdown();
        }
    }
}
</pre>

<pre>
public class UppercaseRecursiveAction extends RecursiveAction {
    private final List&lt;String&gt; input;

    public UppercaseRecursiveAction(List&lt;String&gt; input) {
        this.input = input;
    }

    @Override
    protected void compute() {
        if(input.size() == 0) return;
        else if (input.size() == 1) System.out.print(input.get(0).toUpperCase() + ", ");
        else {
            int mid = input.size()/2;
            new UppercaseRecursiveAction(input.subList(0, mid)).fork();
            new UppercaseRecursiveAction(input.subList(mid, input.size())).fork();
        }
    }
}
</pre>

<pre>
public class UppercaseRecursiveTask extends RecursiveTask&lt;List&lt;String&gt;&gt; {
    private final List&lt;String&gt; input;

    public UppercaseRecursiveTask(List&lt;String&gt; input) {
        this.input = input;
    }

    @Override
    protected List&lt;String&gt; compute() {
        if (input.size() == 0) {
            return Collections.emptyList();
        } else if (input.size() == 1) {
            return Collections.singletonList(input.get(0).toUpperCase());
        } else {
            int mid = input.size() / 2;
            ForkJoinTask&lt;List&lt;String&gt;&gt; left = new UppercaseRecursiveTask(input.subList(0, mid)).fork();
            ForkJoinTask&lt;List&lt;String&gt;&gt; right = new UppercaseRecursiveTask(input.subList(mid, input.size())).fork();

            List&lt;String&gt; output = new ArrayList&lt;&gt;();
            output.addAll(left.join());
            output.addAll(right.join());
            return output;
        }
    }
}
</pre>

<p style="text-align: justify;"><b>Reference:</b>&nbsp;<a href="https://medium.com/swlh/the-unfairly-unknown-forkjoinpool-c262777def6a" target="_blank">The unfairly known ForkJoinPool</a></p>
		*/}.toString().slice(14,-3)
	},

    {   /* Completable Future */
        id : 23,
		"text" : function(){/*

<pre>
public class CompletableFutureExample {
    public static void main(String[] args) {
        HelloWorldService service = new HelloWorldService();
        long start = System.currentTimeMillis();
        System.out.println(example0(service) + " :: took " + (System.currentTimeMillis() - start) + " ms");

        start = System.currentTimeMillis();
        System.out.println(example1(service) + " :: took " + (System.currentTimeMillis() - start) + " ms");

        start = System.currentTimeMillis();
        System.out.println(example2(service) + " :: took " + (System.currentTimeMillis() - start) + " ms");
    }

    private static String example0(HelloWorldService service) {
        return service.hello().toUpperCase() + " " + service.world().toUpperCase() + "!! " + service.message() + "!";
    }

    private static String example1(HelloWorldService service) {
        return CompletableFuture.supplyAsync(service::hello)
                .thenCombine(CompletableFuture.supplyAsync(service::world), (prev, curr) -&gt; prev + " " + curr + "!!")
                .thenApply(String::toUpperCase)
                .thenCombine(CompletableFuture.supplyAsync(service::message), (prev, curr) -&gt; prev + " " + curr + "!")
                .join();
    }

    private static String example2(HelloWorldService service) {
        return CompletableFuture.supplyAsync(service::hello)
                .thenCompose(prev -&gt; CompletableFuture.supplyAsync(() -&gt; prev + " " + service.world() + "!!"))
                .thenApply(String::toUpperCase)
                .thenCompose(prev -&gt; CompletableFuture.supplyAsync(() -&gt; prev + " " + service.message() + "!"))
                .join();
    }
}
</pre>

<pre>
public class HelloWorldService {
    String hello() {
        delay(1000);
        return "Hello";
    }

    String world() {
        delay(1000);
        return "World";
    }

    String message() {
        delay(1000);
        return "What a bright and sunny day";
    }

    static void delay(int millis) {
        try {
            Thread.sleep(millis);
        } catch (InterruptedException ignored) {
        }
    }
}
</pre>

<table width="100%">
<tr><td>
<b><u>Output</u>:</b></br></br>
HELLO WORLD!! What a bright and sunny day! :: took 3049 ms</br>
HELLO WORLD!! What a bright and sunny day! :: took 1050 ms</br>
HELLO WORLD!! What a bright and sunny day! :: took 3033 ms</br>
</tr></td>
</table>

        */}.toString().slice(14,-3)
    },
	
	{	/* AtomicInteger */
		id : 24,
		"text" : function(){/*
<p><a href="http://grepcode.com/file/repository.grepcode.com/java/root/jdk/openjdk/6-b14/java/util/concurrent/atomic/AtomicInteger.java" target="_blank">JDK6: AtomicInteger.java</a></p>
		
<pre>
import sun.misc.Unsafe;

public class MyAtomicInteger {
    private static final long offset;
    private static final Unsafe unsafe = Unsafe.getUnsafe();

    static {
        try {
            offset = unsafe.objectFieldOffset(MyAtomicInteger.class.getDeclaredField("value"));
        } catch (Exception exception) {
            throw new Error(exception);
        }
    }

    private volatile int value;

    public MyAtomicInteger() {
    }

    public MyAtomicInteger(int value) {
        this.value = value;
    }

    public final int get() {
        return value;
    }

    public final void set(int value) {
        this.value = value;
    }

    public final boolean compareAndSet(int expected, int updated) {
        // invoke a NATIVE method of sun.misc.Unsafe class
        // to atomically update the value to 'updated' if it is currently holding 'expected'
        return unsafe.compareAndSwapInt(this, offset, expected, updated);
    }
	
	// more code goes here
}
</pre>

<pre>
    public final int getAndSet(int newValue) {
        for (; ; ) {
            int current = get();
            if (compareAndSet(current, newValue)) {
                return current;							// return the OLD value
            }
        }
    }
</pre>

<pre>
    public final int getAndAdd(int delta) {
        for (; ; ) {
            int current = get();
            int next = current + delta;
            if (compareAndSet(current, next)) {
                return current;							// return the OLD value
            }
        }
    }
</pre>

<pre>
    public final int addAndGet(int delta) {
        for (; ; ) {
           int current = get();
           int next = current + delta;
           if(compareAndSet(current, next)) {
               return next;							// return the NEW value
           }
        }
    }
</pre>

<pre>
    public final int getAndIncrement() {
        for (; ; ) {
            int current = get();
            int next = current + 1;
            if (compareAndSet(current, next)) {
                return current;							// return the OLD value
            }
        }
    }
</pre>

<pre>
    public final int getAndDecrement() {
        for (; ; ) {
            int current = get();
            int next = current - 1;
            if (compareAndSet(current, next)) {
                return current;							// return the OLD value
            }
        }
    }
</pre>

<pre>
    public final int incrementAndGet() {
        for (; ; ) {
            int current = get();
            int next = current + 1;
            if (compareAndSet(current, next)) {
                return next;							// return the NEW value
            }
        }
    }
</pre>

<pre>
    public final int decrementAndGet() {
        for (; ; ) {
            int current = get();
            int next = current - 1;
            if (compareAndSet(current, next)) {
                return next;							// return the NEW value
            }
        }
    }
</pre>

		*/}.toString().slice(14,-3)
	},
	
	{	/* AtomicBoolean */
		id : 25,
		"text" : function(){/*
<p><a href="http://grepcode.com/file/repository.grepcode.com/java/root/jdk/openjdk/6-b14/java/util/concurrent/atomic/AtomicBoolean.java" target="_blank">JDK6: AtomicBoolean.java</a></p>

<pre>
import sun.misc.Unsafe;

public class MyAtomicBoolean {
    private static final long offset;
    private static final Unsafe unsafe = Unsafe.getUnsafe();

    static {
        try {
            offset = unsafe.objectFieldOffset(MyAtomicBoolean.class.getDeclaredField("value"));
        } catch (Exception ex) {
            throw new Error(ex);
        }
    }

    private volatile int value;

    public MyAtomicBoolean() {
    }

    public MyAtomicBoolean(int value) {
        this.value = value;
    }

    public final boolean get() {
        return value != 0;
    }

    public final void set(boolean value) {
        this.value = value ? 1 : 0;
    }

    public final boolean compareAndSet(boolean expected, boolean updated) {
        int e = expected ? 1 : 0;
        int u = updated ? 1 : 0;
        // invoke a NATIVE method of sun.misc.Unsafe class
        // to atomically update the value to 'updated' if it is currently holding 'expected'
        return unsafe.compareAndSwapInt(this, offset, e, u);
    }

    // more code goes here
}
</pre>

<pre>
    public final boolean getAndSet(boolean newValue) {
        for (; ; ) {
            boolean current = get();
            if (compareAndSet(current, newValue)) {
                return current;							// return the OLD value
            }
        }
    }
</pre>

		*/}.toString().slice(14,-3)
	},

    {	/* Print Sequence Using Multiple Threads */
		id : 26,
		"text" : function(){/*
<pre>
public class PrintSequenceUsingMultipleThreads implements Runnable {
    private static volatile int counter = 0;
    private int n;
    private int i;

    private static final Object lock = new Object();

    public PrintSequenceUsingMultipleThreads(int n, int i) {
        this.n = n;
        this.i = i;
    }

    @Override
    public void run() {
        try {
            synchronized (lock) {
                while (true) {
                    while (counter % n != i) lock.wait();
                    System.out.println(Thread.currentThread().getName() + " :: " + counter);
                    counter++;
                    Thread.sleep(2000);
                    lock.notifyAll();
                }
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        int nThreads = 3;
        for (int i = 0; i < nThreads; i++) {
            new Thread(new PrintSequenceUsingMultipleThreads(nThreads, i)).start();
        }
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},

    {	/* Implement Traffic Signal Using Multiple Threads */
		id : 27,
		"text" : function(){/*
<pre>
public class TrafficSignal implements Runnable {
    public enum Color {RED, ORANGE, GREEN}

    private List<Color> light = Arrays.asList(Color.GREEN, Color.ORANGE, Color.RED);

    private static volatile int counter = 0;
    private int i;

    private static final Object lock = new Object();

    public TrafficSignal(Color color) {
        this.i = light.indexOf(color);
    }

    @Override
    public void run() {
        try {
            synchronized (lock) {
                while (true) {
                    while (counter % light.size() != i) lock.wait();
                    System.out.println(Thread.currentThread().getName() + " :: " + light.get(counter % light.size()));
                    counter++;
                    Thread.sleep(1000);
                    lock.notifyAll();
                }
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        new Thread(new TrafficSignal(TrafficSignal.Color.GREEN)).start();
        new Thread(new TrafficSignal(TrafficSignal.Color.ORANGE)).start();
        new Thread(new TrafficSignal(TrafficSignal.Color.RED)).start();
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
]

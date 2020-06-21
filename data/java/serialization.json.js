var serialization_que = [
	{
		id : 1,
		question : "Serialization",
		tags : ["serialization", "default serialization", "NotSerializableException"]
	},
	
	{
		id : 2,
		question : "Rules of Serialization",
		tags : ["serialization process"]
	},
	
	{
		id : 3,
		question : "ObjectOutputStream & ObjectInputStream",
		tags : ["objectOutputStream", "objectInputStream"]
	},
	
	{
		id : 4,
		question : "NotSerializableException",
		tags : ["NotSerializableException"]
	},
	
	{
		id : 5,
		question : "InvalidClassException",
		tags : ["invalidClassException", "SerialVersionUID", "no args constructor"]
	},
	
	{
		id : 6,
		question : "Custom Serialization",
		tags : ["Custom Serialization", "readObject", "writeObject", "defaultReadObject", "defaultWriteObject"]
	},
	
	{
		id : 7,
		question : "Compatible & Incompatible changes",
		tags : ["compatible changes", "incompatible changes", "serialization"]
	},
	
	{
		id : 8,
		question : "Serialization: Special methods",
		tags : ["writeObject", "writeReplace", "readObject", "validateObject", "readResolve", "readObjectNoData", "ObjectInputValidation"]
	},
	
	{
		id : 9,
		question : "Validating a deserialized Object",
		tags : ["ObjectInputValidation", "validateObject", "InvalidObjectException", "registerValidation"]
	},
	
	{
		id : 10,
		question : "Externalizable Interface",
		tags : ["Externalizable", "readExternal", "writeExternal"]
	},
	
	{
		id : 11,
		question : "Serializable Vs Externalizable",
		tags : ["serializable", "externalizable", "difference"]
	},
]

var serialization_ans = [

	{	/* Serialization */
		id : 1,
		"text" : function(){/*
<p style="text-align: justify;"><strong>Serialization</strong> is the process of encoding an object, including the objects it refers to, as a byte stream such that an equal object can be reconstructed by reading from the stream (which is referred to as <strong>deserialization</strong>). Serialization allows saving objects in files and transmitting objects over a network. In particular, technologies that support invoking the methods of an object on another host such as Java RMI use a form of serialization to implement parameter passing across the network. Fields that are marked as <strong>transient</strong> are not serialized. Serialization does not write <strong>static</strong>&nbsp;variables because they are not part of the state of the object. It also does not transmit the object's class object (e.g., its method dictionary) because the program deserializing the stream must load that class.</p>
<h4 style="text-align: justify;"><span style="color: #993300;">What is the default serialization process?</span></h4>
<p style="text-align: justify;">The Java compiler uses the default serialization mechanism for implementors of Serializable. It stores all <em>non-transient instance variables</em>&nbsp;that are serializable objects or primitive types, and all such variables inherited from serializable ancestors. If an object includes&nbsp;a non-primitive field and that field refers to an instance of a non-serializable class,&nbsp;the object stream methods will throw&nbsp;<strong>NotSerializableException</strong>&nbsp;(runtime exception) when attempting to write or read an instance.</p>
<p style="text-align: justify;"><span style="color: #993300;"><strong>What will happen if one of the members in the class doesn't implement Serializable interface?</strong></span></p>
<p style="text-align: justify;">If you try to serialize an object which implements Serializable, but the object includes a reference to an object that does not implement Serializable interface, then a <strong>NotSerializableException</strong> will be thrown at runtime.&nbsp;</p>
<p style="text-align: justify;"><span style="color: #993300;"><strong>If a class is Serializable but its super class is not, what will be the state of the instance variables inherited from super class after deserialization?</strong></span></p>
<p style="text-align: justify;">Serialization process only continues in object hierarchy till the class is Serializable, i.e., implements Serializable interface, and values of the instance variables inherited from super-class will be initialized by calling <strong>no-args constructor</strong> of non-Serializable super-class during deserialization process. Once the constructor chaining is started it wouldn't be possible to stop that, hence even if classes higher in hierarchy implements Serializable interface, their constructor will be executed.</p>
<p style="text-align: justify;"><span style="color: #993300;"><strong>Can you Customize Serialization process or can you override default Serialization process in Java?</strong></span></p>
<p style="text-align: justify;">Yes. We all know that for serializing an object <strong>ObjectOutputStream.writeObject(saveThisobject)</strong> is invoked and for reading an object <strong>ObjectInputStream.readObject()</strong> is invoked but there is one more thing which JVM provides you is to define these two method in your class. If you define these two methods in your class then JVM will invoke these two methods instead of applying default serialization mechanism. You can customize behavior of object serialization or deserialization here by doing any kind of pre or post processing task. Important point to note is making these methods private to avoid being inherited, overridden or overloaded. Since only JVM can call private method, integrity of your class will remain and Java Serialization will work as normal.</p>
<p style="text-align: justify;"><span style="color: #993300;"><strong>Suppose super-class of a new class implement Serializable interface, how can you avoid new class to being serialized?</strong></span></p>
<p style="text-align: justify;">If super-Class of a class already implements <strong>Serializable</strong> interface then its already serializable in Java. Since you cannot unimplement an interface its not really possible to make it non-serializable but yes there is a way to avoid serialization of new class. To avoid serialization you need to implement <strong>writeObject()</strong> and <strong>readObject()</strong> method in your class and need to throw <strong>NotSerializableException</strong> from these method.</p>
<p style="text-align: justify;">&nbsp;</p>
<p style="text-align: justify;">&nbsp;</p>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Rules of Serialization */
		id : 2,
		"text" : function(){/*
<h4 style="text-align: justify;">Rules of Serialization process</h4>
<ol style="text-align: justify;">
<li>An object is serializable only if its class or its superclass implements <strong>Serializable</strong> or <strong>Externalizable</strong> interface.</li>
<li>An object is serializable even if its superclass is not. However, the first superclass in the hierarchy of the serializable class, that does not implements Serializable interface MUST have a <em>no-arg constructor</em>. If this is violated, <strong>readObject()</strong> will produce a <strong>java.io.InvalidClassException</strong> in runtime.</li>
<li>The no-arg contructor of every non-serializable superclass will run when an object is <em>deserialized</em>. However, the deserializing object's constructor does not run when it is deserialized.</li>
<li>The class must be visible at the point of serialization.</li>
<li>All <em>primitive </em>types are serializable.</li>
<li><strong>Transient</strong> fields are NOT serialized. A class that implements Serializable must mark transient fields of classes that do not support serialization.</li>
<li><strong>Static</strong> fields are NOT serialized.</li>
<li>If member variables of a serializable object reference to a non-serializable object, the code will compile but a <strong>RuntimeException</strong> will be thrown.</li>
</ol>
		*/}.toString().slice(14,-3)
	},
	
	{	/* ObjectOutputStream & ObjectInputStream */
		id : 3,
		"text" : function(){/*
<p>Suppose that the variable <strong>appointments</strong> refers to a <strong>HashMap&lt;Date, String&gt;</strong> object. We can serialize&nbsp;the map to a file as follows:</p>
<pre>	try {
		OutputStream os = new FileOutputStream("appointments.ser");
		ObjectOutputStream oos = new ObjectOutputStream(os);
		// writing an object to a file
		oos.writeObject(appointments);
		oos.flush();
		oos.close();
		
	} catch (IOException e) {
		e.printStackTrace();
	}
</pre>
<p>By convention, the filename extension ser is used for serialized object files. This simple technique works because the classes <strong>HashMap</strong>, <strong>Date</strong>, and <strong>String</strong> are <em>Serializable</em>. To read the <strong>HashMap</strong>&nbsp;from the file back into memory is just as simple:</p>
<pre>	
	try {
		InputStream is = new FileInputStream("appointments.ser");
		ObjectInputStream ois = new ObjectInputStream(is);
		// reading an object from a file
		appointments = (Map&lt;Date, String&gt;) ois.readObject();
		ois.close();

	} catch (IOException e) {
		e.printStackTrace();
	} catch (ClassNotFoundException e) {
		e.printStackTrace();
	}
</pre>
<p>The cast to <strong>HashMap</strong> is necessary because the return type of <strong>readObject</strong> must be Object to accomodate all classes. Note that if the same string object had been associated with more than one key in the original hash table written to the file, that relationship would be preserved in the object read from the file. Note also that constructors are not used for deserialization: if there are validations or calculations in a class's constructor that must be done when creating an instance, you can provide tha implementation of&nbsp;<strong>readObject</strong>.</p>
<p>&nbsp;</p>
		*/}.toString().slice(14,-3)
	},
	
	{	/* NotSerializableException */
		id : 4,
		"text" : function(){/*
<p>If an object includes a non-primitive field and that field refers to an instance of a <em>non-serializable</em> class, the object stream methods will throw <strong>NotSerializableException</strong> (runtime exception) when attempting to <strong>write</strong> that&nbsp;instance.</p>
<pre>class Person {
	private String name;

	Person() {
	}

	public Person(String n) {
		name = n;
	}

	public String getName() {
		return name;
	}
}
</pre>
<pre>class Employee extends Person implements Serializable {

	int empId;
	Address address;

	public Employee(int id, String name, String addr) {
		super(name);
		empId = id;
		address = new Address(addr);
	}

	public int getEmpId() {
		return empId;
	}
}
</pre>
<pre>// Address does not implement Serializable interface
class Address {

	String street;

	public Address() {
	}

	public Address(String s) {
		street = s;
	}
}
</pre>
<p>If you try to serialize an object of <strong>Employee</strong>:</p>
<pre>public static void main(String[] args) {

	try {
		OutputStream os = new FileOutputStream("employee.ser");
		ObjectOutputStream oos = new ObjectOutputStream(os);
		oos.writeObject(new Employee1(101, "Rahul Mittal", "Mumbai"));
		oos.flush();
	} catch (FileNotFoundException e1) {
		e1.printStackTrace();
	} catch (IOException e) {
		e.printStackTrace();
	}
}
</pre>
<p>It will give <strong>NotSerializableException</strong>:</p>
<pre>java.io.NotSerializableException: com.rahul.serialization.Address
	at java.io.ObjectOutputStream.writeObject0(ObjectOutputStream.java:1164)
	at java.io.ObjectOutputStream.defaultWriteFields(ObjectOutputStream.java:1518)
	at java.io.ObjectOutputStream.writeSerialData(ObjectOutputStream.java:1483)
	at java.io.ObjectOutputStream.writeOrdinaryObject(ObjectOutputStream.java:1400)
	at java.io.ObjectOutputStream.writeObject0(ObjectOutputStream.java:1158)
	at java.io.ObjectOutputStream.writeObject(ObjectOutputStream.java:330)
	at com.rahul.serialization.SerializationDemo.main(SerializationDemo.java:20)
</pre>
		*/}.toString().slice(14,-3)
	},
	
	{	/* InvalidClassException */
		id : 5,
		"text" : function(){/*
<p>There are 2 main causes of <strong>InvalidClassException</strong>:</p>
<ol>
<li><span style="color: #993300;"><strong>SerialVerionUID mismatch:</strong></span>
<p style="text-align: justify;">The serialization runtime associates with each serializable class a <em>version number</em>, called a <strong>serialVersionUID</strong>, which is used during deserialization to verify that the sender and receiver of a serialized object have loaded classes for that object that are compatible with respect to serialization. If a serializable class does not explicitly declare a serialVersionUID, then the serialization runtime will calculate a default serialVersionUID value for that class based on various aspects of the class, as described in the Java Serialization Specification (usually the hashcode of the object).</p>
<p style="text-align: justify;">Consequence of not specifying SerialVersionUID is that when you add or modify any field in class then already serialized class will not be able to recover because SerialVersionUID generated for new class and for old serialized object will be different. Java serialization process relies on correct serialVersionUID for recovering state of serialized object and throws <strong>java.io.InvalidClassException</strong> in case of serialVersionUID mismatch. Therefore, to guarantee a consistent serialVersionUID value across different java compiler implementations, a serializable class must declare an explicit serialVersionUID value. It is also strongly advised that explicit serialVersionUID declarations use the private modifier where possible, since such declarations apply only to the immediately declaring class--serialVersionUID fields are not useful as inherited members.</p>
</li>
<li><span style="color: #993300;"><strong>No-arg constructor missing:</strong></span><br />
<p>Let's say there is a parent class <strong>Person</strong>:</p>
<pre>class Person {

	String name;

	// The no-arg constructor is missing
	// Person(){}

	public Person(String n) {
		name = n;
	}

	public String getName() {
		return name;
	}

}
</pre>
<p>And there is a class <strong>Emloyee</strong> that extends <strong>Person</strong> class:</p>
<pre>class Employee extends Person implements Serializable {

	int empId;

	public Employee(int id, String name) {
		super(name);
		empId = id;
	}

	public int getEmpId() {
		return empId;
	}
}
</pre>
<p>If you try to deserialize an Employee object:</p>
<pre>	public static void main(String[] args) {
		// serialize Employee
		try {
			OutputStream os = new FileOutputStream("employee.ser");
			ObjectOutputStream oos = new ObjectOutputStream(os);
			oos.writeObject(new Employee(101, "Rahul Mittal"));
			oos.flush();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		// deserialize Employee
		try {
			InputStream is = new FileInputStream("employee.ser");
			ObjectInputStream ois = new ObjectInputStream(is);
			Employee e = (Employee) ois.readObject();
			System.out.println(e.getEmpId());
			System.out.println(e.getName());
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
</pre>
<p>it will lead to InvalidClassException:</p>
<pre>java.io.InvalidClassException: com.rahul.serialization.Employee; com.rahul.serialization.Employee; no valid constructor
	at java.io.ObjectStreamClass.checkDeserialize(ObjectStreamClass.java:713)
	at java.io.ObjectInputStream.readOrdinaryObject(ObjectInputStream.java:1732)
	at java.io.ObjectInputStream.readObject0(ObjectInputStream.java:1328)
	at java.io.ObjectInputStream.readObject(ObjectInputStream.java:350)
	at com.rahul.serialization.SerializationDemo.main(Serialization1.java:41)
Caused by: java.io.InvalidClassException: com.rahul.serialization.Employee; no valid constructor
	at java.io.ObjectStreamClass.(ObjectStreamClass.java:471)
	at java.io.ObjectStreamClass.lookup(ObjectStreamClass.java:310)
	at java.io.ObjectOutputStream.writeObject0(ObjectOutputStream.java:1114)
	at java.io.ObjectOutputStream.writeObject(ObjectOutputStream.java:330)
	at com.rahul.serialization.SerializationDemo.main(Serialization1.java:29)
</pre>
</li>
</ol>
<p>:)</p>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Custom Serialization */
		id : 6,
		"text" : function(){/*
<h4 style="text-align: justify;">Custom Serialization</h4>
<p style="text-align: justify;">If a class has a non-serializable super-class or instance variables, or requires more efficient serialization methods or other special processing, the class can implement custom serialization by defining the following methods:</p>
<pre>	private void readObject(ObjectInputStream) throws IOException, ClassNotFoundException
	private void writeObject(ObjectOutputStream) throws IOException
</pre>
<p style="text-align: justify;">In fact, <strong>HashMap</strong> defines these methods so that the empty <strong>buckets</strong> are not serialized. The methods <strong>readObject()</strong> and <strong>writeObject()</strong> are invoked by <strong>ObjectInputStream</strong> and <strong>ObjectOutputStream</strong>, respectively. The implementations of these methods call <strong>defaultReadObject()</strong> and <strong>defaultWriteObject()</strong> to use default serialization for the <em>non-transient</em> fields of the class.</p>
<p style="text-align: justify;">Custom serialization can also be used for serializing <strong>transient</strong> and even <strong>static</strong> fields. Suppose we have a class <strong>User</strong> that maintains the user's <strong>password</strong> in an instance variable, and we do not want to store the password or send it over a network without encoding it. The following example demonstrates how to customize the serialization mechanism to achieve this:</p>
<pre>public class User implements Serializable {

	protected int userId;
	protected String name;
	protected String userType;
	protected transient String password;

	private void readObject(ObjectInputStream ois) throws IOException, ClassNotFoundException {
	
		// ois.defaultReadObject();					// (1.1)
		
		userId = stream.readInt();					// (1.2)
		name = (String) stream.readObject();				// (1.3)
		userType = (String) stream.readObject();			// (1.4)
		
		password = decode((String) ois.readObject());
	}

	private void writeObject(ObjectOutputStream oos) throws IOException {
	
		// oos.defaultWriteObject();					// (2.1)
		
		oos.writeInt(userId);						// (2.2)
		oos.writeObject(name);						// (2.3)
		oos.writeObject(userType);					// (2.4)
		
		oos.writeObject(encode(password));
	}

	// implementation of encode() and decode() goes here.
}
</pre>
<p style="text-align: justify;">Note that the sequence (1.2), (1.3) and (1.4) must exactly match the sequence (2.1), (2.2) and (2.3). The methods <strong>readObject()</strong> and <strong>writeObject()</strong> could have also used the default read/write methods (1.1) and (2.1) to invoke default-serialization instead of reading/writing each non-transient field individually. The field&nbsp;<strong>password</strong> is marked <strong>transient</strong> so that the default mechanism does not serialize its value. The class defines <strong>readObject()</strong>&nbsp;to use its private <strong>decode()</strong> method when deserializing the value for the password field. The <strong>writeObject()</strong> method performs the corresponding operations in the same order.</p>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Compatible & Incompatible changes */
		id : 7,
		"text" : function(){/*
<p style="text-align: justify;">&nbsp;Below are the <strong>compatible</strong> and <strong>incompatible</strong> changes that should be considered while serializing an object:</p>
<table>
<tbody>
<tr><th width="20%">Action</th><th width="40%">Compatible Change</th></tr>
<tr>
<td>Adding fields</td>
<td>During deserialization,&nbsp;a field that does not occur in the byte-stream will be initialized to its default value. If class-specific initialization is needed, the class may provide a readObject method that can initialize the field to nondefault values.</td>
</tr>
<tr>
<td>Changing a static field to non-static</td>
<td>This is equivalent to adding a new field.</td>
</tr>
<tr>
<td>Change a transient field to non-transient</td>
<td>This is equavalent to adding a new field.</td>
</tr>
<tr>
<td>Changing access-modifiers of the fields</td>
<td>The access modifiers&nbsp;<strong>public</strong>,&nbsp;<strong>default</strong>,&nbsp;<strong>protected</strong>, and&nbsp;<strong>private</strong>&nbsp;have no effect on the ability of serialization to assign values to the fields.</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table>
<tbody>
<tr><th width="20%">Action</th><th width="40%">Incompatible Change</th></tr>
<tr>
<td>Deleting fields</td>
<td>If a field is deleted in a class, the byte-stream written will not contain its value. When the byte-stream is read by an earlier class, the value of the field will be set to the default value because no value is available in the stream. However, this default value may adversely impair the ability of the earlier version to fulfill its contract.</td>
</tr>
<tr>
<td>Changing a non-static field to static</td>
<td>This is equivalent to deleting a field.</td>
</tr>
<tr>
<td>Changing a non-transient to transient</td>
<td>This is equivalent to deleting a field.</td>
</tr>
<tr>
<td>Changing the class-hierarchy</td>
<td>Moving classes up or down the hierarchy is not allowed.</td>
</tr>
<tr>
<td>Changing the type of a primitive field</td>
<td>Deserialization will fail because the type of the data in the stream does not match the type of the field.</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">When an object is deserialized, any fields not found in the byte-stream will be initialized to <strong>null</strong>. Therefore, when you <span style="color: #993300;"><strong>add </strong>a new field</span>, a <em>new version object</em> is deserialized from an <em>old version byte-stream</em>, and the new field will be initialized to null. If null is considered to be an invalid value, you can provide a <strong>readObject()</strong> method to handle conversion. Old versions can still be deserialized from the new byte-stream: the new field is just ignored.</p>
<p style="text-align: justify;"><span style="color: #993300;">If a field is <strong>deleted</strong></span>, the situation is reversed: the <em>old version class</em> will now be missing a field. The missing field will be set to null. However, unlike the previous case, the old version can't add a <strong>readObject()</strong> method (if you could add that method, then it would become the latest new version). Hence, deleting a field is considered to be <strong>incompatible</strong>. If <strong>null</strong> happens to be a valid state for the deleted field (in the old version), then there is no problem in deleting fields. However, that is probably an edge case.</p>
<p style="text-align: justify;">Reference:&nbsp;<a title="Reference" href="http://docs.oracle.com/javase/7/docs/platform/serialization/spec/version.html" target="_blank">Java Serialization Specs</a></p>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Special methods */
		id : 8,
		"text" : function(){/*
<p style="text-align: justify;">When an instance is <strong>serialized</strong>, the&nbsp;<strong>ObjectOutputStream</strong> looks for a handful of <em>special</em> methods. These are JVM hooks that can be provided to customize the Serialization process.</p>
<ol style="text-align: justify;">
<li><span style="color: #993300;">The <strong>writeObject()</strong> method</span>
<pre>private void writeObject(java.io.ObjectOutputStream out) throws IOException
</pre>
<p>This method allows to take complete control over what will be sent over the wire. In most cases, you will just call out.defaultWriteObject() to benefit from the default serialization process, then add some more data of your choice (for instance, data from the parent class) by calling out.writeDouble, out.writeUTF, etc. (inherited by ObjectOutputStream from the DataOutput interface).</p>
</li>
<li><span style="color: #993300;">The <strong>writeReplace()</strong> method</span>
<pre>ANY-ACCESS-MODIFIER Object writeReplace() throws ObjectStreamException
</pre>
<p>This method allows the developer to provide a replacement object that will be serialized instead of the original one.</p>
</li>
</ol>
<p style="text-align: justify;">Similarly, when an object is <strong>deserialized</strong>, the&nbsp;<strong>ObjectInputStream</strong> looks for the following <em>special</em> methods:</p>
<ol style="text-align: justify;">
<li><span style="color: #993300;">The <strong>readObject()</strong> method</span>
<pre>private void readObject(java.io.ObjectInputStream in) throws IOException, ClassNotFoundException
</pre>
<p>This method is the same as writeObject above, but for reading objects from the serialized stream. You can call in.defaultReadObject() to automatically read most of the data, then manually read back the extra data you may have added. Be careful to read data in the same exact order they were written in the stream.</p>
</li>
<li><span style="color: #993300;">The <strong>validateObject()</strong> method</span>
<pre>package java.io;

 // Callback interface to allow validation of objects within a graph.
 // Allows an object to be called when a complete graph of objects has been deserialized.
public interface ObjectInputValidation {
	public void validateObject() throws InvalidObjectException;
}
</pre>
<p>If the serialized object implements ObjectInputValidation, you may register it as a stream validator. Useful to verify the stream has not been tampered with, or that the data makes sense before handing it back to your application.</p>
</li>
<li><span style="color: #993300;">The <strong>readResolve()</strong> method</span>
<pre>ANY-ACCESS-MODIFIER Object readResolve() throws ObjectStreamException;
</pre>
<p>This method mirrors writeReplace : it may be used to replace the de-serialized object by another one of your choice.</p>
</li>
<li><span style="color: #993300;">The <strong>readObjectNoData()</strong> method</span>
<pre>private void readObjectNoData() throws ObjectStreamException
</pre>
<p>The readObjectNoData method is responsible for initializing the state of the object for its particular class in the event that the serialization stream does not list the given class as a superclass of the object being deserialized. This may occur in cases where the receiving party uses a different version of the deserialized instance's class than the sending party, and the receiver's version extends classes that are not extended by the sender's version. This may also occur if the serialization stream has been tampered; hence, readObjectNoData is useful for initializing deserialized objects properly despite a "hostile" or incomplete source stream.</p>
</li>
</ol>
<p style="text-align: justify;">All these methods gets executed in the following order during serialization-deserialization process:&nbsp;<span style="color: #993300;">writeReplace &nbsp;-&gt; writeObject -&gt; readObject -&gt; readResolve -&gt; validateObject</span></p>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Validating a deserialized Object */
		id : 9,
		"text" : function(){/*
<p style="text-align: justify;">At times, when an object is deserialized, it need to be checked whether the object is still valid. For example, consider an object that represents a <strong>credit-card</strong>, including cardholder's name, credit-card-number, and expiration-date. If this credit-card object is deserialized after its expiration date, then although its state is intact, the card is no longer valid and can't be used in a purchase transaction.</p>
<p style="text-align: justify;">To validate an object, you need to do two things:</p>
<ol>
<li style="text-align: justify;">Provide an object which implements the <strong>java.io.ObjectInputValidation</strong> interface</li>
<li style="text-align: justify;">Register this object with the ObjectInputStream which is reading the object</li>
</ol>
<p style="text-align: justify;">The <strong>java.io.ObjectInputValidation</strong> interface defines just the method <strong>validateObject()</strong> which is declared to throw an <strong>InvalidObjectException</strong>. Your validator object must provide an implementation for this method which checks the validity of the object and throws this exception when needed. The validator object must be <em>registered</em> with the stream during the read operation; this is usually done within a <strong>readObject()</strong> method by invoking the <strong>registerValidation()</strong> method on the <strong>ObjectInputStream</strong>, passing the stream a reference to the validator object.</p>
<pre>public class CreditCard implements Serializable, ObjectInputValidation {

	private static final long serialVersionUID = 1L;

	private String cardHolderName;

	private String cardNumber;

	private Date expiryDate;

	public CreditCard(String name, String number, Date expiry) {
		this.cardHolderName = name;
		this.cardNumber = number;
		this.expiryDate = expiry;
	}

	@Override
	public String toString() {
		return "CreditCard [cardHolderName=" + cardHolderName + ", cardNumber="
				+ cardNumber + ", expiryDate=" + expiryDate + "]";
	}

	private void readObject(java.io.ObjectInputStream in) throws IOException, ClassNotFoundException {
		in.registerValidation(this, 0);
		in.defaultReadObject();
	}

	private void writeObject(java.io.ObjectOutputStream out) throws IOException {
		out.defaultWriteObject();
	}

	public void validateObject() throws InvalidObjectException {
		if (expiryDate.compareTo(new Date()) < 0) {
			throw new InvalidObjectException("Credit Card expired");
		}
	}
}
</pre>
<pre>public class ValidationDemo {

	public static void main(String[] args) throws ParseException, IOException, ClassNotFoundException {

		Date expiryDate = new SimpleDateFormat("dd-MM-yyyy").parse("01-02-2012");
		CreditCard card = new CreditCard("Rahul Mittal", "12345", expiryDate);

		byte[] byteStream = serialize(card);
		CreditCard deserializedCard = deserialize(byteStream);
		System.out.println("Deserealized: " + deserializedCard);
	}

	public static byte[] serialize(CreditCard card) throws IOException {
		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		ObjectOutputStream out = new ObjectOutputStream(bos);
		out.writeObject(card);
		byte[] byteStream = bos.toByteArray();
		out.close();
		bos.close();

		return byteStream;
	}

	public static CreditCard deserialize(byte[] byteStream) throws IOException, ClassNotFoundException {
		ByteArrayInputStream bis = new ByteArrayInputStream(byteStream);
		ObjectInputStream in = new ObjectInputStream(bis);
		CreditCard card = (CreditCard) in.readObject();
		in.close();
		bis.close();

		return card;
	}
}
</pre>
<p><span style="text-decoration: underline;"><strong>Output:</strong></span></p>
<pre>Exception in thread "main" java.io.InvalidObjectException: Credit Card expired
	at validate.CreditCard.validateObject(CreditCard.java:49)
	at java.io.ObjectInputStream$ValidationList$1.run(ObjectInputStream.java:2206)
	at java.security.AccessController.doPrivileged(Native Method)
	at java.io.ObjectInputStream$ValidationList.doCallbacks(ObjectInputStream.java:2202)
	at java.io.ObjectInputStream.readObject(ObjectInputStream.java:357)
	at validate.ValidationDemo.deserialize(ValidationDemo.java:41)
	at validate.ValidationDemo.main(ValidationDemo.java:22)
</pre>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Externalizable Interface */
		id : 10,
		"text" : function(){/*
<p>In most real time scenarios, you can use Serializable and write your own custom implementation for serialization by providing readObject() and writeObject() methods.</p>
<p>You may need Externalizable if:</p>
<ol>
<li>You are not happy with the way java writes/reads objects from stream.</li>
<li>Special handling for super-types on object construction during serialization.</li>
</ol>
<p>Here is the definition of <strong>Externalizable</strong> interface:</p>
<pre>package java.io;

import java.io.ObjectOutput;
import java.io.ObjectInput;

public interface Externalizable extends java.io.Serializable {
    void writeExternal(ObjectOutput out) throws IOException;
    void readExternal(ObjectInput in) throws IOException, ClassNotFoundException;
}</pre>
<p>Reference:&nbsp;<a title="Reference" href="http://www.jusfortechies.com/java/core-java/externalization.php" target="_blank">Externalization</a></p>
		*/}.toString().slice(14,-3)
	},
	
	{	/* Serializable Vs Externalizable */
		id : 11,
		"text" : function(){/*
<p>Difference between <strong>Externalizable</strong> and <strong>Serializable</strong> interfaces:</p>
<table>
<tbody>
<tr><th width="50%">Externalizable&nbsp;Interface</th><th width="50%">Serializable&nbsp;Interface</th></tr>
<tr>
<td>Externalizable <strong>extends</strong> Serializable and provides 2 methods - <strong>readExternal()</strong> and <strong>writeExternal()</strong>. Gives flexibility to control serialization process instead of relying on default serialization.</td>
<td>Serializable is a <strong>marker</strong> interface and doesn't have any methods. When a&nbsp;class implements Serializable&nbsp;its an indication to the compiler that the <strong>default serialization mechanism</strong> should be used to serialize this object.</td>
</tr>
<tr>
<td>Use of Externalizable interface is really effective when you want to serialize only a few attributes out of many. When you have a <em>big object</em> having hundreds of properties and you want to serialize only a dozen of them, marking all of the rest as transient would be an over-kill. Instead, use Externalizable interface and selectively serialize only the chosen ones.</td>
<td>When serializing a <em>small object</em> having few properties, and you want to serialize most of them except a few, you can perform selective property serialization by implementing Serializable interface&nbsp;with those properties&nbsp;marked as <strong>transient</strong> that are not to be serialized.</td>
</tr>
<tr>
<td>Externalizable is an interface that enables you to define custom rules and your own mechanism for serialization.</td>
<td>Serializable defines standard protocol and provides out of the box serialization capabilities.</td>
</tr>
<tr>
<td>&nbsp;Externalizable extends Serializable.</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Implement writeExternal and readExternal methods of the Externalizable interface and create your own contract / protocol for serialization.</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;Saving the state of the super-types is responsibility of the implementing class.</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;The two methods readExternal() and writeExternal() supersedes the customized implementation of readObject() and writeObject().</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>During&nbsp;deserialization, the public no-arg constructor is used to reconstruct the object.</td>
<td>During deserialization,&nbsp;instead of using constructor, the object is re-constructed using data read from ObjectInputStream.</td>
</tr>
<tr>
<td>&nbsp;Externalizable object must have a public no-arg constructor.</td>
<td>Not mandatory</td>
</tr>
</tbody>
</table>
		*/}.toString().slice(14,-3)
	},

]
var solid_que = [
    {
        id : 1,
        question : "Single Responsibility Principle",
        tags : ["Single Responsibility Principle", "SOLID"]
    },

    {
        id : 2,
        question : "Open Closed Principle",
        tags : ["Open Closed Principle", "SOLID"]
    },

    {
        id : 3,
        question : "Liskov Substitution principle",
        tags : ["Liskov Substitution principle", "SOLID"]
    },

    {
        id : 4,
        question : "Interface Segregation Principle",
        tags : ["Interface Segregation Principle", "SOLID"]
    },

    {
        id : 5,
        question : "Dependency Inversion Principle",
        tags : ["Dependency Inversion Principle", "SOLID"]
    },
];

var solid_ans = [
    {   /* Single Responsibility Principle */
        id : 1,
        "text" : function(){/*
<p style="text-align: justify;">The Single Responsibility Principle (SRP) states that <strong>a class should have only one responsibility</strong>.</p>
<p style="text-align: justify;">Take the following example class:</p>
<pre>
public class Simulation {
    public loadSimulationFile() {
        // impl goes here
    }

    public simulate() {
        // impl goes here
    }

    public convertParams() {
        // impl goes here
    }
}
</pre>
<p style="text-align: justify;">This class handles two responsibilities:</p>
<ol>
<li style="text-align: justify;">Loading the simulation data</li>
<li style="text-align: justify;">Performing the simulation algorithm — using the <code>simulate()</code> and <code>convertParams()</code> methods</li>
</ol>
<p style="text-align: justify;">A class fulfills a responsibility using one, or more than one, method. In the example above, loading the simulation data is one responsibility, and performing the simulation is another responsibility. One method is needed to load simulation data (i.e <code>loadSimulationFile()</code>). The remaining two methods are needed to perform the simulation.</p>
<p style="text-align: justify;"><strong>How do I know how many responsibilities my class has?</strong> Consider the phrase <strong><i>reason to change</i></strong> as analogous to <strong>responsibility</strong>. Hence, look for all the reasons a class has to change. If there is more than one reason to change a class then it means this class does not follow the single responsibility principle.</p>
<p style="text-align: justify;">In our example above, this class should not contain the <code>loadSimulationFile()</code> method (or loading simulation data responsibility). If we create a separate class for loading simulation data then this class will not violate this principle.</p>
<p style="text-align: justify;">A class can only have a single responsibility. <strong>How would you design software with such a hard rule?</strong></p>
<p style="text-align: justify;">Let’s consider a few principles that are closely related to SRP:</p>
<ol>
<li>
<p style="text-align: justify;"><strong>High Cohesion:</strong> gives you a subjective scale and not an objective one as in the case of SRP. Very low cohesion means a class is fulfilling many responsibilities. For example, there are more than 10 responsibilities for which a class is responsible. Low cohesion means a class is fulfilling around 5 responsibilities and moderate cohesion means a class fulfilling 3 responsibilities. High cohesion means a class is fulfilling a single responsibility. Hence, the rule of thumb while designing is to strive for high cohesion.</p>
</li>
<li>
<p style="text-align: justify;"><strong>Low Coupling:</strong> This principle states that one should assign a responsibility so that the dependency between the classes remains low. Again consider the above example class. After applying the SRP and the high cohesion principle, we have decided to make a separate class which will handle simulation files. In this way, we have created two classes which are dependent on each other.</p>
</li>
</ol>

<p style="text-align: justify;">It looks like as if applying high cohesion is causing us to violate the principle of low coupling. This level of coupling is allowed as the goal in order to <strong>minimize the coupling</strong>, but not to zero the coupling. Some degree of coupling is normal to create an object-oriented design in which tasks are completed by a collaboration of objects.</p>
<p style="text-align: justify;">On the other hand, consider a GUI class which connects to a database, handles remote clients over HTTP and handles screen layout. This GUI class is dependent upon too many classes. This GUI class clearly violates the low-coupling principle. This class cannot be re-used without involving all the related classes. Any change to database component cause changes to GUI class.</p>
    */}.toString().slice(14,-3)
    },

    {   /* Open Closed Principle */
        id : 2,
        "text" : function(){/*
<p style="text-align: justify;">The Open-Closed principle states that <strong>a software module (it can be a class or method ) should be open for extension but closed for modification</strong>.</p>
<p style="text-align: justify;">In other words, you cannot update the code that you have already written for a project, but you can add new code to the project.</p>
<p style="text-align: justify;">There are two ways by which you can apply the open-closed principle. You can apply this principle either through inheritance or through composition.</p>
<h2>OCP using inheritance</h2>
<pre>
public abstract class DataStream {
    public abstract byte[] read();
}
</pre>

<pre>
public class NetworkDataStream extends DataStream {
    public byte[] read() {
        //Read from the network
    }
}
</pre>

<pre>
public class Client {
    public void readData(DataStream ds) {
        ds.Read();
    }
}
</pre>
<p style="text-align: justify;">In the above example, the client reads data from the network stream. If I want to extend this functionality to read data from another stream, e.g. PCI data stream, then I will add another subclass using the <code>DataStream</code> class, as shown in the listing below:</p>
<pre>
public class PCIDataStream extends DataStream {
    public byte[] read() {
        //Read data from PCI
    }
}
</pre>
<p style="text-align: justify;">In this scenario, the client code will function without any error. The client class knows about the base class, and I can pass an object of any of the two subclasses of <code>DataStream</code>. In this way, the client can read data without knowing the underlying subclass. This is achieved without modifying any existing code.</p>

<h2>OCP using composition</h2>
<p style="text-align: justify;">OCP is not ensured by <strong>composition</strong>, unless your design is <strong>loosely coupled</strong>. Remember that composition is just a <strong>has-a</strong> relationship, which just says that your class has an instance of an object, but if you have to modify your code to change that instance, that doesn't follow the OCP. However if you use <strong>inversion of control (IoC)</strong>, that composition becomes loosely coupled, therefore you don't have to change the code in your class. Here is an example:</p>
<pre>
// Composition that doesn't follow the OCP
public class Bike {
    Wheel wheel = new LargeWheel();

    public void go() {
      wheel.go();
  }
</pre>

<pre>
// Composition that follows the OCP (through IoC)
public class Bike {
    Wheel wheel;

    public setWheel(Wheel wheel) {
        this.wheel = wheel;
    }

    public void go() {
        wheel.go();
    }
}
</pre>

<p style="text-align: justify;"><strong>Composition</strong> is just a <strong>has-a</strong> relationship, while inheritance Is a <strong>is-a</strong> relationship. OCP is about changing the behavior without altering the source code of a class. By themselves they don't ensure the OCP. Design patterns follow the principle through composition or/and inheritance e.g., The <strong>strategy design pattern</strong> uses <strong>composition</strong> to change behavior at <strong>runtime</strong>, while the <strong>template method pattern</strong> uses <strong>inheritance</strong> to change behavior at <strong>compile-time</strong>. So composition allows extension at runtime so while inheritance allows it at compile time.</p>
    */}.toString().slice(14,-3)
    },

    {   /* Liskov Substitution principle */
        id : 3,
        "text" : function(){/*
<p style="text-align: justify;">The Liskov Substitution Principle states that <strong>Derived classes must be substitutable for their base classes</strong>.</p>
<p style="text-align: justify;">Another way to look at this definition is that abstraction (interface or abstract class) should be enough for a client. To elaborate, let’s consider an example, here is an interface whose listing is given below:</p>
<pre>
public interface IDevice {
    void open();
    void read();
    void close();
}
</pre>
<p style="text-align: justify;">This code represents data acquisition device abstraction. Data acquisition devices differ based upon their interface types. A data acquisition device can use a USB interface, Network Interface (TCP or UDP), PCI express interface, or any other computer interface. Clients of <code>IDevice</code>, however, do not need to know what kind of device they are working with. This gives programmers an enormous amount of flexibility to adapt to new devices without changing the code which depends upon the <code>IDevice</code> interface.</p>
<p style="text-align: justify;">Let’s go into a little history when there were only two concrete classes that implemented <code>IDevice</code> interface shown below:</p>
<pre>
public class PCIDevice implements IDevice {
    public void Open() {
        // Device specific opening logic
    }
    public void Read() {
        // Reading logic specific to this device
    }
    public void Close() {
        // Device specific closing logic.
    }
}
</pre>

<pre>
public class NetWorkDevice implements IDevice {
    public void Open() {
        // Device specific opening logic
    }
    public void Read() {
        // Reading logic specific to this device
    }
    public void Close() {
        // Device specific closing logic.
    }
}
</pre>
<p style="text-align: justify;">These three methods <code>open()</code>, <code>read()</code>, and <code>close()</code> are sufficient to handle data from these devices. Later, there was a requirement to add another data acquisition device which was based upon USB Interface.</p>
<p style="text-align: justify;">The problem with a USB device is that when you open the connection, data from the previous connection remains in the buffer. Therefore, upon the first read call to the USB device, data from the previous session is returned. That behavior corrupted data for that particular acquisition session.</p>
<p style="text-align: justify;">Fortunately, a USB-based device driver provides a refresh method which clears the buffers in the USB-based acquisition device. How can I implement this feature into my code so that the code change remains minimal?</p>
<p style="text-align: justify;">One simple, but unadvised, solution is to update the code by identifying if you are calling the USB object:</p>
<pre>
public class USBDevice implements IDevice {
    public void Open() {
        // Device specific opening logic
    }
    public void Read() {
        // Reading logic specific to this device
    }
    public void Close() {
        // Device specific closing logic.
    }
}
</pre>

<pre>
// client code
public void acquire(IDevice aDevice) {
    aDevice.Open();
    // Identify if the object passed here is USBDevice class Object.
    if(aDevice.GetType() == DeviceType.USB) {
        USBDevice aUsbDevice = (USBDevice) aDevice;
        aUsbDevice.Refresh();
    }
}
</pre>
<p style="text-align: justify;">In this solution, client code is directly using the concrete class as well as the interface (or abstraction). It means abstraction is not enough for the client to fulfill its responsibilities.</p>
<p style="text-align: justify;">Another way to state the same thing is to say that the base class cannot fulfill the required behavior (refresh behavior), but the derived class does, in fact, have this behavior. Hence, the derived class is not compatible with the base class and thus the derived class cannot be substituted. Therefore, this solution violates the Liskov Substitution Principle.</p>
<p style="text-align: justify;">In the example above, the client is dependent upon more entities (iDevices and USB Devices) and any change in one entity will cause a change in other entities. Therefore, violation of the LSP causes dependency between the classes.</p>
<p style="text-align: justify;">Below I give a  solution to this problem that follows the LSP:</p>
<pre>
public interface IDevice{
    void open();
    void refresh();
    void read();
    void close();
}
</pre>
<p style="text-align: justify;">Now the client of iDevice is:</p>
<pre>
public void acquire(IDevice aDevice) {
    aDevice.open();
    aDevice.refresh();
    aDevice.acquire()
    //Remaining code..
}
</pre>
<p style="text-align: justify;">Now the client does not depend upon the concrete implementation of iDevice. Hence, in this solution, our interface (iDevice) is enough for the client.</p>
<p style="text-align: justify;">There is another angle to look at the LSP principle within the context of object-oriented analysis. To get an introduction and a simple method to apply object-oriented analysis read this. In summary, during OOA, we think about the classes and their hierarchies that could be part of our software.</p>
<p style="text-align: justify;">When we are thinking about the classes and hierarchies we can come up with classes which violate the LSP.</p>
<p style="text-align: justify;">Let’s consider the classic example of the rectangle and the square. When looking from the outset it looks like that square is a specialized version of the rectangle and a happy designer would draw the following inheritance hierarchy:</p>
<pre>
public class Rectangle {
    public void setWidth(int width){}
    public void setHeight(int height){}
}
</pre>

<pre>
public class Square extends Rectangle {
    // impl goes here
}
</pre>

<p style="text-align: justify;">What happens next is you cannot substitute a square object in place of a rectangular object. Since the square inherits from the rectangle, therefore, it inherits its method <code>setWidth()</code> and <code>setHeight()</code>. A client of the square object can change its width and height to different dimensions. But width and height of a square are always identical, hence we get a failing of the normal behavior of the software.</p>
<p style="text-align: justify;">This can only be avoided by looking at classes according to different usage scenarios and conditions. Therefore, when you are designing classes in isolation there is a probability that your assumptions may fail. As in the case of Square and Rectangle, a relationship looks good enough during initial analysis, but as we look at different conditions this relationship failed to work with the correct behavior of the software.</p>
    */}.toString().slice(14,-3)
    },

    {   /* Interface Segregation Principle */
        id : 4,
        "text" : function(){/*
<p style="text-align: justify;">The Interface Segregation Principle (ISP) states that <strong>Clients should not be forced to depend upon the interfaces that they do not use.</strong></p>
<p style="text-align: justify;">Again consider the previous example:</p>
<pre>
public interface IDevice {
    void open();
    void read();
    void close();
}
</pre>
<p style="text-align: justify;">There are three classes that implement this interface: <code>USBDevice</code>, <code>NetworkDevice</code>, and <code>PCIDevice</code>. This interface is good enough to work with the network and PCI devices. But the USB device needs another method <code>refresh()</code> to work properly.</p>
<p style="text-align: justify;">Similar to the USB device, there can be another device which may require a refresh method to work properly. Due to this, <code>IDevice</code> is updated as shown below:</p>
<pre>
public interface IDevice {
    void open();
    void refresh();
    void read();
    void close();
}
</pre>
<p style="text-align: justify;">The problem is now each class that implements <code>IDevice</code> interface has to provide the definition for the <strong>refresh</strong> method.</p>
<p style="text-align: justify;">For example, I have to add the following lines of code to the <code>NetworkDevice</code> class and <code>PCIDevice</code> class to work with this design:</p>
<pre>
public void refresh() {
    // Yes nothing here… just a useless blank function
}
</pre>
<p style="text-align: justify;">Hence, <code<IDevice</code> represents a fat interface (too many methods). This design violates the Interface Segregation Principle because the fat interface is causing unnecessary clients to depend upon it.</p>
<p style="text-align: justify;">There are numerous ways to solve this problem, but I will tackle this problem while staying within our predefined range of object-oriented solutions.</p>
<p style="text-align: justify;">I know that refresh is directly called after the <code>open()</code> method. Hence, I moved the logic of <strong>refresh</strong> from the client of <code>IDevice</code> to the specific concrete class. In our case I moved the call to refresh logic to the <code>USBDevice</code> class as shown here:</p>
<pre>
public interface IDevice {
    void open();
    void read();
    void close();
}
</pre>

<pre>
public class USBDevice extends IDevice {
    public void open {
        // open the device here

        // refresh the device
        this.refresh();
    }

    private void refresh() {
        // make the USb Device Refresh
    }
}
</pre>
<p style="text-align: justify;">In this way, I have reduced the number of functions in the iDevice class and made it less fat.</p>
    */}.toString().slice(14,-3)
    },

    {   /* Dependency Inversion Principle */
        id : 5,
        "text" : function(){/*
<p style="text-align: justify;">Dependency Inversion Principle states that <strong>High-level modules should not depend upon low-level modules. Both should depend upon abstractions.</strong></p>
<p style="text-align: justify;">To understand the first part we have to learn what high-level modules and low-level modules actually are. See the following code:</p>
<pre>
Class TransferManager {
    public void transferData(USBExternalDevice usbExternalDeviceObj, SSDDrive ssdDriveObj) {
        byte[] dataBytes = usbExternalDeviceObj.readData();

        // work on dataBytes e.g compress, encrypt etc..

        ssdDriveObj.writeData(dataBytes);
    }
}
</pre>

<pre>
public class USBExternalDevice {
    Public byte[] readData() {
        // impl goes here
    }
}
</pre>

<pre>
public class SSDDrive {
    public void writeData(byte[] data) {
        // impl goes here
    }
}
</pre>
<p style="text-align: justify;">In this code, there are three classes. The <code>TransferManager</code> class represents a <strong>high-level module</strong>. This is because it is using two classes in its one method. Hence the other two classes are <strong>low-level modules</strong>.</p>
<p style="text-align: justify;">The <strong>high-level module</strong> method defines logic based upon how data is transferred from one device to another device. Any module which is controlling the logic, and uses the <strong>low-level modules</strong> in doing so, is called the high-level module.</p>
<p style="text-align: justify;">In the code above, the high-level module is directly (without any abstraction) using the lower-level modules, hence violating the dependency inversion principle.</p>
<p style="text-align: justify;">Violation of this principle makes the software difficult to change. For example, if you want to add other external devices you will have to change the higher-level module. Hence your higher-level module will be dependent upon the lower-level module, and that dependency will make the code difficult to change.</p>
<p style="text-align: justify;">The solution is  to <strong>Program to an interface, not to an implementation</strong>. Here is the listing:</p>
<pre>
public class USBExternalDevice implements IExternalDevice {
    public byte[] readData() {
        // impl goes here
    }
}
</pre>

<pre>
public class SSDDrive implements IInternalDevice {
    public void writeData(byte[] data) {
        // impl goes here
    }
}
</pre>

<pre>
public class TransferManager implements ITransferManager {
    public void transfer(IExternalDevice externalDeviceObj, IInternalDevice internalDeviceObj) {
        byte[] dataBytes = externalDeviceObj.readData();

        // work on dataBytes e.g compress, encrypt etc..

        internalDeviceObj.writeData(dataBytes);
    }
}
</pre>

<pre>
public interface IExternalDevice {
    public byte[] readData();
}
</pre>

<pre>
public interface IInternalDevice {
    public void writeData(byte[] data);
}
</pre>

<pre>
public interface ITransferManager {
    public void transfer(IExternalDevice usbExternalDeviceObj,SSDDrive  IInternalDevice);
}
</pre>
<p style="text-align: justify;">In the code above both high-level module and low-level modules depend upon abstractions. This code follows the Dependency Inversion Principle.</p>
    */}.toString().slice(14,-3)
    },
];
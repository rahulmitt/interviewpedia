var gof_intro_que = [
    {
        id : 1,
        question : "GoF — Design Patterns",
        tags : ["GoF Design Patterns"]
    }
];

var gof_intro_ans = [
    {   /* GoF — Design Patterns */
        id : 1,
        "text" : function(){/*
<h2>GoF Patterns</h2>
<p style="text-align: justify;">A <strong>design pattern</strong> is a general, reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into code. Rather, it is a description or template for how to solve a problem that can be used in many different situations. Design patterns are <strong>formalized best practices</strong> that the programmer can use to solve common problems when designing an application or system.</p>
<p style="text-align: justify;">The authors of <a href="http://wiki.c2.com/?DesignPatternsBook" target="_blank">this</a> book on design patterns are often referred to as the&nbsp;<a href="http://wiki.c2.com/?GangOfFour" target="_blank">Gang of Four</a> (GoF).</p>

<table width="100%">
    <tbody>
        <tr valign="top">
            <th width="15%" style="text-align: center;"><strong>Pattern Category</strong></th>
            <th width="45%" style="text-align: center;"><strong>Mnemonics</strong> (best way to remember patterns in respective classifications)</th>
        </tr>

        <tr valign="top">
            <td>1. Creational</td>
            <td><strong>A</strong>braham <strong>B</strong>ecame <strong>F</strong>irst <strong>P</strong>resident of <strong>S</strong>tates</td>
        </tr>

        <tr valign="top">
            <td>2. Structural</td>
            <td><strong>A</strong>.<strong>B</strong>.<strong>C</strong>.<strong>D</strong>. <strong>F</strong>irst <strong>F</strong>or <strong>P</strong>ractice</td>
        </tr>

        <tr valign="top">
            <td>3. Behavioral</td>
            <td>2 MICS On TV (<strong>MMIICCSSOTV</strong>)</td>
        </tr>

    </tbody>
</table>


<h3>Creational</h3>
<p style="text-align: justify;">These are ones that create objects, rather than having to instantiate objects directly. This gives the program more flexibility in deciding which objects need to be created for a given case.</p>

<table width="100%">
<tbody>

    <tr valign="top">
        <th width="15%" style="text-align: center;"><strong>GoF — Creational</strong></th>
        <th width="45%" style="text-align: center;"><strong>Description</strong></th>
        <th width="40%" style="text-align: center;"><strong>Examples in JDK</strong></th>
    </tr>

    <tr valign="top">
        <td>1. <strong>A</strong>bstract Factory</td>
        <td>Provide an interface for creating families of related or dependent objects without specifying their concrete classes.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/javax/xml/parsers/DocumentBuilderFactory.html#newInstance--" target="_blank">javax.xml.parsers.DocumentBuilderFactory#newInstance()</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/javax/xml/transform/TransformerFactory.html#newInstance--" target="_blank">javax.xml.transform.TransformerFactory#newInstance()</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/javax/xml/xpath/XPathFactory.html#newInstance--" target="_blank">javax.xml.xpath.XPathFactory#newInstance()</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>2. <strong>B</strong>uilder</td>
        <td>Separate the construction of a complex object from its representation, allowing the same construction process to create various representations.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/lang/StringBuilder.html#append-boolean-" target="_blank">java.lang.StringBuilder#append()</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/lang/StringBuffer.html#append-boolean-" target="_blank">java.lang.StringBuffer#append()</a></li>
                <li><a href="https://docs.oracle.com/javase/9/docs/api/java/util/stream/Stream.Builder.html" target="_blank">java.util.stream.Stream.Builder</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>3. <strong>F</strong>actory</ method</td>
        <td>Define an interface for creating a single object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/Calendar.html#getInstance--" target="_blank">java.util.Calendar#getInstance()</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/ResourceBundle.html#getBundle-java.lang.String-" target="_blank">java.util.ResourceBundle#getBundle()</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/text/NumberFormat.html#getInstance--" target="_blank">java.text.NumberFormat#getInstance()</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>4. <strong>P</strong>rototype</td>
        <td>Specify the kinds of objects to create using a prototypical instance, and create new objects from the 'skeleton' of an existing object, thus boosting performance and keeping memory footprints to a minimum.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--" target="_blank">java.lang.Object#clone()</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>5. <strong>S</strong>ingleton</td>
        <td>Ensure a class has only one instance, and provide a global point of access to it.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Runtime.html#getRuntime--" target="_blank">java.lang.Runtime#getRuntime()</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/awt/Desktop.html#getDesktop--" target="_blank">java.awt.Desktop#getDesktop()</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/lang/System.html#getSecurityManager--" target="_blank">java.lang.System#getSecurityManager()</a></li>
            </ol>
        </td>
    </tr>

</tbody>
</table>

<h3>Structural</h3>
<p style="text-align: justify;">These concern class and object composition. They use inheritance to compose interfaces and define ways to compose objects to obtain new functionality.</p>

<table width="100%">
<tbody>

    <tr valign="top">
        <th width="15%" style="text-align: center;"><strong>GoF — Structural</strong></th>
        <th width="45%" style="text-align: center;"><strong>Description</strong></th>
        <th width="40%" style="text-align: center;"><strong>Examples in JDK</strong></th>
    </tr>

    <tr valign="top">
        <td>1. <strong>A</strong>dapter</td>
        <td>Convert the interface of a class into another interface clients expect. An adapter lets classes work together that
        could not otherwise because of incompatible interfaces. The enterprise integration pattern equivalent is the translator.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#asList-T...-" target="_blank">java.util.Arrays#asList()</a></li>
                <li><a href="https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#list-java.util.Enumeration-" target="_blank">java.util.Collections#list()</a></li>
                <li><a href="https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#enumeration-java.util.Collection-" target="_blank">java.util.Collections#enumeration()</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>2. <strong>B</strong>ridge</td>
        <td>Decouple an abstraction from its implementation allowing the two to vary independently.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#newSetFromMap-java.util.Map-" target="_blank">java.util.Collections#newSetFromMap()</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#singleton-T-" target="_blank">singletonXXX()</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>3. <strong>C</strong>omposite</td>
        <td>Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects
        and compositions of objects uniformly.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/awt/Container.html#add-java.awt.Component-" target="_blank">java.awt.Container#add(Component)</a></li>
                <li><a href="http://docs.oracle.com/javaee/7/api/javax/faces/component/UIComponent.html#getChildren--" target="_blank">javax.faces.component.UIComponent#getChildren()</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>4. <strong>D</strong>ecorator</td>
        <td>Attach additional responsibilities to an object dynamically keeping the same interface. Decorators provide a flexible
        alternative to subclassing for extending functionality.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#checkedCollection-java.util.Collection-java.lang.Class-" target="_blank">checkedXXX()</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#synchronizedCollection-java.util.Collection-" target="_blank">synchronizedXXX()</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#unmodifiableCollection-java.util.Collection-" target="_blank">unmodifiableXXX()</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>5. <strong>F</strong>acade</td>
        <td>Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes
        the subsystem easier to use.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpSession.html" target="_blank">HttpSession</a></li>
                <li><a href="http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpServletRequest.html" target="_blank">HttpServletRequest</a></li>
                <li><a href="http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpServletResponse.html" target="_blank">HttpServletResponse</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>6. <strong>F</strong>lyweight</td>
        <td>Use sharing to support large numbers of similar objects efficiently.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html#valueOf-int-" target="_blank">Integer#valueOf(int)</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html#valueOf-boolean-" target="_blank">Boolean#valueOf(int)</a></li>
                <li><a href="https://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html#valueOf-long-int-" target="_blank">BigDecimal#valueof(long, int)</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>7. <strong>P</strong>roxy</td>
        <td>Provide a surrogate or placeholder for another object to control access to it.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/lang/reflect/Proxy.html" target="_blank">java.lang.reflect.Proxy</a></li>
                <li><a href="http://docs.oracle.com/javaee/7/api/javax/inject/Inject.html" target="_blank">javax.inject.Inject</a> as explained
                <a href="https://stackoverflow.com/questions/29651008/field-getobj-returns-all-nulls-on-injected-cdi-managed-beans-while-manually-i/29672591#29672591" target="_blank">here</a></li>
            </ol>
        </td>
    </tr>

</tbody>
</table>

<h3>Behavioral</h3>
<p style="text-align: justify;">Most of these design patterns are specifically concerned with communication between objects.</p>

<table width="100%">
<tbody>

    <tr valign="top">
        <th width="15%" style="text-align: center;"><strong>GoF — Behavioral</strong></th>
        <th width="45%" style="text-align: center;"><strong>Description</strong></th>
        <th width="40%" style="text-align: center;"><strong>Examples in JDK</strong></th>
    </tr>

    <tr valign="top">
        <td>1. <strong>M</strong>ediator</td>
        <td>Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects
        from referring to each other explicitly, and it allows their interaction to vary independently.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executor.html#execute-java.lang.Runnable-" target="_blank">java.util.concurrent.Executor#execute()</a></li>
                <li><a href="https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ExecutorService.html#submit-java.util.concurrent.Callable-" target="_blank">java.util.concurrent.ExecutorService#submit()</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/lang/reflect/Method.html#invoke-java.lang.Object-java.lang.Object...-" target="_blank">java.lang.reflect.Method#invoke()</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>2. <strong>M</strong>omento</td>
        <td>Without violating encapsulation, capture and externalize an object's internal state allowing the object to be restored to this state later.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/io/Serializable.html" target="_blank">java.io.Serializable</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>3. <strong>I</strong>nterpreter</td>
        <td>Given a language, define a representation for its grammar along with an interpreter that uses the representation to
        interpret sentences in the language.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html" target="_blank">java.util.Pattern</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/text/Normalizer.html" target="_blank">java.text.Normalizer</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/text/Format.html" target="_blank">java.text.Format</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>4. <strong>I</strong>terator</td>
        <td>Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html" target="_blank">java.util.Iterator</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/Enumeration.html" target="_blank">java.util.Enumeration</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>5. <strong>C</strong>hain of responsibility</td>
        <td>Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request.
        Chain the receiving objects and pass the request along the chain until an object handles it.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/logging/Logger.html#log-java.util.logging.Level-java.lang.String-" target="_blank">java.util.logging.Logger#log()</a></li>
                <li><a href="http://docs.oracle.com/javaee/7/api/javax/servlet/Filter.html#doFilter-javax.servlet.ServletRequest-javax.servlet.ServletResponse-javax.servlet.FilterChain-" target="_blank">javax.servlet.Filter#doFilter()</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>6. <strong>C</strong>ommand</td>
        <td>Encapsulate a request as an object, thereby allowing for the parameterization of clients with different requests, and
        the queuing or logging of requests. It also allows for the support of undoable operations.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html" target="_blank">java.lang.Runnable</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/javax/swing/Action.html" target="_blank">javax.swing.Action</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>7. <strong>S</strong>tate</td>
        <td>Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javaee/7/api/javax/faces/lifecycle/Lifecycle.html#execute-javax.faces.context.FacesContext-" target="_blank">javax.faces.lifecycle.LifeCycle#execute()</a>
                (controlled by <a href="http://docs.oracle.com/javaee/7/api/javax/faces/webapp/FacesServlet.html" target="_blank">FacesServlet</a>, the behavior is dependent on current phase (state) of JSF lifecycle)</li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>8. <strong>S</strong>trategy</td>
        <td>Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary
        independently from clients that use it.</td>
        <td>
            <ol>
                <li><a href="https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html#compare-T-T-" target="_blank">java.util.Comparator#compare()</a></li>
                <li><a href="https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#sort-java.util.List-java.util.Comparator-" target="_blank">java.lang.Collections#sort()</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>9. <strong>O</strong>bserver</td>
        <td>Define a one-to-many dependency between objects where a state change in one object results in all its dependents being
        notified and updated automatically.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/Observer.html" target="_blank">java.util.Observer</a> and <a href="http://docs.oracle.com/javase/8/docs/api/java/util/Observable.html" target="_blank">java.util.Observable</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/EventListener.html" target="_blank">java.util.EventListener</a></li>
                <li><a href="http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpSessionBindingListener.html" target="_blank">javax.servlet.http.HttpSessionBindingListener</a></li>
                <li><a href="http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpSessionAttributeListener.html" target="_blank">javax.servlet.http.HttpSessionAttributeListener</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>10. <strong>T</strong>emplate method</td>
        <td>Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template method lets subclasses
        redefine certain steps of an algorithm without changing the algorithm's structure.</td>
        <td>
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/AbstractList.html" target="_blank">java.util.AbstractList</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/AbstractSet.html" target="_blank">java.util.AbstractSet</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/util/AbstractMap.html" target="_blank">java.util.AbstractMap</a></li>
                <li><a href="http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpServlet.html" target="_blank">javax.servlet.http.HttpServlet</a></li>
            </ol>
        </td>
    </tr>

    <tr valign="top">
        <td>11. <strong>V</strong>isitor</td>
        <td>Represent an operation to be performed on the elements of an object structure. Visitor lets a new operation be defined
        without changing the classes of the elements on which it operates.</td>
        <td>Recognizable by two different abstract/interface types that have methods defined which takes each other as
        type — the one actually calls the method of the other, and the other executes the desired strategy on it)
            <ol>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/javax/lang/model/element/AnnotationValue.html" target="_blank">javax.lang.model.element.AnnotationValue</a> and <a href="http://docs.oracle.com/javase/8/docs/api/javax/lang/model/element/AnnotationValueVisitor.html" target="_blank">AnnotationValueVisitor</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/javax/lang/model/element/Element.html" target="_blank">javax.lang.model.element.Element</a> and <a href="http://docs.oracle.com/javase/8/docs/api/javax/lang/model/element/ElementVisitor.html" target="_blank">ElementVisitor</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/javax/lang/model/type/TypeMirror.html" target="_blank">javax.lang.model.type.TypeMirror</a> and <a href="http://docs.oracle.com/javase/8/docs/api/javax/lang/model/type/TypeVisitor.html" target="_blank">TypeVisitor</a></li>
                <li><a href="http://docs.oracle.com/javase/8/docs/api/java/nio/file/FileVisitor.html" target="_blank">java.nio.file.FileVisitor</a> and <a href="http://docs.oracle.com/javase/8/docs/api/java/nio/file/SimpleFileVisitor.html" target="_blank">SimpleFileVisitor</a></li>
            </ol>
        </td>
    </tr>

</tbody>
</table>
<p style="text-align: justify;">Reference: <a href="https://stackoverflow.com/questions/1673841/examples-of-gof-design-patterns-in-javas-core-libraries" target="_blank">Examples of GoF Design Patterns in Java's core libraries</a></p>
    */}.toString().slice(14,-3)
    },
];
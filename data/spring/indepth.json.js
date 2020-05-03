var indepth_que = [
	{
		question : "Autowiring in Depth",
		tags : ["Autowiring"]
	},

	{
		question : "Beans",
		tags : ["Beans"]
	},

	{
		question : "Bean Scope",
		tags : ["Bean Scope"]
	},

	{
		question : "Component Scan",
		tags : ["Component Scan"]
	},

	{
		question : "Bean Lifecycle",
		tags : ["Bean Lifecycle"]
	},

	{
		question : "Components",
		tags : ["Components", "@Component", "@Controller", "Service", "@Repository"]
	},

	{
		question : "Reading Properties Files",
		tags : ["Reading Properties Files"]
	},

    {
		question : "Contexts and Dependency Injection",
		tags : ["Contexts and Dependency Injection", "CDI"]
	},
]

var indepth_ans = [
    {   /* Autowiring in Depth */
        "text" : function(){/*
<h1>Autowiring in Depth</h1>
<p style="text-align: justify;">Let's say, we have two implementations of <code>SortAlgorithm</code> interface, and, among
them, <code>BubbleSort</code> is the primary component. In other words, there are two beans of type <code>SortAlgorithm</code>
— named <code>BubbleSort</code> and <code>QuickSort</code> respectively.</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>BubbleSort.java</strong></td>
<td style="text-align: center;"><strong>QuickSort.java</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>@Component<br />@Primary
public class BubbleSort implements SortAlgorithm {
&nbsp;
    @Override
    public int[] sort(int[] intArr) {
        //TODO: impl goes here
        return intArr;
    }
}
</pre>
</td>
<td style="vertical-align: top;">
<pre>@Component
public class QuickSort implements SortAlgorithm {
&nbsp;
    @Override
    public int[] sort(int[] intArr) {
        //TODO: impl goes here
        return intArr;
    }
}

</pre>
</td>
</tr>
</tbody>
</table>

<p style="text-align: justify;">In spring framework, autowiring <strong>by-Type</strong> allows a property to be autowired:</p>
<ol>
<li>If there is exactly one bean matching the type of the annotated property within the container.</li>
<li>If there are two or more beans matching the type of the annotated property, one of the following will happen (in order):<ol style="list-style-type: lower-roman;">
<li>The one annotated with <code>@Primary</code> will be autowired</li>
<li>Spring will try to perform autowiring <strong>by-Name</strong>. </li>
<li>The exception&nbsp;<code>org.springframework.beans.factory.NoUniqueBeanDefinitionException</code> will be thrown.</li>
</ol>
This strategy is implemented in:</br><code>org.springframework.beans.factory.support.DefaultListableBeanFactory#determineAutowireCandidate()</code> method
</li>
</ol></p>

<table width="100%">
<tbody>
<tr>
<td style="text-align: center;" colspan="2"><strong>Autowiring by-Type</strong></td>
</tr>
<tr>
<td style="text-align: center;">Constructor-based Autowiring</td>
<td style="vertical-align: top;">
<pre>@Component
public class BinarySearch {

    private SortAlgorithm sortAlgorithm;
&nbsp;

    // container has 2 beans of type matching with "sortAlgorithm"
    // The "primary" bean will be autowired — BubbleSort in this case
    @Autowired      // Constructor-based Autowiring by-Type
    public BinarySearch(SortAlgorithm sortAlgorithm) {
        this.sortAlgorithm = sortAlgorithm;
    }
&nbsp;
    // more code goes here
}
</pre>
</td>
</tr>
<tr>
<td style="text-align: center;">Setter-based Autowiring</td>
<td>
<pre>@Component
public class BinarySearch {
&nbsp;
    private SortAlgorithm sortAlgorithm;
&nbsp;
    // container has 2 beans of type matching with "sortAlgorithm"
    // The "primary" bean will be autowired — BubbleSort in this case
    @Autowired      // Setter-based Autowiring by-Type
    public void setSortAlgorithm(SortAlgorithm sortAlgorithm) {
        this.sortAlgorithm = sortAlgorithm;
    }
&nbsp;
    // more code goes here
}
</pre>
</td>
</tr>
<tr>
<td style="text-align: center;">Field-based Autowiring</td>
<td>
<pre>@Component
public class BinarySearch {
&nbsp;
    // container has 2 beans of type matching with "sortAlgorithm"
    // The "primary" bean will be autowired — BubbleSort in this case
    @Autowired      // Field-based Autowiring by-Type
    private SortAlgorithm sortAlgorithm;
&nbsp;
    // more code goes here
}
</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p style="text-align: justify;">Autowiring <strong>by-Name</strong> means, if the name of a bean is same as the name of the annotated property, autowire it.
Look at the following code, assuming that none of the beans — <code>BubbleSort</code> or <code>QuickSort</code> — are primary.</p>

<table width="100%">
<tbody>
<tr>
<td style="text-align: center;" colspan="2"><strong>Autowiring by-Name</strong></td>
</tr>
<tr>
<td style="text-align: center;">Constructor-based Autowiring</td>
<td style="vertical-align: top;">
<pre>@Component
public class BinarySearch {

    private SortAlgorithm sortAlgorithm;
&nbsp;

    @Autowired      // Constructor-based Autowiring by-Name
    public BinarySearch(SortAlgorithm quickSort) {
        this.sortAlgorithm = quickSort;
    }
&nbsp;
    // more code goes here
}
</pre>
</td>
</tr>
<tr>
<td style="text-align: center;">Setter-based Autowiring</td>
<td>
<pre>@Component
public class BinarySearch {
&nbsp;
    private SortAlgorithm sortAlgorithm;
&nbsp;

    @Autowired      // Setter-based Autowiring by-Name
    public void setSortAlgorithm(SortAlgorithm quickSort) {
        this.sortAlgorithm = quickSort;
    }
&nbsp;
    // more code goes here
}
</pre>
</td>
</tr>
<tr>
<td style="text-align: center;">Field-based Autowiring</td>
<td>
<pre>@Component
public class BinarySearch {
&nbsp;

    @Autowired      // Field-based Autowiring by-Name
    private SortAlgorithm quickSort;
&nbsp;
    // more code goes here
}
</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>Another option when we have multiple candidates for autowiring is to use the <code>@Qualifier</code> annotation, which
assigns a <strong>qualifier-name</strong> to each component.</p>

<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>BubbleSort.java</strong></td>
<td style="text-align: center;"><strong>QuickSort.java</strong></td>
</tr>
<tr>
<td style="vertical-align: top;">
<pre>@Component<br />@Qualifier("bubble")
public class BubbleSort implements SortAlgorithm {
&nbsp;
    @Override
    public int[] sort(int[] intArr) {
        //TODO: impl goes here
        return intArr;
    }
}

</pre>
</td>
<td style="vertical-align: top;">
<pre>@Component<br />@Qualifier("quick")
public class QuickSort implements SortAlgorithm {
&nbsp;
    @Override
    public int[] sort(int[] intArr) {
        //TODO: impl goes here
        return intArr;
    }
}

</pre>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>

<table width="100%">
<tbody>
<tr>
<td style="text-align: center;" colspan="2"><strong>Autowiring with <code>@Qualifier</code></strong></td>
</tr>
<tr>
<td style="text-align: center;">Constructor-based Autowiring</td>
<td style="vertical-align: top;">
<pre>
@Component
public class BinarySearch {

    private SortAlgorithm sortAlgorithm;

    @Autowired
    //@Qualifier("bubble")      // (1)
    public BinarySearch(@Qualifier("bubble") SortAlgorithm sortAlgorithm) {
        this.sortAlgorithm = sortAlgorithm;
    }

    // more code goes here
}
</pre>
<p>Note that <code>@Qualifier</code> is not allowed at (1) because if there are multiple parameters, spring would not be
able to identify which parameter should the <code>@Qualifier</code> be applied to.</p>
</td>
</tr>
<tr>
<td style="text-align: center;">Setter-based Autowiring</td>
<td>
<pre>@Component
public class BinarySearch {
&nbsp;
    private SortAlgorithm sortAlgorithm;
&nbsp;
    @Autowired      // Setter-based Autowiring
    @Qualifier("quick")
    public void setSortAlgorithm(SortAlgorithm quickSort) {
        this.sortAlgorithm = quickSort;
    }
&nbsp;
    // more code goes here
}
</pre>
<p>Another way:</p>
<pre>@Component
public class BinarySearch {
&nbsp;
    private SortAlgorithm sortAlgorithm;
&nbsp;

    @Autowired
    public void setSortAlgorithm(@Qualifier("bubble") SortAlgorithm sortAlgorithm) {
        this.sortAlgorithm = sortAlgorithm;
    }
&nbsp;
    // more code goes here
}
</pre>
</td>
</tr>
<tr>
<td style="text-align: center;">Field-based Autowiring</td>
<td>
<pre>@Component
public class BinarySearch {
&nbsp;

    @Autowired      // Field-based Autowiring
    @Qualifier("quick")
    private SortAlgorithm quickSort;
&nbsp;
    // more code goes here
}
</pre>
</td>
</tr>
</tbody>
</table>

<h2>@Primary vs @Qualifier</h2>
<p style="text-align: justify;">The <code>@Primary</code> annotation is useful when we want to specify which bean of a
certain type should be injected by default. And in case we require the other bean at some injection point, we would need
to specifically indicate using the <code>@Qualifier</code> annotation. It's worth noting that if both the
<code>@Qualifier</code> and <code>@Primary</code> annotations are present, then the <code>@Qualifier</code> annotation
will have the precedence. Basically, <code>@Primary</code> defines a <strong>default</strong>, while <code>@Qualifier</code>
is very <strong>specific</strong>.</p>
        */}.toString().slice(14,-3)
    },

    {   /* Beans */
        "text" : function(){/*
<h1>Beans</h1>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;"><a href="https://www.logicbig.com/tutorials/spring-framework/spring-core/using-bean-annotation.html" target="_blank">Using @Bean</a></p>
<p style="text-align: justify;"><a href="https://www.logicbig.com/tutorials/spring-framework/spring-core/java-config.html" target="_blank">Using @Configuration</a></p>
<p style="text-align: justify;"><a href="https://www.logicbig.com/tutorials/spring-framework/spring-core/bean-conditional-registration.html" target="_blank">@Bean conditional registration</a></p>
<p style="text-align: justify;"><a href="https://www.logicbig.com/tutorials/spring-framework/spring-core/injecting-collections.html" target="_blank">Injecting Arrays and Collections</a></p>
<p style="text-align: justify;"><a href="https://www.logicbig.com/tutorials/spring-framework/spring-core/using-depends-on.html" target="_blank">Controlling Beans Loading Order, using @DependsOn</a></p>
<p style="text-align: justify;">&nbsp;</p>
        */}.toString().slice(14,-3)
    },

    {   /* Bean Scope */
        "text" : function(){/*
<h1>Bean Scope</h1>
<p style="text-align: justify;">The scope of a bean defines the <strong>lifecycle</strong> and <strong>visibility</strong>
of that bean in the contexts in which it is used. Spring 5 defines six types of scopes (four of which are available only
if you use a <strong>web-aware</strong> <code>ApplicationContext</code>):</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>SCOPE</strong></td>
<td style="text-align: center;" colspan="2"><strong>DESCRIPTION</strong></td>
</tr>
<tr>
<td>Singleton</td>
<td colspan="2">
<p style="text-align: justify;">One instance per spring context</p>
<p style="text-align: justify;">Defining a bean with <em>singleton scope</em> means the container creates a single instance
of that bean, and all requests for that bean name will return the same cached object. Any modifications to the object will
be reflected in all references to the bean.</p>
<p style="text-align: justify;">This scope is the <strong>default</strong> value if no other scope is specified.</p>
<pre>@Bean
@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)     // equivalent to @Scope("singleton")
public Person personSingleton() {
    return new Person();
}
</pre>
</td>
</tr>
<tr>
<td>Prototype&nbsp;</td>
<td colspan="2">
<p style="text-align: justify;">New bean whenever requested</p>
<p style="text-align: justify;">A bean with <em>prototype scope</em> will return a different instance every time it is
requested from the container. It is defined by setting the value prototype to the <code>@Scope</code> annotation in the
bean definition</p>
<pre>@Bean
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)     // equivalent to @Scope("prototype")
public Person personPrototype() {
    return new Person();
}
</pre>
</td>
</tr>
<tr>
<td>Request&nbsp;</td>
<td style="text-align: center;" rowspan="4">
<p>Used for Web-aware <code>applicationContext</code> only</p>
</td>
<td>
<p style="text-align: justify;">One bean per HTTP request</p>
<p style="text-align: justify;">The <em>request scope</em> creates a bean instance for a <em>single HTTP request</em></p>
<pre>@Bean
//@Scope("request")
@Scope(
    value = WebApplicationContext.SCOPE_REQUEST,
    proxyMode = ScopedProxyMode.TARGET_CLASS
)
//@RequestScope // composite annotation that acts as a shortcut for the above
public HelloMessageGenerator requestScopedBean() {
    return new HelloMessageGenerator();
}
</pre>
<p style="text-align: justify;">The <code>proxyMode</code> attribute is necessary because, at the time of instantiation
of the web application context, there is no active request. Spring will create a proxy to be injected as a dependency,
and instantiate the target bean when it is needed in a request.</p>
</td>
</tr>
<tr>
<td>Session&nbsp;</td>
<td>
<p style="text-align: justify;">One bean per HTTP session</p>
<p style="text-align: justify;">The <em>session scope</em> creates a bean instance for an <em>HTTP session</em></p>
<pre>
@Bean
//@Scope("session")
@Scope(
    value = WebApplicationContext.SCOPE_SESSION,
    proxyMode = ScopedProxyMode.TARGET_CLASS
)
//@SessionScope // composite annotation that acts as a shortcut for the above
public HelloMessageGenerator sessionScopedBean() {
    return new HelloMessageGenerator();
}
</pre>
</td>
</tr>
<tr>
<td>Application&nbsp;</td>
<td>
<p style="text-align: justify;"></p>
<p style="text-align: justify;">The <em>application scope</em> creates the bean instance for the lifecycle of a
<code>ServletContext</code>. This is similar to the <em>singleton scope</em> but there is a very important difference
with regards to the scope of the bean.</p>
<p style="text-align: justify;">When beans are <strong>application-scoped</strong> the same instance of the bean is
shared across multiple servlet-based applications running in the same ServletContext, while <strong>singleton-scoped</strong>
beans are scoped to a single application context only.</p>
<pre>
@Bean
//@Scope("application")
@Scope(
    value = WebApplicationContext.SCOPE_APPLICATION,
    proxyMode = ScopedProxyMode.TARGET_CLASS
)
//@ApplicationScope // composite annotation that acts as a shortcut for above
public HelloMessageGenerator applicationScopedBean() {
    return new HelloMessageGenerator();
}
</pre>
</td>
</tr>
<tr>
<td>Websocket&nbsp;</td>
<td>
<p style="text-align: justify;">The <em>websocket scope</em> creates the bean for a particular <code>WebSocket</code> session.</p>
<pre>
@Bean
//@Scope("websocket")
@Scope(
    scopeName = "websocket",
    proxyMode = ScopedProxyMode.TARGET_CLASS
)
public HelloMessageGenerator websocketScopedBean() {
    return new HelloMessageGenerator();
}
</pre>
</td>
</tr>
</tbody>
</table>

<h2>Spring Singleton vs GoF Singleton</h2>
<img src="data/spring/images/6.Singleton.png" alt=""/>
<p>&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>Spring Singleton</strong></td>
<td style="text-align: center;"><strong>GoF Singleton</strong></td>
</tr>
<tr>
<td>One singleton per spring container</td>
<td>One Singleton per JVM</td>
</tr>
</tbody>
</table>

<p style="text-align: justify;">Reference: <a href="https://docs.spring.io/spring/docs/5.2.5.RELEASE/spring-framework-reference/core.html#beans-factory-scopes" target="_blank">Spring Bean Scopes</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Component Scan */
        "text" : function(){/*
<h1>Component Scan</h1>
<table width="100%">
<tbody>
<tr>
<td><img src="data/spring/images/7.componentScan.png" alt="" width="366" height="265" /></td>
<td style="vertical-align: top;">
<p style="text-align: justify;">When developing Spring applications, you need to tell the Spring Framework where to look
for Spring components. Using <strong>component scan</strong> is one method of asking Spring to detect <i>Spring-managed</i>
components. Spring needs the information to <strong>locate and register</strong> all the components with the IoC container
when the application starts.</p>

<p style="text-align: justify;">Spring can auto scan, detect, and instantiate components from pre-defined project packages.
Spring can auto-scan all classes annotated with the stereotype annotations <code>@Component</code>, <code>@Controller</code>,
<code>@Service</code>, and <code>@Repository</code></p>

<p style="text-align: justify;">Spring needs to know which packages to scan for annotated components in order to add
them to the IoC container. In a Spring Boot project, we typically annotate the main application class with the
<code>@SpringBootApplication</code> annotation.</p>

<p style="text-align: justify;">Under the hood, <code>@SpringBootApplication</code> is a composition of the
<code>@SpringBootConfiguration</code>, <code>@EnableAutoConfiguration</code> and <code>@ComponentScan</code> annotations.
With this default setting, Spring Boot will auto-scan for components in the current package (containing the
<code>@SpringBootApplication</code> main class) and its sub packages.</p>

</td>
</tr>
</tbody>
</table>

<p style="text-align: justify;">Now, <code>BinarySearchDemo</code> is annotated with <code>@SpringBootApplication</code>
annotation. As a result, Spring Boot will auto-scan for components within <code>com.rahulmitt.interviewpedia.springframework.componentscan</code>
package and its sub-packages, and is analogous to below:</p>
<pre>
package com.rahulmitt.interviewpedia.springframework.componentscan;

import com.rahulmitt.interviewpedia.springframework.componentscan.search.BinarySearch;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.rahulmitt.interviewpedia.springframework.componentscan")    // this component-scan is implicit
public class BinarySearchDemo {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(BinarySearchDemo.class, args);
        BinarySearch binarySearch = context.getBean(BinarySearch.class);

        // more code goes here
    }
}
</pre>
<p style="text-align: justify;">An autowiring of a bean outside the package <code>com.rahulmitt.interviewpedia.springframework.componentscan</code>
will fail because spring container won't be able to find a bean</p>
<pre>
package com.rahulmitt.interviewpedia.springframework.componentscan.search;

import com.rahulmitt.interviewpedia.springframework.sorting.SortAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BinarySearch {

    @Autowired
    private SortAlgorithm sortAlgorithm;    // this is outside the default component-scan and will cause an exception

    // more code goes here
}
</pre>
<p>The above code results in <code>org.springframework.beans.factory.NoSuchBeanDefinitionException: No qualifying bean
of type 'com.rahulmitt.interviewpedia.springframework.sorting.SortAlgorithm' available: expected at least 1 bean which
qualifies as autowire candidate. Dependency annotations: {@org.springframework.beans.factory.annotation.Autowired(required=true)}</code></p>
<p style="text-align: justify;">This means that the beans from other packages are not getting picked up. In order to fix
this, we need to explicitly specify the component-scan:</p>
<pre>
@SpringBootApplication
@ComponentScan(
        {
                "com.rahulmitt.interviewpedia.springframework.componentscan",
                "com.rahulmitt.interviewpedia.springframework.sorting"              // package to be scanned
        }
)
public class BinarySearchDemo {
    // more code goes here
}
</pre>
        */}.toString().slice(14,-3)
    },

    {   /* Bean Lifecycle */
        "text" : function(){/*
<h1>Bean Lifecycle</h1>
<p style="text-align: justify;">The Spring IoC container manages Spring beans — spring-managed instantiation of a Java classes.
It is responsible for instantiating, initializing and wiring beans. The container also manages the life cycle of beans. When
container starts, beans need to be instantiated; it may be required to perform some post-initialization steps to get it into
a usable state. Similarly, when the beans are no longer required, they will be removed from the container.</p>

<p><img src="data/spring/images/8.beanLifeCycle.png" alt="" /></p>
<p><img src="data/spring/images/9.beanLifeCycle.png" alt="" /></p>

<p style="text-align: justify;">There are 4 ways of controlling the lifecycle events of a bean:</p>
<ol>
<li style="text-align: justify;"><code>InitializingBean</code> &amp; <code>DisposableBean</code> callback interfaces</li>
<li style="text-align: justify;"><code>*Aware</code> interfaces for specific behavior</li>
<li style="text-align: justify;">Custom <code>init()</code> and <code>destroy()</code> methods in bean configuration</li>
<li style="text-align: justify;"><code>@PostConstruct</code>&nbsp;and <code>@PreDestroy</code>&nbsp;annotations</li>
</ol>

<h2>InitializingBean and DisposableBean</h2>
<p>The <a href="https://docs.spring.io/spring-framework/docs/5.2.3.RELEASE/javadoc-api/org/springframework/beans/factory/InitializingBean.html"
target="_blank">InitializingBean</a> interface allows a bean to perform initialization work after all the necessary properties
on the bean have been set by the container.</p>
<pre>
package org.springframework.beans.factory;

public interface InitializingBean {
    void afterPropertiesSet() throws Exception;
}
</pre>

<p>Similarly, implementing the&nbsp;<a href="https://docs.spring.io/spring-framework/docs/5.2.3.RELEASE/javadoc-api/org/springframework/beans/factory/DisposableBean.html"
target="_blank">DisposableBean</a>&nbsp;interfaceallows a bean to get a callback when the container is being destroyed.</p>
<pre>
package org.springframework.beans.factory;

public interface DisposableBean {
    void destroy() throws Exception;
}
</pre>

<table width="100%">
<tbody>
<tr>
<td>
<pre>@Component
@Primary
public class BubbleSort implements
&nbsp;&nbsp;&nbsp;&nbsp;SortAlgorithm, InitializingBean, DisposableBean {
&nbsp;
    @Override
    public int[] sort(int[] intArr) {
        //TODO: impl goes here
        return intArr;
    }
&nbsp;
    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("afterPropertiesSet");
    }
&nbsp;
    @Override
    public void destroy() throws Exception {
        System.out.println("destroy()");
    }
}
</pre>
</td>
<td><img src="data/spring/images/10.initializingBean_DisposableBean.png" alt=""/></td>
</tr>
</tbody>
</table>

<h2>*Aware interfaces for specific behavior</h2>
<p style="text-align: justify;">Spring offers a range of <code>*Aware</code> interfaces that allow beans to indicate to
the container that they require a certain infrastructure dependency. Each interface will require you to implement a method
to inject the dependency in bean.</p>

<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>AWARE INTERFACE</strong></td>
<td style="text-align: center;"><strong>INTERFACE DEFINITION</strong></td>
<td style="text-align: center;"><strong>PURPOSE</strong></td>
</tr>
<tr>
<td><a href="https://docs.spring.io/spring-framework/docs/5.2.3.RELEASE/javadoc-api/org/springframework/context/ApplicationContextAware.html" target="_blank">ApplicationContextAware</a></td>
<td>
<pre>
package org.springframework.context;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.Aware;

public interface ApplicationContextAware extends Aware {
    void setApplicationContext(ApplicationContext var1)
        throws BeansException;
}
</pre>
</td>
<td><p>Interface to be implemented by any object that wishes to be notified of the <code>ApplicationContext</code> that it runs in.</p></td>
</tr>
<tr>
<td><a href="https://docs.spring.io/spring-framework/docs/5.2.3.RELEASE/javadoc-api/org/springframework/context/ApplicationEventPublisherAware.html" target="_blank">ApplicationEventPublisherAware</a></td>
<td>
<pre>
package org.springframework.context;

import org.springframework.beans.factory.Aware;

public interface ApplicationEventPublisherAware
    extends Aware {

    void setApplicationEventPublisher(
        ApplicationEventPublisher var1);
}
</pre>
</td>
<td><p>Set the <code>ApplicationEventPublisher</code> that this object runs in.</p></td>
</tr>
<tr>
<td><a href="https://docs.spring.io/spring-framework/docs/5.2.3.RELEASE/javadoc-api/org/springframework/beans/factory/BeanClassLoaderAware.html" target="_blank">BeanClassLoaderAware</a></td>
<td>
<pre>
package org.springframework.beans.factory;

public interface BeanClassLoaderAware extends Aware {
    void setBeanClassLoader(ClassLoader var1);
}
</pre>
</td>
<td><p>Callback that supplies the bean class loader to a bean instance.</p></td>
</tr>
<tr>
<td><a href="https://docs.spring.io/spring-framework/docs/5.2.3.RELEASE/javadoc-api/org/springframework/beans/factory/BeanFactoryAware.html" target="_blank">BeanFactoryAware</a></td>
<td>
<pre>
package org.springframework.beans.factory;

import org.springframework.beans.BeansException;

public interface BeanFactoryAware extends Aware {
    void setBeanFactory(BeanFactory var1)
        throws BeansException;
}
</pre>
</td>
<td><p>Callback that supplies the owning factory to a bean instance.</p></td>
</tr>
<tr>
<td><a href="https://docs.spring.io/spring-framework/docs/5.2.3.RELEASE/javadoc-api/org/springframework/beans/factory/BeanNameAware.html" target="_blank">BeanNameAware</a></td>
<td>
<pre>
package org.springframework.beans.factory;

public interface BeanNameAware extends Aware {
    void setBeanName(String var1);
}
</pre>
</td>
<td><p>Set the name of the bean in the bean factory that created this bean.</p></td>
</tr>
<tr>
<td><a href="https://docs.spring.io/spring-framework/docs/5.2.3.RELEASE/javadoc-api/org/springframework/jca/context/BootstrapContextAware.html" target="_blank">BootstrapContextAware</a></td>
<td>
<pre>

</pre>
</td>
<td><p>Set the BootstrapContext that this object runs in.</p></td>
</tr>
<tr>
<td><a href="https://docs.spring.io/spring-framework/docs/5.2.3.RELEASE/javadoc-api/org/springframework/context/weaving/LoadTimeWeaverAware.html" target="_blank">LoadTimeWeaverAware</a></td>
<td>
<pre>
package org.springframework.context.weaving;

import org.springframework.beans.factory.Aware;
import org.springframework.instrument.classloading
    .LoadTimeWeaver;

public interface LoadTimeWeaverAware extends Aware {
    void setLoadTimeWeaver(LoadTimeWeaver var1);
}
</pre>
</td>
<td><p>Set the LoadTimeWeaver of this object’s containing ApplicationContext.</p></td>
</tr>
<tr>
<td><a href="https://docs.spring.io/spring-framework/docs/5.2.3.RELEASE/javadoc-api/org/springframework/context/MessageSourceAware.html" target="_blank">MessageSourceAware</a></td>
<td>
<pre>
package org.springframework.context;

import org.springframework.beans.factory.Aware;

public interface MessageSourceAware extends Aware {
    void setMessageSource(MessageSource var1);
}
</pre>
</td>
<td><p>Set the MessageSource that this object runs in.</p></td>
</tr>
<tr>
<td><a href="https://docs.spring.io/spring/docs/5.2.3.RELEASE/javadoc-api/org/springframework/jmx/export/notification/NotificationPublisherAware.html" target="_blank">NotificationPublisherAware</a></td>
<td>
<pre>
package org.springframework.jmx.export.notification;

import org.springframework.beans.factory.Aware;

public interface NotificationPublisherAware
    extends Aware {
    void setNotificationPublisher(
        NotificationPublisher var1);
}
</pre>
</td>
<td><p>Set the NotificationPublisher instance for the current managed resource instance.</p></td>
</tr>
<tr>
<td>PortletConfigAware</td>
<td>
<pre>

</pre>
</td>
<td><p>Set the PortletConfig this object runs in.</p></td>
</tr>
<tr>
<td>PortletContextAware</td>
<td>
<pre>

</pre>
</td>
<td><p>Set the PortletContext that this object runs in.</p></td>
</tr>
<tr>
<td><a href="https://docs.spring.io/spring/docs/5.2.3.RELEASE/javadoc-api/org/springframework/context/ResourceLoaderAware.html" target="_blank">ResourceLoaderAware</a></td>
<td>
<pre>
package org.springframework.context;

import org.springframework.beans.factory.Aware;
import org.springframework.core.io.ResourceLoader;

public interface ResourceLoaderAware extends Aware {
    void setResourceLoader(ResourceLoader var1);
}
</pre>
</td>
<td><p>Set the ResourceLoader that this object runs in.</p></td>
</tr>
<tr>
<td><a href="https://docs.spring.io/spring-framework/docs/5.2.3.RELEASE/javadoc-api/org/springframework/web/context/ServletConfigAware.html" target="_blank">ServletConfigAware</a></td>
<td>
<pre>

</pre>
</td>
<td><p>Set the ServletConfig that this object runs in.</p></td>
</tr>
<tr>
<td><a href="https://docs.spring.io/spring-framework/docs/5.2.3.RELEASE/javadoc-api/org/springframework/web/context/ServletContextAware.html" target="_blank">ServletContextAware</a></td>
<td>
<pre>

</pre>
</td>
<td><p>Set the ServletContext that this object runs in.</p></td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td>
<pre>
@Component
@Primary
public class BubbleSort implements SortAlgorithm,
        InitializingBean, DisposableBean,
        ApplicationContextAware, BeanNameAware,
        BeanFactoryAware {

    @Override
    public int[] sort(int[] intArr) {
        //TODO: impl goes here
        return intArr;
    }

    @Override
    public void afterPropertiesSet()
        throws Exception {

        System.out.println("afterPropertiesSet");
    }

    @Override
    public void destroy() throws Exception {
        System.out.println("destroy()");
    }

    @Override
    public void setBeanFactory(BeanFactory beanFactory)
        throws BeansException {

        System.out.println(String.format(
                "inside setBeanFactory() :: "
                + "isSingleton = %b",
                beanFactory.isSingleton("bubbleSort")
        ));
    }

    @Override
    public void setBeanName(String s) {
        System.out.println(String.format(
            "inside setBeanName() :: BeanName = %s", s
        ));
    }

    @Override
    public void setApplicationContext(
        ApplicationContext applicationContext)
        throws BeansException {

        System.out.println(String.format(
                "inside setApplicationContext() :: "
                + "Bean Definition Names = %s",
                Arrays.toString(applicationContext
                    .getBeanDefinitionNames())
        ));
    }
}
</pre>
</td>
<td style="vertical-align: top;">
<p style="text-align: justify;">This example implements the <code>ApplicationContextAware</code>, <code>BeanNameAware</code>,
and <code>BeanFactoryAware</code> interfaces, in addition to <code>InitializingBean</code> and <code>DisposableBean</code>
interfaces.</p>

<p style="text-align: justify;">At line# 27, <code>BubbleSort</code> overrides <code>setBeanFactory()</code> of
<code>BeanFactoryAware</code> interface. At runtime, spring passes the <code>BeanFactory</code> object that created the
bean. The code uses the <code>BeanFactory</code> object to print whether or not this bean is a singleton.</p>

<p style="text-align: justify;">At line# 38, this code overrides the <code>setBeanName()</code> method of the
<code>BeanNameAware</code> interface. At runtime, spring passes the name of the bean as a String that the code prints out.
The code uses the beanName to print the bean name defined in context.</p>

<p style="text-align: justify;">At line# 45, the code overrides the <code>setApplicationContext()</code> method of the
<code>ApplicationContextAware</code> interface. At runtime, Spring passes the <code>ApplicationContext</code> object
that created the bean. The code uses the <code>ApplicationContext</code> object to print the bean definition names.</p>

<img src="data/spring/images/11.aware_interfaces.png" alt=""/>
</td>
</tr>
</tbody>
</table>

<h2>@PostConstruct and @PreDestroy</h2>
<p style="text-align: justify;"><code>@PostConstruct</code> annotated method will be invoked after the bean has been
constructed using default constructor and just before it’s instance is returned to requesting object. <code>@PreDestroy</code>
annotated method is called just before the bean is about be destroyed inside bean container.</p>

<table width="100%">
<tbody>
<tr>
<td>
<pre>
// more import statements goes here

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

@Component
@Primary
public class BubbleSort implements SortAlgorithm {
&nbsp;
    @Override
    public int[] sort(int[] intArr) {
        //TODO: impl goes here
        return intArr;
    }

    @PostConstruct
    public void customInit() {
        System.out.println("customInit() invoked");
    }

    @PreDestroy
    public void customDestroy() {
        System.out.println("customDestroy() invoked");
    }
}
</pre>
</td>
<td>
<p style="text-align: justify;">The annotations <code>@PostConstruct</code> and <code>@PreDestroy</code> does not belong
to the spring API; these are part of <strong>J2EE library common-annotations.jar</strong> file.</p>
<pre>
import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
</pre>
<img src="data/spring/images/12.custom_init_destroy.png" alt=""/>
</td>
</tr>
</tbody>
</table>

<p style="text-align: justify;">Note that both <code>@PostConstruct</code> and <code>@PreDestroy</code> annotations are
part of Java EE. And since Java EE has been <i>deprecated</i> in <strong>Java 9</strong> and <i>removed</i> in
<strong>Java 11</strong>, we have to add an additional dependency to use these annotations:</p>
<pre>
&lt;dependency&gt;
    &lt;groupId&gt;javax.annotation&lt;/groupId&gt;
    &lt;artifactId&gt;javax.annotation-api&lt;/artifactId&gt;
    &lt;version&gt;1.3.2&lt;/version&gt;
&lt;/dependency&gt;
</pre>

<h2>Bean PostProcessor</h2>
<p style="text-align: justify;">Spring provides the <code>BeanPostProcessor</code> interface that gives you the means to
tap into the Spring context lifecycle and interact with beans as they are processed. This interface allows for custom
modification of new bean instances created by spring bean factory. If we want to implement some custom logic after the
Spring container finishes instantiating, configuring, and initializing a bean, we can plug in one or more
<code>BeanPostProcessor</code> implementations.</p>

<p style="text-align: justify;">In case of multiple BeanPostProcessor instances, we can control the order by setting the
order property or implement <code>Ordered</code> interface.</p>

<p style="text-align: justify;">This interface contains two callback methods:</p>
<ol>
<li style="text-align: justify;">
<code>postProcessBeforeInitialization</code> — Spring calls this method after calling the methods of the <code>Aware</code>
interfaces and <strong>before</strong> any bean initialization callbacks, such as  <code>InitializingBean.afterPropertiesSet()</code>
or a <code>@PostConstruct</code> method.
</li>
<li style="text-align: justify;">
<code>postProcessAfterInitialization</code> — Spring calls this method <strong>after</strong> any bean initialization callbacks.
</li>
</ol>

<pre>
package org.springframework.beans.factory.config;

import org.springframework.beans.BeansException;
import org.springframework.lang.Nullable;

public interface BeanPostProcessor {
    @Nullable
    default Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }

    @Nullable
    default Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }
}
</pre>

<p style="text-align: justify;">For each bean instance that is managed by the container, the post-processor gets a callback
from the container both <strong>before</strong> container initialization methods are called as well as <strong>after</strong>
any bean initialization callbacks.</p>

<pre>
package com.rahulmitt.interviewpedia.springframework.componentscan;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Component;

@Component
public class CustomBeanPostProcessor implements BeanPostProcessor {

    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        System.out.println(String.format("postProcessBeforeInitialization() :: %s is getting initialized", beanName));
        return bean;
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        System.out.println(String.format("postProcessAfterInitialization() :: %s initialization done", beanName));
        return bean;
    }
}
</pre>
<p style="text-align: justify;">Reference: <a href="https://docs.spring.io/spring-framework/docs/5.2.3.RELEASE/spring-framework-reference/core.html#beans-factory-nature" target="_blank">Customizing the Nature of a Bean</a></p>

        */}.toString().slice(14,-3)
    },

    {   /* Components */
        "text" : function(){/*
<h1>Components</h1>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ANNOTATION</strong></td>
<td style="text-align: center;"><strong>USAGE</strong></td>
</tr>
<tr>
<td><code>@Bean</code></td>
<td>
<p style="text-align: justify;"><code>@Bean</code> is used to explicitly declare a single bean and works in conjunction
with a configuration class (annotated with <code>@Configuration</code>) and thus in the annotation based configuration.
It decouples the declaration of the bean from the class definition, and lets you create and configure beans exactly how
you choose. This annotation is applicable to methods (as opposed to <code>@Component</code> which applies to classes/
interfaces). Such an annotated method returns an object that spring should register as bean in the IoC container. The body
of the method bears the logic responsible for creating the instance.</p>
</td>
</tr>
<tr>
<td><code>@Component</code></td>
<td>
<p style="text-align: justify;"><code>@Component</code> is a generic stereotype for any Spring-managed component that is
used to auto-detect and auto-configure beans using classpath scanning. However, it only works, if we enabled a
<code>@ComponentScan</code> for our application and our class is included. Control of wiring is quite limited with this
approach, since it's purely declarative.</p>

<p style="text-align: justify;"><code>@Controller</code>, <code>@Service</code> and <code>@Repository</code> are
specializations of <code>@Component</code> for more specific use cases (in the persistence, service, and presentation
layers, respectively). The IoC container picks them up and registers their classes as beans, just as if they were
annotated with <code>@Component</code>.</p>
</td>
</tr>
<tr>
<td><code>@Controller</code></td>
<td>
<p style="text-align: justify;"><code>@Controller</code> annotation indicates that a particular class serves the role of
a controller. We cannot switch this annotation with any other like <code>@Service</code> or <code>@Repository</code>,
even though they look same. The <strong>dispatcher</strong> scans the classes annotated with <code>@Controller</code>
and detects methods annotated with <code>@RequestMapping</code> annotations within them. We can use <code>@RequestMapping</code>
with only those methods whose classes are annotated with <code>@Controller</code> and it will NOT work with
<code>@Component</code>, <code>@Service</code>, <code>@Repository</code> etc.</p>
</td>
</tr>
<tr>
<td><code>@Service</code></td>
<td>
<p style="text-align: justify;"><code>@Service</code> beans hold the <strong>business logic</strong> and call methods in
the <strong>repository layer</strong>. Apart from the fact that it's used to indicate that it's holding the
<strong>business logic</strong>, there&rsquo;s nothing else noticeable in this annotation.</p>
</td>
</tr>
<tr>
<td><code>@Repository</code></td>
<td>
<p style="text-align: justify;"><code>@Repository</code> annotation is a marker for any class that fulfills the role or
stereotype of a repository (also known as Data Access Object or DAO). Among the uses of this marker is the automatic
translation of exceptions. It catches platform specific exceptions and re-throws them as one of Spring&rsquo;s unified
unchecked exception. For this, we&rsquo;re provided with <code>PersistenceExceptionTranslationPostProcessor</code>, that
we are required to add to the container. This bean post processor adds an advisor to any bean that&rsquo;s annotated with
<code>@Repository</code> so that any platform-specific exceptions are caught and then re-thrown as one of Spring&rsquo;s
unchecked data access exceptions.</p>

<p style="text-align: justify;"><strong><span style="text-decoration: underline;">Note</span>:</strong>
<code>PersistenceExceptionTranslationPostProcessor</code> will be automatically registered if <strong>JPA</strong> is detected.</p>
</td>
</tr>
</tbody>
</table>

<h2 style="text-align: justify;">@Bean vs @Component</h2>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>@Bean</strong></td>
<td style="text-align: center;"><strong>@Component</strong></td>
</tr>
<tr>
<td><code>@Bean</code> explicitly declares a single bean, rather than letting Spring do it automatically.</td>
<td><code>@Component</code> auto detects and configures the beans using classpath scanning</td>
</tr>
<tr>
<td><code>@Bean</code> decouples the declaration of the bean from the class definition.</td>
<td><code>@Component</code> does not decouple the declaration of the bean from the class definition</td>
</tr>
<tr>
<td><code>@Bean</code> is a method level annotation and name of the method serves as the bean name.</td>
<td><code>@Component</code> is a class level annotation</td>
</tr>
<tr>
<td><code>@Bean</code> annotation has to be used within the class which is annotated with @Configuration.</td>
<td><code>@Component</code> need not to be used with the <code>@Configuration</code> annotation</td>
</tr>
<tr>
<td>we can create a bean of a class using <code>@Bean</code> even if the class is present outside the spring container.</td>
<td>We cannot create a bean of a class using <code>@Component</code>, if the class is outside spring container</td>
</tr>
<tr>
<td><code>@Bean</code> has no specializations.</td>
<td><code>@Component</code> has different specializations like <code>@Controller</code>, <code>@Repository</code> and <code>@Service</code></td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Reading Properties Files */
        "text" : function(){/*
<h1>Reading Properties Files</h1>
<p>Spring Boot looks for an externalized configuration file — <code>application.properties</code> or <code>application.yml</code> — in 4 predetermined locations in the following order of precedence:</p>
<ol>
<li>A <strong>/config</strong> subdirectory of the current directory</li>
<li>The current directory</li>
<li>A classpath <strong>/config</strong> package</li>
<li>The classpath root</li>
</ol>
<p>Therefore, a property defined in <code>application.properties</code> and placed in the <strong>/config</strong> subdirectory of the current directory will be loaded. This will also override properties in other locations in case of a collision.</p>
<p style="text-align: justify;"><img src="data/spring/images/14.properties.png" alt="" width="100%" /></p>

<pre>package com.rahulmitt.interviewpedia.springframework.properties;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
public class PropertiesDemo {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(PropertiesDemo.class, args);
        ExternalService externalService = context.getBean(ExternalService.class);
        System.out.println(externalService.getUrl());
    }
}
</pre>

<table width="100%">
<tbody>
<tr>
<td style="text-align: center;">Using <strong>@Value</strong> Annotation</td>
<td style="text-align: center;">Using <strong>Environment</strong> property resolver</td>
</tr>
<tr>
<td>
<pre>
@Component
public class ExternalService {

    @Value("${external.service.url}")
    private String url;

    public String getUrl() {
        return url;
    }
}
</pre>
</td>
<td>
<pre>
@Component
public class ExternalService {

    @Autowired
    private Environment environment;

    public String getUrl() {
        return environment.getProperty("external.service.url");
    }
}
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
<p style="text-align: justify;">In case the properties files are placed at some other path:</p>
<p style="text-align: justify;"><img src="data/spring/images/15.external_properties_files.png" alt="" /></p>
<p style="text-align: justify;"><img src="data/spring/images/16.external_properties_files.png" alt="" /></p>
<p style="text-align: justify;">We can provide the details as VM args as below:</p>
<p style="text-align: justify;"><img src="data/spring/images/17.external_properties_files.png" alt="" /></p>
<p style="text-align: justify;">In case, the properties file name is something other than <code>application*.properties</code>
, we can use <code>-Dspring.config.name=myprops</code> to load them.</p>



<p style="text-align: justify;">Reference: <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config" target="_blank">Externalized Configuration</a></p>

        */}.toString().slice(14,-3)
    },

    {   /* Contexts and Dependency Injection */
        "text" : function(){/*
<h1>Contexts and Dependency Injection (CDI)</h1>
<p style="text-align: justify;">TODO</p>
<p style="text-align: justify;"><a href="https://www.baeldung.com/java-ee-cdi" target="_blank">https://www.baeldung.com/java-ee-cdi</a></p>
<p style="text-align: justify;"><a href="https://dzone.com/articles/what-cdi-how-does-it-relate" target="_blank">https://dzone.com/articles/what-cdi-how-does-it-relate</a></p>
<p style="text-align: justify;">&nbsp;</p>
        */}.toString().slice(14,-3)
    },

]
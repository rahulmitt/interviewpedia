var indepth_que = [
	{
		question : "Autowiring in Depth",
		tags : ["Autowiring"]
	},

	{
		question : "Bean Scope",
		tags : ["Bean Scope"]
	},

	{
		question : "Component Scan",
		tags : ["Component Scan"]
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
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },
]
var intro_que = [
	{
		question : "Introduction to Spring Framework",
		tags : ["Introduction", "Spring Framework"]
	},

	{
		question : "BeanFactory vs ApplicationContext",
		tags : ["BeanFactory", "ApplicationContext"]
	},

	{
		question : "Spring - Behind the scene",
		tags : ["Spring Example", "@Primary", "@Qualifier"]
	},

	{
		question : "Dependency Injection",
		tags : ["Dependency Injection", "@Autowired", "Constructor based DI", "Setter based DI", "Field based DI"]
	},

    {
		question : "Spring Framework Modules",
		tags : ["Spring Modules"]
	},
]

var intro_ans = [
    {   /* Introduction to Spring Framework */
        "text" : function(){/*
<h1>Introduction to Spring Framework</h1>
<h2>Dependency</h2>
<pre>// The complex business service needs a sorting algorithm to perform its operations
// Hence, it depends upon a sorting algorithm - its a dependency of the complex business service
public class ComplexBusinessService {
    private SortAlgorithm sortAlgorithm;
&nbsp;
    // more code goes here
}
</pre>
<p>&nbsp;</p>
<h2>Tightly Coupled Code</h2>
<pre>public class ComplexBusinessService {
    // ComplexBusinessService is tightly coupled with BubbleSort
    private SortAlgorithm sortAlgorithm = new BubbleSort();
&nbsp;
    // more code goes here
}
&nbsp;
public class BubbleSort implements SortAlgorithm {
    // more code goes here
}
&nbsp;
public class QuickSort implements SortAlgorithm {
    // more code goes here
}
</pre>
<p style="text-align: justify;">The problem with this type of code is that <code>ComplexBusinessService.java</code> is directly instantiating its dependency <code>BubbleSort.java</code>. Later on, changing the sorting algorithm to <code>QuickSort.java</code> would require a code change.</p>
<pre>public class ComplexBusinessService {
    // ComplexBusinessService is now tightly coupled with QuickSort
    private SortAlgorithm sortAlgorithm = new QuickSort();  // code change
&nbsp;
    // more code goes here
}
&nbsp;
public class BubbleSort implements SortAlgorithm {
    // more code goes here
}
&nbsp;
public class QuickSort implements SortAlgorithm {
    // more code goes here
}
</pre>
<p>&nbsp;</p>
<h2>Remove Tight Coupling</h2>
<pre>public class ComplexBusinessService {
    // remove direct instantiation of dependencies
     private SortAlgorithm sortAlgorithm; // = new BubbleSort();
&nbsp;
    // provide a constructor/setter with dependency as an argument
     public ComplexBusinessService(SortAlgorithm sortAlgorithm) {
        this.sortAlgorithm = sortAlgorithm;
     }
&nbsp;
     // more code goes here
}
&nbsp;
public class BubbleSort implements SortAlgorithm {
    // more code goes here
}
</pre>
<p style="text-align: justify;">Now, this code can be simply invoked as follows. Note that, since <code>ComplexBusinessService.java</code> is no longer dependent upon any specific sorting algorithm, the code is said to be <em>loosely-coupled</em> as <code>BubbleSort.java</code> can be easily replaced here with <code>QuickSort.java</code> without modifying <code>ComplexBusinessService.java</code> implementation.</p>
<pre>SortAlgorithm sortAlgorithm = new BubbleSort();
ComplexBusinessService businessService = new ComplexBusinessService(sortAlgorithm);
</pre>
<p>&nbsp;</p>
<h2 style="text-align: justify;">Dependency Injection</h2>
<p style="text-align: justify;">The task of instantiating the dependencies and injecting them can be easily done using the framework; however, it's the job of the&nbsp;developer to tell the framework what are the dependencies and where they need to be injected. This can be done using the following two annotations:</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ANNOTATION</strong></td>
<td style="text-align: center;"><strong>DESCRIPTION</strong></td>
</tr>
<tr>
<td><strong>@Component</strong></td>
<td>Tells the spring framework to manage the instances of the annotated class</td>
</tr>
<tr>
<td><strong>@Autowire</strong></td>
<td>Tells the framework that the annotated class is a dependency of another class and spring would look for this dependency among the <em>components</em> it manages</td>
</tr>
</tbody>
</table>
<pre>@Component
public class ComplexBusinessService {
&nbsp;
    @Autowired
    private SortAlgorithm sortAlgorithm;
&nbsp;
    // more code goes here
}
&nbsp;
@Component
public class BubbleSort implements SortAlgorithm {
    // more code goes here
}
</pre>
<p>&nbsp;</p>
<h2 style="text-align: justify;">Spring Terminology</h2>
<table width="100%">
<tbody>
<tr>
<td width='150px'><strong>Beans</strong></td>
<td>These are the objects that are managed by Spring framework</td>
</tr>
<tr>
<td style="vertical-align: top;"><strong>Autowiring</strong></td>
<td>The process where spring identifies the dependencies and injects them</td>
</tr>
<tr>
<td style="vertical-align: top;"><strong>Dependency Injection</strong></td>
<td>This is achieved by <code>@Autowiring</code> annotation</td>
</tr>
<tr>
<td style="vertical-align: top;"><strong>Inversion of Control</strong></td>
<td>Instead of the class that needs the dependencies, the spring framework instantiates them</td>
</tr>
<tr>
<td style="vertical-align: top;"><strong>IoC Container</strong></td>
<td>The <strong>Spring IoC container</strong> is at the core of the Spring Framework. The container will create the
objects, wires them together, configure them, and manage their complete life cycle from creation till destruction. The
Spring container uses <strong>dependency injection (DI)</strong> to manage the components that make up an application.
Spring provides following two types of containers.<ol>
<li><code>BeanFactory</code> container</li>
<li><code>ApplicationContext</code> container</li>
</ol></td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* BeanFactory vs ApplicationContext */
        "text" : function(){/*
<h1>BeanFactory vs ApplicationContext</h1>
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },

    {   /* Spring - Behind the scene */
        "text" : function(){/*
<h1>Spring - Behind the scene</h1>
<table>
<tbody>
<tr>
<td style="vertical-align: top;">
<p><img src="data/spring/images/1.spring_behind the scene.png" alt="" /></p>
</td>
<td style="vertical-align: top;">
<p style="text-align: justify;">Spring performs the <i>component scan</i> in the package of class annotated with
<code>@SpringBootApplication</code> annotation. It performs a recursive search in this package and searches all the
classes annotated with <code>@Component</code> annotation. Once spring has <i>identified the components</i>
to be managed, it starts <i>creating the beans</i> and figure out the <i>dependency injections</i>.</p>

<p style="text-align: justify;">Consider the sample code below. In this example, the class <code>BinarySearchDemo.java</code>
is a <code>org.springframework.boot.SpringApplication</code> because it is annotated with <code>@SpringBootApplication</code>
annotation. It identifies the candidate component classes <code>BinarySearch.java</code> and <code>BubbleSort.java</code> as they are
annotated with <code>@Component</code> annotation.</p>

<p style="text-align: justify;">Notice that since <code>QuickSort.java</code> is not annotated with <code>@Component</code>
annotation, this class is ignored by spring. It proceeds to create shared instance of the following singleton beans:</p>
<ol>
<li style="text-align: justify;"><code>com.rahulmitt.interviewpedia.spring.basics.BinarySearchDemo</code></li>
<li style="text-align: justify;"><code>com.rahulmitt.interviewpedia.spring.basics.search.BinarySearch</code></li>
<li style="text-align: justify;"><code>com.rahulmitt.interviewpedia.spring.basics.sort.impl.BubbleSort</code></li>
</ol>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">Here is the log snippet:</p>
<p><img src="data/spring/images/2.log_snippet.png" alt="" width="100%"/></p>
<p style="text-align: justify;">&nbsp;</p>
<pre>package com.rahulmitt.interviewpedia.spring.basics;
&nbsp;
import com.rahulmitt.interviewpedia.spring.basics.search.BinarySearch;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
&nbsp;
@SpringBootApplication
public class BinarySearchDemo {
    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(BinarySearchDemo.class, args);
        BinarySearch binarySearch = context.getBean(BinarySearch.class);
&nbsp;
        int key = 5;
        int idx = binarySearch.search(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, key);
&nbsp;
        if (idx == -1) {
            System.out.println(String.format("%d not found", key));
        } else {
            System.out.println(String.format("%d found at index %d", key, idx));
        }
    }
}
</pre>
<p style="text-align: justify;">&nbsp;</p>
<pre>package com.rahulmitt.interviewpedia.spring.basics.search;
&nbsp;
import com.rahulmitt.interviewpedia.spring.basics.sort.SortAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
&nbsp;
@Component
public class BinarySearch {
&nbsp;
    @Autowired
    private SortAlgorithm sortAlgorithm;
&nbsp;
    public int search(int[] intArr, int num) {
        intArr = sortAlgorithm.sort(intArr);
        int start = 0;
        int end = intArr.length - 1;
        while (end &gt;= start) {
            int mid = (start + end) / 2;
            if (intArr[mid] &gt; num) end = mid - 1;
            else if (intArr[mid] &lt; num) start = mid + 1;
            else return mid;
        }
        return -1;
    }
}
</pre>
<p style="text-align: justify;">&nbsp;</p>
<pre>package com.rahulmitt.interviewpedia.spring.basics.sort;
&nbsp;
public interface SortAlgorithm {
    int[] sort(int[] intArr);
}
</pre>
<p style="text-align: justify;">&nbsp;</p>
<pre>package com.rahulmitt.interviewpedia.spring.basics.sort.impl;
&nbsp;
import com.rahulmitt.interviewpedia.spring.basics.sort.SortAlgorithm;
import org.springframework.stereotype.Component;
&nbsp;
@Component
public class BubbleSort implements SortAlgorithm {
&nbsp;
    @Override
    public int[] sort(int[] intArr) {
        //TODO: impl goes here
        return intArr;
    }
}
</pre>
<p style="text-align: justify;">&nbsp;</p>
<pre>package com.rahulmitt.interviewpedia.spring.basics.sort.impl;
&nbsp;
import com.rahulmitt.interviewpedia.spring.basics.sort.SortAlgorithm;
import org.springframework.stereotype.Component;
&nbsp;
// @Component
public class QuickSort implements SortAlgorithm {
&nbsp;
    @Override
    public int[] sort(int[] intArr) {
        //TODO: impl goes here
        return intArr;
    }
}
</pre>
<p style="text-align: justify;">&nbsp;</p>
<p>Now, adding <code>@Component</code> annotation to <code>QuickSort.java</code> would
result in <code>org.springframework.beans.factory.NoUniqueBeanDefinitionException: No qualifying bean of type
'com.rahulmitt.interviewpedia.spring.basics.sort.SortAlgorithm' available: expected single matching bean but found 2:
bubbleSort,quickSort</code></p>

<p style="text-align: justify;">This issue can be be resolved using <code>@Primary</code> annotation to give a higher
preference to a bean when there are multiple beans of the same type.</p>
<pre>
package com.rahulmitt.interviewpedia.spring.basics.sort.impl;

import com.rahulmitt.interviewpedia.spring.basics.sort.SortAlgorithm;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

 @Component
 @Primary
public class QuickSort implements SortAlgorithm {

    @Override
    public int[] sort(int[] intArr) {
        //TODO: impl goes here
        return intArr;
    }
}
</pre>

<p style="text-align: justify;"><code>@Primary</code> annotation marks a bean as the <strong>default</strong>. If a bean
is <code>@Autowired</code> without any <code>@Qualifier</code>, and multiple beans of that type exist, the candidate bean
marked <code>@Primary</code> will be chosen as a default selection.</p>

<p style="text-align: justify;"><code>@Primary</code> is good when most of <code>@Autowired</code> wants a particular bean.
That way, only the <code>@Autowired</code> that wants the other bean(s) need to specify <code>@Qualifier</code>. That way,
you have primary beans that all autowired wants, and <code>@Qualifier</code> is only used to request an <i>alternate</i> bean.
        */}.toString().slice(14,-3)
    },

    {   /* Dependency Injection */
        "text" : function(){/*
<h1>Dependency Injection</h1>
<p style="text-align: justify;">The <code>@Autowired</code> annotation can be used to autowire a bean on <strong>constructor</strong>,&nbsp;<strong>setter</strong> methods or <strong>fields</strong>.</p>
<h2 style="text-align: justify;">1. Constructor-based DI</h2>
<p style="text-align: justify;">In constructor-based DI, the class constructor is annotated with&nbsp;<code>@Autowired</code>&nbsp;and includes a variable number of arguments with the objects to be injected.</p>
<pre>@Component
public class ConstructorBasedInjection {

&nbsp;&nbsp;private final InjectedBean injectedBean;

&nbsp;&nbsp;@Autowired
&nbsp;&nbsp;public ConstructorBasedInjection(InjectedBean injectedBean) {
&nbsp;&nbsp;&nbsp;&nbsp;this.injectedBean = injectedBean;
&nbsp;&nbsp;}
}
</pre>
<p style="text-align: justify;">The main advantage of constructor-based injection is that you can declare your injected fields <code>final</code>, as they will be initiated during class instantiation. This is convenient for required dependencies.</p>
<h2 style="text-align: justify;">2. Setter-based DI</h2>
<p style="text-align: justify;">In setter-based DI, setter methods are annotated with&nbsp;<code>@Autowired</code>. Spring container will call these setters once the Bean is instantiated using a no-argument constructor or a no-argument static factory method in order to inject the Bean&rsquo;s dependencies.</p>
<pre>@Component
public class SetterBasedInjection {

&nbsp;&nbsp;private InjectedBean injectedBean;

&nbsp;&nbsp;@Autowired
&nbsp;&nbsp;public void setInjectedBean(InjectedBean injectedBean) {
&nbsp;&nbsp;&nbsp;&nbsp;this.injectedBean = injectedBean;
&nbsp;&nbsp;}
}
</pre>
<h2 style="text-align: justify;">3. Field-based DI</h2>
<p>In field-based DI, fields/properties are annotated with&nbsp;<code>@Autowired</code>. Spring container will set these fields once the class is instantiated.</p>
<pre>@Component
public class FieldBasedInjection {
&nbsp;
&nbsp;&nbsp;@Autowired
&nbsp;&nbsp;private InjectedBean injectedBean;
&nbsp;
}
</pre>
<p style="text-align: justify;">This is the cleanest way to inject dependencies as&nbsp;there is no need of adding the&nbsp;<em>boilerplate&nbsp;code</em> (no need to declare constructor/setter), but there is a drawback to this appraoch &mdash;&nbsp;<strong>autowired&nbsp;field cannot be made immutable </strong>&mdash; the only way to declare immutable dependencies is by using constructor-based DI.</p>
<p><img src="data/spring/images/3.field_injection_disadvantage.png" alt="" width="100%" /></p>
<p>&nbsp;</p>
<h2>Circular Dependency in Spring</h2>
<p style="text-align: justify;">This happens when a bean A depends on another bean B, and the bean B depends on the bean A as well: <strong>Bean A &rarr; Bean B &rarr; Bean A</strong></p>
<p style="text-align: justify;">When Spring container is loading all the beans, it tries to create beans in the order needed for them to work completely. For instance, if we didn&rsquo;t have a circular dependency, like the following case:&nbsp;<strong>Bean A &rarr; Bean B &rarr; Bean C&nbsp;</strong>,&nbsp;spring will first create bean C, then create bean B (and inject bean C into it), then create bean A (and inject bean B into it).</p>
<p style="text-align: justify;">But, when having a circular dependency, Spring cannot decide which of the beans should be created first, since they depend on one another. In these cases, Spring will raise a&nbsp;<code>org.springframework.beans.factory.BeanCurrentlyInCreationException</code> while loading the context.</p>
<p><img src="data/spring/images/4.circular_dependency_exception.png" alt="" width="100%"/></p>

<p style="text-align: justify;">This exception only occurs in the case of a <strong>constructor injection</strong>; if you use other types of injections
you should not find this exception since the dependencies will be injected when they are needed and not on the context loading.</p>

<table width="100%">
<tbody>
<tr>
<td>Constructor based DI</td>
<td style="vertical-align: top;">
<pre>
@SpringBootApplication
public class CircularDependencyDemo {
  public static void main(String[] args) {

    ApplicationContext context =
        SpringApplication.run(
            CircularDependencyDemo.class,
            args
        );

    A a = context.getBean(A.class);
    B b = context.getBean(B.class);
  }
}
</pre>
<p style="text-align: justify;">Line# 5 results in <code>BeanCurrentlyInCreationException</code></p>
</td>
<td style="vertical-align: top;">
<pre>
@Component
public class A {
    private B b;

    @Autowired
    public A(B b) {
        this.b = b;
    }
}
</pre>
</td>
<td style="vertical-align: top;">
<pre>
@Component
public class B {
    private A a;

    @Autowired
    public B(A a) {
        this.a = a;
    }
}
</pre>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">This can be resolved by using <code>@Lazy</code> annotation. This breaks the cycle by
asking Spring to initialize one of the beans lazily, i.e., instead of fully initializing the bean, it will create a proxy
to inject it into the other bean. The injected bean will only be fully created when it’s first needed.</p>

<pre>
@Component
public class A {
    private B b;

    @Autowired
    public A(@Lazy B b) {
        this.b = b;
    }
}
</pre>

        */}.toString().slice(14,-3)
    },

    {   /* Spring Framework Modules */
        "text" : function(){/*
<h1>Spring Framework Modules</h1>
<p><img src="data/spring/images/5.spring_overview.png" alt="" /></p>
<p style="text-align: justify;">Reference: <a href="https://docs.spring.io/spring/docs/5.2.5.RELEASE/spring-framework-reference/" target="_blank">Spring Framework Documentation</a></p>
        */}.toString().slice(14,-3)
    },

]
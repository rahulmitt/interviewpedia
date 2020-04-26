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
		tags : ["Spring Example"]
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
<p><img src="data/spring/images/1.spring-behind the scene.png" alt="" /></p>
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
<p>Now, adding <code>@Component</code> annotation to <code>QuickSort.java</code> will
result in <code>org.springframework.beans.factory.NoUniqueBeanDefinitionException: No qualifying bean of type
'com.rahulmitt.interviewpedia.spring.basics.sort.SortAlgorithm' available: expected single matching bean but found 2:
bubbleSort,quickSort</code></p>

<p style="text-align: justify;">This issue can be be resolved using <code>@Primary</code> annotation as shown below:</p>
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
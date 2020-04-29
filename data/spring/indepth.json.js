var indepth_que = [
	{
		question : "Autowiring in Depth",
		tags : ["Autowiring"]
	}
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
]
var intro_que = [
	{
		question : "Introduction to Spring Framework",
		tags : ["Introduction", "Spring Framework"]
	},

	{
		question : "Test",
		tags : ["Test"]
	},
]

var intro_ans = [
    {   /* Introduction to Spring Framework */
        "text" : function(){/*
<h1>Introduction to Spring Framework</h1>

<h2>Dependency</h2>
<pre>
// The complex business service needs a sorting algorithm to perform its operations
// Hence, it depends upon a sorting algorithm - its a dependency of the complex business service
public class ComplexBusinessService {
    private SortAlgorithm sortAlgorithm;
}
</pre>

<h2>Tightly Coupled Code</h2>
<pre>
public class ComplexBusinessService {
    // ComplexBusinessService is tightly coupled with BubbleSort
    private SortAlgorithm sortAlgorithm = new BubbleSort();
}

public class BubbleSort implements SortAlgorithm {
    // more code goes here
}

public class QuickSort implements SortAlgorithm {
    // more code goes here
}
</pre>

<p style="text-align: justify;">The problem with this type of code is that <code>ComplexBusinessService</code> is directly
instantiating its dependency <code>BubbleSort</code>. Later on, changing the sorting algorithm to <code>QuickSort</code>
would require a code change.</p>
<pre>
public class ComplexBusinessService {
    // ComplexBusinessService is now tightly coupled with QuickSort
    private SortAlgorithm sortAlgorithm = new QuickSort();  // code change
}

public class BubbleSort implements SortAlgorithm {
    // more code goes here
}

public class QuickSort implements SortAlgorithm {
    // more code goes here
}
</pre>

<h2>Remove Tight Coupling</h2>
<pre>
public class ComplexBusinessService {
    // remove direct instantiation of dependencies
     private SortAlgorithm sortAlgorithm; // = new BubbleSort();

    // provide a constructor/setter with dependency as an argument
     public ComplexBusinessService(SortAlgorithm sortAlgorithm) {
        this.sortAlgorithm = sortAlgorithm;
     }
}

public class BubbleSort implements SortAlgorithm {
    // more code goes here
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
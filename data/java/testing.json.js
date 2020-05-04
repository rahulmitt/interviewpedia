var testing_que = [
	{
		question : "Testing Overview",
		tags : ["Testing Overview"]
	},

	{
		question : "Junit",
		tags : ["Unit Testing", "Junit"]
	},

	{
		question : "TestNG",
		tags : ["Unit Testing", "TestNG"]
	},

	{
		question : "Mockito",
		tags : ["Unit Testing", "Mockito"]
	},

	{
		question : "PowerMock",
		tags : ["Unit Testing", "PowerMock"]
	},
]

var testing_ans = [
    {   /* Testing Overview */
        "text" : function(){/*
<h1>Testing Overview</h1>
<p><img src="data/java/images/testing/1.testing.png" alt="" /></p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;" width="150px"><strong>TESTING STRATEGY</strong></td>
<td style="text-align: center;"><strong>DESCRIPTION</strong></td>
</tr>
<tr>
<td><strong>Unit Testing</strong></td>
<td>&nbsp;</td>
</tr>
<tr>
<td><strong>Integration testing</strong></td>
<td><strong>Integration Testing</strong> is to ensure two or more separate components function correctly together. The components will typically have been subject to some degree of unit (component) testing.</td>
</tr>
<tr>
<td><strong>System Testing</strong></td>
<td>In <strong>System Testing</strong> the scope is the entire system, with an unstated objective which might be any of the other objectives below.</td>
</tr>
<tr>
<td><strong>Regression Testing</strong></td>
<td><strong>Regression Testing</strong> is when system is tested to ensure changes or a new feature has not broken existing features. This will typically encapsulate different levels of scope, from unit testing single components, integration testing multiple components to full system testing.</td>
</tr>
<tr>
<td><strong>User Acceptance Testing</strong></td>
<td><strong>Acceptance Testing</strong> is used to describe the situation where there is some sort of hand-over, either from a supplier to a customer, or between internal departments. To ensure the contract or SLA have been met and the software handover is accepted.</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
        */}.toString().slice(14,-3)
    },

    {   /* Junit */
        "text" : function(){/*
<h1>Junit</h1>
<h2 style="text-align: justify;">Maven Dependency</h2>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;" width="50%"><strong>Junit 4</strong></td>
<td style="text-align: center;"><strong>Junit 5</strong></td>
</tr>
<tr>
<td>
<pre>&lt;dependency&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;junit&lt;/groupId&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;junit&lt;/artifactId&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;version&gt;4.13&lt;/version&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
</pre>
</td>
<td>
<pre>&lt;dependency&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;org.junit.jupiter&lt;/groupId&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;junit-jupiter-engine&lt;/artifactId&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;version&gt;5.5.2&lt;/version&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
</pre>
</td>
</tr>
</tbody>
</table>
<h2 style="text-align: justify;">Annotations</h2>
<p style="text-align: justify;">&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>ANNOTATION</strong></td>
<td style="text-align: center;"><strong>SCOPE</strong></td>
<td style="text-align: center;"><strong>DESCRIPTION</strong></td>
</tr>
<tr>
<td><code>@Test</code></td>
<td>Method-Level</td>
<td>Marks a method as a <strong>junit test</strong></td>
</tr>
<tr>
<td><code>@Before</code></td>
<td>Method-Level</td>
<td>A method annotated with <code>@Before</code> is run <em><strong>before</strong> </em>every <strong>junit test</strong></td>
</tr>
<tr>
<td><code>@After</code></td>
<td>Method-Level</td>
<td>A method annotated with <code>@After</code> is run <em><strong>after</strong></em> every <strong>junit test</strong></td>
</tr>
<tr>
<td><code>@BeforeClass</code></td>
<td>Method-Level</td>
<td>
<p>A method annotated with <code>@BeforeClass</code> is run <em><strong>only once before</strong></em> any <strong>junit test</strong> is run.</p>
<p>The annotated method has to be <code>static</code>.</p>
</td>
</tr>
<tr>
<td><code>@AfterClass</code></td>
<td>Method-Level</td>
<td>
<p>A method annotated with&nbsp;<code>@AfterClass</code>&nbsp;is run&nbsp;<em><strong>only once after</strong></em>&nbsp;all&nbsp;<strong>junit test</strong>&nbsp;are run.</p>
<p>The annotated method has to be&nbsp;<code>static</code>.</p>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
        */}.toString().slice(14,-3)
    },

    {   /* TestNG */
        "text" : function(){/*
<h1>TestNG</h1>
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },

    {   /* Mockito */
        "text" : function(){/*
<h1>Mockito</h1>
<h2 style="text-align: justify;">Maven Dependency</h2>
<table style="height: 110px;" width="301">
<tbody>
<tr>
<td>
<pre>&lt;dependency&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;org.mockito&lt;/groupId&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;mockito-all&lt;/artifactId&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;version&gt;1.10.19&lt;/version&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
</pre>
</td>
</tr>
</tbody>
</table>
<p>Take a look at the following class that needs to be unit tested:&nbsp;</p>
<pre>package com.rahulmitt.interviewpedia.calculator;
&nbsp;
import com.rahulmitt.interviewpedia.calculator.operations.Adder;
import com.rahulmitt.interviewpedia.calculator.operations.Divider;
import com.rahulmitt.interviewpedia.calculator.operations.Multipler;
import com.rahulmitt.interviewpedia.calculator.operations.Substractor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
&nbsp;
@Service
public class CalculatorService {
&nbsp;
    @Autowired
    private Adder adder;
&nbsp;
    @Autowired
    private Substractor substractor;
&nbsp;
    @Autowired
    private Divider divider;
&nbsp;
    @Autowired
    private Multipler multipler;
&nbsp;
    public CalculatorService(Adder adder, Substractor substractor, Divider divider, Multipler multipler) {
        this.adder = adder;
        this.substractor = substractor;
        this.divider = divider;
        this.multipler = multipler;
    }
&nbsp;
    public int add(int a, int b) {
        return adder.add(a, b);
    }
&nbsp;
    public int substract(int a, int b) {
        return substractor.substract(a, b);
    }
&nbsp;
    public int divide(int a, int b) {
        return divider.divide(a, b);
    }
&nbsp;
    public int multiply(int a, int b) {
        return multipler.multiply(a, b);
    }
&nbsp;
}
</pre>
<h2 style="text-align: justify;">Using Mockito</h2>
<pre>package com.rahulmitt.interviewpedia.calculator;
&nbsp;
import com.rahulmitt.interviewpedia.calculator.operations.Adder;
import com.rahulmitt.interviewpedia.calculator.operations.Divider;
import com.rahulmitt.interviewpedia.calculator.operations.Multipler;
import com.rahulmitt.interviewpedia.calculator.operations.Substractor;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
&nbsp;
public class CalculatorServiceTest {
&nbsp;
    private CalculatorService calculator;
&nbsp;
    @Before
    public void init() {
        Adder adder = Mockito.mock(Adder.class);
        Mockito.when(adder.add(2, 3)).thenReturn(5);
&nbsp;
        Substractor substractor = Mockito.mock(Substractor.class);
        Mockito.when(substractor.substract(10, 3)).thenReturn(7);
&nbsp;
        Divider divider = Mockito.mock(Divider.class);
        Mockito.when(divider.divide(20, 5)).thenReturn(4);
&nbsp;
        Multipler multipler = Mockito.mock(Multipler.class);
        Mockito.when(multipler.multiply(5, 6)).thenReturn(30);
&nbsp;
        calculator = new CalculatorService(adder, substractor, divider, multipler);
    }
&nbsp;
    @Test
    public void testAdd() {
        Assert.assertEquals(5, calculator.add(2, 3));
    }
&nbsp;
    @Test
    public void testSubstract() {
        Assert.assertEquals(7, calculator.substract(10, 3));
    }
&nbsp;
    @Test
    public void testDivide() {
        Assert.assertEquals(4, calculator.divide(20, 5));
    }
&nbsp;
    @Test
    public void testMultiply() {
        Assert.assertEquals(30, calculator.multiply(5, 6));
    }
}
</pre>
<h2 style="text-align: justify;">Using Mockito annotations</h2>
<pre>package com.rahulmitt.interviewpedia.calculator;
&nbsp;
import com.rahulmitt.interviewpedia.calculator.operations.Adder;
import com.rahulmitt.interviewpedia.calculator.operations.Divider;
import com.rahulmitt.interviewpedia.calculator.operations.Multipler;
import com.rahulmitt.interviewpedia.calculator.operations.Substractor;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;
&nbsp;
@RunWith(MockitoJUnitRunner.class)               // we need to use a runner when we use Mockito annotations
public class CalculatorServiceTest {
&nbsp;
    @Mock                                        // replaces Mockito.mock()
    private Adder adder;
&nbsp;
    @Mock
    private Substractor substractor;
&nbsp;
    @Mock
    private Divider divider;
&nbsp;
    @Mock
    private Multipler multipler;
&nbsp;
    @InjectMocks                                 // no need to invoke constructor to set the mocked fields
    private CalculatorService calculator;
&nbsp;
    @Before
    public void init() {
        Mockito.when(adder.add(2, 3)).thenReturn(5);
        Mockito.when(substractor.substract(10, 3)).thenReturn(7);
        Mockito.when(divider.divide(20, 5)).thenReturn(4);
        Mockito.when(multipler.multiply(5, 6)).thenReturn(30);
    }
&nbsp;
    @Test
    public void testAdd() {
        Assert.assertEquals(5, calculator.add(2, 3));
    }
&nbsp;
    @Test
    public void testSubstract() {
        Assert.assertEquals(7, calculator.substract(10, 3));
    }
&nbsp;
    @Test
    public void testDivide() {
        Assert.assertEquals(4, calculator.divide(20, 5));
    }
&nbsp;
    @Test
    public void testMultiply() {
        Assert.assertEquals(30, calculator.multiply(5, 6));
    }
}
</pre>
<p style="text-align: justify;">&nbsp;</p>
<pre>import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
&nbsp;
import java.util.List;
&nbsp;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
&nbsp;
@RunWith(MockitoJUnitRunner.class)
public class ListTest {
&nbsp;
    @Mock
    List list;
&nbsp;
    // test-cases goes here
&nbsp;
}
</pre>
<table width="100%">
<tbody>
<tr>
<td width="50%">
<pre>
@Test
public void testSize() {
    when(list.size()).thenReturn(10);
    assertEquals(10, list.size());
}
</pre>
</td>
<td width="50%">
&nbsp;
</td>
</tr>

<tr>
<td>
&nbsp;
</td>
<td>
<pre>
@Test
public void testSize_MultipleReturns() {
    when(list.size())
        .thenReturn(10)
        .thenReturn(20);
    assertEquals(10, list.size());
    assertEquals(20, list.size());
    assertEquals(20, list.size());
}
</pre>
</td>
</tr>

<tr>
<td>
<pre>
@Test
public void testGet_usingRawValue() {
    when(list.get(0)).thenReturn("Foo");
    assertEquals("Foo", list.get(0));
    assertNull(list.get(1));
}
</pre>
</td>
<td>
&nbsp;
</td>
</tr>

<tr>
<td>
&nbsp;
</td>
<td>
<pre>
@Test
public void testGet_usingMatchers() {
    when(list.get(anyInt())).thenReturn("Bar");
    assertEquals("Bar", list.get(0));
    assertEquals("Bar", list.get(1));
}
</pre>
</td>
</tr>

<tr>
<td>
<pre>
@Test
public void testAdd() {
    when(list.set(0, "Baz")).thenReturn("Foo");
    assertEquals("Foo", list.set(0, "Baz"));

    // cannot combine matchers with raw values
    // throws InvalidUseOfMatchersException
    //when(list.set(0, anyString())).thenReturn("Foo");

    when(list.set(anyInt(), anyString()))
        .thenReturn("Foo");
    assertEquals("Foo", list.set(0, "Baz"));
    assertEquals("Foo", list.set(1, "Quin"));
}
</pre>
</td>
<td>
&nbsp;
</td>
</tr>

<tr>
<td>
&nbsp;
</td>
<td>
<pre>

</pre>
</td>
</tr>

</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
        */}.toString().slice(14,-3)
    },

    {   /* PowerMock */
        "text" : function(){/*
<h1>PowerMock</h1>
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },
]
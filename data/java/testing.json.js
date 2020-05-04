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
<p style="text-align: justify;">TODO</p>
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
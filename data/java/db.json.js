var db_que = [
	{
		id : 1,
		question : "Normalisation",
		tags : ["Normalisation"]
	},

	{
		id : 2,
		question : "ACID Properties",
		tags : ["ACID Properties", "Isolation Levels"]
	},
	
	{
		id : 3,
		question : "Indexes",
		tags : ["Clustered Index", "Non Clustered Index"]
	},
	
	{
		id : 4,
		question : "SQL",
		tags : ["SQL"]
	},
]

var db_ans = [
	{   /* Normalisation */
		id : 1,
		"text" : function(){/*
qqq
		*/}.toString().slice(14,-3)
	},

	{   /* ACID Properties */
		id : 2,
		"text" : function(){/*
<p style="text-align: justify;">Reference:&nbsp;<a href="https://www.educative.io/edpresso/what-are-acid-properties-in-a-database" target="_blank">ACID Properties</a></p>
<p style="text-align: justify;">Reference:&nbsp;<a href="https://www.tutorialspoint.com/what-are-different-transaction-isolation-levels-in-dbms" target="_blank">Isolation Levels</a></p>
		*/}.toString().slice(14,-3)
	},

	{   /* Indexes */
		id : 3,
		"text" : function(){/*
<p style="text-align: justify;">Reference:&nbsp;<a href="https://www.sqlshack.com/what-is-the-difference-between-clustered-and-non-clustered-indexes-in-sql-server/" target="_blank">Clustered and Non-Clustered Indexes</a></p>
		*/}.toString().slice(14,-3)
	},

	{   /* SQL */
		id : 4,
		"text" : function(){/*
<p>Find nth highest salary</p>
<pre>
select name, salary from emp e1 where N-1 = (
    select count(distinct salary) from emp e2 where e2.salary > e1.salary
)
</pre
<p>Find duplicate rows</p>
<pre>
Select * from EMP a where row_id != select max(row_id) from EMP b where a.EMP_ID=b.EMP_ID;
</pre
<p>Delete duplicate rows</p>
<pre>
Delete * from EMP a where row_id != select max(row_id) from EMP b where a.EMP_ID=b.EMP_ID;
</pre
		*/}.toString().slice(14,-3)
	},
]
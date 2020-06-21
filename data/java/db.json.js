var db_que = [
	{
		id : 1,
		question : "Normalisation",
		tags : ["Normalisation"]
	},
	
	{
		id : 2,
		question : "Indexes",
		tags : ["Indexes"]
	},
	
	{
		id : 3,
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

	{   /* Indexes */
		id : 2,
		"text" : function(){/*
www
		*/}.toString().slice(14,-3)
	},

	{   /* SQL */
		id : 3,
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
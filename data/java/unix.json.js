var unix_que = [
	{
		question : "Useful Commands",
		tags : ["ls"]
	}
]

var unix_ans = [
    {   /* Useful Commands */
        "text" : function(){/*
<h1>Useful Commands</h1>
<h2>1. SCP Command:</h2>
<p><code>scp</code> <strong>&lt;</strong><em>filename</em><strong>&gt; &lt;</strong><em>userId</em><strong>&gt;</strong><code>@</code><strong>&lt;</strong><em>hostname</em><strong>&gt;</strong><code>:</code><strong>&lt;</strong><em>destination-directory</em><strong>&gt;</strong></p>
<p><br /> <code>scp -r</code> <strong>&lt;</strong><em>source-directory</em><strong>&gt; &lt;</strong><em>userId</em><strong>&gt;</strong><code>@</code><strong>&lt;</strong><em>hostname</em><strong>&gt;</strong><code>:</code><strong>&lt;</strong><em>destination-directory<strong>&gt;</strong></em></p>
<h2>2. Count occurrence of a phrase in a file:</h2>
<p><code>grep -o</code>&nbsp;<strong>&lt;</strong><em>text to search</em><strong>&gt;&nbsp;&lt;</strong><em>filename</em><strong>&gt;</strong> <code>| wc -l</code></p>
<h2>3. Find the files that contain text:</h2>
<p><code>find . -name</code> '<em>*.log</em>' <code>-print | xargs grep</code> '<em>NullPointerException</em>' <code>| cut -d ':' -f 1 | sort | uniq</code></p>
<h2>4. Search inside an archive:</h2>
<p><code>zgrep</code> '<em>test to search</em>' <strong>&lt;</strong><em>filename</em><strong>&gt;.gz</strong></p>
<h2>5. Find archive names that contain text:</h2>
<p><code>find . -name</code> <strong>&lt;</strong><em>filename</em><strong>&gt;.gz</strong> <code>-print | xargs zgrep</code> '<em>NullPointerException</em>' <code>| cut -d ':' -f 1 | sort | uniq</code></p>
<h2>6. Grep a text and highlight it in color:</h2>
<p><strong>&lt;</strong><em>command<strong>&gt;</strong></em> <code>| grep --color=always</code> <strong>&lt;</strong><em>text to highlight<strong>&gt;</strong></em></p>
<h2>7. Check disk space:</h2>
<p><code><strong>du -hsx * | sort -rh</strong></code></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
        */}.toString().slice(14,-3)
    },
]
var unix_que = [
	{
		question : "Basic Commands",
		tags : ["ls"]
	},

	{
		question : "Some Useful Commands",
		tags : ["ls"]
	},

	{
		question : "VIM Editor",
		tags : ["VIM Editor"]
	},

    {
        question : "Ubuntu",
        tags : ["ubuntu"]
    },

    {
        question : "Putty",
        tags : ["Putty"]
    },
]

var unix_ans = [
    {   /* Basic Commands */
        "text" : function(){/*
<h1>Basic Commands</h1>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>COMMAND</strong></td>
<td style="text-align: center;"><strong>DESCRIPTION</strong></td>
</tr>
<tr>
<td><code>pwd</code></td>
<td>Print Working Directory &mdash; prints out the current working directory</td>
</tr>
<tr>
<td><code>cd</code></td>
<td>Change the current directory</td>
</tr>
<tr>
<td><code>ls</code></td>
<td>
<p style="text-align: justify;"><img src="data/java/images/unix/1.ls.png" alt="" width="100%" /></p>
</td>
</tr>
<tr>
<td><code>cp</code></td>
<td>
<p><img src="data/java/images/unix/2.cp.png" alt="" width="100%" /></p>
</td>
</tr>
<tr>
<td><code>mv</code></td>
<td>
<p><img src="data/java/images/unix/3.mv.png" alt="" width="100%" /></p>
</td>
</tr>
<tr>
<td><code>rm</code></td>
<td>
<p><img src="data/java/images/unix/4.rm.png" alt="" width="100%" /></p>
</td>
</tr>
<tr>
<td><code>mkdir</code></td>
<td>
<p><img src="data/java/images/unix/5.mkdir.png" alt="" width="100%" /></p>
</td>
</tr>
<tr>
<td><code>rmdir</code></td>
<td>
<p><img src="data/java/images/unix/6.rmdir.png" alt="" width="100%" /></p>
</td>
</tr>
<tr>
<td><code>touch</code></td>
<td>
<p><img src="data/java/images/unix/7.touch.png" alt="" width="100%" /></p>
</td>
</tr>
<tr>
<td><code>cat</code></td>
<td>
<p><img src="data/java/images/unix/8.cat.png" alt="" width="100%" /></p>
</td>
</tr>
<tr>
<td><code>tac</code></td>
<td>
<p><img src="data/java/images/unix/9.tac.png" alt="" width="100%" /></p>
</td>
</tr>
<tr>
<td><code>less</code></td>
<td>
<p><img src="data/java/images/unix/10.less.png" alt="" width="100%" /></p>
</td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

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
<h2>&nbsp;8. Delete all contents of a file:</h2>
<p><strong><code>cat /dev/null &gt; blah.txt</code></strong></p>
<h2>&nbsp;9. Find files in a directory</h2>
<p><strong><code>find scripts/ -name '*.pl'</code></strong></p>
<h2>&nbsp;10. Find files (recursively) containing text in a directory</h2>
<p><strong><code>grep -r 'rahul' scripts/*.pl</code></strong></p>
<p><strong><code>grep -r 'ENV_A' scripts/*.pl | cut -d: -f1</code></strong></p>
<h2>11. top command</h2>
<p><code><strong>top</strong></code></p>
<p>&nbsp;</p>
        */}.toString().slice(14,-3)
    },

    {   /* VIM Editor */
        "text" : function(){/*

<h1>VIM Editor</h1>
<p><img src="data/java/images/unix/vim/1.vim - find_replace.png" alt="" width="100%" /></p>
<h2>1. Replace FIRST OCCURRENCE of word &lsquo;foo&rsquo; with &lsquo;bar&rsquo; on all lines</h2>
<p><strong><code>:%s/foo/bar/</code></strong></p>
<h2>2. Replace ALL OCCURRENCES of word &lsquo;foo&rsquo; with &lsquo;bar&rsquo; on all lines</h2>
<p><strong><code>:%s/foo/bar/g</code></strong></p>
<h2>3. Replace first occurrence of &lsquo;foo&rsquo; with &lsquo;bar&rsquo; on lines 5 through 20 only</h2>
<p><code><strong>:5,20s/foo/bar/</strong></code></p>
<h2>4. Find all words that matches a pattern and replace them:</h2>
<p>pattern is --&gt; starts with a space, then 'p' then many alphabets, then ends with 'c' and space. e.g., ' public '</p>
<p><code><strong>:%s/\sp\w*c\s/ private /c</strong></code></p>

<p style="text-align: justify;">&nbsp;</p>
<p>Reference: <a href="http://vimregex.com/" target="_blank">http://vimregex.com/</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Ubuntu */
        "text" : function(){/*
<h1>Ubuntu</h1>
<h2 style="text-align: justify;">1. Create Shared Folder Between Windows 10 Host and Ubuntu Guest OS on Virtualbox</h2>
<table width="100%">
<tbody>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Update package list</td>
<td><code>sudo apt update</code></td>
</tr>
<tr>
<td>Upgrade packages</td>
<td>
<p><code>sudo apt upgrade</code></p>
<p>Power off the VirtualBox VM</p>
</td>
</tr>
<tr>
<td>Enable shared clipboard and Drag/Drop features.</td>
<td>
<p>VirtualBox --&gt; VM --&gt; Settings --&gt; General --&gt;Advanced</p>
<img src="data\java\images\ubuntu\1.VirtualBox Setup.png" alt="" width="616" height="295" /></td>
</tr>
<tr>
<td>Install dependencies required for guest additions</td>
<td>
<p><code>sudo apt install build-essential dkms linux-headers-$(uname -r)</code></p>
<p>Close the terminal</p>
</td>
</tr>
<tr>
<td>&nbsp;Install virtualbox-guest-dkms to enable shared clipboard and Drag/drop features</td>
<td>
<p>Click Devices --&gt; Insert guest additions CD image</p>
<p><code>sudo apt install virtualbox-guest-dkms</code></p>
</td>
</tr>
</tbody>
</table>
<p>Reference:&nbsp;<a href="https://www.youtube.com/watch?v=QfCdx6wWkf8" target="_blank">How to Install Guest Additions on Ubuntu in VirtualBox?</a></p>
<p>Reference:&nbsp;<a href="https://www.youtube.com/watch?v=oZs2hQj_-OA" target="_blank">How to Create Shared Folder Between Windows 10 Host and Ubuntu Guest OS on Virtualbox?</a></p>
<h2>2. Fix Citrix Issue</h2>
<pre> cd /opt/Citrix/ICAClient/keystore/cacerts/
 sudo cp /etc/ssl/certs/* .
</pre>
<h2>3.&nbsp;Connect to Ubuntu VirtualBox from Windows host via Putty</h2>
<table width="100%">
<tbody>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td><code>sudo apt install ssh</code></td>
</tr>
<tr>
<td>&nbsp;</td>
<td><code>sudo service ssh status</code></td>
</tr>
<tr>
<td>&nbsp;</td>
<td><code>sudo apt install net-tools</code></td>
</tr>
<tr>
<td>ipconfig on Ubuntu shell</td>
<td><code>ifconfig</code></td>
</tr>
</tbody>
</table>
<p>Reference:&nbsp;<a href="https://www.youtube.com/watch?v=8Lxb7BT7cAk" target="_blank">How to connect Linux / Ubuntu on Virtual Box through PUTTY?</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Putty */
        "text" : function(){/*
<h1>Putty</h1>
<h2>Putty Configurations</h2>
<p>Load Default Settings</p>
<p><strong>Window --&gt; Appearance --&gt; Font Settings --&gt; Change </strong></p>
<p>Lucida Console, Regular, 10</p>
<p><strong>Window --&gt; Colours --&gt; Select a Color to Adjust</strong></p>
<p><strong>Default Foreground</strong>: Red:237, Green:209, Blue:18</p>
<p><strong>Default Background</strong>: Red:64, Green:0, Blue:64</p>
<p>Session --&gt; Save</p>
<p>Reference: <a href="https://github.com/wlvchandler/PuTTY-Ubuntu-Theme" target="_blank">PuTTY Ubuntu Theme</a></p>
<p>&nbsp;</p>
<h2>Change the color of Shell prompt</h2>
<p>Default value of<strong> PS1</strong> is:&nbsp;<code>export PS1="\s-\v\$ "</code></p>
<p style="text-align: justify;"><img src="data\java\images\ubuntu\2.default PS1.png" alt="" width="100%" /></p>
<p>My preferred customization is:</p>
<pre>
Color_Off="\[\033[0m\]"
Red="\[\033[0;31m\]"
Green="\[\033[0;32m\]"
Yellow="\[\033[0;33m\]"
Blue="\[\033[0;34m\]"
Cyan="\[\033[0;36m\]"
export PS1="\n$Green[$Red\u$Yellow@$Green\h$Yellow:$Cyan\w$Green]$Yellow\$$Color_Off "
</pre>
<p>Add the above&nbsp;customization to&nbsp;<strong>~/.profile</strong> file by typing&nbsp;<code>vim ~/.profile</code></p>
<p style="text-align: justify;"><img src="data\java\images\ubuntu\3.customize PS1.png" alt="" width="100%" /></p>
<p>Reference:&nbsp;<a href="https://gist.github.com/vratiu/9780109" target="_blank">Color Codes</a></p>
        */}.toString().slice(14,-3)
    },
]
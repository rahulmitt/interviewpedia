var misc_que = [
    {
        id : 1,
        question : "IDE Shortcuts",
        tags : ["IntelliJ Shortcuts", "Eclipse Shortcuts" ]
    },

    {
        id : 2,
        question : "Git Commands",
        tags : ["git", "commands", "repository"]
    },

    {
        id : 3,
        question : "Git Command - Usage & Examples",
        tags : ["git", "commands", "examples", "usage"]
    },

    {
        id : 4,
        question : "Unix - Basic Commands",
        tags : ["pwd", "cd", "ls", "cp", "mv", "rm", "mkdir", "rmdir", "touch", "cat", "tac", "less"]
    },

    {
        id : 5,
        question : "Unix - Some Useful Commands",
        tags : ["scp", "grep", "find", "zgrep", "search", "check disk space", "du", "delete contents", "find files", "top"]
    },

    {
        id : 6,
        question : "VIM Editor",
        tags : ["VIM Editor"]
    },

    {
        id : 7,
        question : "Ubuntu",
        tags : ["ubuntu"]
    },

    {
        id : 8,
        question : "Putty",
        tags : ["Putty"]
    },

    {
        id : 9,
        question : "Clean Code",
        tags : ["Clean Code", "Coding Standards", "Coding Conventions"]
    },
];

var misc_ans = [
    {   /* IDE Shortcuts */
        id : 1,
        "text" : function(){/*
<table width="75%">
<tbody>
<tr>
<td style="text-align: center;" width="60%"><strong>Action</strong></td>
<td style="text-align: center;" width="20%"><strong>IntelliJ Shortcut</strong></td>
<td style="text-align: center;" width="20%"><strong>Eclipse Shortcut</strong></td>
</tr>

<tr>
<td>Show the type hierarchy</td>
<td>ctrl+h</td>
<td>F4</td>
</tr>

<tr>
<td>Find usages</td>
<td>ctrl+alt+F7</td>
<td>ctrl+alt+g</td>
</tr>

<tr>
<td>Finds the usages in the same file</td>
<td>ctrl+f7</td>
<td>ctrl+shift+u</td>
</tr>

<tr>
<td>Rename</td>
<td>shift+F6</td>
<td>alt+shift+r</td>
</tr>

<tr>
<td>Find file / open resource</td>
<td>ctrl+shift+N</td>
<td>ctrl+shift+r</td>
</tr>

<tr>
<td>Run (java program)</td>
<td>ctrl+shift+F10</td>
<td>ctrl+shift+x, j</td>
</tr>

<tr>
<td>Organize imports</td>
<td>ctrl+alt+o</td>
<td>ctrl+shift+o</td>
</tr>

<tr>
<td>Show current file structure / outline</td>
<td>ctrl+F12</td>
<td>ctrl+o</td>
</tr>

<tr>
<td>Create local variable refactoring</td>
<td>ctrl+alt+V</td>
<td>ctrl+shift+m</td>
</tr>

<tr>
<td>System.out.println("")</td>
<td>sout ctrj+j</td>
<td>syso ctrl+space</td>
</tr>

<tr>
<td>Move lines</td>
<td>ctrl+shift+up/down</td>
<td>alt + up/down</td>
</tr>

<tr>
<td>Delete current line</td>
<td>ctrl + y</td>
<td>ctrl + d</td>
</tr>

<tr>
<td>Show subversion history</td>
<td>alt + h</td>
<td>???</td>
</tr>

<tr>
<td>Search (find in path)</td>
<td>ctrl + shift + f</td>
<td>ctrl + h</td>
</tr>

<tr>
<td>If I want to add the semi-colon at the end of a statement</td>
<td>ctrl+shift+enter</td>
<td>“semi” set in window -&gt; preferences</td>
</tr>

<tr>
<td>introduce local variable</td>
<td>ctrl + alt + v</td>
<td>ctrl + 1 or ctrl + shift + l</td>
</tr>

<tr>
<td>Generate getters / setters</td>
<td>alt + insert</td>
<td>alt + shift + s</td>
</tr>

<tr>
<td>format code</td>
<td>ctrl + alt + l</td>
<td>ctrl + shift + f</td>
</tr>

<tr>
<td>redo</td>
<td>ctrl + shift + z</td>
<td>ctrl + y</td>
</tr>

<tr>
<td>comment out lines (my own IDEA shortcut definition for comment/uncomment on german keyboard layout on laptop: ctrl + shift + y)</td>
<td>ctrl + /</td>
<td>ctrl + shift + c</td>
</tr>

<tr>
<td>show call hierarchy</td>
<td>ctrl + alt + h</td>
<td>ctrl + alt + h</td>
</tr>

<tr>
<td>to jump to one of the callers of a method</td>
<td>ctrl + alt + f7</td>
<td>none ?</td>
</tr>

<tr>
<td>evaluate expression (in debugger)</td>
<td>alt + f8</td>
<td>ctrl + shift + i</td>
</tr>

<tr>
<td>go to declaration (e.g. go to method)</td>
<td>ctrl + b</td>
<td>F3</td>
</tr>

<tr>
<td>go to line</td>
<td>ctrl + g</td>
<td>ctrl + l</td>
</tr>

</tbody>
</table>

<p>
<u>References:</u>
<ul>
<li>Eclipse Shortcuts for <a href="https://shortcutworld.com/Eclipse/win/Eclipse-Helios_Shortcuts" target="_blank">Windows</a></li>
<li>IntelliJ Shortcuts for <a href="https://shortcutworld.com/IntelliJ-IDEA/win/IntelliJ_Shortcuts" target="_blank">Windows</a> and <a href="https://shortcutworld.com/IntelliJ-IDEA/linux/IntelliJ_Shortcuts" target="_blank">Linux</a></li>
</ul>
</p>
    */}.toString().slice(14,-3)
    },

    {   /* Git Commands */
        id : 2,
        "text" : function(){/*
<h2>Basic Git Commands</h2>
<table width="100%">
<tbody>

<tr>
<td style="text-align: center;" width="50%"><strong>ACTION</strong></td>
<td style="text-align: center;" width="50%"><strong>COMMAND</strong></td>
</tr>

<tr>
<td>Check git version</td>
<td>
<pre>git --version</pre>
</td>
</tr>

<tr>
<td>Turn a directory into a git (local) repository</td>
<td>
<pre>git init</pre>
</td>
</tr>

<tr>
<td>Add a file to the git staging area</td>
<td>
<pre>git add &lt;filename&gt;</pre>
</td>
</tr>

<tr>
<td>Add all the files to the staging area</td>
<td>
<pre>git add .</pre>
</td>
</tr>

<tr>
<td>Commit change to the repo with a message</td>
<td>
<pre>git commit -m &lt;message&gt;</pre>
</td>
</tr>

<tr>
<td>Ammend the commit message</td>
<td>
<pre>git commit --amend</pre>
<p>This will open a file in vi editor. Modify the commit message and <code>:wq</code></p>
</td>
</tr>

<tr>
<td>Undo the last commit</td>
<td>
<pre>git reset --soft HEAD~1</pre>
</td>
</tr>

<tr>
<td>Print&nbsp;the current state of the repo</td>
<td>
<pre>git status
</pre>
<p>- prints the current working branch<br /> - also shows all changes to be committed</p>
</td>
</tr>

</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>

<h2>Setting Git Configs</h2>
<table width="100%">
<tbody>

<tr>
<td style="text-align: center;" width="50%"><strong>ACTION</strong></td>
<td style="text-align: center;" width="50%"><strong>COMMAND</strong></td>
</tr>

<tr>
<td>&nbsp;</td>
<td>
<pre>git config --global user.name "Rahul"
git config --global user.email "rahulmitt@yahoo.com"</pre>
</td>
</tr>

<tr>
<td>&nbsp;</td>
<td>
<pre>git config user.name "Rahul"
git config user.email "rahulmitt@yahoo.com"</pre>
</td>
</tr>

</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>

<h2>Branching</h2>
<table width="100%">
<tbody>

<tr>
<td style="text-align: center;" width="50%"><strong>ACTION</strong></td>
<td style="text-align: center;" width="50%"><strong>COMMAND</strong></td>
</tr>

<tr>
<td>List all the branches</td>
<td>
<pre>git branch
</pre>
</td>
</tr>

<tr>
<td>Create a new branch</td>
<td>
<pre>git branch &lt;branch name&gt;
</pre>
</td>
</tr>

<tr>
<td>Switch to another branch</td>
<td>
<pre>git checkout &lt;branch name&gt;
</pre>
</td>
</tr>

<tr>
<td>Checkout a branch</td>
<td>
<pre>git checkout &lt;branch name&gt;</pre>
</td>
</tr>

<tr>
<td>Merge feature branch to the current branch</td>
<td>
<pre>git merge &lt;branch name&gt;</pre>
</td>
</tr>

<tr>
<td>Delete a branch (warn if unmerged changes present)</td>
<td>
<pre>git branch -d &lt;branch name&gt;</pre>
</td>
</tr>

<tr>
<td>Delete a branch (without warning)</td>
<td>
<pre>git branch -D &lt;branch name&gt;</pre>
</td>
</tr>

<tr>
<td>Create a new branch and switch to this branch</td>
<td>
<pre>git checkout -b &lt;branch name&gt;</pre>
</td>
</tr>

</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>

<h2>Working with Remote Repositories — Pull & Push</h2>
<table width="100%">
<tbody>

<tr>
<td style="text-align: center;" width="50%"><strong>ACTION</strong></td>
<td style="text-align: center;" width="50%"><strong>COMMAND</strong></td>
</tr>

<tr>
<td>Connect a local repo to a remote repo</td>
<td>
<pre>git remote add origin &lt;remote repo url&gt;</pre>
</td>
</tr>

<tr>
<td>Create a local working copy of an existing remote repo</td>
<td>
<pre>git clone &lt;remote repo url&gt;</pre>
</td>
</tr>

<tr>
<td>Pull changes from remote repo to local repo</td>
<td>
<pre>git pull origin master</pre>
</td>
</tr>

<tr>
<td>Push local repo changes to the remote repo</td>
<td>
<pre>git push origin master</pre>
</td>
</tr>

</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>

<h2>Advanced Git commands</h2>
<table width="100%">
<tbody>

<tr>
<td style="text-align: center;" width="50%"><strong>ACTION</strong></td>
<td style="text-align: center;" width="50%"><strong>COMMAND</strong></td>
</tr>

<tr>
<td>Park the changes when they are not ready to be committed to the repo, and apply those changes later on</td>
<td>
<pre>
git stash -u
git stash list
git stash show
git stash apply
</pre>
</td>
</tr>

<tr>
<td>Print context/history for a repo</td>
<td>
<pre>
git log
git log --before="&lt;date&gt;"
git log --author="&lt;author name&gt;"
</pre>
</td>
</tr>

<tr>
<td>Rollback to the previous version of the file</td>
<td>
<pre>git revert</pre>
</td>
</tr>

<tr>
<td>Take a set of commits, copy and store them outside the repo</td>
<td>
<pre>git rebase</pre>
</td>
</tr>

</tbody>
</table>
<p style="text-align: justify;">&nbsp;</p>
    */}.toString().slice(14,-3)
    },

    {   /* Git Command - Usage & Examples */
        id : 3,
        "text" : function(){/*
<h2>Git repository Initialization</h2>
<pre>
git --version
git init
</pre>
<p style="text-align: justify;"><img src="data\java\images\git\1.init.png" alt="" width=100%" /></p>
<p style="text-align: justify;">&nbsp;</p>

<h2>Committing the changes</h2>
<pre>
git config user.name "Rahul"
git config user.email "rahulmitt@yahoo.com"
git add HelloWorld1
git status
git commit -m "committing hello1"
git status
</pre>
<p style="text-align: justify;"><img src="data\java\images\git\2.commits.png" alt="" width=100%" /></p>
<p style="text-align: justify;">&nbsp;</p>

<h2>Branching & Merging</h2>
<pre>
git branch
git branch feature1
git checkout feature1
git add .
git commit -m "committing hello2"
git checkout master
git merge feature1
</pre>
<p style="text-align: justify;"><img src="data\java\images\git\3.branching_merging.png" alt="" width=100%" /></p>
<p style="text-align: justify;">&nbsp;</p>

<h2>Working with Remote Repositories</h2>
<pre>
git clone https://github.com/rahulmitt/gbce.git
ls -ltra
cd gbce/
ls -ltra
git config user.name "Rahul"
git config user.email "rahulmitt@yahoo.com"
git branch
git pull origin master
git checkout -b feature1
git branch
ls -ltra
vim README.md
git add .
git status
git commit -m "updated readme file"
git push origin feature1
</pre>
<p style="text-align: justify;"><img src="data\java\images\git\4.cloning_remote_repo.png" alt="" width=100%" /></p>
<p style="text-align: justify;">Notice that a new remote branch gets created on github:</p>
<p style="text-align: justify;"><img src="data\java\images\git\5.remote_branch_created.png" alt="" /></p>
<p style="text-align: justify;">&nbsp;</p>

<h2>Using <code>git stash</code> command</h2>
<pre>
git status
git stash -u
git status
git stash list
git stash show
git stash apply
git add .
git status
</pre>
<p style="text-align: justify;"><img src="data\java\images\git\6.git_stash.png" alt="" width=100%" /></p>
<p style="text-align: justify;">&nbsp;</p>

<h2>Using <code>git log</code> command</h2>
<pre>
git log
git log --before="Jun 25 19:00:00"
git log --author="Rahul"
</pre>
<p style="text-align: justify;"><img src="data\java\images\git\7.git_log.png" alt="" width=100%" /></p>
<p style="text-align: justify;">&nbsp;</p>

<h2>Using <code>git revert</code> command</h2>
<pre>
git log --oneline
git revert &lt;commit hash&gt;
git log
</pre>
<p style="text-align: justify;"><img src="data\java\images\git\8.git_revert.png" alt="" width=100%" /></p>
<p style="text-align: justify;">Now if we run the below command, it will revert the last commit (i.e., the revert that we just did will be rollbacked)</p>
<pre>git revert HEAD</pre>
<p style="text-align: justify;">Now, a <code>git log</code> will show that the last-revert was reverted</p>
<p style="text-align: justify;"><img src="data\java\images\git\9.git_revert_head.png" alt="" width=100%" /></p>
<p style="text-align: justify;">&nbsp;</p>
    */}.toString().slice(14,-3)
    },

    {   /* Unix - Basic Commands */
        id : 4,
        "text" : function(){/*
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

    {   /* Unix - Useful Commands */
        id : 5,
        "text" : function(){/*
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
        id : 6,
        "text" : function(){/*

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
        id : 7,
        "text" : function(){/*
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
<tr>
<td>Map a shared folder between between Windows 10 Host and Ubuntu Guest OS on Virtualbox</td>
<td>
<img src="data\java\images\ubuntu\2.virtualBox_sharedFolder.png" alt="" width="616" height="295" />
<p><code>sudo adduser rahulmitt vboxsf</code></p>
</td>
</tr>
<tr>
<td>Install few commands</td>
<td>
<code>sudo apt install vim</code></br>
<code>sudo apt install curl</code>
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
        id : 8,
        "text" : function(){/*
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
<p style="text-align: justify;"><img src="data\java\images\ubuntu\3.default PS1.png" alt="" width="100%" /></p>
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
<p style="text-align: justify;"><img src="data\java\images\ubuntu\4.customize PS1.png" alt="" width="100%" /></p>
<p>Reference:&nbsp;<a href="https://gist.github.com/vratiu/9780109" target="_blank">Color Codes</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Clean Code */
        id : 9,
        "text" : function(){/*
<p style="text-align: justify;"><a href="https://softwareengineering.stackexchange.com/questions/66523/how-many-lines-per-class-is-too-many-in-java" target="_blank">Java classes should not be more than 2000 LoC</a></p>
<p style="text-align: justify;"><a href="https://dzone.com/articles/rule-30-%E2%80%93-when-method-class-or" target="_blank">Methods should not be more than 30 LoC</a></p>
<p style="text-align: justify;"><a href="https://stackoverflow.com/questions/147454/why-is-using-a-wild-card-with-a-java-import-statement-bad" target="_blank">Dont use wildcards in import statements</a></p>
<p style="text-align: justify;"><a href="https://stackoverflow.com/questions/47714296/java-remove-empty-and-superfluous-javadoc" target="_blank">Remove empty & Superfluous javadoc</a></p>
<p style="text-align: justify;"><a href="https://dmitripavlutin.com/coding-like-shakespeare-practical-function-naming-conventions/" target="_blank">Naming Conventions — Functions</a></p>
<p style="text-align: justify;"><a href="http://teeohhem.com/dos-and-dont-of-code-comments/" target="_blank">Code Comments — Do's and Dont's</a></p>
<p style="text-align: justify;"><a href="https://kentcdodds.com/blog/please-dont-commit-commented-out-code" target="_blank">Don't commit commented-out code</a></p>
<p style="text-align: justify;"><a href="https://www.oracle.com/java/technologies/javase/codeconventions-contents.html" target="_blank">Oracle — Java coding conventions</a></p>
<p style="text-align: justify;"><a href="https://moderatemisbehaviour.github.io/clean-code-smells-and-heuristics/" target="_blank">Clean Code — Smells & Heuristics</a></p>
<p style="text-align: justify;"><a href="https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29" target="_blank">Summary of 'Clean code — Robert C. Martin</a></p>
    */}.toString().slice(14,-3)
    },


];
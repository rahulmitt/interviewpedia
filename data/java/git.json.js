var git_que = [
    {
        id : 1,
        question : "Git Commands",
        tags : ["git", "commands", "repository"]
    },

    {
        id : 2,
        question : "Command Usage & Examples",
        tags : ["git", "commands", "examples", "usage"]
    },
];

var git_ans = [
    {   /* Git Commands */
        id : 1,
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

    {   /* Command Usage & Examples */
        id : 2,
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

    {   /* TODO */
        id : 3,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
    */}.toString().slice(14,-3)
    },
];
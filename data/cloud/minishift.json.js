var minishift_que = [
	{
		question : "MiniShift Installation",
		tags : ["MiniShift Installation"]
	},

	{
		question : "OpenShift CLI",
		tags : ["OpenShift CLI"]
	},
]

var minishift_ans = [
    {   /* MiniShift Installation */
        "text" : function(){/*
<h1>MiniShift Installation</h1>
<p style="text-align: justify;"><a href="https://www.okd.io/minishift/" target="_blank">MiniShift</a>&nbsp;is a tool to run&nbsp;<a href="https://www.openshift.com/blog/okd310release" target="_blank">OpenShift Origin</a> locally by launching a single-node cluster inside a VM.</p>
<p style="text-align: justify;"><strong>Prerequisites:</strong></p>
<ol>
<li style="text-align: justify;">Windows 10 Home PC</li>
<li style="text-align: justify;">Oracle VM&nbsp;<a href="https://www.virtualbox.org/" target="_blank">VirtualBox</a></li>
<li style="text-align: justify;"><a href="https://chocolatey.org" target="_blank">Chocolatey</a>&nbsp;package Manager</li>
</ol>
<h2>1. Install Chocolatey package manager</h2>
<p style="text-align: justify;">Open the Windows <strong>PowerShell (admin)</strong> and run the following commands:</p>
<p><code> Get-ExecutionPolicy</code></p>
<p><code>Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1')) </code></p>
<p style="text-align: justify;">as shown below:</p>
<p><img src="data\cloud\images\1. Install choco.png" alt="" width="100%" /></p>
<h2>2. Install Minishift</h2>
<p><code>choco install -y minishift</code></p>
<p>Run <code>choco install -y minishift --force</code> in case a force run is needed</p>
<p><img src="data\cloud\images\2. Install minishift.png" alt="" width="100%" /></p>
<h2>3. Start Minishift</h2>
<p><code>minishift config set vm-driver virtualbox</code></p>
<p><code>minishift start</code></p>
<p><img src="data\cloud\images\3. Start minishift.png" alt="" width="100%" /></p>
<h2>4. Stop & Start minishift</h2>
<p><code>minishift&nbsp;stop</code></p>
<p><code>minishift start --vm-driver virtualbox</code></p>
<p><img src="data\cloud\images\4.minishift restart.png" alt="" width="100%" /></p>
<h2>5. Stop & Delete minishift VM</h2>
<p><code>minishift&nbsp;stop</code></p>
<p><code>minishift delete --clear-cache</code></p>
<p><img src="data\cloud\images\5.delete minishift VM.png" alt="" width="100%" /></p>
<h2>6.&nbsp;Install OpenShift CLI</h2>
<p><code>choco install -y openshift-cli</code></p>
<p><img src="data\cloud\images\6.Install OpenShift CLI.png" alt="" width="100%" /></p>
<h2>7. OC Login & Logout</h2>
<p><code>oc login -u dev -p dev</code></p>
<p><code>oc logout</code></p>
<p><img src="data\cloud\images\7.oc login logout.png" alt="" width="100%" /></p>
        */}.toString().slice(14,-3)
    },

    {   /* OpenShift CLI */
        "text" : function(){/*
<h1>OpenShift CLI</h1>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>COMMAND PURPOSE&nbsp;</strong></td>
<td style="text-align: center;"><strong>DEMO</strong></td>
</tr>
<tr>
<td><p>Normal User Login</p></td>
<td>
<pre>PS C:\WINDOWS\system32&gt; oc login -u dev -p dev123
Login successful.
</pre>
</td>
</tr>
<tr>
<td><p>Generate Token</p></td>
<td>
<pre>PS C:\WINDOWS\system32&gt; oc whoami -t
Jkaphf3kylxVIo40QiNX3yTbFjn-JlQ-hjcgCb3rOBk
</pre>
</td>
</tr>
<tr>
<td><p>Login using Token</p></td>
<td>
<pre>PS C:\WINDOWS\system32&gt; oc login https://192.168.99.102:8443 --token=&lt;token&gt;
Logged into "https://192.168.99.102:8443" as "dev" using the token provided.
You have one project on this server: "my-project"
Using project "my-project".
</pre>
</td>
</tr>
<tr>
<td><p>System Admin login</p></td>
<td>
<pre>
PS C:\WINDOWS\system32&gt; oc login -u system:admin
Logged into "https://192.168.99.102:8443" as "system:admin" using existing credentials.

You have access to the following projects and can switch between them
with 'oc project &lt;projectname&gt;':

    default
    kube-dns
    kube-proxy
    kube-public
    kube-system
  * my-project
    myproject
    openshift
    openshift-apiserver
    openshift-controller-manager
    openshift-core-operators
    openshift-infra
    openshift-node
    openshift-service-cert-signer
    openshift-web-console

Using project "my-project".
</pre>
</td>
</tr>
<tr>
<td><p>Display Users</p></td>
<td>
<pre>
PS C:\WINDOWS\system32&gt; oc get users
NAME        UID                                    FULL NAME   IDENTITIES
aa          039c8ef1-a5c6-11ea-bb9a-0800272135b8               anypassword:aa
dev         1d46cf2e-a5c6-11ea-bb9a-0800272135b8               anypassword:dev
developer   88482c43-a563-11ea-8cf3-0800272135b8               anypassword:developer
q           f57111c8-a5c2-11ea-bb9a-0800272135b8               anypassword:q
</pre>
<p><code>anypassword</code> means any user can login to the portal using any password. This is the default setting for a
minishift deployment</p>
</td>
</tr>
<tr>
<td>Display Projects</td>
<td>
<pre>
PS C:\WINDOWS\system32&gt; oc get projects
NAME                            DISPLAY NAME   STATUS
default                                        Active
kube-dns                                       Active
kube-proxy                                     Active
kube-public                                    Active
kube-system                                    Active
my-project                                     Active
myproject                       My Project     Active
openshift                                      Active
openshift-apiserver                            Active
openshift-controller-manager                   Active
openshift-core-operators                       Active
openshift-infra                                Active
openshift-node                                 Active
openshift-service-cert-signer                  Active
openshift-web-console                          Active
</pre>
</td>
</tr>
<tr>
<td>Add user with Cluster Admin role</td>
<td>
<p>Login to WebConsole with a new user, say, <code>admin</code>, and get all users using CLI:</p>
<pre>
PS C:\WINDOWS\system32&gt; oc get users
NAME        UID                                    FULL NAME   IDENTITIES
aa          039c8ef1-a5c6-11ea-bb9a-0800272135b8               anypassword:aa
admin       a10ebf8f-a5d0-11ea-bb9a-0800272135b8               anypassword:admin
dev         1d46cf2e-a5c6-11ea-bb9a-0800272135b8               anypassword:dev
developer   88482c43-a563-11ea-8cf3-0800272135b8               anypassword:developer
q           f57111c8-a5c2-11ea-bb9a-0800272135b8               anypassword:q
</pre>
<p>Note that <code>admin</code> is a normal user as the identity provider is <code>anypassword</code>. Now add the
<code>cluster-admin</code> role to this newly created user:</p>
<pre>
PS C:\WINDOWS\system32&gt; oc adm policy add-cluster-role-to-user cluster-admin admin
cluster role "cluster-admin" added: "admin"
</pre>
<p>And refresh the WebConsole. The <code>admin</code> user now has access to all the projects that are available to the <code>system:admin</code> user</p>
</td>
</tr>
<tr>
<td>Delete User</td>
<td>
<p>Fetch the list of users:</p>
<pre>
PS C:\WINDOWS\system32&gt; oc get users
NAME        UID                                    FULL NAME   IDENTITIES
aa          039c8ef1-a5c6-11ea-bb9a-0800272135b8               anypassword:aa
admin       a10ebf8f-a5d0-11ea-bb9a-0800272135b8               anypassword:admin
dev         1d46cf2e-a5c6-11ea-bb9a-0800272135b8               anypassword:dev
developer   88482c43-a563-11ea-8cf3-0800272135b8               anypassword:developer
q           f57111c8-a5c2-11ea-bb9a-0800272135b8               anypassword:q
</pre>
<p>Delete user<code>aa</code>:</p>
<pre>
PS C:\WINDOWS\system32&gt; oc delete user aa
user.user.openshift.io "aa" deleted
</pre>
<p>Delete user<code>developer</code>:</p>
<pre>
PS C:\WINDOWS\system32&gt; oc delete user developer
user.user.openshift.io "developer" deleted
</pre>
<p>Delete user<code>q</code>:</p>
<pre>
PS C:\WINDOWS\system32&gt; oc delete user q
user.user.openshift.io "q" deleted
</pre>
<p>Fetch the list of users again:</p>
<pre>
PS C:\WINDOWS\system32&gt; oc get users
NAME      UID                                    FULL NAME   IDENTITIES
admin     a10ebf8f-a5d0-11ea-bb9a-0800272135b8               anypassword:admin
dev       1d46cf2e-a5c6-11ea-bb9a-0800272135b8               anypassword:dev
</pre>
</td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* QQQQ */
        "text" : function(){/*
<h1>QQQQ</h1>
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },
]
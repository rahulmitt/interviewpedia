var minishift_que = [
	{
		question : "MiniShift Installation",
		tags : ["MiniShift Installation"]
	}
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
<p style="text-align: justify;">Open the Windows PowerShell (admin) and run the following commands:</p>
<p><code> Get-ExecutionPolicy</code></p>
<p><code>Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1')) </code></p>
<p style="text-align: justify;">as shown below:</p>
<p><img src="data\openshift\images\1. Install choco.png" alt="" width="100%" /></p>
<h2>2. Install Minishift</h2>
<p><code>choco install -y minishift</code></p>
<p>Run <code>choco install -y minishift --force</code> in case a force run is needed</p>
<p><img src="data\openshift\images\2. Install minishift.png" alt="" width="100%" /></p>
<h2>3. Start Minishift</h2>
<p><code>minishift config set vm-driver virtualbox</code></p>
<p><code>minishift start</code></p>
<p><img src="data\openshift\images\3. Start minishift.png" alt="" width="100%" /></p>
<h2>4. Stop and start minishift</h2>
<p><code>minishift&nbsp;stop</code></p>
<p><code>minishift start --vm-driver virtualbox</code></p>
<p><img src="data\openshift\images\4.minishift restart.png" alt="" width="100%" /></p>
<h2>5.&nbsp;Delete minishift VM</h2>
<p><code>minishift delete --clear-cache</code></p>
<p><img src="data\openshift\images\2. Install minishift.png" alt="" width="100%" /></p>
        */}.toString().slice(14,-3)
    },
]
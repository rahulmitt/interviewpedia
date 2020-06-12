var k8s_que = [
	{
		question : "K8s Overview",
		tags : ["K8s Overview", "Kubernetes Overview"]
	},

	{
		question : "Minikube Setup",
		tags : ["k8s setup", "Kubernetes Setup", "Minikube Setup"]
	},

	{
		question : "TODO",
		tags : ["TODO"]
	},
]

var k8s_ans = [
    {   /* K8s Overview */
        "text" : function(){/*
<h1>The k8s Cluster</h1>
<table width="100%">
<tbody>
<tr>
<td><strong>Nodes/Minions</strong></td>
<td>A&nbsp;node is a machine - physical or virtual - on which k8s is installed. The docker-containers that are launched by k8s are hosted by these worker maachines.</td>
</tr>
<tr>
<td><strong>Cluster&nbsp;</strong></td>
<td>A&nbsp;set of nodes grouped together. So, if one node fails, the application is still accessible from other nodes. Moreover, multiple nodes help sharing the load as well.</td>
</tr>
<tr>
<td><strong>Master&nbsp;</strong></td>
<td>Another node with k8s installed and configured as a master. Its responsible for managing the cluster and orchestration of containers on the worker nodes.</td>
</tr>
</tbody>
</table>
<h2>Components</h2>
<p><img src="data\cloud\images\k8s\1.k8s pomponents.png" alt="" width="100%"/></p>
<table width="100%">
<tbody>
<tr>
<td><strong>API Server</strong></td>
<td>Acts as the frontend of k8s. The users, management devices, CLI — all talk to the API server to interact with the k8s cluster</td>
</tr>
<tr>
<td><strong>etcd&nbsp;</strong></td>
<td>A distributed and reliable key-value store used by k8s to store all data used to manage the cluster&nbsp;</td>
</tr>
<tr>
<td><strong>Kubelet&nbsp;</strong></td>
<td>It's a command line utility that acts as an agent, and runs on each node within the cluster. Its responsible for making sure that the containers are running on the nodes as expected&nbsp;</td>
</tr>
<tr>
<td><strong>Container Runtime&nbsp;</strong></td>
<td>Underlying software used to run containers, e.g., Docker&nbsp;</td>
</tr>
<tr>
<td><strong>Controller&nbsp;</strong></td>
<td>Responsible for noticing and responding when nodes/containers goes down, and decides on bringing up new containers in such cases.&nbsp;</td>
</tr>
<tr>
<td><strong>Scheduler&nbsp;</strong></td>
<td>Distributes work/containers across multiple nodes — looks for newly created containers and assigns them to nodes&nbsp;</td>
</tr>
</tbody>
</table>
<h2>Master Vs Worker Nodes</h2>
<p><img src="data\cloud\images\k8s\2.Master Vs Worker Nodes.png" alt="" width="100%"/></p>

<h2>kubectl &mdash; the kube command-line tool</h2>
<p>Used to manage and deploy applications on a kubernetes cluster.&nbsp;</p>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>COMMAND</strong></td>
<td style="text-align: center;"><strong>DESCRIPTION</strong></td>
</tr>
<tr>
<td>kubectl run &lt;application&gt;</td>
<td>Deploys an application into the k8s cluster&nbsp;</td>
</tr>
<tr>
<td>kubectl cluster-info</td>
<td>View information about the cluster</td>
</tr>
<tr>
<td>kubectl get nodes</td>
<td>List all the nodes that are part of the cluster</td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },

    {   /* Minikube Setup */
        "text" : function(){/*
<h1>Minikube Setup</h1>
<strong><p>Prerequisite:</strong> Install&nbsp;<a href="https://www.virtualbox.org/wiki/Downloads" target="_blank">Oracle VM VirtualBox</a></p>
<p>&nbsp;</p>
<ol>
<li><p>Click&nbsp;<a href="https://github.com/kubernetes/minikube/releases/latest" target="_blank">here</a>&nbsp;and download&nbsp;<code>minikube-windows-amd64.exe</code> file</p></li>
<li><p>Click&nbsp;<a href="https://storage.googleapis.com/kubernetes-release/release/v1.18.0/bin/windows/amd64/kubectl.exe" target="_blank">here</a> to download&nbsp;<code>kubectl.exe</code> v1.18.0 file</p></li>
<li><p>Move both&nbsp;<code>minikube-windows-amd64.exe</code> and&nbsp;<code>kubectl.exe</code> to&nbsp;<strong>C:\kubernetes</strong> directory</p></li>
<li><p>Rename&nbsp;<code>minikube-windows-amd64.exe</code> to&nbsp;<code>minikube.exe</code></p></li>
<li><p>Add&nbsp;<strong>C:\kubernetes</strong> to <strong>PATH</strong> variable</p></li>
<li>
<p>Run the following commands:</p>
<pre>
minikube start --driver=virtualbox
kubectl get nodes
kubectl get pods
kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.10
kubectl get pods
kubectl expose deployment hello-minikube --type=NodePort --port=8080
minikube service hello-minikube --url
</pre>
<img src="data\cloud\images\k8s\3.install minikube and kubectl.png" alt="" width="100%" />
</li>
<li>
<p>The application can be acccessed at this url. Also, notice that a VM gets automatically created for this Minikube</p>
<img src="data\cloud\images\k8s\4.VM gets created automatically.png" alt="" width="100%" />
</li>
<li>
<p>Lets do the cleanup by running the following commands:</p>
<pre>
kubectl delete services hello-minikube
kubectl delete deployment hello-minikube
minikube stop
minikube delete
</pre>
<img src="data\cloud\images\k8s\5. cleanup.png" alt="" />
</li>
<li><p>Notice that the VM automatically gets removed from Oracle VM VirtualBox Manager</p></li>
</ol>
<p>Reference:&nbsp;<a href="https://kubernetes.io/docs/setup/learning-environment/minikube/#quickstart" target="_blank">Minikube Quickstart Guide</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* TODO */
        "text" : function(){/*
<h1>TODO</h1>
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },
]
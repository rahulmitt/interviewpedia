var k8s_que = [
	{
		question : "K8s Overview",
		tags : ["K8s Overview", "Kubernetes Overview"]
	},

	{
		question : "Minikube Setup (windows)",
		tags : ["k8s setup", "Kubernetes Setup", "Minikube Setup"]
	},

	{
		question : "Minikube Setup (unix)",
		tags : ["k8s setup", "Kubernetes Setup", "Minikube Setup"]
	},

	{
		question : "Test Deployment on Minikube",
		tags : ["Test Deployment on Minikube"]
	},

	{
		question : "Running local docker images on Minikube",
		tags : ["Running local docker images on Minikube"]
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
<p><img src="data\cloud\images\k8s\1.the k8s cluster\1.k8s components.png" alt="" width="100%"/></p>
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
<p><img src="data\cloud\images\k8s\1.the k8s cluster\2.Master Vs Worker Nodes.png" alt="" width="100%"/></p>

<h2>kubectl &mdash; the kube controller</h2>
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

    {   /* Minikube Setup (windows) */
        "text" : function(){/*
<h1>Minikube Setup (windows)</h1>
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
<img src="data\cloud\images\k8s\2.Minikube Setup (windows)\1.install minikube and kubectl.png" alt="" width="100%" />
</li>
<li>
<p>The application can be acccessed at this url. Also, notice that a VM gets automatically created for this Minikube</p>
<img src="data\cloud\images\k8s\2.Minikube Setup (windows)\2.VM gets created automatically.png" alt="" width="100%" />
</li>
<li>
<p>Lets do the cleanup by running the following commands:</p>
<pre>
kubectl delete services hello-minikube
kubectl delete deployment hello-minikube
minikube stop
</pre>
<img src="data\cloud\images\k8s\2.Minikube Setup (windows)\3. cleanup.png" alt="" />
</li>
<li>
<p>Delete Minikube VM from Oracle VM VirtualBox Manager</p>
<pre>
minikube delete
</pre>
<img src="data\cloud\images\k8s\2.Minikube Setup (windows)\4. delete minikube.png" alt="" />
<p>Notice that the VM automatically gets removed from Oracle VM VirtualBox Manager</p>
</li>
</ol>
<p>Reference:&nbsp;<a href="https://kubernetes.io/docs/setup/learning-environment/minikube/#quickstart" target="_blank">Minikube Quickstart Guide</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Minikube Setup (unix) */
        "text" : function(){/*
<h1>Minikube Setup (unix)</h1>
<ol>
<li>
<p>Download kubectl</p>
<pre>
sudo mkdir -p /usr/local/bin/

curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl \
    -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl

chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/
</pre>
<p><img src="data\cloud\images\k8s\3.minikube setup (unix)\1.download kubectl.png" alt="" width="100%"/></p>
<p>Reference:&nbsp;<a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-linux" target="_blank">Kubernetes Documentation - kubectl</a>
</li>
<li>
<p>Download Minikube</p>
<pre>
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
chmod +x ./minikube
sudo mv ./minikube /usr/local/bin/
</pre>
<p><img src="data\cloud\images\k8s\3.minikube setup (unix)\2.download minikube.png" alt="" width="100%"/></p>
<p>Reference:&nbsp;<a href="https://kubernetes.io/docs/tasks/tools/install-minikube/" target="_blank">Kubernetes Documentation - Minikube</a>
</li>
<li>
<p>Install Minikube</p>
<pre>
minikube start --vm-driver docker --disk-size='2000mb'
</pre>
</li>
<li>
<p>Stop Minikube</p>
<pre>
minikube stop
</pre>
<p><img src="data\cloud\images\k8s\3.minikube setup (unix)\3.install minikube.png" alt="" width="100%"/></p>
</li>
<li>
<p>Delete Minikube</p>
<pre>
minikube delete
</pre>
</li>
</ol>
<p>&nbsp;</p>
        */}.toString().slice(14,-3)
    },

    {   /* Test Deployment on Minikube */
        "text" : function(){/*
<h1>Test Deployment on Minikube</h1>
<pre>
docker images
docker ps
minikube start
docker ps
kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.10
kubectl expose deployment hello-minikube --type=NodePort --port=8080
kubectl get pod
minikube service hello-minikube --url
curl http://172.17.0.2:31001
</pre>
<p><img src="data\cloud\images\k8s\4.test deployment\1.png" alt="" width="100%"/></p>

<pre>
kubectl delete services hello-minikube
kubectl delete deployment hello-minikube
</pre>
<p>Reference:&nbsp;<a href="https://kubernetes.io/docs/setup/learning-environment/minikube/" target="_blank">Minikube - Quickstart</a>
        */}.toString().slice(14,-3)
    },

    {   /* Running local docker images on Minikube */
        "text" : function(){/*
<h1>Running local docker images on Minikube</h1>
<pre>
minikube docker-env
eval $(minikube -p minikube docker-env)
docker build -t interviewpedia/gbce:v2 .
docker images
kubectl create deployment gbce --image=interviewpedia/gbce:v2
kubectl expose deployment gbce --type=NodePort --port=8080
kubectl get pod
minikube service gbce --url

curl http://172.17.0.3:31714/stock-exchange/stock/list
</pre>
<p><img src="data\cloud\images\k8s\5.running local docker images on minikube\1.png" alt="" width="100%"/></p>
<pre>
kubectl delete services gbce
kubectl delete deployment gbce
docker ps | grep gbce
docker images | grep gbce
docker rmi &lt;image-id&gt;
docker images | grep gbce
</pre>
<p>Reference:</p>
<p>1.&nbsp;<a href="https://dzone.com/articles/running-local-docker-images-in-kubernetes-1" target="_blank">Running Local Docker Images in Kubernetes</a></p>
<p>2.&nbsp;<a href="https://codingbee.net/tutorials/kubernetes/using-docker-with-minikube" target="_blank">Using Docker with Minikube</a></p>
        */}.toString().slice(14,-3)
    },
]
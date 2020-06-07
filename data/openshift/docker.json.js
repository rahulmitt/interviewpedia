var docker_que = [
	{
		question : "Uninstalling Docker",
		tags : ["Uninstalling Docker"]
	},

	{
		question : "Docker Installation",
		tags : ["Docker Installation"]
	},

	{
		question : "Running a simple Docker Container",
		tags : ["Running a simple Docker Container"]
	},

	{
		question : "Basic Docker Commands",
		tags : ["Basic Docker Commands"]
	},
]

var docker_ans = [
    {   /* Uninstalling Docker */
        "text" : function(){/*
<h1>Uninstalling Docker</h1>
<table width="100%">
<tbody>
<tr>
<td>
<p><code>sudo apt-get purge -y docker-engine docker docker.io docker-ce</code></p>
<p><code>sudo apt-get autoremove -y --purge docker-engine docker docker.io docker-ce </code></p>
<p><code>sudo umount /var/lib/docker/ </code></p>
<p><code>sudo rm -rf /var/lib/docker /etc/docker </code></p>
<p><code>sudo rm /etc/apparmor.d/docker </code></p>
<p><code>sudo groupdel docker </code></p>
<p><code>sudo rm -rf /var/run/docker.sock </code></p>
<p><code>sudo rm -rf /usr/bin/docker-compose </code></p>
</td>
</tr>
</tbody>
</table>
<p>Reference:&nbsp;<a href="https://askubuntu.com/questions/935569/how-to-completely-uninstall-docker" target="_blank">https://askubuntu.com/questions/935569/how-to-completely-uninstall-docker</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Docker Installation */
        "text" : function(){/*
<h1>Docker Installation</h1>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>STEPS</strong></td>
<td style="text-align: center;"><strong>COMMANDS</strong></td>
</tr>
<tr>
<td>1. Uninstall Old Versions (docker, docker-engine, docker.io)</td>
<td><code>sudo apt-get remove docker docker-engine docker.io containerd runc</code></td>
</tr>
<tr>
<td>2. Download convenience script</td>
<td>
<p><code>cd&nbsp;/home/rahul/Desktop</code></p>
<p><code>curl -fsSL https://get.docker.com -o get-docker.sh</code></p>
<p><code>ls -ltra</code></p>
</td>
</tr>
<tr>
<td>3. Execute the script to install Docker</td>
<td>
<p><code>sudo sh get-docker.sh</code></p>
</td>
</tr>
<tr>
<td>4. Check Docker version and remove the script</td>
<td>
<p><code>sudo docker version</code></p>
<p><code>rm -f&nbsp;/home/rahul/Desktop/get-docker.sh</code></p>
</td>
</tr>
</tbody>
</table>
<p>Reference:&nbsp;<a href="https://docs.docker.com/engine/install/ubuntu/" target="_blank">https://docs.docker.com/engine/install/ubuntu/</a></p>
        */}.toString().slice(14,-3)
    },

    {   /* Running a simple Docker Container */
        "text" : function(){/*
<h1>Running a simple Docker Container</h1>
<p style="text-align: justify;"><strong>Docker Hub:</strong>&nbsp;<a href="https://hub.docker.com/" target="_blank">https://hub.docker.com/</a></p>
<table width="100%">
<tbody>
<tr>
<td>Running the simple&nbsp;<a href="https://hub.docker.com/r/docker/whalesay" target="_blank">whalesay</a>&nbsp;container for testing the installation</td>
<td><code>sudo docker run docker/whalesay cowsay Hello-World</code></td>
</tr>
</tbody>
</table>
<p><img src="data\openshift\images\docker\1.running a simple container.png" alt="" width="100%" /></p>
        */}.toString().slice(14,-3)
    },

    {   /* Basic Docker Commands */
        "text" : function(){/*
<h1>Basic Docker Commands</h1>
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;"><strong>COMMANDS</strong></td>
<td style="text-align: center;"><strong>SYNTAX</strong></td>
</tr>
<tr>
<td>Run &mdash; start a&nbsp;container from an image</td>
<td>
<p><code>docker run&nbsp;&lt;image&gt;</code></p>
<p>Use the command&nbsp;<code>docker run nginx</code> to run an instance of <strong>nginx</strong> application on the docker host, if it already exists. If it doesn't exist on the host, it goes to the <strong>docker-hub</strong> and pulls the image</p>
</td>
</tr>
<tr>
<td>Pull &mdash; download an image</td>
<td>
<p><code>docker pull&nbsp;&lt;image&gt;</code></p>
<p>Use the command&nbsp;<code>docker run nginx</code> to only pull the image and not run the container</p>
</td>
</tr>
<tr>
<td>ps &mdash; list containers</td>
<td>
<p><code>docker ps</code></p>
<p>lists all <strong>running</strong> containers alongwith some basic info about them</p>
<p><code>docker ps -a</code></p>
<p>lists all&nbsp;<strong>running</strong>&nbsp;as well <strong>exited</strong> containers</p>
</td>
</tr>
<tr>
<td>stop &mdash; stop a running container</td>
<td>
<p><code>docker stop &lt;containerId | container_name&gt;</code></p>
<p>Use the&nbsp;<code>docker ps</code> command to get the <strong>containerId</strong> or <strong>container-name</strong></p>
</td>
</tr>
<tr>
<td>rm &mdash; remove a container</td>
<td>
<p><code>docker rm &lt;containerId | container_name&gt;</code></p>
<p>Removes a <strong>stopped</strong>/<strong>exited</strong> container permanently</p>
</td>
</tr>
<tr>
<td>images &mdash; list images</td>
<td>
<p><code>docker images</code></p>
<p>lists the available images and their sizes on the docker host</p>
</td>
</tr>
<tr>
<td>rmi &mdash; removes images</td>
<td>
<p><code>docker rmi &lt;image&gt;</code></p>
<p>Use the command&nbsp;<code>docker rmi nginx</code>&nbsp;to remove the image of <strong>nginx</strong> application.</p>
<p><span style="text-decoration: underline;"><strong>Note</strong></span><strong>:</strong> Ensure that no containers are running for this image. All dependent containers must be stopped and deleted before deleting an image.</p>
</td>
</tr>
</tbody>
</table>
        */}.toString().slice(14,-3)
    },
]
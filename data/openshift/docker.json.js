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

	{
		question : "Docker run — port mapping",
		tags : ["Docker run — port mapping"]
	},

	{
		question : "Docker run — volume mapping",
		tags : ["Docker run — volume mapping"]
	},

	{
		question : "Dockerizing — manually",
		tags : ["Dockerizing — manually"]
	},

	{
		question : "Dockerizing — automatically",
		tags : ["Dockerizing — automatically"]
	},

	{
		question : "Docker Image Layers",
		tags : ["Docker Image Layers"]
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
<td style="text-align: center;"><strong>COMMAND</strong></td>
<td style="text-align: center;"><strong>DESCRIPTION</strong></td>
<td style="text-align: center;"><strong>SYNTAX</strong></td>
</tr>
<tr>
<td><strong>run</strong></td>
<td>start a container from an image</td>
<td>
<p><code>docker run&nbsp;&lt;image&gt;</code></p>
<p>Use the command&nbsp;<code>docker run nginx</code> to run an instance of <strong>nginx</strong> application on the docker host, if it already exists. If it doesn't exist on the host, it goes to the <strong>docker-hub</strong> and pulls the image</p>
</td>
</tr>
<tr>
<td><strong>pull</strong></td>
<td>download an image</td>
<td>
<p><code>docker pull&nbsp;&lt;image&gt;</code></p>
<p>Use the command&nbsp;<code>docker run nginx</code> to only pull the image and not run the container</p>
</td>
</tr>
<tr>
<td><strong>ps</strong></td>
<td>list containers</td>
<td>
<p><code>docker ps</code></p>
<p>lists all <strong>running</strong> containers alongwith some basic info about them</p>
<p><code>docker ps -a</code></p>
<p>lists all&nbsp;<strong>running</strong>&nbsp;as well <strong>exited</strong> containers</p>
</td>
</tr>
<tr>
<td><strong>stop</strong></td>
<td>stop a running container</td>
<td>
<p><code>docker stop &lt;containerId | container_name&gt;</code></p>
<p>Use the&nbsp;<code>docker ps</code> command to get the <strong>containerId</strong> or <strong>container-name</strong></p>
</td>
</tr>
<tr>
<td><strong>rm</strong></td>
<td>remove a container</td>
<td>
<p><code>docker rm &lt;containerId | container_name&gt;</code></p>
<p>Removes a <strong>stopped</strong>/<strong>exited</strong> container permanently</p>
</td>
</tr>
<tr>
<td><strong>images</strong></td>
<td>list images</td>
<td>
<p><code>docker images</code></p>
<p>lists the available images and their sizes on the docker host</p>
</td>
</tr>
<tr>
<td><strong>rmi</strong></td>
<td>removes images</td>
<td>
<p><code>docker rmi &lt;image&gt;</code></p>
<p>Use the command&nbsp;<code>docker rmi nginx</code>&nbsp;to remove the image of <strong>nginx</strong> application.</p>
<p><span style="text-decoration: underline;"><strong>Note</strong></span><strong>:</strong> Ensure that no containers (alive or exited) for this image. All dependent containers must be stopped and deleted before deleting an image.</p>
</td>
</tr>
<tr>
<td><strong>exec</strong></td>
<td>execute a command</td>
<td>
<p><code>docker exec &lt;image name&gt; &lt;command&gt;</code></p>
<p>Use the&nbsp;<code>docker exec&nbsp;heuristic_ritchie cat /etc/hosts</code> command to print the contents of the corresponding file</p>
</td>
</tr>
</tbody>
</table>
<p style="text-align: justify;">Unlike Virtual Machines, containers are meant to ex
ecute a specific task or process &mdash; e.g., host a web server or a database, or simple to perform some computation&nbsp;&mdash;&nbsp;and exit once&nbsp;that task is complete. A comtainer only lives as long as the process inside it is alive; if the web-service inside a container is stopped or crashed, then the container exits. For this reason, if an ubuntu image is run inside a docker, it immediately exits, as&nbsp;ubuntu is just an image of an operating system that is used as the base image for other applications; there is no process or image running inside it, by default.</p>
<p style="text-align: justify;"><img src="data\openshift\images\docker\2.running ubuntu image.png" alt="" width="100%"/></p>
<h2 style="text-align: justify;">Run &mdash; attach and detach</h2>
<p style="text-align: justify;">The command&nbsp;<code>docker run ubuntu sleep 20</code> runs the docker container in the&nbsp;<strong>attached mode</strong> (foreground), i.e., it will be attached to the console/stdout of the docker container and the output will be displayed on the screen. You will not be able to do anything else on this console other than view the output until this docker container stops; it won't respond to your inputs.</p>
<p style="text-align: justify;"><img src="data\openshift\images\docker\3.docker run attached mode.png" alt="" width="100%"/></p>
<p style="text-align: justify;">Another option is to run the docker container in the <strong>detached mode</strong> by providing the <code>-d</code> option to the run command, which runs the docker container in the background, and you will be back to your prompt immediately, and the container will continue to run in the background.</p>
<p style="text-align: justify;"><img src="data\openshift\images\docker\4. docker run detached mode.png" alt="" width="100%"/></p>

<table width="100%">
<tbody>
<tr valign="top">
<td><p style="text-align: justify;"><img src="data\openshift\images\docker\5.run -it.png" /></p></td>
<td>
<p style="text-align: justify;">If you would like to provide some input, you must map the <strong>stdin</strong> of your host to the docker container using the <code>-i</code> option. This option is for <strong>interactive</strong> mode.</p>
<p style="text-align: justify;">The applications prompt on the <strong>terminal</strong> and we may need to <strong>attach</strong> it to the container's terminal. Use <code>-t</code> option to attach a <strong>pseudo terminal</strong>.</p>
</td>
</tr>
</tbody>
</table>

<p style="text-align: justify;">Docker containers can be removed either using container-id, names or just the first few letters of the container-id. Multiple containers can also be removed at once, as shown below:</p>
<p style="text-align: justify;"><img src="data\openshift\images\docker\6. docker rm.png" alt="" width="100%"/></p>
<p style="text-align: justify;">Before removing an image make sure that there are no containers for this image, otherwise, it will give an error as illustrated below. Any containers for the image to be deleted must be removed first:</p>
<p style="text-align: justify;"><img src="data\openshift\images\docker\7. docker rmi.png" alt="" width="100%"/></p>
<p style="text-align: justify;">Using docker exec command:</p>
<p style="text-align: justify;"><img src="data\openshift\images\docker\8. docker exec.png" alt="" width="100%"/></p>

<h2 style="text-align: justify;">Docker Run &mdash; Tag</h2>
<p><a href="https://hub.docker.com/_/ubuntu" target="_blank">Ubuntu Image — Supported tags</a></p>
<p style="text-align: justify;"><img src="data\openshift\images\docker\9. docker run tag1.png" alt="" width="690" height="289" /></p>
<p style="text-align: justify;"><img src="data\openshift\images\docker\9. docker run tag2.png" alt="" /></p>
        */}.toString().slice(14,-3)
    },

    {   /* Docker run — port mapping */
        "text" : function(){/*
<h1>Docker run &mdash; port mapping</h1>

<p style="text-align: justify;">Docker <strong>port-mapping</strong> (or port forwarding) helps to bind the <strong>container ports</strong> with <strong>docker-host</strong> in order to access the applications running on the containers through network.</p>
<p><img src="data\openshift\images\docker\10. docker run port mapping.png" /></p>
<p style="text-align: justify;">By default, when we create any container that doesn't publish/export the application ports running on the container. So we can access these applications only within the docker-host and not through network systems.</p>

<p><code>docker run -dit --name container1 docker.io/httpd</code></p>
<p style="text-align: justify;">I have created one container for <strong>httpd apache webservice</strong> with name <strong>container1</strong>. This container has got IP address <strong>172.17.0.2</strong>, and running on port <strong>80</strong>. But these httpd service port is not published, so we can access it only using the assigned IP address locally within the docker-host.</p>
<p><code>curl 172.17.0.2:80</code></p>

<p><img src="data\openshift\images\docker\11. docker run port mapping1.png" width="100%" /></p>

<p style="text-align: justify;">In order to access these applications or services through network, we must <strong>publish the ports</strong> while running the container using <code>-p</code> option. This will create a firewall rule to bind the container port to a docker-host port.</p>
<p><code>docker run -dit --name container2 -p 8080:80 docker.io/httpd</code></p>
    <p style="text-align: justify;">Users must use the docker-host IP address <strong>192.168.0.103</strong> to access the containers through network with published port <strong>8080</strong>. The request would first reach the docker-host (192.168.0.103:8080) and subsequently gets forwarded to the respective containers (8080--&gt; 80)</p>
<p><code>curl 192.168.0.103:8080</code></p>
<p><img src="data\openshift\images\docker\12. docker run port mapping2.png" width="100%" /></p>

        */}.toString().slice(14,-3)
    },

    {   /* Docker run — volume mapping */
        "text" : function(){/*
<h1>Docker run — volume mapping</h1>
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },

    {   /* Create a Docker image — manually */
        "text" : function(){/*
<h1>Create a Docker image &mdash; manually</h1>
<ol>
<li style="text-align: justify;">
<p>Identify a jar for which a docker image needs to be created</p>
<p><img src="data\openshift\images\docker\create image - manually\1.png" /></p>
</li>
<li style="text-align: justify;">
<p>Pull the image for&nbsp;<a href="https://hub.docker.com/layers/openjdk/library/openjdk/8-jdk-alpine/images/sha256-a3562aa0b991a80cfe8172847c8be6dbf6e46340b759c2b782f8b8be45342717?context=explore" target="_blank">openjdk:8-jdk-alpine</a> and run a container</p>
<pre>
docker ps
docker run -dit openjdk:8-jdk-alpine
docker ps
</pre>
<p><img src="data\openshift\images\docker\create image - manually\2.png" width="100%"/></p>
</li>
<li style="text-align: justify;">
<p>Copy the jar onto some path inside the container</p>
<pre>
docker exec &lt;container name&gt; ls -ltra /tmp
docker cp target/gbce-1.0-SNAPSHOT.jar &lt;container name&gt;:/tmp
docker exec &lt;container name&gt; ls -ltra /tmp
</pre>
<p><img src="data\openshift\images\docker\create image - manually\3.png" width="100%"/></p>
</li>
<li style="text-align: justify;">
<p>Save the container as an image</p>
<pre>
docker commit --change='CMD ["java", "-jar", "&lt;absolute path of jar file&gt;"]' &lt;container name&gt; &lt;repo:tag&gt;
docker images
</pre>
<p><img src="data\openshift\images\docker\create image - manually\4.png" width="100%"/></p>
</li>
<li style="text-align: justify;">
<p>Run the container for the new created image</p>
<pre>
docker run -d -p 8080:8080 interviewpedia/gbce:v1
docker ps
docker logs -f &lt;containerid | name&gt;
</pre>
<p><img src="data\openshift\images\docker\create image - manually\5.png" width="100%"/></p>
</li>
<li style="text-align: justify;">
<p>Access the application</p>
<p><a href="http://192.168.0.108:8080/stock-exchange/stock/list" target="_blank">http://&lt;docker-host IP&gt;:8080/stock-exchange/stock/list</a></p>
</li>
<li style="text-align: justify;">
<p>Check the docker image layers</p>
<pre>
docker history interviewpedia/gbce:v1
</pre>
<p><img src="data\openshift\images\docker\create image - manually\6.png" width="100%"/></p>
</li>

</ol>
        */}.toString().slice(14,-3)
    },

    {   /* Dockerizing — automatically */
        "text" : function(){/*
<h1>Dockerizing &mdash; automatically</h1>
<pre>
ls -ltra
cat Dockerfile
docker images
docker build -t interviewpedia/gbce:v2 .
docker images
docker run -d -p 8080:8080 interviewpedia/gbce:v2
docker ps
docker logs -f 0df97cdcd216
</pre>
<p><img src="data\openshift\images\docker\create image - automatically\1.png" width="100%"/></p>
<p>Access the application: <a href="http://192.168.0.108:8080/stock-exchange/stock/list" target="_blank">http://&lt;docker-host IP&gt;:8080/stock-exchange/stock/list</a></p>
<p>Check the docker image layers</p>
<pre>
docker history interviewpedia/gbce:v2
</pre>
<p><img src="data\openshift\images\docker\create image - automatically\2.png" width="100%"/></p>
<p>References:</p>
<p>1.&nbsp;<a href="https://spring.io/blog/2020/01/27/creating-docker-images-with-spring-boot-2-3-0-m1" target="_blank">Creating Docker Images With Spring Boot 2.3.0.m1</a></p>
<p>2.&nbsp;<a href="https://github.com/spotify/dockerfile-maven" target="_blank">Spotify Dockerfile Maven Plugin</a>&nbsp;<a href="https://github.com/spotify/dockerfile-maven/issues/112" target="_blank">[Issues]</a></p>

        */}.toString().slice(14,-3)
    },

    {   /* Docker Image Layers */
        "text" : function(){/*
<h1>Docker Image Layers</h1>
<p style="text-align: justify;">Docker layers are cached; so, if we run the docker build command again without making any changes, it should pickup everything from cache.</p>
<p style="text-align: justify;"><img src="data\openshift\images\docker\create image - automatically\3.png" alt="" width="100%" /></p>
<p style="text-align: justify;">Unless there are modifications, layers wiould be cache whenever possible. In case there are modifications (e.g., change in Dockerfile),&nbsp;the&nbsp;change and the subsequent steps are recreated again (and not picked from cache), as shown below:</p>
<p style="text-align: justify;"><img src="data\openshift\images\docker\create image - automatically\4.png" alt="" width="100%" /></p>
        */}.toString().slice(14,-3)
    },
]
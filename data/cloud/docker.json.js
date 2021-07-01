var docker_que = [
	{
		id : 1,
		question : "Docker Setup",
		tags : ["Docker Setup", "Installing Docker", "Uninstalling Docker"]
	},

	{
		id : 2,
		question : "Running a Docker Container",
		tags : ["Running a Docker Container"]
	},

	{
		id : 3,
		question : "Basic Docker Commands",
		tags : ["Basic Docker Commands"]
	},

	{
		id : 4,
		question : "Port Mapping",
		tags : ["Port Mapping"]
	},

	{
		id : 5,
		question : "Docker run — volume mapping",
		tags : ["Docker run — volume mapping"]
	},

	{
		id : 6,
		question : "Dockerizing — manually",
		tags : ["Dockerizing — manually"]
	},

	{
		id : 7,
		question : "Dockerizing — automatically",
		tags : ["Dockerizing — automatically"]
	},

	{
		id : 8,
		question : "Docker Image Layers",
		tags : ["Docker Image Layers"]
	},
];

var docker_ans = [
    {   /* Docker Setup */
		id : 1,
        "text" : function(){/*
<h2>Docker Installation</h2>
<pre>
sudo apt-get remove docker docker-engine docker.io containerd runc
cd /home/rahulmitt/Downloads
curl -fsSL https://get.docker.com -o get-docker.sh
ls -ltra
sudo sh get-docker.sh
sudo usermod -aG docker $USER
</pre>
<p>Remember to log out and back in for this to take effect</p>
<pre>
docker version
rm -f /home/rahul/Downloads/get-docker.sh
</pre>
<p style="text-align: justify;"><img src="data\cloud\images\1.docker\1.installation\1.Installing Docker.png" alt="" width="100%"/></p>
<p>Reference:&nbsp;<a href="https://docs.docker.com/engine/install/ubuntu/" target="_blank">https://docs.docker.com/engine/install/ubuntu/</a></p>

<h2>Docker Compose Installation</h2>
<pre>
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
</pre>


<h2>Uninstalling Docker</h2>
<pre>
sudo apt-cache policy docker*
sudo apt purge docker-engine-cs docker-compose docker-ce-rootless-extras docker docker.io-doc docker2aci docker-engine docker-registry docker-scan-plugin docker-doc docker-ce docker-ce-cli docker.io
sudo apt autoremove
</pre>

<h2>Uninstalling Docker Compose</h2>
<pre>
sudo rm /usr/local/bin/docker-compose
sudo apt remove docker-compose
sudo apt autoremove
</pre>

        */}.toString().slice(14,-3)
    },

    {   /* Running a Docker Container */
		id : 2,
        "text" : function(){/*
<p style="text-align: justify;"><strong>Docker Hub:</strong>&nbsp;<a href="https://hub.docker.com/" target="_blank">https://hub.docker.com/</a></p>
<p style="text-align: justify;">Execute the following command in order to run a simple&nbsp;<a href="https://hub.docker.com/r/docker/whalesay" target="_blank">whalesay</a>&nbsp;container for testing the installation:</p>
<pre>
docker run docker/whalesay cowsay Hello-World
docker images
</pre>
<p><img src="data\cloud\images\1.docker\2.running a simple container\1.png" alt="" width="100%" /></p>
        */}.toString().slice(14,-3)
    },

    {   /* Basic Docker Commands */
		id : 3,
        "text" : function(){/*
<table width="100%">
<tbody>
<tr>
<td style="text-align: center;" width="20%"><strong>ACTION</strong></td>
<td style="text-align: center;" width="80%"><strong>COMMAND FOR IMAGE</strong></td>
</tr>

<tr>
<td>Pull an image from docker-registry. Don't run the container</td>
<td>
<pre>docker pull &lt;image-repository&gt;[:&lt;tag&gt;]
</pre>
</tr>

<tr>
<td>Search images on <a href="https://hub.docker.com/" target="_blank">docker-hub</a> that have another image</td>
<td>
<pre>
docker search &lt;image&gt;
</pre>
</tr>

<tr>
<td>Display the steps involved in creating the image</td>
<td>
<pre>
docker image history &lt;image-id | repository:tag&gt;
</pre>
</tr>

<tr>
<td>Inspect an image</td>
<td>
<pre>
docker image inspect &lt;image-id | repository:tag&gt;
</pre>
</tr>

<tr>
<td>Display all images in local</td>
<td>
<pre>
docker images
</pre>
</tr>

<tr>
<td>create another tag to the same image</td>
<td>
<pre>
docker tag &lt;repository&gt;:&lt;tag&gt; &lt;repository&gt;:&lt;new-tag&gt;
</pre>
</tr>

<tr>
<td>Remove an image from local</td>
<td>
<pre>
docker image remove &lt;image-id | repository:tag&gt;
</pre>
or,
<pre>
docker rmi &lt;image-id | repository:tag&gt;
</pre>
<p><span style="text-decoration: underline;"><strong>Note</strong></span><strong>:</strong> Ensure that no containers (alive or exited) for this image. All dependent containers must be stopped and deleted before deleting an image.</p>
</tr>

</tbody>
</table>

<p>&nbsp;</p>
<p>&nbsp;</p>

<table width="100%">
<tbody>

<tr>
<td style="text-align: center;" width="20%"><strong>ACTION</strong></td>
<td style="text-align: center;" width="80%"><strong>COMMAND FOR CONTAINER</strong></td>
</tr>

<tr>
<td>print docker version</td>
<td><pre>docker --version</pre></td>
</tr>

<tr>
<td>print docker version (both client and server)</td>
<td><pre>docker version</pre></td>
</tr>

<tr>
<td>Restart docker&nbsp;</td>
<td><pre>systemctl restart docker</pre></td>
</tr>

<tr>
<td>Run a container. Pull it from docker-registry if the image is not present locally</td>
<td><pre>docker [container] run -d -p &lt;host-port&gt;:&lt;container-port&gt; &lt;image-repository&gt;[:&lt;tag&gt;]</pre></td>
</tr>

<tr>
<td>Tail the logs of a container</td>
<td><pre>docker [container] logs -f &lt;container-id&gt;</pre></td>
</tr>

<tr>
<td>Inspect a container</td>
<td><pre>docker [container] inspect &lt;container-id&gt;</pre></td>
</tr>

<tr>
<td>Display all the running containers</td>
<td>
<pre>docker container ls</pre>
or,
<pre>docker [container] ps</pre>
</td>
</tr>

<tr>
<td>Display all containers including those that are running</td>
<td><pre>docker container ls -a</pre></td>
</tr>

<tr>
<td>&nbsp;</td>
<td><pre>docker [container] ps -a</pre></td>
</tr>

<tr>
<td>Stop a running container<br /> (graceful shutdown)</td>
<td><pre>docker [container] stop &lt;container-id&gt;</pre></td>
</tr>

<tr>
<td>Pause a running container</td>
<td><pre>docker [container] pause &lt;container-id&gt;</pre></td>
</tr>

<tr>
<td>Unpause a container</td>
<td><pre>docker [container] unpause &lt;container-id&gt;</pre></td>
</tr>

<tr>
<td>Remove a container</td>
<td><pre>docker [container] rm &lt;container-id | name&gt;</pre></td>
</tr>

<tr>
<td>Remove all the stopped containers</td>
<td><pre>docker container prune</pre></td>
</tr>

<tr>
<td>Kill a running container</td>
<td><pre>docker [container] kill &lt;container-id | name&gt;</pre></td>
</tr>

<tr>
<td>Run a container with restart policy as always</td>
<td>
<pre>docker [container] run -d -p &lt;host-port&gt;:&lt;container-port&gt;
    --restart=[always | no] &lt;image-repository&gt;[:&lt;tag&gt;]
</pre>
</td>
</tr>

<tr>
<td>&nbsp;</td>
<td><pre>docker events</pre></td>
</tr>

<tr>
<td>Display the processes running inside a container</td>
<td><pre>docker top &lt;container-id | name&gt;</pre></td>
</tr>

<tr>
<td>Display the stats of all the running containers</td>
<td><pre>docker stats</pre></td>
</tr>

<tr>
<td>Display stats of docker daemon like resource utlization, etc</td>
<td><pre>docker system df</pre></td>
</tr>

<tr>
<td>Execute a command</td>
<td>
<pre>docker exec &lt;container-id | name&gt; &lt;command&gt;</pre>
<p>
Use the <code>docker exec heuristic_ritchie cat /etc/hosts</code> command to print the contents of the corresponding file
</p>
</td>
</tr>

</tbody>
</table>
<p>&nbsp;</p>

<p style="text-align: justify;">Unlike Virtual Machines, containers are meant to execute a specific task or process &mdash; e.g., host a web server or a database, or simple to perform some computation&nbsp;&mdash;&nbsp;and exit once&nbsp;that task is complete. A comtainer only lives as long as the process inside it is alive; if the web-service inside a container is stopped or crashed, then the container exits. For this reason, if an ubuntu image is run inside a docker, it immediately exits, as&nbsp;ubuntu is just an image of an operating system that is used as the base image for other applications; there is no process or image running inside it, by default.</p>
<p style="text-align: justify;"><img src="data\cloud\images\1.docker\3.basic docker commands\2.running ubuntu image.png" alt="" width="100%"/></p>
<h2 style="text-align: justify;">Run &mdash; attach and detach</h2>
<p style="text-align: justify;">The command&nbsp;<code>docker run ubuntu sleep 30</code> runs the docker container in the&nbsp;<strong>attached mode</strong> (foreground), i.e., it will be attached to the console/stdout of the docker container and the output will be displayed on the screen. You will not be able to do anything else on this console other than view the output until this docker container stops; it won't respond to your inputs.</p>
<p style="text-align: justify;"><img src="data\cloud\images\1.docker\3.basic docker commands\3.docker run attached mode.png" alt="" width="100%"/></p>
<p style="text-align: justify;">Another option is to run the docker container in the <strong>detached mode</strong> by providing the <code>-d</code> option to the run command, which runs the docker container in the background, and you will be back to your prompt immediately, and the container will continue to run in the background.</p>
<p style="text-align: justify;"><img src="data\cloud\images\1.docker\3.basic docker commands\4. docker run detached mode.png" alt="" width="100%"/></p>

<table width="100%">
<tbody>
<tr valign="top">
<td><p style="text-align: justify;"><img src="data\cloud\images\1.docker\3.basic docker commands\5.run -it.png" /></p></td>
<td>
<p style="text-align: justify;">If you would like to provide some input, you must map the <strong>stdin</strong> of your host to the docker container using the <code>-i</code> option. This option is for <strong>interactive</strong> mode.</p>
<p style="text-align: justify;">The applications prompt on the <strong>terminal</strong> and we may need to <strong>attach</strong> it to the container's terminal. Use <code>-t</code> option to attach a <strong>pseudo terminal</strong>.</p>
</td>
</tr>
</tbody>
</table>

<p style="text-align: justify;">Using docker exec command:</p>
<p style="text-align: justify;"><img src="data\cloud\images\1.docker\3.basic docker commands\6. docker exec.png" alt="" width="100%"/></p>

<h2 style="text-align: justify;">Docker Run &mdash; Tag</h2>
<p><a href="https://hub.docker.com/_/ubuntu" target="_blank">Ubuntu Image — Supported tags</a></p>
<p style="text-align: justify;"><img src="data\cloud\images\1.docker\3.basic docker commands\7. docker run tag1.png" alt="" width="100%" /></p>
<p style="text-align: justify;"><img src="data\cloud\images\1.docker\3.basic docker commands\8. docker run tag2.png" alt="" width="100%" /></p>
        */}.toString().slice(14,-3)
    },

    {   /* Port Mapping */
		id : 4,
        "text" : function(){/*
<p style="text-align: justify;">Docker <strong>port-mapping</strong> (or port forwarding) helps to bind the <strong>container ports</strong> with <strong>docker-host</strong> in order to access the applications running on the containers through network.</p>
<p><img src="data\cloud\images\1.docker\4.port mapping\1. docker run port mapping.png" /></p>
<p style="text-align: justify;">By default, when we create any container that doesn't publish/export the application ports running on the container. So we can access these applications only within the docker-host and not through network systems.</p>

<p><code>docker run -dit --name container1 docker.io/httpd</code></p>
<p style="text-align: justify;">I have created one container for <strong>httpd apache webservice</strong> with name <strong>container1</strong>. This container has got IP address <strong>172.17.0.2</strong>, and running on port <strong>80</strong>. But these httpd service port is not published, so we can access it only using the assigned IP address locally within the docker-host.</p>
<p><code>curl 172.17.0.2:80</code></p>

<p><img src="data\cloud\images\1.docker\4.port mapping\2. docker run port mapping1.png" width="100%" /></p>

<p style="text-align: justify;">In order to access these applications or services through network, we must <strong>publish the ports</strong> while running the container using <code>-p</code> option. This will create a firewall rule to bind the container port to a docker-host port.</p>
<p><code>docker run -dit --name container2 -p 8080:80 docker.io/httpd</code></p>
    <p style="text-align: justify;">Users must use the docker-host's <strong>IP address</strong> or <strong>hostname</strong> to access the containers through network with published port <strong>8080</strong>. The request would first reach the docker-host and subsequently get forwarded to the respective containers (8080--&gt; 80)</p>
<p><code>curl interviewpedia:8080</code></p>
<p><img src="data\cloud\images\1.docker\4.port mapping\3. docker run port mapping2.png" width="100%" /></p>

        */}.toString().slice(14,-3)
    },

    {   /* Docker run — volume mapping */
		id : 5,
        "text" : function(){/*
<p style="text-align: justify;">TODO</p>
        */}.toString().slice(14,-3)
    },

    {   /* Create a Docker image — manually */
		id : 6,
        "text" : function(){/*
<ol>
<li style="text-align: justify;">
<p>Identify a jar for which a docker image needs to be created</p>
<p><img src="data\cloud\images\1.docker\5.create image - manually\\1.png" /></p>
</li>
<li style="text-align: justify;">
<p>Pull the image for&nbsp;<a href="https://hub.docker.com/layers/openjdk/library/openjdk/8-jdk-alpine/images/sha256-a3562aa0b991a80cfe8172847c8be6dbf6e46340b759c2b782f8b8be45342717?context=explore" target="_blank">openjdk:8-jdk-alpine</a> and run a container</p>
<pre>
docker ps
docker run -dit openjdk:8-jdk-alpine
docker ps
</pre>
<p><img src="data\cloud\images\1.docker\5.create image - manually\\2.png" width="100%"/></p>
</li>
<li style="text-align: justify;">
<p>Copy the jar onto some path inside the container</p>
<pre>
docker exec &lt;container name&gt; ls -ltra /tmp
docker cp target/gbce-1.0-SNAPSHOT.jar &lt;container name&gt;:/tmp
docker exec &lt;container name&gt; ls -ltra /tmp
</pre>
<p><img src="data\cloud\images\1.docker\5.create image - manually\\3.png" width="100%"/></p>
</li>
<li style="text-align: justify;">
<p>Save the container as an image</p>
<pre>
docker commit --change='CMD ["java", "-jar", "&lt;absolute path of jar file&gt;"]' &lt;container name&gt; &lt;repo:tag&gt;
docker images
</pre>
<p><img src="data\cloud\images\1.docker\5.create image - manually\\4.png" width="100%"/></p>
</li>
<li style="text-align: justify;">
<p>Run the container for the new created image</p>
<pre>
docker run -d -p 8080:8080 interviewpedia/gbce:v1
docker ps
docker logs -f &lt;containerid | name&gt;
</pre>
<p><img src="data\cloud\images\1.docker\5.create image - manually\\5.png" width="100%"/></p>
</li>
<li style="text-align: justify;">
<p>Access the application</p>
<p><a href="http://interviewpedia:8080/stock-exchange/stock/list" target="_blank">http://&lt;docker-host IP&gt;:8080/stock-exchange/stock/list</a></p>
</li>
<li style="text-align: justify;">
<p>Check the docker image layers</p>
<pre>
docker history interviewpedia/gbce:v1
</pre>
<p><img src="data\cloud\images\1.docker\5.create image - manually\\6.png" width="100%"/></p>
</li>

</ol>
        */}.toString().slice(14,-3)
    },

    {   /* Dockerizing — automatically */
		id : 7,
        "text" : function(){/*
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
<p><img src="data\cloud\images\1.docker\6.create image - automatically\1.png" width="100%"/></p>
<p>Access the application: <a href="http://interviewpedia:8080/stock-exchange/stock/list" target="_blank">http://&lt;docker-host IP&gt;:8080/stock-exchange/stock/list</a></p>
<p>Check the docker image layers</p>
<pre>
docker history interviewpedia/gbce:v2
</pre>
<p><img src="data\cloud\images\1.docker\6.create image - automatically\2.png" width="100%"/></p>
<p>Suggested Readings:</p>
<p>1.&nbsp;<a href="https://spring.io/blog/2020/01/27/creating-docker-images-with-spring-boot-2-3-0-m1" target="_blank">Creating Docker Images With Spring Boot 2.3.0.m1</a></p>
<p>2.&nbsp;<a href="https://github.com/spotify/dockerfile-maven" target="_blank">Spotify Dockerfile Maven Plugin</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/spotify/dockerfile-maven/issues/112" target="_blank">[Issues]</a></p>

        */}.toString().slice(14,-3)
    },

    {   /* Docker Image Layers */
		id : 8,
        "text" : function(){/*
<p style="text-align: justify;">Docker layers are cached; so, if we run the docker build command again without making any changes, it should pickup everything from cache.</p>
<p style="text-align: justify;"><img src="data\cloud\images\1.docker\6.create image - automatically\3.png" alt="" width="100%" /></p>
<p style="text-align: justify;">Unless there are modifications, layers wiould be cache whenever possible. In case there are modifications (e.g., change in Dockerfile),&nbsp;the&nbsp;change and the subsequent steps are recreated again (and not picked from cache), as shown below:</p>
<p style="text-align: justify;"><img src="data\cloud\images\1.docker\6.create image - automatically\4.png" alt="" width="100%" /></p>
        */}.toString().slice(14,-3)
    },
];
var sysdesign_concepts_que = [
    {
        id : 1,
        question : "System Design Interviews: A step by step guide",
        tags : ["TODO"]
    },

    {
        id : 2,
        question : "System Design Basics",
        tags : ["TODO"]
    },

    {
        id : 3,
        question : "Key Characteristics of Distributed Systems",
        tags : ["TODO"]
    },

    {
        id : 4,
        question : "Load Balancing",
        tags : ["TODO"]
    },

    {
        id : 5,
        question : "Caching",
        tags : ["TODO"]
    },

    {
        id : 6,
        question : "Data Partitioning",
        tags : ["TODO"]
    },

    {
        id : 7,
        question : "Indexes",
        tags : ["TODO"]
    },

    {
        id : 8,
        question : "Proxies",
        tags : ["TODO"]
    },

    {
        id : 9,
        question : "Redundancy and Replication",
        tags : ["TODO"]
    },

    {
        id : 10,
        question : "SQL vs. NoSQL",
        tags : ["TODO"]
    },

    {
        id : 11,
        question : "CAP Theorem",
        tags : ["TODO"]
    },

    {
        id : 12,
        question : "Consistent Hashing",
        tags : ["TODO"]
    },

    {
        id : 13,
        question : "Long-Polling vs WebSockets vs Server-Sent Events",
        tags : ["TODO"]
    },

];

var sysdesign_concepts_ans = [
    {   /* System Design Interviews: A step by step guide */
        id : 1,
        "text" : function(){/*
<p>A lot of software engineers struggle with system design interviews (SDIs) primarily because of three reasons:</p>
<ul>
<li>The unstructured nature of SDIs, where the candidates are asked to work on an open-ended design problem that doesn&rsquo;t have a standard answer.</li>
<li>Candidates lack of experience in developing complex and large scale systems.</li>
<li>Candidates did not spend enough time to prepare for SDIs.</li>
</ul>
<p>Like coding interviews, candidates who haven&rsquo;t put a deliberate effort to prepare for SDIs, mostly perform poorly specially at top companies like Google, Facebook, Amazon, Microsoft, etc. In these companies, candidates who do not perform above average have a limited chance to get an offer. On the other hand, a good performance always results in a better offer (higher position and salary), since it shows the candidate&rsquo;s ability to handle a complex system.</p>
<p>In this course, we&rsquo;ll follow a step by step approach to solve multiple design problems. First, let&rsquo;s go through these steps:</p>

<h2>Requirements clarification</h2>
<p>It is always a good idea to ask questions about the exact scope of the problem we are solving. Design questions are mostly open-ended, and they don&rsquo;t have ONE correct answer, that&rsquo;s why clarifying ambiguities early in the interview becomes critical. Candidates who spend enough time to define the end goals of the system always have a better chance to be successful in the interview. Also, since we only have 35-40 minutes to design a (supposedly) large system, we should clarify what parts of the system we will be focusing on.</p>
<p>Let&rsquo;s expand this with an actual example of designing a Twitter-like service. Here are some questions for designing Twitter that should be answered before moving on to the next steps:</p>
<ul>
<li>Will users of our service be able to post tweets and follow other people?</li>
<li>Should we also design to create and display the user&rsquo;s timeline?</li>
<li>Will tweets contain photos and videos?</li>
<li>Are we focusing on the backend only or are we developing the front-end too?</li>
<li>Will users be able to search tweets?</li>
<li>Do we need to display hot trending topics?</li>
<li>Will there be any push notification for new (or important) tweets?</li>
</ul>
<p>All such questions will determine how our end design will look like.</p>

<h2>Back-of-the-envelope estimation</h2>
<p>It is always a good idea to estimate the scale of the system we&rsquo;re going to design. This will also help later when we will be focusing on scaling, partitioning, load balancing and caching.</p>
<ul>
<li>What scale is expected from the system (e.g., number of new tweets, number of tweet views, number of timeline generations per sec., etc.)?</li>
<li>How much storage will we need? We will have different storage requirements if users can have photos and videos in their tweets.</li>
<li>What network bandwidth usage are we expecting? This will be crucial in deciding how we will manage traffic and balance load between servers.</li>
</ul>

<h2>System interface definition</h2>
<p>Define what APIs are expected from the system. This will not only establish the exact contract expected from the system but will also ensure if we haven&rsquo;t gotten any requirements wrong. Some examples of APIs for our Twitter-like service will be:</p>
<code>postTweet(user_id, tweet_data, tweet_location, user_location, timestamp, &hellip;)</code></br></br>
<code>generateTimeline(user_id, current_time, user_location, &hellip;)</code></br></br>
<code>markTweetFavorite(user_id, tweet_id, timestamp, &hellip;) </code></br></br>

<h2>Defining data model</h2>
<p>Defining the data model in the early part of the interview will clarify how data will flow between different components of the system.
Later, it will guide for data partitioning and management. The candidate should be able to identify various entities of the system, how they
will interact with each other, and different aspects of data management like storage, transportation, encryption, etc. Here are some entities
for our Twitter-like service:</p>

<p><strong>User:</strong> UserID, Name, Email, DoB, CreationData, LastLogin, etc.<br /><strong>Tweet:</strong> TweetID, Content, TweetLocation, NumberOfLikes, TimeStamp, etc.<br />
<strong>UserFollow:</strong> UserdID1, UserID2<br /><strong>FavoriteTweets:</strong> UserID, TweetID, TimeStamp</p>

<h2>High-level design</h2>
<p>Draw a block diagram with 5-6 boxes representing the core components of our system. We should identify enough components that are needed to solve the actual problem from end-to-end.</p>
<p>For Twitter, at a high-level, we will need multiple application servers to serve all the read/write requests with load balancers in front of them for traffic distributions. If we&rsquo;re assuming that we will have a lot more read traffic (as compared to write), we can decide to have separate servers for handling these scenarios. On the backend, we need an efficient database that can store all the tweets and can support a huge number of reads. We will also need a distributed file storage system for storing photos and videos.</p>
<p><img src="data/system_design/images/sysdesign_concepts/hld.png" alt="" width="50%" /></p>

<h2>Detailed design</h2>
<p>Dig deeper into two or three major components; interviewer&rsquo;s feedback should always guide us to what parts of the system need further discussion. We should be able to present different approaches, their pros and cons, and explain why we will prefer one approach on the other. Remember there is no single answer; the only important thing is to consider tradeoffs between different options while keeping system constraints in mind.</p>
<ul>
<li>Since we will be storing a massive amount of data, how should we partition our data to distribute it to multiple databases? Should we try to store all the data of a user on the same database? What issue could it cause?</li>
<li>How will we handle hot users who tweet a lot or follow lots of people?</li>
<li>Since users&rsquo; timeline will contain the most recent (and relevant) tweets, should we try to store our data in such a way that is optimized for scanning the latest tweets?</li>
<li>How much and at which layer should we introduce cache to speed things up?</li>
<li>What components need better load balancing?</li>
</ul>

<h2>Identifying and resolving bottlenecks</h2>
<p>Try to discuss as many bottlenecks as possible and different approaches to mitigate them.</p>
<ul>
<li>Is there any single point of failure in our system? What are we doing to mitigate it?</li>
<li>Do we have enough replicas of the data so that if we lose a few servers, we can still serve our users?</li>
<li>Similarly, do we have enough copies of different services running such that a few failures will not cause total system shutdown?</li>
<li>How are we monitoring the performance of our service? Do we get alerts whenever critical components fail or their performance degrades?</li>
</ul>

<h2>Summary</h2>
<p>In short, preparation and being organized during the interview are the keys to be successful in system design interviews. The steps mentioned above should guide you to remain on track and cover all the different aspects while designing a system.</p>
<p>Let&rsquo;s apply the above guidelines to design a few systems that are asked in SDIs.</p>
    */}.toString().slice(14,-3)
    },

    {   /* System Design Basics */
        id : 2,
        "text" : function(){/*
<h2>System Design Basics</h2>
<p>Whenever we are designing a large system, we need to consider a few things:</p>
<ol>
<li>What are the different architectural pieces that can be used?</li>
<li>How do these pieces work with each other?</li>
<li>How can we best utilize these pieces: what are the right tradeoffs?</li>
</ol>
<p>Investing in scaling before it is needed is generally not a smart business proposition; however, some forethought into the design can save valuable time and resources in the future. In the following chapters, we will try to define some of the core building blocks of scalable systems. Familiarizing these concepts would greatly benefit in understanding distributed system concepts. In the next section, we will go through Consistent Hashing, CAP Theorem, Load Balancing, Caching, Data Partitioning, Indexes, Proxies, Queues, Replication, and choosing between SQL vs. NoSQL.</p>
<p>Let&rsquo;s start with the Key Characteristics of Distributed Systems.</p>
    */}.toString().slice(14,-3)
    },

    {   /* Key Characteristics of Distributed Systems */
        id : 3,
        "text" : function(){/*
<p style="text-align: justify;">Key characteristics of a distributed system include Scalability, Reliability, Availability, Efficiency, and Manageability. Let’s briefly review them:</p>
<h2>Scalability</h2>
<p>Scalability is the capability of a system, process, or a network to grow and manage increased demand. Any distributed system that can continuously evolve in order to support the growing amount of work is considered to be scalable.</p>
<p>A system may have to scale because of many reasons like increased data volume or increased amount of work, e.g., number of transactions. A scalable system would like to achieve this scaling without performance loss.</p>
<p>Generally, the performance of a system, although designed (or claimed) to be scalable, declines with the system size due to the management or environment cost. For instance, network speed may become slower because machines tend to be far apart from one another. More generally, some tasks may not be distributed, either because of their inherent atomic nature or because of some flaw in the system design. At some point, such tasks would limit the speed-up obtained by distribution. A scalable architecture avoids this situation and attempts to balance the load on all the participating nodes evenly.</p>
<p><strong>Horizontal vs. Vertical Scaling:</strong> Horizontal scaling means that you scale by adding more servers into your pool of resources whereas Vertical scaling means that you scale by adding more power (CPU, RAM, Storage, etc.) to an existing server.</p>
<p>With horizontal-scaling it is often easier to scale dynamically by adding more machines into the existing pool; Vertical-scaling is usually limited to the capacity of a single server and scaling beyond that capacity often involves downtime and comes with an upper limit.</p>
<p>Good examples of horizontal scaling are <a href="https://en.wikipedia.org/wiki/Apache_Cassandra" target="_blank">Cassandra</a> and <a href="https://en.wikipedia.org/wiki/MongoDB" target="_blank">MongoDB</a> as they both provide an easy way to scale horizontally by adding more machines to meet growing needs. Similarly, a good example of vertical scaling is MySQL as it allows for an easy way to scale vertically by switching from smaller to bigger machines. However, this process often involves downtime.</p>
<p><img src="data/system_design/images/sysdesign_concepts/scaling.png" alt="" /></p>

<h2>Reliability</h2>
<p>By definition, reliability is the probability a system will fail in a given period. In simple terms, a distributed system is considered reliable if it keeps delivering its services even when one or several of its software or hardware components fail. Reliability represents one of the main characteristics of any distributed system, since in such systems any failing machine can always be replaced by another healthy one, ensuring the completion of the requested task.</p>
<p>Take the example of a large electronic commerce store (like <a href="https://en.wikipedia.org/wiki/Amazon_(company) target="_blank"">Amazon</a>), where one of the primary requirement is that any user transaction should never be canceled due to a failure of the machine that is running that transaction. For instance, if a user has added an item to their shopping cart, the system is expected not to lose it. A reliable distributed system achieves this through redundancy of both the software components and data. If the server carrying the user&rsquo;s shopping cart fails, another server that has the exact replica of the shopping cart should replace it.</p>
<p>Obviously, redundancy has a cost and a reliable system has to pay that to achieve such resilience for services by eliminating every single point of failure.</p>

<h2>Availability</h2>
<p>By definition, availability is the time a system remains operational to perform its required function in a specific period. It is a simple measure of the percentage of time that a system, service, or a machine remains operational under normal conditions. An aircraft that can be flown for many hours a month without much downtime can be said to have a high availability. Availability takes into account maintainability, repair time, spares availability, and other logistics considerations. If an aircraft is down for maintenance, it is considered not available during that time.</p>
<p>Reliability is availability over time considering the full range of possible real-world conditions that can occur. An aircraft that can make it through any possible weather safely is more reliable than one that has vulnerabilities to possible conditions.</p>
<p><strong>Reliability Vs. Availability</strong><br />If a system is reliable, it is available. However, if it is available, it is not necessarily reliable. In other words, high reliability contributes to high availability, but it is possible to achieve a high availability even with an unreliable product by minimizing repair time and ensuring that spares are always available when they are needed. Let&rsquo;s take the example of an online retail store that has 99.99% availability for the first two years after its launch. However, the system was launched without any information security testing. The customers are happy with the system, but they don&rsquo;t realize that it isn&rsquo;t very reliable as it is vulnerable to likely risks. In the third year, the system experiences a series of information security incidents that suddenly result in extremely low availability for extended periods of time. This results in reputational and financial damage to the customers.</p>

<h2>Efficiency</h2>
<p>To understand how to measure the efficiency of a distributed system, let&rsquo;s assume we have an operation that runs in a distributed manner and delivers a set of items as result. Two standard measures of its efficiency are the response time (or latency) that denotes the delay to obtain the first item and the throughput (or bandwidth) which denotes the number of items delivered in a given time unit (e.g., a second). The two measures correspond to the following unit costs:</p>
<ul>
<li>Number of messages globally sent by the nodes of the system regardless of the message size.</li>
<li>Size of messages representing the volume of data exchanges.</li>
</ul>
<p>The complexity of operations supported by distributed data structures (e.g., searching for a specific key in a distributed index) can be characterized as a function of one of these cost units. Generally speaking, the analysis of a distributed structure in terms of &lsquo;number of messages&rsquo; is over-simplistic. It ignores the impact of many aspects, including the network topology, the network load, and its variation, the possible heterogeneity of the software and hardware components involved in data processing and routing, etc. However, it is quite difficult to develop a precise cost model that would accurately take into account all these performance factors; therefore, we have to live with rough but robust estimates of the system behavior.</p>

<h2>Serviceability or Manageability</h2>
<p>Another important consideration while designing a distributed system is how easy it is to operate and maintain. Serviceability or manageability is the simplicity and speed with which a system can be repaired or maintained; if the time to fix a failed system increases, then availability will decrease. Things to consider for manageability are the ease of diagnosing and understanding problems when they occur, ease of making updates or modifications, and how simple the system is to operate (i.e., does it routinely operate without failure or exceptions?).</p>
<p>Early detection of faults can decrease or avoid system downtime. For example, some enterprise systems can automatically call a service center (without human intervention) when the system experiences a system fault.</p>

    */}.toString().slice(14,-3)
    },

    {   /* Load Balancing */
        id : 4,
        "text" : function(){/*
<p>Load Balancer (LB) is another critical component of any distributed system. It helps to spread the traffic across a cluster of servers to improve responsiveness and availability of applications, websites or databases. LB also keeps track of the status of all the resources while distributing requests. If a server is not available to take new requests or is not responding or has elevated error rate, LB will stop sending traffic to such a server.</p>
<p>Typically a load balancer sits between the client and the server accepting incoming network and application traffic and distributing the traffic across multiple backend servers using various algorithms. By balancing application requests across multiple servers, a load balancer reduces individual server load and prevents any one application server from becoming a single point of failure, thus improving overall application availability and responsiveness.</p>
<p><img src="data/system_design/images/sysdesign_concepts/load_balancer.png" alt="" width="50%" /></p>
<p>To utilize full scalability and redundancy, we can try to balance the load at each layer of the system. We can add LBs at three places:</p>
<ul>
<li>Between the user and the web server</li>
<li>Between web servers and an internal platform layer, like application servers or cache servers</li>
<li>Between internal platform layer and database.</li>
</ul>
<p><img src="data/system_design/images/sysdesign_concepts/load_balancing.png" alt="" width="50%" /></p>

<h2>Client-side load balancing (using service discovery design pattern)</h2>
<p>Consider the following deployment architecture:</p>
<p><img src="data/system_design/images/sysdesign_concepts/client_side_lb1.png" alt="" width="50%" /></p>
<p>We can add a <strong>service registry</strong> in our deployment architecture so that all the services (<strong>booking-service</strong>, <strong>payment-service</strong> and <strong>account-service</strong>), that needs to communicate with each other, <i>register</i> each of their instances with the <strong>service registry</strong>.</p>
<p><img src="data/system_design/images/sysdesign_concepts/client_side_lb2.png" alt="" width="50%" /></p>
<p>Client-side load balancers are <strong>software load balancers</strong> and are used when the client directly chooses which service instance to hit. In this example, <strong>booking-service</strong> retrieves all the information from the <strong>service registry</strong>, and chooses one of the instance and sends the request. Here, the <strong>booking-service</strong> acts as a client and it chooses which particular service instance to hit directly.</p>
<p><strong>Ribbon</strong> is a framework that enables client-side load balancing.</p>

<p><strong>Advantages:</strong></p>
<ul>
<li>No need to have a dedicated load balancer</li>
<li>Service can choose the load balancing strategy themselves</li>
</ul>

<h2>Service-side load balancing</h2>
<p>In server-side load balancing, the load balancer can either be a software load balancer (embedded in the service registry) ar a dedicated hardware load balancer as a separate machine.</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 50%;"><p><img src="data/system_design/images/sysdesign_concepts/server_side_lb1.png" alt="" width="100%" /></p></td>
<td style="width: 50%;"><p><img src="data/system_design/images/sysdesign_concepts/server_side_lb2.png" alt="" width="100%" /></p></td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>

<h2>Benefits of Load Balancing</h2>
<ul>
<li>Users experience faster, uninterrupted service. Users won&rsquo;t have to wait for a single struggling server to finish its previous tasks. Instead, their requests are immediately passed on to a more readily available resource.</li>
<li>Service providers experience less downtime and higher throughput. Even a full server failure won&rsquo;t affect the end user experience as the load balancer will simply route around it to a healthy server.</li>
<li>Load balancing makes it easier for system administrators to handle incoming requests while decreasing wait time for users.</li>
<li>Smart load balancers provide benefits like predictive analytics that determine traffic bottlenecks before they happen. As a result, the smart load balancer gives an organization actionable insights. These are key to automation and can help drive business decisions.</li>
<li>System administrators experience fewer failed or stressed components. Instead of a single device performing a lot of work, load balancing has several devices perform a little bit of work.</li>
</ul>
<p>&nbsp;</p>

<h2>Load Balancing Algorithms</h2>
<p><strong>How does the load balancer choose the backend server?</strong><br />Load balancers consider two factors before forwarding a request to a backend server. They will first ensure that the server they choose is actually responding appropriately to requests and then use a pre-configured algorithm to select one from the set of healthy servers. We will discuss these algorithms shortly.</p>
<p><strong>Health Checks</strong> - Load balancers should only forward traffic to &ldquo;healthy&rdquo; backend servers. To monitor the health of a backend server, &ldquo;health checks&rdquo; regularly attempt to connect to backend servers to ensure that servers are listening. If a server fails a health check, it is automatically removed from the pool, and traffic will not be forwarded to it until it responds to the health checks again.</p>
<p>There is a variety of load balancing methods, which use different algorithms for different needs.</p>
<ul>
<li><strong>Least Connection Method</strong> &mdash; This method directs traffic to the server with the fewest active connections. This approach is quite useful when there are a large number of persistent client connections which are unevenly distributed between the servers.</li>
<li><strong>Least Response Time Method</strong> &mdash; This algorithm directs traffic to the server with the fewest active connections and the lowest average response time.</li>
<li><strong>Least Bandwidth Method</strong> - This method selects the server that is currently serving the least amount of traffic measured in megabits per second (Mbps).</li>
<li><strong>Round Robin Method</strong> &mdash; This method cycles through a list of servers and sends each new request to the next server. When it reaches the end of the list, it starts over at the beginning. It is most useful when the servers are of equal specification and there are not many persistent connections.</li>
<li><strong>Weighted Round Robin Method</strong> &mdash; The weighted round-robin scheduling is designed to better handle servers with different processing capacities. Each server is assigned a weight (an integer value that indicates the processing capacity). Servers with higher weights receive new connections before those with less weights and servers with higher weights get more connections than those with less weights.</li>
<li><strong>IP Hash</strong> &mdash; Under this method, a hash of the IP address of the client is calculated to redirect the request to a server.</li>
</ul>

<h2>Redundant Load Balancers</h2>
<p>The load balancer can be a single point of failure; to overcome this, a second load balancer can be connected to the first to form a cluster. Each LB monitors the health of the other and, since both of them are equally capable of serving traffic and failure detection, in the event the main load balancer fails, the second load balancer takes over.</p>
<p><img src="data/system_design/images/sysdesign_concepts/redundant_load_balancers.png" alt="" width="50%" /></p>

<p>Following links have some good discussion about load balancers:</p>
<ol>
<li><a href="https://avinetworks.com/what-is-load-balancing/" target="_blank">What is load balancing</a></li>
<li><a href="https://lethain.com/introduction-to-architecting-systems-for-scale/" target="_blank">Introduction to architecting systems</a></li>
<li><a href="https://en.wikipedia.org/wiki/Load_balancing_(computing)" target="_blank">Load balancing</a></li>
</ol>

    */}.toString().slice(14,-3)
    },

    {   /* Caching */
        id : 5,
        "text" : function(){/*
<p style="text-align: justify;">Load balancing helps you scale horizontally across an ever-increasing number of servers, but caching will enable you to make vastly better use of the resources you already have as well as making otherwise unattainable product requirements feasible. Caches take advantage of the locality of reference principle: recently requested data is likely to be requested again. They are used in almost every layer of computing: hardware, operating systems, web browsers, web applications, and more. A cache is like short-term memory: it has a limited amount of space, but is typically faster than the original data source and contains the most recently accessed items. Caches can exist at all levels in architecture, but are often found at the level nearest to the front end where they are implemented to return data quickly without taxing downstream levels.</p>

<h2>Application server cache</h2>
<p style="text-align: justify;">Placing a cache directly on a request layer node enables the local storage of response data. Each time a request is made to the service, the node will quickly return local cached data if it exists. If it is not in the cache, the requesting node will query the data from disk. The cache on one request layer node could also be located both in memory (which is very fast) and on the node’s local disk (faster than going to network storage).</p>
<p style="text-align: justify;">What happens when you expand this to many nodes? If the request layer is expanded to multiple nodes, it’s still quite possible to have each node host its own cache. However, if your load balancer randomly distributes requests across the nodes, the same request will go to different nodes, thus increasing cache misses. Two choices for overcoming this hurdle are global caches and distributed caches.</p>

<h2>Content Distribution Network (CDN)</h2>
<p style="text-align: justify;">CDNs are a kind of cache that comes into play for sites serving large amounts of static media. In a typical CDN setup, a request will first ask the CDN for a piece of static media; the CDN will serve that content if it has it locally available. If it isn’t available, the CDN will query the back-end servers for the file, cache it locally, and serve it to the requesting user.</p>
<p style="text-align: justify;">If the system we are building isn’t yet large enough to have its own CDN, we can ease a future transition by serving the static media off a separate subdomain (e.g. static.yourservice.com) using a lightweight HTTP server like Nginx, and cut-over the DNS from your servers to a CDN later.</p>

<h2>Cache Invalidation</h2>
<p style="text-align: justify;">While caching is fantastic, it does require some maintenance for keeping cache coherent with the source of truth (e.g., database). If the data is modified in the database, it should be invalidated in the cache; if not, this can cause inconsistent application behavior.</p>
<p style="text-align: justify;">Solving this problem is known as cache invalidation; there are three main schemes that are used:</p>
<p style="text-align: justify;"><strong>Write-through cache</strong>: Under this scheme, data is written into the cache and the corresponding database at the same time. The cached data allows for fast retrieval and, since the same data gets written in the permanent storage, we will have complete data consistency between the cache and the storage. Also, this scheme ensures that nothing will get lost in case of a crash, power failure, or other system disruptions.</p>
<p style="text-align: justify;">Although, write through minimizes the risk of data loss, since every write operation must be done twice before returning success to the client, this scheme has the disadvantage of higher latency for write operations.</p>
<p style="text-align: justify;"><strong>Write-around cache</strong>: This technique is similar to write through cache, but data is written directly to permanent storage, bypassing the cache. This can reduce the cache being flooded with write operations that will not subsequently be re-read, but has the disadvantage that a read request for recently written data will create a “cache miss” and must be read from slower back-end storage and experience higher latency.</p>
<p style="text-align: justify;"><strong>Write-back cache</strong>: Under this scheme, data is written to cache alone and completion is immediately confirmed to the client. The write to the permanent storage is done after specified intervals or under certain conditions. This results in low latency and high throughput for write-intensive applications, however, this speed comes with the risk of data loss in case of a crash or other adverse event because the only copy of the written data is in the cache.</p>

<h2>Cache eviction policies</h2>
<p style="text-align: justify;">Following are some of the most common cache eviction policies:</p>
<ol>
<li style="text-align: justify;"><strong>First In First Out</strong> (FIFO): The cache evicts the first block accessed first without any regard to how often or how many times it was accessed before.</li>
<li style="text-align: justify;"><strong>Last In First Out</strong> (LIFO): The cache evicts the block accessed most recently first without any regard to how often or how many times it was accessed before.</li>
<li style="text-align: justify;"><strong>Least Recently Used</strong> (LRU): Discards the least recently used items first.</li>
<li style="text-align: justify;"><strong>Most Recently Used</strong> (MRU): Discards, in contrast to LRU, the most recently used items first.</li>
<li style="text-align: justify;"><strong>Least Frequently Used</strong> (LFU): Counts how often an item is needed. Those that are used least often are discarded first.</li>
<li style="text-align: justify;"><strong>Random Replacement</strong> (RR): Randomly selects a candidate item and discards it to make space when necessary.</li>
</ol>

<p>Following links have some good discussion about caching:</p>
<ol>
<li><a href="https://codeahoy.com/2017/08/11/caching-strategies-and-how-to-choose-the-right-one/" target="_blank" rel="noopener">Caching strategies and how to choose the right one</a></li>
<li><a href="https://lethain.com/introduction-to-architecting-systems-for-scale/" target="_blank" rel="noopener">Introduction to architecting systems</a></li>
</ol>
    */}.toString().slice(14,-3)
    },

    {   /* Data Partitioning */
        id : 6,
        "text" : function(){/*
<p style="text-align: justify;">Data partitioning is a technique to break up a big database (DB) into many smaller parts. It is the process of splitting up a DB/table across multiple machines to improve the manageability, performance, availability, and load balancing of an application. The justification for data partitioning is that, after a certain scale point, it is cheaper and more feasible to scale horizontally by adding more machines than to grow it vertically by adding beefier servers.</p>
<h2>Partitioning Methods</h2>
<p style="text-align: justify;">There are many different schemes one could use to decide how to break up an application database into multiple smaller DBs. Below are three of the most popular schemes used by various large scale applications.</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Horizontal partitioning</strong>: In this scheme, we put different rows into different tables. For example, if we are storing different places in a table, we can decide that locations with ZIP codes less than 10000 are stored in one table and places with ZIP codes greater than 10000 are stored in a separate table. This is also called a range based partitioning as we are storing different ranges of data in separate tables. Horizontal partitioning is also called as Data Sharding.</p>
<p style="text-align: justify;">The key problem with this approach is that if the value whose range is used for partitioning isn’t chosen carefully, then the partitioning scheme will lead to unbalanced servers. In the previous example, splitting location based on their zip codes assumes that places will be evenly distributed across the different zip codes. This assumption is not valid as there will be a lot of places in a thickly populated area like Manhattan as compared to its suburb cities.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Vertical partitioning</strong>: In this scheme, we divide our data to store tables related to a specific feature in their own server. For example, if we are building Instagram like application - where we need to store data related to users, photos they upload, and people they follow - we can decide to place user profile information on one DB server, friend lists on another, and photos on a third server.</p>
<p style="text-align: justify;">Vertical partitioning is straightforward to implement and has a low impact on the application. The main problem with this approach is that if our application experiences additional growth, then it may be necessary to further partition a feature specific DB across various servers (e.g. it would not be possible for a single server to handle all the metadata queries for 10 billion photos by 140 million users).</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Directory-based partitioning</strong>: A loosely coupled approach to work around issues mentioned in the above schemes is to create a lookup service which knows your current partitioning scheme and abstracts it away from the DB access code. So, to find out where a particular data entity resides, we query the directory server that holds the mapping between each tuple key to its DB server. This loosely coupled approach means we can perform tasks like adding servers to the DB pool or changing our partitioning scheme without having an impact on the application.</p>
</li>
</ol>

<h2>Partitioning Criteria</h2>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Key or Hash-based partitioning</strong>: Under this scheme, we apply a hash function to some key attributes of the entity we are storing; that yields the partition number. For example, if we have 100 DB servers and our ID is a numeric value that gets incremented by one each time a new record is inserted. In this example, the hash function could be ‘ID % 100’, which will give us the server number where we can store/read that record. This approach should ensure a uniform allocation of data among servers. The fundamental problem with this approach is that it effectively fixes the total number of DB servers, since adding new servers means changing the hash function which would require redistribution of data and downtime for the service. A workaround for this problem is to use Consistent Hashing.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>List partitioning</strong>: In this scheme, each partition is assigned a list of values, so whenever we want to insert a new record, we will see which partition contains our key and then store it there. For example, we can decide all users living in Iceland, Norway, Sweden, Finland, or Denmark will be stored in a partition for the Nordic countries.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Round-robin partitioning</strong>: This is a very simple strategy that ensures uniform data distribution. With ‘n’ partitions, the ‘i’ tuple is assigned to partition (i mod n).</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Composite partitioning</strong>: Under this scheme, we combine any of the above partitioning schemes to devise a new scheme. For example, first applying a list partitioning scheme and then a hash based partitioning. Consistent hashing could be considered a composite of hash and list partitioning where the hash reduces the key space to a size that can be listed.</p>
</li>
</ol>

<h2>Common Problems of Data Partitioning</h2>
<p style="text-align: justify;">On a partitioned database, there are certain extra constraints on the different operations that can be performed. Most of these constraints are due to the fact that operations across multiple tables or multiple rows in the same table will no longer run on the same server. Below are some of the constraints and additional complexities introduced by partitioning:</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Joins and Denormalization</strong>: Performing joins on a database which is running on one server is straightforward, but once a database is partitioned and spread across multiple machines it is often not feasible to perform joins that span database partitions. Such joins will not be performance efficient since data has to be compiled from multiple servers. A common workaround for this problem is to denormalize the database so that queries that previously required joins can be performed from a single table. Of course, the service now has to deal with all the perils of denormalization such as data inconsistency.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Referential integrity</strong>: As we saw that performing a cross-partition query on a partitioned database is not feasible, similarly, trying to enforce data integrity constraints such as foreign keys in a partitioned database can be extremely difficult.</p>
<p style="text-align: justify;">Most of RDBMS do not support foreign keys constraints across databases on different database servers. Which means that applications that require referential integrity on partitioned databases often have to enforce it in application code. Often in such cases, applications have to run regular SQL jobs to clean up dangling references.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Rebalancing</strong>: There could be many reasons we have to change our partitioning scheme:</p>
    <ul>
    <li>The data distribution is not uniform, e.g., there are a lot of places for a particular ZIP code that cannot fit into one database partition.</li>
    <li>There is a lot of load on a partition, e.g., there are too many requests being handled by the DB partition dedicated to user photos.</li>
    </ul>
</li>
</ol>
<p style="text-align: justify;">In such cases, either we have to create more DB partitions or have to rebalance existing partitions, which means the partitioning scheme changed and all existing data moved to new locations. Doing this without incurring downtime is extremely difficult. Using a scheme like directory based partitioning does make rebalancing a more palatable experience at the cost of increasing the complexity of the system and creating a new single point of failure (i.e. the lookup service/database).</p>
    */}.toString().slice(14,-3)
    },

    {   /* Indexes */
        id : 7,
        "text" : function(){/*
<p style="text-align: justify;">Indexes are well known when it comes to databases. Sooner or later there comes a time when database performance is no longer satisfactory. One of the very first things you should turn to when that happens is database indexing.</p>
<p style="text-align: justify;">The goal of creating an index on a particular table in a database is to make it faster to search through the table and find the row or rows that we want. Indexes can be created using one or more columns of a database table, providing the basis for both rapid random lookups and efficient access of ordered records.</p>

<h2>Example: A library catalog</h2>
<p style="text-align: justify;">A library catalog is a register that contains the list of books found in a library. The catalog is organized like a database table generally with four columns: book title, writer, subject, and date of publication. There are usually two such catalogs: one sorted by the book title and one sorted by the writer name. That way, you can either think of a writer you want to read and then look through their books or look up a specific book title you know you want to read in case you don’t know the writer’s name. These catalogs are like indexes for the database of books. They provide a sorted list of data that is easily searchable by relevant information.</p>
<p style="text-align: justify;">Simply saying, an index is a data structure that can be perceived as a table of contents that points us to the location where actual data lives. So when we create an index on a column of a table, we store that column and a pointer to the whole row in the index. Let’s assume a table containing a list of books, the following diagram shows how an index on the ‘Title’ column looks like:</p>
<p><img src="data/system_design/images/sysdesign_concepts/library_catalog.png" alt="" width="80%" /></p>
<p style="text-align: justify;">Just like a traditional relational data store, we can also apply this concept to larger datasets. The trick with indexes is that we must carefully consider how users will access the data. In the case of data sets that are many terabytes in size, but have very small payloads (e.g., 1 KB), indexes are a necessity for optimizing data access. Finding a small payload in such a large dataset can be a real challenge, since we can’t possibly iterate over that much data in any reasonable time. Furthermore, it is very likely that such a large data set is spread over several physical devices—this means we need some way to find the correct physical location of the desired data. Indexes are the best way to do this.</p>

<h2>How do Indexes decrease write performance?</h2>
<p style="text-align: justify;">An index can dramatically speed up data retrieval but may itself be large due to the additional keys, which slow down data insertion & update.</p>
<p style="text-align: justify;">When adding rows or making updates to existing rows for a table with an active index, we not only have to write the data but also have to update the index. This will decrease the write performance. This performance degradation applies to all insert, update, and delete operations for the table. For this reason, adding unnecessary indexes on tables should be avoided and indexes that are no longer used should be removed. To reiterate, adding indexes is about improving the performance of search queries. If the goal of the database is to provide a data store that is often written to and rarely read from, in that case, decreasing the performance of the more common operation, which is writing, is probably not worth the increase in performance we get from reading.</p>
<p style="text-align: justify;">For more details, see <a href="https://en.wikipedia.org/wiki/Database_index" target="_blank">Database Indexes</a>.</p>
    */}.toString().slice(14,-3)
    },

    {   /* Proxies */
        id : 8,
        "text" : function(){/*
<p style="text-align: justify;">A proxy server is an intermediate server between the client and the back-end server. Clients connect to proxy servers to make a request for a service like a web page, file, connection, etc. In short, a <a href="https://en.wikipedia.org/wiki/Proxy_server" target="_blank">proxy server</a> is a piece of software or hardware that acts as an intermediary for requests from clients seeking resources from other servers.</p>
<p style="text-align: justify;">Typically, proxies are used to filter requests, log requests, or sometimes transform requests (by adding/removing headers, encrypting/decrypting, or compressing a resource). Another advantage of a proxy server is that its cache can serve a lot of requests. If multiple clients access a particular resource, the proxy server can cache it and serve it to all the clients without going to the remote server.</p>
<p><img src="data/system_design/images/sysdesign_concepts/proxy_server.png" alt="" width="50%" /></p>

<h2>Proxy Server Types</h2>
<p style="text-align: justify;">Proxies can reside on the client’s local server or anywhere between the client and the remote servers. Here are a few famous types of proxy servers:</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Open Proxy</strong>: An <a href="https://en.wikipedia.org/wiki/Open_proxy" target="_blank">open proxy</a> is a proxy server that is accessible by any Internet user. Generally, a proxy server only allows users within a network group (i.e. a closed proxy) to store and forward Internet services such as DNS or web pages to reduce and control the bandwidth used by the group. With an open proxy, however, any user on the Internet is able to use this forwarding service. There two famous open proxy types:</p>
    <ul>
    <li><strong>Anonymous Proxy</strong> - Thіs proxy reveаls іts іdentіty аs а server but does not dіsclose the іnіtіаl IP аddress. Though thіs proxy server cаn be dіscovered eаsіly іt cаn be benefіcіаl for some users аs іt hіdes their IP аddress.</li>
    <li><strong>Trаnspаrent Proxy</strong> - Thіs proxy server аgаіn іdentіfіes іtself, аnd wіth the support of HTTP heаders, the fіrst IP аddress cаn be vіewed. The mаіn benefіt of usіng thіs sort of server іs іts аbіlіty to cаche the websіtes.</li>
    </ul>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Reverse Proxy</strong>: A <a href="https://en.wikipedia.org/wiki/Reverse_proxy" target="_blank">reverse proxy</a> retrieves resources on behalf of a client from one or more servers. These resources are then returned to the client, appearing as if they originated from the proxy server itself</p>
</li>
</ol>
    */}.toString().slice(14,-3)
    },

    {   /* Redundancy and Replication */
        id : 9,
        "text" : function(){/*
<h2>Redundancy</h2>
<p style="text-align: justify;"><a href="https://en.wikipedia.org/wiki/Redundancy_(engineering)" target="_blank">Redundancy</a> is the duplication of critical components or functions of a system with the intention of increasing the reliability of the system, usually in the form of a backup or fail-safe, or to improve actual system performance. For example, if there is only one copy of a file stored on a single server, then losing that server means losing the file. Since losing data is seldom a good thing, we can create duplicate or redundant copies of the file to solve this problem.</p>
<p style="text-align: justify;">Redundancy plays a key role in removing the single points of failure in the system and provides backups if needed in a crisis. For example, if we have two instances of a service running in production and one fails, the system can failover to the other one.</p>
<p><img src="data/system_design/images/sysdesign_concepts/data_replication.png" alt="" width="50%" /></p>
<h2>Replication</h2>
<p style="text-align: justify;"><a href="https://en.wikipedia.org/wiki/Replication_(computing)" target="_blank">Replication</a> means sharing information to ensure consistency between redundant resources, such as software or hardware components, to improve reliability, <a href="https://en.wikipedia.org/wiki/Fault_tolerance" target="_blank">fault-tolerance</a>, or accessibility.</p>
<p style="text-align: justify;">Replication is widely used in many database management systems (DBMS), usually with a master-slave relationship between the original and the copies. The master gets all the updates, which then ripple through to the slaves. Each slave outputs a message stating that it has received the update successfully, thus allowing the sending of subsequent updates.</p>
    */}.toString().slice(14,-3)
    },

    {   /* SQL vs. NoSQL */
        id : 10,
        "text" : function(){/*
<p style="text-align: justify;">In the world of databases, there are two main types of solutions: SQL and NoSQL (or relational databases and non-relational databases). Both of them differ in the way they were built, the kind of information they store, and the storage method they use.</p>
<p style="text-align: justify;">Relational databases are structured and have predefined schemas like phone books that store phone numbers and addresses. Non-relational databases are unstructured, distributed, and have a dynamic schema like file folders that hold everything from a person’s address and phone number to their Facebook ‘likes’ and online shopping preferences.</p>
<h2>SQL</h2>
<p style="text-align: justify;">Relational databases store data in rows and columns. Each row contains all the information about one entity and each column contains all the separate data points. Some of the most popular relational databases are MySQL, Oracle, MS SQL Server, SQLite, Postgres, and MariaDB.</p>
<h2>NoSQL</h2>
<p style="text-align: justify;">Following are the most common types of NoSQL:</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Key-Value Stores</strong>: Data is stored in an array of key-value pairs. The ‘key’ is an attribute name which is linked to a ‘value’. Well-known key-value stores include Redis, Voldemort, and Dynamo.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Document Databases</strong>: In these databases, data is stored in documents (instead of rows and columns in a table) and these documents are grouped together in collections. Each document can have an entirely different structure. Document databases include the CouchDB and MongoDB.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Wide-Column Databases</strong>: Instead of ‘tables,’ in columnar databases we have column families, which are containers for rows. Unlike relational databases, we don’t need to know all the columns up front and each row doesn’t have to have the same number of columns. Columnar databases are best suited for analyzing large datasets - big names include Cassandra and HBase.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Graph Databases</strong>: These databases are used to store data whose relations are best represented in a graph. Data is saved in graph structures with nodes (entities), properties (information about the entities), and lines (connections between the entities). Examples of graph database include Neo4J and InfiniteGraph.</p>
</li>
</ol>
<h2>High level differences between SQL and NoSQL</h2>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Storage</strong>: SQL stores data in tables where each row represents an entity and each column represents a data point about that entity; for example, if we are storing a car entity in a table, different columns could be ‘Color’, ‘Make’, ‘Model’, and so on.</p>
<p style="text-align: justify;">NoSQL databases have different data storage models. The main ones are key-value, document, graph, and columnar. We will discuss differences between these databases below.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Schema</strong>: In SQL, each record conforms to a fixed schema, meaning the columns must be decided and chosen before data entry and each row must have data for each column. The schema can be altered later, but it involves modifying the whole database and going offline.</p>
<p style="text-align: justify;">In NoSQL, schemas are dynamic. Columns can be added on the fly and each ‘row’ (or equivalent) doesn’t have to contain data for each ‘column.’</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Querying</strong>: SQL databases use SQL (structured query language) for defining and manipulating the data, which is very powerful.</p>
<p style="text-align: justify;">In a NoSQL database, queries are focused on a collection of documents. Sometimes it is also called UnQL (Unstructured Query Language). Different databases have different syntax for using UnQL.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Scalability</strong>: In most common situations, SQL databases are vertically scalable, i.e., by increasing the horsepower (higher Memory, CPU, etc.) of the hardware, which can get very expensive. It is possible to scale a relational database across multiple servers, but this is a challenging and time-consuming process.</p>
<p style="text-align: justify;">On the other hand, NoSQL databases are horizontally scalable, meaning we can add more servers easily in our NoSQL database infrastructure to handle a lot of traffic. Any cheap commodity hardware or cloud instances can host NoSQL databases, thus making it a lot more cost-effective than vertical scaling. A lot of NoSQL technologies also distribute data across servers automatically.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Reliability or ACID Compliance</strong>: The vast majority of relational databases are ACID compliant. So, when it comes to data reliability and safe guarantee of performing transactions, SQL databases are still the better bet.</p>
<p style="text-align: justify;">Most of the NoSQL solutions sacrifice ACID compliance for performance and scalability.</p>
</li>
</ol>

<h2>SQL VS. NoSQL - Which one to use?</h2>
<p style="text-align: justify;">When it comes to database technology, there’s no one-size-fits-all solution. That’s why many businesses rely on both relational and non-relational databases for different needs. Even as NoSQL databases are gaining popularity for their speed and scalability, there are still situations where a highly structured SQL database may perform better; choosing the right technology hinges on the use case.</p>

<h2>Reasons to use SQL database</h2>
<p style="text-align: justify;">Here are a few reasons to choose a SQL database:</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;">We need to ensure ACID compliance. ACID compliance reduces anomalies and protects the integrity of your database by prescribing exactly how transactions interact with the database. Generally, NoSQL databases sacrifice ACID compliance for scalability and processing speed, but for many e-commerce and financial applications, an ACID-compliant database remains the preferred option.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Your data is structured and unchanging. If your business is not experiencing massive growth that would require more servers and if you’re only working with data that is consistent, then there may be no reason to use a system designed to support a variety of data types and high traffic volume.</p>
</li>
</ol>

<h2>Reasons to use NoSQL database</h2>
<p style="text-align: justify;">When all the other components of our application are fast and seamless, NoSQL databases prevent data from being the bottleneck. Big data is contributing to a large success for NoSQL databases, mainly because it handles data differently than the traditional relational databases. A few popular examples of NoSQL databases are MongoDB, CouchDB, Cassandra, and HBase.</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;">Storing large volumes of data that often have little to no structure. A NoSQL database sets no limits on the types of data we can store together and allows us to add new types as the need changes. With document-based databases, you can store data in one place without having to define what “types” of data those are in advance.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Making the most of cloud computing and storage. Cloud-based storage is an excellent cost-saving solution but requires data to be easily spread across multiple servers to scale up. Using commodity (affordable, smaller) hardware on-site or in the cloud saves you the hassle of additional software and NoSQL databases like Cassandra are designed to be scaled across multiple data centers out of the box, without a lot of headaches.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Rapid development. NoSQL is extremely useful for rapid development as it doesn’t need to be prepped ahead of time. If you’re working on quick iterations of your system which require making frequent updates to the data structure without a lot of downtime between versions, a relational database will slow you down.</p>
</li>
</ol>

    */}.toString().slice(14,-3)
    },

    {   /* CAP Theorem */
        id : 11,
        "text" : function(){/*
<p style="text-align: justify;">CAP theorem states that it is impossible for a distributed software system to simultaneously provide more than two out of three of the following guarantees (CAP): Consistency, Availability, and Partition tolerance. When we design a distributed system, trading off among CAP is almost the first thing we want to consider. CAP theorem says while designing a distributed system we can pick only two of the following three options:</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Consistency</strong>: All nodes see the same data at the same time. Consistency is achieved by updating several nodes before allowing further reads.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Availability</strong>: Every request gets a response on success/failure. Availability is achieved by replicating the data across different servers.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;"><strong>Partition tolerance</strong>: The system continues to work despite message loss or partial failure. A system that is partition-tolerant can sustain any amount of network failure that doesn’t result in a failure of the entire network. Data is sufficiently replicated across combinations of nodes and networks to keep the system up through intermittent outages.</p>
</li>
</ol>
<p><img src="data/system_design/images/sysdesign_concepts/cap_theorem.png" alt="" width="50%" /></p>
<p style="text-align: justify;">We cannot build a general data store that is continually available, sequentially consistent, and tolerant to any partition failures. We can only build a system that has any two of these three properties. Because, to be consistent, all nodes should see the same set of updates in the same order. But if the network suffers a partition, updates in one partition might not make it to the other partitions before a client reads from the out-of-date partition after having read from the up-to-date one. The only thing that can be done to cope with this possibility is to stop serving requests from the out-of-date partition, but then the service is no longer 100% available.</p>

    */}.toString().slice(14,-3)
    },

    {   /* Consistent Hashing */
        id : 12,
        "text" : function(){/*
<p style="text-align: justify;">Distributed Hash Table (DHT) is one of the fundamental components used in distributed scalable systems. Hash Tables need a key, a value, and a hash function where hash function maps the key to a location where the value is stored.</p>
<pre>index = hash_function(key)</pre>
<p style="text-align: justify;">Suppose we are designing a distributed caching system. Given ‘n’ cache servers, an intuitive hash function would be ‘key % n’. It is simple and commonly used. But it has two major drawbacks:</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;">It is NOT horizontally scalable. Whenever a new cache host is added to the system, all existing mappings are broken. It will be a pain point in maintenance if the caching system contains lots of data. Practically, it becomes difficult to schedule a downtime to update all caching mappings.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">It may NOT be load balanced, especially for non-uniformly distributed data. In practice, it can be easily assumed that the data will not be distributed uniformly. For the caching system, it translates into some caches becoming hot and saturated while the others idle and are almost empty.</p>
</li>
</ol>
<p style="text-align: justify;">In such situations, consistent hashing is a good way to improve the caching system.</p>

<h2>What is Consistent Hashing?</h2>
<p style="text-align: justify;">Consistent hashing is a very useful strategy for distributed caching system and DHTs. It allows us to distribute data across a cluster in such a way that will minimize reorganization when nodes are added or removed. Hence, the caching system will be easier to scale up or scale down.</p>
<p style="text-align: justify;">In Consistent Hashing, when the hash table is resized (e.g. a new cache host is added to the system), only ‘k/n’ keys need to be remapped where ‘k’ is the total number of keys and ‘n’ is the total number of servers. Recall that in a caching system using the ‘mod’ as the hash function, all keys need to be remapped.</p>
<p style="text-align: justify;">In Consistent Hashing, objects are mapped to the same host if possible. When a host is removed from the system, the objects on that host are shared by other hosts; when a new host is added, it takes its share from a few hosts without touching other’s shares.</p>

<h2>How does it work?</h2>
<p style="text-align: justify;">As a typical hash function, consistent hashing maps a key to an integer. Suppose the output of the hash function is in the range of [0, 256). Imagine that the integers in the range are placed on a ring such that the values are wrapped around.</p>
<p style="text-align: justify;">Here’s how consistent hashing works:</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;">Given a list of cache servers, hash them to integers in the range.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">To map a key to a server,</p>
<ul>
<li>Hash it to a single integer.</li>
<li>Move clockwise on the ring until finding the first cache it encounters.</li>
<li>That cache is the one that contains the key. See animation below as an example: key1 maps to cache A; key2 maps to cache C.</li>
</ul>
</li>
</ol>

<p><img src="data/system_design/images/sysdesign_concepts/consistent_hashing1.png" alt="" width="80%" /></p>
<p><img src="data/system_design/images/sysdesign_concepts/consistent_hashing2.png" alt="" width="80%" /></p>
<p><img src="data/system_design/images/sysdesign_concepts/consistent_hashing3.png" alt="" width="80%" /></p>
<p><img src="data/system_design/images/sysdesign_concepts/consistent_hashing4.png" alt="" width="80%" /></p>
<p><img src="data/system_design/images/sysdesign_concepts/consistent_hashing5.png" alt="" width="80%" /></p>
<p style="text-align: justify;">To add a new server, say D, keys that were originally residing at C will be split. Some of them will be shifted to D, while other keys will not be touched.</p>
<p style="text-align: justify;">To remove a cache or, if a cache fails, say A, all keys that were originally mapped to A will fall into B, and only those keys need to be moved to B; other keys will not be affected.</p>
<p style="text-align: justify;">For load balancing, as we discussed in the beginning, the real data is essentially randomly distributed and thus may not be uniform. It may make the keys on caches unbalanced.</p>
<p style="text-align: justify;">To handle this issue, we add “virtual replicas” for caches. Instead of mapping each cache to a single point on the ring, we map it to multiple points on the ring, i.e. replicas. This way, each cache is associated with multiple portions of the ring.</p>
<p style="text-align: justify;">If the hash function “mixes well,” as the number of replicas increases, the keys will be more balanced.</p>
    */}.toString().slice(14,-3)
    },

    {   /* Long-Polling vs WebSockets vs Server-Sent Events */
        id : 13,
        "text" : function(){/*
<h2>What is the difference between Long-Polling, WebSockets, and Server-Sent Events?</h2>
<p style="text-align: justify;">Long-Polling, WebSockets, and Server-Sent Events are popular communication protocols between a client like a web browser and a web server. First, let’s start with understanding what a standard HTTP web request looks like. Following are a sequence of events for regular HTTP request:</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;">The client opens a connection and requests data from the server.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">The server calculates the response.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">The server sends the response back to the client on the opened request.</p>
</li>
</ol>
<p><img src="data/system_design/images/sysdesign_concepts/http_protocol.png" alt="" width="80%" /></p>

<h2>Ajax Polling</h2>
<p style="text-align: justify;">Polling is a standard technique used by the vast majority of AJAX applications. The basic idea is that the client repeatedly polls (or requests) a server for data. The client makes a request and waits for the server to respond with data. If no data is available, an empty response is returned.</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;">The client opens a connection and requests data from the server using regular HTTP.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">The requested webpage sends requests to the server at regular intervals (e.g., 0.5 seconds).</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">The server calculates the response and sends it back, just like regular HTTP traffic.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">The client repeats the above three steps periodically to get updates from the server.</p>
</li>
</ol>
<p style="text-align: justify;">The problem with Polling is that the client has to keep asking the server for any new data. As a result, a lot of responses are empty, creating HTTP overhead.</p>
<p><img src="data/system_design/images/sysdesign_concepts/ajax_polling.png" alt="" width="80%" /></p>

<h2>HTTP Long-Polling</h2>
<p style="text-align: justify;">This is a variation of the traditional polling technique that allows the server to push information to a client whenever the data is available. With Long-Polling, the client requests information from the server exactly as in normal polling, but with the expectation that the server may not respond immediately. That’s why this technique is sometimes referred to as a “Hanging GET”.</p>
<ul>
<li style="text-align: justify;">
<p style="text-align: justify;">If the server does not have any data available for the client, instead of sending an empty response, the server holds the request and waits until some data becomes available.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Once the data becomes available, a full response is sent to the client. The client then immediately re-request information from the server so that the server will almost always have an available waiting request that it can use to deliver data in response to an event.</p>
</li>
</ul>
<p style="text-align: justify;">The basic life cycle of an application using HTTP Long-Polling is as follows:</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;">The client makes an initial request using regular HTTP and then waits for a response.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">The server delays its response until an update is available or a timeout has occurred.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">When an update is available, the server sends a full response to the client.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">The client typically sends a new long-poll request, either immediately upon receiving a response or after a pause to allow an acceptable latency period.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">Each Long-Poll request has a timeout. The client has to reconnect periodically after the connection is closed due to timeouts.</p>
</li>
</ol>
<p><img src="data/system_design/images/sysdesign_concepts/http_long_polling.png" alt="" width="80%" /></p>

<h2>WebSockets</h2>
<p style="text-align: justify;">WebSocket provides <a href="Full duplex" target="_blank">Full duplex</a> communication channels over a single TCP connection. It provides a persistent connection between a client and a server that both parties can use to start sending data at any time. The client establishes a WebSocket connection through a process known as the WebSocket handshake. If the process succeeds, then the server and client can exchange data in both directions at any time. The WebSocket protocol enables communication between a client and a server with lower overheads, facilitating real-time data transfer from and to the server. This is made possible by providing a standardized way for the server to send content to the browser without being asked by the client and allowing for messages to be passed back and forth while keeping the connection open. In this way, a two-way (bi-directional) ongoing conversation can take place between a client and a server.</p>
<p><img src="data/system_design/images/sysdesign_concepts/web_sockets.png" alt="" width="80%" /></p>

<h2>Server-Sent Events (SSEs)</h2>
<p style="text-align: justify;">Under SSEs the client establishes a persistent and long-term connection with the server. The server uses this connection to send data to a client. If the client wants to send data to the server, it would require the use of another technology/protocol to do so.</p>
<ol>
<li style="text-align: justify;">
<p style="text-align: justify;">Client requests data from a server using regular HTTP.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">The requested webpage opens a connection to the server.</p>
</li>
<li style="text-align: justify;">
<p style="text-align: justify;">The server sends the data to the client whenever there’s new information available.</p>
</li>
</ol>
<p style="text-align: justify;">SSEs are best when we need real-time traffic from the server to the client or if the server is generating data in a loop and will be sending multiple events to the client.</p>
<p><img src="data/system_design/images/sysdesign_concepts/server_sent_events.png" alt="" width="80%" /></p>

    */}.toString().slice(14,-3)
    },

];
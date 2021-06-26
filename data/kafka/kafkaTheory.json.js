var kafkaTheory_que = [
    {
        id : 1,
        question : "Kafka — Overview",
        tags : ["Apache Kafka"]
    }
];

var kafkaTheory_ans = [
    {   /* Kafka — Overview */
        id : 1,
        "text" : function(){/*
<h2>What is Kafka?</h2>
<ol>
<li style="text-align: justify;">Kafka is an open-source, distributed, event-streaming platform
<ul>
<li style="text-align: justify;">Enables publish/subscribe to streams of events</li>
<li style="text-align: justify;">Stores stream of events durably and reliably</li>
<li style="text-align: justify;">Process stream of events as they occur/retrospectively</li>
</ul>
</li>
<li style="text-align: justify;">Decouples data streams &amp; systems</li>
</ol>
<h2>A typical topology</h2>
<p style="padding-left: 40px;"><img src="data/kafka/images/kafkaTheory/typical_topology.png" alt="" width="622" height="244" /></p>
<h2>Terminology</h2>
<ul>
<li><strong>Topic</strong> &mdash; a particular stream of data</li>
<li><strong>Partition</strong> &mdash; topics are split into (ordered) partitions</li>
<li><strong>Offset</strong> &mdash; the incremental id assigned to each (immutable) message within a partition</li>
</ul>
<p style="padding-left: 40px;"><img src="data/kafka/images/kafkaTheory/topic_partition1.png" alt="" width="601" height="161" /></p>
<ul>
<li><strong>Broker</strong> &mdash; A kafka cluster is is composed of multiple brokers (servers) that contains certain topic partitions</li>
<li><strong>Topic Replication Factor</strong> &mdash; should be &gt;1 so that if a broker is down, another one can serve the data</li>
<li><strong>Leader</strong> &mdash; At a time, only 1 broker can be the leader for a given partition, whi receive/serves the data for that partition</li>
<li><strong>Follower</strong> &mdash; Other brokers&nbsp; will synchronize data with the leader. Also called ISR</li>
<li><strong>Zookeeper</strong> &mdash; decides the Leader/Follower</li>
<li><strong>Leader Election</strong> &mdash; if the leader goes down, same partition on another broker becomes the leader</li>
</ul>
<p style="padding-left: 40px;"><img src="data/kafka/images/kafkaTheory/kafka_cluster.png" alt="" width="645" height="349" /></p>
<h2>Producer</h2>
<ul>
<li>Produces events to a topic</li>
<li>Knows which broker/partition to write to &mdash; leader</li>
<li>Can choose to send messages with a key or without a key</li>
</ul>
<p style="padding-left: 40px;"><img src="data/kafka/images/kafkaTheory/producer.png" alt="" width="643" height="189" /></p>
<h2>Consumer</h2>
<ul>
<li>Consumes events from a topic</li>
<li>Can read from more than 1 partition</li>
<li>Data is read in-order within a partition</li>
</ul>
<p style="padding-left: 40px;"><img src="data/kafka/images/kafkaTheory/consumer.png" alt="" width="627" height="196" /></p>
<h2>Consumer Groups</h2>
<ul>
<li>Consumers read data in consumer groups</li>
<li>If there are more consumers than partitions, some consumers will be inactive</li>
</ul>
<p style="padding-left: 40px;"><img src="data/kafka/images/kafkaTheory/consumer_group.png" alt="" width="622" height="282" /></p>


    */}.toString().slice(14,-3)
    },
];
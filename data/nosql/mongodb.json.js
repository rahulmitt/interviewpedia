var mongodb_que = [
    {
        id : 1,
        question : "Installation",
        tags : ["MongoDB installation"]
    },

    {
        id : 2,
        question : "Running MongoDB",
        tags : ["Running MongoDB"]
    },
];

var mongodb_ans = [
    {   /* Installation */
        id : 1,
        "text" : function(){/*
<pre>
docker --version
docker search mongo
docker pull mongo
docker images
</pre>
<p style="text-align: justify;"><img src="data\nosql\images\1.mongodb\1.installation.png" alt="" width="100%"/></p>
    */}.toString().slice(14,-3)
    },

    {   /* Running MongoDB */
        id : 2,
        "text" : function(){/*
<pre>
docker run -it -p 27017:27017 --name mongodb -d mongo
docker logs -f mongodb
docker ps
docker exec -it mongodb bash
mongo -host localhost -port 27017
show dbs
</pre>
<p style="text-align: justify;"><img src="data\nosql\images\1.mongodb\2.running mongodb.png" alt="" width="100%"/></p>
    */}.toString().slice(14,-3)
    },
];
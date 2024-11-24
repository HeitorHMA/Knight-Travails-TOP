const Queue = function(){
    this.items = [];
};
Queue.prototype.enqueue = function(obj){
    this.items.push(obj);
};
Queue.prototype.dequeue = function(obj){
    return this.items.shift(obj)
};
Queue.prototype.isEmpty = function(){
    return this.items.length === 0;
};

let doBFS = function(graph, source){
    var bfsInfo = [];
    for (var i = 0 ; i< graph.length ; i++){
        bfsInfo[i] = {
            distance : null,
            predecessor: null
        }}; 

    bfsInfo[source].distance = 0;

    var queue = new Queue();
    queue.enqueue(source);

    while(!queue.isEmpty()){
        let vertex = queue.dequeue();

    for(let i=0; i<graph[vertex].length;i++){
        var neighbour = graph[vertex][i];    
    if(bfsInfo[neighbour].distance === null){  
        bfsInfo[neighbour].distance = bfsInfo[vertex].distance +1;
        bfsInfo[neighbour].predecessor=vertex;
        queue.enqueue(neighbour)
    };
    }
    }
return bfsInfo;
};
var adjList = [
    [1],
    [0, 4, 5],
    [3, 4, 5],
    [2, 6],
    [1, 2],
    [1, 2, 6],
    [3, 5],
    []
    ];
var bfsInfo = doBFS(adjList, 0);
for (var i = 0; i < adjList.length; i++) {
    console.log("vertex " + i + ": distance = " + bfsInfo[i].distance + ", predecessor = " + bfsInfo[i].predecessor);
}
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

    for(let i=0; i<vertex.length;i++){
        var neighbour = graph[vertex][i];    
        }
    }
return bfsInfo;
}
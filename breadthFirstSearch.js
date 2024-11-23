const Queue = function(){
    this.items = [];
};
Queue.prototype.enqueue = function(obj){
    this.items.push(obj);
};
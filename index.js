function createBoard(size){
    let arr = [];
    for(i = 1; i <= size ; i++){
        for(j = 1; j <= size ; j++){
            arr.push([i,j])
        }
    };
    return arr
};
function validMove(squareX,squareY,size){
    if(squareX >= 1 && squareY >= 1 && squareX <= size && squareY <= size){
        return true
    }
    return false
};
function possibleMoves(squareX,squareY,size){
    const xMoves = [-2,+2,-2,+2,-1,+1,-1,+1];
    const yMoves = [+1,+1,-1,-1,+2,+2,-2,-2];
    let x;
    let y;
    let moves = [];
    for(i=1;i<=8;i++){
        x = squareX + xMoves[i];
        y = squareY + yMoves[i];
        if(validMove(x,y,size)){
            moves.push([x,y]);
        }
    };
    return moves
}
function showResults(vertex){
    let distance = vertex.distance;
    let queue = [];
    queue.push(vertex.predecessor);
    while(queue.length){
        if(vertex.predecessor !== null)
        queue.push(vertex.predecessor);
    }
}
function knightTravails(startPos,endPos,size){
    startPos ={
        x : startPos[0],
        y: startPos[1],
        distance: 0,
        predecessor: null
        };
    let queue = [];
    queue.push(startPos);
    while(queue.length){
        let vertex = queue.shift();
        let pMoves = possibleMoves(vertex.x,vertex.y,size);
        if(vertex.x === endPos[0] && vertex.y === endPos[1]){
            return showResults(vertex);
        }
         while(pMoves.length){
            let curPosition = pMoves.shift();
            curPosition ={
                x: curPosition[0],
                y: curPosition[1],
                distance: vertex.distance + 1,
                predecessor: vertex
            };
            queue.push(curPosition);
        }
    }
}

console.log(knightTravails([1,1],[5,4],8));

/*function breadthFirstArray(start,graph){
    let bfsarr = [];
    for(let i = 0;i < graph.length;i++){
        bfsarr[i] = {
            distance: null,
            predecessor:null
        };
    };
    bfsarr[start].distance = 0;
    return bfsarr;
};
function breadthFirstSearch(start,graph){
    let bfs = breadthFirstArray(start,graph);
    let queue = [];
    queue.push(start);
    while(queue.length){
        let index = queue.shift;
        for(i = 0;i<bfs[index]; i++){
            let adjency = bfs[index][i];
            if(bfs[adjency].distance = null){
                bfs[adjency].distance = bfs[index].distance + 1;
                bfs[adjency].predecessor = bfs[index];
            }
        }
    }
  
}
let adjr = createBoard(2)
console.log(adjr)

console.log(breadthFirstArray(2,adjr))*/
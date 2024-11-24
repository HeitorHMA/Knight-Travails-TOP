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
console.log(possibleMoves(1,2,8))
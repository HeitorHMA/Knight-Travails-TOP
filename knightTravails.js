class chessSquare {
    constructor(x,y,dist){
        this.x = x;
        this.y = y;
        this.dist = dist;
    };
};
function isInside(x,y,N) {
  if(x >= 1 && x <= N && y >= 1 && y <= N){
    return true
  }
  return false
};

function knightTravail(startPos,targetPos,N){
    let dx = [ -2, -1, 1, 2, -2, -1, 1, 2 ];
    let dy = [ -1, -2, -2, -1, 1, 2, 2, 1 ];

    let q = [];

    q.push(new chessSquare(startPos[0],startPos[1],0));

    let t;
    let x , y ;
    let visit = new Array(N+1);

    for(let i = 1 ; i <= N; i++){
        visit[i] = new Array(N + 1);
        for( let j = 1 ; j <= N; j++){
            visit[i][j] = false;  
    }}
    visit[startPos[0]][startPos[1]] = true;
    while (q.length != 0) {
        t = q.shift();
        if(t.x == targetPos[0] && t.y == targetPos[1]){
            return t.dist
        }
    for ( let i = 0 ; i < 8 ; i++){
        x = t.x + dx[i]
        y = t.y + dy[i]

        if(isInside(x,y,N) && !visit[x][y]){
            visit[x][y] = true;
            q.push(new chessSquare(x,y,t.dist + 1));
        }
    }
    }
    return Number.MAX_VALUE
};
let N = 8;
let knightPos=[1,1];
let targetPos=[8,3];
console.log(
           knightTravail(knightPos, targetPos, N));

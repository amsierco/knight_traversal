import { board } from "./board"
import { moveKnight } from "./board";

// Sleep utility
function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

const knightMoves = ( async (start, end) => {

    // Initial position
    moveKnight(start, start); 

    let pathStack = board.bfs(start, end);
    let path = "";
    let size = pathStack.size;
    let currentPos = start;
    
    for(let i=0; i<size; i++){
        let nextPos = pathStack.pop();
        moveKnight(currentPos, nextPos);
        currentPos = nextPos;
        if(i+1<size){
            path += nextPos + " -> ";
        } else {
            path += nextPos;
        }
        await sleep(100);
    }
    console.log(path);


})(12,77);
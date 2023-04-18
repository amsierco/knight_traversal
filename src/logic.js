import { board } from "./board"
import { moveKnight } from "./board";

// Sleep utility
function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

const placeDot = ((loc) => {
    let dot = document.createElement('div');
      dot.innerHTML = '<svg height="100" width="100"><circle cx="50" cy="50" r="20" stroke="black" stroke-width="3" fill="black"/></svg>';
    document.getElementById(`${loc}`).appendChild(dot);
    });

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
        placeDot(currentPos);
        currentPos = nextPos;
        if(i+1<size){
            path += nextPos + " -> ";
        } else {
            path += nextPos;
        }
        await sleep(100);
    }
    console.log(path);


})(0,77);
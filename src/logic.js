import { board } from "./board"

const knightMoves = ((start, end) => {

    let pathStack = board.bfs(start, end);
    //console.log(pathStack.stack); // TEMP
    let path = "";
    let size = pathStack.size;
    
    for(let i=0; i<size; i++){
        if(i+1<size){
            path += pathStack.pop() + " -> ";
        } else {
            path += pathStack.pop();
        }
    }
    console.log(path);

})(1,54);
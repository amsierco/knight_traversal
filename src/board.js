import { Graph } from "./modules/Graph";

function getKnight() {
    let knight = document.createElement('div');
    knight.setAttribute('class', 'knight');
    knight.innerHTML = '<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 211.35 211.35" xml:space="preserve" stroke="#000000" stroke-width="0.00211346"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="9.721916"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M189.229,119.315c-22.893,12.354-25.097-10.119-25.097-10.119c-18.938-2.199-33.018-23.345-33.018-23.345 c-25.559,13.225-11.325,50.463-0.302,64.767c1.059,1.359,1.921,2.784,2.713,4.244h24.128v25.215h24.051v31.269H16.269v-31.269 h24.048v-25.215h5.58c-20.227-27.023-14.732-52.422-8.588-69.333c7.578-20.851,17.83-32.285,32.781-44.449 c22.195-18.099,63.218-20.38,63.218-20.38c0.272-1.537,1.413-3.322,3.032-5.175c-4.917,0.163-10.905,0.564-17.738,1.439 c-4.687,0.886-9.862,1.407-15.119,2.967c-5.358,1.144-10.805,3.002-16.373,5.157c-5.574,2.057-11.035,5-16.441,8.086 c-5.125,3.546-10.571,6.877-14.877,11.562c-4.95,4.043-8.55,9.276-12.256,14.301c-3.854,4.915-5.754,10.914-8.63,16.113 c-2.154,5.521-3.36,11.209-4.977,16.408c-1.457,5.249-1.434,10.521-2.161,15.214c-0.618,4.74-1.102,9.091-0.756,12.992 c0.121,3.877,0.225,7.258,0.304,10.036c0.157,5.58,0.254,8.76,0.254,8.76l-0.757,0.083c0,0-0.674-3.121-1.551-8.736 c-0.411-2.837-0.908-6.254-1.487-10.179c-0.83-3.948-0.866-8.452-0.502-13.382c0.399-4.924,0.024-10.37,1.15-16.006 c1.282-5.58,2.092-11.73,4.356-17.65c2.899-5.677,4.85-12.141,8.86-17.582c3.857-5.568,7.669-11.372,12.942-15.876 c4.85-4.986,10.799-8.45,16.414-12.129c5.866-3.154,11.78-6.121,17.711-8.166c5.902-2.214,11.801-3.65,17.449-4.472 c5.574-1.218,10.961-1.386,15.85-1.962c8.311-0.388,15.268,0,20.664,0.582C145.466,6.585,156.2,0,156.2,0 c-2.205,2.185-3.085,14.092-3.085,14.092c2.198-3.96,9.244-7.936,9.244-7.936c-3.96,9.224,0,29.046,0,29.046 c11.455,11.47,24.21,51.083,24.21,51.083l4.848,7.045C197.6,102.174,195.329,116.028,189.229,119.315z"></path> </g> </g></svg>';
    return knight;
};

function getValidLoc(row, col){
    let potLoc = [
        [row+2, col-1],
        [row+2, col+1],
        [row-2, col-1],
        [row-2, col+1],
        [row+1, col-2],
        [row-1, col-2],
        [row+1, col+2],
        [row-1, col+2]
    ];
    let validLoc = [];

    for(let loc of potLoc){
        if(!(loc[0] < 0) && !(loc[0] > 7) && !(loc[1] < 0) && !(loc[1] > 7)){
            let valid = (loc[0]*10)+loc[1];
            validLoc.push(valid);
        }
    }

    return validLoc;
}

const createBoard = (() => {
    let boardDOM = document.createElement('div');
    boardDOM.setAttribute('class', 'board');
    let board = Graph();
    let start = false;
    let startID = null;
    let endID = null;

    function tileSelectionManager(tile){
        if(start == false){
            start = true;
            startID = tile;
        } else {
            endID = tile;
            knightMoves(startID, endID);
            start = false;
            startID = null;
            endID = null;
        }
    }

    // DOM & Vertex creation
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            let boardTile = document.createElement('div');

            // '00' ID Error Fix
            if(i==0){
                boardTile.setAttribute('id', `${j}`); //Column
            } else {
                boardTile.setAttribute('id', `${i}${j}`); //RowColumn
            }

            board.addVertex((i*10)+j); //Makes vertex ij

            if(i%2 != 0 && j%2 !=0){
                boardTile.setAttribute('class', 'black');
            } else if (i%2 == 0 && j%2 == 0){
                boardTile.setAttribute('class', 'black');
            } else {
                boardTile.setAttribute('class', 'white');
            }
            boardDOM.append(boardTile);   
        }
    }
    document.body.appendChild(boardDOM);

    // Edge creation
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            let validLoc = getValidLoc(i, j);
            for(let loc of validLoc){
                board.addBiEdge(((i*10)+j), loc);
            }
        }
    }
    // Selection event listener
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            document.getElementById(`${((i*10)+j)}`).addEventListener('click', () =>{
                tileSelectionManager(((i*10)+j));
            });
        }
    }
    return board;
});
const board = createBoard();

const moveKnight = (current=0, next=0) => {
    document.getElementById(`${current}`).innerHTML = "";
    let nextDiv = document.getElementById(`${next}`);
    nextDiv.appendChild(getKnight());
}



// Sleep utility
function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

// Place path labels
const placeDot = ((loc, step) => {
    let dot = document.createElement('div');
    //dot.innerHTML = '<svg height="100" width="100"><circle cx="50" cy="50" r="20" stroke="black" stroke-width="3" fill="black"/></svg>';
    dot.innerHTML = `<text>${step}</text>`;
    document.getElementById(`${loc}`).appendChild(dot);
});

async function knightMoves(start, end){

    // Clear board
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            document.getElementById(`${((i*10)+j)}`).innerHTML = "";
        }
    }

    // Initial position
    moveKnight(start, start); 

    let pathStack = board.bfs(start, end);
    let path = "";
    let size = pathStack.size;
    let currentPos = start;

    // Display for same position
    if(size == 1){
        console.log(pathStack.peek() + " -> " + pathStack.pop());
        return;
    }

    for(let i=0; i<size; i++){
        let nextPos = pathStack.pop();
        moveKnight(currentPos, nextPos);
        placeDot(currentPos, i);
        currentPos = nextPos;
        if(i+1<size){
            path += nextPos + " -> ";
        } else {
            path += nextPos;
        }
        await sleep(100);
    }
    console.log(path);
}

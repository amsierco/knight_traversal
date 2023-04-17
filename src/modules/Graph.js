import { Queue } from "./Queue";
import { Stack } from "./Stack";

export const Graph = () => {
    let numOfVert = 0;
    let AdjList = new Map();

    let VisitedList = new Map(); //TEMP Repetition concerns

    const addVertex = (v) => {
        AdjList.set(v, []);
        VisitedList.set(v, false);
        numOfVert++;
    }

    const addBiEdge = (v, w) => {
        AdjList.get(v).push(w);
        // AdjList.get(w).push(v);
    }

    const printGraph = () => {
        let vertices = AdjList.keys();

        for(let v of vertices){
            let values = AdjList.get(v);
            let connections = '';

            for(let conc of values){
                connections += conc + ', ';
            }
            connections += 'null';

            console.log(v + ' -> ' + connections);
        }
    }

    const bfs = (start, end) => {
        // Stores visited nodes
        VisitedList.set(start, true);

        // Unvisited queue
        let unvisited = Queue();
        unvisited.enqueue(start);

        // Visited path stack
        let visited = Stack();

        // Loop until all nodes are visited
        while(unvisited.isEmpty() != true){
            let current = unvisited.peek();
            unvisited.dequeue();
            visited.push(current);

            // Enqueue neighboring nodes
            for(let neighbor of AdjList.get(current)){
                // Target vertex found
                if(neighbor == end){

                    // WORK ON THIS BACKTRACKING

                    let path = Stack();
                    path.push(end); // Target Vertex
                    //let valid = visited.pop(); // Immediate Target Neighbor
                    let valid = end;
                    //path.push(valid);

                    while(visited.isEmpty() != true){
                        let validNeighbors = AdjList.get(valid);
                        for(let vn of validNeighbors){
                            if(vn == visited.peek()){
                                valid = visited.pop();
                                path.push(valid);
                                //break;
                            } else {
                                let temp = visited.pop();
                                //console.log(temp);
                            }
                        }
                    }

                    return path;
                }

                if(VisitedList.get(neighbor) != true){
                    unvisited.enqueue(neighbor);
                    VisitedList.set(neighbor, true);
                }
            }
        }
        alert('Vertex Not Found!');
    }

    return {
        get numOfVert(){return numOfVert;},
        addVertex,
        addBiEdge,
        printGraph,
        bfs
    }
};

// GRAPH TESTING
/*
let test = Graph();
for (let i = 0; i < 6; i++) {
    test.addVertex(i);
}
test.addBiEdge(0,1);
test.addBiEdge(1,2);
test.addBiEdge(1,3);
test.addBiEdge(2,3);
test.addBiEdge(3,4);
test.addBiEdge(4,5);
test.addBiEdge(4,0);
test.addBiEdge(5,0);
test.printGraph();
console.log(test.numOfVert);
*/
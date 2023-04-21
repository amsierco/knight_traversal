import { Queue } from "./Queue";
import { Stack } from "./Stack";

export const Graph = () => {
    let numOfVert = 0;
    let AdjList = new Map();

    let VisitedList = new Map();

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
        // Same spot
        if(start == end){
            let path = Stack();
            path.push(end);
            return path;
        }

        // Reset for multiple bfs
        for(let key of VisitedList.keys()){
            VisitedList.set(key, false);
        }

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
                    let path = Stack();
                    path.push(end); // Target Vertex
                    let valid = end;
                    while(visited.isEmpty() != true){
                        let validNeighbors = AdjList.get(valid);
                        for(let vn of validNeighbors){
                            if(vn == visited.peek()){
                                valid = visited.peek();
                                path.push(valid);
                            }
                        }
                        visited.pop()
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

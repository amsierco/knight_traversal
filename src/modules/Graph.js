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
        //AdjList.get(w).push(v);
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
        VisitedList.get(start).set(true);
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
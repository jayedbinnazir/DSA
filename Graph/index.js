console.log("index.js");

let adjacencyMatrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

console.log("adjacency Matrix-->", adjacencyMatrix);

console.log(adjacencyMatrix[0][1]); // A(0) ---> B(1)
console.log(adjacencyMatrix[1][0]); // B(1) --> A(0)
console.log(adjacencyMatrix[2][0]); // C(2) --> A(0)

let adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

console.log(adjacencyList["A"]);
console.log(adjacencyList["B"]);
console.log(adjacencyList["C"]);

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
  removeEdge(vertex1, vertex2) {
    if (this.hasEdge(vertex1, vertex2)) {
      this.adjacencyList[vertex1].delete(vertex2);
      this.adjacencyList[vertex2].delete(vertex1);
    } else {
      return;
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacencyVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex];
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "-->" + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();
console.log(graph.hasEdge("A", "C"));
graph.removeEdge("B", "C");
graph.display();
graph.removeVertex("B");

graph.display();

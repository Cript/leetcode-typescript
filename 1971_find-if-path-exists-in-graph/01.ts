export function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const graph = buildGraph(edges)
    const visited: Set<number> = new Set()
    return hasPath(graph, source, destination, visited)
}

function hasPath(graph: GraphType, source: number, destination: number, visited: Set<number>): boolean {
    if (source === destination) {
        return true
    }

    if (visited.has(source)) {
        return false
    }

    visited.add(source)

    for (const neighbor of graph[source]) {
        if(hasPath(graph, neighbor, destination, visited)) {
            return true
        }
    }

    return false
}

function buildGraph(edges: number[][]): GraphType {
    const graph: GraphType = {}

    function addEdge(source: number, destination: number): void {
        if (!(source in graph)) {
            graph[source] = []
        }

        graph[source].push(destination)
    }

    edges.forEach((edge: number[]) => {
        const [node1, node2] = edge

        addEdge(node1, node2)
        addEdge(node2, node1)
    })

    return graph
}

type GraphType = {
    [node: number]: number[]
}
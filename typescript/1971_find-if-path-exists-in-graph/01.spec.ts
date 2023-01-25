import {expect} from "chai";
import {validPath} from "./01";

describe('Find if Path Exists in Graph', () => {
    const cases: {
        n: number,
        edges: number[][],
        source: number,
        destination: number,
        result: boolean
    }[] = [
        { n: 3, edges: [[0,1],[1,2],[2,0]], source: 0, destination: 2, result: true },
        { n: 6, edges: [[0,1],[0,2],[3,5],[5,4],[4,3]], source: 0, destination: 5, result: false },
        { n: 10, edges: [[4,3],[1,4],[4,8],[1,7],[6,4],[4,2],[7,4],[4,0],[0,9],[5,4]], source: 5, destination: 9, result: true },
    ]

    cases.forEach(({n, edges, source, destination, result}) => {
        describe(`When called with ${edges.join('|')}, ${source} and ${destination}`, () => {
            it(`should return ${result}`, () => {
                // expect(sortedSquares(nums)).eqls(result)
                expect(validPath(n, edges, source, destination)).equals(result)
            })
        })
    })
})

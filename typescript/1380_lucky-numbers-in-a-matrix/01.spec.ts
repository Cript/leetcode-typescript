import {expect} from "chai";
import luckyNumbers from "./01";

//1380. Lucky Numbers in a Matrix

describe('Lucky Numbers in a Matrix', () => {
    const cases: {
        matrix: number[][],
        result: number[],
    }[] = [
        { matrix: [[3,7,8],[9,11,13],[15,16,17]], result: [15] },
        { matrix: [[1,10,4,2],[9,3,8,7],[15,16,17,12]], result: [12] },
        { matrix: [[7,8],[1,2]], result: [7] },
    ]

    cases.forEach(({matrix, result}) => {
        describe(`When called with ${matrix.join('|')}`, () => {
            it(`should return ${result}`, () => {
                expect(luckyNumbers(matrix)).eqls(result)
            })
        })
    })
})

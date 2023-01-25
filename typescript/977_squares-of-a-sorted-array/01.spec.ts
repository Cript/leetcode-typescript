import {sortedSquares, sortedSquares2} from "./01";
import {expect} from "chai";

describe('Squares of a Sorted Array', () => {
    const cases: {
        nums: number[],
        result: number[]
    }[] = [
        { nums: [2], result: [4] },
        { nums: [-2, 2], result: [4, 4] },
        { nums: [-5, -3, -2, -1], result: [1, 4, 9, 25] },
        { nums: [-5, -3, -2, -1, 1], result: [1, 1, 4, 9, 25] },
        { nums: [-4, -1, 0, 3, 10], result: [0, 1, 9, 16, 100] },
        { nums: [-7, -3, 2, 3, 11], result: [4, 9, 9, 49, 121] },
        { nums: [1, 3, 5, 7, 11], result: [1, 9, 25, 49, 121] },
        { nums: [-1, 1, 3, 5, 7, 11], result: [1, 1, 9, 25, 49, 121] },
    ]

    cases.forEach(({nums, result}) => {
        describe(`When called with ${nums}`, () => {
            it(`should return ${result}`, () => {
                // expect(sortedSquares(nums)).eqls(result)
                expect(sortedSquares2(nums)).eqls(result)
            })
        })
    })
})

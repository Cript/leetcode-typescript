import {expect} from "chai";
import {pivotIndex} from "./01";

describe('Find Pivot Index', () => {
    const cases: {
        nums: number[],
        result: number
    }[] = [
        {nums: [1, 7, 3, 6, 5, 6], result: 3},
        {nums: [1, 2, 3], result: -1},
        {nums: [2, 1, -1], result: 0},
    ]

    describe(`runningSum`, function() {
        cases.forEach(({nums, result}) => {
            describe(`When called with ${nums}`, function() {
                it(`should return ${result}`, function () {
                    expect(pivotIndex(nums)).equals(result)
                })
            })
        })
    })
})

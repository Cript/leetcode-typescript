import {expect} from "chai";
import {runningSum} from "./01";
import {runningSum2} from "./02";

describe('Running Sum of 1d Array', () => {
    const cases: {
        nums: number[],
        result: number[]
    }[] = [
        {nums: [1, 1, 1, 1, 1], result: [1, 2, 3, 4, 5]},
        {nums: [1, 2, 3, 4], result: [1, 3, 6, 10]},
        {nums: [3, 1, 2, 10, 1], result: [3, 4, 6, 16, 17]},
    ]

    describe(`runningSum`, function() {
        cases.forEach(({nums, result}) => {
            describe(`When called with ${nums}`, function() {
                it(`should return ${result}`, function () {
                    expect(runningSum(nums)).eqls(result)
                })
            })
        })
    })

    describe(`runningSum2`, function() {
        cases.forEach(({nums, result}) => {
            describe(`When called with ${nums}`, function() {
                it(`should return ${result}`, function () {
                    expect(runningSum2(nums)).eqls(result)
                })
            })
        })
    })
})

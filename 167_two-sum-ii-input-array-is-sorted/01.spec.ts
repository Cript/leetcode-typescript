import {expect} from "chai";
import {twoSum} from "./01";

describe('Two Sum II - Input Array Is Sorted', () => {
    const cases: {
        nums: number[],
        target: number,
        result: number[],
    }[] = [
        { nums: [2,7,11,15], target: 9, result: [1,2] },
        { nums: [2,3,4], target: 6, result: [1,3] },
        { nums: [-1,0], target: -1, result: [1,2] },
        { nums: [5,25,75], target: 100, result: [2,3] },
    ]

    describe(`twoSum`, () => {
        cases.forEach(({nums, target, result}) => {
            describe(`When called with ${nums} and ${target}`, () => {
                it(`should return ${result}`, () => {
                    expect(twoSum(nums, target)).eqls(result)
                })
            })
        })
    })

    describe(`twoSum2`, () => {
        cases.forEach(({nums, target, result}) => {
            describe(`When called with ${nums} and ${target}`, () => {
                it(`should return ${result}`, () => {
                    expect(twoSum(nums, target)).eqls(result)
                })
            })
        })
    })
})
